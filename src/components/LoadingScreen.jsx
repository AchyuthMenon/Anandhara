import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const loadingPhrases = [
  'Initiating the stream of happiness...',
  'Connecting peer trust circles...',
  'Aligning team synergy...',
  'Preparing mindfulness routines...',
  'Welcome to Anandhara 😊'
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    // Progress interval (takes approx 2.2 seconds to fill)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 5; // random jumps
        return Math.min(prev + increment, 100);
      });
    }, 150);

    // Text phrases cycle
    const phraseInterval = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % loadingPhrases.length);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phraseInterval);
    };
  }, []);

  // Trigger completion after progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 500); // slight delay after 100% for a polished transition
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100, 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 bg-lightCream z-50 flex flex-col items-center justify-center select-none"
    >
      {/* Decorative layout elements matching the design system */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sunshineYellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-skyBlue/15 rounded-full blur-3xl pointer-events-none" />

      {/* Smiley Logo container */}
      <div className="mb-10 flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 4, -4, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center justify-center p-6 bg-white border-3 border-slate-800 rounded-full shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] mb-4"
        >
          {/* logo SVG (Double Faces representing Peer Unity) */}
          <svg className="w-24 h-12 text-slate-800 fill-none" viewBox="0 0 100 50">
            {/* Left Face */}
            <circle cx="25" cy="25" r="20" fill="#FFD54F" stroke="#1E293B" strokeWidth="3" />
            <circle cx="17" cy="20" r="2.5" fill="#1E293B" />
            <circle cx="33" cy="20" r="2.5" fill="#1E293B" />
            <path d="M 15 26 Q 25 38 35 26" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Right Face */}
            <circle cx="75" cy="25" r="20" fill="#FFD54F" stroke="#1E293B" strokeWidth="3" />
            <circle cx="67" cy="20" r="2.5" fill="#1E293B" />
            <circle cx="83" cy="20" r="2.5" fill="#1E293B" />
            <path d="M 65 26 Q 75 38 85 26" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Title */}
        <h1 className="font-poppins font-bold text-3xl tracking-widest text-slate-800 uppercase">
          ANANDHARA
        </h1>
        <span className="font-inter text-xs text-skyBlue uppercase tracking-wider font-semibold mt-1">
          The Flow of Happiness
        </span>
      </div>

      {/* Progress Box */}
      <div className="w-72 max-w-xs flex flex-col items-center">
        {/* Progress Bar Frame */}
        <div className="w-full h-7 bg-white border-3 border-slate-800 rounded-full overflow-hidden shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] relative flex items-center">
          {/* Inner loading bar indicator */}
          <motion.div
            className="h-full bg-sunshineYellow border-r-3 border-slate-800"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.15 }}
          />

          {/* Number Counter percentage text */}
          <div className="absolute inset-0 flex items-center justify-center font-poppins font-bold text-xs text-slate-800 mix-blend-difference select-none">
            {progress}%
          </div>
        </div>

        {/* Scrolling loading phrases */}
        <div className="h-6 mt-6 overflow-hidden flex items-center justify-center">
          <motion.p
            key={phraseIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.7, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="font-inter text-xs text-slate-600 font-medium text-center"
          >
            {loadingPhrases[phraseIdx]}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
