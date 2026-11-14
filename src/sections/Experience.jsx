import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-16 lg:py-20 border-b border-[#A8B8F2]/30 bg-[#EAF0F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Experience"
          title="Work Experience"
          subtitle="Internship experience and collaborative software engineering."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-[#7189E8]/40 ml-3 sm:ml-6 pl-4 sm:pl-8 space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">

                {/* Node dot centered on the timeline line */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[#7189E8] bg-[#EAF0F8] flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7189E8]" />
                </div>

                {/* Content Card */}
                <div className="bg-[#F8FAFD] border border-[#A8B8F2]/35 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#7189E8]/50 transition-all duration-300">

                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-xl text-[#24334D]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 text-xs sm:text-sm font-semibold text-[#7189E8] flex-wrap">
                        <Briefcase className="w-3.5 h-3.5 shrink-0" />
                        <span>{exp.company}</span>
                        <span className="text-[#687891] font-normal">•</span>
                        <span className="font-mono text-[#687891] font-normal text-xs">{exp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#687891]">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EAF0F8] border border-[#A8B8F2]/30">
                        <Calendar className="w-3.5 h-3.5 text-[#7189E8]" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#7189E8]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#687891] leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Responsibilities list */}
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-[#687891]">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7189E8] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="pt-3 border-t border-[#A8B8F2]/25 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-[#687891] mr-1">Skills:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EAF0F8] text-[#24334D] border border-[#A8B8F2]/35"
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
