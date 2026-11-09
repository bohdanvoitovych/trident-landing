import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(__dirname, '../..')
const read = (p: string) => readFileSync(path.join(root, p), 'utf8')

const dataFiles = (dir: string): string[] =>
  readdirSync(path.join(root, dir), { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? dataFiles(path.join(dir, e.name)) : e.name.endsWith('.ts') ? [path.join(dir, e.name)] : [],
  )

describe('quick fact fixes', () => {
  it('uses revFADP, not nFADP, in EN copy, data files and llms.txt', () => {
    const files = ['messages/en.json', 'public/llms.txt', ...dataFiles('src/data')]
    const offenders = files.filter((f) => read(f).includes('nFADP'))
    expect(offenders).toEqual([])
  })

  it('keeps nDSG/nLPD in DE/FR/IT messages (revFADP is EN only)', () => {
    const offenders = ['de', 'fr', 'it'].filter((l) => read(`messages/${l}.json`).includes('revFADP'))
    expect(offenders).toEqual([])
  })

  it('has no CHE-XXX placeholder in any locale', () => {
    const offenders = readdirSync(path.join(root, 'messages'))
      .filter((f) => f.endsWith('.json'))
      .filter((f) => read(path.join('messages', f)).includes('CHE-XXX'))
    expect(offenders).toEqual([])
  })

  it('ships the default Open Graph image', () => {
    expect(existsSync(path.join(root, 'public/og-default.png'))).toBe(true)
  })
})
