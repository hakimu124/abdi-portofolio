"use client";
import { GALLERY_PHOTOS } from './gallery.config';
import { PhotoCard } from './PhotoCard';
import { useCursorPosition } from '@/hooks/useCursorPosition';
import { useDeviceOrientation } from '@/hooks/useDeviceOrientation';

export function HangingGallery() {
  const cursor = useCursorPosition();
  const orientation = useDeviceOrientation();

  const parallax = {
    x: cursor.x + (orientation.gamma / 90),
    y: cursor.y + (orientation.beta / 90),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {GALLERY_PHOTOS.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          parallax={parallax}
        />
      ))}
    </div>
  );
}
