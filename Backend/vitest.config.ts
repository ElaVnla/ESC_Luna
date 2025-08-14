import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // for express
    setupFiles: './tests/setup.ts'
  },
})
