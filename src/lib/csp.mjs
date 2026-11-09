// Content-Security-Policy builder, shared by next.config.mjs (build time) and tests.
//
// Headers in next.config are evaluated at build time, but UMAMI_SCRIPT_URL is a
// runtime env var. So the CSP cannot read it. It reads a build arg instead:
// NEXT_PUBLIC_UMAMI_ORIGIN, defaulting to the shared self-hosted Umami
// (analytics.8move.com). UMAMI_SCRIPT_URL must stay on that same origin.

export const DEFAULT_UMAMI_ORIGIN = 'https://analytics.8move.com'

/** Normalises a value to a bare origin; falls back to the default when empty. Throws on a malformed URL. */
export function resolveUmamiOrigin(raw) {
  const value = (raw || '').trim()
  if (!value) return DEFAULT_UMAMI_ORIGIN
  return new URL(value).origin
}

export function buildCsp(umamiOrigin = resolveUmamiOrigin(process.env.NEXT_PUBLIC_UMAMI_ORIGIN)) {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com ${umamiOrigin}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "img-src 'self' data: blob: https: https://www.google-analytics.com",
    `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://*.linkedin.com https://px.ads.linkedin.com ${umamiOrigin}`,
    "frame-src 'self' https://www.youtube.com https://www.google.com",
  ].join('; ')
}
