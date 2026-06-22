"use client";

import React, { useState, useEffect } from 'react';

export default function ScrollSpidey() {
  const [scrollPos, setScrollPos] = useState(0);
  const [maxDrop, setMaxDrop] = useState(500); 

  useEffect(() => {
    setMaxDrop(window.innerHeight * 0.6);

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 1. THE START HEIGHT FIX
  // We add a starting length (e.g., 150px) so he always hangs down a bit, 
  // even when the user is at the absolute top of the page.
  const baseDropLength = 150; 
  const dropDistance = Math.min(baseDropLength + (scrollPos * 0.25), maxDrop);

  return (
    <div className="fixed top-0 right-8 md:right-24 z-100 pointer-events-none flex flex-col items-center">
      
      {/* The Web Line */}
      <div 
        className="w-[1.5px] bg-slate-300/60 shadow-[0_0_8px_rgba(255,255,255,0.8)] relative z-10"
        style={{ 
          height: `${dropDistance}px`,
          transition: 'height 0.1s ease-out' 
        }}
      />

      {/* The Upside-Down Character */}
      {/* 2. THE GAP FIX */}
      {/* We add a negative top margin (-mt-2 or -mt-4) to literally pull the image UP 
          so it overlaps the bottom of the CSS web line, hiding the gap. */}
      <div 
        className="w-16 h-16 md:w-20 md:h-20 relative flex flex-col items-center justify-start -mt-3 z-20"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/upside-down-spidey.png" 
          alt="Hanging Spider-Man" 
          // Added 'object-top' to ensure the top of the web in the image anchors to the top of the box
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