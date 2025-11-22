import { Experience, Project, Certification, SkillCategory, HallOfFameEntry, ExpertiseItem } from './types';

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'app-sec',
    title: 'Application Security',
    description: 'Comprehensive security assessments and penetration testing for web and mobile applications.',
    icon: 'Shield'
  },
  {
    id: 'pentest',
    title: 'Penetration Testing',
    description: 'Comprehensive penetration testing for web, mobile, and network infrastructure with red team assessments.',
    icon: 'Target'
  },
  {
    id: 'cloud-sec',
    title: 'Cloud Security',
    description: 'AWS security architecture, compliance, and threat modeling.',
    icon: 'Cloud'
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Integrating security into CI/CD pipelines and development workflows.',
    icon: 'Code'
  },
  {
    id: 'bug-bounty',
    title: 'Bug Bounty',
    description: 'Vulnerability research and responsible disclosure to improve global security.',
    icon: 'Bug'
  },
  {
    id: 'code-review',
    title: 'Secure Code Review',
    description: 'Comprehensive security analysis of source code to identify vulnerabilities and enforce secure coding standards.',
    icon: 'Search'
  }
];

export const HERO_DATA = {
  name: "SHAZ SYED",
  role: "SECURITY ENGINEER",
  tagline: "Defending digital infrastructures through offensive engineering and strategic fortification.",
};

export const PROJECTS: Project[] = [
  {
    title: "NetWatch V2",
    description: "Autonomous network intrusion detection system using anomaly-based ML models.",
    tech: ["Python", "TensorFlow", "Wireshark"],
    status: "Live"
  },
  {
    title: "Vault-Key",
    description: "Zero-knowledge proof authentication protocol for distributed file systems.",
    tech: ["Rust", "WASM", "Cryptography"],
    status: "Archived"
  },
  {
    title: "Ghost-Shell",
    description: "A minimalist, obfuscated reverse shell generator for red team operations testing.",
    tech: ["Go", "C++", "Bash"],
    status: "In Dev"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Pentester",
    company: "Obsidian Sec",
    period: "2021 - PRESENT",
    description: "Leading red team engagements and cloud security assessments for Fortune 500 clients."
  },
  {
    role: "Security Analyst",
    company: "CyberDyne Sys",
    period: "2019 - 2021",
    description: "Monitored SOC alerts, performed incident response, and hardened CI/CD pipelines."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "OSCP",
    issuer: "OffSec",
    date: "2020",
    id: "OS-77382",
    logo: "/logos/oscp.png"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "OFFENSIVE",
    skills: ["Metasploit", "Burp Suite", "Cobalt Strike", "Nmap", "SQL Injection"]
  },
  {
    name: "DEFENSIVE",
    skills: ["SIEM", "IDS/IPS", "Firewalls", "Zero Trust", "Splunk"]
  },
  {
    name: "LANGUAGES",
    skills: ["Python", "Rust", "Go", "C/C++", "Assembly"]
  }
];

export const HALL_OF_FAME: HallOfFameEntry[] = [
  {
    company: "Tesla",
    logoUrl: "/logos/tesla.png"
  },
  {
    company: "Google",
    logoUrl: "/logos/google.png"
  },
  {
    company: "Uber",
    logoUrl: "/logos/uber.png"
  },
  {
    company: "Shopify",
    logoUrl: "/logos/shopify.png"
  },
  {
    company: "PayPal",
    logoUrl: "/logos/paypal.png"
  },
  {
    company: "Sony",
    logoUrl: "/logos/sony.png"
  }
];

export const TERMINAL_LOGS = [
  "Initializing daemon...",
  "Loading kernel modules...",
  "Eth0: Link is up 1000Mbps full duplex",
  "Mounting filesystem...",
  "Checking integrity...",
  "OK: Hash match verified.",
  "Starting secure session...",
  "User: Alex connected.",
  "System ready."
];