import type { MetadataRoute } from 'next'
import { SITE_URL, isNoIndexSite } from '@/lib/metadata'

export default function robots(): MetadataRoute.Robots {
  if (isNoIndexSite()) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
