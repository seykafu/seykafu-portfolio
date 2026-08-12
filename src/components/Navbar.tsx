import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/product-portfolio', label: 'Product' },
  { to: '/writing-portfolio', label: 'Writing' },
  { to: '/community-work', label: 'Community' },
  { to: '/about', label: 'About' },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll while the fullscreen menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="pointer-events-auto flex items-center font-serif text-2xl tracking-tight">
            <img
              src="/lovable-uploads/87a43d36-259d-4a98-99d7-98e3394aa0b1.png"
              alt="Kasey Logo"
              className="mr-2 h-8 w-auto"
            />
            <span className="text-portfolio-accent">K</span>asey
          </Link>

          {/* Desktop pill nav */}
          <nav className="pointer-events-auto absolute left-1/2 top-4 hidden -translate-x-1/2 md:block">
            <div className="liquid-glass flex items-center gap-1 rounded-full p-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    location.pathname === link.to
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="liquid-glass pointer-events-auto flex flex-col items-center justify-center gap-[5px] rounded-full px-4 py-3.5 md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-5 bg-white" />
            <span className="block h-[1.5px] w-3.5 self-end bg-white" />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[#0a0a0a] md:hidden">
          <div className="flex justify-end px-4 py-4">
            <button
              className="liquid-glass animate-menu-close flex h-12 w-12 items-center justify-center rounded-full"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 rotate-45 bg-white" />
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -rotate-45 bg-white" />
              </span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className="animate-menu-item text-3xl font-medium text-white/90 sm:text-4xl"
                style={{ animationDelay: `${100 + i * 60}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center pb-12">
            <Link
              to="/career-support"
              className="liquid-glass animate-menu-item flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white"
              style={{ animationDelay: `${100 + navLinks.length * 60}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Career Support
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
