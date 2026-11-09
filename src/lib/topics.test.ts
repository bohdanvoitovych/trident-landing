import { describe, it, expect } from 'vitest'
import { TOPIC_KEYS, isTopicKey } from './topics'

describe('isTopicKey', () => {
  it('accepts every topic key', () => {
    for (const k of TOPIC_KEYS) expect(isTopicKey(k)).toBe(true)
  })
  it('rejects other values', () => {
    for (const v of ['general', '', 'AIAGENTS', undefined, null, 5, {}]) expect(isTopicKey(v)).toBe(false)
  })
})
