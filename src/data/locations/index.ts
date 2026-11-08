import { pick, localesOf } from '@/lib/localized'
import type { LocationRecord, LocationData } from './types'
import zurich from './zurich'
import geneva from './geneva'
import bern from './bern'
import basel from './basel'
import lausanne from './lausanne'
import zug from './zug'
import lucerne from './lucerne'
import sion from './sion'
import lugano from './lugano'
import st_gallen from './st-gallen'
import winterthur from './winterthur'
import fribourg from './fribourg'

export type * from './types'

const records: LocationRecord[] = [
  zurich,
  geneva,
  bern,
  basel,
  lausanne,
  zug,
  lucerne,
  sion,
  lugano,
  st_gallen,
  winterthur,
  fribourg,
]

const localize = (r: LocationRecord, locale: string): LocationData => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getLocations(locale: string): LocationData[] {
  return records.map((r) => localize(r, locale))
}

export function getLocationBySlug(slug: string, locale: string): LocationData | undefined {
  const r = records.find((x) => x.slug === slug)
  return r && localize(r, locale)
}

export function getLocationSlugs(): string[] {
  return records.map((x) => x.slug)
}

export function getLocationLocales(slug: string) {
  const r = records.find((x) => x.slug === slug)
  return r ? localesOf(r.content) : []
}
