import ceviche from '../assets/photos/ceviche-carta.jpg';
import mariscos from '../assets/photos/mariscos-carta.jpg';
import type { ImageMetadata } from 'astro';

/**
 * Gallery slots. `src` = authentic restaurant-owned photo; `null` = branded
 * placeholder until the owner supplies the asset (see docs/ASSETS.md).
 * The two current photos come from the official Ceviche House menu PDFs.
 */
export interface GalleryItem {
  key: string;
  src: ImageMetadata | null;
  es: string;
  en: string;
  shape: 'tall' | 'wide' | 'square';
}

export const PHOTOS = { ceviche, mariscos };

export const GALLERY: GalleryItem[] = [
  { key: 'ceviche', src: ceviche, shape: 'tall', es: 'Ceviche servido en Ceviche House', en: 'Ceviche served at Ceviche House' },
  { key: 'interior-miraflores', src: null, shape: 'wide', es: 'Salón de Miraflores', en: 'Miraflores dining room' },
  { key: 'mariscos', src: mariscos, shape: 'square', es: 'Mariscos a la plancha, recién salidos de cocina', en: 'Sizzling seafood fresh from the kitchen' },
  { key: 'interior-barranco', src: null, shape: 'square', es: 'Salón de Barranco', en: 'Barranco dining room' },
  { key: 'pisco', src: null, shape: 'tall', es: 'Pisco sour', en: 'Pisco sour' },
  { key: 'mesa', src: null, shape: 'wide', es: 'Mesa para compartir', en: 'A table to share' },
];
