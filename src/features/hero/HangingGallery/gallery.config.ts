export const GALLERY_PHOTOS = [
  { id: 1, src: "/images/gallery/photo-01.avif", x: "12%",  y: "15%", z: 1, drift: { duration: 5.2, delay: 0.0 } },
  { id: 2, src: "/images/gallery/photo-02.avif", x: "72%",  y: "8%",  z: 3, drift: { duration: 6.8, delay: 1.2 } },
  { id: 3, src: "/images/gallery/photo-03.avif", x: "40%",  y: "60%", z: 2, drift: { duration: 4.5, delay: 0.7 } },
  { id: 4, src: "/images/gallery/photo-04.avif", x: "85%",  y: "45%", z: 4, drift: { duration: 7.1, delay: 2.0 } },
  { id: 5, src: "/images/gallery/photo-05.avif", x: "25%",  y: "75%", z: 2, drift: { duration: 5.9, delay: 0.3 } },
  { id: 6, src: "/images/gallery/photo-06.avif", x: "60%",  y: "30%", z: 1, drift: { duration: 6.3, delay: 1.8 } },
  { id: 7, src: "/images/gallery/photo-07.avif", x: "8%",   y: "50%", z: 3, drift: { duration: 4.9, delay: 2.5 } },
  { id: 8, src: "/images/gallery/photo-08.avif", x: "55%",  y: "80%", z: 2, drift: { duration: 5.5, delay: 0.9 } },
] as const;

export const PARALLAX_DEPTH = { 1: 0.02, 2: 0.05, 3: 0.09, 4: 0.14 };

export type GalleryPhoto = (typeof GALLERY_PHOTOS)[number];
