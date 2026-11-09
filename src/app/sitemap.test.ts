import { describe, expect, it } from 'vitest'
import { getPostLocales, getPostSlugs } from '@/data/blog'
import sitemap from './sitemap'

const entries = sitemap()
const forPost = (slug: string) => entries.filter((e) => e.url.endsWith(`/blog/${slug}`))

describe('sitemap locales', () => {
  it('an EN-only post has one entry and no de/fr/it alternates', () => {
    const slug = 'graph-databases-connected-data-for-business-success'
    expect(getPostLocales(slug)).toEqual(['en'])
    const e = forPost(slug)
    expect(e).toHaveLength(1)
    expect(Object.keys(e[0].alternates!.languages!).sort()).toEqual(['en', 'x-default'])
  })

  it('a fully translated post has 4 entries with 4 locales plus x-default', () => {
    const slug = getPostSlugs().find((s) => getPostLocales(s).length === 4)!
    expect(slug).toBeTruthy()
    const e = forPost(slug)
    expect(e).toHaveLength(4)
    expect(Object.keys(e[0].alternates!.languages!).sort()).toEqual(['de-CH', 'en', 'fr-CH', 'it-CH', 'x-default'])
  })

  it('static pages keep all 4 locales', () => {
    expect(entries.filter((e) => /\/about$/.test(e.url))).toHaveLength(4)
  })
})
