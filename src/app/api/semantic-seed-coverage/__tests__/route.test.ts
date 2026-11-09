import { describe, it, expect, vi, afterEach } from 'vitest'
import { GET } from '../route'

afterEach(() => vi.unstubAllEnvs())

const req = (headers: Record<string, string> = {}) =>
  new Request('http://x/api/semantic-seed-coverage', { headers })

describe('GET /api/semantic-seed-coverage', () => {
  it('401 without the token header', async () => {
    vi.stubEnv('TRIDENT_API_TOKEN', 'secret')
    const res = await GET(req())
    expect(res.status).toBe(401)
    expect(await res.json()).toEqual({ error: 'Unauthorized' })
  })
  it('401 with a wrong token', async () => {
    vi.stubEnv('TRIDENT_API_TOKEN', 'secret')
    expect((await GET(req({ 'x-api-token': 'nope' }))).status).toBe(401)
  })
  it('401 when the token is not configured', async () => {
    vi.stubEnv('TRIDENT_API_TOKEN', '')
    expect((await GET(req({ 'x-api-token': 'secret' }))).status).toBe(401)
  })
  it('200 with the dashboard shape', async () => {
    vi.stubEnv('TRIDENT_API_TOKEN', 'secret')
    const res = await GET(req({ 'x-api-token': 'secret' }))
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(Object.keys(body).sort()).toEqual(['generatedAt', 'results', 'termsChecked', 'termsFound'])
    expect(typeof body.generatedAt).toBe('string')
    expect(Array.isArray(body.results)).toBe(true)
    if (body.results.length) {
      expect(Object.keys(body.results[0]).sort()).toEqual(['pages', 'term', 'total'])
      expect(Object.keys(body.results[0].pages[0]).sort()).toEqual(['count', 'url'])
    }
  })
})
