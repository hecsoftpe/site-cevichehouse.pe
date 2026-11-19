# Content notes

## Menu source

The menu (`src/data/menu.ts`) was transcribed **visually, page by page**, from the official PDFs. They are image-based, and their extracted text garbles some prices:

- ES: `Carta_CH.pdf` (Drive `1JIKn6noqUob0fEIq3Go8--FDfeqE1YGL`)
- EN: `Menu_CH.pdf` (Drive `1O64lFML9ODFnkbC6fllfA5g4-UevlEvp`)

Categories, dishes and prices match the PDFs exactly. Both PDFs stay linked from every page.

### Differences between the ES and EN menus (to check)

| Dish | ES | EN | What the site does |
|---|---|---|---|
| Dieta de pollo / Diet soup | S/ 36 | S/ 38 | Shows each menu's own price in its language (`priceEn`) |
| Chupe de pescado / "Fish chowder seafood" | — | — | The EN menu says "Fish chowder seafood"; the site uses "Fish chowder" |
| Parihuela de mariscos / "Parihuela" | — | — | EN: "Seafood parihuela" |
| Pescado a lo macho / "Grilled fish & seafood" | — | — | The EN menu's own translation is kept |
| "Goat chesse salad" | — | — | Typo fixed: "Goat cheese salad" |
| "Jugos de estación" / "Your choice of fruit" | — | — | EN: "Seasonal fruit juices" |
| "Bola de helado" / "ice cream" | — | — | EN: "Ice cream scoop" |

## Copy

- No founder story, dates, chefs, awards or prizes were invented.
- The story copy describes Peruvian coastal cuisine, the menu, the two neighbourhoods and hospitality. **The owner should confirm** that "every ceviche is prepared to order" matches how they work.
- The descriptions of the 9 signature dishes (`SIGNATURES` in `src/data/menu.ts`) describe the classic Peruvian preparation of each dish. They aren't house recipes and should be checked against the kitchen (e.g. ceviche garnishes, what goes into the parrillada).
- The photos are not labelled as a specific dish; they're described generically.
