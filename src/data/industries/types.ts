import { type Localized } from '@/lib/localized'

/** Text fields of an industry page, written once per locale. */
export type IndustryText = {
  title: string
  tagline: string
  /** Second line of the hero. An empty string hides it. */
  description: string
  challenges: { title: string; description: string }[]
  /** Line under "What we solve". Undefined uses the generic sentence; an empty string hides it. */
  challengesLead?: string
  solutions: { title: string; description: string }[]
  /** Line under "Solutions we deliver". Undefined uses the generic sentence; an empty string hides it. */
  solutionsLead?: string
  meta: {
    title: string
    description: string
  }
}

export type IndustryRecord = {
  slug: string
  icon: string
  techStack: string[]
  relatedCases: string[]
  relatedServices: string[]
  content: Localized<IndustryText>
}

/** An industry with its text resolved to one locale. */
export type IndustryData = Omit<IndustryRecord, 'content'> & IndustryText
