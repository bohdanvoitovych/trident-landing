import { existsSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { getPosts, getPostSlugs, getPostLocales } from '.'

const posts = getPosts('en')
const publicDir = path.resolve(__dirname, '../../../public')

describe('blog data', () => {
  it('has 82 posts with unique slugs', () => {
    expect(posts).toHaveLength(82)
    expect(new Set(getPostSlugs()).size).toBe(82)
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
    expect(getPostLocales('graph-databases-connected-data-for-business-success')).toEqual(['en'])
  })
})
