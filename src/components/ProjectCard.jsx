import React from 'react';
import { ExternalLink, Github, CheckCircle2, ShieldAlert, Sparkles, Layers } from 'lucide-react';

export default function ProjectCard({ project, index, variant = 'featured' }) {
  const isEven = index % 2 === 0;

  // Grid variant for compact showcase slots (Projects 03, 04, 05)
  if (variant === 'compact') {
    return (
      <article className="group bg-white border border-ink-border rounded-xl p-5 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-mono text-[11px] font-semibold text-burnt uppercase tracking-wider">
              PROJECT {project.number}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-charcoal text-ivory-100">
              Concept Slot
            </span>
          </div>

          <h4 className="font-display font-bold text-lg text-ink group-hover:text-burnt transition-colors">
            {project.title}
          </h4>
          <p className="text-xs font-mono text-burnt font-medium mb-2.5">
            {project.subtitle}
          </p>

          <p className="text-xs text-ink-muted leading-relaxed mb-4 line-clamp-3">
            {project.overview}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[10px] font-mono bg-ivory-200 text-ink border border-ink-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-3 border-t border-ink-border/60 flex items-center justify-between text-xs font-mono">
          <span className="text-ink-muted text-[11px]">{project.period}</span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ink hover:text-burnt transition-colors font-medium"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
          )}
        </div>
      </article>
    );
  }

  // Full Flagship Showcase Variant (Geet Studio & Smart Event Booking)
  return (
    <article className="group relative bg-white border border-ink-border rounded-2xl p-5 sm:p-6 lg:p-7 shadow-editorial hover:shadow-editorial-hover transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Visual Showcase Column */}
        <div
          className={`lg:col-span-5 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative rounded-xl overflow-hidden border border-ink-border bg-ivory-100 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] max-h-[250px] sm:max-h-[280px] flex items-center justify-center group-hover:border-burnt/50 transition-colors">
            {project.image ? (
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-ivory-200">
                <Layers className="w-10 h-10 text-burnt/70 mb-2" />
                <span className="font-display font-bold text-base text-ink">
                  {project.title}
                </span>
                <span className="text-[11px] font-mono text-ink-muted">
                  Screenshot Coming Soon
                </span>
              </div>
            )}

            {/* Top Badge: Client Project Verified */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              {project.isClient && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-burnt text-white shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Client Project Verified
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Project Details Column */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <span className="font-mono text-xs font-semibold text-burnt uppercase tracking-wider">
              {project.category}
            </span>
            <span className="font-mono text-xs text-ink-muted">
              {project.period}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight mb-1">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-mono text-burnt font-medium mb-3">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-3">
            {project.overview}
          </p>

          {/* Contribution callout */}
          {project.contribution && (
            <div className="mb-3.5 p-3 rounded-lg bg-ivory-100 border-l-2 border-burnt">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-0.5">
                My Contribution:
              </span>
              <p className="text-xs text-ink-muted leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          {/* Key Implemented Features Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-ink font-semibold mb-1.5">
                Key Features & Architecture:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-ink-muted">
                {project.highlights.slice(0, 4).map((feat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-burnt shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-ivory-200 text-ink border border-ink-border/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-ink-border/60">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-colors shadow-sm"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-ink-border bg-white text-ink hover:border-burnt hover:text-burnt transition-colors shadow-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.clientNote && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-muted">
                <ShieldAlert className="w-3.5 h-3.5 text-ink-muted" />
                {project.clientNote}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
