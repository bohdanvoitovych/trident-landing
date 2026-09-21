import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) || []
  const valid = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS)
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
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests', code: 'rate_limit' }, { status: 429 })
    }

    const body = await request.json()

    // Honeypot
    if (typeof body.website === 'string' && body.website.trim()) {
      return NextResponse.json({ success: true })
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const locale = typeof body.locale === 'string' ? body.locale.trim() : 'en'

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email', code: 'validation' }, { status: 400 })
    }

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'newsletter-subscribers',
      where: { email: { equals: email } },
      limit: 1,
    })

    if (existing.totalDocs > 0) {
      return NextResponse.json({ error: 'Already subscribed', code: 'duplicate' }, { status: 409 })
    }

    await payload.create({
      collection: 'newsletter-subscribers',
      data: { email, locale, consent: true },
    })

    // Send welcome email via Resend if configured
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendKey)
        await resend.emails.send({
          from: 'Trident Software <hello@trident-software.ch>',
          to: email,
          subject: 'Welcome to Trident Software updates',
          html: `<p>Thank you for subscribing! We'll keep you updated on our latest insights and services.</p><p>— Trident Software Team</p>`,
        })
      } catch (e) {
        console.error('[newsletter] email send failed:', e)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/newsletter/subscribe]', error)
    return NextResponse.json({ error: 'Server error', code: 'server_error' }, { status: 500 })
  }
}
