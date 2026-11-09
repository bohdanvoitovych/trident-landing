// @ts-expect-error Next ships no types for its compiled path-to-regexp
import { pathToRegexp } from 'next/dist/compiled/path-to-regexp'
import { describe, expect, it } from 'vitest'
import { getIndustrySlugs } from '@/data/industries'
import { getServiceSlugs } from '@/data/services'
import nextConfig from '../../../next.config.mjs'
import { REMOVED_INDUSTRY_SLUGS, REMOVED_SERVICE_SLUGS, buildRemovedSlugRedirects } from './removed-slugs.mjs'

type Redirect = { source: string; destination: string; permanent: boolean }

const PREFIXES = ['', '/de', '/fr', '/it']

describe('removed industry and service redirects (D1, D2)', () => {
  const mine = buildRemovedSlugRedirects() as Redirect[]

  it('covers the six industries and four services removed by the owner', () => {
    expect([...REMOVED_INDUSTRY_SLUGS].sort()).toEqual(
      ['agriculture', 'energy', 'insurance', 'legaltech', 'media-entertainment', 'public-sector'].sort(),
    )
    expect([...REMOVED_SERVICE_SLUGS].sort()).toEqual(
      ['cloud-consulting', 'devops-and-sre', 'team-extension', 'ui-ux-design'].sort(),
    )
    expect(mine).toHaveLength((6 + 4) * PREFIXES.length * 2)
  })

  it('sends every locale and trailing-slash form to the listing in the same locale', () => {
    const groups: [string, readonly string[]][] = [
      ['industries', REMOVED_INDUSTRY_SLUGS],
      ['services', REMOVED_SERVICE_SLUGS],
    ]
    for (const [kind, slugs] of groups) {
      for (const slug of slugs) {
        for (const prefix of PREFIXES) {
          for (const tail of ['', '/']) {
            expect(mine).toContainEqual({
              source: `${prefix}/${kind}/${slug}${tail}`,
              destination: `${prefix}/${kind}`,
              permanent: true,
            })
          }
        }
      }
    }
  })

  it('every source is valid Next path syntax', () => {
    for (const r of mine) expect(() => pathToRegexp(r.source)).not.toThrow()
  })

  it('no removed slug is still a live page', () => {
    const live = new Set([...getIndustrySlugs(), ...getServiceSlugs()])
    for (const slug of [...REMOVED_INDUSTRY_SLUGS, ...REMOVED_SERVICE_SLUGS]) expect(live.has(slug), slug).toBe(false)
  })

  it('next.config includes them, with no duplicate, loop or chain', async () => {
    const all = (await nextConfig.redirects!()) as Redirect[]
    for (const r of mine) expect(all).toContainEqual(r)
    const sources = all.map((r) => r.source)
    expect(sources.filter((s, i) => sources.indexOf(s) !== i)).toEqual([])
    const set = new Set(sources)
    for (const r of all) {
      expect(r.destination, r.source).not.toBe(r.source)
      expect(set.has(r.destination), `${r.source} -> ${r.destination}`).toBe(false)
    }
  })

  it('no other redirect targets a removed industry or service', async () => {
    const all = (await nextConfig.redirects!()) as Redirect[]
    const removed = new RegExp(
      `/(industries/(${REMOVED_INDUSTRY_SLUGS.join('|')})|services/(${REMOVED_SERVICE_SLUGS.join('|')}))/?$`,
    )
    for (const r of all) expect(removed.test(r.destination), `${r.source} -> ${r.destination}`).toBe(false)
  })
})
