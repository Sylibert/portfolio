import React, { useEffect, useRef, useState } from 'react';
import { CLIENTS } from '../data/portfolioData';

interface ClientsBannerProps {
  onOpenProject: (id: number) => void;
}

export const ClientsBanner: React.FC<ClientsBannerProps> = ({ onOpenProject }) => {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const element = titleRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHighlighted(true);
          } else {
            setIsHighlighted(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 border-y border-[#F3ECE7]/10 bg-[#130602]/50 backdrop-blur-md relative overflow-hidden" id="clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p
          ref={titleRef}
          onAnimationEnd={() => setIsHighlighted(false)}
          className={`text-center text-xs uppercase tracking-widest text-[#F3ECE7]/60 font-bold mb-8 transition-all duration-500 ${
            isHighlighted ? 'animate-title-highlight' : ''
          }`}
        >
          Ils me font confiance pour leur stratégie vidéo
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          {CLIENTS.map((c) => (
            <button
              key={c.name}
              onClick={() => onOpenProject(c.projectId)}
              className="h-11 px-5 inline-flex items-center justify-center gap-2.5 text-[#F3ECE7] font-display font-bold text-xs tracking-wide liquid-glass-pill rounded-2xl cursor-pointer hover:scale-105 active:scale-95 relative overflow-hidden group shadow-lg"
            >
              <i className={`${c.icon} text-[11px] text-[#F3ECE7]/70 group-hover:text-amber-300 transition-colors`}></i>
              <span className="translate-y-[2px] group-hover:text-white transition-colors">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
