import { readdirSync } from 'node:fs'
import path from 'node:path'
// @ts-expect-error Next ships no types for its compiled path-to-regexp
import { pathToRegexp } from 'next/dist/compiled/path-to-regexp'
import { describe, expect, it } from 'vitest'
import { routing } from '@/i18n/routing'
import nextConfig from '../../../next.config.mjs'
import { OLD_POST_SLUGS, RENAMED_POST_SLUGS, TOPIC_REDIRECTS, buildOldPostRedirects } from './old-post-slugs.mjs'
import { getPostSlugs } from '@/data/blog'

type Redirect = { source: string; destination: string; permanent: boolean }

const old = buildOldPostRedirects() as Redirect[]
const mine = [...old, ...(TOPIC_REDIRECTS as Redirect[])]

const frontendDir = path.resolve(__dirname, '../../app/(frontend)')
const topLevelRoutes = readdirSync(frontendDir, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name.replace(/^\(.*\)$/, ''))
  .filter(Boolean)

describe('old post redirects', () => {
  it('has 46 old slugs plus the renamed one, each with and without trailing slash', () => {
    expect(OLD_POST_SLUGS).toHaveLength(46)
    expect(old).toHaveLength((46 + 1) * 2)
  })

  it('old slugs are unique', () => {
    expect(new Set(OLD_POST_SLUGS).size).toBe(OLD_POST_SLUGS.length)
  })

  it('every redirect is permanent', () => {
    for (const r of mine) expect(r.permanent).toBe(true)
  })

  it('every source is valid Next path syntax', () => {
    for (const r of mine) {
      expect(r.source.startsWith('/')).toBe(true)
      expect(() => pathToRegexp(r.source)).not.toThrow()
    }
  })

  it('every target post exists in the blog data', () => {
    const known = new Set(getPostSlugs())
    for (const r of old) {
      expect(r.destination.startsWith('/blog/')).toBe(true)
      expect(known.has(r.destination.slice('/blog/'.length)), r.destination).toBe(true)
    }
    for (const slug of OLD_POST_SLUGS) expect(known.has(slug), slug).toBe(true)
  })

  it('does not shadow an existing route or locale prefix', () => {
    const reserved = new Set([...topLevelRoutes, ...routing.locales, 'blog', 'api', 'topics'])
    for (const slug of [...OLD_POST_SLUGS, ...Object.keys(RENAMED_POST_SLUGS)]) {
      expect(reserved.has(slug), slug).toBe(false)
    }
  })

  it('renamed slug differs from its target', () => {
    for (const [from, to] of Object.entries(RENAMED_POST_SLUGS)) expect(from).not.toBe(to)
  })

  it('maps /topics/:tag and its trailing-slash form to /blog', () => {
    expect(TOPIC_REDIRECTS.map((r: Redirect) => r.source)).toEqual(['/topics/:tag', '/topics/:tag/'])
    for (const r of TOPIC_REDIRECTS as Redirect[]) expect(r.destination).toBe('/blog')
  })
})

describe('next.config redirects()', () => {
  it('has no duplicate sources and no loops', async () => {
    const all = (await nextConfig.redirects!()) as Redirect[]
    const sources = all.map((r) => r.source)
    expect(sources.filter((s, i) => sources.indexOf(s) !== i)).toEqual([])
    const set = new Set(sources)
    for (const r of all) {
      expect(r.destination, r.source).not.toBe(r.source)
      expect(set.has(r.destination), `${r.source} -> ${r.destination}`).toBe(false)
    }
  })

  it('includes the old-post and topic redirects', async () => {
    const all = (await nextConfig.redirects!()) as Redirect[]
    for (const r of mine) expect(all).toContainEqual(r)
  })
})
