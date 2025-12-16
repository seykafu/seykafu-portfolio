
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    });
    
    // Add active class when clicking
    document.addEventListener('mousedown', () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursor.style.opacity = '1';
      }
    });
    
    document.addEventListener('mouseup', () => {
      if (cursor) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = '0.75';
      }
    });
    
    // Handle cursor on links or buttons
    const handleLinkHover = () => {
      cursor?.classList.add('cursor-grow');
    };
    
    const handleLinkLeave = () => {
      cursor?.classList.remove('cursor-grow');
    };
    
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('mouseup', () => {});
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot"></div>;
};

export default CustomCursor;
