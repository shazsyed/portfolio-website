import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const ProjectList: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between space-y-6">
      {PROJECTS.map((project, i) => (
        <div key={i} className="group/item border-b border-neutral-900 last:border-0 pb-4 last:pb-0">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-bold text-neutral-200 group-hover/item:text-white transition-colors">
              {project.title}
            </h4>
            <span className={`text-[10px] px-1 border ${
              project.status === 'Live' ? 'border-neutral-600 text-neutral-400' : 'border-neutral-800 text-neutral-600'
            }`}>
              {project.status}
            </span>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, ti) => (
              <span key={ti} className="text-[10px] text-neutral-600 bg-neutral-900 px-1">
                {t}
              </span>
            ))}
          </div>
          <div className="hidden group-hover/item:block absolute right-4 top-1/2 -translate-y-1/2 text-neutral-700">
             <ArrowUpRight size={16} />
          </div>
        </div>
      ))}
    </div>
  );
};