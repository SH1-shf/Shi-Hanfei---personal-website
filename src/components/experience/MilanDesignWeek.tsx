import { motion } from 'motion/react';
import { ArrowLeft, FileText, ExternalLink, Award, Users, BookOpen, Layers } from 'lucide-react';

interface MilanDesignWeekProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function MilanDesignWeek({ onBackToHome, onOpenResume }: MilanDesignWeekProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-coral/20">
      {/* Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
          
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 bg-coral hover:bg-coral-hover text-white text-xs font-semibold rounded-full cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-[#FF8A75] rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-rose-100">
              <Award className="w-3.5 h-3.5" />
              Milan Design Week Competition Project
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Luminous Years: All-Age Friendly & Elder-Adaptive Community Design
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Team Lead (Group Leader)
            </p>
          </div>

          {/* Metadata Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Timeline</span>
              <span className="text-sm font-bold text-slate-800">2026.5</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">My Role</span>
              <span className="text-sm font-bold text-slate-800">Team Lead (Group Leader)</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Project Type</span>
              <span className="text-sm font-bold text-slate-800 font-display">Smart Architectural Design</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Scope</span>
              <span className="text-sm font-bold text-slate-800">Community & Service Design</span>
            </div>
          </div>
        </div>
      </header>

      {/* Project Narrative Section */}
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Paragraph 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mt-1">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">01 / Full-Cycle Layout</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Full-Cycle Design & Coordination</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                As the team lead, I guided a cross-disciplinary team of several members through the full-cycle design of an all-age friendly community along the Han River in Xi'an. I coordinated the entire process from initial research to final visual outputs, organized multiple rounds of design iterations and model optimizations, and seamlessly integrated planning, landscaping, architecture, and interior design to ensure a cohesive design logic and complete deliverables.
              </p>
            </div>
          </div>

          {/* Paragraph 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mt-1">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">02 / User Research</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Systemic Deep User Research</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                I led systematic user research utilizing field surveys, community observations, questionnaires, and in-depth interviews. This research successfully identified the real pain points of elderly populations regarding walking safety, emotional isolation, intergenerational connection, and smart device usability. I then translated these research findings into spatial strategies and functional layout criteria, embodying a truly user-centric design methodology.
              </p>
            </div>
          </div>

          {/* Paragraph 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mt-1">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">03 / Tech & Services</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Smart Elder-Adaptive Service Design</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                I spearheaded the product logic and system design of the smart elder-adaptive service system. This included conceptualizing an IoT-based community mobile application integrating health tracking, fall detection alerts, emergency help calls, and intergenerational interaction features. By linking smart wearables, indoor sensors, and service terminals, I illustrated a complete product-thinking trajectory from user needs to system architecture.
              </p>
            </div>
          </div>

          {/* Paragraph 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mt-1">
                <Users className="w-4 h-4 animate-pulse" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">04 / Collaboration</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Cross-Disciplinary Collaboration</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                On the team management front, I coordinated professional divisions of labor and timeline progression among different team members. I steered decision-making during design disagreements, maintained consistent direction for the entire project, fostered collaborative synergy, and ensured the high-quality, on-time submission of our design entry for competition.
              </p>
            </div>
          </div>

          {/* CTA Button Block */}
          <div className="pt-8 flex flex-col items-center justify-center text-center space-y-4">
            <a
              href="https://drive.google.com/file/d/1D833DGt6k4uEAvGzLZj1DkEpN5i4402p/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-white/70 hover:bg-white/90 backdrop-blur-md text-slate-800 hover:text-slate-950 font-semibold text-sm rounded-full border border-purple-500/25 shadow-[0_0_15px_rgba(56,189,248,0.06)] hover:shadow-[0_0_25px_rgba(56,189,248,0.22)] hover:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer"
            >
              <span className="relative z-10">View Full Project Gallery</span>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-500 transition-colors" />
              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

        </div>
      </main>
    </div>
  );
}
