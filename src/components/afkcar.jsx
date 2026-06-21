"use client";

import React, { useState, useEffect } from 'react';

export default function AFKCar() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      // Waits 15 seconds of inactivity before triggering
      timeoutId = setTimeout(() => setIsIdle(true), 15000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('click', resetTimer);

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
      <style>{`
        /* Animation 1: Just handles moving left and right */
        @keyframes patrol-move {
          0% { transform: translateX(-300px); }
          49.9% { transform: translateX(100vw); }
          50% { transform: translateX(100vw); }
          99.9% { transform: translateX(-300px); }
          100% { transform: translateX(-300px); }
        }
        
        /* Animation 2: Just handles flipping the car emoji */
        @keyframes patrol-flip {
          0% { transform: scaleX(-1); }
          49.9% { transform: scaleX(-1); }
          50% { transform: scaleX(1); }
          99.9% { transform: scaleX(1); }
          100% { transform: scaleX(-1); }
        }

        .animate-patrol-move {
          animation: patrol-move 30s linear infinite; 
        }
        .animate-patrol-flip {
          animation: patrol-flip 30s linear infinite;
        }
      `}</style>

      {/* The Dark Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 pointer-events-none z-90 transition-opacity duration-1000 ${isIdle ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* The Container - Only applies the MOVEMENT animation */}
      <div 
        className={`fixed bottom-10 left-0 z-100 pointer-events-none transition-opacity duration-500 ${isIdle ? 'opacity-100 animate-patrol-move' : 'opacity-0 hidden'}`}
        style={{ width: 'max-content' }}
      >
        <div className="relative flex flex-col items-center">
          
          {/* Speech Bubble - Stays perfectly still and readable */}
          <div className="absolute -top-8 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg z-10">
            Still reading? You should probably email Faraz.
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
          </div>
          
          {/* The Pixel Car - Only applies the FLIP animation */}
          <div className={`text-6xl relative z-20 inline-block ${isIdle ? 'animate-patrol-flip' : ''}`}>
            🏎️
          </div>
          
        </div>
      </div>
    </>
  );
}