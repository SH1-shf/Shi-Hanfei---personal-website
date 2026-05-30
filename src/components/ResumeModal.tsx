import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Award } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const triggerPrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 md:p-6 print:p-0 select-none">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm print:hidden"
          />

          {/* Dialog Document (Print optimized) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden min-h-[80vh] print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 print:absolute print:inset-0"
          >
            {/* Header / Actions Panel for the Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 print:hidden">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">Interactive Resume Document</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPrint}
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                  id="btn-print-resume"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print CV
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                  id="btn-close-resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0 space-y-8 bg-white" id="resume-print-area">
              {/* Top Header Block */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b-2 border-slate-100 pb-6 gap-4">
                <div className="space-y-2">
                  <h1 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                    {PERSONAL_DETAILS.name}
                  </h1>
                  <p className="text-coral text-sm md:text-base font-semibold uppercase tracking-wider font-mono">
                    {PERSONAL_DETAILS.role}
                  </p>
                </div>

                {/* Direct Metadata items (compact) */}
                <div className="text-xs md:text-sm text-slate-500 font-mono space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_DETAILS.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PERSONAL_DETAILS.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Xi'an, Shaanxi Province, China</span>
                  </div>
                </div>
              </div>

              {/* Main 2-column resume layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:grid-cols-12 print:gap-8">
                {/* Left larger portion (Education, Experience, Projects) */}
                <div className="md:col-span-8 print:col-span-8 space-y-8">
                  {/* EDUCATION BLOCK */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <GraduationCap className="w-5 h-5 text-coral" />
                      <h2 className="text-lg font-display font-bold text-slate-900 uppercase tracking-wide">
                        Education
                      </h2>
                    </div>

                    <div className="space-y-2 relative pl-4 mt-2">
                      {/* Timeline line */}
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-slate-100" />
                      
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h3 className="font-semibold text-slate-800 text-sm md:text-base">
                          Xi'an Jiaotong University
                        </h3>
                        <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> 2022 - 2027
                        </span>
                      </div>
                      
                      <p className="text-xs md:text-sm text-slate-500 leading-normal">
                        Bachelor of Architecture (5-year engineering program)
                      </p>

                      <div className="flex items-center gap-2 pt-1">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-[#EE9E5A] border border-amber-100/50">
                          <Award className="w-3 h-3" /> GPA: 87.14 / 100
                        </span>
                        <span className="text-xs text-slate-400">• Academic Excellence Rank</span>
                      </div>
                    </div>
                  </div>

                  {/* EXPERIENCES BLOCK */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Calendar className="w-5 h-5 text-coral" />
                      <h2 className="text-lg font-display font-bold text-slate-900 uppercase tracking-wide">
                        Leadership & Organizations
                      </h2>
                    </div>

                    <div className="space-y-4 relative pl-4 mt-2">
                      {/* Timeline bar */}
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-slate-100" />

                      <div className="space-y-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="font-semibold text-slate-800 text-sm md:text-base">
                            Milan Design Week Project Leader
                          </h4>
                          <span className="text-xs font-mono font-semibold text-slate-400">2024</span>
                        </div>
                        <p className="text-xs text-slate-400 italic">International Academic Architecture Exhibition</p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Led cross-disciplinary student teams outlining landscape structural mockups, physical kinetic models, and responsive electronics schemas. Synchronized deliverables for public preview.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="font-semibold text-slate-800 text-sm md:text-base">
                            Campus History Lecturer
                          </h4>
                          <span className="text-xs font-mono font-semibold text-slate-400">2023 - Present</span>
                        </div>
                        <p className="text-xs text-slate-400 italic">Student Academic Association</p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Conducted over 10 public tours, lectures, and educational mapping initiatives bridging the divide between architectural heritage and digital modeling.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h4 className="font-semibold text-slate-800 text-sm md:text-base">
                            Founder & President of Badminton Club
                          </h4>
                          <span className="text-xs font-mono font-semibold text-slate-400">2022 - Present</span>
                        </div>
                        <p className="text-xs text-slate-400 italic">Sports Confederation</p>
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                          Engineered local student enrollment pipelines, raising active roster to over 100 members. Organized internal tournaments, handled funding allocations, and led weekly training courses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side compact panel (Skills, Langs, focus) */}
                <div className="md:col-span-4 print:col-span-4 space-y-6">
                  {/* INTERPRETED SKILLS PANEL */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-850 border-b border-slate-200 pb-1.5 font-mono">
                      Technical Skills
                    </h3>
                    
                    <div className="space-y-3 text-xs md:text-sm text-slate-700">
                      <div>
                        <span className="font-semibold block text-slate-800 mb-1">Frontend Engineering</span>
                        <div className="flex flex-wrap gap-1">
                          {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5/CSS3'].map(s => (
                            <span key={s} className="px-1.5 py-0.5 bg-white border border-slate-250 text-slate-600 rounded font-mono text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-semibold block text-slate-800 mb-1">Architectural Drafting</span>
                        <div className="flex flex-wrap gap-1">
                          {['AutoCAD', 'Rhino 3D', 'V-Ray', 'Spatial Modeling', 'Section Drawings'].map(s => (
                            <span key={s} className="px-1.5 py-0.5 bg-white border border-slate-250 text-slate-600 rounded font-mono text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="font-semibold block text-slate-800 mb-1">Creative Tech / Design</span>
                        <div className="flex flex-wrap gap-1">
                          {['Arduino Physical IoT', 'Figma UX/UI', 'User Journeys', 'Interactive Systems'].map(s => (
                            <span key={s} className="px-1.5 py-0.5 bg-white border border-slate-250 text-slate-600 rounded font-mono text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LANGUAGES */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-850 border-b border-slate-200 pb-1.5 font-mono">
                      Language Skills
                    </h3>
                    
                    <div className="space-y-2 text-xs md:text-sm">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">English (Academic)</span>
                        <span className="font-mono font-bold text-coral bg-coral-light px-2 py-0.5 rounded text-[10px]">IELTS 7.0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-slate-700">Mandarin Chinese</span>
                        <span className="text-slate-400 text-xs">NL / Native speaker</span>
                      </div>
                    </div>
                  </div>

                  {/* GITHUB PORTAL & BIO NOTE */}
                  <div className="p-4 bg-coral-light/20 rounded-2xl border border-coral-light/60 text-xs space-y-2">
                    <span className="font-semibold text-coral uppercase font-mono text-[10px] tracking-wide block">Designer-Coder Ethos</span>
                    <p className="text-slate-600 leading-relaxed font-sans">
                      Synthesizing concrete structural dimensions with algorithmic frontend systems. Fascinated by responsive space, human interaction, and declarative state orchestration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Print styles support */}
            <style>{`
              @media print {
                body {
                  background: white !important;
                  color: black !important;
                }
                nav, .print\\:hidden, #btn-print-resume, #btn-close-resume, button {
                  display: none !important;
                }
                #resume-print-area {
                  overflow: visible !important;
                  padding: 0 !important;
                  margin: 0 !important;
                  width: 100% !important;
                }
              }
            `}</style>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
