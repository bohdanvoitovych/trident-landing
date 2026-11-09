import { NextResponse } from 'next/server'

// Deliberately not NEXT_PUBLIC_* — the site's pages are statically generated
// (ISR), so a client-bundled or server-component read of process.env would
// bake the value in at build time. Route handlers are dynamic by default, so
// this always reads the current container env: after creating the site in
// Umami and setting UMAMI_WEBSITE_ID/UMAMI_SCRIPT_URL in .env.production, no
// image rebuild is needed. `docker compose restart app` is NOT enough on its
// own, though — restart doesn't re-read env_file, the container keeps its
// old environment. Use `docker compose up -d --force-recreate app`.
export function GET() {
  const websiteId = process.env.UMAMI_WEBSITE_ID
  const scriptUrl = process.env.UMAMI_SCRIPT_URL

  if (!websiteId || !scriptUrl) {
    return NextResponse.json(null, { headers: { 'Cache-Control': 'no-store' } })
  }

  return NextResponse.json(
    { websiteId, scriptUrl },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
