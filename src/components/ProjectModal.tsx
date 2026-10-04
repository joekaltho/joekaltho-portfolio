import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#0D0F15] border border-[#232734] rounded-xl max-w-4xl w-full text-neutral-200 overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="px-6 py-4 border-b border-[#1A1D25] flex items-center justify-between bg-[#11141C] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-sm tracking-tight">
              {project.title}
            </span>
            <span className="text-neutral-500 text-xs">·</span>
            <span className="text-neutral-400 text-xs">{project.tagline}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-neutral-400 hover:text-white hover:bg-[#1C212E] rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable details */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Main Visual showcase */}
          <div className="rounded-lg overflow-hidden border border-[#232734] bg-neutral-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[420px]"
            />
          </div>

          {/* Quick Actions & Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#12151E] border border-[#1E2330] rounded-lg">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
              <span className="text-neutral-300 font-medium">Status:</span>
              <span className="text-emerald-400 font-mono-code uppercase tracking-wider text-[11px]">
                {project.status}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-medium">Role:</span>
              <span>{project.role}</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black font-medium rounded hover:bg-neutral-200 transition-colors"
                >
                  <span>Live Product</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1C212E] text-neutral-200 border border-[#2A3144] font-medium rounded hover:bg-[#252C3D] hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-[#11141C] border border-[#1E2330] rounded-lg space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 block">
                The Problem
              </span>
              <p className="text-xs leading-relaxed text-neutral-300">
                {project.problem}
              </p>
            </div>

            <div className="p-5 bg-[#11141C] border border-[#1E2330] rounded-lg space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                The Solution
              </span>
              <p className="text-xs leading-relaxed text-neutral-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Secondary preview if exists */}
          {project.secondaryImage && (
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                Mobile / Storefront Interface
              </span>
              <div className="rounded-lg overflow-hidden border border-[#232734] bg-neutral-950">
                <img
                  src={project.secondaryImage}
                  alt={`${project.title} secondary interface`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover max-h-[360px]"
                />
              </div>
            </div>
          )}

          {/* Actual Product Features */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
              Core Architectural Features
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 bg-[#12151E] border border-[#1D212B] rounded text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Details & Implementation */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block">
              Technical Implementation & Engineering Decisions
            </span>
            <ul className="space-y-2 text-xs text-neutral-300">
              {project.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-neutral-500 font-mono-code text-[11px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-[#1C202B]">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono-code text-neutral-300 px-2.5 py-1 bg-[#141822] border border-[#222838] rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
