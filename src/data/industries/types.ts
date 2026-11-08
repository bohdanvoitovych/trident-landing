import { type Localized } from '@/lib/localized'

/** Text fields of an industry page, written once per locale. */
export type IndustryText = {
  title: string
  tagline: string
  description: string
  challenges: { title: string; description: string }[]
  solutions: { title: string; description: string }[]
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
