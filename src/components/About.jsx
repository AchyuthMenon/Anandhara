import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-soft-blue-grad opacity-60 z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Wave/Illustration Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md p-6 bg-lightCream handdrawn-border shadow-[8px_8px_0px_0px_rgba(30,41,59,1)]">
              {/* Interactive Smiley Floating over the box */}
              <div className="absolute -top-10 -right-8 bg-sunshineYellow p-3 rounded-full border-2 border-slate-800 shadow-[3px_3px_0px_0px_rgba(30,41,59,1)] animate-bounce">
                🎉
              </div>
              
              {/* Joyful Animated Wave SVG */}
              <svg className="w-full h-64 text-skyBlue fill-none" viewBox="0 0 200 100">
                <motion.path
                  d="M 10 80 Q 50 10 90 80 T 170 80"
                  stroke="#7EA7FF"
                  strokeWidth="6"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      "M 10 80 Q 50 10 90 80 T 170 80",
                      "M 10 60 Q 50 90 90 30 T 170 60",
                      "M 10 80 Q 50 10 90 80 T 170 80"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.path
                  d="M 20 90 Q 60 30 100 90 T 180 90"
                  stroke="#FFD54F"
                  strokeWidth="4"
                  strokeLinecap="round"
                  animate={{
                    d: [
                      "M 20 90 Q 60 30 100 90 T 180 90",
                      "M 20 70 Q 60 95 100 50 T 180 70",
                      "M 20 90 Q 60 30 100 90 T 180 90"
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Smiley in the flow */}
                <motion.g
                  animate={{
                    x: [0, 80, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <circle cx="50" cy="50" r="10" fill="#FFD54F" stroke="#1E293B" strokeWidth="2" />
                  <circle cx="47" cy="48" r="1" fill="#1E293B" />
                  <circle cx="53" cy="48" r="1" fill="#1E293B" />
                  <path d="M 45 52 Q 50 56 55 52" stroke="#1E293B" strokeWidth="1.5" fill="none" />
                </motion.g>
              </svg>
              
              <div className="text-center mt-4">
                <span className="font-poppins font-bold text-slate-800 text-lg">
                  "Happiness is a flow, not a destination."
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text/Meaning Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block self-start px-3 py-1 bg-lavender text-slate-800 font-poppins font-semibold text-sm rounded-full border-2 border-slate-800 shadow-[2px_2px_0px_0px_rgba(30,41,59,1)]">
              Our Essence
            </div>
            
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-800 leading-tight">
              What is <span className="text-sunshineYellow">Anandhara</span>?
            </h2>
            
            <p className="font-inter text-lg text-slate-600 leading-relaxed">
              Derived from Sanskrit, <strong className="text-slate-800">Anandhara</strong> translates to <em className="text-skyBlue not-italic font-semibold">"The Continuous Stream of Happiness."</em> We believe that empowerment and mental well-being are not single milestones, but a flowing river that nourishes everyone it touches.
            </p>
            
            <p className="font-inter text-lg text-slate-600 leading-relaxed">
              Anandhara is a team of students participating in 'Mpower', a college empowerment campaign designed to foster resilience, confidence, and community among students. Through interactive workshops, creative challenges, and self-reflection exercises, we help students find their flow and share their happiness.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-4 bg-freshGreen/15 rounded-2xl border-2 border-slate-800">
                <h4 className="font-poppins font-bold text-slate-800 mb-1">Our Mission</h4>
                <p className="font-inter text-sm text-slate-600">To inspire students to discover their inner strength and create a supportive peer network.</p>
              </div>
              <div className="p-4 bg-skyBlue/15 rounded-2xl border-2 border-slate-800">
                <h4 className="font-poppins font-bold text-slate-800 mb-1">Our Vision</h4>
                <p className="font-inter text-sm text-slate-600">A vibrant campus community where positive mental health and joy flow freely.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
