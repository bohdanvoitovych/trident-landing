import { describe, it, expect } from 'vitest'
import { checkApiToken } from '../api-token'

describe('checkApiToken', () => {
  it('accepts the matching token', () => {
    expect(checkApiToken('secret', 'secret')).toBe(true)
  })
  it('rejects a different token', () => {
    expect(checkApiToken('secreX', 'secret')).toBe(false)
  })
  it('rejects a missing header', () => {
    expect(checkApiToken(null, 'secret')).toBe(false)
  })
  it('rejects when expected is undefined or empty', () => {
    expect(checkApiToken('x', undefined)).toBe(false)
    expect(checkApiToken('', '')).toBe(false)
    expect(checkApiToken('x', '')).toBe(false)
  })
  it('rejects different lengths without throwing', () => {
    expect(() => checkApiToken('short', 'a-much-longer-secret')).not.toThrow()
    expect(checkApiToken('short', 'a-much-longer-secret')).toBe(false)
  })
})
