import { SITE_URL, localizedUrl } from './metadata'
import { caseHref, isCaseStudy } from '@/data/cases'

const LOCALE_TO_BCP47: Record<string, string> = {
  en: 'en',
  de: 'de-CH',
  fr: 'fr-CH',
  it: 'it-CH',
}

function bcp47(locale: string): string {
  return LOCALE_TO_BCP47[locale] || locale
}

// Breadcrumb and place names in structured data, per locale.
const LABELS = {
  en: { home: 'Home', cases: 'Case studies', projects: 'Projects', services: 'Services', industries: 'Industries', locations: 'Locations', technologies: 'Technologies', switzerland: 'Switzerland', techService: (n: string) => `${n} Development Switzerland` },
  de: { home: 'Startseite', cases: 'Fallstudien', projects: 'Projekte', services: 'Dienstleistungen', industries: 'Branchen', locations: 'Standorte', technologies: 'Technologien', switzerland: 'Schweiz', techService: (n: string) => `${n}-Entwicklung Schweiz` },
  fr: { home: 'Accueil', cases: 'Études de cas', projects: 'Projets', services: 'Services', industries: 'Secteurs', locations: 'Régions', technologies: 'Technologies', switzerland: 'Suisse', techService: (n: string) => `Développement ${n} en Suisse` },
  it: { home: 'Home', cases: 'Casi studio', projects: 'Progetti', services: 'Servizi', industries: 'Settori', locations: 'Località', technologies: 'Tecnologie', switzerland: 'Svizzera', techService: (n: string) => `Sviluppo ${n} in Svizzera` },
}
const labels = (locale: string) => LABELS[locale as keyof typeof LABELS] ?? LABELS.en

export function organizationSchema(locale: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    // ProfessionalService is a LocalBusiness: the one real office, in Sion. The logo must read on white.
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: 'Trident Software Sàrl',
    url: SITE_URL,
    logo: `${SITE_URL}/images/trident-logo-black.png`,
    image: `${SITE_URL}/og-default.png`,
    sameAs: [
      'https://www.linkedin.com/company/tridentsoftware/',
      'https://www.facebook.com/profile.php?id=100092674509471',
      'https://www.instagram.com/trident_software_official/',
    ],
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
    image?: string
    faq?: { question: string; answer: string }[]
  },
  locale: string,
): Record<string, unknown>[] {
  const url = localizedUrl(`/blog/${post.slug}`, locale)
  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(post.image && { image: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}` }),
      datePublished: post.publishedAt,
      // No separate last-edited date is tracked, so it mirrors publishedAt.
      dateModified: post.publishedAt,
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
          url: `${SITE_URL}/images/trident-logo-black.png`,
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
      url: localizedUrl(`/services/${service.slug}`, locale),
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: bcp47(locale),
      areaServed: {
        '@type': 'Place',
        name: labels(locale).switzerland,
      },
    },
    breadcrumbSchema([
      { name: labels(locale).home, url: localizedUrl('/', locale) },
      { name: labels(locale).services, url: localizedUrl('/services', locale) },
      { name: service.title, url: localizedUrl(`/services/${service.slug}`, locale) },
    ]),
  ]
}

export function industryPageSchemas(
  industry: { slug: string; title: string; tagline: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  const url = localizedUrl(`/industries/${industry.slug}`, locale)
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: industry.title,
      description: industry.description || industry.tagline,
      url,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Trident Software Sàrl',
        url: SITE_URL,
      },
      areaServed: { '@type': 'Place', name: labels(locale).switzerland },
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: labels(locale).home, url: localizedUrl('/', locale) },
      { name: labels(locale).industries, url: localizedUrl('/industries', locale) },
      { name: industry.title, url },
    ]),
  ]
}

export function locationPageSchemas(
  location: { slug: string; name: string; tagline: string; description: string; meta?: { title: string } },
  locale: string,
): Record<string, unknown>[] {
  const url = localizedUrl(`/locations/${location.slug}`, locale)
  return [
    // A Service for the city, provided from Sion. Not a LocalBusiness: there is no office there.
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}/#location-${location.slug}`,
      name: location.meta ? pageName(location.meta.title) : location.name,
      description: location.description,
      url,
      provider: ORG_REF,
      areaServed: { '@type': 'City', name: location.name, address: { '@type': 'PostalAddress', addressCountry: 'CH' } },
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: labels(locale).home, url: localizedUrl('/', locale) },
      { name: labels(locale).locations, url: localizedUrl('/locations', locale) },
      { name: location.name, url },
    ]),
  ]
}

export function technologyPageSchemas(
  tech: { slug: string; name: string; tagline: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  const url = localizedUrl(`/technologies/${tech.slug}`, locale)
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: labels(locale).techService(tech.name),
      description: tech.description,
      url,
      provider: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Trident Software Sàrl',
        url: SITE_URL,
      },
      areaServed: { '@type': 'Place', name: labels(locale).switzerland },
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: labels(locale).home, url: localizedUrl('/', locale) },
      { name: labels(locale).technologies, url: localizedUrl('/technologies', locale) },
      { name: tech.name, url },
    ]),
  ]
}

const ORG_REF = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Trident Software Sàrl',
  url: SITE_URL,
}

/** Short page name for structured data: the metadata title without its "| Trident Software" tail. */
export function pageName(title: string): string {
  return title.split(' | ')[0].trim()
}

export type PageSchemaType = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'

/** A page with no data module of its own: its type schema plus a Home > page breadcrumb. */
export function webPageSchemas(
  page: { type: PageSchemaType; path: string; name: string; description: string },
  locale: string,
): Record<string, unknown>[] {
  const url = localizedUrl(page.path, locale)
  return [
    {
      '@context': 'https://schema.org',
      '@type': page.type,
      name: page.name,
      description: page.description,
      url,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: ORG_REF,
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: labels(locale).home, url: localizedUrl('/', locale) },
      { name: page.name, url },
    ]),
  ]
}

/** Case study page: an Article about the project, published by Trident. */
export function caseStudySchemas(
  c: { slug: string; title: string; description: string; image?: string; publishedAt?: string },
  locale: string,
): Record<string, unknown>[] {
  const url = localizedUrl(caseHref(c.slug), locale)
  const list = isCaseStudy(c.slug) ? '/cases' : '/projects'
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: c.title,
      description: c.description,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      // The date the case study was written, not the project's launch date.
      ...(c.publishedAt && { datePublished: c.publishedAt, dateModified: c.publishedAt }),
      ...(c.image && { image: c.image.startsWith('http') ? c.image : `${SITE_URL}${c.image}` }),
      author: ORG_REF,
      publisher: ORG_REF,
      inLanguage: bcp47(locale),
    },
    breadcrumbSchema([
      { name: labels(locale).home, url: localizedUrl('/', locale) },
      { name: isCaseStudy(c.slug) ? labels(locale).cases : labels(locale).projects, url: localizedUrl(list, locale) },
      { name: c.title, url },
    ]),
  ]
}
