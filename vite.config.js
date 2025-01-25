import { defineConfig } from 'vite';
import adastra from 'adastra-plugin';

export default defineConfig({
  plugins: [adastra()],
  build: {
    emptyOutDir: false,
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*', // Fix CORS
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  },
});
