import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { routing } from '@/i18n/routing'
import { getIndustrySlugs, getIndustryBySlug, getIndustryLocales } from '@/data/industries'
import { getServiceSlugs, getServiceBySlug, getServiceLocales } from '@/data/services'
import { getCaseSlugs, getCases } from '@/data/cases'
import { getTechnologies } from '@/data/technologies'
import { getLocations } from '@/data/locations'
import sitemap from '@/app/sitemap'

// Owner decisions D1 and D2: the industry and service set from the PDF.
const INDUSTRIES = [
  'trade-and-building-materials',
  'proptech',
  'healthcare',
  'retail-ecommerce',
  'hospitality',
  'professional-services',
  'education',
  'startups-cto',
  'automotive',
  'logistics',
  'fintech',
  'saas',
  'manufacturing',
  'fashion-lifestyle',
  'tourism',
  'fmcg',
  'diy-tools',
  'catering',
  'blockchain',
  'social-media',
  'games',
  'sport-activities',
]

const SERVICES = [
  'ai-services',
  'logistics-and-operations-platforms',
  'software-engineering',
  'embedded-and-iot',
  'cto-as-a-service',
]

const REMOVED_INDUSTRIES = ['agriculture', 'energy', 'insurance', 'legaltech', 'media-entertainment', 'public-sector']
const REMOVED_SERVICES = ['team-extension', 'cloud-consulting', 'devops-and-sre', 'ui-ux-design']

const ROOT = path.resolve(__dirname, '../../..')

function filled(value: string, where: string) {
  expect(typeof value, where).toBe('string')
  expect(value.trim().length, where).toBeGreaterThan(0)
}

describe('industry set (D1)', () => {
  it('is exactly the PDF set, in PDF order', () => {
    expect(getIndustrySlugs()).toEqual(INDUSTRIES)
  })

  it('every industry is written in all four locales', () => {
    for (const slug of INDUSTRIES) expect(getIndustryLocales(slug), slug).toEqual([...routing.locales])
  })

  it('no required string is empty, and translations mirror the English structure', () => {
    for (const slug of INDUSTRIES) {
      const en = getIndustryBySlug(slug, 'en')!
      for (const locale of routing.locales) {
        const ind = getIndustryBySlug(slug, locale)!
        const at = `${slug}/${locale}`
        filled(ind.title, `${at} title`)
        filled(ind.tagline, `${at} tagline`)
        filled(ind.meta.title, `${at} meta.title`)
        filled(ind.meta.description, `${at} meta.description`)
        // description is optional (empty hides it), but must be empty in every locale or in none
        expect(ind.description.trim() === '', `${at} description presence`).toBe(en.description.trim() === '')
        expect(ind.challenges.length, `${at} challenges`).toBe(en.challenges.length)
        expect(ind.solutions.length, `${at} solutions`).toBe(en.solutions.length)
        for (const item of [...ind.challenges, ...ind.solutions]) {
          filled(item.title, `${at} item title`)
          filled(item.description, `${at} item "${item.title}"`)
        }
        if (locale !== 'en') expect(ind.tagline, `${at} tagline is translated`).not.toBe(en.tagline)
      }
    }
  })
})

describe('service set (D2)', () => {
  it('is exactly the five PDF lines', () => {
    expect(getServiceSlugs()).toEqual(SERVICES)
  })

  it('every service is written in all four locales with no empty required string', () => {
    for (const slug of SERVICES) {
      expect(getServiceLocales(slug), slug).toEqual([...routing.locales])
      const en = getServiceBySlug(slug, 'en')!
      for (const locale of routing.locales) {
        const s = getServiceBySlug(slug, locale)!
        const at = `${slug}/${locale}`
        filled(s.title, `${at} title`)
        filled(s.tagline, `${at} tagline`)
        filled(s.description, `${at} description`)
        filled(s.meta.title, `${at} meta.title`)
        filled(s.meta.description, `${at} meta.description`)
        if (locale !== 'en') expect(s.tagline, `${at} tagline is translated`).not.toBe(en.tagline)
        expect(s.features.length, `${at} features`).toBe(en.features.length)
        expect(s.features.length, `${at} features`).toBeGreaterThan(0)
        for (const f of s.features) {
          filled(f.title, `${at} feature title`)
          filled(f.description, `${at} feature "${f.title}"`)
        }
      }
    }
  })
})

describe('internal references', () => {
  const services = new Set(SERVICES)
  const industries = new Set(INDUSTRIES)
  const cases = new Set(getCaseSlugs())

  it('related services and cases on industries exist', () => {
    for (const slug of INDUSTRIES) {
      const ind = getIndustryBySlug(slug, 'en')!
      for (const s of ind.relatedServices) expect(services.has(s), `${slug} -> service ${s}`).toBe(true)
      for (const c of ind.relatedCases) expect(cases.has(c), `${slug} -> case ${c}`).toBe(true)
    }
  })

  it('related cases on services exist', () => {
    for (const slug of SERVICES) {
      for (const c of getServiceBySlug(slug, 'en')!.relatedCases) expect(cases.has(c), `${slug} -> case ${c}`).toBe(true)
    }
  })

  it('services named on technologies, locations and cases exist', () => {
    for (const t of getTechnologies('en')) {
      for (const s of t.relatedServices) expect(services.has(s), `technology ${t.slug} -> ${s}`).toBe(true)
    }
    for (const l of getLocations('en')) {
      for (const s of l.relatedServices) expect(services.has(s), `location ${l.slug} -> ${s}`).toBe(true)
    }
    for (const c of getCases('en')) {
      for (const s of c.services) expect(services.has(s), `case ${c.slug} -> ${s}`).toBe(true)
    }
  })

  it('every /services/<slug> and /industries/<slug> link in source and messages exists', () => {
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
    const skip = new Set([path.join(ROOT, 'src/middleware.ts')])
    const re = /\/(services|industries)\/([a-z0-9][a-z0-9-]*)/g
    const bad: string[] = []
    for (const file of files) {
      if (skip.has(file)) continue
      const text = readFileSync(file, 'utf8')
      for (const m of text.matchAll(re)) {
        const known = m[1] === 'services' ? services : industries
        if (!known.has(m[2])) bad.push(`${path.relative(ROOT, file)}: ${m[0]}`)
      }
    }
    expect(bad).toEqual([])
  })

  it('no removed slug is referenced by data', () => {
    for (const slug of INDUSTRIES) {
      const ind = getIndustryBySlug(slug, 'en')!
      for (const s of ind.relatedServices) expect(REMOVED_SERVICES).not.toContain(s)
    }
    for (const r of REMOVED_INDUSTRIES) expect(getIndustryBySlug(r, 'en'), r).toBeUndefined()
    for (const r of REMOVED_SERVICES) expect(getServiceBySlug(r, 'en'), r).toBeUndefined()
  })
})

describe('sitemap and llms.txt', () => {
  it('sitemap lists exactly the new industries and services', () => {
    const paths = sitemap().map((e) => new URL(e.url).pathname)
    const pick = (kind: string) =>
      new Set(paths.filter((p) => p.startsWith(`/${kind}/`)).map((p) => p.slice(kind.length + 2)))
    expect(pick('industries')).toEqual(new Set(INDUSTRIES))
    expect(pick('services')).toEqual(new Set(SERVICES))
  })

  it('llms.txt names every industry and service by its English title', () => {
    const llms = readFileSync(path.join(ROOT, 'public/llms.txt'), 'utf8')
    for (const slug of SERVICES) expect(llms, slug).toContain(getServiceBySlug(slug, 'en')!.title)
    for (const slug of INDUSTRIES) expect(llms, slug).toContain(getIndustryBySlug(slug, 'en')!.title)
  })
})
