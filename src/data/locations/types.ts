import { type Localized } from '@/lib/localized'

/** Text fields of a location page, written once per locale. */
export type LocationText = {
  name: string
  region: string
  tagline: string
  description: string
  keyIndustries: string[]
  highlights: { title: string; description: string }[]
  meta: { title: string; description: string }
}

export type LocationRecord = {
  slug: string
  relatedServices: string[]
  relatedCases: string[]
  content: Localized<LocationText>
}

/** A location with its text resolved to one locale. */
export type LocationData = Omit<LocationRecord, 'content'> & LocationText
