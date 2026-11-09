import type { MetadataRoute } from 'next'
import { isNoIndexSite } from '@/lib/metadata'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'

export default function robots(): MetadataRoute.Robots {
  if (isNoIndexSite()) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
