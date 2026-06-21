"use client";

import React, { useState, useEffect } from 'react';

export default function AFKCar() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      // Set to exactly 15 seconds (15000 ms)
      timeoutId = setTimeout(() => setIsIdle(true), 15000);
    };

    // Listeners for activity
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('click', resetTimer);

    // Start timer on mount
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
      window.removeEventListener('click', resetTimer);
    };
  }, []);

  return (
    <>
      {/* 
        We use a <style> block here to handle the custom driving animation 
        without needing to edit your Tailwind config file!
      */}
      <style>{`
        @keyframes drive {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
        .animate-drive {
          /* Changed from 8s to 20s to slow the car down */
          animation: drive 20s linear forwards; 
        }
      `}</style>

      {/* The Dark Overlay that dims the screen slightly */}
      <div 
        className={`fixed inset-0 bg-black/40 pointer-events-none z-90 transition-opacity duration-1000 ${isIdle ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* The Car & Speech Bubble Container */}
      <div 
        className={`fixed bottom-10 left-0 z-100 pointer-events-none transition-opacity duration-500 ${isIdle ? 'opacity-100 animate-drive' : 'opacity-0 hidden'}`}
        style={{ width: 'max-content' }}
      >
        <div className="relative">
          {/* Speech Bubble */}
          <div className="absolute -top-12 left-8 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
            Still reading? You should probably email Faraz.
            {/* The little arrow on the bubble */}
            <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white rotate-45"></div>
          </div>
          
          {/* The Pixel Car Emoji */}
          <div className="text-6xl scale-x-[-1]">🏎️</div>
        </div>
      </div>
    </>
  );
}