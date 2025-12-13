import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/resume': 'https://drive.google.com/file/d/1xQt3q4lHz3YwcZadBPUryet8kKj4eTmA/view'
  },
  build: {
    format: 'file',
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name].[hash][extname]',
          chunkFileNames: '_astro/[name].[hash].js',
          entryFileNames: '_astro/[name].[hash].js'
        }
      }
    }
  }
});
