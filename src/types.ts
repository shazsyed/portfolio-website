export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  id: string;
  logo?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface HallOfFameEntry {
  company: string;
  logoUrl: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: 'Shield' | 'Target' | 'Cloud' | 'Code' | 'Bug' | 'Search';
}