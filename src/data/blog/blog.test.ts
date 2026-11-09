import { existsSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it, vi } from 'vitest'
import { getPosts, getPostSlugs, getPostLocales, getPublishedPosts } from '.'
import { posts as batch08 } from './batch-08'
import { posts as batch09All } from './batch-09'

const EN_ONLY_SLUG = 'synthetic-en-only-post'

// Once every real post is translated no English-only post is left, so the tests add one.
vi.mock('./batch-09', async (importOriginal) => {
  const real = await importOriginal<typeof import('./batch-09')>()
  return { posts: [...real.posts, { ...real.posts[0], translations: undefined, slug: 'synthetic-en-only-post', relatedPosts: [] }] }
})

const batch09 = batch09All.filter((p) => p.slug !== EN_ONLY_SLUG)
const allPosts = getPosts('en')
const posts = allPosts.filter((p) => p.slug !== EN_ONLY_SLUG)
const publicDir = path.resolve(__dirname, '../../../public')

describe('blog data', () => {
  it('has 82 posts with unique slugs', () => {
    expect(posts).toHaveLength(82)
    expect(new Set(getPostSlugs().filter((s) => s !== EN_ONLY_SLUG)).size).toBe(82)
  })

  it('every post image is a local file that exists', () => {
    for (const p of posts) {
      if (!p.image) continue
      expect(p.image.startsWith('/'), p.slug).toBe(true)
      expect(existsSync(path.join(publicDir, p.image)), `${p.slug}: ${p.image}`).toBe(true)
    }
  })

  it('every EN meta description is at most 160 characters', () => {
    for (const p of posts) expect(p.meta.description.length, p.slug).toBeLessThanOrEqual(160)
  })

  it('relatedPosts point to posts that exist', () => {
    const known = new Set(getPostSlugs())
    for (const p of posts) for (const r of p.relatedPosts) expect(known.has(r), `${p.slug} -> ${r}`).toBe(true)
  })

  it('a post with no translations is published in English only', () => {
    expect(getPostLocales(EN_ONLY_SLUG)).toEqual(['en'])
  })

  it('lists EN-only posts in English only; other locales list translated posts', () => {
    const enOnly = EN_ONLY_SLUG
    expect(getPublishedPosts('en')).toHaveLength(allPosts.length)
    for (const l of ['de', 'fr', 'it']) {
      const slugs = getPublishedPosts(l).map((p) => p.slug)
      expect(slugs).not.toContain(enOnly)
      expect(slugs.length).toBeLessThan(allPosts.length)
      for (const s of slugs) expect(getPostLocales(s)).toContain(l)
    }
  })

  it.each([
    ['batch-08', batch08, 18],
    ['batch-09', batch09, 18],
  ])('every %s post has de, fr and it text, each different from English', (_name, batch, count) => {
    expect(batch).toHaveLength(count)
    for (const p of batch) {
      expect(getPostLocales(p.slug), p.slug).toEqual(['en', 'de', 'fr', 'it'])
      for (const l of ['de', 'fr', 'it'] as const) {
        const t = p.translations?.[l]
        expect(t, `${p.slug}/${l}`).toBeTruthy()
        for (const field of [t!.title, t!.excerpt, t!.content, t!.meta.title, t!.meta.description]) {
          expect(field.trim().length, `${p.slug}/${l}`).toBeGreaterThan(0)
        }
        expect(t!.meta.description.length, `${p.slug}/${l} meta`).toBeLessThanOrEqual(160)
        expect(t!.title, `${p.slug}/${l} title`).not.toBe(p.title)
        expect(t!.content, `${p.slug}/${l} content`).not.toBe(p.content)
      }
    }
  })
})
