#!/usr/bin/env node
// Splits the site's English copy into units, hashes each one and compares the
// hashes with state.json. A unit whose hash matches was already edited and is skipped.
//
//   node units.mjs pending [filter]   units that are new or changed since the last edit
//   node units.mjs mark <id> [<id>…]  record the current hash of these units as edited
//   node units.mjs status             counts: total / edited / pending
//
// Run from the repository root.

import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = process.cwd()
const SKILL_DIR = dirname(dirname(fileURLToPath(import.meta.url)))
const STATE_FILE = join(SKILL_DIR, 'state.json')
const MESSAGES = join(ROOT, 'messages/en.json')
const DATA_DIR = join(ROOT, 'src/data')

// en.json sections larger than this split into their second-level keys.
const SPLIT_ABOVE = 6000
// Legal text changes meaning when its wording changes, so the editor does not touch it.
const SKIP_MESSAGE_KEYS = new Set(['legal'])
const SKIP_DATA = [
  /(^|\/)__tests__\//,
  /(^|\/)redirects\//,
  /(^|\/)(types|index)\.ts$/,
  /(^|\/)(de|fr|it)\.ts$/,
  /\.test\.ts$/,
  /(^|\/)semantic-seed-terms\.ts$/,
  /(^|\/)logos\.ts$/,
]

const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16)

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

function collectUnits() {
  const units = []
  const en = JSON.parse(readFileSync(MESSAGES, 'utf8'))
  for (const [key, value] of Object.entries(en)) {
    if (SKIP_MESSAGE_KEYS.has(key)) continue
    const text = JSON.stringify(value)
    if (text.length > SPLIT_ABOVE && value && typeof value === 'object') {
      for (const [sub, subValue] of Object.entries(value)) {
        units.push({ id: `messages:${key}.${sub}`, file: 'messages/en.json', path: `${key}.${sub}`, hash: sha(JSON.stringify(subValue)) })
      }
    } else {
      units.push({ id: `messages:${key}`, file: 'messages/en.json', path: key, hash: sha(text) })
    }
  }
  for (const abs of walk(DATA_DIR)) {
    const rel = relative(ROOT, abs)
    if (!/\.ts$/.test(rel) || SKIP_DATA.some((re) => re.test(rel))) continue
    units.push({ id: `data:${rel}`, file: rel, path: null, hash: sha(readFileSync(abs, 'utf8')) })
  }
  return units
}

const loadState = () => (existsSync(STATE_FILE) ? JSON.parse(readFileSync(STATE_FILE, 'utf8')) : {})
const saveState = (s) => writeFileSync(STATE_FILE, JSON.stringify(Object.fromEntries(Object.entries(s).sort()), null, 2) + '\n')

const [cmd, ...args] = process.argv.slice(2)
const units = collectUnits()
const state = loadState()

if (cmd === 'pending') {
  const filter = args[0]
  const pending = units.filter((u) => state[u.id]?.hash !== u.hash && (!filter || u.id.includes(filter)))
  for (const u of pending) console.log(`${u.id}\t${state[u.id] ? 'changed' : 'new'}`)
  console.error(`${pending.length} pending of ${units.length} units`)
} else if (cmd === 'mark') {
  const today = new Date().toISOString().slice(0, 10)
  for (const id of args) {
    const u = units.find((x) => x.id === id)
    if (!u) { console.error(`unknown unit: ${id}`); process.exitCode = 1; continue }
    state[id] = { hash: u.hash, editedAt: today }
    console.log(`marked ${id}`)
  }
  saveState(state)
} else if (cmd === 'status') {
  const edited = units.filter((u) => state[u.id]?.hash === u.hash).length
  console.log(`total ${units.length}, edited ${edited}, pending ${units.length - edited}`)
} else {
  console.error(`usage: node ${basename(fileURLToPath(import.meta.url))} pending [filter] | mark <id>… | status`)
  process.exitCode = 1
}
