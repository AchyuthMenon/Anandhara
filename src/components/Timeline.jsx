import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Trophy, UserPlus, Users } from 'lucide-react';

const milestones = [
  {
    title: 'Team Formation & Setup',
    date: 'Day 1',
    desc: 'Six passionate minds came together to plant the seeds of Anandhara, mapping out the core themes of campus empowerment.',
    icon: UserPlus,
    color: 'bg-sunshineYellow',
  },
  {
    title: 'Ice-Breaking & Trust Games',
    date: 'Day 1',
    desc: 'We organized outdoor student bonding sessions, building solid trust networks and overcoming social anxiety.',
    icon: Users,
    color: 'bg-skyBlue',
  },
  {
    title: 'Core Empowerment Sessions',
    date: 'Day 1',
    desc: 'Running workshops focused on mindfulness, finding purpose, self-care routines, and building emotional strength.',
    icon: Sparkles,
    color: 'bg-lavender',
  },
  {
    title: 'Group Challenges & Collaboration',
    date: 'Day 1',
    desc: 'Students formed small teams to resolve real campus community challenges, practicing unity and creative solutioning.',
    icon: Heart,
    color: 'bg-rose-200',
  },
  {
    title: 'More Events Loading...',
    date: 'Ongoing',
    desc: 'The Mpower journey continues! We are actively designing new student-driven sessions, trust-building games, and creative activities.',
    icon: Sparkles,
    color: 'bg-freshGreen',
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 bg-lightCream relative overflow-hidden">
      {/* Decorative floating lines */}
      <div className="absolute inset-0 bg-sunny-radial opacity-50 z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-skyBlue text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)] mb-4">
            Our Flow
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800">
            The Journey So Far
          </h2>
          <p className="font-inter text-slate-600 mt-4">
            A chronological flow showing how Team Anandhara bloomed from a small seed to a major force in the Mpower campaign.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Connecting Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-slate-800 hidden md:block" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {milestones.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={milestone.title} className="relative flex flex-col md:flex-row items-center justify-between">
                  
                  {/* Left Side Content (Desktop) */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1 text-left md:text-right' : 'md:order-2 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-6 rounded-3xl border-3 border-slate-800 shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] relative hover:shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] transition-shadow duration-300"
                    >
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border-2 border-slate-800 mb-3 ${milestone.color}`}>
                        {milestone.date}
                      </span>
                      <h3 className="font-poppins font-bold text-xl text-slate-800 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-inter text-sm text-slate-600 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
                      className={`p-3 rounded-full border-3 border-slate-800 ${milestone.color} shadow-[3px_3px_0px_0px_rgba(30,41,59,1)]`}
                    >
                      <IconComponent className="w-6 h-6 text-slate-800" />
                    </motion.div>
                  </div>

                  {/* Right Side Spacer (Desktop) */}
                  <div className="hidden md:block w-[45%]" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
