import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, User, Briefcase } from 'lucide-react';
import HeroParticles from '../components/HeroParticles';
import TypewriterRoles from '../components/TypewriterRoles';
import HeroAvatar from '../components/HeroAvatar';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 border-b border-[#A8B8F2]/30 overflow-hidden bg-[#EAF0F8]"
    >
      {/* Interactive Particle Network Background */}
      <HeroParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Column: Greeting, Typing Text, Brief Intro & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-[#F8FAFD]/90 border border-[#A8B8F2]/40 text-[#24334D] shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Available for Opportunities</span>
              <span className="text-[#687891]">/</span>
              <span className="text-[#7189E8] font-semibold">2026</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] tracking-tight text-[#24334D] leading-[1.18] sm:leading-[1.15] break-words">
                Hi There, <span className="inline-block animate-wave origin-bottom-right">👋</span>
                <br />
                I'm <span className="text-[#7189E8]">Gourisha Rathore</span>
              </h1>

              {/* Animated Typing Role Line */}
              <div className="font-display font-bold text-base xs:text-lg sm:text-2xl md:text-3xl text-[#24334D] pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                <span>I am into</span>
                <TypewriterRoles />
              </div>
            </div>

            {/* Short 2-3 Line Introduction */}
            <p className="text-xs sm:text-base md:text-lg text-[#687891] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal px-1 sm:px-0">
              I'm a Computer Science graduate and developer passionate about crafting modern, responsive, and user-centric web applications through clean code and thoughtful design.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-semibold bg-[#7189E8] text-white hover:bg-[#5B74D8] transition-all duration-200 shadow-sm hover:shadow-glow-subtle hover:-translate-y-0.5 min-w-[130px]"
              >
                <User className="w-4 h-4" />
                <span>About Me</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium border border-[#A8B8F2]/50 text-[#24334D] bg-[#F8FAFD] hover:bg-[#EEF4FC] hover:border-[#7189E8] hover:text-[#7189E8] transition-all duration-200 shadow-xs hover:-translate-y-0.5 min-w-[130px]"
              >
                <Briefcase className="w-4 h-4" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Circular Social Media Icons */}
            <div className="pt-2 sm:pt-3 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 flex-wrap">
              <span className="text-xs font-mono uppercase tracking-wider text-[#687891] mr-1">
                Connect:
              </span>

              <a
                href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F8FAFD] border border-[#A8B8F2]/40 flex items-center justify-center text-[#687891] hover:text-[#7189E8] hover:border-[#7189E8] hover:shadow-glow-subtle hover:-translate-y-1 transition-all duration-200 shadow-xs"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/gourisha04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F8FAFD] border border-[#A8B8F2]/40 flex items-center justify-center text-[#687891] hover:text-[#7189E8] hover:border-[#7189E8] hover:shadow-glow-subtle hover:-translate-y-1 transition-all duration-200 shadow-xs"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:gourisharathore@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F8FAFD] border border-[#A8B8F2]/40 flex items-center justify-center text-[#687891] hover:text-[#7189E8] hover:border-[#7189E8] hover:shadow-glow-subtle hover:-translate-y-1 transition-all duration-200 shadow-xs"
                title="Send Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Cartoon Avatar Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
            <HeroAvatar />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 pt-4 flex items-center justify-center lg:justify-start">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#687891] hover:text-[#7189E8] transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7189E8] animate-pulse" />
            <span className="group-hover:translate-x-0.5 transition-transform">Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#7189E8] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
