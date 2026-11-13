import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Layers, Sparkles, Filter } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'client') return p.isClient;
    if (filter === 'featured') return p.featured;
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="03 / SELECTED WORK"
            title="Featured Projects & Client Solutions"
            subtitle="Real-world full-stack platforms, client deliverables, and architectural implementations."
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 pb-12 md:pb-16 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'all'
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'bg-white border border-ink-border text-ink hover:border-burnt'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('client')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'client'
                  ? 'bg-burnt text-white shadow-sm'
                  : 'bg-white border border-ink-border text-ink hover:border-burnt'
              }`}
            >
              Client Projects (1)
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                filter === 'featured'
                  ? 'bg-charcoal text-white shadow-sm'
                  : 'bg-white border border-ink-border text-ink hover:border-burnt'
              }`}
            >
              Featured (2)
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12 lg:space-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Note about adding projects */}
        <div className="mt-12 p-6 rounded-xl bg-ivory-300/40 border border-ink-border/60 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-burnt/10 text-burnt flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-mono text-xs font-semibold text-ink">
                Centralized Project Registry
              </span>
              <p className="text-xs text-ink-muted">
                Additional projects can be directly appended in <code className="bg-white px-1.5 py-0.5 rounded border border-ink-border text-burnt">src/data/projects.js</code>.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/gourisha04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono bg-white border border-ink-border text-ink hover:border-burnt hover:text-burnt transition-colors whitespace-nowrap"
          >
            <span>Visit GitHub Archive</span>
          </a>
        </div>
      </div>
    </section>
  );
}
