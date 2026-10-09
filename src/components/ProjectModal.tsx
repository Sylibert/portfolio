import React, { useState, useEffect } from 'react';
import { Project, VideoItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    setActiveVideoIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const currentVideo: VideoItem = project.videos[activeVideoIndex] || project.videos[0];
  const ytId = currentVideo?.youtubeId;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] liquid-glass-modal rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-[#F3ECE7]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Specular Edge Glint */}
        <div className="specular-glint opacity-80" />

        {/* Header Bar */}
        <div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#F3ECE7]/15 bg-[#130602]/80 backdrop-blur-xl">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-[#F3ECE7]/80 truncate">
              {project.client}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3ECE7]/40 shrink-0" />
            <div className="h-6 px-2.5 sm:px-3.5 inline-flex items-center justify-center rounded-full liquid-glass-pill shrink-0">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#F3ECE7] translate-y-[2px] leading-none inline-block">
                {project.categoryLabel}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full liquid-glass-pill flex items-center justify-center text-[#F3ECE7] hover:bg-white hover:text-[#130602] transition-all cursor-pointer shadow-lg shrink-0"
            aria-label="Fermer le lecteur"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h2 className="font-display text-lg sm:text-3xl font-extrabold text-[#F3ECE7] tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#F3ECE7]/75 mt-2 font-medium leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Embedded YouTube Player with Liquid Glass Framing */}
          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden liquid-glass-card shadow-2xl bg-black">
            <div className="specular-glint opacity-50" />
            {ytId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex items-center justify-center h-full text-sm text-[#F3ECE7]/50">
                Vidéo non disponible
              </div>
            )}
          </div>

          {/* Video Selector if multiple videos */}
          {project.videos.length > 1 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#F3ECE7]/70">
                  Vidéos du projet ({project.videos.length})
                </span>
                <span className="text-[11px] text-[#F3ECE7]/50 font-medium">
                  Cliquez sur une capsule pour changer de vidéo
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.videos.map((vid, idx) => {
                  const isSelected = idx === activeVideoIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveVideoIndex(idx)}
                      className={`text-left p-3.5 rounded-2xl transition-all border flex items-center gap-3 cursor-pointer relative overflow-hidden ${
                        isSelected
                          ? 'liquid-glass-button text-[#130602] border-white shadow-xl scale-[1.02]'
                          : 'liquid-glass-pill text-[#F3ECE7] hover:text-white'
                      }`}
                    >
                      <div className="specular-glint opacity-40" />
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs ${
                          isSelected ? 'bg-[#130602] text-[#F3ECE7]' : 'bg-[#F3ECE7]/10 text-[#F3ECE7]'
                        }`}
                      >
                        {isSelected ? (
                          <i className="fa-solid fa-play text-[10px]"></i>
                        ) : (
                          <span className="translate-y-[2px] leading-none font-bold">{idx + 1}</span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs truncate font-display font-bold">{vid.title}</p>
                        <p className={`text-[10px] ${isSelected ? 'text-[#130602]/70 font-semibold' : 'text-[#F3ECE7]/50'}`}>
                          Format 16:9 • HD
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Deliverables */}
          <div className="pt-4 border-t border-[#F3ECE7]/15 flex flex-wrap items-center gap-2.5">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#F3ECE7]/60 mr-1 translate-y-[2px] leading-none">
              Livrables :
            </span>
            {project.deliverables.map((item, i) => (
              <div
                key={i}
                className="h-8 px-4 inline-flex items-center justify-center rounded-full liquid-glass-pill shadow-sm"
              >
                <span className="font-sans font-medium text-xs text-[#F3ECE7]/90 whitespace-nowrap text-center leading-none translate-y-[2.5px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
