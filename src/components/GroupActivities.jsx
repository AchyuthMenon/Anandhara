import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

import activity1 from '../assets/gallery/activity1.jpg';
import activity2 from '../assets/gallery/activity2.jpg';
import activity3 from '../assets/gallery/activity3.jpg';

const activities = [
  {
    id: 0,
    src: activity1,
    title: 'Circle of Commonalities',
    category: 'Reflection & Unity',
    badgeColor: 'bg-sunshineYellow',
    desc: 'A heartfelt round-table group discussion where each of us shared our personal traits, exploring the ways we are unique and the ways we are similar.',
    learning: 'This session helped us discover common bonds, appreciate diverse perspectives, and understand that our unique individual differences complement each other to form a cohesive, supportive team.',
  },
  {
    id: 1,
    src: activity2,
    title: 'Blindfolded Shape Challenge',
    category: 'Trust & Coordination',
    badgeColor: 'bg-skyBlue',
    desc: 'A complex group challenge where one coordinator guided seven blindfolded team members onto the stage, directing them to construct a specific geometric shape using a rope.',
    learning: 'This activity taught us the critical importance of clear, structured communication, absolute trust in peer guidance, active listening under sensory constraints, and synchronized teamwork.',
  },
  {
    id: 2,
    src: activity3,
    title: 'Team Presentation & Appreciation',
    category: 'Peer Appreciation',
    badgeColor: 'bg-lavender',
    desc: 'A stage presentation where we introduced our team logo and motto, and shared heartfelt appreciations for each teammate—discussing their unique strengths, qualities, and general info.',
    learning: 'This activity taught us the power of open peer appreciation, boosted individual confidence, and reinforced our collective identity by aligning everyone around our team motto and shared values.',
  },
];

export default function GroupActivities() {
  const [activeIdx, setActiveIdx] = useState(null);

  const openLightbox = (idx) => setActiveIdx(idx);
  const closeLightbox = () => setActiveIdx(null);

  const nextActivity = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % activities.length);
  };

  const prevActivity = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <section id="activities" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-soft-blue-grad opacity-40 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-sunshineYellow text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Team Synergy
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            Group Activities in Action
          </h2>
          <p className="font-inter text-slate-600 mt-4">
            A visual showcase of our interactive bonding exercises, trust challenges, and collaborative ideation sessions aimed at building a supportive student community.
          </p>
        </div>

        {/* Neo-Brutalist Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activities.map((act, idx) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] hover:shadow-[10px_10px_0px_0px_rgba(30,41,59,1)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 relative border-b-3 border-slate-800">
                <img
                  src={act.src}
                  alt={act.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-sunshineYellow rounded-full border-2 border-slate-800 text-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                </div>
              </div>

              {/* Text content area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-poppins font-bold uppercase tracking-wider text-slate-800 rounded-full border-2 border-slate-800 ${act.badgeColor} shadow-[1.5px_1.5px_0px_0px_rgba(30,41,59,1)] mb-3`}>
                    {act.category}
                  </span>
                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-slate-800 mb-2 leading-tight">
                    {act.title}
                  </h3>
                  <p className="font-inter text-slate-600 text-sm md:text-base leading-relaxed">
                    {act.desc}
                  </p>
                </div>

                {/* Micro-interaction pointer */}
                <div className="mt-4 flex items-center gap-2 text-slate-700 font-poppins font-bold text-sm group-hover:text-skyBlue transition-colors duration-200">
                  <span>View Details</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-200">➜</span>
                </div>
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
              className="absolute top-6 right-6 p-2 bg-sunshineYellow text-slate-800 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-lavender transition-colors cursor-pointer z-55"
              aria-label="Close details"
            >
              <X className="w-6 h-6 stroke-[3px]" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevActivity}
              className="absolute left-6 p-3 bg-white text-slate-800 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-sunshineYellow transition-colors cursor-pointer z-55 hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3px]" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextActivity}
              className="absolute right-6 p-3 bg-white text-slate-800 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-sunshineYellow transition-colors cursor-pointer z-55 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 stroke-[3px]" />
            </button>

            {/* Modal Card Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border-3 border-slate-800 rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col md:flex-row gap-6"
            >
              {/* Left Column: Image with swipe indicators on mobile */}
              <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-auto md:h-[50vh] bg-slate-100 rounded-2xl overflow-hidden border-2 border-slate-800 relative">
                <img
                  src={activities[activeIdx].src}
                  alt={activities[activeIdx].title}
                  className="w-full h-full object-cover"
                />

                {/* Mobile Navigation Arrows Overlay */}
                <div className="absolute inset-0 flex items-center justify-between px-2 sm:hidden pointer-events-none">
                  <button
                    onClick={prevActivity}
                    className="p-2 bg-white/90 text-slate-800 rounded-full border-2 border-slate-800 pointer-events-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ChevronLeft className="w-4 h-4 stroke-[3px]" />
                  </button>
                  <button
                    onClick={nextActivity}
                    className="p-2 bg-white/90 text-slate-800 rounded-full border-2 border-slate-800 pointer-events-auto shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <ChevronRight className="w-4 h-4 stroke-[3px]" />
                  </button>
                </div>
              </div>

              {/* Right Column: Descriptions */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-2">
                <div>
                  <span className={`inline-block px-3 py-1 text-xs font-poppins font-bold uppercase tracking-wider text-slate-800 rounded-full border-2 border-slate-800 ${activities[activeIdx].badgeColor} shadow-[1.5px_1.5px_0px_0px_rgba(30,41,59,1)] mb-4`}>
                    {activities[activeIdx].category}
                  </span>
                  <h3 className="font-poppins font-bold text-2xl text-slate-800 mb-4 leading-tight">
                    {activities[activeIdx].title}
                  </h3>
                  <div className="w-12 h-1 bg-slate-800 mb-4 rounded-full" />
                  <p className="font-inter text-slate-600 text-base leading-relaxed">
                    {activities[activeIdx].desc}
                  </p>
                  {activities[activeIdx].learning && (
                    <div className="mt-5 p-4 bg-freshGreen/15 border-2 border-slate-800 rounded-2xl shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
                      <h4 className="font-poppins font-bold text-slate-800 text-xs mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                        <span>💡</span> What We Learned
                      </h4>
                      <p className="font-inter text-slate-600 text-sm leading-relaxed">
                        {activities[activeIdx].learning}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex justify-between items-center border-t-2 border-slate-100 pt-4">
                  <div className="text-sm font-poppins text-slate-500 font-semibold">
                    Activity {activeIdx + 1} of {activities.length}
                  </div>
                  {/* Indicator dots */}
                  <div className="flex gap-1.5">
                    {activities.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIdx(idx)}
                        className={`w-2.5 h-2.5 rounded-full border border-slate-800 transition-colors duration-200 ${
                          activeIdx === idx ? 'bg-slate-800' : 'bg-slate-200'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
