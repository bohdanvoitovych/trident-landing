import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { routing } from '@/i18n/routing'
import { getCaseBySlug, getCaseLocales, getCaseSlugs, getCases, type CaseData } from '@/data/cases'
import { getIndustries } from '@/data/industries'
import { getServices } from '@/data/services'
import { getTechnologies } from '@/data/technologies'
import { getLocations } from '@/data/locations'
import { getProjects } from '@/data/projects'
import sitemap from '@/app/sitemap'
import nextConfig from '../../../next.config.mjs'
import { MERGED_CASES, buildMergedCaseRedirects } from '../redirects/removed-slugs.mjs'
import pdfNumbers from './fixtures/pdf-case-numbers.json'
import oldHashes from './fixtures/old-case-hashes.json'

const ROOT = path.resolve(__dirname, '../../..')

// The six PDF case studies (P9), in homepage order, and how Yevhen labelled their figures.
const PDF_CASES: Record<string, CaseData['evidence']> = {
  'post-acute-clinic-network': undefined,
  'clinic-voice-documentation': undefined,
  'warranty-control-component-maker': 'measured',
  'fiduciary-mail-and-receipts': 'modelled',
  'building-materials-order-to-load': 'modelled',
  'letting-agency-enquiry-to-viewing': 'modelled',
}
const PDF_SLUGS = Object.keys(PDF_CASES)

const OLD_CASES = [
  'kleap-ai-builder',
  'zenit-auto-b2b',
  '8move-driver',
  'tdsbot-iot',
  'lapochette',
  'iam-trade',
  'arenawave',
  'go-valais',
]

const LONG_FIELDS = ['note', 'sections', 'table', 'afterTable', 'nextIntro', 'next', 'elsewhereIntro', 'elsewhere', 'elsewhereOutro'] as const

/** Every string in a value, depth first. */
function strings(v: unknown, skip: ReadonlySet<string> = new Set()): string[] {
  if (typeof v === 'string') return [v]
  if (Array.isArray(v)) return v.flatMap((x) => strings(x, skip))
  if (v && typeof v === 'object')
    return Object.entries(v).flatMap(([k, x]) => (skip.has(k) ? [] : strings(x, skip)))
  return []
}

/** Digit groups of a text, with thousands separators (space, ', ’, comma) removed: "CHF 220'000" → 220000. */
function numbers(text: string): string[] {
  let s = text
  let prev
  do {
    prev = s
    s = s.replace(/(\d)[ '’,  ](?=\d{3}(?!\d))/g, '$1')
  } while (s !== prev)
  return s.match(/\d+(?:\.\d+)?/g) ?? []
}

/** The text a reader sees in the body of a case, without ids and links. Meta is checked separately. */
const bodyStrings = (c: CaseData) =>
  strings(c, new Set(['slug', 'services', 'techStack', 'relatedCases', 'evidence', 'meta', 'image']))

const stable = (v: unknown): string =>
  Array.isArray(v)
    ? `[${v.map(stable).join(',')}]`
    : v && typeof v === 'object'
      ? `{${Object.keys(v)
          .sort()
          .map((k) => JSON.stringify(k) + ':' + stable((v as Record<string, unknown>)[k]))
          .join(',')}}`
      : JSON.stringify(v)

function filled(value: unknown, where: string) {
  expect(typeof value, where).toBe('string')
  expect((value as string).trim().length, where).toBeGreaterThan(0)
}

describe('PDF case studies (P9)', () => {
  it('are the six PDF cases, listed first in homepage order', () => {
    expect(getCaseSlugs().slice(0, 6)).toEqual(PDF_SLUGS)
  })

  it('every PDF case is written in all four locales', () => {
    for (const slug of PDF_SLUGS) expect(getCaseLocales(slug), slug).toEqual([...routing.locales])
  })

  it('carries the evidence label from the source', () => {
    for (const slug of PDF_SLUGS) expect(getCaseBySlug(slug, 'en')!.evidence, slug).toBe(PDF_CASES[slug])
  })

  it('no required field is empty, and every translation mirrors the English structure', () => {
    for (const slug of PDF_SLUGS) {
      const en = getCaseBySlug(slug, 'en')!
      for (const locale of routing.locales) {
        const c = getCaseBySlug(slug, locale)!
        const at = `${slug}/${locale}`
        for (const [k, v] of Object.entries({
          client: c.client,
          industry: c.industry,
          title: c.hero.title,
          tagline: c.hero.tagline,
          note: c.note,
          metaTitle: c.meta.title,
          metaDescription: c.meta.description,
          tableTitle: c.table?.title,
          before: c.table?.beforeLabel,
          after: c.table?.afterLabel,
        }))
          filled(v, `${at} ${k}`)
        expect(c.results.length, `${at} results`).toBe(3)
        for (const r of c.results) {
          filled(r.metric, `${at} result metric`)
          filled(r.value, `${at} result value`)
        }
        expect(c.sections!.length, `${at} sections`).toBe(en.sections!.length)
        c.sections!.forEach((s, i) => {
          const e = en.sections![i]
          filled(s.title, `${at} section ${i} title`)
          expect(s.paragraphs?.length, `${at} section ${i} paragraphs`).toBe(e.paragraphs?.length)
          expect(s.items?.length, `${at} section ${i} items`).toBe(e.items?.length)
          expect(s.closing?.length, `${at} section ${i} closing`).toBe(e.closing?.length)
          expect(s.paragraphs?.length || s.items?.length, `${at} section ${i} has a body`).toBeTruthy()
        })
        expect(c.table!.rows.length, `${at} table rows`).toBe(en.table!.rows.length)
        for (const row of c.table!.rows) for (const v of Object.values(row)) filled(v, `${at} table cell`)
        expect(c.next?.length, `${at} next`).toBe(en.next?.length)
        expect(c.next!.length, `${at} next`).toBeGreaterThan(0)
        expect(c.elsewhere?.length, `${at} elsewhere`).toBe(en.elsewhere?.length)
        expect(c.afterTable?.length, `${at} afterTable`).toBe(en.afterTable?.length)
        for (const k of ['nextIntro', 'elsewhereIntro', 'elsewhereOutro'] as const)
          expect(c[k] === undefined, `${at} ${k} presence`).toBe(en[k] === undefined)
        for (const s of bodyStrings(c)) filled(s, `${at} string`)
        if (locale !== 'en') {
          expect(c.hero.tagline, `${at} tagline is translated`).not.toBe(en.hero.tagline)
          expect(c.sections![0].paragraphs![0], `${at} body is translated`).not.toBe(en.sections![0].paragraphs![0])
          expect(c.client, `${at} client is translated`).not.toBe(en.client)
        }
      }
    }
  })

  it('meta descriptions fit in 160 characters', () => {
    for (const slug of PDF_SLUGS)
      for (const locale of routing.locales) {
        const d = getCaseBySlug(slug, locale)!.meta.description
        expect(d.length, `${slug}/${locale}: ${d}`).toBeLessThanOrEqual(160)
      }
  })

  it('has no em dash, no German ß and none of the banned AI vocabulary', () => {
    const banned =
      /\b(crucial|pivotal|delve|underscore|landscape|tapestry|testament|vibrant|nestled|groundbreaking|showcas\w*|foster\w*|intricate|garner|additionally|enhance\w*|cultivate|leverag\w*|streamlin\w*|seamless\w*|serves as|stands as|boasts?)\b/i
    for (const slug of PDF_SLUGS)
      for (const locale of routing.locales) {
        for (const s of strings(getCaseBySlug(slug, locale)!)) {
          expect(s, `${slug}/${locale}`).not.toContain('—')
          if (locale === 'de') expect(s, `${slug}/de`).not.toContain('ß')
          if (locale === 'en') expect(s, `${slug}/en`).not.toMatch(banned)
        }
      }
  })

  it('every locale states exactly the figures of the source (digit groups from origin/master)', () => {
    const fixture = pdfNumbers as Record<string, string[]>
    expect(Object.keys(fixture).sort()).toEqual([...PDF_SLUGS].sort())
    for (const slug of PDF_SLUGS)
      for (const locale of routing.locales) {
        const found = [...new Set(bodyStrings(getCaseBySlug(slug, locale)!).flatMap(numbers))]
        expect(found.sort(), `${slug}/${locale}`).toEqual([...fixture[slug]].sort())
      }
  })

  it('numbers in meta also come from the body', () => {
    for (const slug of PDF_SLUGS)
      for (const locale of routing.locales) {
        const c = getCaseBySlug(slug, locale)!
        const body = new Set(bodyStrings(c).flatMap(numbers))
        for (const n of numbers(`${c.meta.title} ${c.meta.description}`)) expect(body.has(n), `${slug}/${locale} meta ${n}`).toBe(true)
      }
  })
})

describe('existing case studies', () => {
  it('are the nine originals minus the merged Aida case', () => {
    expect(getCaseSlugs().slice(6)).toEqual(OLD_CASES)
  })

  it('carry none of the long-form fields and keep challenge, approach and solution', () => {
    for (const slug of OLD_CASES)
      for (const locale of routing.locales) {
        const c = getCaseBySlug(slug, locale)!
        for (const k of LONG_FIELDS) expect(c[k], `${slug}/${locale} ${k}`).toBeUndefined()
        expect(c.evidence, `${slug} evidence`).toBeUndefined()
        filled(c.challenge, `${slug}/${locale} challenge`)
        filled(c.approach, `${slug}/${locale} approach`)
        filled(c.solution, `${slug}/${locale} solution`)
        expect(c.techStack.length, `${slug} techStack`).toBeGreaterThan(0)
      }
  })

  it('render from the same data as before the port (hash of everything except relatedCases)', () => {
    const now: Record<string, string> = {}
    for (const slug of OLD_CASES)
      for (const locale of routing.locales) {
        const c: Partial<CaseData> = { ...getCaseBySlug(slug, locale)! }
        delete c.relatedCases
        now[`${slug}/${locale}`] = createHash('sha256').update(stable(c)).digest('hex').slice(0, 16)
      }
    expect(now).toEqual(oldHashes)
  })
})

describe('case references', () => {
  const cases = new Set(getCaseSlugs())

  it('every relatedCases and caseSlug points at an existing case', () => {
    const refs: [string, string][] = [
      ...getCases('en').flatMap((c) => c.relatedCases.map((r) => [`case ${c.slug}`, r] as [string, string])),
      ...getIndustries('en').flatMap((i) => i.relatedCases.map((r) => [`industry ${i.slug}`, r] as [string, string])),
      ...getServices('en').flatMap((s) => s.relatedCases.map((r) => [`service ${s.slug}`, r] as [string, string])),
      ...getTechnologies('en').flatMap((t) => t.relatedCases.map((r) => [`technology ${t.slug}`, r] as [string, string])),
      ...getLocations('en').flatMap((l) => l.relatedCases.map((r) => [`location ${l.slug}`, r] as [string, string])),
      ...getProjects('en').flatMap((p) => (p.caseSlug ? [[`project ${p.slug}`, p.caseSlug] as [string, string]] : [])),
    ]
    expect(refs.filter(([, r]) => !cases.has(r)).map(([from, r]) => `${from} -> ${r}`)).toEqual([])
  })

  it('wires the PDF cases to their industries and services', () => {
    const ind = (slug: string) => getIndustries('en').find((i) => i.slug === slug)!.relatedCases
    const svc = (slug: string) => getServices('en').find((s) => s.slug === slug)!.relatedCases
    expect(ind('healthcare')).toEqual(['post-acute-clinic-network', 'clinic-voice-documentation'])
    expect(ind('trade-and-building-materials')).toContain('building-materials-order-to-load')
    expect(ind('proptech')).toContain('letting-agency-enquiry-to-viewing')
    expect(ind('professional-services')).toContain('fiduciary-mail-and-receipts')
    expect(ind('manufacturing')).toEqual(['warranty-control-component-maker'])
    expect(svc('ai-services')).toEqual(
      expect.arrayContaining(['post-acute-clinic-network', 'clinic-voice-documentation', 'fiduciary-mail-and-receipts']),
    )
    expect(svc('logistics-and-operations-platforms')).toContain('building-materials-order-to-load')
    expect(svc('embedded-and-iot')).toContain('warranty-control-component-maker')
  })

  it('every /cases/<slug> link in source and messages exists (image paths aside)', () => {
    const files: string[] = []
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const p = path.join(dir, name)
        if (statSync(p).isDirectory()) walk(p)
        else if (/\.(tsx?|json)$/.test(name) && !name.endsWith('.test.ts')) files.push(p)
      }
    }
    walk(path.join(ROOT, 'src'))
    walk(path.join(ROOT, 'messages'))
    const bad: string[] = []
    for (const file of files) {
      for (const m of readFileSync(file, 'utf8').matchAll(/(?<!\/images)\/cases\/([a-z0-9][a-z0-9-]*)/g))
        if (!cases.has(m[1])) bad.push(`${path.relative(ROOT, file)}: ${m[0]}`)
    }
    expect(bad).toEqual([])
  })

  it('the homepage case cards each link to their own case page', () => {
    const src = readFileSync(path.join(ROOT, 'src/components/organisms/home/Cases.tsx'), 'utf8')
    expect(src).not.toMatch(/href="\/cases"/)
    const slugs = [...src.matchAll(/slug: '([a-z0-9-]+)'/g)].map((m) => m[1])
    expect(slugs).toEqual(PDF_SLUGS)
  })
})

describe('Aida merged into post-acute-clinic-network (D3)', () => {
  const PREFIXES = ['', '/de', '/fr', '/it']
  const mine = buildMergedCaseRedirects() as { source: string; destination: string; permanent: boolean }[]

  it('the Aida case is gone and its target exists', () => {
    expect(MERGED_CASES).toEqual({ 'aida-medicine': 'post-acute-clinic-network' })
    expect(getCaseSlugs()).not.toContain('aida-medicine')
    expect(getCaseSlugs()).toContain('post-acute-clinic-network')
  })

  it('301s every locale and trailing-slash form to the same locale', () => {
    expect(mine).toHaveLength(PREFIXES.length * 2)
    for (const prefix of PREFIXES)
      for (const tail of ['', '/'])
        expect(mine).toContainEqual({
          source: `${prefix}/cases/aida-medicine${tail}`,
          destination: `${prefix}/cases/post-acute-clinic-network`,
          permanent: true,
        })
  })

  it('next.config includes them', async () => {
    const all = (await nextConfig.redirects!()) as typeof mine
    for (const r of mine) expect(all).toContainEqual(r)
  })
})

describe('sitemap', () => {
  const paths = sitemap().map((e) => new URL(e.url).pathname)

  it('lists every case in each of its locales, including the six PDF cases in all four', () => {
    for (const slug of getCaseSlugs())
      for (const locale of getCaseLocales(slug)) {
        const p = locale === 'en' ? `/cases/${slug}` : `/${locale}/cases/${slug}`
        expect(paths, p).toContain(p)
      }
    for (const slug of PDF_SLUGS) expect(paths.filter((p) => p.endsWith(`/cases/${slug}`)), slug).toHaveLength(4)
  })

  it('does not list the merged Aida case', () => {
    expect(paths.filter((p) => p.includes('aida-medicine'))).toEqual([])
  })
})
