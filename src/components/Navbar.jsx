import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-ink-border/70 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Monogram Wordmark Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-ink focus:outline-none"
          aria-label="Gourisha Rathore Homepage"
        >
          <div className="w-10 h-10 rounded-full border border-ink/20 flex items-center justify-center bg-ivory font-display font-extrabold text-lg tracking-tight group-hover:border-burnt group-hover:text-burnt transition-colors">
            GR
          </div>
          <div className="hidden sm:block text-left">
            <span className="block font-display font-bold text-sm tracking-tight text-ink group-hover:text-burnt transition-colors">
              Gourisha Rathore
            </span>
            <span className="block text-xs font-mono text-ink-muted">
              Frontend / MERN Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-ink/80 hover:text-burnt hover-link-underline transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA: Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/resume.pdf"
            download="Gourisha_Rathore_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium tracking-wide border border-ink/20 hover:border-burnt text-ink hover:text-white hover:bg-burnt transition-all duration-200"
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
          className="md:hidden p-2 rounded-lg text-ink hover:text-burnt focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-ivory/98 backdrop-blur-xl border-b border-ink-border px-6 py-8 shadow-xl transition-all">
          <nav className="flex flex-col gap-5 text-base font-medium">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ink hover:text-burnt py-1 font-display text-lg"
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink/80 hover:text-burnt py-1 text-base tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-ink-border/60 flex flex-col gap-3">
              <a
                href="/resume.pdf"
                download="Gourisha_Rathore_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium border border-ink/30 text-ink hover:border-burnt hover:text-burnt transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
