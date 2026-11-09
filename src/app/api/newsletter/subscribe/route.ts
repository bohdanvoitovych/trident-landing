import { NextResponse } from 'next/server'
import { postToAdmin } from '@/lib/admin-api'
import { sendEmail } from '@/lib/email'
import { renderNewsletterWelcome } from '@/lib/email/templates'

// In-memory rate limiter: 5 requests per IP per hour
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const valid = (rateLimitMap.get(ip) || []).filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS)
  if (valid.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, valid)
    return true
  }
  valid.push(now)
  rateLimitMap.set(ip, valid)
  return false
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests', code: 'rate_limit' }, { status: 429 })
    }

    const body = await request.json()

    // Honeypot: answer success so bots do not learn.
    if (typeof body.website === 'string' && body.website.trim()) {
      return NextResponse.json({ success: true })
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const locale = typeof body.locale === 'string' ? body.locale.trim() : 'en'

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email', code: 'validation' }, { status: 400 })
    }

    const saved = await postToAdmin('/api/ingest/newsletter', { email, locale, source: 'footer', ip })
    if (!saved.ok) {
      console.error('[/api/newsletter/subscribe] Admin ingest failed:', { status: saved.status, response: saved.json })
      return NextResponse.json(
        { error: 'Subscription is temporarily unavailable. Please try again later.', code: 'unavailable' },
        { status: 503 },
      )
    }

    const status = (saved.json as { status?: string } | null)?.status
    if (status === 'subscribed' || status === 'resubscribed') {
      const unsubscribeUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}`
      const result = await sendEmail({ to: email, ...renderNewsletterWelcome({ email, locale, unsubscribeUrl }) })
      if (!result.success) console.error('[/api/newsletter/subscribe] Welcome email failed:', result.error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/newsletter/subscribe]', error)
    return NextResponse.json({ error: 'Server error', code: 'server_error' }, { status: 500 })
  }
}
