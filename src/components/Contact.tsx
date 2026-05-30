import { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';
import ScrollFloat from './ScrollFloat';
import Threads from './Threads';

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
      }, 1500);
    });
  };

  const contactItems = [
    {
      id: 'email',
      label: 'Email',
      value: PERSONAL_DETAILS.email,
      icon: <Mail className="w-4 h-4 text-coral stroke-[2.2]" />,
      bgColor: 'bg-[#FFF0F3]',
      link: `mailto:${PERSONAL_DETAILS.email}`
    },
    {
      id: 'phone',
      label: 'Phone',
      value: PERSONAL_DETAILS.phone,
      icon: <Phone className="w-4 h-4 text-emerald-500 stroke-[2.2]" />,
      bgColor: 'bg-[#EEFDF4]',
      link: `tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`
    },
    {
      id: 'wechat',
      label: 'WeChat',
      value: PERSONAL_DETAILS.wechat,
      icon: <MessageSquare className="w-4 h-4 text-indigo-tech stroke-[2.2]" />,
      bgColor: 'bg-[#EFF1FE]'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Banner Card */}
        <div className="bg-[#FFFBF5] rounded-[2.5rem] border border-amber-100/40 p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group">
          {/* Subtle warm backdrop orb */}
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-100/30 rounded-full filter blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />

          {/* Interactive WebGL Line Waves matching brand palette */}
          <div className="absolute inset-0 z-0 opacity-45 pointer-events-none transition-opacity duration-300 group-hover:opacity-65">
            <Threads
              color={[0.97, 0.45, 0.08]} // Warm orange #F97316
              amplitude={1.1}
              distance={0.12}
              enableMouseInteraction={true}
            />
          </div>

          {/* Left Column Text block */}
          <div className="space-y-4 max-w-md lg:text-left text-center relative z-10">
            <ScrollFloat
              animationDuration={0.8}
              ease="back.out(1.7)"
              scrollStart="top bottom-=5%"
              scrollEnd="bottom center+=20%"
              stagger={0.02}
              textClassName="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight leading-tight block"
            >
              Let's Build Meaningful Digital Experiences
            </ScrollFloat>
            <p className="text-slate-500 text-sm md:text-base font-normal leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </div>

          {/* Right Column Cards grid */}
          <div className="w-full lg:max-w-md grid grid-cols-1 gap-4 relative z-10">
            {contactItems.map((item) => (
              <div
                key={item.id}
                onClick={() => copyToClipboard(item.value, item.id)}
                className="bg-white rounded-2xl p-4 border border-slate-100 flex items-center justify-between shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group/item cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Left Circle Tag Icon */}
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0 transition-transform group-hover/item:scale-105`}>
                    {item.icon}
                  </div>

                  {/* Text node metadata */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider leading-none mb-1">
                      {item.label}
                    </h4>
                    <span className="text-sm font-semibold text-slate-800 tracking-tight hover:text-coral transition-colors break-all">
                      {item.value}
                    </span>
                  </div>
                </div>

                {/* Copy Status Trigger on Right */}
                <div className="p-2 rounded-lg hover:bg-slate-50 text-slate-400 group-hover/item:text-coral transition-colors flex-shrink-0">
                  {copiedId === item.id ? (
                    <div className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-50 border border-emerald-100/50 px-2.5 py-1 rounded-md animate-fade-in">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Copied!</span>
                    </div>
                  ) : (
                    <Copy className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Dynamic bottom Footer note */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono pt-4 border-t border-slate-100 select-none">
          <p>© 2026 {PERSONAL_DETAILS.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="hover:text-coral transition-colors">Digital Craftsman</span>
            <span>•</span>
            <span className="hover:text-coral transition-colors">Vite + React + Tailwind</span>
          </div>
        </div>

      </div>
    </section>
  );
}
