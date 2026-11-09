import { afterEach, describe, expect, it, vi } from 'vitest'
import { buildMetadata } from '../metadata'

const base = { title: 'T', description: 'D', path: '/about' }

afterEach(() => vi.unstubAllEnvs())

describe('buildMetadata robots', () => {
  it('forces noindex when NEXT_PUBLIC_NOINDEX=1, even if noIndex is false', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '1')
    expect(buildMetadata({ ...base, noIndex: false }).robots).toEqual({ index: false, follow: false })
  })

  it('indexes a translated page when the flag is off', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '')
    expect(buildMetadata(base).robots).toEqual({ index: true, follow: true })
  })

  it('forces noindex on a new. host even when the flag is off', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '')
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://new.trident-software.ch')
    expect(buildMetadata(base).robots).toEqual({ index: false, follow: false })
  })

  it('does not force noindex on the production host', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '')
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://trident-software.ch')
    expect(buildMetadata(base).robots).toEqual({ index: true, follow: true })
  })

  it('keeps per-locale noindex when the flag is off', () => {
    vi.stubEnv('NEXT_PUBLIC_NOINDEX', '')
    const m = buildMetadata({ ...base, locale: 'de', availableLocales: ['en'] })
    expect(m.robots).toEqual({ index: false, follow: false })
  })
})
