import type { MetadataRoute } from 'next'
import { getPostSlugs } from '@/data/blog'
import { getLocationSlugs } from '@/data/locations'
import { getTechnologySlugs } from '@/data/technologies'
import { routing } from '@/i18n/routing'
import { localizedUrl } from '@/lib/metadata'

const HREFLANG: Record<string, string> = { en: 'en', de: 'de-CH', fr: 'fr-CH', it: 'it-CH' }

const BASE_URL = 'https://trident-software.ch'

export default function sitemap(): MetadataRoute.Sitemap {
  const servicesSlugs = [
    'ai-services', 'software-engineering', 'embedded-and-iot',
    'cto-as-a-service', 'cloud-consulting', 'devops-and-sre',
    'ui-ux-design', 'team-extension',
  ]

  const industrySlugs = [
    'healthcare', 'automotive', 'logistics', 'fintech',
    'retail-ecommerce', 'saas', 'manufacturing', 'proptech',
    'energy', 'insurance', 'hospitality', 'legaltech',
    'fashion-lifestyle', 'agriculture', 'public-sector', 'media-entertainment',
    'tourism', 'fmcg', 'diy-tools', 'catering', 'blockchain',
    'social-media', 'games', 'sport-activities', 'education',
  ]

  const caseSlugs = [
    'kleap-ai-builder', 'zenit-auto-b2b', '8move-driver',
    'tdsbot-iot', 'aida-medicine', 'lapochette', 'iam-trade',
    'arenawave', 'go-valais',
  ]

  const blogSlugs = getPostSlugs()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/cases`, changeFrequency: 'weekly', priority: 0.9 },
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

  const serviceRoutes: MetadataRoute.Sitemap = servicesSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const caseRoutes: MetadataRoute.Sitemap = caseSlugs.map((slug) => ({
    url: `${BASE_URL}/cases/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const locationRoutes: MetadataRoute.Sitemap = getLocationSlugs().map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const technologyRoutes: MetadataRoute.Sitemap = getTechnologySlugs().map((slug) => ({
    url: `${BASE_URL}/technologies/${slug}`,
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

  // One entry per locale, each listing every language version as an alternate.
  return routes.flatMap((route) => {
    const path = route.url.slice(BASE_URL.length) || '/'
    const languages = Object.fromEntries([
      ...routing.locales.map((l) => [HREFLANG[l], localizedUrl(path, l)]),
      ['x-default', localizedUrl(path, 'en')],
    ])
    return routing.locales.map((l) => ({
      ...route,
      url: localizedUrl(path, l),
      alternates: { languages },
    }))
  })
}
