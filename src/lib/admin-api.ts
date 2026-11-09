import 'server-only'

type AdminPath = '/api/ingest/demo-request' | '/api/ingest/newsletter'

let warned = false

/**
 * Forward a record to the shared admin (8move). Never throws: network errors,
 * timeouts and missing configuration come back as `{ ok: false }`.
 */
export async function postToAdmin(
  path: AdminPath,
  body: unknown,
  method: 'POST' | 'DELETE' = 'POST',
): Promise<{ ok: boolean; status: number; json: unknown }> {
  const base = process.env.ADMIN_API_URL
  const token = process.env.TRIDENT_API_TOKEN
  if (!base || !token) {
    if (!warned) {
      warned = true
      console.error('[admin-api] ADMIN_API_URL or TRIDENT_API_TOKEN is not set; skipping admin save')
    }
    return { ok: false, status: 0, json: null }
  }

  try {
    // DELETE carries the email as a query string: the ingest route reads `?email=`.
    let url = `${base}${path}`
    if (method === 'DELETE') {
      const email = (body as { email?: unknown } | null)?.email
      if (typeof email === 'string') url += `?email=${encodeURIComponent(email)}`
    }
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', 'x-api-token': token },
      body: method === 'DELETE' ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    })
    const json: unknown = await res.json().catch(() => null)
    return { ok: res.ok, status: res.status, json }
  } catch (err) {
    console.error('[admin-api] request failed:', err instanceof Error ? err.message : err)
    return { ok: false, status: 0, json: null }
  }
}
