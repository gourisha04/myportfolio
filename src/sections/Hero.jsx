import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-4 sm:pt-24 sm:pb-5 lg:pt-28 lg:pb-6 border-b border-ink-border/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Editorial Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-ivory-300/80 border border-ink-border text-ink">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Available for Opportunities</span>
              <span className="text-ink-muted">/</span>
              <span className="text-burnt font-semibold">2026</span>
            </div>

            {/* Name & Headline */}
            <div>
              <span className="block font-mono text-xs uppercase tracking-ultra text-ink-muted mb-1.5 font-medium">
                Gourisha Rathore — Portfolio
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tighter text-ink">
                I build <span className="font-serif italic font-normal text-burnt">thoughtful</span> digital experiences that solve real problems.
              </h1>
            </div>

            {/* Professional Positioning Strip */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-burnt font-semibold">
              <span>Frontend Developer</span>
              <span className="text-ink-muted">•</span>
              <span>React Developer</span>
              <span className="text-ink-muted">•</span>
              <span>MERN Stack Developer</span>
            </div>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed font-normal">
              I'm a Computer Science graduate and developer interested in building modern, responsive and user-focused web applications. I enjoy turning ideas into functional digital experiences through clean code and thoughtful design.
            </p>

            {/* Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="/resume.pdf"
                download="Gourisha_Rathore_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium border border-ink/20 text-ink bg-white/70 hover:bg-white hover:border-burnt hover:text-burnt transition-all duration-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-mono text-ink-muted hover:text-burnt transition-colors hover-link-underline"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social Links Strip */}
            <div className="pt-4 border-t border-ink-border/50 flex flex-wrap items-center gap-4 text-xs font-mono text-ink">
              <span className="text-ink-muted uppercase tracking-wider">
                Profiles:
              </span>
              <a
                href="https://github.com/gourisha04"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt transition-colors flex items-center gap-1.5"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github/gourisha04</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-burnt transition-colors flex items-center gap-1.5"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin</span>
              </a>
              <a
                href="mailto:gourisharathore@gmail.com"
                className="hover:text-burnt transition-colors flex items-center gap-1.5"
                title="Email"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>email</span>
              </a>
            </div>
          </div>

          {/* Personal Profile Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Outer decorative border with offset background */}
              <div className="absolute inset-0 bg-burnt/10 rounded-2xl transform rotate-2 translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Card Container — Exclusively personal profile card */}
              <div className="relative bg-white border border-ink-border rounded-2xl p-3 sm:p-3.5 shadow-editorial overflow-hidden">
                
                {/* Photo Frame */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] max-h-[340px] sm:max-h-[380px] bg-ivory-200">
                  <img
                    src="/profile.jpg"
                    alt="Gourisha Rathore"
                    className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent pointer-events-none" />
                  
                  {/* Overlay Name & Education Info */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <span className="font-mono text-[10px] uppercase tracking-ultra text-burnt-light font-semibold block mb-0.5">
                      Software Engineer
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-tight">
                      Gourisha Rathore
                    </h3>
                    <p className="text-[11px] text-gray-300 font-mono mt-0.5">
                      B.Tech CSE · MITS Gwalior
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Tech Stack Badge — Positioned cleanly outside at top-right without covering photo or text */}
              <div className="absolute -top-3.5 right-4 sm:right-6 z-10 bg-charcoal text-ivory-100 px-3 py-1.5 rounded-full text-xs font-mono shadow-md border border-charcoal-50 flex items-center gap-1.5 pointer-events-none whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-burnt" />
                <span>React · Vite · Node.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator — Snug & Naturally Positioned */}
        <div className="mt-4 pt-3 border-t border-ink-border/40 flex items-center justify-between text-xs font-mono text-ink-muted">
          <a
            href="#about"
            className="inline-flex items-center gap-2 hover:text-burnt transition-colors group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-burnt animate-pulse" />
            <span className="group-hover:translate-x-0.5 transition-transform">Scroll to Explore</span>
            <ArrowDown className="w-3 h-3 text-burnt opacity-70 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <span className="hidden sm:inline text-ink-muted text-[11px]">Frontend & MERN Developer</span>
        </div>
      </div>
    </section>
  );
}
