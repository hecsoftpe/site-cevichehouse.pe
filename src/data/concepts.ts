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

// Each palette is sampled from one real place or object in the restaurant's
// own photos (src/styles/tokens.css, docs/PARTE-DE-MAR.md §3).
export const CONCEPTS: ConceptMeta[] = [
  {
    id: 'a',
    name: 'Pacific Editorial',
    tagline: { es: 'Una crónica gastronómica sobre la costa peruana.', en: 'A food-magazine feature about the Peruvian coast.' },
    description: {
      es: 'Portada de revista a sangre, un primer párrafo en serif, los platos de la casa en un pliego oscuro con la foto fija, la carta como impresa y un cuaderno de fotos. Blanco y negro de la foto de los mozos, con un solo rojo rocoto.',
      en: 'A full-bleed magazine cover, a serif lede, the house dishes on a dark spread with a pinned photo, the menu laid out like print and a photo notebook. The black and white of the floor-staff portrait, with a single rocoto red.',
    },
    audience: { es: 'Turistas internacionales, parejas, viajeros gastronómicos.', en: 'International tourists, couples, food travellers.' },
    palette: [
      { name: 'Papel', hex: '#F6F6F3' }, { name: 'Gris', hex: '#DCDCD7' }, { name: 'Mandil', hex: '#121212' }, { name: 'Rocoto', hex: '#C2321A' },
    ],
    type: { display: 'Newsreader', body: 'Instrument Sans', displayCss: "'Newsreader Variable', serif", bodyCss: "'Instrument Sans Variable', sans-serif", sample: 'Servido al momento.' },
  },
  {
    id: 'b',
    name: 'Lima Vibrant',
    tagline: { es: 'La energía del barrio, dicha una vez y con fuerza.', en: 'Barrio energy, said once and loudly.' },
    description: {
      es: 'Titulares condensados en caja alta y baja, el granate de la casona de Barranco con verde rejería y ámbar de guirnalda, un solo ticker y un solo sello, fotos cortadas en grande, carrusel de platos y barra de reserva fija en móvil.',
      en: 'Condensed sentence-case headlines, the garnet of the Barranco casona with wrought-iron green and string-light amber, one ticker and one stamp, photos cropped large, a dish rail and a sticky mobile booking bar.',
    },
    audience: { es: 'Grupos de amigos, público joven, turistas y clientes locales.', en: 'Groups of friends, younger guests, tourists and locals.' },
    palette: [
      { name: 'Granate', hex: '#6E2230' }, { name: 'Ámbar', hex: '#F2B640' }, { name: 'Rejería', hex: '#1D2B27' }, { name: 'Cal', hex: '#F6F1EC' },
    ],
    type: { display: 'Bricolage Grotesque (condensed)', body: 'Instrument Sans', displayCss: "'Bricolage Grotesque Variable', sans-serif", bodyCss: "'Instrument Sans Variable', sans-serif", sample: 'Ceviche al momento.' },
  },
  {
    id: 'c',
    name: 'Minimal Contemporary',
    tagline: { es: 'Un índice sereno, en el azul del huarique.', en: 'A calm index in the huarique blue.' },
    description: {
      es: 'Retícula de 12 columnas con líneas finas y secciones numeradas, con el cobalto del toldo del huarique de Miraflores, el acero de la barra y el índigo de los asientos. Carta con navegación lateral.',
      en: 'A 12-column grid with hairlines and numbered sections, in the cobalt of the Miraflores huarique awning, the steel of the counter and the indigo of the booths. Menu with side navigation.',
    },
    audience: { es: 'Viajeros gastronómicos y clientes que buscan una experiencia serena.', en: 'Food travellers and guests looking for a calm experience.' },
    palette: [
      { name: 'Blanco', hex: '#F9F9F7' }, { name: 'Acero', hex: '#E1E4E6' }, { name: 'Cobalto', hex: '#0B5BAE' }, { name: 'Índigo', hex: '#17162A' },
    ],
    type: { display: 'Instrument Serif', body: 'Instrument Sans', displayCss: "'Instrument Serif', serif", bodyCss: "'Instrument Sans Variable', sans-serif", sample: 'Sin prisa, al momento.' },
  },
  {
    id: 'd',
    name: 'Parte de Mar',
    tagline: { es: 'La bitácora del día: del mar a la mesa.', en: "The day's log: from the sea to the table." },
    description: {
      es: 'El parte diario de una cocina de mar: etiquetas de lote, sellos en esténcil, notas técnicas sobre la foto y una hoja de contactos. Big Shoulders, Source Sans 3 e IBM Plex Mono en colores planos sacados de las fotos: mandil, camisa, rocoto y choclo.',
      en: 'The daily sheet of a seafood kitchen: lot labels, stencil stamps, technical notes on the photo and a contact sheet. Big Shoulders, Source Sans 3 and IBM Plex Mono in flat colours taken from the photos: apron, shirt, rocoto and corn.',
    },
    audience: { es: 'Turistas gastronómicos y limeños que buscan una cevichería con carácter.', en: 'Food travellers and locals looking for a cevichería with character.' },
    palette: [
      { name: 'Papel', hex: '#F7F6F2' }, { name: 'Mandil', hex: '#111417' }, { name: 'Rocoto', hex: '#E2501F' }, { name: 'Choclo', hex: '#EFC13A' },
    ],
    type: { display: 'Big Shoulders Display', body: 'Source Sans 3 + IBM Plex Mono', displayCss: "'Big Shoulders Display Variable', sans-serif", bodyCss: "'Source Sans 3 Variable', sans-serif", sample: 'HOY HAY MAR.' },
  },
];
