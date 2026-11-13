import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Sparkles } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const featuredProjects = projects.filter((p) => p.featured);
  const conceptProjects = projects.filter((p) => p.isPlaceholder);

  // Filtered views
  const displayFeatured = filter === 'all' || filter === 'featured' || filter === 'client';
  const displayConcepts = (filter === 'all' || filter === 'concepts') && filter !== 'client';

  return (
    <section id="projects" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Centralized Section Header */}
        <SectionHeading
          align="center"
          tag="03 / SELECTED WORK"
          title="Featured Projects & Client Solutions"
          subtitle="Real-world full-stack platforms, client deliverables, and architectural implementations."
        />

        {/* Centralized Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 flex-wrap">
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
            Featured Flagships (2)
          </button>
          <button
            onClick={() => setFilter('concepts')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
              filter === 'concepts'
                ? 'bg-charcoal text-white shadow-sm'
                : 'bg-white border border-ink-border text-ink hover:border-burnt'
            }`}
          >
            Concept Lab (3)
          </button>
        </div>

        {/* Featured Flagship Projects List (Geet Studio & Smart Event Booking) */}
        {displayFeatured && (
          <div className="space-y-6 sm:space-y-8">
            {featuredProjects
              .filter((p) => (filter === 'client' ? p.isClient : true))
              .map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant="featured"
                />
              ))}
          </div>
        )}

        {/* Modular Concept Lab Grid (Projects 03, 04, 05) */}
        {displayConcepts && (
          <div className="mt-8 pt-8 border-t border-ink-border/50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-burnt font-semibold">
                  Modular Concept Showcases
                </span>
                <p className="text-xs text-ink-muted mt-0.5">
                  Extensible project slots ready to be populated in <code className="bg-ivory-200 px-1 py-0.5 rounded text-burnt font-mono">src/data/projects.js</code>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {conceptProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Central Registry Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-ivory-300/40 border border-ink-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-7 h-7 rounded-full bg-burnt/10 text-burnt flex items-center justify-center shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="block font-mono text-xs font-semibold text-ink">
                Centralized Project Registry
              </span>
              <p className="text-xs text-ink-muted">
                Add your next projects anytime simply by editing <code className="bg-white px-1.5 py-0.5 rounded border border-ink-border text-burnt">src/data/projects.js</code>.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/gourisha04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-white border border-ink-border text-ink hover:border-burnt hover:text-burnt transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Visit GitHub Archive</span>
          </a>
        </div>
      </div>
    </section>
  );
}
