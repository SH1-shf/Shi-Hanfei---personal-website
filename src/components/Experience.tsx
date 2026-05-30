import { GraduationCap } from 'lucide-react';
import { EXPERIENCES } from '../data';
import ScrollFloat from './ScrollFloat';

interface ExperienceProps {
  onSelectExperience?: (id: string) => void;
}

export default function Experience({ onSelectExperience }: ExperienceProps) {
  // Custom high-fidelity icon renderers
  const renderIcon = (type: string, colorClass: string) => {
    switch (type) {
      case 'drafting':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-5 h-5 ${colorClass}`}
          >
            {/* Compass Joint */}
            <circle cx="12" cy="5" r="1.5" />
            {/* Left and Right legs forming architectural divider */}
            <path d="M12 5 L7 21" />
            <path d="M12 5 L17 21" />
            {/* Calibration adjustment bar */}
            <path d="M8.5 15 L15.5 15" />
          </svg>
        );
      case 'graduation':
        return <GraduationCap className={`w-5 h-5 ${colorClass} stroke-[2.2]`} />;
      case 'badminton':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-5 h-5 ${colorClass}`}
          >
            {/* Racket head (oval grid circle) */}
            <circle cx="15" cy="9" r="5" />
            {/* Shaft of racket */}
            <path d="M11.5 12.5 L6 18" />
            {/* Ergonomic Handle details */}
            <path d="M7 17 L5.5 20.5" />
            {/* Strings inside racket head */}
            <path d="M11 9 L19 9" />
            <path d="M15 5 L15 13" />
          </svg>
        );
      default:
        return <GraduationCap className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="experience" className="py-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        
        {/* Section Heading */}
        <ScrollFloat
          animationDuration={0.8}
          ease="back.out(1.7)"
          scrollStart="top bottom-=5%"
          scrollEnd="bottom center+=20%"
          stagger={0.02}
          textClassName="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight"
        >
          Experience & Leadership
        </ScrollFloat>

        {/* Elegant horizontal frame holding all 3 items */}
        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 shadow-sm shadow-slate-50 relative overflow-hidden group">
          {/* Subtle background flow accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-coral/5 rounded-full filter blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 lg:items-stretch relative z-10">
            {EXPERIENCES.map((exp, index) => {
              const isFirst = exp.id === "exp-1";
              return (
                <div
                  key={exp.id}
                  onClick={() => isFirst && onSelectExperience?.(exp.id)}
                  className={`flex flex-col sm:flex-row gap-4 lg:gap-5 items-start ${
                    isFirst
                      ? 'cursor-pointer group/item hover:bg-slate-50/55 p-3.5 -m-3.5 rounded-2xl transition-all duration-300 border border-transparent hover:border-slate-100 hover:shadow-sm'
                      : ''
                  }`}
                >
                  
                  {/* Column spacing divider inside desktop grid */}
                  {index > 0 && (
                    <div className="hidden lg:block absolute left-[33%] md:left-[33.3%] top-4 bottom-4 w-px bg-slate-100" style={{ left: `${index * 33.3}%` }} />
                  )}

                  {/* Left Side: Styled Circular Pill Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${exp.bgColor} flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-6`}>
                    {renderIcon(exp.iconType, exp.iconColor)}
                  </div>

                  {/* Right Side: Title & Description metadata */}
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-display font-semibold text-slate-900 text-sm md:text-base leading-snug">
                      {exp.title}
                    </h3>
                    
                    {/* Optional Metadata Tag */}
                    {(exp.organization || exp.period) && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                          {exp.organization}
                        </span>
                        {exp.period && (
                          <span className="text-[10px] font-mono font-medium text-slate-400">
                            ({exp.period})
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {isFirst && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#FF8A75] group-hover/item:text-[#ff745c] group-hover/item:translate-x-1 transition-all duration-300 pt-1">
                        <span>View Case Study</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
