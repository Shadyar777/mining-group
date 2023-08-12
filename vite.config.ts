import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'node:path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRequire } from 'node:module';
import { viteStaticCopy } from 'vite-plugin-static-copy';

const require = createRequire(import.meta.url);
const cMapsDir = path.join(
  path.dirname(require.resolve('pdfjs-dist/package.json')),
  'cmaps',
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: cMapsDir, dest: '' }],
    }),
  ],
  resolve: {
    alias: {
      '@public': '/public',
      '@src': '/src'
    }
  },
  server: {
    host: '0.0.0.0',
  },
});
