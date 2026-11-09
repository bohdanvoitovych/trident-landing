import { describe, it, expect } from 'vitest'
import { SEMANTIC_SEED_CLUSTERS, SEMANTIC_SEED_TERMS } from '../semantic-seed-terms'

describe('semantic seed library', () => {
  it('names every cluster "<LANG> — <Topic>"', () => {
    for (const { cluster } of SEMANTIC_SEED_CLUSTERS) expect(cluster).toMatch(/^(EN|DE|FR|IT) — /)
  })

  it('has no empty cluster and no duplicate term within a cluster', () => {
    for (const { cluster, terms } of SEMANTIC_SEED_CLUSTERS) {
      expect(terms.length, cluster).toBeGreaterThan(0)
      const lower = terms.map((t) => t.toLowerCase())
      expect(new Set(lower).size, cluster).toBe(terms.length)
    }
  })

  it('flattens to one entry per cluster term', () => {
    const total = SEMANTIC_SEED_CLUSTERS.reduce((n, c) => n + c.terms.length, 0)
    expect(SEMANTIC_SEED_TERMS.length).toBe(total)
  })
})
