import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import ScrollFloat from './ScrollFloat';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-6">
          <ScrollFloat
            animationDuration={0.8}
            ease="back.out(1.7)"
            scrollStart="top bottom-=5%"
            scrollEnd="bottom center+=20%"
            stagger={0.02}
            textClassName="text-2xl md:text-3xl font-display font-bold text-slate-900 tracking-tight"
          >
            Featured Projects
          </ScrollFloat>
          <a
            href="https://drive.google.com/file/d/1ulzrrrMQlAl2WFWZrBGAn3QJAFeb0F-Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-coral hover:text-[#EE9E5A] transition-colors cursor-pointer group"
          >
            View all projects 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl bg-white flex flex-col justify-between hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 border border-slate-50 p-4 h-full"
            >
              <div className="space-y-4">
                {/* Image Container with Circle Num Badge Overlay */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute Badge Number */}
                  <div className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold shadow-md ${project.circleColor}`}>
                    {project.num}
                  </div>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-slate-50 text-[10px] md:text-xs font-medium text-slate-500 border border-slate-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900 tracking-tight group-hover:text-coral transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* View Case Study Button */}
              <div className="pt-4 mt-auto">
                <button className="flex items-center gap-1.5 text-xs font-semibold text-coral group-hover:text-[#EE9E5A] transition-colors">
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
