import type { MetadataRoute } from 'next'
import { getPostLocales, getPostSlugs } from '@/data/blog'
import { caseHref, getCaseLocales, getCaseSlugs } from '@/data/cases'
import { getIndustryLocales, getIndustrySlugs } from '@/data/industries'
import { getServiceLocales, getServiceSlugs } from '@/data/services'
import { getLocationLocales, getLocationSlugs } from '@/data/locations'
import { getTechnologyLocales, getTechnologySlugs } from '@/data/technologies'
import { routing } from '@/i18n/routing'
import { isNoIndexSite, localizedUrl } from '@/lib/metadata'

const HREFLANG: Record<string, string> = { en: 'en', de: 'de-CH', fr: 'fr-CH', it: 'it-CH' }

const BASE_URL = 'https://trident-software.ch'

type Route = MetadataRoute.Sitemap[number] & { locales?: readonly string[] }

export default function sitemap(): MetadataRoute.Sitemap {
  if (isNoIndexSite()) return []

  const servicesSlugs = getServiceSlugs()

  const industrySlugs = getIndustrySlugs()

  const caseSlugs = getCaseSlugs()

  const blogSlugs = getPostSlugs()

  const staticRoutes: Route[] = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/cases`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/industries`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/products`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookies`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/imprint`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/team`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/solutions`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/solutions/websites`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/web-brochure`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/sme-website`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/user-portal`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/online-boutique`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/products/iam-trade`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/e-commerce`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/technologies`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/use-cases`, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const serviceRoutes: Route[] = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    locales: getServiceLocales(slug),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryRoutes: Route[] = industrySlugs.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    locales: getIndustryLocales(slug),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const caseRoutes: Route[] = caseSlugs.map((slug) => ({
    url: `${BASE_URL}${caseHref(slug)}`,
    locales: getCaseLocales(slug),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogRoutes: Route[] = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    locales: getPostLocales(slug),
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const locationRoutes: Route[] = getLocationSlugs().map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    locales: getLocationLocales(slug),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const technologyRoutes: Route[] = getTechnologySlugs().map((slug) => ({
    url: `${BASE_URL}/technologies/${slug}`,
    locales: getTechnologyLocales(slug),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const routes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseRoutes,
    ...blogRoutes,
    ...locationRoutes,
    ...technologyRoutes,
  ]

  // One entry per published locale. A page without text in a locale is left out, as in buildMetadata.
  return routes.flatMap(({ locales, ...route }) => {
    const path = route.url.slice(BASE_URL.length) || '/'
    const published = routing.locales.filter((l) => !locales || locales.includes(l))
    const languages = Object.fromEntries([
      ...published.map((l) => [HREFLANG[l], localizedUrl(path, l)]),
      ['x-default', localizedUrl(path, 'en')],
    ])
    return published.map((l) => ({
      ...route,
      url: localizedUrl(path, l),
      alternates: { languages },
    }))
  })
}
