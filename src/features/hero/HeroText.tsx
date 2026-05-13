"use client";
import { motion } from "framer-motion";

export function HeroText() {
  return (
    <div className="relative z-10 text-center max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-serif italic text-mist leading-tight"
      >
        Abdihakim Mohamed
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6"
      >
        <p className="font-mono text-sm md:text-base text-gold tracking-[0.2em] uppercase">
          Senior Frontend Developer · UI/UX Designer
        </p>
      </motion.div>
    </div>
  );
}
