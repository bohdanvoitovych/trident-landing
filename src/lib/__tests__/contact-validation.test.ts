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
  it.each([
    ['name', 200],
    ['company', 200],
    ['phone', 50],
    ['message', 5000],
  ])('rejects %s over %i chars and accepts exactly the limit', (field, max) => {
    const over = validateContactBody({ ...base, [field]: 'x'.repeat(max + 1) })
    expect(over.errors?.[field]).toBeTruthy()
    expect(over.data).toBeUndefined()
    expect(validateContactBody({ ...base, [field]: 'x'.repeat(max) }).errors).toBeUndefined()
  })
  it('rejects email over 254 chars', () => {
    const email = `${'a'.repeat(250)}@b.ch`
    expect(validateContactBody({ ...base, email }).errors?.email).toBeTruthy()
  })
})
