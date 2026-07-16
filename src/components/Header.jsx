import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUp } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Values', href: '#values' },
    { name: 'Team', href: '#team' },
    { name: 'Journey', href: '#journey' },
    { name: 'Happiness Wall', href: '#happiness-wall' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 left-0 w-full bg-lightCream/85 backdrop-blur-md z-40 border-b-2 border-slate-800 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <svg className="w-14 h-8 mr-2 transform group-hover:scale-110 group-hover:rotate-6 transition duration-300" viewBox="0 0 100 50">
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
            <span className="font-poppins font-bold text-2xl tracking-wider text-slate-800 select-none">
              ANANDHARA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-poppins font-semibold text-slate-700 hover:text-slate-900 transition-colors duration-200 text-sm py-2 px-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-skyBlue group-hover:w-full transition-all duration-300 rounded" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sunshineYellow via-skyBlue to-freshGreen origin-left"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 left-0 w-full bg-lightCream border-b-2 border-slate-800 z-30 shadow-lg"
          >
            <nav className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-poppins font-semibold text-slate-700 hover:text-slate-900 text-lg py-2 border-b border-slate-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-sunshineYellow hover:bg-lavender text-slate-800 rounded-full border-2 border-slate-800 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] z-40 cursor-pointer transition-colors duration-300"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-6 h-6 stroke-[3px]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
