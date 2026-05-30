import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle, Flame, ShieldAlert, Cpu } from 'lucide-react';
import { Project } from '../types';

interface PopupCaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export default function PopupCaseStudy({ project, onClose }: PopupCaseStudyProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Slider Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative h-full w-full max-w-2xl bg-white shadow-2xl flex flex-col z-10 select-none"
          >
            {/* Header / Sticky Top */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono font-medium ${project.circleColor}`}>
                  {project.num}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">Project Details</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                id="btn-close-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              {/* Image & Title Card */}
              <div className="space-y-4">
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dividers & Grid layout of Content blocks */}
              <div className="grid gap-6 md:grid-cols-1 border-t border-slate-100 pt-6">
                {/* Section: Overview */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#7F83FF] font-medium font-display">
                    <CheckCircle className="w-4 h-4" />
                    <span>Project Overview</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    {project.caseStudy.overview}
                  </p>
                </div>

                {/* Grid: Challenges & Solution */}
                <div className="grid gap-4 md:grid-cols-2 pt-2">
                  <div className="p-4 bg-red-50/50 rounded-2xl border border-red-100/40 space-y-2">
                    <div className="flex items-center gap-1.5 text-red-500 text-xs font-semibold uppercase tracking-wider font-mono">
                      <ShieldAlert className="w-4 h-4" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/40 space-y-2">
                    <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold uppercase tracking-wider font-mono">
                      <Flame className="w-4 h-4" />
                      <span>The Solution</span>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Part: Technologies used */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-[#EE9E5A] font-medium font-display">
                    <Cpu className="w-4 h-4" />
                    <span>Tech Stack & Methodology</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-amber-50 text-[#EE9E5A] text-xs font-semibold tracking-wide uppercase border border-amber-100/60 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics / Key Outcomes */}
                <div className="border-t border-slate-100 pt-6 space-y-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-medium block">Key Achievements & Impact</span>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.caseStudy.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-1.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-coral mt-1.5 flex-shrink-0" />
                        <span className="text-xs text-slate-600 font-medium leading-normal">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Panel */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono font-medium">Shi Hanfei Portfolio</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 hover:shadow"
              >
                Close Details <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
