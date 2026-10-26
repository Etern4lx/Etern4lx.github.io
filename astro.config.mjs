import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Modifica esto con tu usuario de GitHub:
  // Ejemplo: site: 'https://alvaro-sec.github.io'
  site: 'https://etern4lx.github.io',
  base: '/',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});
