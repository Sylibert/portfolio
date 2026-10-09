import React from 'react';

interface HeroProps {
  onOpenProject: (id: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProject }) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[0%] w-[600px] h-[600px] bg-[#F3ECE7]/5 blur-[150px] rounded-full pointer-events-none -z-10 liquid-orb" />
      <div
        className="absolute top-[45%] right-[-5%] w-[700px] h-[700px] bg-[#F3ECE7]/5 blur-[160px] rounded-full pointer-events-none -z-10 liquid-orb"
        style={{ animationDelay: '-3s' }}
      />

      <div className="relative z-10 text-center flex flex-col items-center max-w-5xl mx-auto w-full">
        {/* Soft Ambient Aura Behind Title */}
        <div className="absolute inset-0 bg-[#F3ECE7]/5 blur-3xl rounded-full scale-125 -z-10 pointer-events-none" />

        {/* Status Pill with Liquid Glass */}
        <div className="min-h-9 py-1.5 sm:py-0 px-3.5 sm:px-5 inline-flex items-center justify-center gap-2 sm:gap-2.5 rounded-full liquid-glass-pill text-[#F3ECE7]/90 text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest mb-5 sm:mb-6 relative overflow-hidden shadow-2xl animate-hero-fade max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="translate-y-[1.5px] sm:translate-y-[2px] leading-tight sm:leading-none">Vidéaste Indépendant • Paris et Île-de-France</span>
        </div>

        {/* Minimalist Fullscreen Title with Subtle Glow */}
        <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[#F3ECE7] animate-subtle-glow select-none lowercase leading-[1.08] animate-hero-fade-d1 px-1">
          <span className="block">production</span>
          <span className="block">de vidéos</span>
        </h1>

        {/* Subtitle with pillars */}
        <p className="text-[#F3ECE7]/75 text-xs sm:text-lg font-medium mt-4 sm:mt-6 tracking-wider sm:tracking-widest max-w-2xl text-center animate-hero-fade-d2 px-2 leading-relaxed">
          Corporate & Finance • Spots Publicitaires • Mode & Fashion
        </p>

        {/* Interactive Action Buttons with Liquid Glass */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto px-4 sm:px-0 animate-hero-fade-d3">
          <a
            href="#projects"
            className="w-full sm:w-auto max-w-[270px] sm:max-w-none h-12 px-7 inline-flex items-center justify-center rounded-full liquid-glass-button hover:bg-white text-[#130602] transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden"
          >
            <div className="inline-flex items-center justify-center gap-2.5">
              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-play text-[10px] text-[#130602] translate-x-[0.5px]"></i>
              </span>
              <span className="font-sans font-bold text-xs sm:text-sm lowercase tracking-wider leading-none translate-y-[1px]">
                découvrir les projets
              </span>
            </div>
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto max-w-[270px] sm:max-w-none h-12 px-7 inline-flex items-center justify-center rounded-full liquid-glass-pill text-[#F3ECE7] hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden"
          >
            <div className="inline-flex items-center justify-center gap-2.5">
              <span className="w-4 h-4 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-paper-plane text-[11px] text-[#F3ECE7]/80"></i>
              </span>
              <span className="font-sans font-bold text-xs sm:text-sm lowercase tracking-wider leading-none translate-y-[1px]">
                lancer un projet
              </span>
            </div>
          </a>
        </div>

        {/* Animated Liquid Glass Down Arrow Button */}
        <div className="mt-14 sm:mt-20 animate-hero-fade-d4">
          <a
            href="#clients"
            aria-label="Découvrir"
            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full liquid-glass-pill text-[#F3ECE7] hover:bg-[#F3ECE7] hover:text-[#130602] transition-all duration-300 animate-bounce shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:scale-110 relative overflow-hidden"
          >
            <i className="fa-solid fa-arrow-down text-sm sm:text-base"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
