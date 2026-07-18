import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';

import mentorKrishna from '../assets/avatars/mentor_krishna.jpg';
import mentorMridula from '../assets/avatars/mentor_mridula.jpg';

export default function Mentors() {
  const mentors = [
    {
      name: 'Krishna Kumar Sir',
      role: 'Programme Mentor',
      photo: mentorKrishna,
      appreciation: 'With patience, wisdom, and constant encouragement, Krishna Kumar Sir has motivated us to challenge ourselves, embrace new opportunities, and grow beyond our comfort zones. His guidance has inspired us to believe in our potential and strive for excellence every day.',
      accentColor: 'border-sunshineYellow',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(255,213,79,0.35)]',
      hoverIcon: '🌸',
      objectPosition: 'object-top',
    },
    {
      name: 'Mridula Ma\'am',
      role: 'Programme Mentor',
      photo: mentorMridula,
      appreciation: 'Mridula Ma\'am has been a constant source of kindness, motivation, and support throughout our journey. Her thoughtful guidance and genuine care have encouraged us to learn, collaborate, and become more confident individuals, making this programme a truly enriching experience.',
      accentColor: 'border-skyBlue',
      glowColor: 'group-hover:shadow-[0_0_25px_rgba(126,167,255,0.35)]',
      hoverIcon: '❤️',
    }
  ];

  return (
    <section id="mentors" className="py-24 px-6 md:px-12 bg-lightCream relative overflow-hidden">
      {/* Decorative radial yellow/blue background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-sunshineYellow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-skyBlue/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Flowers Animation Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating flower 1 */}
        <motion.div
          className="absolute text-2xl opacity-20"
          initial={{ x: '10%', y: '100%', rotate: 0 }}
          animate={{
            y: ['90%', '-10%'],
            x: ['10%', '15%', '8%'],
            rotate: 360
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        >
          🌸
        </motion.div>
        {/* Floating flower 2 */}
        <motion.div
          className="absolute text-xl opacity-25"
          initial={{ x: '80%', y: '100%', rotate: 0 }}
          animate={{
            y: ['95%', '-5%'],
            x: ['80%', '75%', '83%'],
            rotate: -360
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 2 }}
        >
          🌻
        </motion.div>
        {/* Floating leaf 1 */}
        <motion.div
          className="absolute text-lg opacity-15"
          initial={{ x: '30%', y: '100%', rotate: 0 }}
          animate={{
            y: ['100%', '-10%'],
            x: ['30%', '35%', '28%'],
            rotate: 180
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear', delay: 5 }}
        >
          🍃
        </motion.div>
        {/* Floating flower 3 */}
        <motion.div
          className="absolute text-xl opacity-20"
          initial={{ x: '60%', y: '100%', rotate: 0 }}
          animate={{
            y: ['100%', '-10%'],
            x: ['60%', '65%', '58%'],
            rotate: 270
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 8 }}
        >
          🌸
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 bg-sunshineYellow text-slate-800 font-poppins font-bold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Our Pillars
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            Our Beloved Mentors
          </h2>
          <p className="font-inter text-slate-600 mt-4 leading-relaxed">
            Every journey becomes meaningful when guided by those who believe in us. We are deeply grateful to our mentors, whose unwavering encouragement, wisdom, and compassion have inspired us to grow, work together, and become better versions of ourselves. Their guidance has been the foundation of our journey in the empowerment programme.
          </p>
        </div>

        {/* Mentors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-white border-3 border-slate-800 rounded-3xl p-8 shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] hover:shadow-[10px_10px_0px_0px_rgba(30,41,59,1)] transition-all duration-300 ${mentor.glowColor}`}
            >
              {/* Hover Floating Heart/Flower Emojis */}
              <div className="absolute top-4 right-4 text-2xl select-none opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 z-20">
                {mentor.hoverIcon}
              </div>

              <div className="flex flex-col items-center">
                {/* Circular Photo Frame */}
                <div className={`w-36 h-36 rounded-full border-4 border-slate-800 overflow-hidden shadow-md mb-6 transform group-hover:scale-105 group-hover:rotate-1 transition duration-300 bg-slate-100`}>
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className={`w-full h-full object-cover ${mentor.objectPosition || 'object-center'}`}
                    loading="lazy"
                  />
                </div>

                {/* Name & Title */}
                <h3 className="font-poppins font-bold text-2xl text-slate-800 text-center leading-tight">
                  {mentor.name}
                </h3>
                <span className="font-poppins font-semibold text-sm text-skyBlue uppercase tracking-wider mt-1.5 mb-5 block">
                  {mentor.role}
                </span>

                {/* Custom Divider */}
                <div className="w-16 h-1 bg-slate-800 rounded-full mb-6" />

                {/* Appreciation Description */}
                <p className="font-inter text-slate-600 text-center text-sm md:text-base leading-relaxed px-2">
                  "{mentor.appreciation}"
                </p>
              </div>

              {/* Glowing outline accent overlay */}
              <div className={`absolute inset-0 border-2 rounded-[21px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mentor.accentColor}`} />
            </motion.div>
          ))}
        </div>

        {/* Appreciation Closing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border-3 border-slate-800 rounded-3xl p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] relative overflow-hidden"
        >
          {/* Decorative Sparkle Icons */}
          <div className="absolute top-4 right-6 text-lavender animate-pulse pointer-events-none">
            <Sparkles className="w-8 h-8 fill-lavender" />
          </div>
          <div className="absolute bottom-4 left-6 text-sunshineYellow/40 pointer-events-none">
            <Sparkles className="w-6 h-6 fill-sunshineYellow/20" />
          </div>

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Quote Icon */}
            <div className="p-3 bg-lavender/35 rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
              <Quote className="w-6 h-6 text-slate-800 fill-slate-800/20" />
            </div>

            {/* Quote Text */}
            <blockquote className="font-poppins font-bold text-xl md:text-2xl text-slate-800 italic leading-relaxed mb-6">
              "A mentor lights the path not by walking it for us, but by showing us how to walk it ourselves."
            </blockquote>

            {/* Gratitude Statement */}
            <p className="font-inter text-slate-600 text-sm md:text-base leading-relaxed">
              Thank you, <strong className="text-slate-800">Krishna Kumar Sir</strong> and <strong className="text-slate-800">Mridula Ma'am</strong>, for believing in us, inspiring us, and helping us discover the best versions of ourselves. Your guidance will always be a cherished part of Anandhara's journey.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
