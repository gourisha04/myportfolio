import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-16 lg:py-20 border-b border-[#A8B8F2]/30 bg-[#EAF0F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading
          tag="Projects"
          title="Featured Projects"
          subtitle="Full-stack web applications, AI-integrated platforms, and real-world client systems built with modern web technologies."
        />

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Bottom GitHub Strip */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#F8FAFD] border border-[#A8B8F2]/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-[#24334D]">
                Looking for more code repositories?
              </h4>
              <p className="text-xs text-[#687891]">
                Explore more full-stack exercises, algorithms, and experiments on my GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/gourisha04"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold bg-[#7189E8] text-white hover:bg-[#5B74D8] transition-colors shrink-0 shadow-sm"
          >
            <span>Visit GitHub Profile</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
