import { afterEach, describe, expect, it, vi } from 'vitest'
import robots from '../robots'
import sitemap from '../sitemap'

afterEach(() => vi.unstubAllEnvs())

describe('robots', () => {
  it('disallows everything and has no sitemap when NEXT_PUBLIC_NOINDEX=1', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '1')
    const r = robots()
    expect(r.rules).toEqual({ userAgent: '*', disallow: '/' })
    expect(r.sitemap).toBeUndefined()
  })

  it('allows everything and lists the sitemap otherwise', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '')
    const r = robots()
    expect(r.rules).toEqual({ userAgent: '*', allow: '/' })
    expect(r.sitemap).toMatch(/\/sitemap\.xml$/)
  })
})

describe('sitemap', () => {
  it('is empty when NEXT_PUBLIC_NOINDEX=1', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '1')
    expect(sitemap()).toEqual([])
  })

  it('lists URLs otherwise', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '')
    expect(sitemap().length).toBeGreaterThan(0)
  })
})
