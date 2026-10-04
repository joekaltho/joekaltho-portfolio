import React, { useState } from 'react';
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Smartphone,
  Zap,
  Globe
} from 'lucide-react';
import { Project, SkillCategory, FreelanceOffering } from '../types';
import { projectsData } from '../data/projects';
import { skillsData, freelanceOfferings } from '../data/skills';

interface WorkPageProps {
  onSelectProject: (project: Project) => void;
  onOpenCV: () => void;
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onSelectProject,
  onOpenCV,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'saas' | 'freelance' | 'ai'>('all');

  const featuredProject = projectsData.find((p) => p.slug === 'kaltrix-os') || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.slug !== 'kaltrix-os');

  const filteredSecondary = secondaryProjects.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'saas') return p.category === 'saas';
    if (activeTab === 'freelance') return p.category === 'freelance';
    if (activeTab === 'ai') return p.category === 'ai-system';
    return true;
  });

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto space-y-20">
      {/* Header & Direct About */}
      <section className="border-b border-[#1A1D24] pb-14 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Professional Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Work With Me
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={onOpenCV}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-black font-semibold text-xs rounded hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </button>
            <a
              href="https://github.com/joekaltho"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#141720] border border-[#232734] text-neutral-200 text-xs rounded hover:text-white hover:bg-[#1C212E] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/joekaltho"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#141720] border border-[#232734] text-neutral-200 text-xs rounded hover:text-white hover:bg-[#1C212E] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:josephjameskaltho@gmail.com"
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#141720] border border-[#232734] text-neutral-200 text-xs rounded hover:text-white hover:bg-[#1C212E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Honest About statement */}
        <div className="p-6 sm:p-8 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
            About Joe Kaltho
          </span>
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-4xl">
            I am an 18-year-old Computer Science undergraduate from Nigeria who builds full-stack software, experiments with AI workflows, takes on select freelance engineering projects, and is building KaltrixOS.
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
            I believe in honest engineering: no exaggerated titles, no fabricated metrics, and no vanity logos. My focus is on writing maintainable code, designing clean interfaces that load fast on African mobile networks, and solving real operational friction for businesses.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
            <span>Primary Focus: Full-Stack Web Development & SaaS</span>
            <span>·</span>
            <span>Available for: Freelance Projects & Engineering Roles</span>
            <span>·</span>
            <span>Location: Nigeria (Remote Worldwide)</span>
          </div>
        </div>
      </section>

      {/* Featured Flagship Project: KaltrixOS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Flagship Project & Startup
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              KaltrixOS — Africa’s Business Operating System
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://kaltrix.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href="https://github.com/joekaltho/kaltrix-os"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Feature Case Card */}
        <div className="bg-[#0D1017] border border-[#202534] rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual preview */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-neutral-950/60 border-b lg:border-b-0 lg:border-r border-[#1E2330] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-[#232734] shadow-md bg-neutral-900">
                  <img
                    src={featuredProject.image}
                    alt="KaltrixOS Dashboard"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover max-h-[340px]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="p-3 bg-[#12151E] border border-[#1E2330] rounded">
                    <span className="text-[11px] text-neutral-400 block">Scope</span>
                    <span className="text-xs font-semibold text-white">Multi-Tenant OS</span>
                  </div>
                  <div className="p-3 bg-[#12151E] border border-[#1E2330] rounded">
                    <span className="text-[11px] text-neutral-400 block">Mobile Render</span>
                    <span className="text-xs font-semibold text-white">&lt; 900ms</span>
                  </div>
                  <div className="p-3 bg-[#12151E] border border-[#1E2330] rounded">
                    <span className="text-[11px] text-neutral-400 block">Development</span>
                    <span className="text-xs font-semibold text-white">Active Core MVP</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(featuredProject)}
                  className="px-4 py-2 bg-[#1B202D] hover:bg-[#252C3E] border border-[#2B3346] text-white text-xs font-medium rounded transition-colors cursor-pointer"
                >
                  Explore Complete Case Study
                </button>
              </div>
            </div>

            {/* Context & Architecture */}
            <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block mb-1">
                    What It Does
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    KaltrixOS helps African businesses manage their online presence and day-to-day operations from one place without juggling fragmented chat apps, paper notes, and unverified bank transfers.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 block">
                    The Problem
                  </span>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    African merchants lose sales and credibility because they operate across disorganized WhatsApp chats, lack verified business identities, and struggle with bookkeeping and discovery.
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                    The Solution
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    A centralized operating system: storefront listings, automated invoices, customer records, discovery directory, and a verifiable TrustScore.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
                    Actual Implemented Product Areas
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] text-neutral-300">
                    {featuredProject.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#1C202B]">
                  <span className="text-xs text-neutral-400 block mb-1">Joe’s Role:</span>
                  <p className="text-xs text-neutral-200">
                    Founder & Lead Developer — Responsible for product architecture, frontend & backend code, database schema, security rules, and customer discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Engineering Projects */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Work & Prototypes
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Other Real Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#12151E] border border-[#202534] rounded-lg text-xs">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'all' ? 'bg-[#222838] text-white font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('freelance')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'freelance' ? 'bg-[#222838] text-white font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Freelance & Client
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                activeTab === 'ai' ? 'bg-[#222838] text-white font-medium' : 'text-neutral-400 hover:text-white'
              }`}
            >
              AI & Automation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSecondary.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group p-6 bg-[#0D1017] hover:bg-[#12151F] border border-[#1E2330] hover:border-[#2C3446] rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border border-[#232734] bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-44 object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono-code text-neutral-400 uppercase tracking-wider text-[11px]">
                    {project.status === 'production' ? 'Production Build' : 'Technical Prototype'}
                  </span>
                  <span className="text-neutral-500 font-mono-code">{project.category}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono-code text-neutral-400 px-2 py-0.5 bg-[#141822] border border-[#202534] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#1A1E29] mt-6 flex items-center justify-between text-xs">
                <span className="text-neutral-400">{project.role}</span>
                <span className="text-white font-medium group-hover:underline flex items-center gap-1">
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Organized Around Capabilities */}
      <section className="space-y-8 border-t border-[#1A1D24] pt-14">
        <div>
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            Capabilities & Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Technical Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
            Organized around real problem-solving capabilities rather than a wall of logos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-5"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed mt-1">
                  {category.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                  Demonstrated Capabilities
                </span>
                <ul className="space-y-2 text-xs text-neutral-300">
                  {category.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 text-xs shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#1C202B] space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                  Core Tooling
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {category.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono-code text-neutral-300 px-2 py-0.5 bg-[#141822] border border-[#202636] rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Freelance Offerings */}
      <section className="space-y-8 border-t border-[#1A1D24] pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Freelancing & Consulting
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Freelance Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              Available for independent contract engineering, business platforms, and automated tools. No invented client logos—just real, deliverable engineering.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-4 py-2 bg-white text-black font-semibold text-xs rounded hover:bg-neutral-200 transition-colors cursor-pointer shrink-0"
          >
            Inquire About a Project
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {freelanceOfferings.map((offer) => (
            <div
              key={offer.title}
              className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {offer.title}
                  </h3>
                  <span className="text-[11px] font-mono-code text-neutral-400 px-2 py-0.5 bg-[#141822] border border-[#202534] rounded">
                    {offer.timeframe}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {offer.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                    Deliverables:
                  </span>
                  <ul className="text-xs text-neutral-400 space-y-1">
                    {offer.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C202B] text-[11px] text-neutral-400">
                <span className="text-neutral-300 font-medium">Ideal For: </span>
                <span>{offer.idealFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Experience Section */}
      <section className="p-8 sm:p-10 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            End-to-End Ownership
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Founder Experience: Building KaltrixOS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
            Building a product as a solo technical founder requires hands-on involvement far beyond writing frontend React components. At KaltrixOS, I actively handle:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-[#12151E] border border-[#1E2330] rounded space-y-1">
            <span className="font-semibold text-white block">System Architecture</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Designing scalable multi-tenant schemas, row-level security, and fast edge deployment.
            </p>
          </div>
          <div className="p-4 bg-[#12151E] border border-[#1E2330] rounded space-y-1">
            <span className="font-semibold text-white block">Product Decisions</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Ruthlessly scoping MVP features to ship functional software instead of vaporware.
            </p>
          </div>
          <div className="p-4 bg-[#12151E] border border-[#1E2330] rounded space-y-1">
            <span className="font-semibold text-white block">Customer Discovery</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Direct discussions with Nigerian vendors, gathering pain points on payments and trust.
            </p>
          </div>
          <div className="p-4 bg-[#12151E] border border-[#1E2330] rounded space-y-1">
            <span className="font-semibold text-white block">Security & Reliability</span>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Hardening database permissions, managing API keys securely, and auditing user authentication.
            </p>
          </div>
        </div>
      </section>

      {/* CV Call To Action Banner */}
      <section className="p-8 sm:p-10 bg-gradient-to-r from-[#11141C] to-[#151924] border border-[#232734] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Need a detailed technical resume?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg">
            Download the complete, ATS-friendly CV covering education, technical competencies, and project history.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold text-xs rounded hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 bg-[#1B202D] border border-[#2A3144] text-white text-xs font-medium rounded hover:bg-[#252C3D] transition-colors cursor-pointer"
          >
            Contact Joe
          </button>
        </div>
      </section>
    </main>
  );
};
