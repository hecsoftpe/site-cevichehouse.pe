# Missing assets and data

The site is built from verified data only. Anything that couldn't be verified when it was built is hidden or shown as a branded placeholder. Each row below lists what's needed and where it goes.

## Photos

| Slot | Where it shows | Status | File / location |
|---|---|---|---|
| Ceviche (hero) | Hero A/B/C, gallery, Open Graph | ✅ From the cover of the official menu PDF (`Carta_CH.pdf`) | `src/assets/photos/ceviche-carta.jpg` |
| Seafood on a sizzling plate | Story A/C, hero B, gallery | ✅ From the last page of the official menu PDF | `src/assets/photos/mariscos-carta.jpg` |
| Miraflores dining room | Gallery | ⏳ Placeholder | add `src/assets/photos/interior-miraflores.jpg` |
| Barranco dining room | Gallery | ⏳ Placeholder | add `src/assets/photos/interior-barranco.jpg` |
| Pisco sour | Gallery | ⏳ Placeholder | add `src/assets/photos/pisco.jpg` |
| Table to share | Gallery | ⏳ Placeholder | add `src/assets/photos/mesa.jpg` |
| Signature dishes (×9) | Dish cards | ⏳ Typographic cards on purpose | Only attach a photo once it is confirmed to show that exact dish |

**To add a photo:** put the file in `src/assets/photos/`, import it in `src/data/gallery.ts` and replace `src: null` in its slot. Astro generates the AVIF/WebP versions automatically. Use high-resolution originals (≥ 2000 px wide). The two current photos only exist at 1080 px.

**Rules:**
- Use only photos the restaurant owns: its own Instagram, TikTok and Facebook, or its photographer.
- Do **not** download user-generated photos from Tripadvisor or Google.
- No stock photos and no AI-generated food or interiors.

## Brand

- **Logo:** not available. The site uses a text wordmark plus a fish drawn in the style of the menu illustration (`src/components/shared/Fish.astro`). Replace it with the official logo as SVG.
- **Brand colours from the menu:** blue `#1482C5` (menu headings and the EN background), off-white paper `#E7E6E5`. All three concepts include this blue or one close to it.

## Business data

| Data | Status | Where to change it |
|---|---|---|
| Instagram | ❌ Not verified: Linktree couldn't be read from the build environment | `SOCIAL.instagram` in `src/data/site.ts` (link appears automatically) |
| Opening hours for each location | ❌ Not verified (shows "ask us on WhatsApp") | `LOCATIONS[].hours` in `src/data/site.ts` |
| Google Maps rating and review count (Miraflores, Barranco) | ❌ No figures (button to read reviews only) | `REVIEWS[]` in `src/data/reviews.ts` (`rating`, `count`) |
| Tripadvisor rating and review count (Miraflores) | ❌ No figures | same |
| Google Place IDs (for the "write a review" link) | ❌ | `writeUrl` in `src/data/reviews.ts` |
| Official Tripadvisor widget | ❌ | Ask in Tripadvisor's owner centre and paste the snippet into the reviews section |
| Is there a Tripadvisor profile for Barranco? | ❓ | Add it to `REVIEWS` if one exists |
| Customer quotes | ❌ | `quotes[]`: only with permission, plus the author's name and date |
| Price range for schema.org | ⚠️ Estimated from the menu (S/ 30–90) | `src/lib/seo.ts` |
| Location coordinates | ❌ Left out on purpose (not verified) | add `geo` in `src/lib/seo.ts` |
