import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { getConsent } from '../CookieBanner'

// The component's UI deps are irrelevant to getConsent and need a Next runtime.
vi.mock('@/i18n/navigation', () => ({ Link: () => null }))
vi.mock('next-intl', () => ({ useTranslations: () => (k: string) => k }))

const KEY = 'trident-cookie-consent'

function stubStorage(initial: Record<string, string> = {}) {
  const store = new Map(Object.entries(initial))
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
  })
}

describe('getConsent', () => {
  beforeEach(() => stubStorage())
  afterEach(() => vi.unstubAllGlobals())

  it('returns null when nothing is stored', () => {
    expect(getConsent()).toBeNull()
  })

  it('returns analytics true after accept', () => {
    stubStorage({ [KEY]: 'accepted' })
    expect(getConsent()).toEqual({ analytics: true })
  })

  it('returns analytics false after decline', () => {
    stubStorage({ [KEY]: 'declined' })
    expect(getConsent()).toEqual({ analytics: false })
  })

  it('returns null when storage throws', () => {
    vi.stubGlobal('localStorage', {
      getItem: () => {
        throw new Error('blocked')
      },
    })
    expect(getConsent()).toBeNull()
  })
})
