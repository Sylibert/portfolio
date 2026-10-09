import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const emailAddress = "sylvainlibertpro@gmail.com";
  const phoneNumber = "06 44 38 71 78";

  const emailTemplateText = `Bonjour Sylvain,

Voici les détails de notre projet vidéo :

1. Société / Marque : 
2. Brief du projet (Corporate, Pub, Mode) & Objectifs : 
3. Délai souhaité : 
4. Budget prévisionnel : 

Cordialement,`;

  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent("Demande de projet vidéo — Sylvain Libert")}&body=${encodeURIComponent(emailTemplateText)}`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("0644387178");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(emailTemplateText);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <section className="py-24 px-4" id="contact">
      <div
        className="max-w-3xl mx-auto liquid-glass-card glowing-contact-box p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden text-center shadow-2xl"
        style={{ borderColor: '#6f3f1d' }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-[#F3ECE7]/60 font-bold mb-2">
            Disponibilité Immédiate
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F3ECE7] mb-3 tracking-wider lowercase">
            on travaille ensemble ?
          </h2>
          <p className="text-[#F3ECE7]/80 text-sm sm:text-base font-medium mb-8 max-w-xl">
            Discutons de votre projet, de vos objectifs et créons une vidéo sur-mesure.
          </p>

          {/* Large Direct Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full mb-8">
            {/* Email Contact Pill */}
            <div className="h-11 px-5 inline-flex items-center gap-2 liquid-glass-pill rounded-full shadow-lg">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2.5 text-[#F3ECE7] hover:text-white font-display font-bold text-xs tracking-wider transition-colors leading-none"
              >
                <span className="w-4 h-4 inline-flex items-center justify-center shrink-0">
                  <i className="fa-regular fa-envelope text-xs text-[#F3ECE7]/75 leading-none"></i>
                </span>
                <span className="leading-none -translate-y-[1.5px]">{emailAddress}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="ml-1 w-7 h-7 rounded-full bg-[#F3ECE7]/10 hover:bg-[#F3ECE7]/25 text-[#F3ECE7] flex items-center justify-center text-[10px] transition-all cursor-pointer"
                title="Copier l'e-mail"
                aria-label="Copier l'e-mail"
              >
                <i className={`fa-solid ${copiedEmail ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
              </button>
            </div>

            {/* Phone Contact Pill */}
            <div className="h-11 px-5 inline-flex items-center gap-2 liquid-glass-pill rounded-full shadow-lg">
              <a
                href="tel:0644387178"
                className="inline-flex items-center gap-2.5 text-[#F3ECE7] hover:text-white font-display font-bold text-xs tracking-wider transition-colors leading-none"
              >
                <span className="w-4 h-4 inline-flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone text-xs text-[#F3ECE7]/75 leading-none"></i>
                </span>
                <span className="leading-none -translate-y-[1.5px]">{phoneNumber}</span>
              </a>
              <button
                onClick={handleCopyPhone}
                className="ml-1 w-7 h-7 rounded-full bg-[#F3ECE7]/10 hover:bg-[#F3ECE7]/25 text-[#F3ECE7] flex items-center justify-center text-[10px] transition-all cursor-pointer"
                title="Copier le numéro"
                aria-label="Copier le numéro"
              >
                <i className={`fa-solid ${copiedPhone ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
              </button>
            </div>
          </div>

          {/* Encadré d'information pour le mail (Nom société, Brief, Budget) */}
          <div className="w-full max-w-xl rounded-3xl p-6 sm:p-7 text-left liquid-glass border border-[#F3ECE7]/15 bg-[#130602]/70 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-[#F3ECE7]/10">
              <i className="fa-regular fa-clipboard text-[#F3ECE7]/80 text-sm"></i>
              <h3 className="font-display font-bold text-xs sm:text-sm text-[#F3ECE7] tracking-wide">
                Infos utiles à préciser dans votre e-mail :
              </h3>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#F3ECE7]/85">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F3ECE7]/15 text-[#F3ECE7] inline-flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#F3ECE7]/30">
                  <span className="translate-y-[2px] leading-none">1</span>
                </span>
                <div>
                  <span className="font-bold text-[#F3ECE7]">Nom de votre société ou marque</span>
                  <p className="text-[11px] text-[#F3ECE7]/60 mt-0.5">
                    Avec le secteur d'activité et la personne référente à contacter.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F3ECE7]/15 text-[#F3ECE7] inline-flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#F3ECE7]/30">
                  <span className="translate-y-[2px] leading-none">2</span>
                </span>
                <div>
                  <span className="font-bold text-[#F3ECE7]">Brief du projet vidéo</span>
                  <p className="text-[11px] text-[#F3ECE7]/60 mt-0.5">
                    Type de film (Corporate & Finance, Publicité, Mode & Lookbook), vos objectifs, lieu de tournage ou délai souhaité.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#F3ECE7]/15 text-[#F3ECE7] inline-flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border border-[#F3ECE7]/30">
                  <span className="translate-y-[2px] leading-none">3</span>
                </span>
                <div>
                  <span className="font-bold text-[#F3ECE7]">Budget prévisionnel</span>
                  <p className="text-[11px] text-[#F3ECE7]/60 mt-0.5">
                    Votre enveloppe budgétaire estimée afin d'adapter directement l'équipe technique, les optiques cinéma et le temps de post-production.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Email Launcher & Copy Template Buttons */}
            <div className="pt-4 border-t border-[#F3ECE7]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={mailtoHref}
                className="w-full sm:w-auto h-11 px-5 inline-flex items-center justify-center rounded-xl liquid-glass-button hover:bg-white text-[#130602] transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-paper-plane text-[11px] text-[#130602]"></i>
                  </span>
                  <span className="font-sans font-bold text-xs sm:text-sm lowercase tracking-wider leading-none translate-y-[1px]">
                    ouvrir un email pré-rempli
                  </span>
                </div>
              </a>

              <button
                onClick={handleCopyTemplate}
                className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#F3ECE7]/75 hover:text-white px-4 rounded-xl hover:bg-[#F3ECE7]/10 transition-colors cursor-pointer"
              >
                <i className={`fa-solid ${copiedTemplate ? 'fa-check text-emerald-400' : 'fa-copy'}`}></i>
                <span>{copiedTemplate ? 'Trame copiée !' : 'Copier la trame du brief'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
