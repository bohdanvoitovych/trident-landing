import { pick, localesOf } from '@/lib/localized'
import type { IndustryRecord, IndustryData } from './types'
import trade_and_building_materials from './trade-and-building-materials'
import proptech from './proptech'
import healthcare from './healthcare'
import retail_ecommerce from './retail-ecommerce'
import hospitality from './hospitality'
import professional_services from './professional-services'
import education from './education'
import startups_cto from './startups-cto'
import automotive from './automotive'
import logistics from './logistics'
import fintech from './fintech'
import saas from './saas'
import manufacturing from './manufacturing'
import fashion_lifestyle from './fashion-lifestyle'
import tourism from './tourism'
import fmcg from './fmcg'
import diy_tools from './diy-tools'
import catering from './catering'
import blockchain from './blockchain'
import social_media from './social-media'
import games from './games'
import sport_activities from './sport-activities'

export type * from './types'

// The first eight follow the PDF ranking ("where the case is strongest").
const records: IndustryRecord[] = [
  trade_and_building_materials,
  proptech,
  healthcare,
  retail_ecommerce,
  hospitality,
  professional_services,
  education,
  startups_cto,
  automotive,
  logistics,
  fintech,
  saas,
  manufacturing,
  fashion_lifestyle,
  tourism,
  fmcg,
  diy_tools,
  catering,
  blockchain,
  social_media,
  games,
  sport_activities,
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
