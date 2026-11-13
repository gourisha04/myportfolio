import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50 bg-ivory-100/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="06 / ACADEMIC BACKGROUND"
          title="Education & Credentials"
          subtitle="Formal foundation in computer science, software design, and engineering fundamentals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-white border border-ink-border rounded-2xl p-6 sm:p-7 shadow-editorial flex flex-col justify-between hover:shadow-editorial-hover transition-all duration-300"
            >
              <div>
                {/* Top Badge & CGPA Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-burnt/10 text-burnt">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{edu.badge}</span>
                  </span>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ivory-200 border border-ink-border text-ink font-mono font-bold text-xs sm:text-sm">
                    <Award className="w-3.5 h-3.5 text-burnt" />
                    <span>{edu.grade}</span>
                  </div>
                </div>

                {/* Degree & Field */}
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-burnt mt-1">
                  {edu.field}
                </p>
                
                {/* Institution */}
                <p className="text-sm font-medium text-ink-muted mt-1 mb-4">
                  {edu.institution}
                </p>

                {/* Date & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted pb-4 border-b border-ink-border/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-burnt" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-burnt" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights List */}
                <div className="pt-4 space-y-2.5">
                  <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold">
                    Program Focus:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-burnt shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
