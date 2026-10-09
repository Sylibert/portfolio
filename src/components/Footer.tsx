import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-[#F3ECE7]/10 text-center bg-[#130602]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-sm tracking-wider text-[#F3ECE7] lowercase leading-none -translate-y-[2px]">
            sylvain libert
          </span>
          <span className="text-[#F3ECE7]/40 leading-none">•</span>
          <span className="text-xs text-[#F3ECE7]/60 leading-none translate-y-[1px]">
            Production & Réalisation Vidéo
          </span>
        </div>

        <p className="text-[#F3ECE7]/50 text-xs font-semibold">
          © 2026 Sylvain Libert. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
