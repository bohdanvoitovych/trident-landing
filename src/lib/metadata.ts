import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'
const SITE_NAME = 'Trident Software'
const FALLBACK_OG_IMAGE = `${SITE_URL}/og-default.png`

const LOCALES = ['en', 'de', 'fr', 'it'] as const
type Locale = (typeof LOCALES)[number]

// BCP 47 tags for hreflang
const HREFLANG_MAP: Record<Locale, string> = {
  en: 'en',
  de: 'de-CH',
  fr: 'fr-CH',
  it: 'it-CH',
}

// OG locale format
const OG_LOCALE_MAP: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_CH',
  fr: 'fr_CH',
  it: 'it_CH',
}

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  locale?: string
  ogImage?: string
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path,
  locale = 'en',
  ogImage,
  noIndex,
}: PageMetadataOptions): Metadata {
  // trident-landing uses localePrefix:'never' — all locales share the same URL
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`

  // hreflang: all locales point to same URL (content negotiation pattern)
  const languages: Record<string, string> = {}
  for (const loc of LOCALES) {
    languages[HREFLANG_MAP[loc]] = canonicalUrl
  }
  languages['x-default'] = canonicalUrl

  const ogLocale = OG_LOCALE_MAP[locale as Locale] || 'en_US'
  const alternateLocales = LOCALES.filter((l) => l !== locale).map(
    (l) => OG_LOCALE_MAP[l],
  )
  const image = ogImage || FALLBACK_OG_IMAGE

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type: 'website',
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
