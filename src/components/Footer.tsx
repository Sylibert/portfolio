import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-[#F3ECE7]/10 text-center bg-[#130602]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
          <span className="font-display font-bold text-sm tracking-wider text-[#F3ECE7] lowercase leading-none -translate-y-[2px]">
            sylvain libert
          </span>
          <span className="text-[#F3ECE7]/40 leading-none">•</span>
          <span className="text-xs text-[#F3ECE7]/60 leading-none translate-y-[1px]">
            Production & Réalisation Vidéo
          </span>
        </div>

        {/* Center Logo */}
        <a
          href="#"
          aria-label="Retour en haut"
          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300"
        >
          <img
            src="/S_LOGO_BLANC.svg"
            alt="Sylvain Libert Logo"
            className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(243,236,231,0.15)]"
          />
        </a>

        <p className="text-[#F3ECE7]/50 text-xs font-semibold leading-none translate-y-[1px]">
          © 2026 Sylvain Libert. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
