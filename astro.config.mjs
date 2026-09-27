// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ivanrico-g.github.io',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
