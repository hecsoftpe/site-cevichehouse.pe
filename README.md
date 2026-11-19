# Ceviche House: website

Bilingual (ES/EN) website for **Ceviche House**, a cevichería with locations in Miraflores (Ca. Narciso de la Colina 184) and Barranco (Jr. Zepita 203), Lima. Bookings go through WhatsApp (+51 998 400 543).

The repository contains **three complete design alternatives** plus a comparison page:

| Route | Contents |
|---|---|
| `/` · `/en/` | Comparison of the 3 concepts. Once one is chosen, this becomes that concept's homepage |
| `/concept-a/` · `/en/concept-a/` | **A: Pacific Editorial**: a magazine feature. Newsreader + Instrument Sans, ivory/ink/ají |
| `/concept-b/` · `/en/concept-b/` | **B: Lima Vibrant**: barrio energy. Condensed Bricolage Grotesque, ink/camote, dish rail and sticky booking bar |
| `/concept-c/` · `/en/concept-c/` | **C: Minimal Contemporary**: a numbered index on stone paper. Instrument Serif + Sans, ivory/stone/olive/ink |
| `/concepts/` | Comparison (always available) |
| `/compare/?c=a&device=mobile&lang=es` | Desktop / tablet / mobile preview in a device frame |

Every concept includes navigation with a mobile menu, a hero, our story, signature dishes, the full menu with category filters and links to the ES/EN PDFs, a gallery with a lightbox, Google Maps and Tripadvisor reviews by location, both locations with a click-to-load map, a footer, and a floating WhatsApp button.

## Stack

- [Astro](https://astro.build) as a static site, with TypeScript, no client-side framework and about 3 KB of JS.
- One brand core ("Tinta & Piedra") in `src/styles/tokens.css`, expressed three ways. See `docs/DESIGN-SYSTEM.md`.
- Self-hosted fonts via `@fontsource` (Newsreader, Instrument Sans/Serif, Bricolage Grotesque), loading only the axes in use.
- Images optimised to AVIF/WebP with `astro:assets`.
- SEO: canonical, hreflang, Open Graph, JSON-LD (`Restaurant` ×2), sitemap and robots.

```
src/data/        business data, menu, reviews, gallery, concepts  ← edit content here
src/i18n/        ES/EN copy and URL helpers
src/components/  a/ b/ c/ (one per concept) + shared/
src/layouts/     Base.astro (head, SEO, lightbox)
src/styles/      tokens.css (brand core)
src/scripts/     ui.ts (nav, reveal, filters, map, lightbox)
scripts/         retouch.py (photo cleanup for printed/scanned sources)
docs/            DESIGN-AUDIT · DESIGN-SYSTEM · PHOTO-ASSET-AUDIT · ASSETS · CONTENT-NOTES · CHOOSING-DEFAULT
```

## Development

```bash
npm install
npm run dev
```

Production build (locally it uses the Pages base `/site-cevichehouse.pe/`):

```bash
npm run build && npm run preview
```

For a custom domain at the root: `BASE= SITE=https://cevichehouse.pe npm run build`.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes on every push to `main` (and on demand with *Run workflow*).
The first time, enable it in **Settings → Pages → Source: GitHub Actions**. The workflow takes `SITE`/`BASE` from the Pages settings, so it also works with a custom domain.

## Pending

See [`docs/ASSETS.md`](docs/ASSETS.md) and [`docs/PHOTO-ASSET-AUDIT.md`](docs/PHOTO-ASSET-AUDIT.md): high-resolution photos, logo, opening hours, verified ratings. To choose the final design, see [`docs/CHOOSING-DEFAULT.md`](docs/CHOOSING-DEFAULT.md).
