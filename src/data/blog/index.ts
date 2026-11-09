import { routing } from '@/i18n/routing'
import type { BlogPost, BlogPostRecord } from './types'
import { posts as batch_01 } from './batch-01'
import { posts as batch_02 } from './batch-02'
import { posts as batch_03 } from './batch-03'
import { posts as batch_04 } from './batch-04'
import { posts as batch_05 } from './batch-05'
import { posts as batch_06 } from './batch-06'
import { posts as batch_07 } from './batch-07'
import { posts as batch_08 } from './batch-08'
import { posts as batch_09 } from './batch-09'

export type * from './types'

const records: BlogPostRecord[] = [...batch_01, ...batch_02, ...batch_03, ...batch_04, ...batch_05, ...batch_06, ...batch_07, ...batch_08, ...batch_09]

/** The post in `locale`. Fields not translated yet fall back to English. */
const localize = (r: BlogPostRecord, locale: string): BlogPost => {
  const { translations, ...post } = r
  const t = translations?.[locale as keyof NonNullable<BlogPostRecord['translations']>]
  return t ? { ...post, ...t, faq: t.faq ?? post.faq } : post
}

export function getPosts(locale: string): BlogPost[] {
  return records.map((r) => localize(r, locale))
}

export function getPostBySlug(slug: string, locale: string): BlogPost | undefined {
  const r = records.find((p) => p.slug === slug)
  return r && localize(r, locale)
}

export function getPostSlugs(): string[] {
  return records.map((p) => p.slug)
}

export function getRelatedPosts(slugs: string[], locale: string): BlogPost[] {
  return getPosts(locale).filter((p) => slugs.includes(p.slug))
}

/** English plus every locale whose article body is written. */
export function getPostLocales(slug: string) {
  const r = records.find((p) => p.slug === slug)
  if (!r) return []
  return routing.locales.filter((l) => l === 'en' || !!r.translations?.[l]?.content)
}
