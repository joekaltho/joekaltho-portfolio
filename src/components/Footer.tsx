import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/ecosystem';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCV }) => {
  return (
    <footer className="border-t border-[#1A1D24] bg-[#07080A] text-neutral-400 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-white font-semibold text-sm tracking-tight block">
              JOE KALTHO
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              18-year-old Computer Science student, software developer, and founder from Nigeria. Building products, shipping code, and documenting the journey in public.
            </p>
            <div className="pt-2 text-neutral-500 text-[11px]">
              <span>Based in Nigeria</span>
              <span className="mx-2">·</span>
              <span>Available for freelance & engineering roles</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <span className="text-neutral-200 font-medium text-xs uppercase tracking-wider block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Work & Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('journey')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Founder Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Joe
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCV}
                  className="text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  Curriculum Vitae (CV)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow the Journey */}
          <div className="space-y-3">
            <span className="text-neutral-200 font-medium text-xs uppercase tracking-wider block">
              Follow The Journey
            </span>
            <ul className="space-y-2 text-xs">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#141720] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Joe Kaltho. Built with TypeScript & Tailwind. Ready for Vercel & Supabase.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:josephjameskaltho@gmail.com"
              className="hover:text-neutral-300 transition-colors"
            >
              josephjameskaltho@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
