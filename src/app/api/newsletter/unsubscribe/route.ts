import { NextResponse } from 'next/server'
import { postToAdmin } from '@/lib/admin-api'

const html = (message: string, success: boolean, status = 200) =>
  new NextResponse(unsubscribePage(message, success), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
    status,
  })

export async function GET(request: Request) {
  const email = new URL(request.url).searchParams.get('email')?.trim().toLowerCase() || ''
  if (!email) return html('Invalid unsubscribe link.', false, 400)

  const res = await postToAdmin('/api/ingest/newsletter', { email }, 'DELETE')
  if (!res.ok) {
    console.error('[/api/newsletter/unsubscribe] Admin ingest failed:', { status: res.status, response: res.json })
    return html('We could not process this right now. Please try the link again in a few minutes.', false, 503)
  }

  // 'unsubscribed' and 'not_found' look the same: the page never reveals whether the email was on the list.
  return html('You are unsubscribed. You will not receive further emails from us.', true)
}

function unsubscribePage(message: string, success: boolean): string {
  const color = success ? '#16a34a' : '#dc2626'
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="noindex"/>
  <title>Unsubscribe | Trident Software</title>
  <style>
    body { margin: 0; padding: 0; background: #F3F4F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
    .card { background: #fff; border-radius: 4px; padding: 48px 40px; max-width: 480px; width: 100%; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    h1 { font-size: 20px; font-weight: 600; color: #0D1117; margin: 0 0 12px; }
    p { font-size: 15px; color: #6B7280; margin: 0 0 24px; line-height: 1.5; }
    .icon { font-size: 40px; margin-bottom: 16px; color: ${color}; }
    a { color: #2772E0; text-decoration: none; font-size: 14px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="icon">${success ? '&#10003;' : '&#10007;'}</div>
    <h1>Trident Software</h1>
    <p>${message}</p>
    <a href="/">Back to the website</a>
  </div>
</body>
</html>`
}
