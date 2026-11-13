import React from 'react';
import { ExternalLink, Github, CheckCircle2, ShieldAlert, Sparkles, Layers } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <article className="group relative bg-white/70 backdrop-blur-sm border border-ink-border/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-editorial hover:shadow-editorial-hover transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Visual Frame / Mockup Showcase Column */}
        <div
          className={`lg:col-span-5 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="relative rounded-xl overflow-hidden border border-ink-border bg-ivory-100 aspect-[4/3] flex items-center justify-center group-hover:border-burnt/50 transition-colors">
            {project.image ? (
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center p-6 bg-gradient-to-br from-ivory-50 to-ivory-300">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-ivory-200">
                <Layers className="w-12 h-12 text-burnt/70 mb-3" />
                <span className="font-display font-bold text-lg text-ink">
                  {project.title}
                </span>
                <span className="text-xs font-mono text-ink-muted mt-1">
                  Interactive Showcase Slot
                </span>
              </div>
            )}

            {/* Top Badge: Client Project or Featured */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              {project.isClient && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-burnt text-white shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Client Project
                </span>
              )}
              {project.isPlaceholder && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-charcoal text-ivory-100">
                  Concept Showcase
                </span>
              )}
            </div>

            {/* Big Editorial Number In Background */}
            <div className="absolute bottom-2 right-4 font-display font-extrabold text-6xl lg:text-7xl text-charcoal/5 pointer-events-none select-none">
              {project.number}
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
          <div className="flex items-center justify-between gap-4 mb-2">
            <span className="font-mono text-xs font-semibold text-burnt uppercase tracking-ultra">
              PROJECT {project.number} — {project.category}
            </span>
            <span className="font-mono text-xs text-ink-muted">
              {project.period}
            </span>
          </div>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-sm font-mono text-burnt font-medium mb-4">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-4">
            {project.overview}
          </p>

          {/* Contribution callout */}
          {project.contribution && (
            <div className="mb-5 p-3.5 rounded-lg bg-ivory-100 border-l-2 border-burnt">
              <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-1">
                My Contribution:
              </span>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                {project.contribution}
              </p>
            </div>
          )}

          {/* Key Implemented Features Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <span className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2.5">
                Key Features & Architecture:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-muted">
                {project.highlights.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-burnt shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-ivory-200 text-ink border border-ink-border/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions & Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-ink-border/60">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-colors"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-mono font-medium border border-ink-border bg-white text-ink hover:border-burnt hover:text-burnt transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.clientNote && (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted">
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
