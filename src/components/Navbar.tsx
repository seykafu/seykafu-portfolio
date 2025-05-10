
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-portfolio-bg/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="font-serif text-2xl tracking-tight">
          <span className="text-portfolio-accent">P</span>ortfolio
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          <NavItem to="/" active={location === '/'}>Home</NavItem>
          <NavItem to="/product-portfolio" active={location === '/product-portfolio'}>Product Portfolio</NavItem>
          <NavItem to="/writing-portfolio" active={location === '/writing-portfolio'}>Writing Portfolio</NavItem>
          <NavItem to="/about" active={location === '/about'}>About Me</NavItem>
        </nav>
        <button className="md:hidden text-portfolio-text">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
