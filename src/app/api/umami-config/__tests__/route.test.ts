import { afterEach, describe, expect, it, vi } from 'vitest'
import { GET } from '../route'

afterEach(() => vi.unstubAllEnvs())

describe('GET /api/umami-config', () => {
  it('returns null with 200 when Umami is not configured', async () => {
    vi.stubEnv('UMAMI_WEBSITE_ID', '')
    vi.stubEnv('UMAMI_SCRIPT_URL', '')
    const res = GET()
    expect(res.status).toBe(200)
    expect(await res.json()).toBeNull()
  })

  it('returns the config when both values are set', async () => {
    vi.stubEnv('UMAMI_WEBSITE_ID', 'abc')
    vi.stubEnv('UMAMI_SCRIPT_URL', 'https://analytics.8move.com/script.js')
    const res = GET()
    expect(await res.json()).toEqual({ websiteId: 'abc', scriptUrl: 'https://analytics.8move.com/script.js' })
  })
})
