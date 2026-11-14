import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 lg:py-20 border-b border-[#A8B8F2]/30 bg-[#EAF0F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Education"
          title="Academic Background"
          subtitle="Formal engineering education and technical coursework."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-[#7189E8]/40 ml-3 sm:ml-6 pl-4 sm:pl-8 space-y-6 sm:space-y-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative group">

                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-[#7189E8] bg-[#EAF0F8] flex items-center justify-center group-hover:scale-125 transition-transform duration-200 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#7189E8]" />
                </div>

                {/* Card */}
                <div className="bg-[#F8FAFD] border border-[#A8B8F2]/35 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#7189E8]/50 transition-all duration-300">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#7189E8]/10 text-[#7189E8] mb-1.5">
                        {edu.badge}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-[#24334D]">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-[#7189E8] mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#687891]">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EAF0F8] border border-[#A8B8F2]/30">
                        <Calendar className="w-3.5 h-3.5 text-[#7189E8]" />
                        <span>{edu.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#7189E8]" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Grade Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EAF0F8] border border-[#A8B8F2]/30 text-xs font-mono font-semibold text-[#24334D] mb-3 shadow-xs">
                    <Award className="w-3.5 h-3.5 text-[#7189E8]" />
                    <span>{edu.grade}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#687891]">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7189E8] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
