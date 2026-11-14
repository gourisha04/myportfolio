import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <article className="group bg-white border border-ink-border rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-burnt/40 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top: Screenshot Preview with Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200 border-b border-ink-border/50">
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/95 text-ink shadow-xs border border-ink-border/60 backdrop-blur-sm">
            {project.isClient ? (
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-burnt" />
            )}
            <span>{project.category}</span>
          </span>
        </div>

        {/* Year Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-charcoal/80 text-white backdrop-blur-sm">
            {project.period}
          </span>
        </div>
      </div>

      {/* Middle: Title, Overview, Highlights, Tech Stack */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-ink group-hover:text-burnt transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-burnt font-semibold mt-0.5 mb-2.5">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
            {project.overview}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4 text-xs text-ink-muted">
              {project.highlights.slice(0, 2).map((hl, hIdx) => (
                <li key={hIdx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-burnt shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{hl}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-ivory-100 text-ink border border-ink-border/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions: Live Demo & GitHub Buttons */}
        <div className="pt-4 border-t border-ink-border/60 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-burnt text-white hover:bg-burnt-hover transition-colors shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium border border-ink-border bg-white text-ink hover:text-burnt hover:border-burnt transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-ink-muted italic">
                Client Project (Private Repo)
              </span>
            )}
          </div>
        </div>

      </div>
    </article>
  );
}
