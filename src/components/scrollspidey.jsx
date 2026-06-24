"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollSpidey() {
  const [scrollPos, setScrollPos] = useState(0);
  const [maxDrop, setMaxDrop] = useState(500); 
  
  // NEW: States to handle the cinematic drop-in effect
  const [hasMounted, setHasMounted] = useState(false);
  const [isInitialDrop, setIsInitialDrop] = useState(true);

  useEffect(() => {
    setMaxDrop(window.innerHeight * 0.6);

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 1. Wait a tiny fraction of a second, then tell the web to drop to its base length
    const mountTimer = setTimeout(() => setHasMounted(true), 100);
    
    // 2. Wait exactly 2 seconds for the cinematic drop to finish, then hand control back to the scroll wheel
    const dropTimer = setTimeout(() => setIsInitialDrop(false), 2100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(mountTimer);
      clearTimeout(dropTimer);
    };
  }, []);

  // THE MAGIC: If the page just loaded, base length is 0 (hidden at the top).
  // After 100ms, it jumps to 150, triggering the CSS transition below!
  const baseDropLength = hasMounted ? 150 : 0; 
  const dropDistance = Math.min(baseDropLength + (scrollPos * 0.25), maxDrop);

  return (
    <div className="hidden md:flex fixed top-0 right-24 z-40 pointer-events-none flex-col items-center">
      
      {/* The Web Line */}
      <div 
        className="w-[1.5px] bg-slate-300/60 shadow-[0_0_8px_rgba(255,255,255,0.8)] relative z-10"
        style={{ 
          height: `${dropDistance}px`,
          // Swap out the transition speed dynamically!
          transition: isInitialDrop 
            ? 'height 2s cubic-bezier(0.25, 1, 0.5, 1)' // Cinematic slow drop
            : 'height 0.1s ease-out'                    // Fast scroll tracking
        }}
      />

      {/* The Upside-Down Character */}
      <div 
        className="w-16 h-16 md:w-20 md:h-20 relative flex flex-col items-center justify-start -mt-3 z-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/upside-down-spidey.png" 
          alt="Hanging Spider-Man" 
          className="w-full h-full object-contain object-top drop-shadow-[0_4px_12px_rgba(239,68,68,0.5)]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden text-4xl drop-shadow-lg">🕷️</div>
      </div>

    </div>
  );
}