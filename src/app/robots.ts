import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
