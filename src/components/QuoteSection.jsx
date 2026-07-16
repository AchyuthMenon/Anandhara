import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-lavender/40 via-skyBlue/30 to-sunshineYellow/20 relative overflow-hidden text-center border-t-3 border-b-3 border-slate-800">
      
      {/* Background drifting petals/flowers inside the quote container */}
      <div className="absolute top-10 left-10 opacity-15 animate-float-y">
        <svg className="w-16 h-16 text-slate-800 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 12a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm-6-4a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm12 0a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-15 animate-float-y-reverse">
        <svg className="w-16 h-16 text-slate-800 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" style={{ display: 'none' }} />
          <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-3.5 7c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5 14.67 11 15.5 11zm-7 3c.75 0 1.5.3 2.12.88.62.58 1.38.88 2.12.88s1.5-.3 2.12-.88c.3-.28.75-.28 1.05 0 .3.28.3.75 0 1.03C15.93 16.92 14.01 17.5 12 17.5s-3.93-.58-5.29-1.62c-.3-.28-.3-.75 0-1.03.3-.28.75-.28 1.05 0 .62.58 1.38.88 2.12.88z"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Decorative Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-8xl md:text-9xl text-slate-800 leading-none select-none h-10 mb-4"
        >
          “
        </motion.div>

        {/* The Quote Text */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-poppins font-bold text-3xl md:text-5xl text-slate-800 leading-tight md:leading-snug"
        >
          Happiness is the only thing that <span className="text-skyBlue">multiplies</span> when you <span className="text-sunshineYellow">share</span> it.
        </motion.h3>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-poppins font-semibold text-lg md:text-xl text-slate-600 mt-8"
        >
          — Albert Schweitzer
        </motion.p>
      </div>
    </section>
  );
}
