// Frontend/vite.config.ts
import { defineConfig } from 'vitest/config';
import react      from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // <-- THIS
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'vitest.setup.ts',
    // (no need to repeat alias here if your config is picked up)
  }
});
