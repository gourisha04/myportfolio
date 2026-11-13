import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50 bg-ivory-100/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="04 / CAREER HISTORY"
          title="Professional Experience"
          subtitle="Work experience, internships, and collaborative software engineering."
        />

        <div className="relative max-w-4xl">
          {/* Vertical Timeline Rule */}
          <div className="absolute top-2 bottom-2 left-4 sm:left-6 w-0.5 bg-ink-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 sm:pl-14">
                
                {/* Timeline Node Dot */}
                <div className="absolute left-2 sm:left-4 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-burnt bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-burnt" />
                </div>

                {/* Experience Card */}
                <div className="bg-white border border-ink-border rounded-2xl p-5 sm:p-7 shadow-editorial hover:shadow-editorial-hover transition-all duration-300">
                  
                  {/* Top Row: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-sm font-semibold text-burnt">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <span className="text-ink-muted font-normal">•</span>
                        <span className="text-xs font-mono text-ink-muted font-normal">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-ink-muted">
                      <span className="inline-flex items-center gap-1.5 bg-ivory-200 px-2.5 py-1 rounded border border-ink-border/60">
                        <Calendar className="w-3.5 h-3.5 text-burnt" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-burnt" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2.5">
                      Core Responsibilities & Impact:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-ink-muted">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-burnt shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">
                      Technologies Applied:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-ivory-200 text-ink border border-ink-border/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
