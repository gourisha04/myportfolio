import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import { Check, Cpu, Database, Layout, Terminal, Wrench } from 'lucide-react';

const categoryIcons = {
  "Frontend Engineering": Layout,
  "Backend & APIs": Cpu,
  "Databases & Storage": Database,
  "Developer Tooling & Deployment": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="05 / TECHNICAL STACK"
          title="Skills & Technologies"
          subtitle="A focused, verified toolkit for building high-performance modern web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Terminal;

            return (
              <div
                key={idx}
                className="bg-white border border-ink-border rounded-2xl p-6 sm:p-8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5 pb-4 border-b border-ink-border/70">
                  <div className="w-10 h-10 rounded-xl bg-ivory-200 text-burnt flex items-center justify-center shrink-0 border border-ink-border/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-ink">
                      {cat.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted mt-0.5 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-ivory-100/60 border border-ink-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 hover:bg-ivory-200/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-burnt" />
                        <span className="font-display font-semibold text-sm text-ink">
                          {skill.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-ink-muted">
                          {skill.highlight}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white border border-ink-border text-burnt font-semibold">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Note */}
        <div className="mt-12 p-6 rounded-2xl bg-charcoal text-ivory-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-ultra text-burnt font-semibold">
              Engineering Mindset
            </span>
            <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
              I prioritize clean fundamentals (vanilla JavaScript, semantic DOM, component composition) over relying blindly on high-level abstractions or superficial percentage bars.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 shrink-0">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Production Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
