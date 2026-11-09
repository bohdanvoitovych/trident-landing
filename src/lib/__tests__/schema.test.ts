import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { getCaseBySlug, getCaseSlugs, getCases } from '@/data/cases'
import { getIndustries } from '@/data/industries'
import { getLocations } from '@/data/locations'
import { getServiceBySlug, getServiceSlugs } from '@/data/services'
import { getTechnologies } from '@/data/technologies'
import { caseStudySchemas, pageName, servicePageSchema, webPageSchemas, blogPostSchema } from '../schema'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'
const LOCALES = ['en', 'de', 'fr', 'it'] as const
const IN_LANGUAGE = { en: 'en', de: 'de-CH', fr: 'fr-CH', it: 'it-CH' } as const
const prefix = (l: string) => (l === 'en' ? '' : `/${l}`)

// Schemas are loose JSON; the tests read nested fields.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Schema = Record<string, any>

function expectBreadcrumb(b: Schema, locale: string, tail: { name: string; url: string }) {
  expect(b['@context']).toBe('https://schema.org')
  expect(b['@type']).toBe('BreadcrumbList')
  const items = b.itemListElement as Schema[]
  expect(items.map((i) => i.position)).toEqual(items.map((_, i) => i + 1))
  expect(items[0].item).toBe(`${SITE}${prefix(locale)}`)
  for (const i of items) {
    expect(i['@type']).toBe('ListItem')
    expect(i.name).toBeTruthy()
    expect(i.item).toMatch(/^https?:\/\//)
  }
  const last = items[items.length - 1]
  expect(last.name).toBe(tail.name)
  expect(last.item).toBe(tail.url)
}

function expectBase(s: Schema, type: string, locale: string) {
  expect(s['@context']).toBe('https://schema.org')
  expect(s['@type']).toBe(type)
  expect(s.url).toMatch(/^https?:\/\//)
  expect(s.inLanguage).toBe(IN_LANGUAGE[locale as keyof typeof IN_LANGUAGE])
}

describe('webPageSchemas', () => {
  for (const locale of ['en', 'de'] as const) {
    it(`builds a typed page and a two-step breadcrumb (${locale})`, () => {
      const [page, crumbs] = webPageSchemas({ type: 'AboutPage', path: '/about', name: 'About', description: 'Who we are' }, locale) as Schema[]
      expectBase(page, 'AboutPage', locale)
      expect(page.name).toBe('About')
      expect(page.description).toBe('Who we are')
      expect(page.url).toBe(`${SITE}${prefix(locale)}/about`)
      expect(page.publisher['@id']).toBe(`${SITE}/#organization`)
      expectBreadcrumb(crumbs, locale, { name: 'About', url: `${SITE}${prefix(locale)}/about` })
      expect(crumbs.itemListElement).toHaveLength(2)
    })
  }

  it('strips the brand tail from a metadata title', () => {
    expect(pageName('Our Team | Trident Software')).toBe('Our Team')
    expect(pageName('Software Services Switzerland | AI Agents, Logistics, IoT | Trident Software')).toBe('Software Services Switzerland')
  })
})

describe('caseStudySchemas', () => {
  for (const locale of ['en', 'fr'] as const) {
    it(`builds an Article and a Home > Projects > case breadcrumb (${locale})`, () => {
      const slug = 'post-acute-clinic-network'
      const c = getCaseBySlug(slug, locale)!
      const [article, crumbs] = caseStudySchemas(
        { slug, title: c.hero.title, description: c.meta.description, image: c.hero.image, publishedAt: c.publishedAt },
        locale,
      ) as Schema[]
      expectBase(article, 'Article', locale)
      expect(article.headline).toBe(c.hero.title)
      expect(article.description).toBe(c.meta.description)
      expect(article.url).toBe(`${SITE}${prefix(locale)}/cases/${slug}`)
      expect(article.author['@type']).toBe('Organization')
      expect(article.publisher['@type']).toBe('Organization')
      expect(article.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(article.dateModified).toBe(article.datePublished)
      expectBreadcrumb(crumbs, locale, { name: c.hero.title, url: article.url })
      expect(crumbs.itemListElement).toHaveLength(3)
      expect(crumbs.itemListElement[1].item).toBe(`${SITE}${prefix(locale)}/cases`)
    })
  }

  it('omits dates and image when the data has none, and makes an image URL absolute', () => {
    const [a] = caseStudySchemas({ slug: 'x', title: 'T', description: 'D' }, 'en') as Schema[]
    expect(a).not.toHaveProperty('datePublished')
    expect(a).not.toHaveProperty('dateModified')
    expect(a).not.toHaveProperty('image')
    const [b] = caseStudySchemas({ slug: 'x', title: 'T', description: 'D', image: '/images/a.jpg' }, 'en') as Schema[]
    expect(b.image).toBe(`${SITE}/images/a.jpg`)
  })

  it('every case builds a valid Article in every locale it has', () => {
    for (const slug of getCaseSlugs()) {
      for (const locale of LOCALES) {
        const c = getCaseBySlug(slug, locale)
        if (!c) continue
        const [a, b] = caseStudySchemas({ slug, title: c.hero.title, description: c.meta.description, image: c.hero.image, publishedAt: c.publishedAt }, locale) as Schema[]
        expect(a.headline, `${slug}/${locale}`).toBeTruthy()
        expect(a.url).toContain(`${prefix(locale)}/cases/${slug}`)
        expect(b.itemListElement).toHaveLength(3)
      }
    }
  })
})

describe('servicePageSchema', () => {
  for (const locale of ['en', 'it'] as const) {
    it(`builds a ProfessionalService with a localized breadcrumb (${locale})`, () => {
      const s = getServiceBySlug('ai-services', locale)!
      const [svc, crumbs] = servicePageSchema({ slug: 'ai-services', title: s.title, description: s.description }, locale) as Schema[]
      expectBase(svc, 'ProfessionalService', locale)
      expect(svc.name).toBe(s.title)
      expect(svc.url).toBe(`${SITE}${prefix(locale)}/services/ai-services`)
      expectBreadcrumb(crumbs, locale, { name: s.title, url: svc.url })
      expect(crumbs.itemListElement[1].item).toBe(`${SITE}${prefix(locale)}/services`)
    })
  }

  it('every service breadcrumb ends on its own locale-prefixed URL', () => {
    for (const slug of getServiceSlugs()) {
      const s = getServiceBySlug(slug, 'de')
      if (!s) continue
      const [, crumbs] = servicePageSchema({ slug, title: s.title, description: s.description }, 'de') as Schema[]
      expect(crumbs.itemListElement[2].item).toBe(`${SITE}/de/services/${slug}`)
    }
  })
})

describe('blogPostSchema', () => {
  it('sets dateModified', () => {
    const [post] = blogPostSchema({ slug: 's', title: 'T', excerpt: 'E', author: 'A', publishedAt: '2026-01-02' }, 'en') as Schema[]
    expect(post.dateModified).toBe('2026-01-02')
  })
})

describe('every page route emits JSON-LD', () => {
  const root = path.resolve(__dirname, '../../app/(frontend)')
  const emits = (file: string) => /<(Page)?JsonLd\b/.test(readFileSync(path.join(root, file), 'utf8'))
  const routes = [
    'page.tsx',
    'about/page.tsx',
    'contact/layout.tsx',
    'cases/page.tsx',
    'cases/[slug]/page.tsx',
    'services/page.tsx',
    'services/[slug]/page.tsx',
    'industries/page.tsx',
    'industries/[slug]/page.tsx',
    'blog/page.tsx',
    'blog/[slug]/page.tsx',
    'pricing/page.tsx',
    'products/page.tsx',
    'use-cases/page.tsx',
    'solutions/page.tsx',
    'team/page.tsx',
    'technologies/page.tsx',
    'technologies/[slug]/page.tsx',
    'locations/page.tsx',
    'locations/[slug]/page.tsx',
    'faq/page.tsx',
  ]
  for (const r of routes) it(r, () => expect(emits(r)).toBe(true))
})

describe('EN meta descriptions fit in 160 characters', () => {
  const sets = { cases: getCases('en'), industries: getIndustries('en'), locations: getLocations('en'), technologies: getTechnologies('en') }
  for (const [name, list] of Object.entries(sets)) {
    it(name, () => {
      const over = list.filter((x) => x.meta.description.length > 160).map((x) => `${x.slug} (${x.meta.description.length})`)
      expect(over).toEqual([])
    })
  }
  it('case titles fit in 60 characters', () => {
    const over = getCases('en').filter((x) => x.meta.title.length > 60).map((x) => x.slug)
    expect(over).toEqual([])
  })
})

describe('no page emits two BreadcrumbLists', () => {
  // PageHero / Breadcrumbs (every inner page and the blog post template) always emits one BreadcrumbList.
  // So a page may render a schema builder that also returns a breadcrumb only if it keeps just the first
  // (main) schema: the call must be followed by `.slice(0, 1)`.
  const root = path.resolve(__dirname, '../../app/(frontend)')
  const withBreadcrumb = ['servicePageSchema', 'caseStudySchemas', 'industryPageSchemas', 'locationPageSchemas', 'technologyPageSchemas', 'webPageSchemas']
  const pages = ['cases/[slug]', 'services/[slug]', 'industries/[slug]', 'locations/[slug]', 'technologies/[slug]']

  const afterCall = (src: string, fn: string) => {
    const start = src.indexOf(`${fn}(`)
    let depth = 0
    for (let i = start + fn.length; i < src.length; i++) {
      if (src[i] === '(') depth++
      if (src[i] === ')' && --depth === 0) return src.slice(i + 1, i + 13)
    }
    return ''
  }

  for (const page of pages) {
    it(`${page} keeps only the main schema`, () => {
      const src = readFileSync(path.join(root, page, 'page.tsx'), 'utf8')
      const used = withBreadcrumb.filter((fn) => src.includes(`${fn}(`) && !src.includes(`function ${fn}`))
      expect(used.length).toBeGreaterThan(0)
      for (const fn of used) expect(afterCall(src, fn), fn).toMatch(/^\.slice\(0, 1\)/)
    })
  }

  it('blog post and faq schemas carry no BreadcrumbList', () => {
    const blog = blogPostSchema({ slug: 's', title: 'T', excerpt: 'E', author: 'A', publishedAt: '2026-01-02', faq: [{ question: 'q', answer: 'a' }] }, 'en') as Schema[]
    expect(blog.map((x) => x['@type'])).toEqual(['BlogPosting', 'FAQPage'])
  })

  it('PageJsonLd renders only the page schema', () => {
    const src = readFileSync(path.resolve(__dirname, '../../components/seo/PageJsonLd.tsx'), 'utf8')
    expect(src).toMatch(/webPageSchemas\([^)]*\)\.slice\(0, 1\)/)
  })
})
