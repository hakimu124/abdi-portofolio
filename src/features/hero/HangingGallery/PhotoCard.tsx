"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GalleryPhoto } from './gallery.config';

interface PhotoCardProps {
  photo: GalleryPhoto;
  parallax: { x: number; y: number };
}

export function PhotoCard({ photo, parallax }: PhotoCardProps) {
  return (
    <motion.div
      className="absolute"
      style={{ left: photo.x, top: photo.y, zIndex: photo.z }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: parallax.x * (photo.z * 30),
        y: [
            parallax.y * (photo.z * 30),
            parallax.y * (photo.z * 30) - 20,
            parallax.y * (photo.z * 30)
        ],
      }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        x: { type: 'spring', stiffness: 100, damping: 20 },
        y: {
            x: { type: 'spring', stiffness: 100, damping: 20 },
            repeat: Infinity,
            repeatType: "reverse",
            duration: photo.drift.duration,
            delay: photo.drift.delay
        },
      }}
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl">
          <Image
            src={photo.src}
            alt={`Gallery photo ${photo.id}`}
            width={200}
            height={250}
            className="object-cover w-full h-auto transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
}
