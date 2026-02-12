import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://bitab.net/',
  integrations: [
    sitemap({
      customPages: [
        'https://bitab.net/draw/index.html',
        'https://bitab.net/fangdai/index.html',
      ],
    }),
    svelte(),
    icon({
      include: {
        ri: ['*']
      }
    })
  ],
  image: {
    service: sharpImageService()
  },
  output: 'static',
  adapter: vercel()
});
