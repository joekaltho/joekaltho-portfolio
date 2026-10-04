import { JourneyPost, TimelineMilestone } from '../types';

export const journeyPostsData: JourneyPost[] = [
  {
    id: 'post-1-the-starting-line',
    slug: 'why-i-am-documenting-the-billion-dollar-build',
    title: 'Why I am Documenting The Billion Dollar Build at 18',
    date: 'March 2026',
    timestamp: '2026-03-15',
    category: 'founder-note',
    summary: 'Starting from scratch as a Computer Science student in Nigeria. No institutional funding, no guarantees, just a commitment to ship real products and learn in the open.',
    content: [
      'Most founder stories are told in retrospect, polished to make every decision look premeditated and inevitable. I wanted something different: a real-time record of building from the earliest possible stage.',
      'I am 18 years old, studying Computer Science in Nigeria, and working on software every single day. The Billion Dollar Build is not a declaration that success is guaranteed. It is a commitment to the scale of my ambition, matched with honest accountability.',
      'Here, I will document everything as it happens: why we chose certain architectures, the technical hurdles of building software for African commerce, the features that failed, and the milestones that worked.',
      'If you are a fellow builder, an engineer, or someone interested in the reality of zero-to-one startups, follow along.'
    ],
    keyTakeaways: [
      'Documenting in real-time prevents hindsight bias and keeps accountability high',
      'The goal is shipping useful software, not vanity hype or performative startup culture',
      'Building in Africa requires designing for real infrastructural constraints: bandwidth, power, and cash-flow realities'
    ],
    tags: ['Founder Journey', 'Building in Public', 'Philosophy'],
    readTime: '3 min read'
  },
  {
    id: 'post-2-kaltrixos-architecture-decisions',
    slug: 'architecting-kaltrixos-for-low-bandwidth-merchants',
    title: 'Architecting KaltrixOS: Designing for Low-Bandwidth Commerce',
    date: 'February 2026',
    timestamp: '2026-02-28',
    category: 'build-update',
    summary: 'Why we stripped heavy frameworks from the merchant-facing storefront and focused on sub-second load times on intermittent mobile connections.',
    content: [
      'When testing early prototypes of KaltrixOS with everyday vendors in Nigeria, the biggest realization was that desktop dashboards mean nothing if the mobile storefront takes 7 seconds to load on a spotty 3G connection.',
      'We made a deliberate technical decision: aggressively optimize the merchant storefront and discovery directory. We removed unnecessary third-party tracking scripts, leveraged edge caching, and compressed all asset delivery.',
      'The result was an immediate drop in page weight by 64% and average mobile render times under 900ms.',
      'Building for emerging markets is the ultimate test of frontend hygiene: you cannot hide lazy engineering behind fiber-optic internet.'
    ],
    keyTakeaways: [
      'Mobile-first is not a slogan; in Nigeria, it is the only screen that matters for small traders',
      'Performance and speed directly translate to trust when a customer is deciding whether to place an order',
      'Keep database queries lean and push static content to the edge'
    ],
    tags: ['KaltrixOS', 'Engineering', 'Architecture', 'Performance'],
    readTime: '4 min read'
  },
  {
    id: 'post-3-the-trustscore-hypothesis',
    slug: 'solving-commerce-distrust-the-trustscore-hypothesis',
    title: 'Solving Commerce Distrust: The TrustScore Hypothesis',
    date: 'January 2026',
    timestamp: '2026-01-20',
    category: 'lesson',
    summary: 'The biggest obstacle to online commerce in Nigeria isn’t software availability—it’s trust. Here is how we are building TrustScore into KaltrixOS.',
    content: [
      'Every week, people lose money to ghost vendors on social media. As a result, consumers are terrified of paying before delivery, and sellers are terrified of sending goods without upfront payment.',
      'KaltrixOS does not just want to be an administrative tool; it needs to be an engine of trust.',
      'We introduced the TrustScore concept: a composite rating based on verified business registration, completed and fulfilled orders, verifiable customer reviews, and operational consistency.',
      'Early testing showed that merchants who displayed verifiable operational history had noticeably higher conversion rates from first-time buyers.'
    ],
    keyTakeaways: [
      'Software must solve trust before it can solve convenience',
      'Reputation systems need to be mathematically sound and tamper-resistant',
      'A platform that protects buyers automatically elevates honest sellers'
    ],
    tags: ['Product Strategy', 'TrustScore', 'African Commerce'],
    readTime: '3 min read'
  }
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'milestone-1',
    period: '2024',
    title: 'The Starting Point & Foundations',
    description: 'Began deep dive into Computer Science fundamentals, full-stack web engineering, and systems programming. Built foundational personal projects, experimented with JavaScript/TypeScript, and took on initial freelance web engagements.',
    category: 'starting',
    status: 'completed',
    learnings: 'Mastering core language fundamentals (TypeScript, DOM, HTTP, SQL) creates an unshakeable base for moving fast later.'
  },
  {
    id: 'milestone-2',
    period: 'Late 2024 – 2025',
    title: 'First Freelance Deployments & Production Hardening',
    description: 'Delivered custom web experiences and business websites for real clients. Learned the realities of production: domain routing, DNS, edge caching, responsive CSS, and client communication.',
    category: 'technical',
    status: 'completed',
    learnings: 'Shipping for real clients teaches accountability faster than any tutorial ever can.'
  },
  {
    id: 'milestone-3',
    period: 'Late 2025 – Early 2026',
    title: 'Conceiving KaltrixOS & Scoping Africa’s Business OS',
    description: 'Identified the massive fragmentation in small business operations across Nigeria. Researched the workflow of retail merchants, service providers, and freelancers. Drafted the architectural blueprint for KaltrixOS.',
    category: 'kaltrix',
    status: 'completed',
    learnings: 'Talk to users before writing database schemas. Real workflows are messy; the software must make them effortless.'
  },
  {
    id: 'milestone-4',
    period: '2026 (Current)',
    title: 'KaltrixOS Core MVP Development & Alpha Testing',
    description: 'Actively building the core operating suite: Business Profiles, Discovery Directory, Mini-Store, CRM, Invoices, Bookings, and TrustScore. Iterating with initial early adopters in Nigeria.',
    category: 'kaltrix',
    status: 'current',
    learnings: 'Focus on depth over breadth. Make invoices and storefront discovery flawless before adding peripheral features.'
  },
  {
    id: 'milestone-5',
    period: 'Next Phase (Planned)',
    title: 'KaltrixOS Public Beta & First 100 Verified Merchants',
    description: 'Targeted rollout across key commercial hubs in Nigeria. Gathering rigorous data on invoice completion rates, customer repeat visits, and TrustScore accuracy.',
    category: 'kaltrix',
    status: 'upcoming'
  },
  {
    id: 'milestone-6',
    period: 'Future Roadmap',
    title: 'Ecosystem Expansion: KaltrixPay & Velocity AI',
    description: 'Phase two of the long-term vision: unlocking direct payment rails with KaltrixPay and autonomous business intelligence via Velocity AI.',
    category: 'ecosystem',
    status: 'upcoming'
  }
];
