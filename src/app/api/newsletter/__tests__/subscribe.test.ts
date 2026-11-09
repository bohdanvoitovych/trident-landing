import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/admin-api', () => ({ postToAdmin: vi.fn() }))
vi.mock('@/lib/email', () => ({ sendEmail: vi.fn() }))

import { POST } from '../subscribe/route'
import { GET } from '../unsubscribe/route'
import { postToAdmin } from '@/lib/admin-api'
import { sendEmail } from '@/lib/email'

const mockAdmin = vi.mocked(postToAdmin)
const mockSend = vi.mocked(sendEmail)

let n = 0
function req(body: Record<string, unknown>, ip = `10.1.0.${++n}`) {
  return new Request('http://x/api/newsletter/subscribe', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(console, 'error').mockImplementation(() => {})
  process.env.NEXT_PUBLIC_SITE_URL = 'https://new.trident-software.ch'
  mockSend.mockResolvedValue({ success: true })
})

describe('POST /api/newsletter/subscribe', () => {
  it('over-long email: 400 with a field error, no ingest', async () => {
    const res = await POST(req({ email: `${'a'.repeat(250)}@b.ch` }))
    expect(res.status).toBe(400)
    expect((await res.json()).fields.email).toBeTruthy()
    expect(mockAdmin).not.toHaveBeenCalled()
  })

  it('ingest failure: 503 unavailable, no email', async () => {
    mockAdmin.mockResolvedValue({ ok: false, status: 0, json: null })
    const res = await POST(req({ email: 'a@b.ch', locale: 'de' }))
    expect(res.status).toBe(503)
    expect((await res.json()).code).toBe('unavailable')
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('already subscribed: 200, no email', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 200, json: { status: 'already' } })
    const res = await POST(req({ email: 'a@b.ch' }))
    expect(res.status).toBe(200)
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('subscribed: welcome email to the subscriber, email lower-cased', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 201, json: { status: 'subscribed' } })
    const res = await POST(req({ email: ' A@B.ch ', locale: 'fr' }))
    expect(res.status).toBe(200)
    expect(mockAdmin.mock.calls[0][1]).toMatchObject({ email: 'a@b.ch', locale: 'fr' })
    const mail = mockSend.mock.calls[0][0]
    expect(mail.to).toBe('a@b.ch')
    expect(mail.html).toContain('https://new.trident-software.ch/api/newsletter/unsubscribe?email=a%40b.ch')
  })

  it('resubscribed: welcome email sent', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 200, json: { status: 'resubscribed' } })
    await POST(req({ email: 'a@b.ch' }))
    expect(mockSend).toHaveBeenCalledTimes(1)
  })

  it('invalid email: 400', async () => {
    expect((await POST(req({ email: 'nope' }))).status).toBe(400)
    expect(mockAdmin).not.toHaveBeenCalled()
  })

  it('honeypot: 200, no admin call', async () => {
    expect((await POST(req({ email: 'a@b.ch', website: 'x' }))).status).toBe(200)
    expect(mockAdmin).not.toHaveBeenCalled()
  })

  it('rate limit: 6th request from one IP is 429', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 200, json: { status: 'already' } })
    const ip = '10.9.9.9'
    for (let i = 0; i < 5; i++) expect((await POST(req({ email: 'a@b.ch' }, ip))).status).toBe(200)
    expect((await POST(req({ email: 'a@b.ch' }, ip))).status).toBe(429)
  })
})

describe('GET /api/newsletter/unsubscribe', () => {
  const get = (q: string) => GET(new Request(`http://x/api/newsletter/unsubscribe${q}`))

  it('unsubscribed: 200 page, DELETE sent', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 200, json: { status: 'unsubscribed' } })
    const res = await get('?email=A%40b.ch')
    expect(res.status).toBe(200)
    expect(mockAdmin).toHaveBeenCalledWith('/api/ingest/newsletter', { email: 'a@b.ch' }, 'DELETE')
  })

  it('not_found: same neutral 200 page', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 200, json: { status: 'not_found' } })
    const res = await get('?email=x%40y.ch')
    expect(res.status).toBe(200)
    expect(await res.text()).toContain('unsubscribed')
  })

  it('ingest failure: 503 page', async () => {
    mockAdmin.mockResolvedValue({ ok: false, status: 0, json: null })
    expect((await get('?email=x%40y.ch')).status).toBe(503)
  })

  it('missing email: 400', async () => {
    expect((await get('')).status).toBe(400)
  })
})
