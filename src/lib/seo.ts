import { LOCATIONS, PHONE_E164, SOCIAL, MENU_PDF, type Lang } from '../data/site';

/** schema.org graph: one Organization + one Restaurant per location. */
export function restaurantJsonLd(lang: Lang, pageUrl: string, imageUrl: string) {
  const sameAs = [SOCIAL.facebook, SOCIAL.tiktok, SOCIAL.instagram].filter(Boolean);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': `${pageUrl}#org`, name: 'Ceviche House', url: pageUrl, logo: imageUrl, sameAs },
      ...LOCATIONS.map((l) => ({
        '@type': 'Restaurant',
        '@id': `${pageUrl}#${l.id}`,
        name: `Ceviche House ${l.name}`,
        parentOrganization: { '@id': `${pageUrl}#org` },
        image: imageUrl,
        url: pageUrl,
        telephone: PHONE_E164,
        servesCuisine: ['Peruvian', 'Seafood', 'Ceviche'],
        priceRange: 'S/ 30–90',
        acceptsReservations: true,
        hasMenu: MENU_PDF[lang],
        address: {
          '@type': 'PostalAddress',
          streetAddress: l.street,
          addressLocality: l.district,
          addressRegion: 'Lima',
          addressCountry: 'PE',
        },
        sameAs,
      })),
    ],
  });
}
