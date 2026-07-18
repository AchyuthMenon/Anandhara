import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Team from './components/Team';
import Mentors from './components/Mentors';
import Timeline from './components/Timeline';
import GroupActivities from './components/GroupActivities';
import HappinessWall from './components/HappinessWall';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import FloatingDoodles from './components/FloatingDoodles';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Entry Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-lightCream overflow-x-hidden selection:bg-lavender selection:text-slate-800">
      {/* Global Background Floating Animation Layer */}
      <FloatingDoodles />

      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Single Page Content */}
      <main>
        <Hero />
        <About />
        <Values />
        <Team />
        <Mentors />
        <Timeline />
        <GroupActivities />
        <HappinessWall />
        <QuoteSection />
      </main>

      {/* Footer Branding & Credits */}
      <Footer />
    </div>
    </>
  );
}
