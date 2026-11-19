/**
 * Full menu transcribed from the official PDFs (Carta_CH.pdf / Menu_CH.pdf),
 * read visually page by page. Prices in Peruvian soles (S/).
 * `priceEn` only exists where the English PDF shows a different price.
 * Dish names are exactly as printed. Do not add dishes that are not in the PDFs.
 */
export interface MenuItem {
  es: string;
  en: string;
  price: number;
  priceEn?: number;
  /** Sub-line printed on the menu (Dúos). */
  subEs?: string;
  subEn?: string;
}
export interface MenuCategory {
  id: string;
  es: string;
  en: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'piqueos', es: 'Piqueos', en: 'Snacks',
    items: [
      { es: 'Chicharrón de pescado', en: 'Crispy pan fried fish', price: 52 },
      { es: 'Cóctel de langostinos', en: 'Shrimps cocktail', price: 54 },
      { es: 'Calamares fritos', en: 'Fried squid', price: 54 },
      { es: 'Conchas a la parmesana', en: 'Parmesan baked scallops', price: 48 },
      { es: 'Pulpo al olivo', en: 'Octopus with olive sauce', price: 55 },
      { es: 'Jalea mixta', en: 'Mixed seafood platter', price: 55 },
      { es: 'Camarones a la milanesa', en: 'Breaded shrimps', price: 60 },
      { es: 'Causa acevichada', en: 'Acevichada causa', price: 58 },
      { es: 'Causa de pulpo al olivo', en: 'Octopus olive causa', price: 54 },
      { es: 'Causa de pulpa de cangrejo', en: 'Crab meat causa', price: 54 },
      { es: 'Causa de pollo', en: 'Chicken causa', price: 40 },
      { es: 'Galopera de champiñones', en: 'Galopera mushrooms', price: 40 },
    ],
  },
  {
    id: 'ceviches', es: 'Ceviches y tiraditos', en: 'Ceviches & tiraditos',
    items: [
      { es: 'Ceviche de pesca del día', en: 'Catch of the day ceviche', price: 59 },
      { es: 'Ceviche de camarones a la piedra', en: 'Stone shrimp ceviche', price: 64 },
      { es: 'Ceviche cremoso', en: 'Creamy ceviche', price: 65 },
      { es: 'Ceviche mixto', en: 'Mixed ceviche', price: 59 },
      { es: 'Ceviche criollo', en: 'Creole ceviche', price: 60 },
      { es: 'Ceviche nikkei', en: 'Nikkei ceviche', price: 59 },
      { es: 'Ceviche norteño', en: 'Northern ceviche', price: 60 },
      { es: 'Ceviche de lenguado', en: 'Sole ceviche', price: 82 },
      { es: 'Ceviche de champiñones', en: 'Mushrooms ceviche', price: 42 },
      { es: 'Ceviche carretillero', en: 'Carretillero ceviche', price: 62 },
      { es: 'Ceviche Colán', en: 'Colán ceviche', price: 64 },
      { es: 'Tiradito de ají amarillo', en: 'Tiradito with yellow chili', price: 59 },
      { es: 'Leche de tigre de pescado', en: "Fish tiger's milk", price: 36 },
      { es: 'Leche de tigre de mariscos', en: "Seafood tiger's milk", price: 38 },
    ],
  },
  {
    id: 'sopas', es: 'Sopas', en: 'Soups',
    items: [
      { es: 'Sudado de pescado del día', en: 'Fish stew of the day', price: 59 },
      { es: 'Chupe de camarones', en: 'Shrimp chowder', price: 55 },
      { es: 'Chupe de pescado', en: 'Fish chowder', price: 52 },
      { es: 'Parihuela de mariscos', en: 'Seafood parihuela', price: 55 },
      { es: 'Sopa a la criolla', en: 'Creole soup', price: 38 },
      { es: 'Dieta de pollo', en: 'Diet soup', price: 36, priceEn: 38 },
      { es: 'Crema de espárragos', en: 'Cream of asparagus', price: 34 },
      { es: 'Crema de champiñones', en: 'Cream of mushroom', price: 34 },
    ],
  },
  {
    id: 'arroces', es: 'Arroces', en: 'Rices',
    items: [
      { es: 'Chaufa de mariscos', en: 'Seafood fried rice', price: 62 },
      { es: 'Chaufa de pescado', en: 'Fish fried rice', price: 60 },
      { es: 'Arroz con mariscos', en: 'Seafood rice', price: 62 },
      { es: 'Arroz con camarones', en: 'Shrimps rice', price: 64 },
      { es: 'Arroz con langostinos', en: 'Prawns rice', price: 64 },
      { es: 'Chaufa de lomo', en: 'Meat fried rice', price: 62 },
    ],
  },
  {
    id: 'especiales', es: 'Especiales', en: 'Special',
    items: [
      { es: 'Parrillada de mariscos', en: 'Seafood grill', price: 90 },
      { es: 'Sándwich de pescado a la milanesa', en: 'Breaded fish sandwich', price: 38 },
      { es: 'Picante de camarones', en: 'Spicy shrimp', price: 60 },
      { es: 'Spaguetti frutti di mari', en: 'Spaguettis frutti di mari', price: 62 },
      { es: 'Timbal de camarones', en: 'Shrimp timbal', price: 65 },
      { es: 'Pulpito a la parrilla', en: 'Grilled octopus', price: 82 },
    ],
  },
  {
    id: 'ensaladas', es: 'Ensaladas', en: 'Salad',
    items: [
      { es: 'Ensalada manchego', en: 'Manchego salad', price: 38 },
      { es: 'Ensalada alcachofina', en: 'Artichoke salad', price: 39 },
      { es: 'Ensalada queso de cabra', en: 'Goat cheese salad', price: 45 },
    ],
  },
  {
    id: 'pescados', es: 'Pescados', en: 'Fish',
    items: [
      { es: 'Pescado a lo macho', en: 'Grilled fish & seafood', price: 62 },
      { es: 'Pescado a la chorrillana', en: 'Chorrillana style fish', price: 60 },
      { es: 'Pescado de la House', en: 'House style fish', price: 62 },
      { es: 'Pescado a la milanesa', en: 'Breaded fish', price: 59 },
      { es: "Milanesa de pescado Caesar's", en: "Breaded fish Caesar's", price: 59 },
      { es: 'Corvina a la menier', en: 'Menier corvina', price: 59 },
      { es: 'Corvina al gusto', en: 'Corvina at your choice', price: 60 },
    ],
  },
  {
    id: 'duos', es: 'Dúos', en: 'Duos',
    items: [
      { es: 'Matrimonio', en: 'Marriage', subEs: 'ceviche y arroz con mariscos', subEn: 'ceviche & seafood rice', price: 65 },
      { es: 'Divorcio', en: 'Divorce', subEs: 'ceviche y calamares fritos', subEn: 'ceviche & fried squid', price: 65 },
      { es: 'Viudo', en: 'Widow', subEs: 'ceviche y chaufa de mariscos', subEn: 'ceviche & seafood fried rice', price: 65 },
    ],
  },
  {
    id: 'criollos', es: 'Casuales criollos', en: 'Creole casuals',
    items: [
      { es: 'Lomo saltado', en: 'Stir-fried beef loin', price: 65 },
      { es: 'Pollo saltado', en: 'Stir-fried chicken', price: 45 },
      { es: 'Milanesa de pollo', en: 'Breaded chicken', price: 40 },
      { es: "Milanesa de pollo Caesar's", en: "Breaded chicken Caesar's", price: 42 },
      { es: 'Lomo a la milanesa', en: 'Beef schnitzel', price: 58 },
      { es: 'Tacu tacu de lomo saltado', en: 'Tacu tacu with stir-fried beef loin', price: 64 },
      { es: 'Tacu tacu de sábana de lomo', en: 'Tacu tacu with beef schnitzel', price: 64 },
      { es: 'Tacu tacu de pescado a lo macho', en: 'Tacu tacu with a lo macho style fish', price: 70 },
    ],
  },
  {
    id: 'postres', es: 'Postres', en: 'Dessert',
    items: [
      { es: 'Crema volteada', en: 'Caramel custard', price: 25 },
      { es: 'Suspiro a la limeña', en: 'Suspiro a la limeña', price: 24 },
      { es: 'Alfajores (2 unidades)', en: 'Alfajores (pack of 2)', price: 18 },
      { es: 'Torta de chocolate', en: 'Chocolate cake', price: 28 },
      { es: 'Picarones', en: 'Picarones', price: 25 },
      { es: 'Churros (1 unidad)', en: 'Churros (1 piece)', price: 18 },
      { es: 'Churros (2 unidades)', en: 'Churros (2 pieces)', price: 25 },
      { es: 'Bola de helado', en: 'Ice cream scoop', price: 6 },
    ],
  },
  {
    id: 'bebidas', es: 'Bebidas', en: 'Drinks',
    items: [
      { es: 'Jarra de chicha', en: 'Chicha pitcher', price: 27 },
      { es: 'Jarra de limonada', en: 'Lemonade pitcher', price: 25 },
      { es: 'Jarra de maracuyá', en: 'Passion fruit pitcher', price: 28 },
      { es: 'Cervezas nacionales', en: 'Domestic beers', price: 18 },
      { es: 'Gaseosas', en: 'Sodas', price: 8 },
      { es: 'Jugos de estación', en: 'Seasonal fruit juices', price: 20 },
      { es: 'Agua Socosani', en: 'Socosani water', price: 8 },
      { es: 'Acqua Panna', en: 'Acqua Panna', price: 22 },
      { es: 'Agua San Pellegrino', en: 'San Pellegrino water', price: 22 },
    ],
  },
  {
    id: 'cocteles', es: 'Cócteles', en: 'Cocktails',
    items: [
      { es: 'Chilcano', en: 'Chilcano', price: 29 },
      { es: 'Pisco sour', en: 'Pisco sour', price: 30 },
      { es: 'Maracuyá sour', en: 'Maracuyá sour', price: 30 },
      { es: 'Algarrobina', en: 'Algarrobina', price: 30 },
      { es: 'Tinto de verano', en: 'Tinto de verano', price: 28 },
      { es: 'Cuba libre', en: 'Rum and Coke', price: 28 },
      { es: 'Daiquiri de frutas', en: 'Fruit daiquiri', price: 30 },
    ],
  },
  {
    id: 'vinos', es: 'Vinos', en: 'Wine',
    items: [
      { es: 'Intipalka — Sauvignon Blanc', en: 'Intipalka — Sauvignon Blanc', price: 120 },
      { es: 'Tacama Blanco de Blancos', en: 'Tacama Blanco de Blancos', price: 140 },
      { es: 'Tacama Sección Especial', en: 'Tacama Sección Especial', price: 140 },
      { es: 'Copa vino de la casa', en: 'Glass of house wine', price: 28 },
    ],
  },
];

export const priceOf = (item: MenuItem, lang: 'es' | 'en') =>
  lang === 'en' && item.priceEn != null ? item.priceEn : item.price;

export const formatPrice = (n: number) => `S/ ${n}`;

/**
 * Curated signature dishes. Names/prices pulled from MENU so they never drift.
 * Descriptions describe the classic Peruvian preparation only (no invented
 * house recipes). The owner should review them — see docs/CONTENT-NOTES.md.
 * Cards are typographic on purpose: the only official photos are not labelled
 * with a dish name, so they are never attached to a specific dish.
 */
export interface Signature {
  cat: string;
  name: string; // Spanish name as printed — used to look up the menu item
  descEs: string;
  descEn: string;
}

export const SIGNATURES: Signature[] = [
  {
    cat: 'ceviches', name: 'Ceviche de pesca del día',
    descEs: 'La pesca del día curada al momento en limón, con ají limo, cebolla roja, camote y choclo.',
    descEn: 'The day’s catch cured to order in lime, with ají limo, red onion, sweet potato and Andean corn.',
  },
  {
    cat: 'ceviches', name: 'Ceviche cremoso',
    descEs: 'Nuestra versión cremosa del clásico, con su leche de tigre suave y envolvente.',
    descEn: 'Our creamy take on the classic, with a silky, rounded tiger’s milk.',
  },
  {
    cat: 'ceviches', name: 'Ceviche nikkei',
    descEs: 'El cruce peruano-japonés: pescado fresco, limón y toques orientales.',
    descEn: 'The Peruvian–Japanese crossover: fresh fish, lime and Asian notes.',
  },
  {
    cat: 'ceviches', name: 'Leche de tigre de mariscos',
    descEs: 'El jugo del ceviche, servido en vaso con mariscos. El clásico levantamuertos limeño.',
    descEn: 'Ceviche’s own juice, served in a glass with seafood. Lima’s classic pick-me-up.',
  },
  {
    cat: 'piqueos', name: 'Causa acevichada',
    descEs: 'Papa amarilla prensada con ají, coronada con un toque de ceviche.',
    descEn: 'Pressed yellow potato with ají, crowned with a touch of ceviche.',
  },
  {
    cat: 'piqueos', name: 'Jalea mixta',
    descEs: 'Pescado y mariscos fritos, crocantes, con sarsa criolla.',
    descEn: 'Crispy fried fish and seafood with salsa criolla.',
  },
  {
    cat: 'especiales', name: 'Parrillada de mariscos',
    descEs: 'Mariscos a la parrilla para compartir, servidos en plancha caliente.',
    descEn: 'Grilled seafood to share, served on a sizzling plate.',
  },
  {
    cat: 'arroces', name: 'Arroz con mariscos',
    descEs: 'Arroz meloso al estilo peruano con mariscos frescos.',
    descEn: 'Peruvian-style rice, rich and saucy, with fresh seafood.',
  },
  {
    cat: 'cocteles', name: 'Pisco sour',
    descEs: 'Pisco, limón y espuma: el brindis peruano por excelencia.',
    descEn: 'Pisco, lime and foam: Peru’s signature toast.',
  },
];

export function signatureItems(lang: 'es' | 'en') {
  return SIGNATURES.map((s) => {
    const cat = MENU.find((c) => c.id === s.cat)!;
    const item = cat.items.find((i) => i.es === s.name)!;
    if (!item) throw new Error(`Signature dish not in menu: ${s.name}`);
    return {
      category: lang === 'es' ? cat.es : cat.en,
      name: lang === 'es' ? item.es : item.en,
      desc: lang === 'es' ? s.descEs : s.descEn,
      price: formatPrice(priceOf(item, lang)),
    };
  });
}
