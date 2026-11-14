import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Download, ArrowUpRight, Code2, Server, Award, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          tag="About Me"
          title="Bridging design sensibility with engineering rigor."
          subtitle="A developer dedicated to crafting fast, responsive, and intuitive web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Quick Profile Card & Stats */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl bg-ivory-100 border border-ink-border p-5 sm:p-6 shadow-sm">
              
              {/* Profile Header */}
              <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-ink-border/60">
                <img
                  src="/profile.jpg"
                  alt="Gourisha Rathore"
                  className="w-14 h-14 object-cover object-top rounded-full border-2 border-burnt/40 shadow-sm"
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-ink">
                    Gourisha Rathore
                  </h3>
                  <p className="text-xs font-mono text-burnt font-semibold">
                    Frontend & MERN Developer
                  </p>
                </div>
              </div>

              {/* Quick Details Table */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/40">
                  <span className="text-ink-muted flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-burnt" />
                    Degree:
                  </span>
                  <span className="text-ink font-semibold">B.Tech CSE (7.65 CGPA)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/40">
                  <span className="text-ink-muted flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-burnt" />
                    Diploma:
                  </span>
                  <span className="text-ink font-semibold">Polytechnic (8.03 CGPA)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/40">
                  <span className="text-ink-muted flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-burnt" />
                    Location:
                  </span>
                  <span className="text-ink font-semibold">Gwalior, M.P., India</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-ink-muted">Status:</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Open for Job Offers
                  </span>
                </div>
              </div>

              {/* Resume Download CTA */}
              <div className="pt-5 mt-3 border-t border-ink-border/60">
                <a
                  href="/resume.pdf"
                  download="Gourisha_Rathore_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium bg-charcoal text-white hover:bg-burnt transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Complete Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Concise Bio & Technical Highlights */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Short Bio */}
            <div className="space-y-3.5 text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
              <p>
                I graduated with a Bachelor of Technology in Computer Science Engineering from <strong className="text-ink font-semibold">Madhav Institute of Technology and Science (MITS), Gwalior</strong>, following a Diploma with Distinction (8.03 CGPA) from <strong className="text-ink font-semibold">Government Women's Polytechnic College</strong>.
              </p>
              <p>
                I focus on modern frontend and MERN stack engineering — having engineered real-world client platforms like <strong className="text-ink font-semibold">Geet Studio</strong> and AI-integrated systems like <strong className="text-ink font-semibold">Parinay</strong>. My goal is to build clean, maintainable, and high-performance digital experiences.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-ivory-100/70 border border-ink-border/80 hover:border-burnt/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-2.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-ink mb-1">
                  Frontend & React
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Responsive user interfaces with React, Tailwind CSS, clean state management, and web accessibility standards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-ivory-100/70 border border-ink-border/80 hover:border-burnt/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-2.5">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-ink mb-1">
                  Backend & Database
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Robust REST APIs using Express.js and Node.js, MongoDB document modeling, JWT auth, and third-party integrations.
                </p>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="p-4 rounded-xl bg-charcoal text-ivory-100 border border-charcoal-50 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs font-mono">
                <span className="text-burnt font-semibold">Ready for Full-Time Roles:</span>
                <span className="text-gray-300 ml-2">Frontend Developer • React Developer • MERN Stack</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-burnt hover:text-white transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
