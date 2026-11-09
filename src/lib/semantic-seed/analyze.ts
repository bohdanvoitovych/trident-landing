import 'server-only'

import { SEMANTIC_SEED_TERMS } from '@/data/semantic-seed-terms'
import { getServiceBySlug, getServiceLocales, getServiceSlugs } from '@/data/services'
import { getSolutionBySlug, getSolutionLocales, getSolutionSlugs } from '@/data/solutions'
import { getIndustryBySlug, getIndustryLocales, getIndustrySlugs } from '@/data/industries'
import { getLocationBySlug, getLocationLocales, getLocationSlugs } from '@/data/locations'
import { getTechnologyBySlug, getTechnologyLocales, getTechnologySlugs } from '@/data/technologies'
import { getUseCases } from '@/data/use-cases'
import { routing } from '@/i18n/routing'
import de from '../../../messages/de.json'
import en from '../../../messages/en.json'
import fr from '../../../messages/fr.json'
import it from '../../../messages/it.json'

/**
 * Coverage of the shared Semantic Seed Library against the site's own static
 * content. The result shape is the contract of the shared admin dashboard
 * (8move proxies this route) — do not change it.
 *
 * One PageText per page per locale, for services, solutions (incl. website
 * packages), industries, locations, technologies and use-cases. A page only
 * appears in the locales that have their own text. Text is the record's
 * visible fields from src/data/* plus the page's static copy from
 * messages/{locale}.json. Meta title/description is not counted.
 */

export interface PageHit {
  url: string
  count: number
}

export interface TermResult {
  term: string
  total: number
  pages: PageHit[]
}

export interface PageText {
  url: string
  static: string
  dynamic: string[]
}

const MESSAGES: Record<string, unknown> = { en, de, fr, it }

/** Keys that are identifiers, assets or SEO meta, never visible page copy. */
const SKIP_KEYS = new Set([
  'slug',
  'icon',
  'iconSlug',
  'glyph',
  'highlighted',
  'meta',
  'metaTitle',
  'metaDescription',
  'relatedCases',
  'relatedServices',
])

function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value)
  else if (Array.isArray(value)) for (const v of value) collectStrings(v, out)
  else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) if (!SKIP_KEYS.has(k)) collectStrings(v, out)
  }
  return out
}

function messagesAt(locale: string, dotPath: string): string[] {
  let node: unknown = MESSAGES[locale]
  for (const key of dotPath.split('.')) {
    node = (node as Record<string, unknown> | undefined)?.[key]
  }
  return collectStrings(node)
}

function dedupLower(s: string): string {
  return s.toLowerCase()
}

export function countOccurrences(haystackLower: string, needleLower: string): number {
  if (!needleLower) return 0
  let count = 0
  let idx = 0
  for (;;) {
    idx = haystackLower.indexOf(needleLower, idx)
    if (idx === -1) break
    count += 1
    idx += needleLower.length
  }
  return count
}

/** Public path as the site routes it: default locale unprefixed (localePrefix: 'as-needed'). */
function pageUrl(locale: string, path: string): string {
  return locale === routing.defaultLocale ? path : `/${locale}${path}`
}

/** Messages key under pages.solutions for each solution that has its own route. */
const SOLUTION_MESSAGES_KEY: Record<string, string> = {
  websites: 'websites',
  'e-commerce': 'ecommerce',
  'mobile-apps': 'mobileApps',
  'cloud-services': 'cloudServices',
  'social-networks': 'socialNetworks',
  iot: 'iot',
}

function page(locale: string, path: string, parts: string[]): PageText {
  return { url: pageUrl(locale, path), static: dedupLower(parts.join(' \n ')), dynamic: [] }
}

export function buildPages(): PageText[] {
  const pages: PageText[] = []

  for (const slug of getServiceSlugs()) {
    for (const locale of getServiceLocales(slug)) {
      pages.push(
        page(locale, `/services/${slug}`, [
          ...collectStrings(getServiceBySlug(slug, locale)),
          ...messagesAt(locale, 'templates.service'),
        ]),
      )
    }
  }

  for (const slug of getSolutionSlugs()) {
    const key = SOLUTION_MESSAGES_KEY[slug]
    for (const locale of getSolutionLocales(slug)) {
      const solution = getSolutionBySlug(slug, locale)
      pages.push(
        page(locale, `/solutions/${slug}`, [
          ...collectStrings({ ...solution, packages: undefined }),
          ...(key ? messagesAt(locale, `pages.solutions.${key}`) : []),
          ...messagesAt(locale, 'templates.solution'),
        ]),
      )
      for (const pkg of solution?.packages ?? []) {
        pages.push(
          page(locale, `/solutions/${slug}/${pkg.slug}`, [
            ...collectStrings(pkg),
            ...messagesAt(locale, 'pages.solutions.websitePackage'),
          ]),
        )
      }
    }
  }

  for (const slug of getIndustrySlugs()) {
    for (const locale of getIndustryLocales(slug)) {
      pages.push(
        page(locale, `/industries/${slug}`, [
          ...collectStrings(getIndustryBySlug(slug, locale)),
          ...messagesAt(locale, 'templates.industry'),
        ]),
      )
    }
  }

  for (const slug of getLocationSlugs()) {
    for (const locale of getLocationLocales(slug)) {
      pages.push(
        page(locale, `/locations/${slug}`, [
          ...collectStrings(getLocationBySlug(slug, locale)),
          ...messagesAt(locale, 'templates.location'),
        ]),
      )
    }
  }

  for (const slug of getTechnologySlugs()) {
    for (const locale of getTechnologyLocales(slug)) {
      pages.push(
        page(locale, `/technologies/${slug}`, [
          ...collectStrings(getTechnologyBySlug(slug, locale)),
          ...messagesAt(locale, 'templates.technology'),
        ]),
      )
    }
  }

  for (const locale of routing.locales) {
    pages.push(
      page(locale, '/use-cases', [
        ...collectStrings(getUseCases(locale)),
        ...messagesAt(locale, 'pages.useCases'),
        ...messagesAt(locale, 'sections.useCases'),
      ]),
    )
  }

  return pages
}

export function analyze(): { termsChecked: number; termsFound: number; results: TermResult[] } {
  const pages = buildPages()
  const results: TermResult[] = []

  for (const term of SEMANTIC_SEED_TERMS) {
    const needle = term.toLowerCase()
    const pageHits: PageHit[] = []

    for (const p of pages) {
      const staticCount = countOccurrences(p.static, needle)
      const dynamicCount = p.dynamic.reduce((acc, s) => acc + countOccurrences(s, needle), 0)
      const total = staticCount + dynamicCount
      if (total > 0) pageHits.push({ url: p.url, count: total })
    }

    if (pageHits.length > 0) {
      results.push({ term, total: pageHits.reduce((acc, h) => acc + h.count, 0), pages: pageHits })
    }
  }

  results.sort((a, b) => b.total - a.total)

  return { termsChecked: SEMANTIC_SEED_TERMS.length, termsFound: results.length, results }
}
