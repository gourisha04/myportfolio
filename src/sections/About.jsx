import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Download, User, Mail, MapPin, GraduationCap, Award, Code, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-24 border-b border-[#A8B8F2]/30 bg-[#EAF0F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <SectionHeading
          tag="About Me"
          title="Know Who I Am"
          subtitle="A developer passionate about building clean, performant, and responsive web experiences."
        />

        {/* Jigar Sable Inspired Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Actual Profile Photograph */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[270px] xs:max-w-[310px] sm:max-w-sm md:max-w-md mx-auto">
              {/* Soft ambient background glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#7189E8]/25 via-[#A8B8F2]/25 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Photo Frame Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F8FAFD] border-2 border-[#A8B8F2]/40 shadow-lg shadow-[#24334D]/8 transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                <img
                  src={profileImg}
                  alt="Gourisha Rathore - Profile Photograph"
                  className="w-full h-auto max-h-[460px] object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  draggable="false"
                />

                {/* Subtle bottom gradient vignette with name badge */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 bg-gradient-to-t from-[#24334D]/85 via-[#24334D]/40 to-transparent flex items-end justify-between">
                  <div className="min-w-0 pr-2">
                    <p className="text-white font-display font-bold text-xs sm:text-sm tracking-wide truncate">
                      Gourisha Rathore
                    </p>
                    <p className="text-[#A8B8F2] text-[10px] sm:text-xs font-mono truncate">
                      B.Tech CSE • MITS Gwalior
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-[#7189E8] text-white font-medium shadow-xs shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction, Professional Title, Bio, Details & Resume */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Title / Role Subheading */}
            <div className="space-y-2">
              <h3 className="font-display font-extrabold text-xl xs:text-2xl sm:text-3xl text-[#24334D] leading-tight">
                I'm Gourisha and I'm a{' '}
                <span className="text-[#7189E8]">Frontend & MERN Stack Developer</span>
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-[#7189E8] to-[#A8B8F2] rounded-full" />
            </div>

            {/* Natural & Professional Bio */}
            <div className="space-y-3 text-xs sm:text-base text-[#687891] leading-relaxed font-normal">
              <p>
                I graduated with a Bachelor of Technology in Computer Science Engineering from{' '}
                <strong className="text-[#24334D] font-semibold">Madhav Institute of Technology and Science (MITS), Gwalior</strong>, 
                completing my degree with a <strong className="text-[#24334D] font-semibold">7.65 CGPA</strong>, 
                along with a Diploma with Distinction (<strong className="text-[#24334D] font-semibold">8.03 CGPA</strong>) from Government Women's Polytechnic College.
              </p>
              
              <p>
                I have hands-on experience in modern web development and the MERN stack—specializing in <strong className="text-[#24334D] font-semibold">React, Node.js, Express, and MongoDB</strong>, as well as modern tooling like Vite and Tailwind CSS. Having architected client-facing platforms like <strong className="text-[#24334D] font-semibold">Geet Studio</strong> and full-stack solutions like <strong className="text-[#24334D] font-semibold">Parinay</strong>, I focus on building reliable, performant, and maintainable applications.
              </p>

              <p>
                My passion lies in building modern, responsive, and user-centric web applications where clean architecture, semantic code, and thoughtful design converge to solve real problems.
              </p>
            </div>

            {/* Personal Details Grid (Jigar Sable Inspired) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 font-mono text-xs">
              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#F8FAFD] border border-[#A8B8F2]/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-[#687891]">Name:</span>
                  <span className="font-semibold text-[#24334D] truncate block">Gourisha Rathore</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#F8FAFD] border border-[#A8B8F2]/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-[#687891]">Degree:</span>
                  <span className="font-semibold text-[#24334D] truncate block">B.Tech CSE (MITS)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#F8FAFD] border border-[#A8B8F2]/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-[#687891]">Academic Score:</span>
                  <span className="font-semibold text-[#24334D] truncate block">7.65 CGPA</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#F8FAFD] border border-[#A8B8F2]/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-[#687891]">Location:</span>
                  <span className="font-semibold text-[#24334D] truncate block">Gwalior, M.P., India</span>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-[#F8FAFD] border border-[#A8B8F2]/30 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-[#7189E8]/10 text-[#7189E8] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] text-[#687891]">Email:</span>
                  <a
                    href="mailto:gourisharathore@gmail.com"
                    className="font-semibold text-[#24334D] hover:text-[#7189E8] transition-colors truncate block"
                  >
                    gourisharathore@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons: Resume & Contact */}
            <div className="pt-2 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="/october_updated_resume.pdf"
                download="october_updated_resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-semibold bg-[#7189E8] text-white hover:bg-[#5B74D8] transition-all duration-200 shadow-md hover:shadow-glow-accent hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium border border-[#A8B8F2]/50 text-[#24334D] bg-[#F8FAFD] hover:bg-[#EEF4FC] hover:border-[#7189E8] hover:text-[#7189E8] transition-all duration-200 shadow-xs hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
