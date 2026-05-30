import { GraduationCap, MapPin, TrendingUp, Code, Brain, BarChart3, ArrowRight } from 'lucide-react';
import ScrollFloat from './ScrollFloat';

interface FutureProps {
  onSelectDir: (dirId: 'frontend' | 'ai' | 'pm') => void;
}

export default function Future({ onSelectDir }: FutureProps) {
  return (
    <section id="future" className="py-20 bg-slate-50/40 select-none border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Short Timeline/Overview */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            <div className="space-y-4">
              <ScrollFloat
                animationDuration={0.8}
                ease="back.out(1.7)"
                scrollStart="top bottom-=5%"
                scrollEnd="bottom center+=20%"
                stagger={0.02}
                textClassName="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight"
              >
                Future Career Plan
              </ScrollFloat>
              <p className="text-sm font-semibold tracking-wider text-slate-400 uppercase font-mono">
                Pathway, Vision, and Professional Focus
              </p>
            </div>

            {/* Short Timeline Pathway cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-coral">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-coral bg-orange-50 px-2 py-0.5 rounded">
                    2027 Pathway
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm md:text-base text-slate-800">
                  Graduation & Further Study
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Pursue a Master’s degree in Interaction Design or Artificial Intelligence in Singapore or Hong Kong to deepen technical and design thinking convergence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-3 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-600 bg-teal-50 px-2 py-0.5 rounded">
                    2028 Vision
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm md:text-base text-slate-800">
                  Professional Practice
                </h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Return to China to kickstart a professional career, introducing innovative, user-validated interactive solutions to state-of-the-art tech teams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Three Interactive Career Directions */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
              Select a Career Focus for Detailed Perspective
            </h3>

            <div className="space-y-4">
              {/* Card 1: Frontend Development */}
              <div
                onClick={() => onSelectDir('frontend')}
                className="group cursor-pointer bg-white rounded-[2rem] border border-slate-100 p-6 md:p-8 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full filter blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-coral shrink-0 group-hover:rotate-6 transition-transform">
                    <Code className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-base md:text-lg text-slate-900 group-hover:text-coral transition-colors">
                        Frontend Development & Experience Architecture
                      </h4>
                      <ArrowRight className="w-4.5 h-4.5 text-slate-300 group-hover:text-coral group-hover:translate-x-1.5 transition-all" />
                    </div>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Designing seamless, responsive interactive platforms. Fusing clean, structured code and micro-interaction models directly with design system bounds.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        React
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        TypeScript
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        UI/UX Architecture
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: AI Product */}
              <div
                onClick={() => onSelectDir('ai')}
                className="group cursor-pointer bg-white rounded-[2rem] border border-slate-100 p-6 md:p-8 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover:rotate-6 transition-transform">
                    <Brain className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-base md:text-lg text-slate-900 group-hover:text-coral transition-colors">
                        AI-Native Product Design & Workflows
                      </h4>
                      <ArrowRight className="w-4.5 h-4.5 text-slate-300 group-hover:text-coral group-hover:translate-x-1.5 transition-all" />
                    </div>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Converting multi-modal AI generation models into human-friendly, practical product structures featuring robust visual and responsive feedback loops.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        AIGC Systems
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        Human-AI Loops
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        Workflows
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Product Management */}
              <div
                onClick={() => onSelectDir('pm')}
                className="group cursor-pointer bg-white rounded-[2rem] border border-slate-100 p-6 md:p-8 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full filter blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 group-hover:rotate-6 transition-transform">
                    <BarChart3 className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-2 flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-base md:text-lg text-slate-900 group-hover:text-coral transition-colors">
                        Product Management & Joint Leadership
                      </h4>
                      <ArrowRight className="w-4.5 h-4.5 text-slate-300 group-hover:text-coral group-hover:translate-x-1.5 transition-all" />
                    </div>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      Leading multi-role teams to define product directions. Balancing client needs, business plans, and coding feasibility under unified milestones.
                    </p>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        Strategic Planning
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        Cross-Disciplinary Team
                      </span>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        Roadmapping
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
