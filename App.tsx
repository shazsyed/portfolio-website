import React, { useState, useEffect } from 'react';
import { DitherCard } from './components/DitherCard';
import { HallOfFame } from './components/HallOfFame';
import { AreasOfExpertise } from './components/AreasOfExpertise';
import { HERO_DATA, SKILLS, EXPERIENCE, CERTIFICATIONS, PROJECTS } from './constants';
import { 
  Shield, 
  Terminal as TerminalIcon, 
  Cpu, 
  Globe, 
  Github, 
  Twitter, 
  Linkedin,
  Lock,
  Activity,
  FileCode,
  Trophy,
  ArrowUpRight,
  Sun,
  Moon
} from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-cyber-black text-cyber-primary p-4 md:p-8 lg:p-12 selection:bg-cyber-primary selection:text-cyber-black transition-colors duration-300">
      {/* Top Scanline Fixed in global CSS */}
      <div className="scanline"></div>

      {/* Theme Toggle Button (Fixed Top Right) */}
      <button 
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 border border-cyber-border bg-cyber-card text-cyber-secondary hover:text-cyber-primary hover:border-cyber-primary transition-colors rounded-sm"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 grid-rows-auto">
        
        {/* ---------------- HERO SECTION (Span 3) ---------------- */}
        <DitherCard className="md:col-span-3 min-h-[300px] justify-center bg-cyber-dark">
             <div className="flex flex-col justify-center h-full space-y-6 px-4 md:px-12 py-8">
                <div>
                  <span className="inline-block px-2 py-1 border border-cyber-border text-[10px] uppercase tracking-widest text-cyber-secondary mb-4">
                    Identity Verified
                  </span>
                  <h1 className="text-4xl md:text-7xl font-bold text-cyber-primary tracking-tighter mb-3">
                    {HERO_DATA.name}
                  </h1>
                  <h2 className="text-lg md:text-xl text-cyber-primary font-light tracking-wide border-l-2 border-cyber-border pl-4 text-opacity-80">
                    {HERO_DATA.role}
                  </h2>
                </div>
                <p className="text-sm md:text-base text-cyber-secondary max-w-2xl leading-relaxed font-light">
                  {HERO_DATA.tagline}
                </p>
                <div className="pt-4 flex space-x-4">
                    <button className="bg-cyber-primary text-cyber-black px-8 py-3 text-xs font-bold uppercase hover:bg-cyber-secondary hover:text-white transition-colors tracking-wider border border-transparent">
                        Download Resume
                    </button>
                    <button className="border border-cyber-border text-cyber-secondary px-8 py-3 text-xs font-bold uppercase hover:border-cyber-primary hover:text-cyber-primary transition-colors tracking-wider">
                        Contact
                    </button>
                </div>
             </div>
        </DitherCard>

        {/* ---------------- SIDEBAR / CONTACT (Span 1) ---------------- */}
        <div className="md:col-span-1 grid grid-rows-2 gap-4">
             {/* Status / Availability */}
             <DitherCard title="System Status" icon={<Activity size={14} />}>
                <div className="flex flex-col justify-center h-full space-y-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        <span className="text-xs text-cyber-primary uppercase tracking-wider font-bold">Operational</span>
                    </div>
                    <div className="h-px bg-cyber-border w-full"></div>
                    <div className="flex items-center justify-between text-xs text-cyber-muted">
                        <span>Location</span>
                        <span className="text-cyber-secondary">Unknown</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-cyber-muted">
                        <span>Encryption</span>
                        <span className="text-cyber-secondary">AES-256</span>
                    </div>
                </div>
             </DitherCard>

             {/* Social Links */}
             <DitherCard title="Uplink" icon={<Globe size={14} />}>
                <div className="flex flex-col space-y-2 h-full justify-center">
                    <a href="#" className="flex items-center space-x-3 p-2 hover:bg-cyber-dark transition-colors group/link">
                        <Github size={16} className="text-cyber-muted group-hover/link:text-cyber-primary" />
                        <span className="text-xs text-cyber-secondary group-hover/link:text-cyber-primary">GitHub</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 p-2 hover:bg-cyber-dark transition-colors group/link">
                        <Linkedin size={16} className="text-cyber-muted group-hover/link:text-cyber-primary" />
                        <span className="text-xs text-cyber-secondary group-hover/link:text-cyber-primary">LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 p-2 hover:bg-cyber-dark transition-colors group/link">
                        <Twitter size={16} className="text-cyber-muted group-hover/link:text-cyber-primary" />
                        <span className="text-xs text-cyber-secondary group-hover/link:text-cyber-primary">Twitter</span>
                    </a>
                </div>
             </DitherCard>
        </div>

        {/* ---------------- AREAS OF EXPERTISE (Full Width) ---------------- */}


        {/* ---------------- MAIN CONTENT GRID ---------------- */}
        
        {/* Experience - Span 2 */}
        <DitherCard title="Log: Experience" className="md:col-span-2" icon={<FileCode size={14}/>}>
            <div className="space-y-8">
                {EXPERIENCE.map((job, idx) => (
                    <div key={idx} className="relative pl-4 border-l border-cyber-border hover:border-cyber-muted transition-colors">
                        <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-cyber-black border border-cyber-muted rotate-45 transition-colors duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h4 className="text-base font-bold text-cyber-primary">{job.role}</h4>
                            <span className="text-xs text-cyber-muted font-mono">{job.period}</span>
                        </div>
                        <div className="text-xs text-cyber-secondary mb-3 font-medium uppercase tracking-wide">{job.company}</div>
                        <p className="text-sm text-cyber-secondary leading-relaxed max-w-lg">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>
        </DitherCard>

        {/* Skills - Span 1 */}
        <DitherCard title="Modules" className="md:col-span-1" icon={<Cpu size={14} />}>
            <div className="flex flex-col space-y-6">
                {SKILLS.map((cat, idx) => (
                    <div key={idx} className="h-full">
                        <h5 className="text-[10px] text-cyber-muted uppercase mb-2 tracking-widest font-bold">{cat.name}</h5>
                        <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="text-xs border border-cyber-border bg-cyber-dark px-2 py-1 text-cyber-secondary hover:border-cyber-secondary hover:text-cyber-primary transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </DitherCard>

        {/* Credentials - Span 1 */}
        <DitherCard title="Credentials" className="md:col-span-1" icon={<Shield size={14} />}>
            <div className="flex flex-col space-y-3 h-full">
                {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="bg-cyber-dark p-3 border border-cyber-border hover:border-cyber-muted transition-all group/cert relative overflow-hidden flex items-start space-x-3">
                         {/* Logo if available */}
                         {cert.logo && (
                           <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-sm p-1 flex items-center justify-center border border-cyber-border">
                             <img src={cert.logo} alt={cert.name} className="w-full h-full object-contain opacity-80 group-hover/cert:opacity-100 transition-opacity" />
                           </div>
                         )}
                         
                         <div className="flex-grow">
                             <div className="absolute top-0 right-0 p-1">
                                 <Lock size={12} className="text-cyber-muted group-hover/cert:text-cyber-secondary" />
                             </div>
                             <div className="text-sm font-bold text-cyber-primary group-hover/cert:text-cyber-primary mb-1">{cert.name}</div>
                             <div className="text-[10px] text-cyber-secondary uppercase tracking-wider mb-2">{cert.issuer}</div>
                             <div className="w-full h-px bg-cyber-border mb-2"></div>
                             <div className="flex justify-between items-center">
                                <span className="text-[10px] text-cyber-muted font-mono">{cert.id}</span>
                                <span className="text-[10px] text-cyber-muted font-mono">{cert.date}</span>
                             </div>
                         </div>
                    </div>
                ))}
            </div>
        </DitherCard>

        {/* ---------------- AREAS OF EXPERTISE (Full Width) ---------------- */}
        <DitherCard title="System // Expertise" className="md:col-span-4" icon={<Shield size={14} />}>
          <AreasOfExpertise />
        </DitherCard>

        {/* Hall Of Fame - Full Width */}
        <DitherCard title="Hall of Fame // Targets" className="md:col-span-4" icon={<Trophy size={14} />} noPadding>
            <HallOfFame />
        </DitherCard>

        {/* Projects - Full Width */}
        <DitherCard title="Operations // Projects" className="md:col-span-4" icon={<TerminalIcon size={14} />}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PROJECTS.map((project, i) => (
                    <div key={i} className="group/project relative p-6 border border-cyber-border bg-cyber-dark/40 hover:bg-cyber-dark hover:border-cyber-muted transition-all flex flex-col h-full">
                        {/* Hover Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-transparent group-hover/project:border-cyber-secondary transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-transparent group-hover/project:border-cyber-secondary transition-colors"></div>

                        <div className="flex justify-between items-start mb-4">
                             <h3 className="text-base font-bold text-cyber-primary tracking-tight group-hover/project:text-cyber-primary transition-colors">
                                {project.title}
                             </h3>
                             <span className={`text-[9px] px-1.5 py-0.5 border uppercase tracking-wider ${
                                  project.status === 'Live' ? 'border-emerald-900 text-emerald-600 dark:text-emerald-500 bg-emerald-950/30' : 
                                  project.status === 'In Dev' ? 'border-amber-900 text-amber-600 dark:text-amber-500 bg-amber-950/30' :
                                  'border-cyber-border text-cyber-muted'
                                }`}>
                                {project.status}
                             </span>
                        </div>
                        
                        <p className="text-sm text-cyber-secondary leading-relaxed mb-6 flex-grow">
                            {project.description}
                        </p>
                        
                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-1">
                                {project.tech.map((t, ti) => (
                                    <span key={ti} className="text-xs text-cyber-secondary bg-cyber-black border border-cyber-border px-2 py-1 font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Link Icon */}
                        <div className="absolute bottom-4 right-4 text-cyber-muted group-hover/project:text-cyber-primary transition-colors">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                ))}
             </div>
        </DitherCard>
        
      </main>
      
      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-8 py-4 border-t border-cyber-border flex justify-between items-end text-[10px] text-cyber-muted font-mono uppercase">
         <div>
            <p>© {new Date().getFullYear()} CIPHER_FOLIO. SYS_RDY.</p>
         </div>
         <div className="flex space-x-4">
            <span>Latency: 12ms</span>
            <span>Secure Connection</span>
         </div>
      </footer>
    </div>
  );
}

export default App;