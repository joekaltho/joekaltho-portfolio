import { SkillCategory, FreelanceOffering } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Software Development',
    description: 'Engineering resilient, performant full-stack systems designed for real users, production reliability, and maintainability.',
    capabilities: [
      'Full-stack web application development with React, Next.js, and TypeScript',
      'Modular RESTful API design and third-party service integrations',
      'Relational data modeling, schema migrations, and indexing (PostgreSQL / Supabase)',
      'Secure authentication, session management, and role-based access control (RBAC)',
      'Production hardening: error boundaries, input sanitization, and responsive cross-device layouts'
    ],
    technologies: [
      'TypeScript',
      'JavaScript (ESNext)',
      'React',
      'Next.js',
      'Node.js / Express',
      'PostgreSQL',
      'Supabase',
      'Tailwind CSS',
      'Git / GitHub'
    ]
  },
  {
    title: 'AI & Automation Engineering',
    description: 'Leveraging contemporary language models and automated pipelines to create functional, high-leverage software capabilities.',
    capabilities: [
      'AI-assisted rapid prototyping and full-lifecycle code implementation',
      'Building production features using modern LLM APIs and structured JSON outputs',
      'Automating manual business workflows, data extraction, and document processing',
      'Designing defensive prompt pipelines with deterministic schema validation',
      'Integrating smart search, automated tagging, and text summarization'
    ],
    technologies: [
      '@google/genai SDK',
      'OpenAI API',
      'Prompt Engineering',
      'Structured Outputs (JSON Schema)',
      'Serverless Edge Functions',
      'Automated Webhooks'
    ]
  },
  {
    title: 'Product & Startup Building',
    description: 'Transforming zero-to-one problem spaces into working software, from scoping and UX architecture to iterative deployment.',
    capabilities: [
      'Scoping MVP feature sets with strict discipline against feature bloat',
      'Clean, functional product design with intuitive navigation and zero-friction user flows',
      'Direct customer discovery, continuous feedback loops, and rapid iteration',
      'Product positioning, domain modeling, and technical roadmap planning',
      'Building in public: documenting trade-offs, engineering decisions, and metrics'
    ],
    technologies: [
      'Product Discovery',
      'Wireframing & UI Architecture',
      'Design Systems',
      'Build-in-Public Documentation',
      'Technical Roadmapping'
    ]
  }
];

export const freelanceOfferings: FreelanceOffering[] = [
  {
    title: 'Modern Business Websites',
    description: 'High-speed, custom-engineered digital storefronts and marketing sites for businesses that demand more than slow, generic templates.',
    deliverables: [
      'Fully responsive, mobile-optimized custom design',
      'Structured SEO metadata and social share cards',
      'Direct lead routing to WhatsApp, Email, or CRM',
      'Sub-second page load times with 98+ Lighthouse scores'
    ],
    idealFor: 'Independent businesses, founders, agencies, and professionals needing a serious digital presence.',
    timeframe: '1 – 2 weeks'
  },
  {
    title: 'Website Redesigns & Performance Overhauls',
    description: 'Transforming clunky, outdated, or slow websites into clean, modern, and trustworthy interfaces that convert visitors into clients.',
    deliverables: [
      'Complete visual and UX architecture upgrade',
      'Mobile responsiveness fix and layout cleanup',
      'Core Web Vitals optimization and bundle reduction',
      'Clean content hierarchy without visual clutter'
    ],
    idealFor: 'Businesses with an existing site that feels outdated, slow on mobile, or fails to generate leads.',
    timeframe: '1 – 3 weeks'
  },
  {
    title: 'Custom Web Applications & MVPs',
    description: 'End-to-end full-stack development for new software ideas, internal business tools, customer portals, or SaaS MVPs.',
    deliverables: [
      'Full TypeScript/React frontend paired with a reliable database backend',
      'User authentication, role management, and secure data storage',
      'Admin management panels and analytics views',
      'Vercel / Supabase production deployment setup'
    ],
    idealFor: 'Founders and businesses building an MVP to test with initial users.',
    timeframe: '2 – 4 weeks'
  },
  {
    title: 'AI Workflows & Business Automation',
    description: 'Custom automation tools that save time by processing incoming documents, drafting structured communications, or integrating data sources.',
    deliverables: [
      'Custom LLM-powered extraction or processing pipelines',
      'Automated email/form ingestion and database logging',
      'Zero-fuss interface for non-technical team members',
      'Production API keys and error-resilient fallbacks'
    ],
    idealFor: 'Operations-heavy businesses looking to eliminate manual data entry and repetitive tasks.',
    timeframe: '1 – 2 weeks'
  }
];
