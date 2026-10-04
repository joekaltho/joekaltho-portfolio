import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { ProjectModal } from './components/ProjectModal';
import { PostModal } from './components/PostModal';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { JourneyPage } from './pages/JourneyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { projectsData } from './data/projects';
import { Project, JourneyPost } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<JourneyPost | null>(null);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['work', 'journey', 'about', 'contact'].includes(hash)) {
        setCurrentPath(hash);
      } else {
        setCurrentPath('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path === 'home' ? '' : path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredProject = projectsData.find((p) => p.slug === 'kaltrix-os') || projectsData[0];

  return (
    <div className="min-h-screen bg-[#090A0D] text-[#ECEEF2] flex flex-col justify-between selection:bg-neutral-800 selection:text-white">
      {/* Top Bar Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Main Page Content */}
      <div className="flex-1">
        {currentPath === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            featuredProject={featuredProject}
          />
        )}

        {currentPath === 'work' && (
          <WorkPage
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenCV={() => setIsCVOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPath === 'journey' && (
          <JourneyPage
            onSelectPost={(post) => setSelectedPost(post)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPath === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenCV={() => setIsCVOpen(true)}
          />
        )}

        {currentPath === 'contact' && <ContactPage />}
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVOpen(true)}
      />

      {/* Global Modals */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <PostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </div>
  );
}
