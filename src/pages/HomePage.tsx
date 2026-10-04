import React from 'react';
import { ArrowRight, Code2, Rocket, ExternalLink, Sparkles, MapPin, Terminal } from 'lucide-react';
import { Project } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onSelectProject: (project: Project) => void;
  featuredProject: Project;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  featuredProject
}) => {
  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-between">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-16 pb-12 sm:pb-16 border-b border-[#1A1D24]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6">
            {/* Real Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#13161F] border border-[#202533] rounded text-xs text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>18-Year-Old Software Developer & Founder</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">Nigeria</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                JOE KALTHO
              </h1>
              <p className="text-lg sm:text-xl font-medium text-neutral-400">
                Software Developer · Freelancer · Founder
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light">
              I build software, launch products, and use AI to turn ideas into working systems.
            </p>

            {/* Quick Core Anchors */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-medium">BSc Computer Science</span>
                <span className="text-neutral-600">·</span>
                <span>Undergraduate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-medium">KaltrixOS</span>
                <span className="text-neutral-600">·</span>
                <span>Founder & Developer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white font-medium">Full-Stack & AI</span>
                <span className="text-neutral-600">·</span>
                <span>TypeScript / React / Supabase</span>
              </div>
            </div>
          </div>

          {/* Photo & Signature Frame */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-[#232734] bg-[#12151E] shadow-2xl group">
              <img
                src="/src/assets/images/joe_portrait_1791111978404.jpg"
                alt="Joe Kaltho"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-white text-xs font-semibold">Joe Kaltho</span>
                <span className="text-neutral-400 text-[11px]">Lagos, Nigeria · UTC+1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Clear Paths Section */}
      <section className="py-14 sm:py-20 border-b border-[#1A1D24]">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block">
            Select Your Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Two distinct paths. One builder.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Path 1: WORK WITH ME */}
          <div
            onClick={() => onNavigate('work')}
            className="group relative p-8 sm:p-10 bg-[#0E1118] hover:bg-[#131722] border border-[#202534] hover:border-[#333C52] rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#181D29] border border-[#272F42] flex items-center justify-center text-white group-hover:text-emerald-400 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block mb-1">
                  Experience 01
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  WORK WITH ME
                </h3>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed">
                For recruiters, engineering teams, companies, and clients looking for a serious full-stack developer who ships real production code, web platforms, and AI-assisted workflows.
              </p>

              <div className="pt-2 text-xs text-neutral-400 space-y-1">
                <div>• Full-stack web applications & SaaS development</div>
                <div>• Independent client freelancing & high-speed websites</div>
                <div>• Technical capabilities, production hardening & CV</div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-2 text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Path 2: THE FOUNDER JOURNEY */}
          <div
            onClick={() => onNavigate('journey')}
            className="group relative p-8 sm:p-10 bg-[#0E1118] hover:bg-[#131722] border border-[#202534] hover:border-[#333C52] rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#181D29] border border-[#272F42] flex items-center justify-center text-white group-hover:text-amber-400 transition-colors">
                <Rocket className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block mb-1">
                  Experience 02
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  THE FOUNDER JOURNEY
                </h3>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed">
                For builders, investors, and operators following the real-time build of startups from Nigeria. Documenting KaltrixOS, The Billion Dollar Build, experiments, and lessons learned.
              </p>

              <div className="pt-2 text-xs text-neutral-400 space-y-1">
                <div>• The Billion Dollar Build: Honest zero-to-one record</div>
                <div>• KaltrixOS: Africa’s Business Operating System</div>
                <div>• Building in public, milestones, and ecosystem roadmap</div>
              </div>
            </div>

            <div className="pt-8 flex items-center gap-2 text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
              <span>Explore The Journey</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Currently Building Spotlight */}
      <section className="pt-12 sm:pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Flagship Project
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Currently Building: KaltrixOS
            </h2>
          </div>
          <button
            onClick={() => onSelectProject(featuredProject)}
            className="text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View Full Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div
          onClick={() => onSelectProject(featuredProject)}
          className="group p-6 sm:p-8 bg-[#0E1118] border border-[#202534] hover:border-[#2F374C] rounded-xl cursor-pointer transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400 font-mono-code font-semibold uppercase tracking-wider">
                  Core MVP
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-400">Africa’s Business Operating System</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                An integrated platform helping African micro & small businesses manage storefront discovery, verified customer records, invoices, bookings, and digital TrustScore from one unified place.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {featuredProject.features.slice(0, 5).map((f) => (
                  <span
                    key={f}
                    className="text-[11px] text-neutral-400 px-2.5 py-1 bg-[#141822] border border-[#202636] rounded"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-lg overflow-hidden border border-[#232734] bg-neutral-950 shadow-md">
                <img
                  src={featuredProject.image}
                  alt="KaltrixOS Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-48 group-hover:scale-102 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
