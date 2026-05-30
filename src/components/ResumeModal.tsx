import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Calendar, 
  GraduationCap, 
  Award, 
  MessageSquare, 
  Cpu, 
  Users, 
  Sparkles, 
  Layers,
  Wrench,
  BookOpen
} from 'lucide-react';
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
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 print:p-0 select-none">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm print:hidden"
          />

          {/* Dialog Document (Print optimized) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden my-4 md:my-8 lg:my-10 min-h-[85vh] print:shadow-none print:rounded-none print:w-full print:max-w-none print:min-h-0 print:absolute print:inset-0"
          >
            {/* Header / Actions Panel for the Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-150 bg-slate-50 print:hidden relative z-20">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">Interactive Resume Document</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={triggerPrint}
                  className="flex items-center gap-1.5 px-4 py-2 bg-coral hover:bg-coral-hover text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
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
            <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-14 print:p-0 bg-white" id="resume-print-area">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-11 print:grid-cols-12 print:gap-8 items-start">
                
                {/* LEFT COLUMN: Header, Personal Info, Education, Skills */}
                <div className="md:col-span-4 print:col-span-4 space-y-8 border-b md:border-b-0 md:border-r border-slate-100 pb-8 md:pb-0 md:pr-8 lg:pr-10">
                  {/* Personal Brand Header */}
                  <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
                      {PERSONAL_DETAILS.name}
                    </h1>
                    <p className="text-coral text-sm font-bold uppercase tracking-wider font-mono leading-relaxed">
                      {PERSONAL_DETAILS.role}
                    </p>
                    <p className="text-[13px] text-slate-500 font-mono leading-relaxed pt-2 border-t border-slate-100/80">
                      {PERSONAL_DETAILS.bio}
                    </p>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-xs uppercase tracking-wider text-slate-400 font-bold font-mono">Personal Information</h3>
                    <div className="text-[13px] text-slate-600 space-y-3 font-mono">
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-coral shrink-0" />
                        <span>+86 15837129397</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-coral shrink-0" />
                        <a href="mailto:1296481195@qq.com" className="hover:text-coral transition-colors underline decoration-slate-200 truncate">
                          1296481195@qq.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-coral shrink-0" />
                        <span>WeChat: S15837129397</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <GraduationCap className="w-4 h-4 text-coral shrink-0" />
                        <span className="font-sans">Graduation: Class of 2027</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                        <span className="font-sans">Availability: Available for internships of 6+ months, 5 days per week</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-coral shrink-0" />
                        <span className="font-sans">Xi'an, Shaanxi, China</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <ExternalLink className="w-4 h-4 text-coral shrink-0" />
                        <a 
                          href={PERSONAL_DETAILS.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:text-coral transition-colors underline decoration-slate-200 font-sans"
                        >
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                      <GraduationCap className="w-4 h-4 text-coral" />
                      <h3 className="text-xs uppercase tracking-wider text-slate-800 font-mono font-bold">
                        Education
                      </h3>
                    </div>

                    <div className="relative pl-5 mt-2">
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-slate-100" />
                      
                      <div className="flex flex-col gap-1">
                        <h4 className="font-display font-extrabold text-slate-800 text-sm">
                          Xi'an Jiaotong University
                        </h4>
                        <span className="text-[11px] font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100 self-start">
                          <Calendar className="w-3 h-3 text-coral" /> 2022 - 2027
                        </span>
                      </div>
                      
                      <p className="text-[13px] text-slate-600 font-medium mt-1 leading-normal font-sans">
                        Bachelor of Architecture
                      </p>
                      <p className="text-[12px] text-slate-500 italic font-sans leading-normal">
                        5-year engineering program
                      </p>

                      <div className="flex flex-col gap-1.5 pt-2">
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-extrabold px-2 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-100 self-start">
                          <Award className="w-3.5 h-3.5 shrink-0" /> GPA: 87.14 / 100
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium font-sans">• Academic Excellence Rank</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills competency matrix */}
                  <div className="space-y-5 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                      <Wrench className="w-4 h-4 text-coral" />
                      <h3 className="text-xs uppercase tracking-wider text-slate-800 font-mono font-bold">Skills</h3>
                    </div>

                    {/* Competency Matrix */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono tracking-wider font-extrabold uppercase text-slate-400 block">Competency Matrix</span>
                      <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-[#FFE7DF]">
                        UI/UX design, information architecture, interaction flow design, visual standards, digital content generation, cross-media visual expression
                      </p>
                    </div>

                    {/* AI Skills */}
                    <div className="space-y-2">
                       <span className="text-[11px] font-mono tracking-wider font-extrabold uppercase text-slate-400 block">AI Skills</span>
                       <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-[#FFE7DF]">
                         Proficient in AIGC scenario visualization; prompt engineering and optimization; basic frontend & mobile development
                       </p>
                    </div>

                    {/* Collaboration */}
                    <div className="space-y-2">
                       <span className="text-[11px] font-mono tracking-wider font-extrabold uppercase text-slate-400 block">Collaboration</span>
                       <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-[#FFE7DF]">
                         Led 10+ course projects as lead; effective communication with technical and product roles; adaptable to fast-paced development
                       </p>
                    </div>

                    {/* Software */}
                    <div className="space-y-2">
                       <span className="text-[11px] font-mono tracking-wider font-extrabold uppercase text-slate-400 block">Software</span>
                       <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-[#FFE7DF]">
                         Figma, PPT, Word, Excel, Photoshop, Rhino, SketchUp, CAD, InDesign, Illustrator, D5, Xmind, AI-generated images
                       </p>
                    </div>

                    {/* Language skills */}
                    <div className="space-y-2 pt-2">
                       <span className="text-[11px] font-mono tracking-wider font-extrabold uppercase text-slate-400 block">Languages</span>
                       <div className="space-y-1.5 pl-3 border-l-2 border-amber-100">
                         <div className="flex justify-between items-center text-[13px]">
                           <span className="font-semibold text-slate-700">English (Academic)</span>
                           <span className="font-mono font-bold text-coral px-1.5 py-0.5 rounded text-[10px] bg-[#FFF2EE]">IELTS 7.0</span>
                         </div>
                         <div className="flex justify-between items-center text-[13px]">
                           <span className="font-semibold text-slate-700">Mandarin Chinese</span>
                           <span className="text-slate-450 font-medium">Native</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Independent Projects, Campus Experience */}
                <div className="md:col-span-8 print:col-span-8 space-y-8">
                  
                  {/* INDEPENDENT PROJECTS */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Cpu className="w-5 h-5 text-coral" />
                      <h2 className="text-base md:text-lg font-display font-black text-slate-900 uppercase tracking-widest">
                        Independent Projects
                      </h2>
                    </div>

                    <div className="space-y-6 relative pl-5">
                      {/* Timeline bar */}
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-slate-100" />

                      {/* Project 1 */}
                      <div className="space-y-2">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-md">
                            Kinetic Sensor-Driven Responsive System
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2026.1 – 2026.4
                          </span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-600 leading-relaxed">
                          <li>Defined 6 typical environmental trigger conditions using multi-city meteorological data and established automated control logic: “data input → threshold decision → state output”.</li>
                          <li>Built functional prototypes using Arduino and sensors; used Rhino to visualize structural state changes and applied AIGC tools to generate usage scenarios.</li>
                          <li>Explored real-time interaction between physical environments and digital systems, demonstrating understanding of IoT system logic and prototype validation.</li>
                        </ul>
                        <div className="mt-2.5 p-2 px-3 bg-[#FFFBF7] rounded-lg border border-amber-50 text-[12px] leading-relaxed">
                          <span className="font-mono font-extrabold uppercase text-amber-600 block text-[10px] tracking-wider mb-0.5">Transferable Skills</span>
                          <p className="text-slate-600 italic font-sans text-[12px]">Data-driven system response design applicable to monitoring dashboards, alert systems, automated notifications, and enterprise workflow modules.</p>
                        </div>
                      </div>

                      {/* Project 2 */}
                      <div className="space-y-2">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-md">
                            Tuvalu Virtual City
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2025.8 – 2025.12
                          </span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-600 leading-relaxed">
                          <li>Extracted dual-role behavioral models and task incentive mechanisms from climate migration data to increase user engagement.</li>
                          <li>Designed environment-triggered task systems establishing a recursive "perception → decision → feedback" loop.</li>
                          <li>Applied Rhino for spatial modeling and integrated AIGC narrative scenarios to validate interaction logic.</li>
                        </ul>
                        <div className="mt-2.5 p-2 px-3 bg-[#FFFBF7] rounded-lg border border-amber-50 text-[12px] leading-relaxed">
                          <span className="font-mono font-extrabold uppercase text-amber-600 block text-[10px] tracking-wider mb-0.5">Transferable Skills</span>
                          <p className="text-slate-600 italic font-sans text-[12px]">Rule engine design and user incentive architectures, applicable to product-led growth and guided workflows.</p>
                        </div>
                      </div>

                      {/* Project 3 */}
                      <div className="space-y-2">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-md">
                            Pet Memorial Platform
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2025.2 – 2025.7
                          </span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-600 leading-relaxed">
                          <li>Conducted 12 in-depth interviews to identify key information gaps and emotional pain points.</li>
                          <li>Digitized complex offline service processes into online status notifications, customizable memorials, and retrospection modules.</li>
                          <li>Built high-fidelity Figma prototypes modeling complete user journeys and complex state-machine flows.</li>
                        </ul>
                        <div className="mt-2.5 p-2 px-3 bg-[#FFFBF7] rounded-lg border border-amber-50 text-[12px] leading-relaxed">
                          <span className="font-mono font-extrabold uppercase text-amber-600 block text-[10px] tracking-wider mb-0.5">Transferable Skills</span>
                          <p className="text-slate-600 italic font-sans text-[12px]">Complex customer service workflow digitization, highly applicable to enterprise B2B portals and product state systems.</p>
                        </div>
                      </div>

                      {/* Project 4 */}
                      <div className="space-y-2">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-sm md:text-md">
                            Peiligang Smart Museum System
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2024.6 – 2025.1
                          </span>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-[13px] text-slate-600 leading-relaxed">
                          <li>Designed a multi-venue coordinated task guidance system to increase crowd retention and exhibit engagement.</li>
                          <li>Map-simulated interactive visitor flows to deliver Figma prototypes covering digital collection and unlocking mechanics.</li>
                          <li>Created gamified progress visualization components that drive behavior and enable telemetry tracking.</li>
                        </ul>
                        <div className="mt-2.5 p-2 px-3 bg-[#FFFBF7] rounded-lg border border-amber-50 text-[12px] leading-relaxed">
                          <span className="font-mono font-extrabold uppercase text-amber-600 block text-[10px] tracking-wider mb-0.5">Transferable Skills</span>
                          <p className="text-slate-600 italic font-sans text-[12px]">Interactive task tracking interfaces, user retention loops, and progress bar visualization dashboards.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CAMPUS EXPERIENCE */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <Users className="w-5 h-5 text-coral" />
                      <h2 className="text-base md:text-lg font-display font-black text-slate-900 uppercase tracking-widest">
                        Campus Experience
                      </h2>
                    </div>

                    <div className="space-y-4 relative pl-5 mt-2">
                      {/* Timeline bar */}
                      <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-slate-100" />

                      <div className="space-y-1">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-[13px] md:text-sm">
                            Milan Design Week Project Lead
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2026.5
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-105 font-sans">
                          Submitted two works as first author; led concept development, model production, and visual presentation.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-[13px] md:text-sm">
                            Xin’gang Youth History Lecturer
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2023.5 – Present
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-105 font-sans">
                          Delivered 10+ presentations to students and faculty; developed public speaking and cross-department coordination skills.
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-start md:items-center justify-between flex-wrap gap-2">
                          <h4 className="font-display font-extrabold text-slate-900 text-[13px] md:text-sm">
                            Founder & President, Badminton Club
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                            2023.3 – Present
                          </span>
                        </div>
                        <p className="text-[13px] text-slate-600 leading-relaxed pl-3 border-l-2 border-slate-105 font-sans">
                          Built club from scratch; organized 15+ training sessions and events; managed 100+ members.
                        </p>
                      </div>
                    </div>
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

