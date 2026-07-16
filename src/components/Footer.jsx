import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 border-t-3 border-slate-800 relative overflow-hidden">
      {/* Decorative colored strip on top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sunshineYellow via-skyBlue to-freshGreen" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Branding */}
        <div className="flex items-center space-x-3">
          <svg className="w-14 h-8 text-sunshineYellow fill-current" viewBox="0 0 100 50">
            {/* Left Face */}
            <circle cx="25" cy="25" r="20" fill="#FFD54F" stroke="#ffffff" strokeWidth="3" />
            <circle cx="17" cy="20" r="2.5" fill="#1E293B" />
            <circle cx="33" cy="20" r="2.5" fill="#1E293B" />
            <path d="M 15 26 Q 25 38 35 26" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Right Face */}
            <circle cx="75" cy="25" r="20" fill="#FFD54F" stroke="#ffffff" strokeWidth="3" />
            <circle cx="67" cy="20" r="2.5" fill="#1E293B" />
            <circle cx="83" cy="20" r="2.5" fill="#1E293B" />
            <path d="M 65 26 Q 75 38 85 26" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <div>
            <h4 className="font-poppins font-bold text-xl tracking-wider">ANANDHARA</h4>
            <span className="text-xs text-slate-400 font-medium">The Flow of Happiness</span>
          </div>
        </div>

        {/* Center: Message */}
        <div className="flex items-center text-slate-400 text-sm font-semibold">
          Made by Team Anandhara
        </div>

        {/* Right Side: Navigation & Copyright */}
        <div className="text-center md:text-right">
          <p className="text-slate-500 text-xs mt-2 font-medium">
            © {new Date().getFullYear()} Anandhara. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
