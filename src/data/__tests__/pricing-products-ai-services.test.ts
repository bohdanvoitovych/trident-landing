import { createHash } from 'node:crypto'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { routing } from '@/i18n/routing'
import { getServiceBySlug, getServiceLocales, getServiceSlugs } from '@/data/services'
import { AI_SERVICES_DETAIL } from '@/data/ai-services'
import nextConfig from '../../../next.config.mjs'
import fixture from './fixtures/pdf-pricing-ai-numbers.json'
import en from '../../../messages/en.json'
import de from '../../../messages/de.json'
import fr from '../../../messages/fr.json'
import it_ from '../../../messages/it.json'

const ROOT = path.resolve(__dirname, '../../..')
const MESSAGES: Record<string, typeof en> = { en, de, fr, it: it_ }
const LOCALES = routing.locales

/** Every string in a value, depth first. */
function strings(v: unknown, skip: ReadonlySet<string> = new Set()): string[] {
  if (typeof v === 'string') return [v]
  if (Array.isArray(v)) return v.flatMap((x) => strings(x, skip))
  if (v && typeof v === 'object')
    return Object.entries(v).flatMap(([k, x]) => (skip.has(k) ? [] : strings(x, skip)))
  return []
}

/** Digit groups of a text, with thousands separators (space, ', ’, comma) removed: "CHF 8'000" → 8000. */
function numbers(text: string): string[] {
  let s = text
  let prev
  do {
    prev = s
    s = s.replace(/(\d)[ '’,  ](?=\d{3}(?!\d))/g, '$1')
  } while (s !== prev)
  return s.match(/\d+(?:\.\d+)?/g) ?? []
}

const digitSet = (texts: string[]) => [...new Set(texts.flatMap(numbers))].sort()
const dropLinkTargets = (s: string) => s.replace(/\]\([^)]*\)/g, ']')

/** Object shape with leaves replaced by their type; arrays keep their length. */
function shape(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shape)
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, shape(x)]))
  return typeof v
}

const stable = (v: unknown): string =>
  Array.isArray(v)
    ? `[${v.map(stable).join(',')}]`
    : v && typeof v === 'object'
      ? `{${Object.keys(v)
          .sort()
          .map((k) => JSON.stringify(k) + ':' + stable((v as Record<string, unknown>)[k]))
          .join(',')}}`
      : JSON.stringify(v)

const BANNED =
  /\b(crucial|pivotal|delve|underscore|landscape|tapestry|testament|vibrant|nestled|groundbreaking|showcas\w*|foster\w*|intricate|garner|additionally|enhance\w*|cultivate|leverag\w*|streamlin\w*|seamless\w*|serves as|stands as|boasts?)\b/i

/** Text this task wrote or moved, per locale. */
function newCopy(locale: string): string[] {
  const m = MESSAGES[locale]
  return [
    ...strings(m.pages.pricing),
    ...strings(m.pages.products),
    ...strings(m.sections.pricing),
    ...strings([m.pages.solutions.websites.addOnsLabel, m.pages.solutions.websites.addOnsTitle, m.pages.solutions.websites.addOnsLead]),
    ...strings(m.pages.solutions.websites.addOns),
    ...strings(AI_SERVICES_DETAIL[locale as keyof typeof AI_SERVICES_DETAIL]),
  ]
}

describe('copy in all four locales', () => {
  it('pricing, products, pricing section, website add-ons and the ai-services page mirror English in de/fr/it', () => {
    for (const locale of LOCALES) {
      const m = MESSAGES[locale]
      expect(shape(m.pages.pricing), `pages.pricing/${locale}`).toEqual(shape(en.pages.pricing))
      expect(shape(m.pages.products), `pages.products/${locale}`).toEqual(shape(en.pages.products))
      expect(shape(m.sections.pricing), `sections.pricing/${locale}`).toEqual(shape(en.sections.pricing))
      expect(shape(m.pages.solutions.websites), `pages.solutions.websites/${locale}`).toEqual(shape(en.pages.solutions.websites))
      const detail = AI_SERVICES_DETAIL[locale]
      expect(shape(detail), `ai-services/${locale}`).toEqual(shape(AI_SERVICES_DETAIL.en))
      for (const s of newCopy(locale)) expect(s.trim().length, `${locale}: empty string`).toBeGreaterThan(0)
    }
  })

  it('de/fr/it are translated, not English copies', () => {
    for (const locale of ['de', 'fr', 'it'] as const) {
      const m = MESSAGES[locale]
      for (const k of ['heroTitle', 'heroLead', 'assumptions', 'referencesText'] as const)
        expect(m.pages.pricing[k], `pricing.${k}/${locale}`).not.toBe(en.pages.pricing[k])
      for (const k of ['heroLead', 'platformTitle', 'ctaLead'] as const)
        expect(m.pages.products[k], `products.${k}/${locale}`).not.toBe(en.pages.products[k])
      const d = AI_SERVICES_DETAIL[locale]
      const e = AI_SERVICES_DETAIL.en
      for (const [a, b] of [
        [d.title, e.title],
        [d.lede, e.lede],
        [d.gap.close, e.gap.close],
        [d.does.items[5].text, e.does.items[5].text],
        [d.delivery.stages[1].text, e.delivery.stages[1].text],
        [d.faq.items[0].answer, e.faq.items[0].answer],
        [d.next.text, e.next.text],
      ])
        expect(a, `ai-services/${locale}`).not.toBe(b)
    }
  })

  it('the ai-services page is published in every locale; links point to the same targets', () => {
    expect(getServiceLocales('ai-services')).toEqual([...LOCALES])
    const targets = (locale: string) =>
      strings(AI_SERVICES_DETAIL[locale as keyof typeof AI_SERVICES_DETAIL]).flatMap((s) => [...s.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]))
    for (const locale of LOCALES) {
      expect(targets(locale), locale).toEqual(targets('en'))
      expect(getServiceBySlug('ai-services', locale)?.detail).toBe(AI_SERVICES_DETAIL[locale])
    }
  })

  it('has no em dash, no German ß and none of the banned AI vocabulary', () => {
    for (const locale of LOCALES)
      for (const s of newCopy(locale)) {
        expect(s, locale).not.toContain('—')
        if (locale === 'de') expect(s, 'de').not.toContain('ß')
        if (locale === 'en') expect(s, 'en').not.toMatch(BANNED)
      }
  })

  it('meta descriptions fit in 160 characters', () => {
    for (const locale of LOCALES) {
      const m = MESSAGES[locale]
      expect(m.pages.pricing.metaDescription.length, `pricing/${locale}`).toBeLessThanOrEqual(160)
      expect(m.pages.products.metaDescription.length, `products/${locale}`).toBeLessThanOrEqual(160)
      expect(getServiceBySlug('ai-services', locale)!.meta.description.length, `ai-services/${locale}`).toBeLessThanOrEqual(160)
    }
  })
})

describe('figures equal the source (digit groups from origin/master)', () => {
  it('/pricing page text', () => {
    for (const locale of LOCALES) {
      const { metaTitle: _t, metaDescription: _d, ...body } = MESSAGES[locale].pages.pricing
      expect(digitSet(strings(body)), locale).toEqual([...fixture.pricingPage].sort())
      // Meta figures must be stated on the page.
      const meta = numbers(`${_t} ${_d}`)
      const page = new Set([...digitSet(strings(body)), ...digitSet(strings(MESSAGES[locale].sections.pricing))])
      for (const n of meta) expect(page.has(n), `${locale}: meta figure ${n}`).toBe(true)
    }
  })

  it('pricing section (three cards and "we price from your number")', () => {
    // Amounts hard-coded in the component (the component itself needs the Next runtime to import).
    const source = readFileSync(path.join(ROOT, 'src/components/organisms/home/Pricing.tsx'), 'utf8')
    const amounts = [...source.matchAll(/amt: '([^']+)'/g)].map((m) => m[1])
    expect(amounts).toEqual(['CHF 6–25k', '70 / 30'])
    for (const locale of LOCALES)
      expect(digitSet([...strings(MESSAGES[locale].sections.pricing), ...amounts]), locale).toEqual(
        [...fixture.pricingSection].sort(),
      )
  })

  it('/services/ai-services long-form text', () => {
    for (const locale of LOCALES)
      expect(digitSet(strings(AI_SERVICES_DETAIL[locale]).map(dropLinkTargets)), locale).toEqual(
        [...fixture.aiServices].sort(),
      )
  })
})

describe('/products (D5): unconfirmed claims removed', () => {
  it('no 8move.app, 23 % fuel saving, "Live since 2022" or payroll feature in any locale', () => {
    for (const locale of LOCALES) {
      const text = [...strings(MESSAGES[locale].pages.products), ...strings(MESSAGES[locale].sections.products)].join('\n')
      expect(text, locale).not.toMatch(/8move\.app|23\s?%|since 2022|seit 2022|depuis 2022|dal 2022/i)
      expect(text, locale).not.toMatch(/payroll|lohn|\bpaie\b|paghe|buste paga/i)
      expect(text, locale).toContain('8move.com')
    }
  })

  it('no 8move.app or "Live since 2022" anywhere in messages, data or components', () => {
    const files: string[] = []
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const p = path.join(dir, name)
        if (statSync(p).isDirectory()) walk(p)
        else if (/\.(ts|tsx|json)$/.test(name) && !p.includes('__tests__')) files.push(p)
      }
    }
    walk(path.join(ROOT, 'src'))
    walk(path.join(ROOT, 'messages'))
    for (const f of files) expect(readFileSync(f, 'utf8'), path.relative(ROOT, f)).not.toMatch(/8move\.app|Live since 2022/)
  })
})

describe('/pricing is AI pricing; website packages stay on /solutions/websites (D4)', () => {
  it('/site-price and its localized WordPress URLs go to website packages, /pricing is not rewritten', async () => {
    const redirects = (await nextConfig.redirects!()) as { source: string; destination: string; permanent: boolean }[]
    const old: Record<string, string> = {
      '/site-price': '/solutions/websites',
      '/fr/site-prix': '/fr/solutions/websites',
      '/de/site-preis': '/de/solutions/websites',
      '/it/sito-prezzo': '/it/solutions/websites',
    }
    for (const [src, dest] of Object.entries(old))
      for (const s of [src, `${src}/`]) {
        const r = redirects.find((x) => x.source === s)
        expect(r, s).toBeDefined()
        expect(r!.destination, s).toBe(dest)
        expect(r!.permanent, s).toBe(true)
      }
    expect(redirects.some((r) => r.destination.endsWith('/pricing')), 'nothing redirects to /pricing').toBe(false)
    const rewrites = (await nextConfig.rewrites!()) as { afterFiles?: unknown[] }
    expect(rewrites.afterFiles ?? []).toEqual([])
    const middleware = readFileSync(path.join(ROOT, 'src/middleware.ts'), 'utf8')
    expect(middleware).toContain("'/site-price': '/solutions/websites'")
    expect(middleware).not.toMatch(/: '\/pricing'/)
  })

  it('only AI-pricing contexts link to /pricing', () => {
    const files: string[] = []
    const walk = (dir: string) => {
      for (const name of readdirSync(dir)) {
        const p = path.join(dir, name)
        if (statSync(p).isDirectory()) walk(p)
        else if (/\.(ts|tsx)$/.test(name) && !p.includes('__tests__')) files.push(p)
      }
    }
    walk(path.join(ROOT, 'src'))
    const linking = files
      .filter((f) => /["'(]\/pricing["')#]/.test(readFileSync(f, 'utf8')))
      .map((f) => path.relative(ROOT, f))
      .sort()
    expect(linking).toEqual([
      'src/app/(frontend)/pricing/page.tsx', // own crumb and canonical path
      'src/components/organisms/Footer.tsx', // "Pricing" in the footer, as in Yevhen's version
      'src/components/templates/ServiceDetailPage.tsx', // "See the economics"
      'src/data/ai-services/de.ts', // delivery stage 1: "the economics"
      'src/data/ai-services/en.ts',
      'src/data/ai-services/fr.ts',
      'src/data/ai-services/it.ts',
    ])
  })

  it('website add-ons are on /solutions/websites', () => {
    for (const locale of LOCALES) {
      const w = MESSAGES[locale].pages.solutions.websites
      expect(Object.keys(w.addOns), locale).toEqual(['hosting', 'language', 'content', 'brandbook', 'seo', 'legal', 'media', 'blog', 'design'])
      expect('addOns' in MESSAGES[locale].pages.pricing, locale).toBe(false)
    }
  })
})

describe('other services are unchanged', () => {
  // sha256 of every locale of each record, taken at 5a72f32 (before this change).
  const BEFORE: Record<string, string> = {
    'logistics-and-operations-platforms': 'bea362e91f6a408ade6e7f38c742e656275f179520d15df3eb5886675c0da66c',
    'software-engineering': 'e3a892b095323102a47651c8ae43c1cc0ed5fe89c7e1adeb22b35250a125354f',
    'embedded-and-iot': '6ce8c7c989e0718edcc4aed1f1b407d63a6b348ef5c521c9f2f90ed5f1d287ba',
    'cto-as-a-service': '6cecdf8a1f094e93d24033922066213f55a8ebd8b9e7b0edec0d0bf9fed02de1',
  }
  const AI_SERVICES_LISTING_BEFORE = 'b8a7657c061b43326b02fb72debb30bfbd34e93108559f49d3cd218554b83d5c'
  const hash = (v: unknown) => createHash('sha256').update(stable(v)).digest('hex')

  it('only ai-services has a long-form page; the other records hash as before', () => {
    expect(getServiceSlugs().filter((s) => s !== 'ai-services').sort()).toEqual(Object.keys(BEFORE).sort())
    for (const [slug, before] of Object.entries(BEFORE)) {
      const all = LOCALES.map((l) => getServiceBySlug(slug, l))
      for (const s of all) expect(s && 'detail' in s, slug).toBe(false)
      expect(hash(all), slug).toBe(before)
    }
  })

  it('ai-services keeps its listing fields (title, tagline, meta, cases) as before', () => {
    const listing = LOCALES.map((l) =>
      Object.fromEntries(Object.entries(getServiceBySlug('ai-services', l)!).filter(([k]) => k !== 'detail')),
    )
    expect(hash(listing)).toBe(AI_SERVICES_LISTING_BEFORE)
  })
})
