/**
 * Review platforms. Ratings/counts are intentionally `null` until the owner
 * supplies verified figures (Tripadvisor/Google could not be read from the
 * build environment). The UI never fabricates numbers or quotes.
 * Add verified quotes (with author + date + source) to `quotes` only with permission.
 */
export interface Quote { text: string; author: string; date: string; lang: 'es' | 'en' }
export interface ReviewSource {
  id: string;
  platform: 'google' | 'tripadvisor';
  location: 'miraflores' | 'barranco';
  rating: number | null;
  count: number | null;
  url: string;
  writeUrl: string | null;
  quotes: Quote[];
}

const gSearch = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const REVIEWS: ReviewSource[] = [
  {
    id: 'tripadvisor-miraflores',
    platform: 'tripadvisor',
    location: 'miraflores',
    rating: null,
    count: null,
    url: 'https://www.tripadvisor.es/Restaurant_Review-g294316-d27179683-Reviews-Ceviche_House-Lima_Lima_Region.html',
    writeUrl: null,
    quotes: [],
  },
  {
    id: 'google-miraflores',
    platform: 'google',
    location: 'miraflores',
    rating: null,
    count: null,
    url: gSearch('Ceviche House Narciso de la Colina 184 Miraflores Lima'),
    writeUrl: null, // add https://search.google.com/local/writereview?placeid=<PLACE_ID>
    quotes: [],
  },
  {
    id: 'google-barranco',
    platform: 'google',
    location: 'barranco',
    rating: null,
    count: null,
    url: gSearch('Ceviche House Jr. Zepita 203 Barranco Lima'),
    writeUrl: null,
    quotes: [],
  },
];
