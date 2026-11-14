import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#DFE8F5] text-[#24334D] pt-12 pb-8 border-t border-[#A8B8F2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#A8B8F2]/25">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#7189E8] text-white font-display font-extrabold text-xs flex items-center justify-center shadow-sm">
                GR
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-[#24334D]">
                Gourisha Rathore
              </span>
            </div>
            <p className="text-[#687891] text-xs sm:text-sm max-w-md leading-relaxed">
              Frontend & MERN Stack Developer building responsive, user-centered web applications with clean code, modern design, and robust architecture.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#687891]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-sm" />
              <span>Available for full-time frontend and full-stack engineering roles</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="block font-mono text-xs uppercase tracking-wider text-[#7189E8] font-semibold">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#687891]">
              <li>
                <a href="#about" className="hover:text-[#7189E8] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#7189E8] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#7189E8] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#7189E8] transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#7189E8] transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#7189E8] transition-colors">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Location */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="block font-mono text-xs uppercase tracking-wider text-[#7189E8] font-semibold">
              Connect
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-[#687891]">
              <li>
                <a
                  href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#7189E8] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#7189E8]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gourisha04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#7189E8] transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#7189E8]" />
                  <span>GitHub (@gourisha04)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gourisharathore@gmail.com"
                  className="flex items-center gap-2 hover:text-[#7189E8] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#7189E8]" />
                  <span>gourisharathore@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#687891]">
          <p>
            &copy; {new Date().getFullYear()} Gourisha Rathore. Designed & Developed by Gourisha.
          </p>
          <div className="flex items-center gap-5">
            <span>Gwalior, Madhya Pradesh, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#687891] hover:text-[#7189E8] transition-colors group cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
