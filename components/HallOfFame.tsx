import React from 'react';
import { HALL_OF_FAME } from '../constants';

export const HallOfFame: React.FC = () => {
  // Duplicate the list to create a seamless infinite scroll effect
  // We create enough copies to fill the width twice over
  const entries = [...HALL_OF_FAME, ...HALL_OF_FAME, ...HALL_OF_FAME, ...HALL_OF_FAME];

  return (
    <div className="relative w-full h-32 flex items-center overflow-hidden bg-cyber-dark/50">
      
      {/* Gradient Masks for smooth fade in/out on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cyber-black to-transparent z-20 pointer-events-none transition-colors duration-300"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cyber-black to-transparent z-20 pointer-events-none transition-colors duration-300"></div>
      
      {/* Scrolling Track */}
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {entries.map((entry, i) => (
          <div 
            key={i} 
            className="group flex-shrink-0 w-48 flex flex-col items-center justify-center mx-4 px-4 py-2 cursor-crosshair transition-all duration-300"
          >
            {/* Logo Container */}
            <div className="relative h-10 w-auto mb-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
               <img 
                  src={entry.logoUrl} 
                  alt={entry.company}
                  draggable={false}
                  className="h-full w-auto object-contain transition-opacity duration-300 select-none"
               />
            </div>

            {/* Company Name */}
            <span className="text-xs font-bold tracking-widest text-cyber-secondary group-hover:text-cyber-primary uppercase transition-colors duration-300">
                {entry.company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};