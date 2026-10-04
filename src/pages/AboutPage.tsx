import React from 'react';
import { ArrowRight, Code, Laptop, BookOpen, Shield, HelpCircle, MapPin, Terminal } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenCV: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenCV }) => {
  const faqs = [
    {
      q: 'Are you really 18 years old?',
      a: 'Yes. I am 18, currently an undergraduate studying Computer Science in Nigeria. I started writing code early, focusing on practical web software, systems design, and shipping real things rather than waiting for graduation.'
    },
    {
      q: 'Can you handle production deployments and freelance clients?',
      a: 'Absolutely. I build with standard production toolchains: TypeScript, Next.js / React, PostgreSQL, Supabase, and Tailwind CSS. I have shipped client sites, implemented automated pipelines, and manage the full deployment lifecycle for KaltrixOS.'
    },
    {
      q: 'How do you balance university studies and startup building?',
      a: 'Strict personal discipline and high-leverage workflows. Coursework reinforces theoretical foundations (data structures, computer networks, algorithms, discrete math), while evenings and weekends are dedicated to shipping code for KaltrixOS and clients.'
    },
    {
      q: 'Are you available for freelance projects or employment?',
      a: 'Yes. I take on select freelance web development projects and am open to software engineering roles or internships with forward-thinking teams worldwide.'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto space-y-20">
      {/* Header */}
      <section className="border-b border-[#1A1D24] pb-14 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            The Story Behind The Code
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            About Joe Kaltho
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl font-light">
            Young, early, and already building software that matters.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6">
          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-sm leading-relaxed">
            <p>
              I am an 18-year-old software developer and founder based in Nigeria. I am currently pursuing my Bachelor’s degree in Computer Science, pairing rigorous academic fundamentals with daily, hands-on software engineering.
            </p>

            <p>
              Growing up around vibrant, hardworking local businesses in Nigeria, I saw firsthand how much time and money is lost to fragmented operations. Store owners juggling orders on WhatsApp, manually writing paper receipts, facing payment disputes, and having no reliable way to establish credibility with first-time buyers.
            </p>

            <p>
              Instead of waiting for someone else to build the solution or writing theoretical code that never leaves a local terminal, I started <span className="text-white font-medium">KaltrixOS</span>—an operating system designed to give African merchants modern digital tools, verified storefronts, and a trustworthy foundation for commerce.
            </p>

            <p>
              Alongside KaltrixOS, I work as an independent freelance developer, crafting high-performance web platforms and automated workflows for businesses that value speed, clean design, and dependable engineering.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('work')}
                className="px-4 py-2 bg-white text-black font-semibold text-xs rounded hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                View Technical Work
              </button>
              <button
                onClick={() => onNavigate('journey')}
                className="px-4 py-2 bg-[#141720] border border-[#232734] text-neutral-200 text-xs rounded hover:text-white hover:bg-[#1C212E] transition-colors cursor-pointer"
              >
                Read The Journey
              </button>
            </div>
          </div>

          {/* Sidebar / Fast Facts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                Quick Facts
              </span>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#1A1E29]">
                  <span className="text-neutral-400">Age</span>
                  <span className="text-white font-mono-code">18</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1A1E29]">
                  <span className="text-neutral-400">Discipline</span>
                  <span className="text-white">BSc Computer Science</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1A1E29]">
                  <span className="text-neutral-400">Location</span>
                  <span className="text-white">Nigeria (Remote)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1A1E29]">
                  <span className="text-neutral-400">Primary Stack</span>
                  <span className="text-white font-mono-code">TypeScript, React, Supabase</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#1A1E29]">
                  <span className="text-neutral-400">Founder Focus</span>
                  <span className="text-white">KaltrixOS</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-400">Working Ethic</span>
                  <span className="text-white">Ship code, verify, iterate</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-3 text-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                Engineering Philosophy
              </span>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Performance is respect:</strong> Build for 3G phones as carefully as for M3 MacBooks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>Grounded honesty:</strong> No fabricated claims; real code speaks loudest.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400">•</span>
                  <span><strong>AI as leverage:</strong> Use language models to multiply engineering speed without sacrificing architectural rigor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Environment & Toolbox */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            Toolbox & Workflow
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            How I Work & Build
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <Code className="w-5 h-5 text-neutral-400" />
            <span className="font-semibold text-white block">Core Languages</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              TypeScript across client and server, JavaScript (ESNext), Python for data and algorithmic experiments, SQL for relational data modeling.
            </p>
          </div>

          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <Laptop className="w-5 h-5 text-neutral-400" />
            <span className="font-semibold text-white block">Frontend & UI</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              React 19, Next.js (App Router), Tailwind CSS, Vite, Lucide Icons. Focus on high-contrast accessibility and zero-bloat bundles.
            </p>
          </div>

          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <Terminal className="w-5 h-5 text-neutral-400" />
            <span className="font-semibold text-white block">Backend & Cloud</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              PostgreSQL, Supabase, Node.js, Express, Edge Functions, Vercel deployments, Git/GitHub version control with atomic commits.
            </p>
          </div>

          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <Shield className="w-5 h-5 text-neutral-400" />
            <span className="font-semibold text-white block">AI & Automation</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Google GenAI SDK, OpenAI APIs, prompt pipelines with JSON Schema enforcement, webhook automations, automated invoice data parsers.
            </p>
          </div>
        </div>
      </section>

      {/* Honest FAQ */}
      <section className="space-y-6 border-t border-[#1A1D24] pt-14">
        <div>
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            Direct & Transparent
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2"
            >
              <h3 className="text-sm font-semibold text-white tracking-tight">
                {faq.q}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="p-8 sm:p-10 bg-[#0E1118] border border-[#202534] rounded-xl text-center space-y-4">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Want to discuss a project or chat about building?
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
          Whether you have a freelance web engagement, an engineering opportunity, or are following KaltrixOS, my inbox is always open.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-white text-black font-semibold text-xs rounded hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
          <button
            onClick={onOpenCV}
            className="px-5 py-2.5 bg-[#141720] border border-[#232734] text-neutral-200 text-xs rounded hover:text-white hover:bg-[#1C212E] transition-colors cursor-pointer"
          >
            Download CV
          </button>
        </div>
      </section>
    </main>
  );
};
