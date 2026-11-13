import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory-100 pt-16 pb-12 border-t border-charcoal-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-charcoal-50/80">
          
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-burnt text-white font-display font-extrabold text-sm flex items-center justify-center">
                GR
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Gourisha Rathore
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Frontend & MERN Stack Developer building responsive, user-centered web applications with clean code, modern design, and robust architecture.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for full-time frontend and full-stack engineering roles</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-ultra text-burnt font-semibold">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-burnt transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-burnt transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-burnt transition-colors">
                  Experience & Internship
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-burnt transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-burnt transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Location */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-xs uppercase tracking-ultra text-burnt font-semibold">
              Connect
            </span>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-burnt transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-burnt" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gourisha04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-burnt transition-colors"
                >
                  <Github className="w-4 h-4 text-burnt" />
                  <span>GitHub (@gourisha04)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gourisharathore@gmail.com"
                  className="flex items-center gap-2 hover:text-burnt transition-colors"
                >
                  <Mail className="w-4 h-4 text-burnt" />
                  <span>gourisharathore@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Gourisha Rathore. Designed & developed with React, Vite & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <span>Gwalior, Madhya Pradesh, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-300 hover:text-burnt transition-colors group cursor-pointer"
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
