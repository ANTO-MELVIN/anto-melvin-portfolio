import React, { useRef } from 'react';
import { Project } from '../types';
import TiltCard from './TiltCard';
import { Code, Cpu, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSliderProps {
  projects: Project[];
  title: string;
}

export default function ProjectSlider({ projects, title }: ProjectSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (category: string) => {
    if (category === 'IoT') return <Cpu size={16} />;
    if (category === 'AI/ML') return <Brain size={16} />;
    return <Code size={16} />;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320; // Approx card width + gap
      const currentScroll = containerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      containerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-10 relative group/slider">
      <div className="flex justify-between items-center mb-6 pl-4 md:ml-0 px-4 md:px-0">
         <h3 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">
            {title}
         </h3>
      </div>
      
      {/* Overlay Arrows (Visible only on hover for desktop, tap for mobile interaction) */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 z-10 p-3 bg-slate-950/80 backdrop-blur border border-slate-700 rounded-full text-white shadow-xl opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 flex items-center justify-center translate-y-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 z-10 p-3 bg-slate-950/80 backdrop-blur border border-slate-700 rounded-full text-white shadow-xl opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 flex items-center justify-center translate-y-8"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] md:w-[350px] snap-center group perspective-1000">
            <TiltCard className="h-full">
              <div className="h-full bg-slate-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex flex-col hover:border-primary/50 transition-colors shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1
                    ${project.category === 'IoT' ? 'bg-orange-500/20 text-orange-400' : 
                      project.category === 'AI/ML' ? 'bg-purple-500/20 text-purple-400' : 
                      'bg-blue-500/20 text-blue-400'}`}>
                    {getIcon(project.category)}
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="text-xs text-slate-400 border border-slate-700 px-2 py-0.5 rounded">
                      {project.status}
                    </span>
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-slate-950 text-slate-300 px-2 py-1 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
        
        {/* Spacer for right padding */}
        <div className="w-4 flex-shrink-0" />
      </div>
    </div>
  );
}