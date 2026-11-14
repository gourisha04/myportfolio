import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  ChevronRight,
  Linkedin,
  Github
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Cpu },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
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

  // Prevent background scroll when mobile drawer is open
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

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#F8FAFD]/95 backdrop-blur-md border-b border-[#A8B8F2]/30 py-2.5 sm:py-3 shadow-md shadow-[#24334D]/5'
            : 'bg-[#EAF0F8]/85 backdrop-blur-sm py-3.5 sm:py-4 border-b border-[#A8B8F2]/25'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Monogram Wordmark Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-[#24334D] focus:outline-none"
            aria-label="Gourisha Rathore Homepage"
          >
            <div className="w-9 h-9 rounded-full border border-[#7189E8]/40 flex items-center justify-center bg-[#F8FAFD] text-[#7189E8] font-display font-extrabold text-base tracking-tight group-hover:border-[#7189E8] group-hover:shadow-glow-subtle transition-all shadow-xs">
              GR
            </div>
            <div className="text-left">
              <span className="block font-display font-bold text-xs sm:text-sm tracking-tight text-[#24334D] group-hover:text-[#7189E8] transition-colors leading-tight">
                Gourisha Rathore
              </span>
              <span className="block text-[10px] sm:text-[11px] font-mono text-[#687891] leading-tight">
                Frontend / MERN Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs sm:text-sm font-medium text-[#24334D]">
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-[#687891] hover:text-[#7189E8] hover:bg-[#F8FAFD] transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA: Resume Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Gourisha_Rathore_Resume.pdf"
              download="Gourisha_Rathore_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide border border-[#7189E8] text-[#7189E8] bg-[#F8FAFD] hover:bg-[#7189E8] hover:text-white transition-all duration-200 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-xl text-[#24334D] hover:text-[#7189E8] hover:bg-[#F8FAFD] border border-[#A8B8F2]/30 focus:outline-none transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Side Drawer Navigation */}
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-[#24334D]/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Drawer Container */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-[290px] max-w-[85vw] bg-[#F8FAFD] border-l border-[#A8B8F2]/35 z-50 shadow-2xl flex flex-col justify-between p-5 transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile Navigation"
      >
        <div>
          {/* Drawer Header: Logo + Close Button */}
          <div className="flex items-center justify-between pb-4 border-b border-[#A8B8F2]/25">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#7189E8]/40 flex items-center justify-center bg-[#EAF0F8] text-[#7189E8] font-display font-extrabold text-xs">
                GR
              </div>
              <div>
                <span className="block font-display font-bold text-xs tracking-tight text-[#24334D]">
                  Gourisha Rathore
                </span>
                <span className="block text-[10px] font-mono text-[#687891]">
                  Portfolio Menu
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-[#687891] hover:text-[#24334D] hover:bg-[#EAF0F8] transition-colors focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="mt-4 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#24334D] hover:text-[#7189E8] hover:bg-[#EAF0F8] active:bg-[#EAF0F8] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#EAF0F8] text-[#7189E8] flex items-center justify-center group-hover:bg-[#7189E8] group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="tracking-wide font-sans">{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#A8B8F2] group-hover:text-[#7189E8] group-hover:translate-x-0.5 transition-all" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer: Resume & Social Links */}
        <div className="pt-4 border-t border-[#A8B8F2]/25 space-y-3">
          <a
            href="/Gourisha_Rathore_Resume.pdf"
            download="Gourisha_Rathore_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[#7189E8] text-white hover:bg-[#5B74D8] transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* Social Icons row */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <a
              href="https://www.linkedin.com/in/gourisha-rathore-b80826294"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#EAF0F8] border border-[#A8B8F2]/30 flex items-center justify-center text-[#687891] hover:text-[#7189E8] hover:border-[#7189E8] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/gourisha04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#EAF0F8] border border-[#A8B8F2]/30 flex items-center justify-center text-[#687891] hover:text-[#7189E8] hover:border-[#7189E8] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:gourisharathore@gmail.com"
              className="w-8 h-8 rounded-lg bg-[#EAF0F8] border border-[#A8B8F2]/30 flex items-center justify-center text-[#687891] hover:text-[#7189E8] hover:border-[#7189E8] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center pt-1">
            <p className="text-[10px] font-mono text-[#687891]">
              © {new Date().getFullYear()} Gourisha Rathore
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
