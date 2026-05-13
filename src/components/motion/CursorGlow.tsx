"use client";
import { motion } from "framer-motion";
import { useGlowCursor } from "@/hooks/useGlowCursor";

export function CursorGlow() {
  const { x, y } = useGlowCursor();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-gold/30 blur-xl pointer-events-none z-[9999]"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9999]"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  );
}
