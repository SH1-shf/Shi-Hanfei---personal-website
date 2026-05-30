import { School, Award, Globe, Target } from 'lucide-react';
import { STAT_CARDS } from '../data';

export default function About() {
  const renderIcon = (type: string, colorClass: string) => {
    switch (type) {
      case 'university':
        return <School className={`w-5 h-5 ${colorClass}`} />;
      case 'gpa':
        return <Award className={`w-5 h-5 ${colorClass}`} />;
      case 'ielts':
        return <Globe className={`w-5 h-5 ${colorClass}`} />;
      case 'focus':
        return <Target className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <School className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="about" className="py-16 bg-slate-50/40 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. About Me - Wider card (Col-span 4) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-slate-100/60 min-h-[290px] group">
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl font-display font-bold text-slate-900 tracking-tight group-hover:text-coral transition-colors">
                  About Me
                </h3>
                {/* Accent mini underline matching mockup */}
                <div className="w-8 h-1 bg-coral rounded-full" />
              </div>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                Architecture student passionate about building digital products that solve real problems.
              </p>
            </div>
            
            {/* Minimalistic signature bottom node */}
            <div className="text-xs font-mono text-slate-400 font-medium mt-4">
              Designing Spaces × Writing Code
            </div>
          </div>

          {/* 2-5. Stat Cards (Col-span 2 each to perfectly complete matches) */}
          {STAT_CARDS.map((card) => (
            <div
              key={card.id}
              className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-slate-100/60 min-h-[290px] group"
            >
              {/* Top part: Icon container */}
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-xl ${card.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  {renderIcon(card.iconType, card.iconColor)}
                </div>
                
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-widest font-mono">
                  {card.title}
                </h4>
              </div>

              {/* Bottom part: Dynamic Text */}
              <div className="mt-6 space-y-1">
                {card.id === 'gpa' || card.id === 'ielts' ? (
                  // Numbers showcase
                  <>
                    <div className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 leading-tight">
                      {card.text.split(' ')[0]}
                      {card.text.includes('/') && (
                        <span className="text-lg md:text-xl text-slate-400 font-normal">
                          {' '}/ {card.text.split('/')[1].trim()}
                        </span>
                      )}
                    </div>
                    {card.subtext && (
                      <p className="text-xs text-slate-400 font-medium leading-snug whitespace-pre-line">
                        {card.subtext}
                      </p>
                    )}
                  </>
                ) : card.id === 'focus' ? (
                  // Multi-line points
                  <div className="space-y-1">
                    {card.text.split('\n').map((focusNode) => (
                      <div key={focusNode} className="text-xs md:text-[13px] font-semibold text-slate-700 leading-snug hover:text-coral transition-colors">
                        {focusNode}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Standard textual university display
                  <>
                    <p className="text-sm md:text-[15px] font-bold text-slate-800 leading-snug">
                      {card.text}
                    </p>
                    {card.subtext && (
                      <p className="text-xs text-slate-400 font-medium leading-relaxed whitespace-pre-line">
                        {card.subtext}
                      </p>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
