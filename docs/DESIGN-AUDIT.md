# Design audit: Ceviche House, concepts A / B / C

**Date:** 2026-11-19
**Scope:** the three published concepts (`/concept-a/`, `/concept-b/`, `/concept-c/`), their source code in this repository, and the redesign that followed.

## 1. How the audit was done

| Step | Method |
|---|---|
| Rendering | The site was built from source (`npm run build`) and served locally with `astro preview`. The cloud environment's network policy blocked `hecsoftpe.github.io`, so the published URLs could not be opened directly. The local build comes from the same commit that GitHub Pages deploys (`ec0c596`), so the rendered output is the same. |
| Screenshots | Playwright/Chromium, full page, at **1440×1000**, **768×1024** and **390×844**. Lazy images and scroll reveals were triggered before capture. Saved in [`audit/before/`](audit/before/) and [`audit/after/`](audit/after/) (downscaled for the repository). |
| Code | Read every component (`PageA/B/C.astro`, `shared/*`), the data files, `ui.ts` and the layout. Checked CSS, hierarchy, spacing, type, breakpoints and image pipeline. |
| Images | Recorded each rendered image's `currentSrc`, natural size and displayed size per viewport. |
| Weight | Summed every response body while scrolling the full page. |
| Accessibility | axe-core 4.10 on each concept at desktop and mobile, plus keyboard and functional checks (mobile nav open/Escape, menu filter, click-to-load map). |

> Note on the full-page captures of the *before* state: the fixed header shows up partway down the page. That is a capture artifact (smooth scrolling was still running when the screenshot was taken), not a bug in the live site. The *after* captures turn smooth scrolling off first.

## 2. Problems shared by all three concepts

| # | Finding | Evidence | Severity |
|---|---|---|---|
| 1 | **Four "Foto próximamente" placeholders per concept**, all in the gallery. Each one is a large striped box with a fish icon, and they take up more of the gallery than the real photos do. | `.ph` count = 4 at every viewport; `GALLERY` had 4 of 6 slots set to `src: null`. | High |
| 2 | **Only two real photos exist**, and both were lifted from the printed menu PDF: 1080 px wide, with an **embossed paper texture** and a **cyan shadow cast** baked in. They look like scans, not photography. | `src/assets/photos/*-carta.jpg`, 1080×1120 and 1080×1180. See `audit/retouch-before-after.jpg`. | High |
| 3 | **The full menu dominates mobile.** All 13 categories (~90 dishes) render at once, so mobile pages ran **14,800–16,400 px** tall, and more than a third of that was the menu. | Page heights in the table in §5. | High |
| 4 | **Six font families were installed**: Fraunces, Inter, Bricolage, Space Grotesk, Instrument Serif and Manrope. Fraunces + Inter is the single most common "premium AI site" pairing. | `package.json` | Medium |
| 5 | **The reviews section promises content it doesn't have.** Three large cards each said "check the rating on the platform". No ratings or quotes are verified, so this is a lot of space spent on nothing. | `REVIEWS[].rating = null` | Medium |
| 6 | **The images came from a single 1080 px source**, and the requested `widths` included sizes that would upscale on retina. | `Photo.astro` widths `[480, 800, 1080]` regardless of the original. | Low |
| 7 | **Instagram wasn't linked anywhere**, because the account couldn't be verified at build time. | `SOCIAL.instagram = null` | Medium |

What already worked and was kept: the WhatsApp booking flow with pre-filled messages, real menu data transcribed from the PDFs, ES/EN routing with hreflang, JSON-LD for both locations, click-to-load maps (privacy and performance), the honest "no fabricated ratings" rule, `prefers-reduced-motion` support, the skip link and focus styles.

## 3. Per-concept audit

### Concept A: Pacific Editorial

**The preliminary observation held up.** Editorial storytelling and a well-paced information sequence (hero → story → dishes → menu → gallery → reviews → locations) were the strongest structure of the three.

| Strengths | Weaknesses | Opportunities |
|---|---|---|
| A clear narrative, with a pull quote and "Fig." captions that suit the magazine idea | Fraunces with `SOFT` 40–50 reads as soft and generic, not editorial | Swap to a true newspaper/editorial serif |
| The printed-paper menu (dotted leaders, roman numerals) is the best menu treatment of the three | The hero photo sat in a small box with a beige offset rectangle behind it, which made the main dish look like a thumbnail | A full-bleed cover photo |
| Good typographic restraint in the dark dish list | Drop cap + three paragraphs + three pillar cards + quote made the story section feel heavy | A lede paragraph, short notes and one pull quote |
| | The dishes section was pure text, so the strongest photo (the seafood platter) wasn't used where the dishes are sold | Pair the dish list with the photo in a spread |
| | Coral `#a8401f` + ocean `#0f2a44` + sand + ivory + menu blue added up to five competing hues | Fewer hues, one accent |

### Concept B: Lima Vibrant

**The preliminary observation held up**, and the screenshots make it more obvious: the energy is real, but it is spent everywhere at once.

| Strengths | Weaknesses | Opportunities |
|---|---|---|
| Strong personality, the most memorable of the three | **All-caps** XXL headlines on every section heading (`COCINA DE LA COSTA PERUANA…`) | Condensed grotesque in **sentence case**: still loud, but readable |
| Sticky mobile booking bar (the best mobile conversion feature) | Four saturated brand colours (marine, coral, citrus, lime) plus menu blue, used at full strength on cards, so no colour means anything | Ink + one hot accent (camote), with cobalt only as a second location marker |
| Dish rail with scroll-snap | **Rainbow cards**: the pillars, dishes, locations and reviews were each a different colour card with a 2 px border and rounded corners. This is the "repetitive card grid" pattern. | Uniform dark dish cards, numbers instead of coloured cards |
| Bottom sheet menu | Two rotated stickers, two tilted photo cards, a ticker with fish icons, plus stickers on the photos: too many decorative layers competing with the food | One ticker, one stamp, no tilted photos |
| | The yellow `#f5d300` background on the dishes section clashes with the warm oranges in the photography | Let the dark background carry the photos |
| | The menu was 13 bordered boxes with count badges | A clean three-column list with heavy rules |

### Concept C: Minimal Contemporary

**The preliminary observation held up.** It has the clearest hierarchy and the best structure (numbered sections, the 12-column grid, side navigation for the menu), but it reads cold.

| Strengths | Weaknesses | Opportunities |
|---|---|---|
| A true 12-column grid with hairlines | Graphite/navy on near-white (`#f7f5f0`) with a sage accent felt corporate, like an architecture studio, not a cevichería | Warm stone paper, olive accent, ink instead of graphite |
| Numbered index: `[01] Nuestra cocina` | Bracketed numbers in all caps with wide letter-spacing (`[01] NUESTRA COCINA`) are a SaaS tell | Plain small numbers, sentence case |
| The menu side-nav is the best desktop menu UX | The gallery was **navy with three of five slots as placeholders**: the coldest part of any concept | A stone band with real photos and numbered captions |
| Instrument Serif has genuine character | Manrope (rounded, technical) undercut the serif | Instrument Sans: same family, two voices |
| | The hero photo was cropped wide and low, cutting the dish in half | A larger photo with a controlled focal point, plus a "facts" row (addresses, booking, menu) |

## 4. Decisions

1. **Shared brand core, three expressions.** One palette ("Tinta & Piedra") and one token file ([`src/styles/tokens.css`](../src/styles/tokens.css)) for the restaurant. Each concept maps it differently, so the three proposals compare *design directions* for the same restaurant rather than three different restaurants. Details in [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md).
2. **No placeholders, ever.** `Photo.astro` no longer has an empty state. Every layout is designed for the photos that exist, and new photos slot in through `src/data/gallery.ts`.
3. **Photography first.** The two owned photos were retouched (texture removed, white balance corrected, black point restored) and two detail crops were derived from them for small frames. See [`PHOTO-ASSET-AUDIT.md`](PHOTO-ASSET-AUDIT.md).
4. **Mobile menu opens on one category** (Ceviches y tiraditos) with a sticky tab bar, which cuts mobile page height by roughly 40%. Without JavaScript the whole menu still shows.
5. **Reviews are an honest link list**: one sentence explaining that we link rather than copy, and three rows linking out. If verified ratings are added to `REVIEWS`, they appear automatically.
6. **Instagram linked** (`@ceviche_house.pe`, confirmed by the client) in each gallery, footer and CTA.

### What changed per concept

| | A: Pacific Editorial ("La crónica") | B: Lima Vibrant ("Barrio") | C: Minimal Contemporary ("Mesa") |
|---|---|---|---|
| Type | Newsreader + Instrument Sans | Bricolage Grotesque **condensed** (wdth 75) + Instrument Sans | Instrument Serif + Instrument Sans |
| Palette | Marfil, tinta, ají accent | Tinta, camote accent, marfil, cobalt | Marfil/piedra, olive accent, tinta |
| Hero | Full-bleed magazine cover, solid masthead | Dark poster: headline overlapping the photo, inset detail, one rotating stamp | Index headline, large photo, "facts" row (addresses, booking, menu) |
| Story | Serif lede, roman-numeral notes, detail photo, centred pull quote | Sentence-case statement, two columns, large numbers on rules | 3/6/3 grid: label, text, detail photo; definition row |
| Dishes | Dark **spread** with a sticky full-height photo | Dark **rail** with a photo card first, uniform cards | **Table** of rows with a sticky photo |
| Menu | Printed paper, sticky tabs on mobile | Heavy-rule three-column list, sticky tabs | Side navigation on desktop, sticky tabs on mobile |
| Gallery | Contact sheet: sticky intro + 2-column mosaic | Film strip with staggered heights + giant `@handle` link | Stone band with numbered figures |
| Removed | Beige offset box, drop cap, pillar cards, pill buttons | All caps, 4-colour card system, 2 stickers, tilted photos, fish ticker, yellow section | Bracketed caps labels, navy gallery, Manrope |

## 5. Before / after measurements

Page height in CSS px. Weight is the sum of response bodies when scrolling the whole page on a local build.

| Page | Height before | Height after | Weight before | Weight after | Placeholders |
|---|---:|---:|---:|---:|---|
| A desktop | 11,017 | 10,416 | 405 KB | 479 KB | 4 → 0 |
| A tablet | 16,972 | 10,082 | 405 KB | 574 KB | 4 → 0 |
| A mobile | 16,106 | 9,744 | 289 KB | 357 KB | 4 → 0 |
| B desktop | 9,687 | 9,110 | 277 KB | 446 KB | 4 → 0 |
| B tablet | 11,896 | 8,351 | 277 KB | 494 KB | 4 → 0 |
| B mobile | 14,796 | 8,063 | 242 KB | 306 KB | 4 → 0 |
| C desktop | 11,528 | 9,765 | 345 KB | 521 KB | 4 → 0 |
| C tablet | 12,859 | 10,069 | 336 KB | 397 KB | 4 → 0 |
| C mobile | 16,443 | 9,355 | 248 KB | 269 KB | 4 → 0 |

The weight went up because the space the placeholders took is now real photography. Every page stays under 600 KB fully scrolled.

**Initial load (no scrolling, local):**

| Page | Transfer | Fonts | Images | LCP element |
|---|---:|---:|---:|---|
| A mobile / desktop | 339 / 407 KB | 149 KB | 88 / 155 KB | hero AVIF (eager, `fetchpriority=high`) |
| B mobile / desktop | 288 / 325 KB | 106 KB | 88 / 126 KB | hero AVIF |
| C mobile / desktop | 251 / 349 KB | 72 KB | 88 / 187 KB | hero AVIF |

Fonts now load only the `wght` axis (Newsreader ~58 KB per style, Instrument Sans 30 KB). Bricolage loads `wdth`+`wght` because B needs the condensed width. Fontsource `unicode-range` splits mean only the Latin subset downloads.

**Accessibility:** axe-core reports **0 violations** on all three concepts at 1440 px and 390 px (`prefers-reduced-motion` was emulated so the scroll fade didn't skew contrast). Fixes made along the way: a redundant caption on B's photo card (`aria-hidden`), C's `<aside>` nested inside `main`, floating CTAs moved into labelled landmarks, and C's footer legal text raised to 4.5:1. All interactive targets are at least 44 px.

**Responsive:** no horizontal overflow at 390, 768 or 1440 (`scrollWidth === viewport`). The gutter is `clamp(1rem, 4vw, 3.5rem)`, so 16 px on phones.

## 6. Still open

| Item | Owner | Why it matters |
|---|---|---|
| **High-resolution original photos** (≥ 2400 px) of dishes, both dining rooms, the bar and pisco | Restaurant / photographer | The biggest remaining quality gap. The two current photos top out at 1080 px, so large hero frames look soft on retina screens. See the shot list in `PHOTO-ASSET-AUDIT.md`. |
| Confirm which dish each photo shows | Kitchen | They're probably *ceviche cremoso* and *parrillada de mariscos*, but they're captioned generically until confirmed |
| Logo (SVG) | Restaurant | The wordmark is set in type for now |
| Opening hours, verified ratings | Restaurant | Hidden until verified (`site.ts`, `reviews.ts`) |
| Choose the production concept | Restaurant | `DEFAULT_CONCEPT` in `src/data/site.ts` |
