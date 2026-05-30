import { motion } from 'motion/react';
import { ArrowLeft, FileText, BarChart3, Users, Network, TrendingUp, CheckSquare, Target } from 'lucide-react';

interface ProductManagementProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function ProductManagement({ onBackToHome, onOpenResume }: ProductManagementProps) {
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-teal-100/50">
              <BarChart3 className="w-3.5 h-3.5" />
              Career Focus Direction 03
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Product Management & Cross-Disciplinary Leadership
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Orchestrating teams and strategies to transform qualitative user insights and physical constraints into high-value product solutions.
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Target Role</span>
              <span className="text-sm font-bold text-slate-800">Product Manager</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Capability</span>
              <span className="text-sm font-bold text-slate-800">Team Leadership, Strategy</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Key Interest</span>
              <span className="text-sm font-bold text-slate-800">Product-Led Growth (PLG)</span>
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
              <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 mt-1 shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">01 / Strengths</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Strengths & Alignment</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Proven Multi-Disciplinary Leadership:</strong> Guided multi-role student designers and researchers during complex design exhibition entries (e.g., Milan Design Week All-Age Friendly Community Project), aligning divergent timelines and deliverables beautifully.
                </li>
                <li>
                  <strong className="text-slate-800">Structured System Logic:</strong> Experienced in formalizing fuzzy user interview points into structured system requirements and visual diagrammed user-journey paths.
                </li>
                <li>
                  <strong className="text-slate-800">Dynamic Value Balancing:</strong> Well-versed in negotiating project parameters across technical feasibility (Arduino pipelines, web APIs), user intent (accessibility, emotional support), and operational goals.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mt-1 shrink-0">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">02 / Perspective</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Industry Perspective</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">Bridge Builder Roles:</strong> The most valuable product managers do not just manage spreadsheets. They act as translation layers bridging engineering, creative design, and strategic goals.
                </li>
                <li>
                  <strong className="text-slate-800">Systems-Level Execution:</strong> Prioritizing evidence and user-validated feedback over superficial design and technology hype is the cornerstone of durable modern digital software.
                </li>
                <li>
                  <strong className="text-slate-800">Adaptive Product Evolution:</strong> Product managers in the next decade must master the orchestrations of prompt APIs, structured local stores, and AI-driven interfaces to support adaptive user journeys.
                </li>
              </ul>
            </div>
          </div>

          {/* Subsection 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-slate-100 pb-10">
            <div className="md:col-span-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-coral mt-1 shrink-0">
                <Target className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">03 / Contribution</h2>
                <p className="text-base font-display font-bold text-slate-800 mt-1">Contribution to Industry</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
                <li>
                  <strong className="text-slate-800">User-Validated Leadership:</strong> Leading teams to create coherent, accessible products that balance user emotional constraints with technical correctness.
                </li>
                <li>
                  <strong className="text-slate-800">Systemic Workflows Design:</strong> Designing intelligent product strategies that utilize artificial intelligence parameters to optimize repetitive processes, turning friction into productivity metrics.
                </li>
                <li>
                  <strong className="text-slate-800">Structured Process Delivery:</strong> Standardizing communication and artifact management across active design and developer loops to ensure predictable, bug-free, on-schedule deployments.
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
