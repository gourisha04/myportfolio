import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const displayProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-10 sm:py-12 lg:py-14 border-b border-ink-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <SectionHeading
          align="center"
          tag="Selected Work"
          title="Featured Projects & Client Solutions"
          subtitle="Real-world full-stack platforms, client deliverables, and architectural implementations."
        />

        {/* Projects List */}
        <div className="space-y-6 sm:space-y-8">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="featured"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
