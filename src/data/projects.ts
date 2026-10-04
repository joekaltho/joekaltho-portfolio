import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'kaltrix-os',
    slug: 'kaltrix-os',
    title: 'KaltrixOS',
    tagline: "Africa's Business Operating System",
    description: 'An all-in-one operating platform helping African businesses establish an online presence, streamline daily operations, manage customer relationships, and track finances from one clean interface.',
    problem: 'Most small and medium enterprises in Nigeria and across Africa rely on fragmented tools: WhatsApp messages for orders, manual paper notebooks for bookkeeping, unstructured bank transfers, and no centralized way to verify merchant reputation or discover trusted vendors.',
    solution: 'KaltrixOS integrates essential commercial operations into a unified workspace: storefront listings, automated invoices, customer records, discovery directory, and a verifiable TrustScore that builds digital credibility.',
    role: 'Founder & Full-Stack Developer (Product design, architecture, system implementation, database modeling, and security hardening)',
    status: 'mvp',
    featured: true,
    isFounder: true,
    category: 'saas',
    features: [
      'Business Profiles & Verification',
      'Local Business Discovery Directory',
      'Listings & Digital Mini-Store',
      'Customer Relationship Management (CRM)',
      'Service Bookings & Appointments',
      'Professional Invoice Generation',
      'Revenue & Cashflow Tracking',
      'TrustScore Merchant Reputation System',
      'Business Pulse Analytics',
      'Multi-tenant Admin Workspace'
    ],
    technicalDetails: [
      'Engineered with TypeScript, Next.js / React, and Tailwind CSS for high responsiveness on low-bandwidth mobile connections',
      'Normalized relational schema with strict row-level security policies and role-based access control',
      'Optimized asset delivery and lightweight bundle architecture for emerging market mobile devices',
      'Modular micro-service ready architecture separating core commerce, identity, and analytics'
    ],
    techStack: [
      'TypeScript',
      'React / Next.js',
      'Tailwind CSS',
      'PostgreSQL',
      'Supabase',
      'REST APIs',
      'Edge Functions'
    ],
    liveUrl: 'https://kaltrix.com',
    githubUrl: 'https://github.com/joekaltho/kaltrix-os',
    image: '/src/assets/images/kaltrix_dashboard_preview_1791111990300.jpg',
    secondaryImage: '/src/assets/images/kaltrix_mobile_preview_1791112000875.jpg',
    metrics: [
      { label: 'Architecture', value: 'Multi-Tenant' },
      { label: 'Role', value: 'Solo Builder' },
      { label: 'Current Phase', value: 'Core MVP' }
    ]
  },
  {
    id: 'freelance-business-suite',
    slug: 'freelance-business-suite',
    title: 'B2B Brand & Commerce Platform',
    tagline: 'High-Performance Web Architecture & Client Redesign',
    description: 'Production-ready web platform built for independent commercial clients looking to transition from basic social media selling into a fast, branded web presence with inquiries and catalog browsing.',
    problem: 'Clients losing sales due to slow loading templates, unstructured direct messages, and lack of clear product catalogs with payment routing.',
    solution: 'Crafted a sub-second load time, custom-tailored web experience with integrated inquiry handling, mobile-first product showcase, and automated lead capture.',
    role: 'Freelance Lead Developer (End-to-end design, implementation, and deployment)',
    status: 'production',
    featured: false,
    isFounder: false,
    category: 'freelance',
    features: [
      'Mobile-first responsive catalog with zero bloat',
      'Dynamic inquiry form routing to WhatsApp & Email',
      'SEO structured metadata and OpenGraph social previews',
      'Edge-cached static generation for rapid mobile rendering'
    ],
    technicalDetails: [
      'Custom React + Vite / Next.js static generation achieving 99+ Lighthouse performance scores',
      'Zero layout shift (CLS 0.0) architecture optimized for Nigerian 3G/4G network conditions',
      'Direct integration with client communication channels'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
    githubUrl: 'https://github.com/joekaltho/client-platform-showcase',
    image: '/src/assets/images/kaltrix_mobile_preview_1791112000875.jpg',
    metrics: [
      { label: 'Performance', value: '99/100' },
      { label: 'Load Time', value: '< 800ms' }
    ]
  },
  {
    id: 'ai-doc-workflow-engine',
    slug: 'ai-doc-workflow-engine',
    title: 'AI Document & Ledger Assistant',
    tagline: 'Automated Invoice Extraction & Data Structuring Tool',
    description: 'An internal workflow experiment built to parse unstructured receipts, invoice photos, and handwritten financial records into standardized ledger entries using vision and language models.',
    problem: 'Small vendors spend hours manually transcribing physical paper receipts and unstructured photos into their daily accounting records.',
    solution: 'A pipeline that ingests camera snaps or PDFs, extracts line items with high precision, calculates running totals, and outputs clean structured JSON ready for database sync.',
    role: 'Creator & Developer',
    status: 'prototype',
    featured: false,
    isFounder: false,
    category: 'ai-system',
    features: [
      'Optical text and table layout recognition',
      'Structured schema extraction with validation guards',
      'Confidence scoring on parsed numeric figures',
      'One-click export to CSV / KaltrixOS invoice schema'
    ],
    technicalDetails: [
      'Prompt-engineered structured output parsing with deterministic schema validation',
      'Client-side image compression prior to API dispatch to minimize bandwidth consumption',
      'Asynchronous worker pattern with immediate user feedback'
    ],
    techStack: ['TypeScript', 'Gemini SDK / OpenAI API', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/joekaltho/ai-ledger-extractor',
    image: '/src/assets/images/journey_workspace_desk_1791112012293.jpg',
    metrics: [
      { label: 'Extraction', value: 'JSON Schema' },
      { label: 'Format', value: 'Invoices / Receipts' }
    ]
  }
];
