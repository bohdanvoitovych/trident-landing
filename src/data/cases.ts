import { pick, localesOf, type Localized } from '@/lib/localized'
import { PDF_CASES } from './case-studies'

export type CaseResult = {
  metric: string
  value: string
}

export type CaseTestimonial = {
  text: string
  author: string
  role: string
}

/** A free-form block of a long case study: a heading, paragraphs and/or a bullet list. */
export type CaseSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  /** Paragraphs that follow the bullet list. */
  closing?: string[]
}

/** A before/after comparison, one row per measured or modelled figure. */
export type CaseTable = {
  title: string
  beforeLabel: string
  afterLabel: string
  rows: Array<{ label: string; before: string; after: string }>
}

/**
 * Text fields of a case study, written once per locale. `hero.image` is the same in every locale.
 * Short cases fill challenge/approach/solution. Long cases (the PDF write-ups) leave them out
 * and use `sections`, `table` and the "next" / "elsewhere" lists instead.
 */
export type CaseText = {
  /** Anonymised client description, when it needs translating. Overrides the record's `client`. */
  client?: string
  industry: string
  hero: {
    title: string
    tagline: string
    image?: string
  }
  challenge?: string
  approach?: string
  solution?: string
  results: CaseResult[]
  /** One-line note under the hero: how the case is written up and where the figures come from. */
  note?: string
  sections?: CaseSection[]
  table?: CaseTable
  /** Paragraphs that explain the table, shown right below it. */
  afterTable?: string[]
  /** "What happens next": an optional lead-in sentence, then a numbered list. */
  nextIntro?: string
  next?: string[]
  /** "Where else this applies": a lead-in sentence, then a bullet list. */
  elsewhereIntro?: string
  elsewhere?: string[]
  /** A closing sentence after the "Where else this applies" list. */
  elsewhereOutro?: string
  testimonial?: CaseTestimonial
  meta: {
    title: string
    description: string
  }
}

export type CaseRecord = {
  slug: string
  /** ISO date the case study was written, not the project's launch date. */
  publishedAt?: string
  client: string
  services: string[]
  techStack: string[]
  /** Whether the figures were counted in production or calculated from real volumes. */
  evidence?: 'measured' | 'modelled'
  relatedCases: string[]
  content: Localized<CaseText>
}

/** A case study with its text resolved to one locale. */
export type CaseData = Omit<CaseRecord, 'content'> & Omit<CaseText, 'client'>

// Only the PDF case studies. The project write-ups that sat here had no source and were removed;
// the projects themselves are in projects.ts with the old site's own descriptions.
const records: CaseRecord[] = PDF_CASES

const localize = (r: CaseRecord, locale: string): CaseData => {
  const { content, ...rest } = r
  const { client, ...text } = pick(content, locale)
  return { ...rest, ...text, client: client ?? r.client }
}

/** Cases without a screenshot; their cards get a stock photo (the PDF cases use the homepage photos). */
const FALLBACK_IMAGE: Record<string, string> = {
  'post-acute-clinic-network': '/images/stock/clinic.jpg',
  'clinic-voice-documentation': '/images/stock/clinic-2.jpg',
  'warranty-control-component-maker': '/images/stock/water-telemetry.jpg',
  'fiduciary-mail-and-receipts': '/images/stock/office-2.jpg',
  'building-materials-order-to-load': '/images/stock/dispatch.jpg',
  'letting-agency-enquiry-to-viewing': '/images/stock/workspace.jpg',
}

/** The card photo of a case: its screenshot, else a stock photo. */
export function caseImage(c: CaseData) {
  return c.hero.image ?? FALLBACK_IMAGE[c.slug]
}

/** Every write-up here is a case study under /cases. */
export const isCaseStudy = (slug: string) => records.some((r) => r.slug === slug)

export const caseHref = (slug: string) => `/cases/${slug}`

export function getCaseStudies(locale: string): CaseData[] {
  return getCases(locale).filter((c) => isCaseStudy(c.slug))
}

export function getCases(locale: string): CaseData[] {
  return records.map((r) => localize(r, locale))
}

export function getCaseBySlug(slug: string, locale: string): CaseData | undefined {
  const r = records.find((x) => x.slug === slug)
  return r && localize(r, locale)
}

export function getCaseSlugs(): string[] {
  return records.map((x) => x.slug)
}

export function getCaseLocales(slug: string) {
  const r = records.find((x) => x.slug === slug)
  return r ? localesOf(r.content) : []
}

export function getRelatedCases(slugs: string[], locale: string): CaseData[] {
  return getCases(locale).filter((c) => slugs.includes(c.slug))
}
