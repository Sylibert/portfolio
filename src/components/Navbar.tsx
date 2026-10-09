import React, { useState } from 'react';
import { Project } from '../data/portfolioData';

interface NavbarProps {
  onOpenProject: (id: number) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="liquid-glass rounded-full px-5 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl relative">
          <div className="specular-glint opacity-50" />

          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer text-left relative z-10"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/S_LOGO_BLANC.svg"
                alt="Sylvain Libert Logo"
                className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(243,236,231,0.15)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-[#F3ECE7] leading-none group-hover:text-white transition-colors lowercase">
                sylvain libert
              </span>
              <span className="text-[9px] tracking-widest text-[#F3ECE7]/60 uppercase font-semibold mt-0.5">
                Vidéaste & Réalisateur
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-semibold">
            <a href="#projects" className="text-[#F3ECE7]/75 hover:text-white transition-colors py-1 cursor-pointer">
              <span>Projets</span>
            </a>
            <a href="#services" className="text-[#F3ECE7]/75 hover:text-white transition-colors py-1 cursor-pointer">
              <span>Expertises</span>
            </a>
            <a href="#clients" className="text-[#F3ECE7]/75 hover:text-white transition-colors py-1 cursor-pointer">
              <span>Clients</span>
            </a>
          </nav>

          {/* Contact CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 h-9 px-5 rounded-full liquid-glass-button hover:bg-white text-[#130602] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-105"
            >
              <i className="fa-solid fa-paper-plane text-[10px]"></i>
              <span className="translate-y-[1.5px]">Contact</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#F3ECE7] p-2 cursor-pointer ml-1"
              aria-label="Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 liquid-glass rounded-3xl p-6 shadow-2xl mb-4 border border-[#F3ECE7]/15">
          <nav className="flex flex-col gap-3 font-display uppercase tracking-wider text-sm">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F3ECE7]/90 hover:text-white py-2 text-base"
            >
              Projets
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F3ECE7]/90 hover:text-white py-2 text-base"
            >
              Expertises
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F3ECE7]/90 hover:text-white py-2 text-base"
            >
              Clients
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#F3ECE7] text-[#130602] font-bold py-3 rounded-xl mt-2 block text-center"
            >
              Me Contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
