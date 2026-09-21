import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const payloadUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const res = await fetch(`${payloadUrl}/api/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        company: company || undefined,
        phone: phone || undefined,
        subject: subject || 'general',
        message,
        source: request.headers.get('referer') || '/contact',
        status: 'new',
      }),
    })

    if (!res.ok) {
      console.error('Payload lead creation failed', await res.text())
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
