
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  to: string;
  active?: boolean;
  children: React.ReactNode;
}

const NavItem = ({ to, active, children }: NavItemProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        "text-portfolio-text/80 hover:text-portfolio-text transition-colors px-4 py-2 relative",
        active && "text-portfolio-text after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-portfolio-accent"
      )}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const location = window.location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-portfolio-bg/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl tracking-tight flex items-center">
          <img 
            src="/lovable-uploads/87a43d36-259d-4a98-99d7-98e3394aa0b1.png" 
            alt="Kasey Logo" 
            className="h-8 w-auto mr-2" 
          />
          <span className="text-portfolio-accent">K</span>asey
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <NavItem to="/" active={location === '/'}>Home</NavItem>
          <NavItem to="/product-portfolio" active={location === '/product-portfolio'}>Product Portfolio</NavItem>
          <NavItem to="/writing-portfolio" active={location === '/writing-portfolio'}>Writing Portfolio</NavItem>
          <NavItem to="/community-work" active={location === '/community-work'}>Community Work</NavItem>
          <NavItem to="/about" active={location === '/about'}>About Me</NavItem>
        </nav>
        <button 
          className="md:hidden text-portfolio-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-bg/95 backdrop-blur-md">
          <nav className="flex flex-col items-center py-4">
            <NavItem to="/" active={location === '/'}>Home</NavItem>
            <NavItem to="/product-portfolio" active={location === '/product-portfolio'}>Product Portfolio</NavItem>
            <NavItem to="/writing-portfolio" active={location === '/writing-portfolio'}>Writing Portfolio</NavItem>
            <NavItem to="/community-work" active={location === '/community-work'}>Community Work</NavItem>
            <NavItem to="/about" active={location === '/about'}>About Me</NavItem>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
