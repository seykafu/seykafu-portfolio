import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export interface FlipPage {
  title: string;
  year: string;
  description: string;
  coverImage: string;
  link: string;
}

interface FlipBookProps {
  pages: FlipPage[];
}

/**
 * Left leaf of a spread: the cover art with a caption strip.
 */
const CoverFace = ({ page }: { page: FlipPage }) => (
  <div className="relative h-full w-full overflow-hidden bg-[#1b1b1f]">
    <img
      src={page.coverImage}
      alt={page.title}
      className="h-full w-full object-cover"
      draggable={false}
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
      <p className="font-display text-lg leading-tight text-white">{page.title}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{page.year}</p>
    </div>
    {/* inner gutter shading toward the spine (right edge of the left page) */}
    <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/30 to-transparent" />
  </div>
);

/**
 * Right leaf of a spread: paper page with the details.
 */
const DetailFace = ({
  page,
  pageNo,
  total,
}: {
  page: FlipPage;
  pageNo: number;
  total: number;
}) => (
  <div className="flex h-full w-full flex-col bg-gradient-to-br from-[#faf9f4] to-[#efede4] p-5 text-[#232323] sm:p-7">
    {/* inner gutter shading toward the spine (left edge of the right page) */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/20 to-transparent" />
    <img
      src={page.coverImage}
      alt=""
      className="mb-3 h-24 w-auto self-start rounded shadow sm:hidden"
      draggable={false}
    />
    <h3 className="font-display text-2xl leading-tight sm:text-3xl">{page.title}</h3>
    <p className="mt-1 text-xs uppercase tracking-widest text-[#a0522d]">{page.year}</p>
    <p
      className="mt-4 flex-1 text-sm leading-relaxed text-[#3c3c3c] sm:text-[0.95rem]"
      style={{
        display: '-webkit-box',
        WebkitLineClamp: 8,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}
    >
      {page.description}
    </p>
    <div className="mt-4 flex items-end justify-between">
      <a
        href={page.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-b border-[#a0522d]/40 pb-0.5 text-sm font-medium text-[#a0522d] transition-colors hover:border-[#a0522d]"
      >
        Read this <ExternalLink size={14} />
      </a>
      <span className="text-xs italic text-[#999]">
        {pageNo} of {total}
      </span>
    </div>
  </div>
);

const FlipBook = ({ pages }: FlipBookProps) => {
  const [current, setCurrent] = useState(0);
  const [flip, setFlip] = useState<null | { dir: 'next' | 'prev'; target: number }>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const total = pages.length;

  const goTo = (target: number) => {
    if (flip || target === current || target < 0 || target >= total) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spread = window.matchMedia('(min-width: 640px)').matches;
    if (reduced || !spread) {
      // Single-page mobile view / reduced motion: simple page swap with a soft fade
      setCurrent(target);
      return;
    }
    setFlip({ dir: target > current ? 'next' : 'prev', target });
  };

  // Keyboard paging — only for the visible book (tabs mount two of these)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!rootRef.current || rootRef.current.offsetParent === null) return;
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft') goTo(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const commitFlip = (e: React.AnimationEvent) => {
    // children's shade animation also fires animationend — only commit on the sheet itself
    if (e.target !== e.currentTarget) return;
    if (flip) {
      setCurrent(flip.target);
      setFlip(null);
    }
  };

  // What each static half shows while a sheet is mid-turn (see face maths in each branch)
  const leftPage = flip ? (flip.dir === 'next' ? pages[current] : pages[flip.target]) : pages[current];
  const rightPage = flip ? (flip.dir === 'next' ? pages[flip.target] : pages[current]) : pages[current];
  const sheetFront = flip ? (flip.dir === 'next' ? pages[current] : pages[flip.target]) : null;
  const sheetBack = flip ? (flip.dir === 'next' ? pages[flip.target] : pages[current]) : null;
  const rightIndex = flip ? (flip.dir === 'next' ? flip.target : current) : current;
  const sheetFrontIndex = flip ? (flip.dir === 'next' ? current : flip.target) : current;

  return (
    <div ref={rootRef} className="relative mx-auto w-full max-w-4xl select-none">
      {/* ambient shadow */}
      <div className="absolute -bottom-7 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/40 blur-xl" />

      <div className="relative" style={{ perspective: '2400px' }}>
        {/* stacked page edges */}
        <div
          className="absolute inset-y-3 -left-1.5 w-1.5 rounded-l-sm bg-[repeating-linear-gradient(to_left,#d8d5c8,#d8d5c8_1px,#efede4_1px,#efede4_2.5px)] transition-opacity duration-500"
          style={{ opacity: current > 0 ? 1 : 0 }}
        />
        <div
          className="absolute inset-y-3 -right-1.5 w-1.5 rounded-r-sm bg-[repeating-linear-gradient(to_right,#d8d5c8,#d8d5c8_1px,#efede4_1px,#efede4_2.5px)] transition-opacity duration-500"
          style={{ opacity: current < total - 1 ? 1 : 0 }}
        />

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] sm:aspect-[16/10] sm:overflow-visible">
          {/* static left half (cover) — desktop only */}
          <div className="absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden rounded-l-lg sm:block">
            <CoverFace page={leftPage} />
          </div>

          {/* static right half (details) */}
          <div
            key={rightIndex}
            className="animate-book-page-in absolute inset-y-0 right-0 w-full overflow-hidden rounded-lg sm:w-1/2 sm:rounded-l-none sm:rounded-r-lg"
          >
            <DetailFace page={rightPage} pageNo={rightIndex + 1} total={total} />
          </div>

          {/* spine shadow */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-14 -translate-x-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent sm:block" />

          {/* the turning sheet */}
          {flip && sheetFront && sheetBack && (
            <div
              className={`absolute inset-y-0 right-0 z-20 hidden w-1/2 sm:block ${
                flip.dir === 'next' ? 'animate-page-turn-next' : 'animate-page-turn-prev'
              }`}
              style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
              onAnimationEnd={commitFlip}
            >
              {/* front: a details page */}
              <div
                className="absolute inset-0 overflow-hidden rounded-r-lg"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <DetailFace page={sheetFront} pageNo={sheetFrontIndex + 1} total={total} />
                <div className="animate-page-turn-shade pointer-events-none absolute inset-0 bg-black opacity-0" />
              </div>
              {/* back: the next cover, pre-mirrored */}
              <div
                className="absolute inset-0 overflow-hidden rounded-l-lg"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <CoverFace page={sheetBack} />
                <div className="animate-page-turn-shade pointer-events-none absolute inset-0 bg-black opacity-0" />
              </div>
            </div>
          )}

          {/* edge click zones for flipping */}
          {current > 0 && (
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Previous page"
              className="group absolute inset-y-0 left-0 z-30 hidden w-10 cursor-pointer sm:block"
            >
              <span className="absolute inset-0 rounded-l-lg bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          )}
          {current < total - 1 && (
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Next page"
              className="group absolute inset-y-0 right-0 z-30 hidden w-10 cursor-pointer sm:block"
            >
              <span className="absolute inset-0 rounded-r-lg bg-gradient-to-l from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          )}
        </div>
      </div>

      {/* controls */}
      <div className="mt-10 flex items-center justify-between">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0 || !!flip}
          aria-label="Previous"
          className={`rounded-full p-4 transition-all duration-200 ${
            current === 0 || flip
              ? 'cursor-not-allowed bg-portfolio-muted/30 text-portfolio-text/30'
              : 'bg-portfolio-accent/20 text-portfolio-accent hover:scale-110 hover:bg-portfolio-accent hover:text-black hover:shadow-lg'
          }`}
        >
          <ArrowLeft size={22} />
        </button>

        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-medium text-portfolio-text/60">
            {current + 1} of {total}
          </div>
          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  index === current
                    ? 'scale-125 bg-portfolio-accent'
                    : 'bg-portfolio-muted hover:scale-110 hover:bg-portfolio-accent/50'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === total - 1 || !!flip}
          aria-label="Next"
          className={`rounded-full p-4 transition-all duration-200 ${
            current === total - 1 || flip
              ? 'cursor-not-allowed bg-portfolio-muted/30 text-portfolio-text/30'
              : 'bg-portfolio-accent/20 text-portfolio-accent hover:scale-110 hover:bg-portfolio-accent hover:text-black hover:shadow-lg'
          }`}
        >
          <ArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default FlipBook;
