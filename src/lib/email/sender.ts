/**
 * T12 Email Adapter — EmailSender facade
 *
 * Factory that selects the active provider based on EMAIL_PROVIDER env var.
 * Default: 'smtp'. Alternative: 'resend'.
 */

import type { EmailProvider, SendEmailParams, SendEmailResult } from './types'

let cachedProvider: EmailProvider | null = null

async function getProvider(): Promise<EmailProvider> {
  if (cachedProvider) return cachedProvider

  const providerName = (process.env.EMAIL_PROVIDER || 'smtp').toLowerCase()

  if (providerName === 'resend') {
    const { ResendProvider } = await import('./resend-provider')
    cachedProvider = new ResendProvider()
  } else {
    const { SmtpProvider } = await import('./smtp-provider')
    cachedProvider = new SmtpProvider()
  }

  return cachedProvider!
}

/**
 * Send an email using the configured provider.
 * Never throws — returns { success: false, error } on failure.
 */
export async function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  try {
    const provider = await getProvider()
    return await provider.send(params)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[EmailSender] Failed to send email:', { to: params.to, subject: params.subject, error: message })
    return { success: false, error: message }
  }
}

/** Reset cached provider (useful for testing) */
export function _resetProvider(): void {
  cachedProvider = null
}

/** Inject a custom provider (useful for testing) */
export function _setProvider(provider: EmailProvider): void {
  cachedProvider = provider
}
