import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 sm:py-32 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          tag="07 / CREDENTIALS"
          title="Curriculum Vitae & Resume"
          subtitle="Download or view my complete technical resume formatted for recruitment review."
        />

        <div className="bg-white border border-ink-border rounded-3xl p-8 sm:p-12 shadow-editorial max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Visual Document Card */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs bg-ivory-100 border border-ink-border rounded-2xl p-6 shadow-md text-center group hover:border-burnt/60 transition-colors">
                
                {/* Paper sheet effect */}
                <div className="w-16 h-20 mx-auto rounded-lg bg-burnt/10 border border-burnt/30 flex items-center justify-center text-burnt mb-4 group-hover:scale-105 transition-transform">
                  <FileText className="w-8 h-8" />
                </div>

                <h4 className="font-display font-bold text-lg text-ink">
                  Gourisha_Rathore_Resume.pdf
                </h4>
                <p className="text-xs font-mono text-ink-muted mt-1">
                  Format: PDF • Size: ~225 KB
                </p>

                <div className="mt-4 pt-3 border-t border-ink-border/60 flex items-center justify-center gap-2 text-xs font-mono text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Verified & Up-to-Date</span>
                </div>
              </div>
            </div>

            {/* Content & Actions */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-ultra text-burnt font-semibold block mb-1">
                  Official Document
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
                  Ready for Review & Hiring Pipelines
                </h3>
              </div>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Includes full technical qualifications, verified internship contributions at Gravit Infosystem, end-to-end full-stack client deliverables (Geet Studio), and complete academic coursework from MITS Gwalior.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-ink-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burnt" />
                  <span>Frontend, React.js & MERN Stack focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burnt" />
                  <span>Contact info, LinkedIn & GitHub verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burnt" />
                  <span>Optimized for ATS and human recruiters</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/resume.pdf"
                  download="Gourisha_Rathore_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-mono font-medium border border-ink/20 text-ink bg-ivory-100 hover:bg-white hover:border-burnt hover:text-burnt transition-all duration-200"
                >
                  <Eye className="w-4 h-4" />
                  <span>View in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
