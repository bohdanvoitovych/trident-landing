import { describe, it, expect } from 'vitest'
import { analyze, buildPages, countOccurrences } from '../analyze'
import { SEMANTIC_SEED_TERMS } from '@/data/semantic-seed-terms'

describe('countOccurrences', () => {
  it('counts repeated matches', () => {
    expect(countOccurrences('ai agents and ai agents', 'ai agents')).toBe(2)
  })
  it('returns 0 for an empty needle or no match', () => {
    expect(countOccurrences('abc', '')).toBe(0)
    expect(countOccurrences('abc', 'x')).toBe(0)
  })
  it('does not count overlapping matches', () => {
    expect(countOccurrences('aaaa', 'aa')).toBe(2)
  })
  it('is a plain substring match, no word boundaries', () => {
    expect(countOccurrences('chatbots', 'chatbot')).toBe(1)
  })
})

describe('buildPages', () => {
  const pages = buildPages()
  const urls = pages.map((p) => p.url)

  it('emits the default locale without a prefix and others with one', () => {
    expect(urls).toContain('/services/ai-services')
    expect(urls.some((u) => u.startsWith('/de/services/'))).toBe(true)
    expect(urls.some((u) => u.startsWith('/en/'))).toBe(false)
  })
  it('covers every section', () => {
    for (const section of ['services', 'solutions', 'industries', 'locations', 'use-cases', 'technologies']) {
      expect(urls.some((u) => u.includes(`/${section}`)), section).toBe(true)
    }
  })
  it('has unique urls and lower-cased non-empty text', () => {
    expect(new Set(urls).size).toBe(urls.length)
    for (const p of pages) {
      expect(p.static.length).toBeGreaterThan(0)
      expect(p.static).toBe(p.static.toLowerCase())
    }
  })
})

describe('analyze on real data', () => {
  const r = analyze()
  it('checks every seed term', () => {
    expect(r.termsChecked).toBe(SEMANTIC_SEED_TERMS.length)
    expect(r.termsFound).toBe(r.results.length)
  })
  it('sorts by total and sums page counts', () => {
    for (let i = 1; i < r.results.length; i++) expect(r.results[i - 1].total).toBeGreaterThanOrEqual(r.results[i].total)
    for (const x of r.results) expect(x.pages.reduce((a, p) => a + p.count, 0)).toBe(x.total)
  })
})
