import React from 'react';
import { motion } from 'framer-motion';

// Import local student photos
import member1 from '../assets/avatars/member1.jpg';
import member2 from '../assets/avatars/member2.jpg';
import member3 from '../assets/avatars/member3.jpg';
import member4 from '../assets/avatars/member4.jpg';
import member5 from '../assets/avatars/member5.jpg';
import member6 from '../assets/avatars/member6.jpg';
import member7 from '../assets/avatars/member7.jpg';
import member8 from '../assets/avatars/member8.jpg';

const teamMembers = [
  {
    name: 'Anirudh R Nair',
    role: 'Captain',
    avatar: member4,
    superpower: 'Strategic planning & Focus',
    quote: 'Empowering every voice is the true essence of leadership.',
    color: 'bg-sunshineYellow',
    tag: 'Captain',
  },
  {
    name: 'Anmariya Nitheen',
    role: 'Vice Captain',
    avatar: member7,
    superpower: 'Active listener & Support',
    quote: 'A kind word can change someone\'s entire day, let\'s share it.',
    color: 'bg-lavender',
    tag: 'Vice Captain',
  },
  {
    name: 'Aditya Krishna J Nair',
    avatar: member1,
    superpower: 'Infectious laughter',
    quote: 'Bringing people together is my absolute favorite puzzle.',
    color: 'bg-freshGreen',
  },
  {
    name: 'Chris Maria',
    avatar: member3,
    superpower: 'Doodling anything in 5s',
    quote: 'Art can speak words that our minds are still figuring out.',
    color: 'bg-skyBlue',
  },
  {
    name: 'Adharsh T.S',
    avatar: member2,
    superpower: 'Perfect coffee & conversations',
    quote: 'Every conversation is an opportunity to learn, listen, and grow.',
    color: 'bg-rose-200',
  },
  {
    name: 'Amrita Murthi',
    avatar: member5,
    superpower: 'Empathy radar',
    quote: 'Empowerment happens when we show up for each other, daily.',
    color: 'bg-amber-100',
  },
  {
    name: 'Achyuth Menon',
    avatar: member6,
    superpower: 'Finding bugs in dark mode',
    quote: 'Building positive connections through code and conversations.',
    color: 'bg-freshGreen',
  },
  {
    name: 'Annlia Lixon',
    avatar: member8,
    superpower: 'Unmatched peer empathy',
    quote: 'Strength lies in our differences, unity in our smiles.',
    color: 'bg-lavender',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-soft-blue-grad opacity-40 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-lavender text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Our Crew
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            Meet the Joy Makers
          </h2>
          <p className="font-inter text-slate-600 mt-4">
            We are a group of college students passionate about mental wellness, peer support, and making campus life a happier journey.
          </p>
        </div>

        {/* Grid (4 columns on large screens, shrunk cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative bg-white border-3 border-slate-800 rounded-3xl p-5 shadow-[5px_5px_0px_0px_rgba(30,41,59,1)] flex flex-col items-center group transition-shadow duration-300 hover:shadow-[8px_8px_0px_0px_rgba(30,41,59,1)] w-full max-w-[260px] mx-auto"
            >
              {/* Soft glow behind card on hover */}
              <div className="absolute inset-0 bg-joyful-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[21px] -z-10" />

              {/* Leader Ribbon / Badge */}
              {member.tag && (
                <div className="absolute -top-3 -left-3 px-3 py-1 bg-rose-400 text-slate-900 text-xs font-poppins font-bold rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] z-20 rotate-[-8deg] uppercase tracking-wider">
                  🏆 {member.tag}
                </div>
              )}

              {/* Avatar Container with Animated Pop Emoji */}
              <div className="relative mb-4">
                {/* Popping Smiley Emoji on Hover */}
                <motion.div
                  className="absolute -top-2 -right-2 text-xl select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  😊
                </motion.div>

                {/* Avatar Image with thick border */}
                <div className="w-28 h-28 rounded-full border-3 border-slate-800 overflow-hidden bg-slate-100 transform group-hover:scale-105 group-hover:rotate-2 transition duration-300 shadow-md">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Member Info */}
              <h3 className="font-poppins font-bold text-xl text-slate-800 text-center leading-tight">
                {member.name}
              </h3>
              {member.role && (
                <span className="font-poppins font-semibold text-xs text-skyBlue uppercase tracking-wider mt-1 text-center leading-none">
                  {member.role}
                </span>
              )}

              {/* Superpower Badge */}
              <div className={`mt-3 px-2 py-0.5 text-[10px] font-semibold rounded-full border-2 border-slate-800 shadow-[1px_1px_0px_0px_rgba(30,41,59,1)] ${member.color} text-center leading-tight`}>
                ⚡ {member.superpower}
              </div>

              {/* Separator */}
              <div className="w-8 h-0.5 bg-slate-800 my-4 rounded-full" />

              {/* Short Quote */}
              <p className="font-inter text-slate-600 text-center italic text-xs px-2 leading-relaxed">
                "{member.quote}"
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
