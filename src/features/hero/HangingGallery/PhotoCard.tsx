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
      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 5,
        x: parallax.x * (photo.z * 40),
        y: [
          parallax.y * (photo.z * 40),
          parallax.y * (photo.z * 40) - 30,
          parallax.y * (photo.z * 40)
        ],
      }}
      transition={{
        opacity: { duration: 1 },
        scale: { duration: 1 },
        x: { type: 'spring', stiffness: 80, damping: 20 },
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: photo.drift.duration,
          delay: photo.drift.delay,
          ease: "easeInOut"
        },
      }}
    >
      <div className="relative group">
        {/* Glow effect behind card */}
        <div className="absolute -inset-2 bg-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
          <Image
            src={photo.src}
            alt={`Abdihakim Portfolio - ${photo.label}`}
            width={200}
            height={300}
            className="object-cover w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
          />

          {/* Elegant label that slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-gold font-mono text-[10px] uppercase tracking-widest text-center">
              {photo.label}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
