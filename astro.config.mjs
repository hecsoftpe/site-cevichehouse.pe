// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE are injected by the GitHub Pages workflow (actions/configure-pages).
// Locally they default to the project Pages URL so links behave like production.
const site = process.env.SITE || 'https://hecsoftpe.github.io';
const base = process.env.BASE ?? '/site-cevichehouse.pe';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  build: { format: 'directory', assets: '_assets' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-PE', en: 'en' } },
      filter: (page) => !page.includes('/compare/'),
    }),
  ],
});
