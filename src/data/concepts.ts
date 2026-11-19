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

export const CONCEPTS: ConceptMeta[] = [
  {
    id: 'a',
    name: 'Pacific Editorial',
    tagline: { es: 'Un reportaje gastronómico sobre la costa peruana.', en: 'A food-magazine feature about the Peruvian coast.' },
    description: {
      es: 'Estética editorial premium: marfil y arena, azul océano y acentos coral. Serif expresiva (Fraunces), composiciones asimétricas, capítulos numerados, capitulares, citas destacadas y una carta presentada como impresa.',
      en: 'Premium editorial look: ivory and sand, ocean blue and coral accents. Expressive serif (Fraunces), asymmetric layouts, numbered chapters, drop caps, pull quotes and a menu laid out like print.',
    },
    audience: { es: 'Turistas internacionales, parejas, experiencia gastronómica auténtica.', en: 'International tourists, couples, authentic gastronomic experience.' },
    palette: [
      { name: 'Ivory', hex: '#F4EEE3' }, { name: 'Sand', hex: '#E8DCCB' }, { name: 'Ocean', hex: '#0F2A44' }, { name: 'Coral', hex: '#A8401F' },
    ],
    type: { display: 'Fraunces', body: 'Inter', displayCss: "'Fraunces Variable', serif", bodyCss: "'Inter Variable', sans-serif", sample: 'Servido al momento.' },
  },
  {
    id: 'b',
    name: 'Lima Vibrant',
    tagline: { es: 'Energía, color y sabor limeño.', en: 'Energy, colour and Lima flavour.' },
    description: {
      es: 'Identidad audaz: azul marino profundo, coral, cítrico y lima. Tipografía grotesca XXL (Bricolage Grotesque), stickers animados, cinta de texto en movimiento, tarjetas de platos en carrusel, bento grid y barra de reserva fija en móvil.',
      en: 'Bold identity: deep marine blue, coral, citrus and lime. XXL grotesque type (Bricolage Grotesque), animated stickers, scrolling ticker, dish card carousel, bento grid and a sticky mobile booking bar.',
    },
    audience: { es: 'Público joven, grupos de amigos, turistas y clientes locales.', en: 'Younger guests, groups of friends, tourists and locals.' },
    palette: [
      { name: 'Marine', hex: '#0A2C5A' }, { name: 'Coral', hex: '#FF6F61' }, { name: 'Citrus', hex: '#F5D300' }, { name: 'Lime', hex: '#C4E538' },
    ],
    type: { display: 'Bricolage Grotesque', body: 'Space Grotesk', displayCss: "'Bricolage Grotesque Variable', sans-serif", bodyCss: "'Space Grotesk Variable', sans-serif", sample: '¡CEVICHE YA!' },
  },
  {
    id: 'c',
    name: 'Minimal Contemporary',
    tagline: { es: 'Refinado, arquitectónico, atemporal.', en: 'Refined, architectural, timeless.' },
    description: {
      es: 'Minimalismo sofisticado: marfil, grafito, azul noche y verde salvia. Instrument Serif con Manrope, retícula de 12 columnas con líneas finas, índices numerados, carta en dos columnas con navegación lateral y animaciones sutiles.',
      en: 'Sophisticated minimalism: ivory, graphite, night navy and sage green. Instrument Serif with Manrope, 12-column grid with hairlines, numbered indexes, two-column menu with side navigation and subtle motion.',
    },
    audience: { es: 'Viajeros gastronómicos y clientes que buscan una experiencia refinada.', en: 'Gastronomic travellers and guests seeking a refined experience.' },
    palette: [
      { name: 'Ivory', hex: '#F7F5F0' }, { name: 'Graphite', hex: '#2B2B2B' }, { name: 'Navy', hex: '#14213D' }, { name: 'Sage', hex: '#8A9A84' },
    ],
    type: { display: 'Instrument Serif', body: 'Manrope', displayCss: "'Instrument Serif', serif", bodyCss: "'Manrope Variable', sans-serif", sample: 'Sin prisa, al momento.' },
  },
];
