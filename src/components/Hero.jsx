import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-joyful-gradient py-20 px-4">
      {/* Decorative Blob Shapes */}
      <div className="absolute top-1/4 left-10 w-48 h-48 bg-skyBlue/15 rounded-full filter blur-xl animate-float-y" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-lavender/20 rounded-full filter blur-xl animate-float-y-reverse" />
      <div className="absolute top-12 right-1/4 w-36 h-36 bg-freshGreen/15 rounded-full filter blur-lg animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Animated Big Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="mb-8"
        >
          <svg className="w-48 h-24 text-sunshineYellow drop-shadow-md" viewBox="0 0 100 50">
            {/* Left Face */}
            <circle cx="25" cy="25" r="20" fill="#FFD54F" stroke="#1E293B" strokeWidth="3" />
            <circle cx="17" cy="20" r="3" fill="#1E293B" />
            <circle cx="33" cy="20" r="3" fill="#1E293B" />
            <path d="M 14 26 Q 25 40 36 26" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Right Face */}
            <circle cx="75" cy="25" r="20" fill="#FFD54F" stroke="#1E293B" strokeWidth="3" />
            <circle cx="67" cy="20" r="3" fill="#1E293B" />
            <circle cx="83" cy="20" r="3" fill="#1E293B" />
            <path d="M 64 26 Q 75 40 86 26" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-poppins font-bold text-5xl md:text-7xl text-slate-800 tracking-tight leading-none mb-4"
        >
          ANANDHARA
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-poppins font-semibold text-2xl md:text-4xl text-skyBlue tracking-wide mb-6"
        >
          The Flow of Happiness
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-inter text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed mb-10"
        >
          Welcome to a space of growth, connection, and pure joy! Anandhara is a team of students participating in the 'Mpower' college empowerment campaign, designed to inspire positivity, build deep connections, and spread smiles across our campus.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#team"
            className="inline-block px-8 py-4 bg-sunshineYellow hover:bg-skyBlue text-slate-900 font-poppins font-bold text-lg rounded-full border-3 border-slate-800 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] hover:shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] transition-all duration-200 cursor-pointer"
          >
            Meet Our Team
          </a>
        </motion.div>
      </div>

      {/* Decorative Doodles on Corners */}
      <div className="absolute bottom-6 left-6 hidden md:block">
        <svg className="w-12 h-12 text-freshGreen fill-current opacity-30 animate-wiggle-slow" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>
    </section>
  );
}
