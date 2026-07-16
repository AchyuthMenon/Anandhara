import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Lightbulb, Heart, TrendingUp } from 'lucide-react';

const values = [
  {
    title: 'Positivity',
    desc: 'Spreading optimism and looking at the bright side of every learning experience.',
    color: 'bg-sunshineYellow',
    icon: Sparkles,
    shadowColor: 'rgba(255,213,79,0.4)',
  },
  {
    title: 'Unity',
    desc: 'Supporting each other as one strong, diverse, and inclusive family.',
    color: 'bg-skyBlue',
    icon: Users,
    shadowColor: 'rgba(126,167,255,0.4)',
  },
  {
    title: 'Creativity',
    desc: 'Encouraging out-of-the-box thinking, expressive arts, and personal innovation.',
    color: 'bg-lavender',
    icon: Lightbulb,
    shadowColor: 'rgba(225,190,231,0.4)',
  },
  {
    title: 'Kindness',
    desc: 'Fostering empathy, active listening, and unconditional peer support.',
    color: 'bg-rose-200',
    icon: Heart,
    shadowColor: 'rgba(244,63,94,0.2)',
  },
  {
    title: 'Growth',
    desc: 'Empowering students to step out of comfort zones and reach new heights.',
    color: 'bg-freshGreen',
    icon: TrendingUp,
    shadowColor: 'rgba(165,214,106,0.4)',
  },
];

export default function Values() {
  return (
    <section id="values" className="py-24 px-6 md:px-12 bg-lightCream relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-sunny-radial opacity-60 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-freshGreen text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Our Foundation
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            The Values We Live By
          </h2>
          <p className="font-inter text-slate-600 mt-4">
            These core principles guide our workshops, activities, and daily interactions as we flow towards happiness.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: `0px 20px 25px -5px ${val.shadowColor}, 4px 4px 0px 0px rgba(30,41,59,1)`
                }}
                className={`p-6 rounded-3xl border-3 border-slate-800 ${val.color} shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] flex flex-col justify-between h-72 group transition-all duration-200`}
              >
                <div>
                  <div className="p-3 bg-white/70 rounded-2xl border-2 border-slate-800 w-fit mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-slate-800" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-slate-800 mb-2">
                    {val.title}
                  </h3>
                  <p className="font-inter text-sm text-slate-700 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                
                {/* Visual anchor smiley */}
                <div className="self-end text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  😊
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
