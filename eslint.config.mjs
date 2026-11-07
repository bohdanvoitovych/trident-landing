import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) })

const config = [
  { ignores: ['.next/**', '.open-next/**', 'node_modules/**', 'src/app/(payload)/**', 'src/payload-types.ts', 'scripts/**', 'design/**'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default config
