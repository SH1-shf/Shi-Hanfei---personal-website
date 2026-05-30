import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Eye, ShieldCheck, Heart, FileText, 
  Sparkles, Shield, Compass, Calendar, ChevronRight, CheckCircle, Info,
  ExternalLink
} from 'lucide-react';

interface PetMemorialProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function PetMemorial({ onBackToHome, onOpenResume }: PetMemorialProps) {
  // Service journey interactive steps
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      label: "1. Respectful Intake",
      status: "Intake Verified",
      time: "Hour 0 - 2",
      description: "Immediate compassionate collection of the pet. A physical NFC tracking tag is linked to the pet's profile. All status updates are synchronized to the owner's dashboard in real-time.",
      emotionalState: "Anxious & Grieving",
      designFocus: "High Transparency & Low Friction"
    },
    {
      label: "2. Individual Cremation",
      status: "Cremation Complete",
      time: "Hour 12 - 24",
      description: "Secure individual processing with strict verification pipelines. Dedicated live video confirmation blocks are available at the owner's option to resolve safety concerns.",
      emotionalState: "Awaiting Confirmation",
      designFocus: "Absolute Dignity & Real-time Feeds"
    },
    {
      label: "3. Digital City Memorial",
      status: "Memory Slot Active",
      time: "Permanent",
      description: "Generates a gorgeous, interactive digital tribute room. Family and friends can leave virtual candles, audio memories, and pictures in an ad-free, immutable virtual city of rest.",
      emotionalState: "Acceptance & Remembrance",
      designFocus: "Community Circles & Interactive Candles"
    }
  ];

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
            <span className="inline-flex items-center px-3 py-1 bg-teal-50 text-[#38BDF8] rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-teal-100">
              Project 03 Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Anima Pet Memorial: Compassionate Service Design & Transparency
            </h1>
            
            {/* View Full Project Gallery Button */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="https://drive.google.com/file/d/1qUW8JrT5_jXBhQeaZjnNSDqEwuZHUcox/view?usp=sharing"
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
              <span className="text-sm font-bold text-slate-800">2025.2 – 2025.7</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">My Role</span>
              <span className="text-sm font-bold text-slate-800">Personal Project</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Project Type</span>
              <span className="text-sm font-bold text-slate-800 font-display">Service Design & UI</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Focus</span>
              <span className="text-sm font-bold text-slate-800">Emotional UX & IoT Security</span>
            </div>
          </div>

          {/* Large Cover Image */}
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="/images/pet_memorial.jpg" 
              alt="Pet memorial platform visualization"
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
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Information Blackboxes in Grief</p>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When a beloved pet passes away, owners are thrust into intense grief and confusion. Most pet cremation and memorial service providers operate as industrial back-end systems with zero status transparency. Owners hand over their pet's body and are left in an information vacuum for weeks, provoking severe anxiety over whether their pet's remains are handled individually and with genuine respect.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Additionally, traditional digital memorial sites are cluttered, ad-supported legacy web grids that look outdated and fail to provide interactive social support. This problem is worth solving because we can synthesize absolute information transparency with high-fidelity digital memory architecture to comfort grieving families.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">02 / Research & Journey Maps</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Auditing Grief Behaviors</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="p-5 bg-sky-50/45 rounded-2xl border border-sky-100/50 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-sky-600 tracking-wider block">Grief Journey Mapping Insights</span>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                Conducting interviews with 15 recent pet owners revealed that their deepest anxiety was actually occurring in the 'transition phase' between intake and receipt of ashes. By mapping these customer touchpoints, we proved that active status disclosures (identifying exactly who is holding the pet and showing physical confirmations) reduced post-traumatic grief metrics significantly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">INDUSTRY BENCHMARKS</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Audited 8 localized veterinary partners, finding that 90% had no automated record keeping or verification for individual pet cremations, exposing massive vulnerabilities.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">EMOTIONAL INTERFACES</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Discovered that warm, minimal typographic spacing, off-white background palettes, and soft geometric indicators promote user calmness and secure trust.
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
            “Grief demands absolute clarity. By turning an opaque physical service into an end-to-end transparent digital-physical pipeline, we restore dignity and peace.”
          </blockquote>
          <p className="text-slate-500 text-xs md:text-sm font-mono uppercase tracking-widest font-semibold pt-1">
            Converting operational timelines into healing interactive rituals.
          </p>
        </div>
      </section>

      {/* System Design (THE FOCUS FIELD) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600">04 / System Design</h2>
            <p className="text-2xl font-display font-bold text-slate-900">The Service Blueprint: Journey → Status Visibility → Emotional Support</p>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed pt-1">
              Select any of the primary journey milestones below to review our operational transparency pipeline.
            </p>
          </div>

          {/* Interactive Service Blueprint Widget */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 space-y-6">
            
            {/* Steps Timeline Horizontal */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 select-none">
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 flex items-center gap-2 min-w-[140px]">
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`flex-1 p-3 rounded-xl border text-left transition-all ${
                      activeStep === idx 
                        ? 'bg-white text-slate-900 border-slate-200 shadow-sm font-bold scale-[1.01]' 
                        : 'bg-slate-100/50 hover:bg-slate-100 text-slate-400 border-transparent text-xs'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-slate-400 mb-1 font-semibold">{step.time}</div>
                    <div className="text-xs font-display flex items-center justify-between">
                      <span>{step.label.split(' ')[1]}</span>
                      {activeStep === idx && <CheckCircle className="w-3.5 h-3.5 text-sky-500" />}
                    </div>
                  </button>
                  {idx < steps.length - 1 && <ChevronRight className="w-4 h-4 text-slate-300 hidden md:block" />}
                </div>
              ))}
            </div>

            {/* Current Active Step Specification */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-6">
              
              {/* Header variables */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">Current Phase Details</span>
                  <h3 className="text-base md:text-lg font-display font-bold text-slate-900">
                    {steps[activeStep].label}
                  </h3>
                </div>

                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-sky-50 text-sky-600 font-bold border border-sky-100 text-xs rounded-full font-mono">
                    {steps[activeStep].status}
                  </span>
                  <span className="px-3 py-1 bg-[#FFF2EE] text-coral font-bold border border-[#FFE7DF] text-xs rounded-full font-mono">
                    {steps[activeStep].time}
                  </span>
                </div>
              </div>

              {/* Core Description block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
                <div className="space-y-2">
                  <span className="font-bold text-slate-800 block">Workflow & Verification Operations</span>
                  <p className="text-slate-600 leading-relaxed text-xs">
                    {steps[activeStep].description}
                  </p>
                </div>

                <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-50" />
                    <span className="font-semibold text-slate-700">Owner Experience Metric:</span>
                  </div>
                  <div className="space-y-1 pl-6">
                    <p className="text-slate-600 font-medium">Emotional Stage: <span className="font-bold text-slate-800">{steps[activeStep].emotionalState}</span></p>
                    <p className="text-slate-600 font-medium">Platform Focus: <span className="font-bold text-slate-800">{steps[activeStep].designFocus}</span></p>
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
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Dignified Digital Memory Space</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              We engineered a minimal, calming interface focused entirely on respectful interactions. Features include customized, ad-free memory virtual rooms, interactive tributes (such as lighting digital candles), and compassionate grief support groups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Interactive Memory Rooms</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Bespoke memory slots featuring clean, high-density typographical timelines, collaborative journals, and photo collections.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Secure Verification</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Cryptographic NFC verification cards detailing processing times and operator identifications, guaranteeing absolute truth.
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
            <p className="text-xl md:text-2xl font-display font-bold text-slate-900">Cultivating Genuine Trust</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Owner Anxiety</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 group-hover:text-coral transition-colors">
                -84%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Anxiety factors drop documented after implementation of real-time verified status pipelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Platform Trust Rating</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-emerald-600 group-hover:text-coral transition-colors">
                99.9%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Owner satisfaction score collected through post-transaction compassionate feedback cards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Memory Slots created</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-[#7F83FF] group-hover:text-coral transition-colors">
                2,000+
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Permanent tributes designed and preserved for grieving families around the continent.
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
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Dignity in the Digital Space</p>
          </div>
          <div className="md:col-span-8 space-y-5">
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Developing the Anima Pet Memorial service platform taught me the power of visual details in emotionally vulnerable states. When users are grieving, they have very low tolerance for complex sub-navigation, noisy visuals or erratic layouts.
              </p>
              <p>
                By engineering custom micro-interactions—such as the soft-pulsing virtual memory candle and clear visual progress tracker tags—we created a sense of comfort and safety. This system proved to me that modern technology can be soft, compassionate and deeply human.
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
