# PARTE DE MAR: Concept D, and the new palettes for A/B/C

**Date:** 2026-11-19 · **Routes:** `/concept-d/` · `/en/concept-d/` · **Code:** `src/components/d/`

## 1. Research

### 1.1 Barra Maretazo (barramaretazo.com)

Captured with Playwright at 1440 and 390 → [`research/maretazo/`](research/maretazo/).

| Aspect | What they do | What we take | What we avoid |
|---|---|---|---|
| Brand story | The hero is a family photo in the restaurant; "28 años de sabor marino"; Tripadvisor awards as proof | **Faces and history** sell a cevichería better than a stock dish. Our version: the portrait of the mozos | Award badges we can't verify |
| Information architecture | Menu as three tiles (Piqueos / Platos / Cócteles, each with a photo and a dish name) → "Vibra y Sabor a mar" gallery → Instagram → footer with **WhatsApp per location** | Dishes named under each photo; **booking per location**; Instagram as living content | Centred navigation with no visual hierarchy; three identical tiles |
| Dish presentation | Dark photos on wood or plates, dish names in small type | The real dish, always named | Rounded cards, centred layout |
| Atmosphere | Script type (Kristi), crab and fish illustrations, collages of shells, oars and beach glass, sea-blue wood texture | That the atmosphere *should* be communicated | **Everything else**: the script, the marine illustrations and the beach collage are exactly the clichés this brief rules out |
| Type | Poppins + Kristi | — | Both |

**Conclusion:** good architecture (people → menu → atmosphere → social → two locations with WhatsApp), but a "beach" look that could belong to any cevichería. PARTE DE MAR keeps the architecture and replaces the beach with the paperwork of fresh fish.

### 1.2 Instagram @ceviche_house.pe

| Attempt | Result |
|---|---|
| `instagram.com/ceviche_house.pe/` with Playwright | **Redirects to login** (`/accounts/login/`). Not bypassed. Evidence: [`research/instagram/profile-1280.jpg`](research/instagram/profile-1280.jpg) |
| Official public embed `instagram.com/ceviche_house.pe/embed/` | ✅ Profile "Ceviche House • Cevichería", **2,024 followers, 35 posts**. It only exposes the **latest 6 posts** at 1080 px, with their captions. |
| Requested: at least 12 posts | **6 inspected, 29 not reachable without logging in.** Logging in or using a third-party scraper would break Instagram's terms. To analyse the rest, the restaurant can export them or share access. |

The CDN hosts the embed needed (`scontent-ord5-1/2.cdninstagram.com`) were added to this repository's personal environment with your approval. Contact sheet of the 6: [`research/instagram/embed-6-posts.jpg`](research/instagram/embed-6-posts.jpg).

| # | File (`src/assets/photos/ig/`) | Caption (abridged) | Analysis |
|---|---|---|---|
| 1 | `mozos-bn.jpg` 1080×1350 | "Mesa lista! 🐟 Huarique Miraflores · Casona Barranco" | **B/W.** Three classic Lima *mozos*: white shirt, tie, black apron, at the bar with menus. Direct front-on composition, high contrast. The best "story" image the house has. |
| 2 | `huarique-miraflores.jpg` 1080×571 | "Domingo, 18.10.26" | Panoramic street shot: **cobalt-blue awning**, a vertical garden, the backlit "Ceviche House" sign, tables on the pavement, a waiter in white shirt and apron. Daylight, high-key, coral-pink wall behind. |
| 3 | `terraza-barranco.jpg` 1080×1351 | "Un brindis frente al mar… terraza de nuestra casona en Barranco" | A balcony with wrought-iron railing, cream umbrella, **the sea in the background**, a waiter serving. Natural light, the sky slightly blown out. |
| 4 | `ceviche-pesca-del-dia.jpg` 1080×1440 | "**Una pesca. Un ceviche. El día.** Ceviche de pesca del día" | The **hero photo**. Professional: a deep-blue rimmed bowl on a white plate, butter lettuce, two slices of sweet potato, a **rocoto ring** on top, *yuyo* (seaweed), corn, a creamy leche de tigre. A waiter's hand serving. Window light from the left, true white balance, shallow depth of field. Indigo booth behind. |
| 5 | `unico-review.jpg` 1080×1920 | "Lo único que importa… vente a la house" | An **empty** skillet and bowl on the steel counter, with the text "el único review que importa." **baked into the image**. Brand voice with humour. |
| 6 | `casona-barranco.jpg` 1080×1350 | "La buena vida, por aquí andamos." | The casona balcony: **garnet walls**, wooden doors, cream umbrellas with string lights, wicker chairs, a waiter in apron, a full table. Hard sun with deep shadows. |

**What the photos say (it set the direction):**

- **Tableware:** dark bowls with a dashed blue rim on a white plate. The house's own ceramics.
- **The ingredients that lead:** sweet potato (orange), rocoto (red), corn (pale yellow), lettuce, avocado.
- **Light:** natural and true to life, with no heavy filters.
- **The places:** the Barranco casona is *garnet, wood, wrought iron and string lights*. The Miraflores huarique is *cobalt awning, steel, indigo booths*. They are two different personalities.
- **The people:** the **uniform** (white shirt, tie, black apron) is the most consistent visual element across the whole feed.
- **The voice:** short, wry, confident ("Una pesca. Un ceviche. El día." / "el único review que importa"). It names the houses "**Huarique** Miraflores" and "**Casona** Barranco". Those names are now in `LOCATIONS[].house`.

**Rights:** these are the restaurant's own photos from its official account, used at the request of its team. **Guests are recognisable** in #2, #3 and #6, so the restaurant should confirm consent before going to production.

## 2. Concept

**PARTE DE MAR**: the house's *parte*, the daily sheet of what came in from the sea and went out to the table. The identity comes from the paperwork of fresh fish, not from the beach:

| Device | What it does |
|---|---|
| **Parte strip** (`Parte Nº 323 · Lima · jue 19/11/26`) | The day-of-year number and the **real date** in Lima time (computed in the visitor's browser). It reinforces "today's fish" without inventing anything. |
| **"PESCA DEL DÍA" stencil stamp** | A crate stamp over the hero photo. Big Shoulders **Stencil**. |
| **Lot labels** (`Lote 01 · Ceviches y tiraditos … S/ 59`) | The 9 house dishes as fresh-produce labels with thick rules. The price line extends on hover. |
| **Visual inspection** | Callouts on the photo that point **only at what's visible**: sweet potato, avocado, capers, rocoto, corn. On mobile they collapse to numbered dots plus a legend. |
| **Technical rules** | A ruler with tick marks over the kitchen notes; 2 px rules throughout. |
| **Contact sheet** | The gallery as a contact sheet with frame numbers (`01A ▸`) and the picks marked in rocoto, as if in grease pencil. |
| **Destination labels** | Each location as a dispatch label: address, district, hours, phone, map. |

**Ruled out:** anchors, waves, shells, palm trees, gradients, glass effects, floating shadows, pills, rounded cards.

## 3. Palette (sampled from the photos)

k-means (k=8) on each photo plus spot samples (median of a box) on specific objects:

| Sample | Photo | Hex |
|---|---|---|
| Casona wall | casona-barranco | `#9f484d` (in shade, ≈`#6e2230`) |
| Huarique awning | huarique-miraflores | `#0372ca` |
| Huarique sign | huarique-miraflores | `#193a5a` |
| Booth | ceviche-pesca-del-dia | `#19162a` |
| Rocoto | ceviche-pesca-del-dia | `#e75d22` |
| Sweet potato | ceviche-pesca-del-dia | `#fa9f35` |
| Corn (in shade) | ceviche-pesca-del-dia | `#f4dfac` |
| Lettuce | ceviche-pesca-del-dia | `#90ac68` |
| Umbrella | casona-barranco | `#ddbc92` |
| Railing | casona-barranco | `#25282c` |
| Floor wood | casona-barranco | `#6f3f36` |

### The previous palette ("Tinta & Piedra") is retired

Warm ivory + terracotta + ink is the default palette of generated sites. Each concept now takes its colours from **one real place or object** (`src/styles/tokens.css`):

| Concept | Source | Palette | Key contrast |
|---|---|---|---|
| **A · Mozo** | The B/W portrait of the floor staff | Paper `#f6f6f3` · Apron `#121212` · Grey `#dcdcd7` · **Rocoto** `#c2321a` | Rocoto/paper 5.15 · black/paper 17+ |
| **B · Casona** | The Barranco casona | **Garnet** `#6e2230` · String-light amber `#f2b640` · Railing green `#1d2b27` · Lime-wash `#f6f1ec` | Amber/garnet 5.97 · lime-wash/garnet 9.67 |
| **C · Huarique** | The Miraflores huarique | White `#f9f9f7` · Counter steel `#e1e4e6` · **Awning cobalt** `#0b5bae` · Booth indigo `#17162a` | Cobalt/white 6.38 · indigo/steel 13.9 |
| **D · Parte** | The uniform and the dish | Shirt paper `#f7f6f2` · Apron `#111417` · **Rocoto** `#e2501f` · **Corn** `#efc13a` · Awning `#0a5cb0` (sparingly) | Apron/corn 10.9 · apron/rocoto 4.75 (rocoto blocks always carry **dark** text) · rocoto text `#b33a17` on paper |

D uses **flat blocks with intent**: corn for the menu, rocoto for bookings, apron for the kitchen and the contact sheet. The photos bring the rest of the colour.

## 4. Typography (D)

| Role | Typeface | Why |
|---|---|---|
| Headlines | **Big Shoulders Display** 800–900, all caps, leading .76–.86 | A condensed face born from Chicago signage, close to the lettering on fish crates and market signs. It holds "HOY HAY MAR." at 19rem without losing legibility. |
| Stamps and "LA CARTA" | **Big Shoulders Stencil Display** | A real crate stencil. Used in two places only. |
| Reading | **Source Sans 3** | Calm and highly legible. It doesn't compete. |
| The "parte" | **IBM Plex Mono** 400/500 | Lot numbers, prices, annotations, metadata: the voice of the slip. |

Uppercase is used **only** in display type and mono (that's the visual language of the slip). Body text is in sentence case. Weight: 35 + 37 + 29 + 2×15 KB (weight axis only, Latin subset).

## 5. Structure

| # | Section | Composition |
|---|---|---|
| 01 | Hero | 7/5 split. "HOY / HAY / MAR." (19rem, the last word in rocoto) + ticket (signature dish, both houses). The photo runs the full height of the right side, with the stamp over the border. **Mobile:** the headline fills the first screen, photo below, sticky booking bar. |
| 02 | Kitchen | Apron background. "Una pesca. / Un ceviche. / El día." (the house's own phrase), offset lines, a ruler with numbered notes. |
| 03 | Dishes | Sticky header + annotated photo + a grid of lot labels with wide labels (corn, apron) to break the rhythm. |
| 04 | Menu | Full-bleed corn band, stencil title, a side index with dish counts (sticky tabs on mobile, opening on Ceviches). |
| 05 | Houses | Huarique: panoramic + name in **awning blue**. Casona: tall photo + terrace photo overlapping. |
| 06 | Gallery | A 10-frame contact sheet on apron black, picks marked, lightbox, link to Instagram. |
| 07 | The floor | The large mozos portrait, "El único review que importa." in rocoto, a **[PENDIENTE]** placeholder for the founding story, review links. |
| 08 | Contact | Two dispatch labels, offset from each other. |
| 09 | Bookings | Full-bleed rocoto, "RESERVA." at 20rem, one pre-filled WhatsApp link per house. |

Interaction:
- Scroll-spy sets `aria-current` on the nav, shown as a rocoto underline.
- The lot labels' price line extends on hover.
- Hovering the contact sheet desaturates and zooms the frame; hovering the booking links inverts their colours.
- The hero headline rises on load. All motion is disabled under `prefers-reduced-motion`.

## 6. Validation (Playwright)

Screenshots: [`audit/concept-d/`](audit/concept-d/) (1440, 1280, 768, 390 + mobile and laptop folds). A/B/C with the new palettes: [`audit/palette-v2/`](audit/palette-v2/).

| Check | Result |
|---|---|
| Horizontal overflow (`scrollWidth === viewport`) | ✅ D, A, B, C at 1440 / 1280 / 768 / 390 |
| Clipped headings (`scrollWidth > clientWidth`) | ✅ none |
| axe-core 4.10 | ✅ 0 violations: A, B, C, D × 1440/390 |
| Mobile menu (open / Escape), menu filter (mobile opens on Ceviches), click-to-load map | ✅ all four concepts |
| Scroll-spy | ✅ (e.g. "04 CASAS" active over that section) |
| Console errors | ✅ none |

### Problems found and fixed

1. **"MIRAFLORES" overflowed** its 4-column slot at 1440/1280 and pushed the page 23 px wider than the viewport. The house name now scales to its column (`clamp(…, 4.6vw, …)`, with `overflow-wrap`).
2. **The lot grid left an empty cell** in the last row: lot 09 is now wide.
3. **Barranco's name was in the Miraflores blue.** Each house now takes its own photo's colour (Huarique → awning blue).
4. **The mobile hero opened on the photo** and the headline arrived late. It's reordered for mobile: headline → photo → copy.
5. **The small photo in "La sala" covered the review links** on mobile. Its negative margin was removed.
6. **C's footer failed contrast** on the new cobalt (white at 72% opacity = 4.1:1). Raised to 92–95%.
7. **The Fontsource imports** for Big Shoulders and Source Sans 3 failed the build (their `exports` map appends `.css` itself). Fixed by importing without the extension.

## 7. Pending

- Instagram's other **29 posts** (they need access or an export from the restaurant).
- **The house's story** (the visible placeholder in 07), the logo, opening hours, verified ratings.
- **Guest consent** for photos #2, #3 and #6.
- Originals larger than 1080 px for the D hero (on retina screens it shows at about 1.3×).
