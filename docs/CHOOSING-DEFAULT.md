# Choosing the production design

1. Open `src/data/site.ts` and change:
   ```ts
   export const DEFAULT_CONCEPT: ConceptId | null = null;
   ```
   to `'a'`, `'b'`, `'c'` or `'d'`.
2. Commit and push to `main`. GitHub Actions rebuilds and publishes the site.

Result:

| Route | Before (`null`) | After (`'b'`, for example) |
|---|---|---|
| `/` and `/en/` | Design comparison page | Concept B as the homepage, **indexable** |
| `/concepts/` and `/en/concepts/` | Comparison page | Comparison page (kept) |
| `/concept-a/`, `/concept-b/`, `/concept-c/` (+ `/en/…`) | Available, `noindex` | Available, `noindex`; the chosen concept's canonical points to `/` |
| `/compare/?c=a&device=mobile` | Device-frame viewer | Same |

While `DEFAULT_CONCEPT` is `null`, the whole site carries `noindex` so that review designs don't get indexed by Google.
