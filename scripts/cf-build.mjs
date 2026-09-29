#!/usr/bin/env node
/**
 * Cloudflare Workers build.
 *
 * Payload stays in the repo — it just has no place in a Workers bundle: the
 * postgres adapter needs raw TCP, `sharp` is a native binary, and the admin
 * panel wants a full Node runtime. The Workers deploy is a static demo of the
 * frontend, which imports none of that (see src/data/ — every page is static).
 *
 * Next has no config switch to drop routes, so the (payload) route group is
 * moved aside for the duration of the build and moved back in `finally`.
 * Nothing is deleted, so a failed build leaves the tree exactly as it was.
 */
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, renameSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const routes = join(root, 'src', 'app', '(payload)')
const stash = join(root, '.cf-build', 'payload-routes')

let moved = false

function setAside() {
  if (!existsSync(routes)) {
    console.log('· (payload) routes absent — nothing to set aside')
    return
  }
  mkdirSync(dirname(stash), { recursive: true })
  rmSync(stash, { recursive: true, force: true })
  renameSync(routes, stash)
  moved = true
  console.log('· (payload) routes set aside →', stash)
}

function restore() {
  if (!moved) return
  rmSync(routes, { recursive: true, force: true })
  renameSync(stash, routes)
  moved = false
  console.log('· (payload) routes restored')
}

// A crashed or cancelled build must not leave the tree half-moved.
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    restore()
    process.exit(1)
  })
}

try {
  setAside()
  const { status } = spawnSync(
    'pnpm',
    ['exec', 'opennextjs-cloudflare', 'build'],
    {
      cwd: root,
      stdio: 'inherit',
      // NEXT_PUBLIC_DEMO_MODE is baked in at build time: the forms have no
      // backend here, so they say so rather than failing on submit.
      env: {
        ...process.env,
        CF_BUILD: '1',
        NEXT_PUBLIC_DEMO_MODE: '1',
        NEXT_PUBLIC_CF_WORKERS: '1',
      },
    },
  )
  if (status !== 0) process.exitCode = status ?? 1
} finally {
  restore()
}
