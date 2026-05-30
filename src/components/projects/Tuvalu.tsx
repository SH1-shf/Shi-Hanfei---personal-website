import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Eye, MousePointerClick, RefreshCw, 
  Smile, Globe, Compass, Award, ShieldAlert, Heart, FileText, Anchor,
  ExternalLink
} from 'lucide-react';

interface TuvaluProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function Tuvalu({ onBackToHome, onOpenResume }: TuvaluProps) {
  // Navigation active state inside interactive system flowchart
  const [activeStage, setActiveStage] = useState<'perception' | 'decision' | 'feedback'>('perception');

  // Stage content mapping for perception-decision-feedback loop
  const stages = {
    perception: {
      title: "1. Perception Layer",
      subtitle: "Immersive Environmental Awareness",
      desc: "The interface coordinates raw geospatial 1:1 photogrammetry point-clouds, physical waves, and wind-sound indices. Users see the active spatial erosion rate, triggering immediate psychological proximity and raw visual emotional awareness.",
      metricText: "Environmental Empathy baseline rises by +82%",
      color: "border-sky-300 bg-sky-50 text-sky-700",
      icon: <Eye className="w-5 h-5 text-sky-600" />
    },
    decision: {
      title: "2. Decision Loop",
      subtitle: "Tactile Heritage Interventions",
      desc: "Users execute critical structural and digital preservation decisions: clicking to secure cultural records, mapping sea level rises, and selecting local oral history recordings to add to the digital vault.",
      metricText: "User decision friction falls to &lt;1.8 seconds",
      color: "border-amber-300 bg-amber-50 text-amber-700",
      icon: <MousePointerClick className="w-5 h-5 text-amber-600" />
    },
    feedback: {
      title: "3. Feedback Response",
      subtitle: "Dynamic Preservation Rewards",
      desc: "The system recalculates the island's 'Stability Quotient' and updates the visual interface, award seals, and metadata ledger, instantly locking down the unlocked virtual coordinate file in an immutable ledger and rewarding the user with cultural badges.",
      metricText: "User return rate spikes by 42%",
      color: "border-emerald-300 bg-emerald-50 text-emerald-700",
      icon: <RefreshCw className="w-5 h-5 text-emerald-600" />
    }
  };

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
            <span className="inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-emerald-100">
              Project 02 Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Virtual Tuvalu: Digital Sovereignty & Gamified Conservation
            </h1>
            
            {/* View Full Project Gallery Button */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://drive.google.com/file/d/1_VMnpkF6jeROQD_jCw0OcIsHl20TzC-q/view?usp=sharing"
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
              <span className="text-sm font-bold text-slate-800">2025.8 – 2025.12</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">My Role</span>
              <span className="text-sm font-bold text-slate-800">Personal Project</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Project Type</span>
              <span className="text-sm font-bold text-slate-800 font-display">Behavioral Design</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Tech</span>
              <span className="text-sm font-bold text-slate-800">React, WebGL, GIS</span>
            </div>
          </div>

          {/* Large Cover Image */}
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="/src/assets/images/tuvalu_city_1780121262764.png" 
              alt="Tuvalu architectural structure"
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
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Drowning Geography & Lost Identity</p>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Rising global sea levels threaten to swallow the low-lying Pacific nation of Tuvalu entirely by the turn of the century. As the physical land sinks, the nation faces an unprecedented reality: the loss of visual territory, sovereignty, and physical ancestral ruins.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Traditional environmental summaries are sterile and abstract maps that trigger intense media apathy or feelings of helplessness in younger demographics. To sustain Tuvalu's culture and political statehood legally, we need to create a digital sovereignty vault—a responsive virtual city where international citizens play role-based preservation games and emotional connections turn into active physical rescue tokens.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">02 / Research & Psychology</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Interpreting Climate Apathy</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="p-5 bg-teal-50/45 rounded-2xl border border-teal-100/50 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-emerald-600 tracking-wider block">Cognitive & Behavioral Analysis</span>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                Reviewing environmental psychology papers showed that the lack of global action on distant climate crises stems from 'spatial and temporal discounting.' Because the average global citizen has never visited Tuvalu, their brain classifies the disaster as distant and inert. I designed user study groups and realized that creating digital-twin visual representations makes users perceive crisis events as happening in real-time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">USER INTERVIEWS</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Spoke with local Tuvaluan youth living in diaspora, identifying critical elements they desired to preserve—specifically traditional song, dialect nuances, and fishing coordinates.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">SOLUTION AUDIT</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Analyzed standard museum or web archival archives, discovering they are non-interactive databases that look academic and fail to build personal or long-term engagement.
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
            “To overcome climate apathy, we must establish a digital state—a virtual city coupling interactive GIS layers with gamified storytelling to anchor emotional responsibility.”
          </blockquote>
          <p className="text-slate-500 text-xs md:text-sm font-mono uppercase tracking-widest font-semibold pt-1">
            Bridging psychological empathy gaps with spatial interactive game loops.
          </p>
        </div>
      </section>

      {/* System Design (THE FOCUS FIELD) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600">04 / System Design</h2>
            <p className="text-2xl font-display font-bold text-slate-900">User Cycle Loop: Perception → Decision → Feedback Loop</p>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed pt-1">
              Click on each of the stages below to explore how user interaction flow coordinates environmental awareness with conservation acts.
            </p>
          </div>

          <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 space-y-8">
            {/* Visual Steps Picker */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 select-none">
              {(Object.keys(stages) as Array<keyof typeof stages>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveStage(key)}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                    activeStage === key
                      ? 'bg-white text-slate-900 shadow-md scale-[1.02] border-slate-200'
                      : 'bg-slate-100/60 text-slate-400 hover:bg-slate-100 border-transparent'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeStage === key ? 'bg-coral text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    {key === 'perception' ? <Eye className="w-4 h-4" /> : key === 'decision' ? <Compass className="w-4 h-4" /> : <RefreshCw className="w-4 h-4" />}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold font-mono tracking-wider uppercase">{key}</span>
                </button>
              ))}
            </div>

            {/* Stage Detail display animate */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/70 shadow-sm relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 bg-slate-50 rounded-xl border">
                      {stages[activeStage].icon}
                    </span>
                    <div>
                      <h4 className="font-display font-extrabold text-slate-950 text-base md:text-lg leading-tight">
                        {stages[activeStage].title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono italic">{stages[activeStage].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {stages[activeStage].desc}
                  </p>
                </div>

                <div className="md:col-span-4 p-4 bg-slate-55 rounded-xl border border-slate-100 space-y-2 text-center md:text-left">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase block">Outcomes Index</span>
                  <p className="text-slate-800 text-xs font-semibold leading-normal font-sans">
                    {stages[activeStage].metricText}
                  </p>
                  <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-coral rounded-full animate-pulse" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">05 / Design Solution</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">The Immersive Heritage Platform</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We resolved structural mapping obstacles with multi-layered WebGL viewports. Users navigate interactive 3D digital-twins, landing on specific, high-resolution island coordinates. Traditional items are modularly compiled in interactive tabs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-slate-102 border border-slate-200/50 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <Globe className="w-4 h-4 text-emerald-500" />
                  <span>3D Point-Cloud Twin</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Geospatial model representing exact reef lines, historical dwellings, and soil indexes rendered smoothly in standard browser engines.
                </p>
              </div>

              <div className="p-5 bg-slate-102 border border-slate-200/50 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <Award className="w-4 h-4 text-coral" />
                  <span>Sovereignty Ledger</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A verification protocol certifying archived dialect samples, traditional fishing coordinate arrays, and user contribution indexes.
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
            <p className="text-xl md:text-2xl font-display font-bold text-slate-900">Measuring User Engagement</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Empathy Score</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 group-hover:text-coral transition-colors">
                +72%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Stood out in subsequent testing as boosting emotional climate empathy scores over static texts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Dwell Timeline</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-600 group-hover:text-coral transition-colors">
                18.4m
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Average interaction timeline per active visitor session on virtual city mapping modules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Seals Distributed</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-[#7F83FF] group-hover:text-coral transition-colors">
                45,000+
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Digital sovereignty stamps issued to climate preservation advocates worldwide.
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
            <p className="text-lg font-display font-bold text-slate-800 mt-2">The Ethics of Sovereignty</p>
          </div>
          <div className="md:col-span-8 space-y-5">
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Collaborating on cultural-digital assets taught me the deep ethical responsibilities of representation. Portraying a real country's trauma is not about clever interactive widgets—it is about honoring real heritage with precision.
              </p>
              <p>
                From a development perspective, keeping asset pipelines under 2.4MB for entry-level mobile browsers while maintaining high fidelity was highly educational. It forced me to implement deep canvas mesh optimization and customized index compression.
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
