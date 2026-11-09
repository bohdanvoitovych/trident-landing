import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  // Tests import .tsx modules (e.g. CookieBanner); tsconfig keeps jsx: preserve for Next.
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    include: ['src/**/*.test.ts'],
    passWithNoTests: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'server-only': path.resolve(__dirname, './test/server-only-stub.ts'),
    },
  },
})
