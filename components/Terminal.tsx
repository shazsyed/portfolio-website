import React, { useEffect, useState } from 'react';
import { TERMINAL_LOGS } from '../constants';

export const Terminal: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < TERMINAL_LOGS.length) {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, TERMINAL_LOGS[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * 300 + 100); // Random typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="h-full w-full bg-black font-mono text-xs p-4 flex flex-col justify-end overflow-hidden relative">
        {/* Scanline effect overlay just for terminal */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10 opacity-20"></div>
        
        <div className="relative z-0 text-neutral-500">
            {logs.map((log, i) => (
            <div key={i} className="mb-1 break-words">
                <span className="text-neutral-700 mr-2">[{new Date().toLocaleTimeString()}]</span>
                <span className={i === logs.length - 1 ? "text-white" : ""}>{log}</span>
            </div>
            ))}
            <div className="animate-pulse mt-2">_</div>
        </div>
    </div>
  );
};