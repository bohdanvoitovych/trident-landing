/**
 * T12 — Unit tests for EmailSender
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { sendEmail, _resetProvider, _setProvider } from '../sender'
import type { EmailProvider, SendEmailParams, SendEmailResult } from '../types'

function createMockProvider(result: SendEmailResult): EmailProvider & { send: ReturnType<typeof vi.fn> } {
  return { send: vi.fn().mockResolvedValue(result) }
}

describe('EmailSender', () => {
  beforeEach(() => {
    _resetProvider()
  })

  it('sends email via injected provider and returns result', async () => {
    const provider = createMockProvider({ success: true, messageId: 'msg_001' })
    _setProvider(provider)

    const result = await sendEmail({
      to: 'user@example.com',
      subject: 'Test',
      html: '<p>Hello</p>',
    })

    expect(result.success).toBe(true)
    expect(result.messageId).toBe('msg_001')
    expect(provider.send).toHaveBeenCalledOnce()
  })

  it('passes to, subject, html, text to provider.send()', async () => {
    const provider = createMockProvider({ success: true })
    _setProvider(provider)

    const params: SendEmailParams = {
      to: 'test@example.com',
      subject: 'Hello',
      html: '<p>World</p>',
      text: 'World',
    }

    await sendEmail(params)

    expect(provider.send).toHaveBeenCalledWith(params)
  })

  it('returns success: false on provider error (never throws)', async () => {
    const provider: EmailProvider = {
      send: vi.fn().mockRejectedValue(new Error('Connection refused')),
    }
    _setProvider(provider)

    const result = await sendEmail({
      to: 'user@example.com',
      subject: 'Test',
      html: '<p>Hello</p>',
    })

    expect(result.success).toBe(false)
    expect(result.error).toBe('Connection refused')
  })

  it('supports array of recipients', async () => {
    const provider = createMockProvider({ success: true })
    _setProvider(provider)

    await sendEmail({
      to: ['a@example.com', 'b@example.com'],
      subject: 'Bulk',
      html: '<p>Hi</p>',
    })

    expect(provider.send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ['a@example.com', 'b@example.com'],
      }),
    )
  })

  it('caches provider across calls', async () => {
    const provider = createMockProvider({ success: true })
    _setProvider(provider)

    await sendEmail({ to: 'a@test.com', subject: 'A', html: '<p>A</p>' })
    await sendEmail({ to: 'b@test.com', subject: 'B', html: '<p>B</p>' })

    expect(provider.send).toHaveBeenCalledTimes(2)
  })

  it('handles non-Error thrown values gracefully', async () => {
    const provider: EmailProvider = {
      send: vi.fn().mockRejectedValue('string error'),
    }
    _setProvider(provider)

    const result = await sendEmail({
      to: 'user@example.com',
      subject: 'Test',
      html: '<p>Hello</p>',
    })

    expect(result.success).toBe(false)
    expect(result.error).toBe('string error')
  })
})
