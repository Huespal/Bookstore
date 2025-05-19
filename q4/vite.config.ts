import vue from '@vitejs/plugin-vue';
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
    coverage: {
      include: [
        'src/components/*'
      ]
    }
  }
})
