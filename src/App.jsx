import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#EAF0F8] text-[#24334D] selection:bg-[#7189E8] selection:text-white">
      {/* Editorial tactile noise grain overlay */}
      <div className="editorial-grain" aria-hidden="true" />

      {/* Interactive custom cursor for desktop */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections in requested sequence */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
