import type { ConceptId } from './site';

export interface ConceptMeta {
  id: ConceptId;
  name: string;
  tagline: { es: string; en: string };
  description: { es: string; en: string };
  audience: { es: string; en: string };
  palette: { name: string; hex: string }[];
  type: { display: string; body: string; displayCss: string; bodyCss: string; sample: string };
}

// All three share the "Tinta & Piedra" brand core (src/styles/tokens.css,
// docs/DESIGN-SYSTEM.md); each expresses it differently.
export const CONCEPTS: ConceptMeta[] = [
  {
    id: 'a',
    name: 'Pacific Editorial',
    tagline: { es: 'Una crónica gastronómica sobre la costa peruana.', en: 'A food-magazine feature about the Peruvian coast.' },
    description: {
      es: 'Portada de revista a sangre, un primer párrafo en serif, los platos de la casa en un pliego oscuro con la foto fija, la carta como impresa y un cuaderno de fotos. Marfil, tinta y un acento ají.',
      en: 'A full-bleed magazine cover, a serif lede, the house dishes on a dark spread with a pinned photo, the menu laid out like print and a photo notebook. Ivory, ink and an ají accent.',
    },
    audience: { es: 'Turistas internacionales, parejas, viajeros gastronómicos.', en: 'International tourists, couples, food travellers.' },
    palette: [
      { name: 'Marfil', hex: '#F7F3EC' }, { name: 'Piedra', hex: '#E0D7C8' }, { name: 'Tinta', hex: '#0F1E26' }, { name: 'Ají', hex: '#A13A23' },
    ],
    type: { display: 'Newsreader', body: 'Instrument Sans', displayCss: "'Newsreader Variable', serif", bodyCss: "'Instrument Sans Variable', sans-serif", sample: 'Servido al momento.' },
  },
  {
    id: 'b',
    name: 'Lima Vibrant',
    tagline: { es: 'La energía del barrio, dicha una vez y con fuerza.', en: 'Barrio energy, said once and loudly.' },
    description: {
      es: 'Titulares condensados en caja alta y baja, tinta profunda con camote, un solo ticker y un solo sello, fotos cortadas en grande, carrusel de platos y barra de reserva fija en móvil.',
      en: 'Condensed sentence-case headlines, deep ink with camote orange, one ticker and one stamp, photos cropped large, a dish rail and a sticky mobile booking bar.',
    },
    audience: { es: 'Grupos de amigos, público joven, turistas y clientes locales.', en: 'Groups of friends, younger guests, tourists and locals.' },
    palette: [
      { name: 'Tinta', hex: '#0F1E26' }, { name: 'Camote', hex: '#E8944A' }, { name: 'Marfil', hex: '#F0E9DD' }, { name: 'Cobalto', hex: '#2F73B5' },
    ],
    type: { display: 'Bricolage Grotesque (condensed)', body: 'Instrument Sans', displayCss: "'Bricolage Grotesque Variable', sans-serif", bodyCss: "'Instrument Sans Variable', sans-serif", sample: 'Ceviche al momento.' },
  },
  {
    id: 'c',
    name: 'Minimal Contemporary',
    tagline: { es: 'Un índice sereno sobre papel piedra.', en: 'A calm index on stone paper.' },
    description: {
      es: 'Retícula de 12 columnas con líneas finas y secciones numeradas, cálida gracias a los tonos piedra y oliva, la serif itálica y fotos grandes. Carta con navegación lateral.',
      en: 'A 12-column grid with hairlines and numbered sections, kept warm by stone and olive tones, italic serif and large photos. Menu with side navigation.',
    },
    audience: { es: 'Viajeros gastronómicos y clientes que buscan una experiencia serena.', en: 'Food travellers and guests looking for a calm experience.' },
    palette: [
      { name: 'Marfil', hex: '#F0E9DD' }, { name: 'Piedra', hex: '#E0D7C8' }, { name: 'Oliva', hex: '#4D5735' }, { name: 'Tinta', hex: '#0F1E26' },
    ],
    type: { display: 'Instrument Serif', body: 'Instrument Sans', displayCss: "'Instrument Serif', serif", bodyCss: "'Instrument Sans Variable', sans-serif", sample: 'Sin prisa, al momento.' },
  },
];
