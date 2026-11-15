import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="group bg-[#F8FAFD] border border-[#A8B8F2]/35 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#7189E8]/50 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top: Screenshot Preview with Overlay */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF0F8] border-b border-[#A8B8F2]/25">
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#24334D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#F8FAFD]/95 text-[#24334D] shadow-sm border border-[#A8B8F2]/40 backdrop-blur-sm">
            {project.isClient ? (
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-[#7189E8]" />
            )}
            <span>{project.category}</span>
          </span>
        </div>

        {/* Year Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#F8FAFD]/95 text-[#24334D] border border-[#A8B8F2]/40 backdrop-blur-sm">
            {project.period}
          </span>
        </div>
      </div>

      {/* Middle: Title, Overview, Highlights, Tech Stack */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display font-bold text-xl text-[#24334D] group-hover:text-[#7189E8] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#7189E8] font-semibold mt-0.5 mb-2.5">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-[#687891] leading-relaxed mb-4">
            {project.overview}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 mb-4 text-xs text-[#687891]">
              {project.highlights.slice(0, 2).map((hl, hIdx) => (
                <li key={hIdx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#7189E8] shrink-0 mt-0.5" />
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
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#EAF0F8] text-[#24334D] border border-[#A8B8F2]/35"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions: Live Demo & GitHub Buttons */}
        {(project.liveUrl || project.githubUrl || project.isClient) && (
          <div className="pt-4 border-t border-[#A8B8F2]/25 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[#7189E8] text-white hover:bg-[#5B74D8] transition-colors shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium border border-[#A8B8F2]/40 bg-[#F8FAFD] text-[#24334D] hover:text-[#7189E8] hover:border-[#7189E8] transition-colors shadow-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}

              {project.isClient && !project.githubUrl && (
                <span className="text-[11px] font-mono text-[#687891] italic">
                  {project.clientNote || "Client Project (Private Repo)"}
                </span>
              )}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
