# Missing assets and data

The site is built from verified data only. Anything that couldn't be verified when it was built is hidden or shown as a branded placeholder. Each row below lists what's needed and where it goes.

## Photos

Full inventory, provenance, retouching and the shot list: [`PHOTO-ASSET-AUDIT.md`](PHOTO-ASSET-AUDIT.md).

| Asset | Status | File |
|---|---|---|
| Ceviche (hero) | ✅ From the menu PDF, retouched | `src/assets/photos/ceviche.jpg` |
| Seafood on a sizzling plate | ✅ From the menu PDF, retouched | `src/assets/photos/mariscos.jpg` |
| Detail crops (×2) | ✅ Derived, small frames only | `ceviche-detalle.jpg`, `mariscos-detalle.jpg` |
| High-resolution originals (dishes, dining rooms, bar, pisco) | ⏳ Needed from the restaurant | Shot list in `PHOTO-ASSET-AUDIT.md` §5 |

The site never shows an empty photo slot: layouts are built for the photos that exist. **To add a photo:** put the original in `src/assets/photos/`, register it in `src/data/gallery.ts` and use it in the page components.

**Rules:** only photos the restaurant owns (its own Instagram/TikTok/Facebook originals, or its photographer). Don't download guest photos from Tripadvisor or Google. No stock and no AI-generated food or interiors.

## Brand

- **Logo:** not available. The site uses a text wordmark plus a fish drawn in the style of the menu illustration (`src/components/shared/Fish.astro`). Replace it with the official logo as SVG.
- **Brand colours from the menu:** blue `#1482C5` (menu headings and the EN background), off-white paper `#E7E6E5`. The redesign keeps it as `--cobalt-700` `#1a5590` (darkened for AA contrast). See `DESIGN-SYSTEM.md`.

## Business data

| Data | Status | Where to change it |
|---|---|---|
| Instagram | ✅ `@ceviche_house.pe` (confirmed by the client) | `SOCIAL.instagram` in `src/data/site.ts` |
| Opening hours for each location | ❌ Not verified (shows "ask us on WhatsApp") | `LOCATIONS[].hours` in `src/data/site.ts` |
| Google Maps rating and review count (Miraflores, Barranco) | ❌ No figures (button to read reviews only) | `REVIEWS[]` in `src/data/reviews.ts` (`rating`, `count`) |
| Tripadvisor rating and review count (Miraflores) | ❌ No figures | same |
| Google Place IDs (for the "write a review" link) | ❌ | `writeUrl` in `src/data/reviews.ts` |
| Official Tripadvisor widget | ❌ | Ask in Tripadvisor's owner centre and paste the snippet into the reviews section |
| Is there a Tripadvisor profile for Barranco? | ❓ | Add it to `REVIEWS` if one exists |
| Customer quotes | ❌ | `quotes[]`: only with permission, plus the author's name and date |
| Price range for schema.org | ⚠️ Estimated from the menu (S/ 30–90) | `src/lib/seo.ts` |
| Location coordinates | ❌ Left out on purpose (not verified) | add `geo` in `src/lib/seo.ts` |
