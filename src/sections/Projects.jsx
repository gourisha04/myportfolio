import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-16 lg:py-20 border-b border-ink-border/50 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Projects"
          title="Featured Projects"
          subtitle="Full-stack web applications, AI-integrated platforms, and real-world client systems built with modern web technologies."
        />

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom GitHub Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-ivory-100 border border-ink-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-burnt/10 text-burnt flex items-center justify-center shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-ink">
                Looking for more code repositories?
              </h4>
              <p className="text-xs text-ink-muted">
                Explore more full-stack exercises, algorithms, and experiments on my GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/gourisha04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-medium bg-charcoal text-white hover:bg-burnt transition-colors shrink-0 shadow-xs"
          >
            <span>Visit GitHub Profile</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
