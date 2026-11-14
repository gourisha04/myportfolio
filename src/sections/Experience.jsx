import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50 bg-ivory-100/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Experience"
          title="Work Experience"
          subtitle="Internship experience and collaborative software engineering."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-burnt/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                
                {/* Node dot on the timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-burnt bg-white flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-burnt" />
                </div>

                {/* Content Card */}
                <div className="bg-white border border-ink-border rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-burnt/30 transition-all duration-300">
                  
                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-xs sm:text-sm font-semibold text-burnt">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <span className="text-ink-muted font-normal">•</span>
                        <span className="font-mono text-ink-muted font-normal">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-ivory-100 border border-ink-border/50">
                        <Calendar className="w-3.5 h-3.5 text-burnt" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-burnt" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-ink-muted">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-burnt shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="pt-3 border-t border-ink-border/50 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-ink-muted mr-1">Skills:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-ivory-100 text-ink border border-ink-border/50"
                      >
                        {tech}
                      </span>
                    ))}
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
