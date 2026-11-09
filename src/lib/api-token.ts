import { timingSafeEqual } from 'crypto'

/** Constant-time check of the shared server-to-server token. False when no token is configured. */
export function checkApiToken(header: string | null, expected: string | undefined): boolean {
  if (!expected || !header) return false
  const a = Buffer.from(header)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}
