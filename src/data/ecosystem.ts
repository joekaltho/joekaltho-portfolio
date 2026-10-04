import { EcosystemProduct } from '../types';

export const ecosystemProducts: EcosystemProduct[] = [
  {
    id: 'kaltrix-os',
    name: 'KaltrixOS',
    tagline: 'Business Operations & Digital Presence',
    description: 'The operational bedrock for African enterprises. Consolidates storefront listings, verified discovery, customer relationships (CRM), bookings, invoicing, and TrustScore merchant verification into a unified workspace.',
    status: 'live',
    phase: 'Phase 1: Core Operating Foundation (Active)',
    coreCapabilities: [
      'Digital storefront & product catalog',
      'Local business discovery directory',
      'Unified customer database (CRM)',
      'Automated invoice generation & tracking',
      'Appointment & booking management',
      'TrustScore merchant reputation index'
    ]
  },
  {
    id: 'kaltrix-pay',
    name: 'KaltrixPay',
    tagline: 'Frictionless African Payments Infrastructure',
    description: 'Planned payment rails designed to solve cross-border settlements, instant merchant payouts, escrow protection for first-time buyers, and low-fee transactions tailored to local African banking systems.',
    status: 'in-development',
    phase: 'Phase 2: Commercial Rail Expansion (Planned / In Development)',
    coreCapabilities: [
      'Instant settlement to Nigerian bank accounts',
      'Built-in escrow protection tied to TrustScore',
      'Multi-currency processing across African corridors',
      'Automated invoice reconciliation with zero manual matching',
      'Recurring subscription billing for service providers'
    ]
  },
  {
    id: 'velocity-ai',
    name: 'Velocity AI',
    tagline: 'Autonomous Business Intelligence & Ops Layer',
    description: 'The future intelligence layer designed to sit atop KaltrixOS and KaltrixPay. Translates unstructured operational data into automated inventory restock alerts, cash-flow forecasts, and AI-driven customer retention workflows.',
    status: 'planned',
    phase: 'Phase 3: Autonomous Intelligence (Future Roadmap)',
    coreCapabilities: [
      'Predictive inventory restocking based on seasonal sales patterns',
      'Automated receipt parsing and expense classification via vision models',
      'Autonomous WhatsApp customer follow-up and abandoned cart recovery',
      'Natural-language financial reporting: "How much did I make this Tuesday?"'
    ]
  }
];

export const socialLinks = [
  {
    name: 'GitHub',
    handle: '@joekaltho',
    url: 'https://github.com/joekaltho',
    description: 'Code repositories, open-source work, and technical commits'
  },
  {
    name: 'LinkedIn',
    handle: 'in/joekaltho',
    url: 'https://linkedin.com/in/joekaltho',
    description: 'Professional updates, network connections, and career history'
  },
  {
    name: 'X (Twitter)',
    handle: '@joekaltho',
    url: 'https://x.com/joekaltho',
    description: 'Daily building in public, unfiltered founder updates, and thoughts on AI'
  },
  {
    name: 'Instagram',
    handle: '@joekaltho',
    url: 'https://instagram.com/joekaltho',
    description: 'Visual snippets of the founder journey, workspace, and life as a young builder'
  },
  {
    name: 'TikTok',
    handle: '@joekaltho',
    url: 'https://tiktok.com/@joekaltho',
    description: 'Short-form coding clips, dev day-in-the-life, and product builds'
  },
  {
    name: 'Email',
    handle: 'josephjameskaltho@gmail.com',
    url: 'mailto:josephjameskaltho@gmail.com',
    description: 'Direct inquiries, freelance project briefs, and founder conversations'
  }
];
