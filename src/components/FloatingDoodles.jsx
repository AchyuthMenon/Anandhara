import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SMILEY_SVG = (
  <svg className="w-8 h-8 opacity-20 text-sunshineYellow fill-current" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" style={{ display: 'none' }} />
    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-3.5 7c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5 14.67 11 15.5 11zm-7 3c.75 0 1.5.3 2.12.88.62.58 1.38.88 2.12.88s1.5-.3 2.12-.88c.3-.28.75-.28 1.05 0 .3.28.3.75 0 1.03C15.93 16.92 14.01 17.5 12 17.5s-3.93-.58-5.29-1.62c-.3-.28-.3-.75 0-1.03.3-.28.75-.28 1.05 0 .62.58 1.38.88 2.12.88z"/>
  </svg>
);

const FLOWER_SVG = (
  <svg className="w-8 h-8 opacity-20 text-lavender fill-current" viewBox="0 0 24 24">
    <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 12a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-6-4a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm12 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
    <circle cx="12" cy="12" r="3" className="text-sunshineYellow fill-current" />
  </svg>
);

const LEAF_SVG = (
  <svg className="w-6 h-6 opacity-20 text-freshGreen fill-current" viewBox="0 0 24 24">
    <path d="M17 8C8 10 5.9 16.1 5.1 19c-.3.8.3 1.6 1.1 1.6 2.9-.8 9-2.9 11-11.9 0-.4-.1-.7-.4-.9-.4-.3-.8-.3-1.1-.1v.3zM4 4c8.4.1 12.6 3.1 14.7 5.2.3.3.3.8 0 1.1s-.8.3-1.1 0c-1.8-1.8-5.6-4.6-13.6-4.7-.4 0-.7-.3-.7-.7s.3-.9.7-.9z" />
  </svg>
);

export default function FloatingDoodles() {
  const [doodles, setDoodles] = useState([]);

  useEffect(() => {
    // Generate fixed randomized parameters to prevent hydration mismatches
    const items = Array.from({ length: 15 }).map((_, i) => {
      const types = [SMILEY_SVG, FLOWER_SVG, LEAF_SVG];
      const selectedType = types[i % types.length];
      return {
        id: i,
        element: selectedType,
        left: `${Math.random() * 90 + 5}%`,
        duration: Math.random() * 20 + 25, // 25s - 45s
        delay: Math.random() * -30, // Start mid-way through animation
        size: Math.random() * 1.5 + 0.8, // scaling
        initialX: Math.random() * 50 - 25,
      };
    });
    setDoodles(items);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {doodles.map((doodle) => (
        <motion.div
          key={doodle.id}
          className="absolute"
          style={{
            left: doodle.left,
            bottom: '-10%',
            scale: doodle.size,
          }}
          initial={{ y: '110vh', x: doodle.initialX, rotate: 0 }}
          animate={{
            y: '-10vh',
            x: [doodle.initialX - 40, doodle.initialX + 40, doodle.initialX - 40],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: doodle.duration,
            delay: doodle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {doodle.element}
        </motion.div>
      ))}
    </div>
  );
}
