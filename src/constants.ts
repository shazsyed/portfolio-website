import { Experience, Project, Certification, SkillCategory, HallOfFameEntry, ExpertiseItem } from './types';

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'app-sec',
    title: 'Application Security',
    description: 'Expertise in SAST/DAST, secure design, and eliminating high-risk application flaws.',
    icon: 'Shield'
  },
  {
    id: 'cloud-sec',
    title: 'Cloud Security',
    description: 'Secured and audited 8+ production AWS & Kubernetes environments.',
    icon: 'Cloud'
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Built automated CI/CD security, cutting remediation by 96%.',
    icon: 'Code'
  },
  {
    id: 'bug-bounty',
    title: 'Bug Bounty',
    description: 'Top 500 researcher with focus on OWASP & API security.',
    icon: 'Bug'
  },
  {
    id: 'siem',
    title: 'SIEM & Monitoring',
    description: 'Developed enterprise SIEM pipelines, reducing MTTD by 40%.',
    icon: 'Search'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Security',
    description: 'Strengthened Kubernetes security with policy enforcement and runtime monitoring.',
    icon: 'Target'
  }
];

export const HERO_DATA = {
  name: "SHAZ SYED ALI",
  role: "SECURITY ENGINEER",
  tagline: "Cloud Security | Application Security | DevSecOps",
  location: "Pakistan, Karachi",
};

export const PROJECTS: Project[] = [
  {
    title: "Bug Bounty Researcher",
    description: "Top 500 researcher identifying 70+ vulnerabilities, including critical RCE and account takeovers for 15+ companies. Recognized by major tech companies for responsible disclosure.",
    tech: ["Burp Suite", "OWASP", "API Security"]
  },
  {
    title: "FavHunt",
    description: "Open-source reconnaissance tool, fingerprinting web services via favicon analysis integrated with Shodan, useful to find hidden assets.",
    tech: ["Python", "Shodan API", "Reconnaissance"]
  },
  {
    title: "Google Cybersecurity Portfolio",
    description: "Professional certification project showcasing network traffic analysis with Wireshark and Splunk, documenting real-world cyberattack scenarios and mitigation strategies.",
    tech: ["Splunk", "Wireshark", "Linux"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Security Engineer",
    company: "Bazaar Technologies",
    period: "FEB 2025 - PRESENT",
    description: "Security Engineer driving cloud, container, and application security — automating CI/CD security pipelines, hardening Kubernetes, deploying AWS-wide SIEM monitoring, and cutting remediation times through custom tooling and developer enablement.",
    logo: "/logos/bazaar.jpeg"
  },
  {
    role: "Associate DevSecOps Engineer",
    company: "NayaPay",
    period: "APR 2024 - SEP 2024",
    description: "Handled cloud, Linux, and container infrastructure end-to-end — from CIS-compliant server hardening to AWS operations, encrypted storage, and full-stack monitoring for improved reliability and performance.",
    logo: "/logos/nayapay.jpeg"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Cybersecurity Specialization",
    issuer: "Google",
    date: "",
    id: "",
    logo: "/logos/google.png"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "SECURITY",
    skills: ["Penetration Testing", "Burp Suite", "AWS Security", "Kubernetes Security", "SIEM"]
  },
  {
    name: "DEVSECOPS",
    skills: ["Semgrep", "Trivy", "TruffleHog", "Dependabot", "CI/CD Security"]
  },
  {
    name: "CLOUD & INFRA",
    skills: ["AWS", "Terraform", "Docker", "Prometheus", "Grafana"]
  },
  {
    name: "LANGUAGES",
    skills: ["Golang", "Python", "Bash", "Node.js", "Java"]
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
  "User: Shaz connected.",
  "System ready."
];