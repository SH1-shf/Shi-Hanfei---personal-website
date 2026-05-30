import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Future from './components/Future';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import { Project } from './types';

// Import newly created custom project detail pages
import SensorSystem from './components/projects/SensorSystem';
import Tuvalu from './components/projects/Tuvalu';
import PetMemorial from './components/projects/PetMemorial';
import SmartMuseum from './components/projects/SmartMuseum';
import MilanDesignWeek from './components/experience/MilanDesignWeek';

// Import newly created career plan detail pages
import FrontendDev from './components/future/FrontendDev';
import AIProduct from './components/future/AIProduct';
import ProductManagement from './components/future/ProductManagement';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash;
    if (hash && (hash.startsWith('#/project/') || hash.startsWith('#/experience/') || hash.startsWith('#/future/'))) {
      return hash.substring(1); // e.g. "/project/sensor-system" or "/experience/milan-design-week" or "/future/frontend-development"
    }
    return window.location.pathname;
  });
  
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync routing state with popstate and hashchange events
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash && (hash.startsWith('#/project/') || hash.startsWith('#/experience/') || hash.startsWith('#/future/'))) {
        setCurrentPath(hash.substring(1));
      } else {
        setCurrentPath(window.location.pathname);
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleSelectProject = (project: Project) => {
    let targetPath = "/";
    if (project.id === "proj-1") targetPath = "/project/sensor-system";
    else if (project.id === "proj-2") targetPath = "/project/tuvalu";
    else if (project.id === "proj-3") targetPath = "/project/pet-memorial";
    else if (project.id === "proj-4") targetPath = "/project/smart-museum";

    window.history.pushState({}, '', targetPath);
    window.location.hash = targetPath;
    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectExperience = (id: string) => {
    let targetPath = "/";
    if (id === "exp-1") targetPath = "/experience/milan-design-week";

    window.history.pushState({}, '', targetPath);
    window.location.hash = targetPath;
    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleSelectFutureDir = (dirId: 'frontend' | 'ai' | 'pm') => {
    let targetPath = "/";
    if (dirId === "frontend") targetPath = "/future/frontend-development";
    else if (dirId === "ai") targetPath = "/future/ai-product";
    else if (dirId === "pm") targetPath = "/future/product-management";

    window.history.pushState({}, '', targetPath);
    window.location.hash = targetPath;
    setCurrentPath(targetPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    window.history.pushState({}, '', '/');
    window.location.hash = '';
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Dedicated Route Router
  if (currentPath === '/project/sensor-system') {
    return (
      <>
        <SensorSystem onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/project/tuvalu') {
    return (
      <>
        <Tuvalu onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/project/pet-memorial') {
    return (
      <>
        <PetMemorial onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/project/smart-museum') {
    return (
      <>
        <SmartMuseum onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/experience/milan-design-week') {
    return (
      <>
        <MilanDesignWeek onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/future/frontend-development') {
    return (
      <>
        <FrontendDev onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/future/ai-product') {
    return (
      <>
        <AIProduct onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  if (currentPath === '/future/product-management') {
    return (
      <>
        <ProductManagement onBackToHome={handleBackToHome} onOpenResume={() => setIsResumeOpen(true)} />
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-coral/20">
      {/* Scroll Indicator or Header Banner */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Pages of the Web App */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onScrollToProjects={handleScrollToProjects}
        />
        <About />
        <Projects onSelectProject={handleSelectProject} />
        <Experience onSelectExperience={handleSelectExperience} />
        <Future onSelectDir={handleSelectFutureDir} />
        <Contact />
      </main>

      {/* Interactive Printable CV Portal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
