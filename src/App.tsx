import { useState, useEffect } from 'react';
import { PROJECTS, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsBanner } from './components/ClientsBanner';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Parallax effect for ambient orbs
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const orb1 = document.getElementById('orb1');
      const orb2 = document.getElementById('orb2');
      const orb3 = document.getElementById('orb3');

      if (orb1) orb1.style.transform = `translateY(${scrolled * 0.25}px)`;
      if (orb2) orb2.style.transform = `translateY(${scrolled * -0.15}px)`;
      if (orb3) orb3.style.transform = `translateY(${scrolled * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenProjectById = (id: number) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#130602] text-[#F3ECE7] relative selection:bg-[#F3ECE7] selection:text-[#130602] overflow-x-hidden">
      {/* Background Liquid Ambient Orbs */}
      <div
        id="orb1"
        className="fixed top-[10%] left-[0%] w-[750px] h-[750px] bg-[#F3ECE7]/5 blur-[150px] rounded-full pointer-events-none -z-10 liquid-orb"
      />
      <div
        id="orb2"
        className="fixed top-[45%] right-[-5%] w-[850px] h-[850px] bg-[#F3ECE7]/5 blur-[160px] rounded-full pointer-events-none -z-10 liquid-orb"
        style={{ animationDelay: '-3s' }}
      />
      <div
        id="orb3"
        className="fixed bottom-[-5%] left-[15%] w-[900px] h-[900px] bg-[#F3ECE7]/8 blur-[170px] rounded-full pointer-events-none -z-10 liquid-orb"
        style={{ animationDelay: '-7s' }}
      />

      {/* Navigation Bar */}
      <Navbar onOpenProject={handleOpenProjectById} />

      {/* Main Portfolio Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenProject={handleOpenProjectById} />

        {/* Trusted Clients Pill Bar */}
        <ClientsBanner onOpenProject={handleOpenProjectById} />

        {/* Featured Projects with Category Filter */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Services Section */}
        <ServicesSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Project Video Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
