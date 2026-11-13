import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Code2, Compass, GraduationCap, Laptop, Sparkles, Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="02 / ABOUT ME"
          title="Bridging design sensibility with engineering rigor."
          subtitle="A developer focused on crafting responsive web experiences that prioritize clarity, performance, and real-world utility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Story & Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
            <p>
              I graduated with a Bachelor of Technology in Computer Science Engineering from <strong className="text-ink font-semibold">Madhav Institute of Technology and Science (MITS), Gwalior</strong>. My foundation in computer science gave me an appreciation for structured algorithms, clean architecture, and reliable system design.
            </p>

            <p>
              Over the course of my academic journey and internship at <strong className="text-ink font-semibold">Gravit Infosystem</strong>, my passion consolidated around frontend and full-stack development. I enjoy translating complex user requirements into performant interfaces that feel natural and intuitive to navigate.
            </p>

            <p>
              Working as the lead full-stack developer on a real client platform—<strong className="text-ink font-semibold">Geet Studio</strong>—taught me how to handle business requirements end-to-end: from designing database schemas and multi-role access control to building responsive UI components and analytics engines that real people depend on every day.
            </p>

            <p>
              I believe great web development sits at the intersection of aesthetic restraint and technical discipline. I continuously refine my knowledge of the modern React ecosystem, performance optimizations, and web accessibility standards.
            </p>

            {/* Principles Grid */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-ink-border/80 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-3">
                  <Laptop className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-base text-ink mb-1">
                  Responsive & Accessible
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Every interface is built to function flawlessly across desktop, tablet, and mobile with semantic HTML and keyboard accessibility.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-ink-border/80 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-display font-bold text-base text-ink mb-1">
                  Clean Architecture
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Modular component design, sensible state management, and clear separation of concerns that teams can scale easily.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Facts & Cutout */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Cutout / Feature card */}
            <div className="relative rounded-2xl bg-ivory-300/60 border border-ink-border p-6 overflow-hidden">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="/logo.png"
                  alt="Personal Monogram"
                  className="w-12 h-12 object-contain rounded-full bg-white p-1 border border-ink-border"
                />
                <div>
                  <h4 className="font-display font-bold text-lg text-ink">
                    Gourisha Rathore
                  </h4>
                  <p className="text-xs font-mono text-burnt font-medium">
                    Full-Stack & Frontend Engineer
                  </p>
                </div>
              </div>

              {/* Quick Specs List */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-2 border-b border-ink-border/60">
                  <span className="text-ink-muted">Education</span>
                  <span className="text-ink font-semibold">B.Tech CSE (2023–2026)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-ink-border/60">
                  <span className="text-ink-muted">Academic Merit</span>
                  <span className="text-ink font-semibold">7.65 CGPA</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-ink-border/60">
                  <span className="text-ink-muted">Location</span>
                  <span className="text-ink font-semibold">Gwalior, M.P., India</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-ink-border/60">
                  <span className="text-ink-muted">Focus Areas</span>
                  <span className="text-ink font-semibold">React, Vite, Node, MERN</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-ink-muted">Work Status</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    Open to Job Offers
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Mindset Card */}
            <div className="p-6 rounded-2xl bg-charcoal text-ivory-100 border border-charcoal-50 shadow-md">
              <div className="flex items-center gap-2 text-burnt text-xs font-mono uppercase tracking-widest font-semibold mb-2">
                <Compass className="w-3.5 h-3.5" />
                <span>Professional Objective</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-normal">
                "Seeking opportunities with engineering teams where I can contribute to high-impact user experiences, write clean production code, and grow under experienced engineering mentorship."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
