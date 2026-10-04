export type ProjectStatus = 'production' | 'mvp' | 'in-development' | 'prototype';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technicalDetails: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  isFounder: boolean;
  category: 'saas' | 'web-app' | 'freelance' | 'ai-system' | 'client-redesign';
  features: string[];
  image: string;
  secondaryImage?: string;
  metrics?: { label: string; value: string }[];
}

export type JourneyCategory = 'milestone' | 'build-update' | 'lesson' | 'experiment' | 'founder-note';

export interface JourneyPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  timestamp: string;
  category: JourneyCategory;
  summary: string;
  content: string[];
  keyTakeaways?: string[];
  metricsContext?: string;
  tags: string[];
  readTime: string;
}

export interface TimelineMilestone {
  id: string;
  period: string;
  title: string;
  description: string;
  category: 'starting' | 'kaltrix' | 'ecosystem' | 'technical';
  status: 'completed' | 'current' | 'upcoming';
  learnings?: string;
}

export interface EcosystemProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'live' | 'in-development' | 'planned';
  phase: string;
  coreCapabilities: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  capabilities: string[];
  technologies: string[];
}

export interface FreelanceOffering {
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  timeframe: string;
}

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  type: 'freelance' | 'employment' | 'founder' | 'general';
  message: string;
  created_at?: string;
}
