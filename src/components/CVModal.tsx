import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Github, Linkedin, MapPin } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate clean text-based / markdown resume download as immediate fallback, or trigger print
    const element = document.createElement('a');
    const resumeText = `# JOE KALTHO
Software Developer · Freelancer · Founder
Email: josephjameskaltho@gmail.com | Location: Nigeria
GitHub: https://github.com/joekaltho | LinkedIn: https://linkedin.com/in/joekaltho

--------------------------------------------------------------------------------
SUMMARY
18-year-old Computer Science student, software developer, and founder from Nigeria.
Passionate about engineering reliable web software, developing full-stack SaaS MVPs,
and leveraging AI pipelines for real business utility. Creator and founder of KaltrixOS.

--------------------------------------------------------------------------------
CORE TECHNICAL COMPETENCIES
- Languages: TypeScript, JavaScript (ES6+), Python, SQL, HTML5, CSS3
- Frontend: React, Next.js, Tailwind CSS, Responsive Design, State Management
- Backend & DB: Node.js, Express, PostgreSQL, Supabase, RESTful APIs, Edge Functions
- AI & Automation: LLM APIs (@google/genai, OpenAI), Structured JSON Schema parsing, Automated Webhooks
- Practices: Git/GitHub, Row-Level Security (RLS), Production Hardening, System Architecture

--------------------------------------------------------------------------------
FOUNDER & SOFTWARE EXPERIENCE

KALTRIXOS — Founder & Full-Stack Developer (2025 - Present)
Africa's Business Operating System | https://kaltrix.com
- Designed and built an all-in-one business operating system for African merchants.
- Engineered multi-tenant architecture supporting business discovery, digital mini-stores, CRM, bookings, and automated invoicing.
- Developed the TrustScore merchant index algorithm to combat online commerce fraud.
- Optimized performance for 3G/4G low-bandwidth connections, achieving <900ms load times.

FREELANCE SOFTWARE DEVELOPER — Independent (2024 - Present)
- Designed and deployed custom responsive business platforms and website redesigns.
- Reduced bounce rates and improved client conversion by engineering fast, mobile-first interfaces.
- Implemented automated lead capture routing to WhatsApp and email for small enterprises.

--------------------------------------------------------------------------------
EDUCATION
BSc in Computer Science (Undergraduate, 2024 - Present)
Nigeria
Focus: Data Structures, Algorithms, Software Engineering, Database Systems.
`;
    const file = new Blob([resumeText], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = 'Joe_Kaltho_CV.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 print:p-0 print:bg-white print:static">
      <div className="bg-[#0E1017] border border-[#232734] rounded-xl max-w-3xl w-full text-neutral-200 overflow-hidden shadow-2xl print:border-none print:shadow-none print:bg-white print:text-black">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="px-6 py-4 border-b border-[#1E2330] flex items-center justify-between bg-[#12151E] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Curriculum Vitae
            </span>
            <span className="text-neutral-500 text-xs">·</span>
            <span className="text-neutral-400 text-xs">Joe Kaltho (2026)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-[#1A1F2B] hover:bg-[#252B3C] border border-[#2A3144] rounded transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print to PDF</span>
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.md)</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close CV Modal"
              className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#1E2330] rounded transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-[#232734] pb-6 print:border-black/20">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white print:text-black">
              JOE KALTHO
            </h1>
            <p className="text-sm font-medium text-neutral-400 print:text-neutral-700 mt-1">
              Software Developer · Freelancer · Founder
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-neutral-400 print:text-neutral-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                Nigeria
              </span>
              <span>·</span>
              <a
                href="mailto:josephjameskaltho@gmail.com"
                className="flex items-center gap-1 hover:text-white print:text-black"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                josephjameskaltho@gmail.com
              </a>
              <span>·</span>
              <a
                href="https://github.com/joekaltho"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white print:text-black"
              >
                <Github className="w-3.5 h-3.5 text-neutral-500" />
                github.com/joekaltho
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com/in/joekaltho"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-white print:text-black"
              >
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                linkedin.com/in/joekaltho
              </a>
            </div>
          </div>

          {/* Statement */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 print:text-neutral-800">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-neutral-300 print:text-neutral-700">
              18-year-old Computer Science undergraduate, software developer, and founder based in Nigeria.
              Proven track record of taking complex problem spaces from concept to production-grade web systems.
              Experience spans full-stack TypeScript/React/PostgreSQL engineering, responsive UI design, AI workflow automation,
              and founder-led product architecture at KaltrixOS. Focused on reliable systems that solve real operational friction.
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 print:text-neutral-800">
              Experience & Projects
            </h2>

            {/* KaltrixOS */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="text-sm font-semibold text-white print:text-black">
                    KaltrixOS — Africa’s Business Operating System
                  </span>
                  <span className="text-xs text-neutral-400 print:text-neutral-600 block sm:inline sm:ml-2">
                    Founder & Lead Developer
                  </span>
                </div>
                <span className="text-xs text-neutral-500 font-mono-code">2025 — Present</span>
              </div>
              <ul className="list-disc list-inside text-xs space-y-1.5 text-neutral-300 print:text-neutral-700 pl-1">
                <li>
                  Engineered an all-in-one platform for African merchants integrating digital storefronts, CRM, booking appointments, automated invoices, and TrustScore verification.
                </li>
                <li>
                  Architected multi-tenant database schemas with strict PostgreSQL row-level security and granular role-based permissions.
                </li>
                <li>
                  Optimized frontend bundle size and edge caching, reducing asset payloads by 64% and ensuring sub-900ms load times on intermittent mobile connections.
                </li>
                <li>
                  Conducted hands-on customer discovery with local retail merchants to iteratively refine product scope.
                </li>
              </ul>
            </div>

            {/* Freelance */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="text-sm font-semibold text-white print:text-black">
                    Freelance Software Developer
                  </span>
                  <span className="text-xs text-neutral-400 print:text-neutral-600 block sm:inline sm:ml-2">
                    Independent Engineering & Web Consulting
                  </span>
                </div>
                <span className="text-xs text-neutral-500 font-mono-code">2024 — Present</span>
              </div>
              <ul className="list-disc list-inside text-xs space-y-1.5 text-neutral-300 print:text-neutral-700 pl-1">
                <li>
                  Delivered custom web applications, performant brand platforms, and website redesigns for commercial clients.
                </li>
                <li>
                  Automated customer inquiries and order intake pipelines using WhatsApp Webhooks and Email notifications.
                </li>
                <li>
                  Consistently achieved 95+ Google Lighthouse scores across performance, accessibility, and SEO.
                </li>
              </ul>
            </div>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 print:text-neutral-800">
              Technical Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#13161F] border border-[#1E2330] rounded print:bg-neutral-50 print:border-neutral-200">
                <span className="font-semibold text-white print:text-black block mb-1">
                  Full-Stack & Web
                </span>
                <p className="text-neutral-400 print:text-neutral-700 text-[11px] leading-relaxed">
                  TypeScript, JavaScript (ESNext), React, Next.js, Tailwind CSS, Node.js, Express, HTML5, CSS3, REST APIs.
                </p>
              </div>
              <div className="p-3 bg-[#13161F] border border-[#1E2330] rounded print:bg-neutral-50 print:border-neutral-200">
                <span className="font-semibold text-white print:text-black block mb-1">
                  Databases & Cloud
                </span>
                <p className="text-neutral-400 print:text-neutral-700 text-[11px] leading-relaxed">
                  PostgreSQL, Supabase, Relational Modeling, Row-Level Security (RLS), Edge Functions, Vercel, Git/GitHub.
                </p>
              </div>
              <div className="p-3 bg-[#13161F] border border-[#1E2330] rounded print:bg-neutral-50 print:border-neutral-200">
                <span className="font-semibold text-white print:text-black block mb-1">
                  AI & Automation
                </span>
                <p className="text-neutral-400 print:text-neutral-700 text-[11px] leading-relaxed">
                  LLM Integrations (Gemini API, OpenAI), Structured JSON Schema extraction, Prompt Engineering, Webhook automations.
                </p>
              </div>
              <div className="p-3 bg-[#13161F] border border-[#1E2330] rounded print:bg-neutral-50 print:border-neutral-200">
                <span className="font-semibold text-white print:text-black block mb-1">
                  Product & Systems
                </span>
                <p className="text-neutral-400 print:text-neutral-700 text-[11px] leading-relaxed">
                  MVP Scoping, UI/UX Architecture, Low-Bandwidth Optimization, Building in Public, Security Hardening.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 print:text-neutral-800">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
              <div>
                <span className="font-semibold text-white print:text-black">
                  Bachelor of Science (BSc) in Computer Science
                </span>
                <span className="text-neutral-400 print:text-neutral-600 block sm:inline sm:ml-2">
                  Undergraduate Student, Nigeria
                </span>
              </div>
              <span className="text-neutral-500 font-mono-code">2024 — Expected 2028</span>
            </div>
            <p className="text-[11px] text-neutral-400 print:text-neutral-600">
              Key coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Systems, Computer Networks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
