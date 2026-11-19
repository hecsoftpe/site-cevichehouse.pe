import ceviche from '../assets/photos/ceviche.jpg';
import cevicheDetalle from '../assets/photos/ceviche-detalle.jpg';
import mariscos from '../assets/photos/mariscos.jpg';
import mariscosDetalle from '../assets/photos/mariscos-detalle.jpg';
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
