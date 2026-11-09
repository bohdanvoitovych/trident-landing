import { NextResponse } from 'next/server'
import { postToAdmin } from '@/lib/admin-api'
import { validateContactBody } from '@/lib/contact-validation'
import { sendEmail } from '@/lib/email'
import { renderDemoConfirmation, renderDemoNotification } from '@/lib/email/templates'

// In-memory rate limiter: 3 requests per IP per hour
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_MAX = 3
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

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const body = await request.json()

    // Honeypot: bots fill hidden fields. Answer success so they do not learn.
    if (typeof body.website === 'string' && body.website.trim()) {
      return NextResponse.json({ success: true })
    }

    const { data, errors } = validateContactBody(body)
    if (errors || !data) {
      return NextResponse.json({ error: 'Validation failed', fields: errors }, { status: 400 })
    }

    const formData = { ...data, ip }

    // The admin result decides the warning mark in the internal email, so it goes first.
    const saved = await postToAdmin('/api/ingest/demo-request', formData)
    if (!saved.ok) {
      console.error('[/api/contact] Admin ingest failed:', { status: saved.status, response: saved.json })
    }

    let notified = true
    const notifyTo = process.env.CONTACT_NOTIFICATION_EMAIL
    if (notifyTo) {
      const result = await sendEmail({
        to: notifyTo,
        ...renderDemoNotification(formData, { adminSaveFailed: !saved.ok }),
      })
      notified = result.success
    } else {
      notified = false
    }

    // Both the admin save and the team email failed: the lead would be lost.
    if (!saved.ok && !notified) {
      console.error('[/api/contact] Lead not saved and team not notified:', { email: formData.email })
      return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
    }

    await sendEmail({ to: formData.email, ...renderDemoConfirmation(formData) })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/contact] Error:', error)
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
  }
}
