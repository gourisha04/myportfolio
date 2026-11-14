import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import { Cpu, Database, Layout, Terminal, Wrench } from 'lucide-react';

const categoryIcons = {
  "Frontend Engineering": Layout,
  "Backend & APIs": Cpu,
  "Databases & Storage": Database,
  "Developer Tooling & Deployment": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-16 lg:py-20 border-b border-[#A8B8F2]/30 bg-[#EAF0F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Skills"
          title="Technical Skills & Core Stack"
          subtitle="A focused toolkit developed through practical coursework, real client platforms, and full-stack builds."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Terminal;

            return (
              <div
                key={idx}
                className="group bg-[#F8FAFD] border border-[#A8B8F2]/35 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-[#7189E8]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#A8B8F2]/20">
                    <div className="w-10 h-10 rounded-xl bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[#24334D]">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#687891]">
                        {cat.skills.length} Technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-lg bg-[#EAF0F8]/70 border border-[#A8B8F2]/25 hover:bg-white hover:border-[#7189E8]/40 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display font-semibold text-xs sm:text-sm text-[#24334D] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7189E8]" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#7189E8] font-medium px-2 py-0.5 rounded bg-[#7189E8]/10">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#687891] mt-1 font-mono line-clamp-1">
                          {skill.highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
