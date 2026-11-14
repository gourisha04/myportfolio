import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, User, Briefcase } from 'lucide-react';
import HeroParticles from '../components/HeroParticles';
import TypewriterRoles from '../components/TypewriterRoles';
import HeroAvatar from '../components/HeroAvatar';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 border-b border-ink-border/50 overflow-hidden bg-gradient-to-b from-ivory via-ivory-100 to-ivory"
    >
      {/* Interactive Particle Network Background */}
      <HeroParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Greeting, Typing Text, Brief Intro & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/90 border border-ink-border text-ink shadow-xs backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Available for Opportunities</span>
              <span className="text-ink-muted">/</span>
              <span className="text-burnt font-semibold">2026</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-ink leading-[1.15]">
                Hi There, <span className="inline-block animate-wave origin-bottom-right">👋</span>
                <br />
                I'm <span className="text-burnt">Gourisha Rathore</span>
              </h1>
              
              {/* Animated Typing Role Line */}
              <div className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-ink pt-1 flex items-center justify-center lg:justify-start gap-2">
                <span>I am into</span>
                <TypewriterRoles />
              </div>
            </div>

            {/* Short 2-3 Line Introduction */}
            <p className="text-sm sm:text-base md:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I'm a Computer Science graduate and developer passionate about crafting modern, responsive, and user-centric web applications through clean code and thoughtful design.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <User className="w-4 h-4" />
                <span>About Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-mono font-medium border border-ink/20 text-ink bg-white/80 hover:bg-white hover:border-burnt hover:text-burnt transition-all duration-200 shadow-xs hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Circular Social Media Icons */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted mr-1">
                Connect:
              </span>
              
              <a
                href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-ink-border flex items-center justify-center text-ink hover:text-burnt hover:border-burnt hover:bg-burnt/5 shadow-xs hover:shadow-sm hover:-translate-y-1 transition-all duration-200"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/gourisha04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-ink-border flex items-center justify-center text-ink hover:text-burnt hover:border-burnt hover:bg-burnt/5 shadow-xs hover:shadow-sm hover:-translate-y-1 transition-all duration-200"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:gourisharathore@gmail.com"
                className="w-10 h-10 rounded-full bg-white border border-ink-border flex items-center justify-center text-ink hover:text-burnt hover:border-burnt hover:bg-burnt/5 shadow-xs hover:shadow-sm hover:-translate-y-1 transition-all duration-200"
                title="Send Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Cartoon Avatar Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroAvatar />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 pt-4 flex items-center justify-center lg:justify-start">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-mono text-ink-muted hover:text-burnt transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-burnt animate-pulse" />
            <span className="group-hover:translate-x-0.5 transition-transform">Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 text-burnt group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
