import { describe, it, expect } from 'vitest'
import { validateContactBody } from '../contact-validation'

const base = { name: 'Anna', email: 'a@b.ch', phone: '+41 79 000 00 00', message: 'Hi' }

describe('validateContactBody', () => {
  it('requires phone', () => {
    const r = validateContactBody({ ...base, phone: '' })
    expect(r.errors?.phone).toBeTruthy()
    expect(r.data).toBeUndefined()
  })
  it('maps unknown subject to other', () => {
    expect(validateContactBody({ ...base, subject: 'KI-Agenten' }).data?.subject).toBe('other')
    expect(validateContactBody(base).data?.subject).toBe('other')
  })
  it('keeps a valid topic key', () => {
    expect(validateContactBody({ ...base, subject: 'iot' }).data?.subject).toBe('iot')
  })
  it('truncates attribution to 500 chars', () => {
    const r = validateContactBody({ ...base, utmSource: 'x'.repeat(600) })
    expect(r.data?.utmSource).toHaveLength(500)
  })
  it('rejects invalid email', () => {
    expect(validateContactBody({ ...base, email: 'nope' }).errors?.email).toBeTruthy()
  })
})
