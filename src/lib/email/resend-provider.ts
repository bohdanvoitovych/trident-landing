/**
 * T12 Email Adapter — Resend provider
 */

import { Resend } from 'resend'
import type { EmailProvider, SendEmailParams, SendEmailResult } from './types'

export class ResendProvider implements EmailProvider {
  private client: Resend

  constructor() {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is required when EMAIL_PROVIDER=resend')
    }
    this.client = new Resend(apiKey)
  }

  async send(params: SendEmailParams): Promise<SendEmailResult> {
    const from = process.env.EMAIL_FROM || 'info@trident-software.ch'

    const { data, error } = await this.client.emails.send({
      from,
      to: Array.isArray(params.to) ? params.to : [params.to],
      subject: params.subject,
      html: params.html,
      text: params.text,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, messageId: data?.id }
  }
}
