import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Education"
          title="Academic Background"
          subtitle="Formal engineering education and technical coursework."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-burnt/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="relative group">
                
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-burnt bg-white flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-burnt" />
                </div>

                {/* Card */}
                <div className="bg-ivory-50 border border-ink-border rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-burnt/30 transition-all duration-300">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-burnt/10 text-burnt mb-1.5">
                        {edu.badge}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-burnt mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-ink-muted">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-ink-border/60">
                        <Calendar className="w-3.5 h-3.5 text-burnt" />
                        <span>{edu.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-burnt" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Grade Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-ink-border/80 text-xs font-mono font-semibold text-ink mb-3 shadow-xs">
                    <Award className="w-3.5 h-3.5 text-burnt" />
                    <span>{edu.grade}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-ink-muted">
                    {edu.highlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-burnt shrink-0 mt-0.5" />
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
