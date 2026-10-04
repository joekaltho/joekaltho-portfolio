import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenCV }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', path: 'work' },
    { label: 'Journey', path: 'journey' },
    { label: 'About', path: 'about' },
    { label: 'Contact', path: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090A0D]/90 backdrop-blur-md border-b border-[#1A1D24]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="text-base font-semibold tracking-tight text-white hover:text-neutral-300 transition-colors cursor-pointer text-left"
        >
          JOE KALTHO
        </button>

        {/* Zone 2: 4 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => onNavigate(link.path)}
                className={`transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-white border-b border-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white bg-[#14171F] hover:bg-[#1C212D] border border-[#232734] rounded transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-3.5 py-1.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-neutral-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0F15] border-b border-[#1A1D24] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  onNavigate(link.path);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-base py-1 cursor-pointer transition-colors ${
                  currentPath === link.path ? 'text-white font-medium' : 'text-neutral-400'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-[#1A1D24] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCV();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-neutral-300 bg-[#14171F] border border-[#232734] rounded"
            >
              <FileText className="w-3.5 h-3.5" />
              Download CV
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-medium text-black bg-white rounded"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
