import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  category: 'IoT' | 'AI/ML' | 'Web/App' | 'Hackathon';
  tech: string[];
  status?: 'Completed' | 'Ongoing' | 'Hackathon';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  text: string;
  color?: string;
}

export interface EventItem {
  title: string;
  role: string;
  description: string;
  images: string[];
  date?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}