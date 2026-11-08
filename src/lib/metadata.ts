import type { Metadata } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'
const SITE_NAME = 'Trident Software'
const FALLBACK_OG_IMAGE = `${SITE_URL}/og-default.png`

const LOCALES = ['en', 'de', 'fr', 'it'] as const
type Locale = (typeof LOCALES)[number]

/** Absolute URL of `path` in `locale`. English has no prefix (localePrefix: 'as-needed'). */
export function localizedUrl(path: string, locale: string = 'en'): string {
  const clean = path === '/' ? '' : path
  const prefix = locale === 'en' ? '' : `/${locale}`
  return `${SITE_URL}${prefix}${clean}` || SITE_URL
}

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
  /**
   * Locales that have their own text for this page. Defaults to all. A locale
   * left out is dropped from hreflang, and the page in that locale is noindexed
   * instead of passing English off as a translation.
   */
  availableLocales?: readonly string[]
}

export function buildMetadata({
  title,
  description,
  path,
  locale = 'en',
  ogImage,
  noIndex,
  availableLocales = LOCALES,
}: PageMetadataOptions): Metadata {
  const published = LOCALES.filter((l) => l === 'en' || availableLocales.includes(l))
  const isTranslated = published.includes(locale as Locale)
  const canonicalUrl = localizedUrl(path, isTranslated ? locale : 'en')

  const languages: Record<string, string> = {}
  for (const loc of published) {
    languages[HREFLANG_MAP[loc]] = localizedUrl(path, loc)
  }
  languages['x-default'] = localizedUrl(path, 'en')

  const ogLocale = OG_LOCALE_MAP[locale as Locale] || 'en_US'
  const alternateLocales = published.filter((l) => l !== locale).map(
    (l) => OG_LOCALE_MAP[l],
  )
  if (!isTranslated) noIndex = true
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
