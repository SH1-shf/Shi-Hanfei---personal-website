import { motion } from 'motion/react';
import { ArrowLeft, FileText, Code, Cpu, Sparkles, Layout, Monitor, Flame } from 'lucide-react';

interface FrontendDevProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function FrontendDev({ onBackToHome, onOpenResume }: FrontendDevProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-coral/20">
      {/* Header Navigation */}
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

      {/* Hero Header Block */}
      <header className="pt-32 pb-14 bg-white border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-coral rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-amber-100/50">
              <Code className="w-3.5 h-3.5" />
              Career Focus Direction 01
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Frontend Development & Experience Architecture
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Bridging the gap between creative UI/UX design and production-ready interactive systems.
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Target Role</span>
              <span className="text-sm font-bold text-slate-800">Frontend Engineer</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Tech Stack</span>
              <span className="text-sm font-bold text-slate-800">React, TypeScript, Vite</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Key Interest</span>
              <span className="text-sm font-bold text-slate-800">Creative Interactive Systems</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Timeline Focus</span>
              <span className="text-sm font-bold text-slate-800">2027 – Beyond</span>
            </div>
          </div>
        </div>
      </header>

      {/* Detail Narrative Grid */}
      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Subsection 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-coral mt-1 shrink-0">
                <Layout className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">01 / Strengths</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Strengths & Alignment</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Systemic Interaction Experience:</strong> Proven background in assembling responsive physical-digital interactive environments (e.g., the Kinetic Sensor-Driven Responsive System). This translates directly to building highly dynamic, event-driven web environments.
                </li>
                <li>
                  <strong className="text-slate-800">Design System Architecture:</strong> Advanced intuition for spatial layout, layout symmetry, typography scaling, responsive systems, and digital micro-transitions drawn from architectural training.
                </li>
                <li>
                  <strong className="text-slate-800">Modern Toolkit Proficiency:</strong> Efficient development workflows with React, Tailwind CSS, Vite, and integrated AIGC development tools, leading to extremely fast development-to-deployment feedback loops.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-coral mt-1 shrink-0">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">02 / Perspective</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Industry Perspective</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Intelligent Frontend Blending:</strong> Modern front-end development is moving past static layout grids. We are entering an era of AI-orchestrated adaptive interfaces, requiring code architecture designed specifically around intent-based interaction models.
                </li>
                <li>
                  <strong className="text-slate-800">Seamless Client Experiences:</strong> Modern web consumers expect real-time, zero-latency layouts that feel organic and intelligent rather than purely robotic or uniform.
                </li>
                <li>
                  <strong className="text-slate-800">Cross-Disciplinary Synthesizers:</strong> True leverage lies in engineers who think as designers, synthesizing high-fidelity interface detail with sound, scalable, type-safe implementation logic.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500 mt-1 shrink-0">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">03 / Contribution</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Contribution to Industry</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Design-to-Code Engineering:</strong> Injecting genuine design and spatial philosophy directly into production interfaces, avoiding translation loss between design prototypes and final components.
                </li>
                <li>
                  <strong className="text-slate-800">Human-AI Interaction Paradigms:</strong> Researching, implementing, and validating modern interaction loops (perception-decision-feedback) that make technical workflows intuitive and widely accessible.
                </li>
                <li>
                  <strong className="text-slate-800">Micro-interaction & Performance Focus:</strong> Creating lightweight, beautifully animated components that respond predictably and delightful to user-driven states without sacrificing core layout integrity.
                </li>
              </ul>
            </div>
          </div>

          {/* Call To Action Go Back */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 px-6 py-3 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-slate-900 font-semibold text-sm rounded-full transition-all cursor-pointer bg-white hover:bg-slate-50"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio Home</span>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
