import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

import img1 from '../assets/gallery/gallery1.png';
import img2 from '../assets/gallery/gallery2.png';
import img3 from '../assets/gallery/gallery3.png';
import img4 from '../assets/gallery/gallery4.png';
import img5 from '../assets/gallery/gallery5.png';
import img6 from '../assets/gallery/gallery6.png';

const galleryItems = [
  { id: 0, src: img1, title: 'Collaborative Workshop', category: 'Growth' },
  { id: 1, src: img2, title: 'Peer Trust Circle', category: 'Unity' },
  { id: 2, src: img3, title: 'Creative Brainstorming', category: 'Creativity' },
  { id: 3, src: img4, title: 'Interactive Trust Games', category: 'Positivity' },
  { id: 4, src: img5, title: 'Student Presentation', category: 'Empowerment' },
  { id: 5, src: img6, title: 'Music & Celebration Circle', category: 'Celebration' },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  const openLightbox = (idx) => setActiveIdx(idx);
  const closeLightbox = () => setActiveIdx(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-blue-grad opacity-40 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-freshGreen text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Our Moments
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            Anandhara In Action
          </h2>
          <p className="font-inter text-slate-600 mt-4">
            Moments of laughter, collaboration, self-discovery, and community captured during our campus journeys.
          </p>
        </div>

        {/* Grid of Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] transition-all duration-300"
            >
              {/* Image box */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Glow Backdrop overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-sunshineYellow rounded-full border-2 border-slate-800 text-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                </div>
              </div>

              {/* Card Title Bar */}
              <div className="p-4 border-t-3 border-slate-800 bg-white">
                <span className="text-xs font-poppins font-bold uppercase tracking-wider text-skyBlue">
                  {item.category}
                </span>
                <h3 className="font-poppins font-bold text-lg text-slate-800 mt-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 bg-sunshineYellow text-slate-800 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-lavender transition-colors cursor-pointer"
            >
              <X className="w-6 h-6 stroke-[3px]" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 p-3 bg-white text-slate-800 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-sunshineYellow transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3px]" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 p-3 bg-white text-slate-800 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-sunshineYellow transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 stroke-[3px]" />
            </button>

            {/* Image Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4"
            >
              <img
                src={galleryItems[activeIdx].src}
                alt={galleryItems[activeIdx].title}
                className="w-full max-h-[70vh] object-contain rounded-2xl"
              />
              <div className="mt-4 flex justify-between items-center px-2">
                <div>
                  <span className="text-xs font-poppins font-bold uppercase tracking-wider text-skyBlue">
                    {galleryItems[activeIdx].category}
                  </span>
                  <h3 className="font-poppins font-bold text-xl text-slate-800">
                    {galleryItems[activeIdx].title}
                  </h3>
                </div>
                <div className="text-sm font-poppins text-slate-500 font-semibold">
                  {activeIdx + 1} / {galleryItems.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
