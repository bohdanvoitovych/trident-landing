const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://trident-software.ch'

const LOCALE_TO_BCP47: Record<string, string> = {
  en: 'en',
  de: 'de-CH',
  fr: 'fr-CH',
  it: 'it-CH',
}

function bcp47(locale: string): string {
  return LOCALE_TO_BCP47[locale] || locale
}

export function organizationSchema(locale: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Trident Software Sàrl',
    url: SITE_URL,
    logo: `${SITE_URL}/images/trident-icon-white.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@trident-software.ch',
      contactType: 'sales',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: "Rue de l'Industrie 23",
      addressLocality: 'Sion',
      addressRegion: 'Valais',
      postalCode: '1950',
      addressCountry: 'CH',
    },
    inLanguage: bcp47(locale),
  }
}

export function webSiteSchema(locale: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Trident Software',
    url: SITE_URL,
    inLanguage: bcp47(locale),
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[],
  locale: string,
): Record<string, unknown> | null {
  if (!faqs || faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: bcp47(locale),
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function homePageSchemas(locale: string): Record<string, unknown>[] {
  return [organizationSchema(locale), webSiteSchema(locale)]
}

export function blogPostSchema(
  post: {
    slug: string
    title: string
    excerpt: string
    author: string
    publishedAt: string
    faq?: { question: string; answer: string }[]
  },
  locale: string,
): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Trident Software',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/trident-icon-white.svg`,
        },
      },
      inLanguage: bcp47(locale),
    },
  ]

  if (post.faq && post.faq.length > 0) {
    const faqSchema = faqPageSchema(post.faq, locale)
    if (faqSchema) schemas.push(faqSchema)
  }

  return schemas
}

export function servicePageSchema(
  service: { slug: string; title: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: service.title,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: bcp47(locale),
      areaServed: {
        '@type': 'Place',
        name: 'Switzerland',
      },
    },
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Services', url: `${SITE_URL}/services` },
      { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
    ]),
  ]
}

export function industryPageSchemas(
  industry: { slug: string; title: string; tagline: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  const url = `${SITE_URL}/industries/${industry.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: industry.title,
      description: industry.description,
      url,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Trident Software Sàrl',
        url: SITE_URL,
      },
      areaServed: { '@type': 'Place', name: 'Switzerland' },
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Industries', url: `${SITE_URL}/industries` },
      { name: industry.title, url },
    ]),
  ]
}

export function locationPageSchemas(
  location: { slug: string; name: string; tagline: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  const url = `${SITE_URL}/locations/${location.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#location-${location.slug}`,
      name: `Trident Software — ${location.name}`,
      description: location.description,
      url,
      areaServed: {
        '@type': 'City',
        name: location.name,
        addressCountry: 'CH',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: "Rue de l'Industrie 23",
        addressLocality: 'Sion',
        addressRegion: 'Valais',
        postalCode: '1950',
        addressCountry: 'CH',
      },
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Locations', url: `${SITE_URL}/locations` },
      { name: location.name, url },
    ]),
  ]
}

export function technologyPageSchemas(
  tech: { slug: string; name: string; tagline: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  const url = `${SITE_URL}/technologies/${tech.slug}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${tech.name} Development Switzerland`,
      description: tech.description,
      url,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Trident Software Sàrl',
        url: SITE_URL,
      },
      areaServed: { '@type': 'Place', name: 'Switzerland' },
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Technologies', url: `${SITE_URL}/technologies` },
      { name: tech.name, url },
    ]),
  ]
}
