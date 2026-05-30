import { useState, useEffect } from 'react';
import { FileDown, Menu, X } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <div className="w-4 h-4 rounded-full bg-coral transition-transform duration-300 group-hover:scale-125" />
          <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
            {PERSONAL_DETAILS.name}
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
            id="link-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
            id="link-projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
            id="link-experience"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
            id="link-contact"
          >
            Contact
          </button>

          {/* Styled Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-5 py-2.5 bg-coral hover:bg-coral-hover text-white text-sm font-semibold rounded-full shadow-md shadow-coral/10 hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            id="btn-navbar-resume"
          >
            <FileDown className="w-4 h-4 stroke-[2.5]" />
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-coral text-white text-xs font-semibold rounded-full shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl px-6 py-6 space-y-4 flex flex-col font-medium">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-600 hover:text-slate-900 py-2 text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-slate-600 hover:text-slate-900 py-2 text-left"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-slate-600 hover:text-slate-900 py-2 text-left"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-slate-600 hover:text-slate-900 py-2 text-left"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
