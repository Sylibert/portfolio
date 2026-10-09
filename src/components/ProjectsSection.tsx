import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'corporate' | 'pub' | 'mode'>('corporate');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section className="py-16 sm:py-24 px-4 max-w-7xl mx-auto" id="projects">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5 sm:gap-6">
        <div className="text-center md:text-left">
          <span className="text-[#F3ECE7]/60 text-[11px] sm:text-xs uppercase tracking-widest font-bold">
            Réalisations Récentes
          </span>
          <h2 className="font-display text-2xl sm:text-5xl font-bold text-[#F3ECE7] mt-2 lowercase">
            projets à la une
          </h2>
        </div>

        {/* Filter Buttons with Refined Glass */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-wrap gap-1.5 sm:gap-2 liquid-glass-pill p-1.5 rounded-2xl self-center md:self-auto shadow-lg">
          <button
            onClick={() => setFilter('all')}
            className={`font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer text-center ${
              filter === 'all'
                ? 'liquid-glass-button text-[#130602] shadow-md font-extrabold'
                : 'text-[#F3ECE7]/75 hover:text-white'
            }`}
          >
            <span className="inline-block translate-y-[2px]">Tous</span>
          </button>

          <button
            onClick={() => setFilter('corporate')}
            className={`font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer text-center ${
              filter === 'corporate'
                ? 'liquid-glass-button text-[#130602] shadow-md font-extrabold'
                : 'text-[#F3ECE7]/75 hover:text-white'
            }`}
          >
            <span className="inline-block translate-y-[2px]">Corporate & Finance</span>
          </button>

          <button
            onClick={() => setFilter('pub')}
            className={`font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer text-center ${
              filter === 'pub'
                ? 'liquid-glass-button text-[#130602] shadow-md font-extrabold'
                : 'text-[#F3ECE7]/75 hover:text-white'
            }`}
          >
            <span className="inline-block translate-y-[2px]">PUB</span>
          </button>

          <button
            onClick={() => setFilter('mode')}
            className={`font-bold text-[11px] sm:text-xs px-3 sm:px-4 py-2 rounded-xl transition-all cursor-pointer text-center ${
              filter === 'mode'
                ? 'liquid-glass-button text-[#130602] shadow-md font-extrabold'
                : 'text-[#F3ECE7]/75 hover:text-white'
            }`}
          >
            <span className="inline-block translate-y-[2px]">Mode & Fashion</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {filteredProjects.map((project, index) => (
          <article
            key={`${filter}-${project.id}`}
            onClick={() => onSelectProject(project)}
            style={{ animationDelay: `${index * 80}ms` }}
            className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1 animate-project-card"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-3 sm:mb-3.5 px-1">
              {/* Perfectly centered category theme pill */}
              <div className="h-6 px-3 sm:px-3.5 inline-flex items-center justify-center rounded-full liquid-glass-pill shadow-sm">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-extrabold text-[#F3ECE7] translate-y-[2.5px] leading-none inline-block">
                  {project.categoryLabel}
                </span>
              </div>
              <span className="font-display text-sm sm:text-lg text-[#F3ECE7] tracking-wide group-hover:text-white transition-colors text-center">
                {project.client}
              </span>
            </div>

            {/* Video Thumbnail Card with Subtle Scale-up and Cinematic Color Overlay Shift */}
            <div className="relative aspect-video rounded-2xl overflow-hidden liquid-glass-card shadow-xl w-full border border-[#F3ECE7]/10 group-hover:border-amber-400/30 transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              {/* Thumbnail Image with smooth scale-up */}
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const ytId = project.videos[0]?.youtubeId;
                  if (ytId) {
                    target.src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
              />

              {/* Ambient permanent soft vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130602]/60 via-transparent to-transparent opacity-80 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />

              {/* Cinematic Color Overlay Shift on Hover (Warm Chocolate & Amber Tint) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#130602]/95 via-[#2e1308]/55 to-amber-900/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-end p-6 justify-center">
                <span className="liquid-glass-button text-[#130602] text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <i className="fa-solid fa-play text-[10px]"></i>
                  <span>
                    Voir le projet ({project.videos.length} vidéo
                    {project.videos.length > 1 ? 's' : ''})
                  </span>
                </span>
              </div>
            </div>

            {/* Title & Short Description */}
            <div className="mt-4 px-4 text-center">
              <h3 className="font-sans text-sm sm:text-base font-bold text-[#F3ECE7]/90 leading-snug group-hover:text-white transition-colors">
                {project.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
