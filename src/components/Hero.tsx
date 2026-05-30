import { motion } from 'motion/react';
import { ArrowRight, FileDown, ExternalLink } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';
import Antigravity from './Antigravity';
import ShapeBlur from './ShapeBlur';

interface HeroProps {
  onOpenResume: () => void;
  onScrollToProjects: () => void;
}

export default function Hero({ onOpenResume, onScrollToProjects }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 flex items-center bg-white overflow-hidden">
      {/* Background soft geometric blobs for visual depth (architectural blueprint vibe) */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-amber-50/40 mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-indigo-50/40 mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />

      {/* Interactive WebGL Particles Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Antigravity
          count={250}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#F97316"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Typography Block */}
        <div className="lg:col-span-7 space-y-8 select-none">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-[#FFF2EE] text-coral rounded-full text-xs font-semibold tracking-wide uppercase border border-[#FFE7DF]">
              {PERSONAL_DETAILS.role}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.1]"
            id="hero-heading"
          >
            Bridging{' '}
            <span className="text-coral italic font-display font-medium tracking-normal">
              Design,
            </span>
            <br />
            <span className="text-mustard">Systems</span> and
            <br />
            <span className="text-indigo-tech">Technology</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed"
          >
            {PERSONAL_DETAILS.bio}
          </motion.p>

          {/* Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <button
              onClick={onScrollToProjects}
              className="flex items-center gap-2 px-6 py-3.5 bg-coral hover:bg-[#F27863] text-white text-sm font-semibold rounded-full shadow-md shadow-coral/10 hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-0.5 transition-all cursor-pointer"
              id="hero-btn-projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50 text-sm font-bold rounded-full transition-all hover:-translate-y-0.5 cursor-pointer"
              id="hero-btn-resume"
            >
              <FileDown className="w-4 h-4 text-slate-500" />
              Resume
            </button>

            <a
              href={PERSONAL_DETAILS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50 text-sm font-bold rounded-full transition-all hover:-translate-y-0.5"
              id="hero-btn-github"
            >
              <ExternalLink className="w-4 h-4 text-slate-500" />
              GitHub
            </a>
          </motion.div>

          {/* Current Status seeking */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-2.5 pt-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-500 text-xs sm:text-sm font-medium">
              {PERSONAL_DETAILS.seekingInternshipText}
            </span>
          </motion.div>
        </div>

        {/* Right Asset / Photographic frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 relative w-full flex justify-center lg:justify-end group"
        >
          {/* Interactive WebGL Aura Backdrop matching branding palette */}
          <div className="absolute -inset-10 z-0 opacity-40 blur-sm pointer-events-none transition-opacity duration-300 group-hover:opacity-60 scale-105">
            <ShapeBlur
              variation={0}
              shapeSize={1.1}
              roundness={0.5}
              borderSize={0.06}
              circleSize={0.25}
              circleEdge={0.8}
              color="#F97316"
            />
          </div>

          {/* Framed Graphic Container */}
          <div className="relative z-10 w-full max-w-[420px] rounded-[2.5rem] overflow-hidden bg-slate-50 shadow-2xl transition-transform hover:scale-[1.01] duration-300 border-4 border-white">
            <img
              src={PERSONAL_DETAILS.portrait}
              alt={PERSONAL_DETAILS.name}
              className="w-full h-auto object-cover object-center"
              referrerPolicy="no-referrer"
            />

            {/* Availability Overlay Pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-white/90 backdrop-blur-md border border-slate-100 rounded-full shadow-lg flex items-center gap-2.5 whitespace-nowrap">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-800 text-xs font-semibold font-sans">
                {PERSONAL_DETAILS.availableText}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
