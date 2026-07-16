import React from 'react';
import { motion } from 'framer-motion';

const notes = [
  {
    author: 'Aditya J Krishna',
    text: 'Watching the sunrise with a hot cup of ginger tea and no alarm clocks.',
    color: 'bg-sunshineYellow',
    rotation: '-rotate-2',
    emoji: '🌅',
  },
  {
    author: 'Chris Maria',
    text: 'Finding a song that perfectly captures exactly how I am feeling in that moment.',
    color: 'bg-lavender',
    rotation: 'rotate-1',
    emoji: '🎵',
  },
  {
    author: 'Adharsh T.S',
    text: 'The smell of wet earth after a sudden summer shower in the afternoon.',
    color: 'bg-freshGreen',
    rotation: '-rotate-1',
    emoji: '🌧️',
  },
  {
    author: 'Amritha Murthi',
    text: 'Seeing the bright smiles of students after they finish a trust-building game.',
    color: 'bg-skyBlue',
    rotation: 'rotate-3',
    emoji: '✨',
  },
  {
    author: 'Anirudh R Nair',
    text: 'Hearing a child laugh and seeing their parents smile back naturally.',
    color: 'bg-rose-200',
    rotation: '-rotate-3',
    emoji: '🌸',
  },
  {
    author: 'Achyuth Menon',
    text: 'A clean compiler output with zero warnings on the first try!',
    color: 'bg-amber-100',
    rotation: 'rotate-2',
    emoji: '💻',
  },
  {
    author: 'Anmariya Nitheen',
    text: 'Getting a random text from an old friend saying "I saw this and thought of you."',
    color: 'bg-sunshineYellow',
    rotation: 'rotate-1',
    emoji: '📱',
  },
  {
    author: 'Annlia Lixon',
    text: 'Finding a quiet, cozy corner in the library with a book I have been wanting to read.',
    color: 'bg-skyBlue',
    rotation: '-rotate-2',
    emoji: '📚',
  },
];

export default function HappinessWall() {
  return (
    <section id="happiness-wall" className="py-24 px-6 md:px-12 bg-lightCream relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-sunny-radial opacity-60 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-lavender text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Happiness Wall
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            What Makes You Happy?
          </h2>
          <p className="font-inter text-slate-600 mt-4">
            We asked our team and college participants a simple question. Here are some of our favorite sticky notes from the wall.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {notes.map((note, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className={`p-6 border-3 border-slate-800 rounded-2xl relative shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] flex flex-col justify-between min-h-[200px] cursor-default ${note.color} ${note.rotation} transition-shadow duration-200`}
            >
              {/* Pushpin design at the top */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-400 border-2 border-slate-800 rounded-full shadow" />
              
              {/* Note Content */}
              <div className="mt-2 text-slate-800 font-poppins font-semibold italic text-base leading-relaxed">
                "{note.text}"
              </div>

              {/* Note Author & Emoji */}
              <div className="mt-6 flex justify-between items-center">
                <span className="font-poppins font-bold text-slate-700 text-sm">
                  — {note.author}
                </span>
                <span className="text-2xl select-none">
                  {note.emoji}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
