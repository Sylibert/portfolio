import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-y border-[#F3ECE7]/10 bg-[#130602]/50 backdrop-blur-md" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-5xl font-bold text-[#F3ECE7] leading-tight">
            une production vidéo de A à Z
          </h2>
          <p className="text-[#F3ECE7]/70 text-xs sm:text-base font-medium mt-3 max-w-2xl mx-auto px-2 leading-relaxed">
            De la conception créative jusqu'à l'export final aux normes de vos diffuseurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Films Corporate */}
          <div className="liquid-glass-card p-6 sm:p-8 rounded-3xl group shadow-2xl flex flex-col relative overflow-hidden">
            <div className="specular-glint opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl liquid-glass-pill flex items-center justify-center text-[#F3ECE7] text-lg sm:text-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <i className="fa-regular fa-building"></i>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3ECE7] mb-3 sm:mb-4 lowercase">
                films corporate
              </h3>
              <p className="text-[#F3ECE7]/80 text-xs sm:text-sm mb-5 sm:mb-6 font-medium leading-relaxed md:min-h-[5.75rem]">
                Valorisez vos équipes, votre mission d'entreprise et vos levées de fonds avec un traitement visuel digne de votre entreprise.
              </p>
            </div>
            <ul className="space-y-3 pt-4 sm:pt-5 border-t border-[#F3ECE7]/10 flex-1">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Interviews dirigeants & équipes</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Montage institutionnel rythmé</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Livraison 16/9 et 9/16 pour vos réseaux sociaux</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Spots Publicitaires */}
          <div className="liquid-glass-card p-6 sm:p-8 rounded-3xl group shadow-2xl flex flex-col relative overflow-hidden">
            <div className="specular-glint opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl liquid-glass-pill flex items-center justify-center text-[#F3ECE7] text-lg sm:text-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <i className="fa-solid fa-clapperboard"></i>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3ECE7] mb-3 sm:mb-4 lowercase">
                spots publicitaires
              </h3>
              <p className="text-[#F3ECE7]/80 text-xs sm:text-sm mb-5 sm:mb-6 font-medium leading-relaxed md:min-h-[5.75rem]">
                Donnez une nouvelle dimension à votre image de marque grâce à des publicités sur mesure qui valorisent vos produits et renforcent votre impact.
              </p>
            </div>
            <ul className="space-y-3 pt-4 sm:pt-5 border-t border-[#F3ECE7]/10 flex-1">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Concept créatif & mise en valeur produit</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Prêt à diffuser sur tous vos supports d'acquisition</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Mode & Fashion */}
          <div className="liquid-glass-card p-6 sm:p-8 rounded-3xl group shadow-2xl flex flex-col relative overflow-hidden">
            <div className="specular-glint opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl liquid-glass-pill flex items-center justify-center text-[#F3ECE7] text-lg sm:text-xl mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F3ECE7] mb-3 sm:mb-4 lowercase">
                mode & fashion
              </h3>
              <p className="text-[#F3ECE7]/80 text-xs sm:text-sm mb-5 sm:mb-6 font-medium leading-relaxed md:min-h-[5.75rem]">
                Des visuels esthétiques pour vos nouvelles collections, campagnes et coulisses de shootings.
              </p>
            </div>
            <ul className="space-y-3 pt-4 sm:pt-5 border-t border-[#F3ECE7]/10 flex-1">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Lookbooks vidéo & BTS</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Direction artistique dédiée</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#F3ECE7]/90">
                <i className="fa-solid fa-check text-amber-300 shrink-0"></i> <span>Traitement vertical (Social First)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
