import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3001
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    onConsoleLog: () => false,
    root: fileURLToPath(new URL('./src', import.meta.url)),
    coverage: {
      include: [
        'src/components/*'
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
