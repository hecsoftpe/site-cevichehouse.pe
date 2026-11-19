import ceviche from '../assets/photos/ceviche.jpg';
import cevicheDetalle from '../assets/photos/ceviche-detalle.jpg';
import mariscos from '../assets/photos/mariscos.jpg';
import mariscosDetalle from '../assets/photos/mariscos-detalle.jpg';
import igCeviche from '../assets/photos/ig/ceviche-pesca-del-dia.jpg';
import igMozos from '../assets/photos/ig/mozos-bn.jpg';
import igHuarique from '../assets/photos/ig/huarique-miraflores.jpg';
import igTerraza from '../assets/photos/ig/terraza-barranco.jpg';
import igCasona from '../assets/photos/ig/casona-barranco.jpg';
import igReview from '../assets/photos/ig/unico-review.jpg';
import type { ImageMetadata } from 'astro';

/**
 * Photo registry. Only real, restaurant-owned photographs live here; the site
 * never renders an empty "photo coming soon" slot. Every layout adapts to the
 * photos that exist. See docs/PHOTO-ASSET-AUDIT.md for provenance and crops.
 *
 * Current source: the two photos printed in the official menu PDF
 * (Carta_CH.pdf), retouched with scripts/retouch.py to remove the printed paper
 * texture and the cyan cast. Originals: src/assets/photos/source/.
 *
 * To add a photo (e.g. downloaded by the owner from the Instagram account):
 * drop the original in src/assets/photos/, import it here and add an entry to
 * GALLERY. Astro generates AVIF/WebP at every width automatically.
 */
export interface PhotoItem {
  key: string;
  src: ImageMetadata;
  es: string;
  en: string;
  /** Focal point for object-position when the frame crops the image. */
  focus: string;
  /** Detail crops are low resolution: never show them wider than ~360 CSS px. */
  detail?: boolean;
}

export const PHOTOS = { ceviche, cevicheDetalle, mariscos, mariscosDetalle };

export const P: Record<'ceviche' | 'cevicheDetalle' | 'mariscos' | 'mariscosDetalle', PhotoItem> = {
  ceviche: {
    key: 'ceviche', src: ceviche, focus: '62% 52%',
    es: 'Ceviche con palta, alcaparras, rocoto, camote y choclo',
    en: 'Ceviche with avocado, capers, rocoto, sweet potato and corn',
  },
  cevicheDetalle: {
    key: 'ceviche-detalle', src: cevicheDetalle, focus: '45% 45%', detail: true,
    es: 'Detalle: palta, alcaparras y rocoto picado',
    en: 'Detail: avocado, capers and diced rocoto',
  },
  mariscos: {
    key: 'mariscos', src: mariscos, focus: '52% 50%',
    es: 'Mariscos en plancha caliente, recién salidos de cocina',
    en: 'Seafood on a sizzling plate, straight from the kitchen',
  },
  mariscosDetalle: {
    key: 'mariscos-detalle', src: mariscosDetalle, focus: '50% 45%', detail: true,
    es: 'Detalle: pulpo a la plancha, conchas y espárragos',
    en: 'Detail: grilled octopus, scallops and asparagus',
  },
};

/** Gallery order, used by every concept. */
export const GALLERY: PhotoItem[] = [P.ceviche, P.mariscosDetalle, P.mariscos, P.cevicheDetalle];
// (GALLERY is the menu-PDF set used by A/B/C before the Instagram photos; concepts now compose their own sets from P and IG.)

/**
 * Photos from the restaurant's own Instagram (@ceviche_house.pe), taken from
 * the public profile embed (instagram.com/ceviche_house.pe/embed/), which only
 * exposes the 6 latest posts at 1080 px. Provenance and analysis:
 * docs/PARTE-DE-MAR.md and docs/PHOTO-ASSET-AUDIT.md. Guests are identifiable
 * in huarique / terraza / casona: the restaurant should confirm consent before
 * production.
 */
export const IG: Record<'ceviche' | 'mozos' | 'huarique' | 'terraza' | 'casona' | 'review', PhotoItem> = {
  ceviche: {
    key: 'ig-ceviche', src: igCeviche, focus: '50% 58%',
    es: 'Ceviche de pesca del día con camote, choclo, lechuga y rocoto, servido en la mesa',
    en: 'Catch-of-the-day ceviche with sweet potato, corn, lettuce and rocoto, served at the table',
  },
  mozos: {
    key: 'ig-mozos', src: igMozos, focus: '50% 40%',
    es: 'El equipo de sala de Ceviche House, de camisa, corbata y mandil negro',
    en: 'The Ceviche House floor team in shirts, ties and black aprons',
  },
  huarique: {
    key: 'ig-huarique', src: igHuarique, focus: '50% 50%',
    es: 'El huarique de Miraflores: mesas en la vereda bajo el toldo azul',
    en: 'The Miraflores huarique: pavement tables under the blue awning',
  },
  terraza: {
    key: 'ig-terraza', src: igTerraza, focus: '60% 45%',
    es: 'La terraza de la casona de Barranco, frente al mar',
    en: 'The terrace of the Barranco casona, facing the sea',
  },
  casona: {
    key: 'ig-casona', src: igCasona, focus: '55% 50%',
    es: 'El balcón de la casona de Barranco: muros granate, sombrillas y luces',
    en: 'The balcony of the Barranco casona: garnet walls, umbrellas and string lights',
  },
  review: {
    key: 'ig-review', src: igReview, focus: '50% 62%',
    es: 'Plancha y bowl vacíos sobre la barra de acero: “el único review que importa”',
    en: 'An empty skillet and bowl on the steel counter: “the only review that matters”',
  },
};
