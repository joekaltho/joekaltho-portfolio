import React, { useState } from 'react';
import {
  Rocket,
  Compass,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Clock3,
  Layers,
  Sparkles,
  ArrowUpRight,
  Flame,
  Radio
} from 'lucide-react';
import { JourneyPost, TimelineMilestone } from '../types';
import { journeyPostsData, timelineMilestones } from '../data/journey';
import { ecosystemProducts, socialLinks } from '../data/ecosystem';

interface JourneyPageProps {
  onSelectPost: (post: JourneyPost) => void;
  onNavigate: (path: string) => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ onSelectPost, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPosts = journeyPostsData.filter((post) => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto space-y-24">
      {/* Hero: The Billion Dollar Build */}
      <section className="border-b border-[#1A1D24] pb-16 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1612] border border-[#38281D] rounded text-xs text-amber-300">
            <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="font-mono-code uppercase tracking-wider text-[11px]">
              Living Founder Record · Real-Time Build
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            THE BILLION DOLLAR BUILD
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-light">
            A public journey documenting an 18-year-old Computer Science student’s attempt to build companies, ship production software, and engineer startup infrastructure from Nigeria.
          </p>
        </div>

        {/* Founder Tone & Philosophy Note */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs">
          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block">
              01. Ambitious, Yet Self-Aware
            </span>
            <p className="text-neutral-400 leading-relaxed">
              Success is not guaranteed, and nothing is taken for granted. This is an open experiment in relentless execution, learning, and grit from day zero.
            </p>
          </div>
          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block">
              02. No Fabricated Hype
            </span>
            <p className="text-neutral-400 leading-relaxed">
              No imaginary venture rounds, no fake customer counts. If an experiment fails or a feature breaks, it gets logged honestly right here.
            </p>
          </div>
          <div className="p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl space-y-2">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block">
              03. Built from Nigeria
            </span>
            <p className="text-neutral-400 leading-relaxed">
              Designing software that functions under real-world African constraints: mobile-first interfaces, low latency, and solving foundational commerce trust.
            </p>
          </div>
        </div>

        {/* Ambient Workspace Visual Frame */}
        <div className="relative rounded-xl overflow-hidden border border-[#232734] bg-neutral-950 shadow-2xl">
          <img
            src="/src/assets/images/journey_workspace_desk_1791112012293.jpg"
            alt="The Billion Dollar Build Workspace"
            referrerPolicy="no-referrer"
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider mb-1">
              Field Dispatch
            </span>
            <p className="text-white text-base sm:text-lg font-medium max-w-xl">
              “The goal is not to look successful on social media. The goal is to build software that African businesses rely on every single day.”
            </p>
            <span className="text-neutral-400 text-xs mt-2">— Joe Kaltho</span>
          </div>
        </div>
      </section>

      {/* Currently Building: KaltrixOS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Current Core Project
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Currently Building: KaltrixOS
            </h2>
          </div>
          <a
            href="https://kaltrix.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
          >
            <span>Visit Kaltrix.com</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="p-8 sm:p-10 bg-[#0E1118] border border-[#202534] rounded-xl space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-emerald-400 font-mono-code uppercase font-semibold text-[11px] px-2.5 py-0.5 bg-[#121B1A] border border-[#1B3428] rounded">
                Active Core MVP
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">Africa’s Business Operating System</span>
            </div>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-3xl">
              KaltrixOS consolidates fragmented business tooling for African enterprises. Small traders and service providers currently jump between WhatsApp chats, paper notebooks, and unstructured bank transfers. KaltrixOS unifies their storefront, verified discovery, bookings, invoices, and customer history in one fast application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1C202B]">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                The Core Vision
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Provide every African merchant—from a boutique fashion brand in Lagos to an independent tech freelancer in Abuja—with enterprise-grade business management and verified digital reputation (TrustScore).
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
                Current Technical Milestones
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sub-900ms mobile storefront render speed; complete PostgreSQL relational schemas with row-level security; integrated invoice generator and automated booking scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Building In Public Feed */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
              Founder Log
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Building in Public
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              Unfiltered notes on technical decisions, product iterations, and architectural trade-offs.
            </p>
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#12151E] border border-[#202534] rounded-lg text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#222838] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setSelectedCategory('founder-note')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedCategory === 'founder-note'
                  ? 'bg-[#222838] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Founder Notes
            </button>
            <button
              onClick={() => setSelectedCategory('build-update')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedCategory === 'build-update'
                  ? 'bg-[#222838] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Build Updates
            </button>
            <button
              onClick={() => setSelectedCategory('lesson')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedCategory === 'lesson'
                  ? 'bg-[#222838] text-white font-medium'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Lessons & Insights
            </button>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group p-6 sm:p-8 bg-[#0D1017] hover:bg-[#12151F] border border-[#1E2330] hover:border-[#2E374A] rounded-xl transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3 text-xs text-neutral-400">
                  <span className="font-mono-code uppercase tracking-wider text-[11px] text-amber-400">
                    {post.category.replace('-', ' ')}
                  </span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono-code text-neutral-400 px-2 py-0.5 bg-[#141822] border border-[#1E2330] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-1.5 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                <span>Read Dispatch</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}

          {/* Placeholder for future entries */}
          <div className="p-6 bg-[#090B0F] border border-dashed border-[#1E2330] rounded-xl text-center space-y-1 text-xs text-neutral-500">
            <span className="text-neutral-400 font-medium block">Upcoming Logs in Pipeline</span>
            <p>
              Next up: “Testing KaltrixOS with First 20 Merchants in Lagos” and “Benchmarking Edge Database Latency in West Africa”.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="space-y-8 border-t border-[#1A1D24] pt-14">
        <div>
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            Milestones & Trajectory
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            Journey Timeline
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
            Real timeline of learning, shipping, and architectural milestones. No fabricated dates or achievements.
          </p>
        </div>

        <div className="relative pl-6 border-l border-[#202534] space-y-10">
          {timelineMilestones.map((milestone) => {
            const isCompleted = milestone.status === 'completed';
            const isCurrent = milestone.status === 'current';

            return (
              <div key={milestone.id} className="relative group">
                {/* Node icon */}
                <div
                  className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 ${
                    isCurrent
                      ? 'bg-amber-400 border-amber-300 shadow-md shadow-amber-500/20'
                      : isCompleted
                      ? 'bg-emerald-500 border-emerald-400'
                      : 'bg-neutral-800 border-neutral-700'
                  }`}
                />

                <div className="space-y-2 p-5 bg-[#0D1017] border border-[#1E2330] rounded-xl">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono-code text-neutral-400">
                      {milestone.period}
                    </span>
                    <span
                      className={`text-[10px] font-mono-code uppercase tracking-wider px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : isCompleted
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {milestone.title}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {milestone.description}
                  </p>

                  {milestone.learnings && (
                    <div className="pt-2 text-[11px] text-neutral-400 border-t border-[#1C202B]">
                      <span className="text-neutral-300 font-medium">Core takeaway: </span>
                      {milestone.learnings}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Kaltrix Long-Term Ecosystem Concept */}
      <section className="space-y-8 border-t border-[#1A1D24] pt-14">
        <div>
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            Product Architecture & Long-Term Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
            The Kaltrix Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
            A cohesive three-pillar architecture engineered to power African commerce. Unreleased products are strictly labeled as planned or in-development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemProducts.map((product) => {
            const isLive = product.status === 'live';
            const isDev = product.status === 'in-development';

            return (
              <div
                key={product.id}
                className="p-6 bg-[#0D1017] border border-[#1E2330] rounded-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {product.name}
                      </h3>
                      <span
                        className={`text-[10px] font-mono-code uppercase tracking-wider px-2 py-0.5 rounded ${
                          isLive
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : isDev
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                        }`}
                      >
                        {isLive ? 'Active Core MVP' : isDev ? 'In Development' : 'Planned / Future'}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400 font-medium block">
                      {product.tagline}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#1C202B]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block">
                      Core Capabilities
                    </span>
                    <ul className="text-xs text-neutral-400 space-y-1.5">
                      {product.coreCapabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-neutral-500 font-mono-code text-[11px]">•</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C202B] text-[11px] text-neutral-500 font-mono-code">
                  {product.phase}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Follow The Journey */}
      <section className="p-8 sm:p-10 bg-[#0E1118] border border-[#202534] rounded-xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
            Public Channels
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Follow The Journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
            I post weekly build updates, engineering clips, architectural notes, and unfiltered thoughts on building in Nigeria across these platforms:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-[#12151E] hover:bg-[#181D29] border border-[#1E2330] hover:border-[#2D364A] rounded-lg transition-colors group flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {social.name}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs font-mono-code text-neutral-400">
                {social.handle}
              </span>
              <p className="text-[11px] text-neutral-400 leading-snug">
                {social.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};
