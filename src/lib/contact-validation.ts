import type { Attribution } from '@/lib/attribution'
import type { ContactFormData } from '@/lib/email/types'
import { isTopicKey } from '@/lib/topics'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Attribution values come from the client, so cap their length. */
const ATTRIBUTION_MAX_LEN = 500

const ATTRIBUTION_KEYS = [
  'landingPage',
  'referrer',
  'utmSource',
  'utmMedium',
  'utmCampaign',
  'utmTerm',
  'utmContent',
  'submittedFrom',
] as const satisfies ReadonlyArray<keyof Attribution>

function extractAttribution(body: Record<string, unknown>): Attribution {
  const attribution: Attribution = {}
  for (const key of ATTRIBUTION_KEYS) {
    const value = body[key]
    if (typeof value !== 'string') continue
    const trimmed = value.trim().slice(0, ATTRIBUTION_MAX_LEN)
    if (trimmed) attribution[key] = trimmed
  }
  return attribution
}

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

export function validateContactBody(body: Record<string, unknown>): {
  data?: ContactFormData
  errors?: Record<string, string>
} {
  const errors: Record<string, string> = {}
  const name = str(body.name)
  const email = str(body.email)
  const phone = str(body.phone)
  const message = str(body.message)
  const company = str(body.company) || undefined
  const locale = str(body.locale) || undefined

  if (!name) errors.name = 'Name is required'
  if (!email) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(email)) errors.email = 'Invalid email address'
  if (!phone) errors.phone = 'Phone is required'
  if (!message) errors.message = 'Message is required'

  if (Object.keys(errors).length > 0) return { errors }

  return {
    data: {
      name,
      email,
      phone,
      company,
      subject: isTopicKey(body.subject) ? body.subject : 'other',
      message,
      locale,
      ...extractAttribution(body),
    },
  }
}
