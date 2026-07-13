import { defineConfig } from 'vite';
import { cpSync } from 'fs';

export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [
    {
      name: 'copy-static-assets',
      writeBundle() {
        cpSync('images', 'dist/images', { recursive: true });
        cpSync('logos', 'dist/logos', { recursive: true });
        cpSync('script.js', 'dist/script.js');
        cpSync('favicon.svg', 'dist/favicon.svg');
      },
    },
  ],
});
