/**
 * T12 Email Adapter — SMTP provider (nodemailer)
 */

import nodemailer from 'nodemailer'
import type { EmailProvider, SendEmailParams, SendEmailResult } from './types'

export class SmtpProvider implements EmailProvider {
  private transporter: nodemailer.Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
    })
  }

  async send(params: SendEmailParams): Promise<SendEmailResult> {
    const from = process.env.SMTP_FROM || process.env.EMAIL_FROM || 'info@trident-software.ch'

    const info = await this.transporter.sendMail({
      from,
      to: Array.isArray(params.to) ? params.to.join(', ') : params.to,
      subject: params.subject,
      html: params.html,
      text: params.text,
    })

    return { success: true, messageId: info.messageId }
  }
}
