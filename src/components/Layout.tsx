
import React from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';

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
            <p className="text-sm">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">LinkedIn</a>
            <a href="#" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">Twitter</a>
            <a href="#" className="text-portfolio-text/60 hover:text-portfolio-accent transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
