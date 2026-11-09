import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/admin-api', () => ({ postToAdmin: vi.fn() }))
vi.mock('@/lib/email', () => ({ sendEmail: vi.fn() }))

import { POST } from '../route'
import { postToAdmin } from '@/lib/admin-api'
import { sendEmail } from '@/lib/email'
import { renderDemoNotification } from '@/lib/email/templates'

const mockAdmin = vi.mocked(postToAdmin)
const mockSend = vi.mocked(sendEmail)

let n = 0
function req(body: Record<string, unknown>, ip = `10.0.0.${++n}`) {
  return new Request('http://x/api/contact', {
    method: 'POST',
    headers: { 'x-forwarded-for': ip, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
}
const valid = { name: 'Anna', email: 'a@b.ch', phone: '+41 79 000 00 00', message: 'Hello' }

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(console, 'error').mockImplementation(() => {})
  process.env.CONTACT_NOTIFICATION_EMAIL = 'team@trident.ch'
  mockSend.mockResolvedValue({ success: true })
})

describe('POST /api/contact', () => {
  it('ingest failure: 200 and notification subject starts with warning', async () => {
    mockAdmin.mockResolvedValue({ ok: false, status: 0, json: null })
    const res = await POST(req(valid))
    expect(res.status).toBe(200)
    const notif = mockSend.mock.calls.find((c) => c[0].to === 'team@trident.ch')![0]
    expect(notif.subject.startsWith('⚠')).toBe(true)
    expect(mockSend.mock.calls.some((c) => c[0].to === 'a@b.ch')).toBe(true)
  })

  it('ingest ok: plain subject, site data forwarded', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 201, json: { id: 1 } })
    const res = await POST(req(valid))
    expect(res.status).toBe(200)
    const notif = mockSend.mock.calls.find((c) => c[0].to === 'team@trident.ch')![0]
    expect(notif.subject.startsWith('⚠')).toBe(false)
    expect(mockAdmin.mock.calls[0][1]).toMatchObject({ name: 'Anna', subject: 'other' })
  })

  it('ingest failed and notification failed: 500', async () => {
    mockAdmin.mockResolvedValue({ ok: false, status: 500, json: null })
    mockSend.mockResolvedValue({ success: false, error: 'smtp down' })
    expect((await POST(req(valid))).status).toBe(500)
  })

  it('honeypot: 200, no admin call', async () => {
    const res = await POST(req({ ...valid, website: 'spam.com' }))
    expect(res.status).toBe(200)
    expect(mockAdmin).not.toHaveBeenCalled()
  })

  it('validation error: 400', async () => {
    const res = await POST(req({ ...valid, phone: '' }))
    expect(res.status).toBe(400)
    expect((await res.json()).fields.phone).toBeTruthy()
  })

  it('4th request from same IP: 429', async () => {
    mockAdmin.mockResolvedValue({ ok: true, status: 201, json: {} })
    const ip = '9.9.9.9'
    for (let i = 0; i < 3; i++) expect((await POST(req(valid, ip))).status).toBe(200)
    expect((await POST(req(valid, ip))).status).toBe(429)
  })
})

describe('internal notification escaping', () => {
  it('escapes HTML in message', () => {
    const { html } = renderDemoNotification({
      name: 'A', email: 'a@b.ch', phone: '1', message: '<script>x</script>',
    })
    expect(html).not.toContain('<script>x</script>')
    expect(html).toContain('&lt;script&gt;')
  })
})
