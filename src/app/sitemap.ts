import type { MetadataRoute } from 'next'
import { getPostSlugs, posts as blogPosts } from '@/data/blog'
import { TOPIC_MIN_POSTS } from '@/data/blog-meta'
import { getLocationSlugs } from '@/data/locations'
import { getTechnologySlugs } from '@/data/technologies'

const BASE_URL = 'https://trident-software.ch'

export default function sitemap(): MetadataRoute.Sitemap {
  const servicesSlugs = [
    'ai-services', 'logistics-and-operations-platforms', 'software-engineering',
    'embedded-and-iot', 'cto-as-a-service',
  ]

  const industrySlugs = [
    'trade-and-building-materials', 'professional-services', 'startups-cto',
    'healthcare', 'automotive', 'logistics', 'fintech',
    'retail-ecommerce', 'saas', 'manufacturing', 'proptech',
    'hospitality', 'fashion-lifestyle',
    'tourism', 'fmcg', 'diy-tools', 'catering', 'blockchain',
    'social-media', 'games', 'sport-activities', 'education',
  ]

  const caseSlugs = [
    'kleap-ai-builder', 'zenit-auto-b2b', '8move-driver',
    'tdsbot-iot', 'lapochette', 'iam-trade',
    'arenawave', 'go-valais',
    'post-acute-clinic-network', 'clinic-voice-documentation',
    'fiduciary-mail-and-receipts', 'warranty-control-component-maker',
    'building-materials-order-to-load', 'letting-agency-enquiry-to-viewing',
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
    { url: `${BASE_URL}/use-cases`, changeFrequency: 'monthly', priority: 0.8 },    { url: `${BASE_URL}/solutions`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/solutions/websites`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/web-brochure`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/sme-website`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/user-portal`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/websites/online-boutique`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/products/iam-trade`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/solutions/e-commerce`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/locations`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/technologies`, changeFrequency: 'monthly', priority: 0.8 },
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

  // Tag pages: lower-cased slug of each tag, as /topics/[tag] builds them.
  // Tags with fewer than 3 posts are noindex (see topics/[tag]/page.tsx), so they stay out.
  const tagCount = new Map<string, number>()
  for (const p of blogPosts) {
    const slugs = new Set(
      p.tags.map((tag) => tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')),
    )
    for (const s of slugs) tagCount.set(s, (tagCount.get(s) ?? 0) + 1)
  }
  const topicSlugs = [...tagCount].filter(([, n]) => n >= TOPIC_MIN_POSTS).map(([s]) => s)
  const topicRoutes: MetadataRoute.Sitemap = topicSlugs.map((tag) => ({
    url: `${BASE_URL}/topics/${tag}`,
    changeFrequency: 'weekly',
    priority: 0.4,
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

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseRoutes,
    ...blogRoutes,
    ...topicRoutes,
    ...locationRoutes,
    ...technologyRoutes,
  ]
}
