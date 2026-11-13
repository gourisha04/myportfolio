import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:py-36 flex flex-col justify-center overflow-hidden border-b border-ink-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-ivory-300/80 border border-ink-border text-ink">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Available for Opportunities</span>
              <span className="text-ink-muted">/</span>
              <span className="text-burnt font-semibold">2026</span>
            </div>

            {/* Name & Positioning */}
            <div>
              <span className="block font-mono text-xs sm:text-sm uppercase tracking-ultra text-ink-muted mb-2 font-medium">
                Gourisha Rathore — Portfolio
              </span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tighter text-ink">
                I build <span className="font-serif italic font-normal text-burnt">thoughtful</span> digital experiences that solve real problems.
              </h1>
            </div>

            {/* Professional Positioning Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs sm:text-sm text-burnt font-semibold">
              <span>Frontend Developer</span>
              <span className="text-ink-muted">•</span>
              <span>React Developer</span>
              <span className="text-ink-muted">•</span>
              <span>MERN Stack Developer</span>
            </div>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed font-normal">
              I'm a Computer Science graduate and developer interested in building modern, responsive and user-focused web applications. I enjoy turning ideas into functional digital experiences through clean code and thoughtful design.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Gourisha_Rathore_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-mono font-medium border border-ink/20 text-ink bg-white/70 hover:bg-white hover:border-burnt hover:text-burnt transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-mono text-ink-muted hover:text-burnt transition-colors hover-link-underline"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Proof & Profiles */}
            <div className="pt-6 border-t border-ink-border/60 flex items-center gap-6">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                Profiles:
              </span>
              <div className="flex items-center gap-4 text-ink">
                <a
                  href="https://github.com/gourisha04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burnt transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                  <span>github/gourisha04</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-burnt transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin</span>
                </a>
                <a
                  href="mailto:gourisharathore@gmail.com"
                  className="hover:text-burnt transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                  <span>email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Creative Portrait & Brand Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative border with offset background */}
              <div className="absolute inset-0 bg-burnt/10 rounded-2xl transform rotate-2 translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Card Container */}
              <div className="relative bg-white border border-ink-border rounded-2xl p-4 sm:p-5 shadow-editorial overflow-hidden">
                
                {/* Photo Frame with subtle grain */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-ivory-200">
                  <img
                    src="/profile.jpg"
                    alt="Gourisha Rathore"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                  
                  {/* Overlay Name Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-mono text-xs uppercase tracking-ultra text-burnt-light font-semibold block mb-0.5">
                      Software Engineer
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      Gourisha Rathore
                    </h3>
                    <p className="text-xs text-gray-300 font-mono mt-0.5">
                      B.Tech CSE • MITS Gwalior
                    </p>
                  </div>
                </div>

                {/* Floating Metric / Highlight Tag */}
                <div className="mt-4 pt-3 border-t border-ink-border/60 flex items-center justify-between text-xs font-mono text-ink">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-burnt" />
                    <span className="font-semibold">Client Project Verified</span>
                  </div>
                  <span className="text-ink-muted">Geet Studio</span>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-4 -left-4 bg-charcoal text-ivory-100 px-4 py-2 rounded-xl text-xs font-mono shadow-lg border border-charcoal-50 hidden sm:flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-burnt" />
                <span>React • Vite • Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex items-center justify-between text-xs font-mono text-ink-muted border-t border-ink-border/40 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-burnt" />
            <span>Scroll to explore</span>
          </div>
          <span className="hidden sm:inline">01 / 07 — Overview</span>
        </div>
      </div>
    </section>
  );
}
