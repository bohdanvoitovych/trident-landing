import type { Attribution } from '@/lib/attribution'
import type { TopicKey } from '@/lib/topics'

export interface SendEmailParams {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

export interface SendEmailResult {
  success: boolean
  messageId?: string
  error?: string
}

export interface EmailProvider {
  send(params: SendEmailParams): Promise<SendEmailResult>
}

/** Contact form submission fields. Traffic source comes from `Attribution`. */
export type ContactFormData = {
  name: string
  email: string
  phone: string
  company?: string
  subject?: TopicKey
  message: string
  locale?: string
  ip?: string
} & Attribution
