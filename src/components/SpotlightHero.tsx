import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = '/lovable-uploads/marathon-hero.webp';
const SPOT_RADIUS = 280;

const marqueeItems = [
  'Product Manager',
  'Author',
  'Community Builder',
  'AI Enthusiast',
  'PM Hive Co-Founder',
  'Writer',
  'Painter',
  'Gamer',
];

const SpotlightHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reveal = revealRef.current;
    const grid = gridRef.current;
    if (!section || !reveal || !grid) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.6;
    let x = targetX;
    let y = targetY;
    let gridX = 0;
    let gridY = 0;
    let pointerSeen = false;
    let t = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pointerSeen = true;
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      const rect = section.getBoundingClientRect();

      // On touch devices (no mouse yet) the spotlight drifts on its own
      if (!pointerSeen && !reduced) {
        t += 0.004;
        targetX = rect.left + rect.width / 2 + Math.sin(t * 1.3) * rect.width * 0.22;
        targetY = rect.top + rect.height * 0.62 + Math.cos(t) * rect.height * 0.12;
      }

      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;

      const localX = x - rect.left;
      const localY = y - rect.top;

      const mask = `radial-gradient(${SPOT_RADIUS}px at ${localX}px ${localY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, rgba(255,255,255,0) 100%)`;
      reveal.style.setProperty('-webkit-mask-image', mask);
      reveal.style.setProperty('mask-image', mask);

      if (!reduced) {
        const centerOffsetX = (localX - rect.width / 2) / rect.width;
        const centerOffsetY = (localY - rect.height / 2) / rect.height;
        gridX += (centerOffsetX * 16 - gridX) * 0.06;
        gridY += (centerOffsetY * 16 - gridY) * 0.06;
        grid.style.transform = `translate(${gridX}px, ${gridY}px)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const heading = (italic: boolean) => (
    <div className="absolute inset-x-0 top-24 sm:top-28 md:top-32 px-4 text-center select-none">
      <p className="mb-4 text-[0.65rem] xs:text-xs uppercase tracking-[0.35em] text-white/50">
        Kasey Fu · Product · Writing · Community
      </p>
      <h1
        className={`animate-fade-up mx-auto max-w-5xl font-display leading-[0.95] text-[clamp(2.75rem,7.5vw,6.75rem)] ${
          italic ? 'italic text-portfolio-accent' : 'text-white'
        }`}
      >
        Welcome to my site
      </h1>
    </div>
  );

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Layer 1: parallax grid */}
      <div ref={gridRef} className="absolute -inset-8 z-0 opacity-10">
        <svg className="h-full w-full" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#64748b" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Layer 2: base image, desaturated and moody */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-top bg-no-repeat opacity-40 grayscale"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Layer 3: atmosphere */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
      <div className="grain z-20" />

      {/* Layer 4: hero heading (base, white) */}
      <div className="pointer-events-none absolute inset-0 z-30">{heading(false)}</div>

      {/* Layer 5: spotlight reveal — full-colour image + accent italic heading */}
      <div
        ref={revealRef}
        className="pointer-events-none absolute inset-0 z-40"
        style={{ maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-portfolio-accent/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/80" />
        {heading(true)}
      </div>

      {/* Foreground content */}
      <div className="absolute inset-x-0 bottom-24 z-50 flex flex-col items-center gap-6 px-6 text-center">
        <p className="animate-fade-up-delay-1 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
          Scroll down to learn more!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/product-portfolio"
            className="liquid-glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:text-portfolio-accent"
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Recently: AI PM @ Disco
          </Link>
          <Link
            to="/career-support"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Career Support
          </Link>
        </div>
        <div className="animate-scroll-cue mt-2 h-8 w-[1px] bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Role marquee */}
      <div className="absolute inset-x-0 bottom-0 z-50 overflow-hidden border-t border-white/10 py-3">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {marqueeItems.map((item, i) => (
                <span
                  key={i}
                  className="mx-6 text-xs uppercase tracking-[0.3em] text-white/40"
                >
                  {item} <span className="ml-10 text-portfolio-accent/60">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightHero;
