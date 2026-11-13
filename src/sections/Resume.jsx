import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Download, ExternalLink, FileText, CheckCircle2, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Resume"
          title="Curriculum Vitae & Resume"
          subtitle="Download or view my complete technical resume formatted for recruitment review."
        />

        <div className="bg-white border border-ink-border rounded-3xl p-6 sm:p-8 lg:p-10 shadow-editorial max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Document Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs bg-ivory-100 border border-ink-border rounded-2xl p-5 shadow-sm text-center group hover:border-burnt/60 transition-colors">
                
                {/* Paper sheet effect */}
                <div className="w-14 h-16 mx-auto rounded-lg bg-burnt/10 border border-burnt/30 flex items-center justify-center text-burnt mb-3 group-hover:scale-105 transition-transform">
                  <FileText className="w-7 h-7" />
                </div>

                <h4 className="font-display font-bold text-base text-ink">
                  Gourisha_Rathore_Resume.pdf
                </h4>
                <p className="text-xs font-mono text-ink-muted mt-0.5">
                  Format: PDF • Size: ~225 KB
                </p>

                <div className="mt-3 pt-2.5 border-t border-ink-border/60 flex items-center justify-center gap-1.5 text-xs font-mono text-ink-muted">
                  <FileText className="w-3.5 h-3.5 text-burnt" />
                  <span>PDF Format</span>
                </div>
              </div>
            </div>

            {/* Content & Actions */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                  Download My Resume
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Includes full technical qualifications, verified internship contributions at Gravit Infosystem, real client deliverables (Geet Studio), and complete academic credentials from MITS Gwalior and Government Women's Polytechnic College.
              </p>

              <div className="space-y-1.5 text-xs text-ink-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burnt shrink-0" />
                  <span>Frontend, React.js & MERN Stack focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burnt shrink-0" />
                  <span>Verified contact info, LinkedIn & GitHub profiles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burnt shrink-0" />
                  <span>Clear formatting optimized for ATS and recruiters</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Gourisha_Rathore_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono font-medium border border-ink/20 text-ink bg-ivory-100 hover:bg-white hover:border-burnt hover:text-burnt transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View in Browser</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
