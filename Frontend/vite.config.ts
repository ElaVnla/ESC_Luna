// vitest.config.ts
import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      // now `@/…` maps to `<root>/src`
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    // make sure Hooks run in a browser‐like env
    environment: 'jsdom',
    // allow global describe/it/expect
    globals: true,
    // inline React so there’s only one copy (avoids invalid‐hook calls)
    deps: {
      inline: ['react', 'react-dom'],
      
    },
     setupFiles: ['./src/setupTests.ts'],
  },
})
