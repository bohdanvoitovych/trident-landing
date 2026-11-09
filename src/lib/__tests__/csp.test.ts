import { describe, it, expect } from 'vitest'
import { buildCsp, resolveUmamiOrigin, DEFAULT_UMAMI_ORIGIN } from '../csp.mjs'

const directive = (csp: string, name: string) =>
  csp.split('; ').find((d) => d.startsWith(`${name} `)) ?? ''

describe('buildCsp', () => {
  it('allows the default Umami origin in script-src and connect-src', () => {
    const csp = buildCsp()
    expect(directive(csp, 'script-src')).toContain(DEFAULT_UMAMI_ORIGIN)
    expect(directive(csp, 'connect-src')).toContain(DEFAULT_UMAMI_ORIGIN)
  })
  it('uses a custom origin', () => {
    const csp = buildCsp('https://stats.example.com')
    expect(directive(csp, 'script-src')).toContain('https://stats.example.com')
    expect(directive(csp, 'connect-src')).toContain('https://stats.example.com')
  })
})

describe('resolveUmamiOrigin', () => {
  it('defaults when empty', () => expect(resolveUmamiOrigin('')).toBe(DEFAULT_UMAMI_ORIGIN))
  it('strips the path from a script URL', () =>
    expect(resolveUmamiOrigin('https://a.example.com/script.js')).toBe('https://a.example.com'))
  it('throws on a malformed value', () => expect(() => resolveUmamiOrigin('nope')).toThrow())
})
