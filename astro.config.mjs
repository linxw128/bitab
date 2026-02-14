import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import svelte from '@astrojs/svelte';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.bitab.net/',
  integrations: [
    sitemap({
      customPages: [
        'https://www.bitab.net/draw',
        'https://www.bitab.net/fangdai',
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
  // adapter: vercel()
});
