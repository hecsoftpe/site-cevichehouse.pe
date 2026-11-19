# Photo asset audit

**Date:** 2026-11-19
**Rule:** only restaurant-owned or authorised photography. No stock, no AI-generated food or interiors, and no guest photos from Tripadvisor or Google.

## 1. Sources checked

| Source | Result |
|---|---|
| Repository (`src/assets/photos/`) | 2 photos, both extracted from the official menu PDF. |
| Official menu PDF `Carta_CH.pdf` (Google Drive `1JIKn6noqUob0fEIq3Go8--FDfeqE1YGL`, 4.0 MB) | The source of both repo photos (cover and last page). It contains no other photographs, only illustration and type. |
| Instagram [`@ceviche_house.pe`](https://www.instagram.com/ceviche_house.pe/) | **Account confirmed by the client** and now linked on the site. **The photos could not be downloaded from this build environment**: the network policy blocks `instagram.com`, and Instagram doesn't serve images without a login anyway. Downloading on someone else's behalf would also break Instagram's terms. Even when downloaded, **Instagram stores images at 1080 px wide at most**, the same as what we already have. The account is a good place to *choose* shots; the files should come from the owner (see §4). |
| Linktree `linktr.ee/Cevichehouse` | Blocked by the network policy. Not needed now that the Instagram handle is confirmed. |
| TikTok / Facebook | Linked, but not used as an image source (video frames and recompressed images). |
| Tripadvisor / Google Maps | **Not used.** Guest photos belong to the guests. |

## 1b. Update 2026-11-19: Instagram photos

With network access approved for this repository's environment, the **official public profile embed** (`instagram.com/ceviche_house.pe/embed/`) gave the **latest 6 of 35 posts** at 1080 px. The full profile redirects to login, which was not bypassed. They're in `src/assets/photos/ig/` and registered as `IG` in `src/data/gallery.ts`: `ceviche-pesca-del-dia` (the new hero), `mozos-bn`, `huarique-miraflores`, `terraza-barranco`, `casona-barranco` and `unico-review`. The analysis of each photo and how they're used are in [`PARTE-DE-MAR.md`](PARTE-DE-MAR.md) §1.2. **Guests are recognisable** in the huarique, terrace and casona shots: confirm consent before production.

## 2. Inventory

| ID | Local path | Source | Subject | Original size | Quality | Rights | Placement | Ratio / crop |
|---|---|---|---|---|---|---|---|---|
| P1 | `src/assets/photos/source/ceviche-carta.jpg` → **`ceviche.jpg`** (retouched) | Menu PDF cover | Ceviche in a dark bowl with a blue-and-white rim: creamy leche de tigre, sliced avocado, capers, diced rocoto, sweet potato, corn. *Probably* the ceviche cremoso: the kitchen should confirm. | 1080×1120 | Medium. Good styling and light; was soft, with a printed paper texture and cyan shadows (fixed, see §3). | Restaurant-owned (its own menu) | Hero in A, B and C; gallery | 4:5, 1:1 or 16:11 crop; focal point `62% 52%` (avocado) |
| P2 | `src/assets/photos/source/mariscos-carta.jpg` → **`mariscos.jpg`** (retouched) | Menu PDF last page | Seafood on a sizzling cast-iron plate on a wooden board: grilled octopus tentacle, squid rings, scallops in the shell, asparagus, cherry tomatoes, rising steam. Carried by a server; the dining room is blurred behind (upright napkins, wicker chairs, wood floor). *Probably* the parrillada de mariscos. | 1080×1180 | Medium-good. The steam and the octopus char are excellent. Same paper texture and cast (fixed). | Restaurant-owned | A dishes spread, B dish rail, C dishes table, gallery | 4:5 or 3:2; focal point `52% 50%` |
| P3 | **`ceviche-detalle.jpg`** | Crop of P1 | Macro detail: avocado, capers, rocoto | 620×620 | Usable up to ~360 CSS px | Derived from P1 | Small gallery frames, C story | 1:1 only |
| P4 | **`mariscos-detalle.jpg`** | Crop of P2 | Macro detail: octopus, scallops, asparagus | 640×640 | Usable up to ~360 CSS px | Derived from P2 | A story, B hero inset, C story, gallery | 1:1 only |

`src/data/gallery.ts` holds the alt text (ES/EN), focal points and a `detail` flag that marks the low-resolution crops.

## 3. Retouching (`scripts/retouch.py`)

The two photos were reprocessed to look like photographs again, not scans of a printed page. **Nothing was generated or invented**: these are only global corrections and noise reduction, the same as a photo editor's first pass.

1. **Paper texture removal.** Non-local-means denoising on the luminance channel only, strong in flat areas and light on edges (so the octopus suckers, caper skins and bowl rim stay sharp); bilateral smoothing on chroma.
2. **Structure recovery.** Unsharp mask at structure scale (σ ≈ 2 px), masked to edges.
3. **White balance.** Removed the cyan cast in the shadows (shadow-weighted shift toward red/away from blue).
4. **Tone.** Restored the black point and white point (0.5 / 99.7 percentiles) and a gentle S-curve. The printed versions had milky blacks.
5. **Colour.** A slight saturation reduction on yellow-greens, where avocado and asparagus had gone neon.
6. **Grain.** Fine monochrome grain (σ 2.2) so the denoised areas don't look waxy.

Before and after: [`audit/retouch-before-after.jpg`](audit/retouch-before-after.jpg). The originals are kept in `src/assets/photos/source/` and are not shipped.

```bash
python3 scripts/retouch.py <input.jpg> <output.jpg> <strength 8–10>
```

(Needs `opencv-python-headless` and `numpy`.)

**Limits:** retouching can't add resolution. At 1080 px, a full-width desktop hero is sharp at 1× and slightly soft on 2× screens. The layouts keep the hero at about 50–62% of the viewport width on desktop to limit this.

## 4. How to add more photos (owner workflow)

1. Choose shots from the Instagram account or the photographer's archive.
2. Get the **original files** (from the phone or camera roll, or the photographer's delivery), not screenshots or downloads from Instagram. Aim for ≥ 2400 px on the long edge, sRGB JPEG.
3. Put them in `src/assets/photos/` and add an entry in `src/data/gallery.ts`: `src`, `es`/`en` alt text, `focus`. Add `detail: true` only for small crops.
4. Use them in the page components where they fit (hero, spread, rail, gallery). Astro generates AVIF/WebP at every width.
5. Don't re-run `retouch.py` on clean originals. It's only for prints and scans.

## 5. Shot list for a professional shoot

These shots would replace and extend P1/P2 and fill every slot the layouts can use. Art direction: **natural window light or one large soft source from the side, true-to-life white balance (daylight), real portions as served, house ceramics and the blue-rim bowl, a little steam or condensation where it's real, no artificial props.** The reference is editorial food photography (a newspaper food section, not stock advertising).

| # | Subject | Composition | Ratio (deliver) | Placement |
|---|---|---|---|---|
| 1 | Ceviche de pesca del día | Three-quarter (45°), shallow depth of field, leche de tigre catching the light | 4:5 + 3:2 | Hero (all concepts) |
| 2 | Ceviche mixto | Overhead on the table, with hands reaching in | 1:1 / 3:2 | Gallery, B rail |
| 3 | Ceviche nikkei | Macro of the fish texture and sesame | 1:1 | Details |
| 4 | Tiradito de ají amarillo | Overhead, long plate, negative space | 16:9 | A spread, C table |
| 5 | Leche de tigre de mariscos | Side-on glass, condensation | 4:5 | B rail, details |
| 6 | Jalea mixta | Three-quarter, crunch visible, with salsa criolla | 3:2 | Dishes |
| 7 | Parrillada de mariscos | Sizzling, steam, served at the table (re-shoot of P2 at high resolution) | 4:5 + 3:2 | A spread, C table |
| 8 | Arroz con mariscos | Overhead, cast-iron pan | 1:1 | Gallery |
| 9 | Pisco sour | Bar counter, side light, foam detail | 4:5 | Gallery, B rail |
| 10 | Miraflores dining room | Wide, daylight, people softly out of focus | 3:2 / 16:9 | Locations (A, C) |
| 11 | Barranco dining room | Wide, evening | 3:2 / 16:9 | Locations |
| 12 | Table for sharing | Overhead, four to six dishes, hands | 16:9 | Gallery, footer band |

**Delivery:** JPEG sRGB at ≥ 3000 px long edge, plus the RAW files kept by the photographer. Get a written licence for web and social use, covering both locations.
