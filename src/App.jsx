import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Team from './components/Team';
import Timeline from './components/Timeline';
import HappinessWall from './components/HappinessWall';
import QuoteSection from './components/QuoteSection';
import Footer from './components/Footer';
import FloatingDoodles from './components/FloatingDoodles';

export default function App() {
  return (
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
        <Timeline />
        <HappinessWall />
        <QuoteSection />
      </main>

      {/* Footer Branding & Credits */}
      <Footer />
    </div>
  );
}
