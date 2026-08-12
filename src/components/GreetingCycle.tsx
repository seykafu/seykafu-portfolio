import React, { useEffect, useState } from 'react';

const GREETINGS = ['Bello', 'Bonjour', '你好'];
const CYCLE_MS = 2800;

/**
 * Cycles through greetings, each blur-materializing in and dissolving out.
 */
const GreetingCycle = ({ className = '' }: { className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % GREETINGS.length), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span key={index} className={`animate-greeting inline-block ${className}`}>
      {GREETINGS[index]}
    </span>
  );
};

export default GreetingCycle;
