import { pick, localesOf } from '@/lib/localized'
import type { IndustryRecord, IndustryData } from './types'
import healthcare from './healthcare'
import automotive from './automotive'
import logistics from './logistics'
import fintech from './fintech'
import retail_ecommerce from './retail-ecommerce'
import saas from './saas'
import manufacturing from './manufacturing'
import proptech from './proptech'
import energy from './energy'
import insurance from './insurance'
import hospitality from './hospitality'
import legaltech from './legaltech'
import fashion_lifestyle from './fashion-lifestyle'
import agriculture from './agriculture'
import public_sector from './public-sector'
import media_entertainment from './media-entertainment'
import tourism from './tourism'
import fmcg from './fmcg'
import diy_tools from './diy-tools'
import catering from './catering'
import blockchain from './blockchain'
import social_media from './social-media'
import games from './games'
import sport_activities from './sport-activities'
import education from './education'

export type * from './types'

const records: IndustryRecord[] = [
  healthcare,
  automotive,
  logistics,
  fintech,
  retail_ecommerce,
  saas,
  manufacturing,
  proptech,
  energy,
  insurance,
  hospitality,
  legaltech,
  fashion_lifestyle,
  agriculture,
  public_sector,
  media_entertainment,
  tourism,
  fmcg,
  diy_tools,
  catering,
  blockchain,
  social_media,
  games,
  sport_activities,
  education,
]

const localize = (r: IndustryRecord, locale: string): IndustryData => {
  const { content, ...rest } = r
  return { ...rest, ...pick(content, locale) }
}

export function getIndustries(locale: string): IndustryData[] {
  return records.map((r) => localize(r, locale))
}

export function getIndustryBySlug(slug: string, locale: string): IndustryData | undefined {
  const r = records.find((x) => x.slug === slug)
  return r && localize(r, locale)
}

export function getIndustrySlugs(): string[] {
  return records.map((x) => x.slug)
}

export function getIndustryLocales(slug: string) {
  const r = records.find((x) => x.slug === slug)
  return r ? localesOf(r.content) : []
}
