import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Code2, Compass, Laptop, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-12 lg:py-14 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="About Me"
          title="Bridging design sensibility with engineering rigor."
          subtitle="A developer focused on crafting responsive web experiences that prioritize clarity, performance, and real-world utility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
            <p>
              I graduated with a Bachelor of Technology in Computer Science Engineering from <strong className="text-ink font-semibold">Madhav Institute of Technology and Science (MITS), Gwalior</strong>, following a Diploma in Computer Science Engineering with Distinction (8.03 CGPA) from <strong className="text-ink font-semibold">Government Women's Polytechnic College, Gwalior</strong>.
            </p>

            <p>
              During my internship at <strong className="text-ink font-semibold">Gravit Infosystem</strong>, I worked on frontend development tasks and strengthened my understanding of real-world development workflows. My interest consolidates around frontend and full-stack development — turning complex requirements into responsive, intuitive interfaces.
            </p>

            <p>
              I had the opportunity to build <strong className="text-ink font-semibold">Geet Studio</strong> — a full-stack web platform for a real client — covering everything from database schemas and authentication to responsive UI components and an analytics reporting system.
            </p>

            <p>
              I believe great web development sits at the intersection of aesthetic restraint and technical discipline. I continuously refine my knowledge of the modern React ecosystem, performance optimizations, and web accessibility standards.
            </p>

            {/* Principles Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white border border-ink-border/80 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-2.5">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <h4 className="font-display font-bold text-sm text-ink mb-1">
                  Responsive & Accessible
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Every interface is built to function flawlessly across desktop, tablet, and mobile with semantic HTML and keyboard accessibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-ink-border/80 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-2.5">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-sm text-ink mb-1">
                  Clean Architecture
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Modular component design, sensible state management, and clear separation of concerns that teams can scale easily.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Facts */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Specs Card */}
            <div className="rounded-2xl bg-ivory-300/60 border border-ink-border p-5">
              <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-ink-border/60">
                <img
                  src="/profile.jpg"
                  alt="Gourisha Rathore"
                  className="w-12 h-12 object-cover object-top rounded-full border-2 border-burnt/30 shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-ink">
                    Gourisha Rathore
                  </h4>
                  <p className="text-xs font-mono text-burnt font-medium">
                    Frontend & MERN Stack Developer
                  </p>
                </div>
              </div>

              {/* Quick Specs List */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/50">
                  <span className="text-ink-muted">Degree</span>
                  <span className="text-ink font-semibold">B.Tech CSE (2023–2026)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/50">
                  <span className="text-ink-muted">Diploma</span>
                  <span className="text-ink font-semibold">Polytechnic CSE (2020–2023)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/50">
                  <span className="text-ink-muted">Academic Merit</span>
                  <span className="text-ink font-semibold">7.65 CGPA / 8.03 CGPA</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-ink-border/50">
                  <span className="text-ink-muted">Location</span>
                  <span className="text-ink font-semibold">Gwalior, M.P., India</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-ink-muted">Work Status</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    Open to Job Offers
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Mindset Card */}
            <div className="p-5 rounded-2xl bg-charcoal text-ivory-100 border border-charcoal-50 shadow-sm">
              <div className="flex items-center gap-2 text-burnt text-xs font-mono uppercase tracking-widest font-semibold mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Professional Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                "Seeking opportunities with engineering teams where I can contribute to high-impact user experiences, write clean production code, and grow under experienced engineering mentorship."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
