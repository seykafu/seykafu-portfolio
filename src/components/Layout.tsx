
import React from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text custom-cursor-none">
      <CustomCursor />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <footer className="container mx-auto px-6 py-8 mt-20 border-t border-portfolio-muted/30 text-portfolio-text/60">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Kasey. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/kaseyfu/" target="_blank" rel="noopener noreferrer" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/seykafu" target="_blank" rel="noopener noreferrer" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors flex items-center gap-1">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a href="https://x.com/seykafu" target="_blank" rel="noopener noreferrer" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors flex items-center gap-1">
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
