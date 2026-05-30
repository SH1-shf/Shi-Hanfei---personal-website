import { motion } from 'motion/react';
import { ArrowLeft, FileText, Brain, Sparkles, UserCheck, ShieldAlert, Cpu, Heart } from 'lucide-react';

interface AIProductProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function AIProduct({ onBackToHome, onOpenResume }: AIProductProps) {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-purple-100/50">
              <Brain className="w-3.5 h-3.5" />
              Career Focus Direction 02
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              AI-Native Product Design & Systems Thinker
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Transforming artificial intelligence models into humane, actionable workflow solutions and interactive products.
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Target Role</span>
              <span className="text-sm font-bold text-slate-800">AI Product Designer / PM</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Capability</span>
              <span className="text-sm font-bold text-slate-800">AIGC Scenarios, Systems Design</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Key Interest</span>
              <span className="text-sm font-bold text-slate-800">Human-AI Interaction Loops</span>
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
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mt-1 shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">01 / Strengths</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Strengths & Alignment</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Hands-on AIGC Application:</strong> Direct experience applying AIGC tools to draft narrative situations, simulate design workflows, and visualize speculative physical spaces (e.g., in Tuvalu Virtual City and Peiligang smart systems).
                </li>
                <li>
                  <strong className="text-slate-800">Insight-to-Feature Translation:</strong> Skilled at parsing deep qualitative user research interviews and transforming ambiguous feedback into discrete, functional product mechanisms.
                </li>
                <li>
                  <strong className="text-slate-800">Responsive Logic Mastery:</strong> Expert understanding of digital-response models (environmental triggers, user state loops) designed to keep intelligent systems fully deterministic, safe, and intuitive.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-505 mt-1 shrink-0">
                <ShieldAlert className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">02 / Perspective</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Industry Perspective</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Deep Integration Translation:</strong> AI models are powerful but fundamentally amorphous. The absolute frontier in products is translating fuzzy AI outputs into highly predictable, contextual, and delightful visual interfaces.
                </li>
                <li>
                  <strong className="text-slate-800">Ethical & Legible Systems:</strong> AI interfaces must minimize trust gaps. Designing clear cues that convey AI confidence bounds, system telemetry, and source criteria is vital for sustainable enterprise products.
                </li>
                <li>
                  <strong className="text-slate-800">Cross-Disciplinary Literacy:</strong> High-leverage teams values product creators who understand AI model bounds and basic API coding realities, avoiding unfeasible features from day one.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 mt-1 shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">03 / Contribution</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Contribution to Industry</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">AI-native Workflows:</strong> Crafting native workflow structures that embed generative intelligence organically inside software workspaces, turning passive assistants into active, context-aware co-pilots.
                </li>
                <li>
                  <strong className="text-slate-800">Human-Centric Integration:</strong> Making complex model layers highly approachable for non-technical users, relying on natural layouts, prompt guides, and predictable result spaces.
                </li>
                <li>
                  <strong className="text-slate-800">Frictionless Adoption Interfaces:</strong> Maximizing AI feature usage by supplying prompt clarity, interactive progress states, micro-animations, and immediate visual feedback layers.
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
