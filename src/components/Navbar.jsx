import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md border-b border-ink-border/70 py-2.5 sm:py-3 shadow-sm'
          : 'bg-ivory/80 backdrop-blur-sm py-3.5 sm:py-4 border-b border-ink-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Monogram Wordmark Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-ink focus:outline-none"
          aria-label="Gourisha Rathore Homepage"
        >
          <div className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center bg-white font-display font-extrabold text-base tracking-tight group-hover:border-burnt group-hover:text-burnt transition-colors shadow-xs">
            GR
          </div>
          <div className="hidden sm:block text-left">
            <span className="block font-display font-bold text-xs tracking-tight text-ink group-hover:text-burnt transition-colors leading-tight">
              Gourisha Rathore
            </span>
            <span className="block text-[11px] font-mono text-ink-muted leading-tight">
              Frontend / MERN Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links — Uniform Spacing & Alignment */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs sm:text-sm font-medium text-ink">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-md text-ink/80 hover:text-burnt hover:bg-ivory-300/40 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA: Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Gourisha_Rathore_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide border border-ink/20 hover:border-burnt text-ink hover:text-white hover:bg-burnt transition-all duration-200 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-ink hover:text-burnt focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] bottom-0 bg-ivory/98 backdrop-blur-xl border-b border-ink-border px-6 py-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col gap-1 text-base font-medium">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ink hover:text-burnt px-3 py-2 rounded-lg hover:bg-ivory-200/60 font-display text-lg transition-colors"
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink/80 hover:text-burnt px-3 py-2 rounded-lg hover:bg-ivory-200/60 transition-colors text-base tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-ink-border/60 flex flex-col gap-3 pb-8">
            <a
              href="/resume.pdf"
              download="Gourisha_Rathore_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium border border-ink/30 text-ink hover:border-burnt hover:text-burnt transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
