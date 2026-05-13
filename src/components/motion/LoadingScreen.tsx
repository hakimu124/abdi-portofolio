"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-obsidian flex items-center justify-center"
        >
          <div className="text-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gold/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-6xl font-serif italic text-gold">
                {progress}%
              </span>
            </div>
            <p className="mt-8 font-mono text-xs tracking-widest text-mist-dim uppercase animate-pulse">
              Initializing Experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
