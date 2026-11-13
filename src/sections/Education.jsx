import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 border-b border-ink-border/50 bg-ivory-100/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="06 / ACADEMIC BACKGROUND"
          title="Education & Credentials"
          subtitle="Formal foundation in computer science, software design, and engineering fundamentals."
        />

        <div className="max-w-4xl space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white border border-ink-border rounded-2xl p-6 sm:p-10 shadow-editorial"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-ink-border/70">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-burnt/10 text-burnt mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Graduated</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                    {edu.degree}
                  </h3>
                  <p className="text-base font-semibold text-burnt">
                    {edu.field}
                  </p>
                  <p className="text-sm font-medium text-ink-muted">
                    {edu.institution}
                  </p>
                </div>

                <div className="sm:text-right space-y-2 font-mono text-xs">
                  <div className="inline-block px-3.5 py-1.5 rounded-lg bg-ivory-200 border border-ink-border text-ink font-bold text-sm">
                    {edu.grade}
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 text-ink-muted">
                    <Calendar className="w-3.5 h-3.5 text-burnt" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 text-ink-muted">
                    <MapPin className="w-3.5 h-3.5 text-burnt" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights & Coursework */}
              <div className="pt-6 space-y-3">
                <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-burnt" />
                  Key Academic Highlights:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-burnt shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
