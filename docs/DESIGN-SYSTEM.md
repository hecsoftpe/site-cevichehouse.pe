# Design system: Ceviche House

> **Update 2026-11-19:** the shared "Tinta & Piedra" palette described below is **retired**. Each concept now has its own palette sampled from the restaurant's Instagram photos (A Mozo · B Casona · C Huarique · D Parte de Mar), and the tokens in `src/styles/tokens.css` are named after them. See [`PARTE-DE-MAR.md`](PARTE-DE-MAR.md) §3. The type, spacing, grid and component rules below still apply to A/B/C.

**Tokens:** [`src/styles/tokens.css`](../src/styles/tokens.css). Each concept maps them to semantic roles (`--bg`, `--fg`, `--muted`, `--line`, `--accent`) at the top of its own stylesheet.

## 1. Positioning

Premium casual, not fine dining. The site has to feel like a cevichería that takes its fish seriously: warm, confident and Limeño, with the food carrying the brand. That means:

- The photography leads, and colour supports it without competing.
- Generous space and controlled type instead of decoration.
- Plain, specific copy: what the dish is, where the restaurant is, how to book.
- No luxury signals the restaurant doesn't claim: no gold, no black-and-gold, no "exquisite experience".

## 2. Palette exploration

Three directions were tested against the two house photographs. The photos are warm oranges and reds (sweet potato, rocoto, octopus char), avocado greens, creamy whites, a dark bowl with a cobalt-and-white rim, wood, and a deep blue dining room.

| Palette | Colours | Against the photos | Verdict |
|---|---|---|---|
| **1. Costa clásica** (the existing direction) | Turquoise `#1fb5b0`, bright orange `#ff7a1a`, menu blue `#1482c5`, white | Turquoise and orange compete directly with the sweet potato and rocoto in the food, and the plates look washed out next to them. White text on turquoise or orange fails contrast (2.5–2.6:1). It reads as a beach bar. | Rejected |
| **2. Mineral** | Graphite `#23262a`, mineral green `#8fa89a`, lime `#d5da7a`, off-white | Calm and modern, but cold: the greens fight the avocado, and graphite flattens the warm dishes. Close to the old Concept C problem. | Rejected |
| **3. Tinta & Piedra** ✅ | Ink `#0f1e26`, warm ivory `#f7f3ec`, stone `#e0d7c8`, olive `#4d5735`, cobalt `#1a5590`, ají `#a13a23`, camote `#e8944a` | Ink matches the dark bowl and the dining room behind the photos, so dark sections frame the food like a plate. Warm ivory and stone let the whites and oranges stay true. Cobalt keeps the menu's brand blue and the bowl rim, used sparingly. Ají and camote come out of the food itself. | **Chosen** |

### Brand core ("Tinta & Piedra")

| Token | Hex | Role |
|---|---|---|
| `--ink-900` | `#0f1e26` | Primary text, dark sections, primary buttons |
| `--ink-800` | `#17303b` | Secondary dark surface |
| `--ivory-50` / `--ivory-100` | `#f7f3ec` / `#f0e9dd` | Page backgrounds |
| `--stone-200` / `--stone-300` | `#e0d7c8` / `#cbbfab` | Bands, map placeholders, hover |
| `--olive-700` / `--olive-200` | `#4d5735` / `#c9ceb0` | Concept C accent, quiet emphasis |
| `--cobalt-700` / `--cobalt-500` | `#1a5590` / `#2f73b5` | Brand blue (fish mark, Barranco marker) |
| `--aji-700` / `--aji-500` / `--aji-200` | `#a13a23` / `#c4502f` / `#efb3a0` | Concept A accent; `-200` on dark |
| `--camote-400` | `#e8944a` | Concept B accent, **on ink only** |

### Contrast (WCAG 2.2)

| Foreground | Background | Ratio | Use |
|---|---|---:|---|
| Ink 900 | Ivory 50 | 15.39:1 | Body text |
| Muted `#5b5a54` | Ivory 50 | 6.26:1 | Secondary text |
| Ají 700 | Ivory 50 | 6.04:1 | Accent text (A) |
| White | Ají 500 | 4.63:1 | Button (A) |
| Camote 400 | Ink 900 | 7.10:1 | Accent text and buttons (B) |
| Ají 200 | Ink 900 | 9.42:1 | Accent on dark (A) |
| Olive 700 | Ivory 100 | 6.37:1 | Accent text (C) |
| Cobalt 700 | Ivory 50 | 6.91:1 | Links, fish mark |
| Ivory 50 | Ink 800 | 12.47:1 | Text on dark |

`--cobalt-500` (4.10:1 on ivory) is only used for decoration (borders), never for text.

## 3. Typography

All fonts are open source (SIL OFL), self-hosted through Fontsource, `font-display: swap`, split by `unicode-range` so only the Latin subset downloads. Only the axes in use are loaded.

| Concept | Display | Body | Why |
|---|---|---|---|
| A | **Newsreader** (Production Type), `wght` 200–800 + italic | **Instrument Sans** | A real editorial serif (designed for on-screen reading of news), not a soft "luxury" serif. The italic carries the accent. |
| B | **Bricolage Grotesque**, `wdth` 75% (condensed) + `wght` | **Instrument Sans** | Loud and condensed like the hand-painted signage of a Lima street, but in sentence case so it stays readable. |
| C | **Instrument Serif** (normal + italic) | **Instrument Sans** | One superfamily, two voices: calm and coherent without being sterile. |

Four families in total across the project (down from six). Each concept uses two.

### Scale (fluid)

| Role | Size | Leading | Notes |
|---|---|---|---|
| Display / H1 | `clamp(2.8rem, 7.6vw, 6.2rem)` (A) · up to `9.2rem` (B) · up to `8.8rem` (C) | .86–.98 | Negative tracking -.02 to -.03em; `text-wrap: balance` |
| H2 | `clamp(2.1rem, 4.6–6vw, 3.9–5rem)` | .95–1.04 | |
| Lede | `clamp(1.3rem, 2.2vw, 1.7rem)` serif | 1.38–1.5 | One per section at most |
| H3 / dish name | 1.35–2.1rem | 1.1 | |
| Body | 1–1.0625rem | 1.6 | Max ~36rem per line |
| Small / caption | .8–.9rem | 1.4 | Italic serif captions in A |
| Label | .8–.85rem, 500–600 weight | 1 | **Sentence case**, letter-spacing ≤ .04em |

**Rules:** no all-caps headings. No letter-spacing above .08em (and only on the circular stamp). Prices use `tabular-nums`.

## 4. Spacing, grid, breakpoints

- **Spacing scale (4 px base):** `--s-1` .25rem → `--s-10` 8rem. Section padding is `--section: clamp(4rem, 9vw, 8.5rem)`.
- **Gutter:** `--gut: clamp(1rem, 4vw, 3.5rem)`, so 16 px on phones.
- **Container:** `--max: 1320px`.
- **Grid:** 12 columns with a 1.5–2rem gap from 900 px up, a single column below. A and C compose asymmetrically on it (7/5, 3/6/3, 4/8); B uses two-part splits and a scroll rail.

| Breakpoint | Use |
|---|---|
| < 600 | Phones: one column, sticky menu tabs, floating or bar CTA |
| ≥ 600 | Two-column fact lists |
| ≥ 900 | 12-column grid, sticky photos, menu in columns |
| ≥ 1024 | Desktop nav replaces the menu button; floating CTA hidden |
| ≥ 1400 | Rail aligns to the container |

## 5. Components

| Component | Spec |
|---|---|
| **Primary button** | 48 px tall (44 px small), 2 px radius in A, 4 px in B, 0 in C. Ink background (A, C) or camote (B). Hover: a background step, no lift. |
| **Secondary** | 1 px line, transparent. Hover: border darkens (A, B) or inverts (C). |
| **Text link + arrow** | Underline with the arrow moving 4 px on hover (A gallery, CTAs). |
| **Focus** | 3 px outline at 3 px offset in the concept's accent (`:focus-visible` only). |
| **Menu tabs** | ≥ 44 px targets, `aria-pressed`. Sticky under the header below 900 px. Opens on *Ceviches y tiraditos* on mobile. |
| **Dish item** | Name (display) + price (tabular) on one baseline, description below. Never a card with an icon. |
| **Photo** | `Photo.astro`: AVIF/WebP, widths capped at the original's size, `object-position` from `gallery.ts`. Hero `eager` + `fetchpriority=high`, everything else lazy. |
| **Map** | Click to load (no Google request until tapped), with the same footprint as the iframe. |
| **Booking** | Every CTA is a `wa.me` link with a pre-filled message (per location where relevant). |

### States

Hover: a colour or background step, 0.3 s, `cubic-bezier(.2,.7,.2,1)`. Active: 1 px press (B). `aria-pressed` and `aria-expanded` drive the styling. Motion (reveal on scroll, the hero settle, the ticker, the stamp) is turned off under `prefers-reduced-motion`.

## 6. Image ratios

| Ratio | Use |
|---|---|
| 4:5 | Hero (mobile and desktop A/B), gallery lead, dish photo |
| 1:1 | Detail crops (P3/P4, ≤ 360 px), mobile hero A/B |
| 3:2 | Landscape dish, gallery |
| 16:11 / 4:3 | C hero |
| Full height | A spread (sticky, `100svh`) |

Captions describe what's in the frame. They don't name a dish until the kitchen confirms it.

## 7. What we deliberately avoid

Rainbow card grids, pill buttons everywhere, glassmorphism, gradient blobs, decorative icons on every item, all-caps labels with wide letter-spacing, stock photos, AI-generated food, "Foto próximamente" boxes, star ratings without a source, and generic copy like "an unforgettable culinary journey".
