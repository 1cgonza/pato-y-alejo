import { defineConfig } from 'vite';

export default defineConfig({
  base: '/pato-y-alejo',
  server: {
    port: 3000,
  },
  publicDir: 'estaticos',
  build: {
    outDir: 'publico',
    assetsDir: 'estaticos',
    sourcemap: true,
  },
});
