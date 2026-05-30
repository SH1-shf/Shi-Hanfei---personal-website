import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Award, Compass, BookOpen, Star, 
  Sparkles, CheckCircle2, RotateCcw, FileText, Landmark, ExternalLink 
} from 'lucide-react';

interface SmartMuseumProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function SmartMuseum({ onBackToHome, onOpenResume }: SmartMuseumProps) {
  // Gamified achievements states
  const [solvedTasks, setSolvedTasks] = useState<Record<string, boolean>>({});
  const [currentScore, setCurrentScore] = useState<number>(0);

  const museumTasks = [
    {
      id: "pottery",
      title: "Identify Cord-Marked Red Clastic Clay Shards",
      exp: 150,
      rewardName: "Neolithic Kiln Master Badge",
      description: "Analyze micro-grooves and thermal firing color gradients on archaeological vessels to understand Neolithic community manufacturing methods."
    },
    {
      id: "botanic",
      title: "Analyze Peiligang Rice Grain Fossil Structures",
      exp: 200,
      rewardName: "Agricultural Origins Specialist Badge",
      description: "Examine carbonized phytolith dimensions to distinguish wild progenitor seeds from early domesticated agricultural grain species."
    },
    {
      id: "spatial",
      title: "Reconstruct Circular Semi-Subterranean Dwellings",
      exp: 250,
      rewardName: "Neolithic Spacial Architect Badge",
      description: "Position virtual structural postholes, clay hearth boundaries, and thatched roof slopes to reconstruct robust prehistoric houses."
    }
  ];

  const handleSolveTask = (id: string, exp: number) => {
    if (solvedTasks[id]) return;
    setSolvedTasks(prev => ({ ...prev, [id]: true }));
    setCurrentScore(prev => prev + exp);
  };

  const handleReset = () => {
    setSolvedTasks({});
    setCurrentScore(0);
  };

  const totalPossibleScore = museumTasks.reduce((acc, t) => acc + t.exp, 0);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-coral/20">
      {/* Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
          
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 bg-coral hover:bg-coral-hover text-white text-xs font-semibold rounded-full"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 bg-amber-50 text-[#EE9E5A] rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-amber-100">
              Project 04 Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Peiligang Smart Museum: Immersive Cultural Gamification
            </h1>
            
            {/* View Full Project Gallery Button */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://drive.google.com/file/d/1i1Dn1S5G927NbDN_q75hsFwTbXyo-PS3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 bg-white/70 hover:bg-white/90 backdrop-blur-md text-slate-800 hover:text-slate-950 font-semibold text-sm rounded-full border border-purple-500/25 shadow-[0_0_15px_rgba(56,189,248,0.06)] hover:shadow-[0_0_25px_rgba(56,189,248,0.22)] hover:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 scale-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer"
              >
                <span className="relative z-10">View Full Project Gallery</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-500 transition-colors" />
                {/* Glow overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>

          {/* Metadata Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Timeline</span>
              <span className="text-sm font-bold text-slate-800">2024.6 – 2025.1</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">My Role</span>
              <span className="text-sm font-bold text-slate-800">Personal Project</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Project Type</span>
              <span className="text-sm font-bold text-slate-800 font-display">Gamification Design</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Tech</span>
              <span className="text-sm font-bold text-slate-800">React, SVG Animation, C#</span>
            </div>
          </div>

          {/* Large Cover Image */}
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="/images/peiligang_museum.jpg" 
              alt="Peiligang Smart Museum exhibits visual"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 bg-slate-50/40 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">01 / The Problem</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Dull Shards & Disconnected Audiences</p>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Neolithic sites, such as the Peiligang excavation, house immensely significant milestones in early human agricultural and ceramic development. However, to the average modern youth group visiting standard regional galleries, these vital breakthroughs look like uninspiring, dust-covered red pottery shards and charred seeds secured in flat glass display counters.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Traditional mobile audioguides fail to solve this disconnect because they are linear and passive voice recorders. Prehistoric history is ignored because museums lack a mechanism that transforms physical navigation into active discovery missions, rewarding tactile observation.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">02 / Research & Archeology</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Observing Museum Dwell Times</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="p-5 bg-amber-50/45 rounded-2xl border border-amber-100/50 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-amber-700 tracking-wider block">Behavioral Observations</span>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                By shadowing and auditing 30 young students visiting a regional Neolithic gallery, I tracked their dwell behavior. On average, students spent less than 12 seconds per display case, expressing extreme boredom with flat factual metadata labels. However, when we introduced an exploratory clue-sheet, the average dwell timeline surged instantly, proving that mission-oriented tasks drive deeper observation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">CULTURAL DIALOGUES</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Interviewed 4 archaeological curators to translate complex scientific carbon-dating benchmarks into approachable high-fidelity digital puzzles.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">GAMIFICATION AUDITS</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Studied successful interactive educational games (e.g. Duolingo mechanics) to implement clear, non-addictive micro-rewards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="py-12 bg-[#FFFBF5] border-y border-amber-100/40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-mustard">03 / Key Insight</h2>
          <blockquote className="text-xl md:text-2xl font-display font-bold text-slate-900 max-w-2xl mx-auto tracking-tight leading-normal py-2">
            “Neolithic artifacts shouldn't just be viewed—they must be investigated. By gamifying physical space, we turn galleries into archaeological playgrounds.”
          </blockquote>
          <p className="text-slate-500 text-xs md:text-sm font-mono uppercase tracking-widest font-semibold pt-1">
            Bridging material shards with active user cognitive discovery cycles.
          </p>
        </div>
      </section>

      {/* System Design (THE FOCUS FIELD) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600">04 / System Design</h2>
            <p className="text-2xl font-display font-bold text-slate-900">Engagement Logic: Navigation → Task System → Achievement Mechanism</p>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed pt-1">
              Play our archaeological task dashboard below! Click "Complete Discovery Task" to simulate unlocking badges, earning experience points and securing achievements dynamically.
            </p>
          </div>

          {/* Interactive Game Mechanics Widget */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 space-y-6">
            
            {/* Gamified Stat Bar */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm flex items-center justify-between flex-wrap gap-4 select-none">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase leading-none mb-1">Archaeological Level</span>
                  <div className="text-sm font-extrabold text-slate-900">
                    Neolithic Explorer Level {currentScore >= 600 ? 4 : currentScore >= 350 ? 3 : currentScore >= 150 ? 2 : 1}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="flex-1 md:max-w-xs space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-slate-400">
                  <span>EXP SCORE: {currentScore} / {totalPossibleScore}</span>
                  <span>{Math.round((currentScore / totalPossibleScore) * 100)}% UNLOCKED</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-coral rounded-full transition-all duration-500"
                    style={{ width: `${(currentScore / totalPossibleScore) * 100}%` }}
                  />
                </div>
              </div>

              {currentScore > 0 && (
                <button
                  onClick={handleReset}
                  className="p-2 text-slate-400 hover:text-slate-600 border border-slate-250 hover:border-slate-300 rounded-lg cursor-pointer"
                  title="Reset score board"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Tasks and Accomplishments List */}
            <div className="grid grid-cols-1 gap-4">
              {museumTasks.map((task) => {
                const isSolved = solvedTasks[task.id];
                return (
                  <div 
                    key={task.id}
                    className={`p-5 rounded-2xl border transition-all ${
                      isSolved 
                        ? 'bg-neutral-50/50 border-emerald-100 text-slate-500' 
                        : 'bg-white border-slate-200/70 hover:shadow-md'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-2.5 h-2.5 rounded-full ${isSolved ? 'bg-emerald-500' : 'bg-orange-400 animate-pulse'}`} />
                          <h4 className={`font-display font-bold text-xs sm:text-sm leading-tight ${isSolved ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                            {task.title}
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-550 leading-relaxed md:max-w-xl">
                          {task.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center select-none">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                          +{task.exp} EXP
                        </span>

                        <button
                          onClick={() => handleSolveTask(task.id, task.exp)}
                          disabled={isSolved}
                          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                            isSolved 
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                              : 'bg-coral hover:bg-coral-hover text-white'
                          }`}
                        >
                          {isSolved ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Solved</span>
                            </>
                          ) : (
                            <span>Solve Clue</span>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Unlocked Badge preview panel */}
                    <AnimatePresence>
                      {isSolved && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-dashed border-slate-200/60 flex items-center gap-2 text-xs text-emerald-700"
                        >
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-bounce" />
                          <span>Unlocked: <strong>{task.rewardName}</strong> added to digital passport profile.</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Design Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">05 / Design Solution</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">The Gamified Museum Experience</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We completed a full-scale mobile application integrating physical museum bluetooth beacons with responsive web-apps. When visitors walk into a specific neolithic chamber, the application synchronizes physical coordinates, rendering relevant interactive reconstruction challenges in high-resolution vector panels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <Compass className="w-4 h-4 text-[#EE9E5A]" />
                  <span>Interactive Navigation Mapping</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Real-time indoor map pinpointing historical chambers, active excavation logs and user tracking coordinates.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <BookOpen className="w-4 h-4 text-[#7F83FF]" />
                  <span>Cultural Quest Repository</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  3D reconstruction modules letting youngsters drag components to restore ancient vessels with tactile haptic sound feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation & Outcome */}
      <section className="py-16 bg-slate-50/40 border-y border-slate-100 select-none">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">06 / Validation & Impact</h2>
            <p className="text-xl md:text-2xl font-display font-bold text-slate-900">Revived Neolithic Heritage</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Museum Dwell Timeline</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 group-hover:text-coral transition-colors">
                +42%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Dwell times increase monitored in young student visiting groups on Peiligang exhibits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Tributes completed</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-600 group-hover:text-coral transition-colors">
                5,000+
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Digital pottery verification stamps awarded to youngsters across the municipal school trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Audience Rating</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-[#7F83FF] group-hover:text-coral transition-colors">
                98.6%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Educators praising the interactive task system as highly constructive for learning Neolithic history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">07 / Reflection</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Interaction over Decoration</p>
          </div>
          <div className="md:col-span-8 space-y-5">
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Developing the Peiligang Smart Museum platform consolidated my belief that interaction design is not about superficial animations or aesthetic charts, but about shaping real human behaviors and cognitive engagement.
              </p>
              <p>
                Balancing rigorous archeological data definitions with digestible interactive quest layers was a fascinating design challenge. It forced me to refine storytelling pathways, focus on clear tasks, and respect the ancient context while making it relatable to users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Full Case Study CTA */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100 flex flex-col items-center justify-center text-center space-y-6 select-none">
        <p className="text-sm text-slate-500 font-mono">Shi Hanfei Frontend Engineer × Product Designer</p>
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full text-base font-semibold shadow-xl hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          View Full Portfolio
          <ArrowRight className="w-5 h-5 text-coral" />
        </button>
      </footer>
    </div>
  );
}
