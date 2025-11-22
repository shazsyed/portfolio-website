import React from 'react';

interface DitherCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
  noPadding?: boolean;
}

export const DitherCard: React.FC<DitherCardProps> = ({ 
  children, 
  title, 
  className = "", 
  icon,
  noPadding = false 
}) => {
  return (
    <div className={`group relative bg-cyber-black border border-cyber-border hover:border-cyber-secondary transition-colors duration-300 flex flex-col overflow-hidden ${className}`}>
      
      {/* Dither Overlay on Hover */}
      <div className="absolute inset-0 bg-dither opacity-10 group-hover:opacity-20 pointer-events-none z-0 transition-opacity duration-300" />
      
      {/* Header if provided */}
      {title && (
        <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-cyber-border bg-cyber-dark">
          <h3 className="text-xs font-bold tracking-widest uppercase text-cyber-secondary group-hover:text-cyber-primary transition-colors">
            {title}
          </h3>
          {icon && <div className="text-cyber-muted group-hover:text-cyber-secondary transition-colors">{icon}</div>}
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 flex-1 h-full ${noPadding ? '' : 'p-5'}`}>
        {children}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-cyber-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-1 h-1 bg-cyber-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-cyber-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyber-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};