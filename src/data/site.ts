/**
 * Ceviche House — single source of truth for business data.
 * Every value here was verified against the brief / official menus.
 * Anything not verified is `null` and the UI hides it. See docs/ASSETS.md.
 */
export type Lang = 'es' | 'en';
export type ConceptId = 'a' | 'b' | 'c' | 'd';

/**
 * Which concept the owner picked for production.
 * `null` → `/` shows the design comparison page (current state).
 * Set to 'a' | 'b' | 'c' | 'd' → that concept becomes indexable/canonical;
 * see docs/CHOOSING-DEFAULT.md.
 */
export const DEFAULT_CONCEPT: ConceptId | null = null;

export const PHONE_E164 = '+51998400543';
export const PHONE_DISPLAY = '+51 998 400 543';
export const WHATSAPP_NUMBER = '51998400543';

export function whatsappLink(lang: Lang, location?: 'miraflores' | 'barranco'): string {
  const where = location ? (location === 'miraflores' ? 'Miraflores' : 'Barranco') : '';
  const text =
    lang === 'es'
      ? `Hola Ceviche House, quisiera reservar una mesa${where ? ` en ${where}` : ''}. Fecha: __ · Hora: __ · Personas: __`
      : `Hello Ceviche House, I'd like to book a table${where ? ` in ${where}` : ''}. Date: __ · Time: __ · Guests: __`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const SOCIAL = {
  tiktok: 'https://www.tiktok.com/@cevichehouse.pe',
  facebook: 'https://www.facebook.com/cevichehouse',
  /** Official account, confirmed by the owner's team. */
  instagram: 'https://www.instagram.com/ceviche_house.pe/' as string | null,
  instagramHandle: '@ceviche_house.pe',
  linktree: 'https://linktr.ee/Cevichehouse',
};

export const MENU_PDF = {
  es: 'https://drive.google.com/file/d/1JIKn6noqUob0fEIq3Go8--FDfeqE1YGL/view?usp=sharing',
  en: 'https://drive.google.com/file/d/1O64lFML9ODFnkbC6fllfA5g4-UevlEvp/view?usp=sharing',
};

export interface Location {
  id: 'miraflores' | 'barranco';
  name: string;
  street: string;
  district: string;
  addressFull: string;
  mapsQuery: string;
  /** Opening hours not verified → null hides them. Format: free text per lang. */
  hours: { es: string; en: string } | null;
  note: { es: string; en: string };
  /** What the restaurant itself calls each house on Instagram. */
  house: { es: string; en: string };
}

export const LOCATIONS: Location[] = [
  {
    id: 'miraflores',
    name: 'Miraflores',
    street: 'Ca. Narciso de la Colina 184',
    district: 'Miraflores',
    addressFull: 'Ca. Narciso de la Colina 184, Miraflores, Lima, Perú',
    mapsQuery: 'Ceviche House, Narciso de la Colina 184, Miraflores, Lima, Peru',
    hours: null,
    note: {
      es: 'Mesas en la vereda, bajo el toldo azul.',
      en: 'Pavement tables under the blue awning.',
    },
    house: { es: 'Huarique Miraflores', en: 'Huarique Miraflores' },
  },
  {
    id: 'barranco',
    name: 'Barranco',
    street: 'Jr. Zepita 203',
    district: 'Barranco',
    addressFull: 'Jr. Zepita 203, Barranco, Lima, Perú',
    mapsQuery: 'Ceviche House, Jr. Zepita 203, Barranco, Lima, Peru',
    hours: null,
    note: {
      es: 'Una casona con terraza frente al mar.',
      en: 'A casona with a terrace facing the sea.',
    },
    house: { es: 'Casona Barranco', en: 'Casona Barranco' },
  },
];

export const mapsDirections = (q: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;
export const mapsSearch = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
export const mapsEmbed = (q: string, lang: Lang) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(q)}&hl=${lang}&z=16&output=embed`;
