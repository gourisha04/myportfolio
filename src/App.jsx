import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ivory text-ink selection:bg-burnt selection:text-white">
      {/* Editorial tactile noise grain overlay */}
      <div className="editorial-grain" aria-hidden="true" />

      {/* Interactive custom cursor for desktop */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
