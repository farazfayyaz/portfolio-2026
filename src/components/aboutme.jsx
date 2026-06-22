"use client";

import React, { useState, useEffect } from 'react';
import { 
  Terminal, User, Gamepad2, Dumbbell, Music, Plane, Activity, Radio
} from 'lucide-react';

export default function AboutMe() {
  // State to hold the single active status
  const [liveStatus, setLiveStatus] = useState(null);

  useEffect(() => {
    // Array of possible statuses with their respective images/GIFs
    const statuses = [
      {
        action: "Playing",
        item: "Marvel Rivals",
        icon: "🎮",
        color: "text-indigo-400",
        imgSrc: "/images/playstation.gif" // Placeholder gamer image
      },
      {
        action: "Sipping",
        item: "Matcha Latte",
        icon: "☕",
        color: "text-green-400",
        imgSrc: "/images/matcha.gif" 
      },
      {
        action: "Listening to",
        item: "Apparently by J. Cole",
        icon: "🎧",
        color: "text-rose-400",
        imgSrc: "/images/snoopy-music.jpg" 
      },
      {
        action: "Coding",
        item: "A New Project",
        icon: "💻",
        color: "text-blue-400",
        imgSrc: "/images/working-room.gif" 
      }
    ];

    // Pick a random status on page load
    setLiveStatus(statuses[Math.floor(Math.random() * statuses.length)]);
  }, []);

  return (
    <section className="w-full animate-in fade-in duration-500">
      
      <div className="mb-12">
        <h1 className="text-lg md:text-xl font-press-start text-white mb-4 leading-relaxed">More Than Just Code.</h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A closer look at how I work, what drives me, and what I do when the laptop closes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Box 1: Terminal Bio */}
        <div className="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors shadow-xl group flex flex-col backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-2 text-xs font-mono text-slate-500 flex items-center gap-2"><Terminal size={14}/> user@faraz:~/about</span>
          </div>
          <div className="font-mono text-sm leading-relaxed text-slate-300 flex-1">
            <p className="mb-4"><span className="text-emerald-400">$ cat philosophy.md</span></p>
            <p className="mb-4">I believe the best software bridges the gap between complex data architecture and intuitive human experiences.</p>
            <p className="mb-4">Currently building my foundation before transferring to DePaul University in Chicago for my M.S. in Computer Science. Whether I'm managing software solutions for the community or optimizing data analytics workflows, my goal is always to create tools that empower people.</p>
            <p className="animate-pulse text-blue-400">_</p>
          </div>
        </div>

        {/* Box 2: Avatar */}
        <div className="md:col-span-1 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-sm">
          <div className="w-40 h-40 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center mb-6 relative z-10 group-hover:border-purple-500/50 transition-colors">
            <User size={64} className="text-slate-400" />
          </div>
          <h3 className="font-inter font-bold text-white text-2xl z-10 mb-1">Faraz Fayyaz</h3>
          <p className="text-sm text-purple-400 font-medium z-10">Software Engineer</p>
        </div>

        {/* NEW Box 3: Single Item Live Status */}
        <div className="md:col-span-1 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-colors shadow-xl relative overflow-hidden backdrop-blur-sm flex flex-col">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <h3 className="font-inter font-bold text-white text-lg flex items-center gap-2">Currently <Radio size={16} className="text-emerald-400"/></h3>
          </div>

          {/* Render content only after the random selection is made to prevent hydration mismatch */}
          {liveStatus && (
            <div className="flex-1 flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-200 mb-4 bg-slate-950/50 px-3 py-2 rounded-xl border border-slate-800/50 w-fit">
                <span className={liveStatus.color}>{liveStatus.icon}</span>
                <span className="text-slate-400">{liveStatus.action}</span>
                <span className="font-bold text-white">{liveStatus.item}</span>
              </div>
              
              <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden border border-slate-800 relative group">
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={liveStatus.imgSrc} 
                  alt={liveStatus.item}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}
        </div>

        {/* Box 4: Off the Clock */}
        <div className="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors shadow-xl backdrop-blur-sm flex flex-col h-full">
          <div className="flex items-center justify-center md:justify-start gap-3 text-orange-400 mb-6">
            <Activity size={24} />
            <h3 className="font-inter font-bold text-white text-xl">Off The Clock</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
            
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-indigo-500/30 transition-all h-full">
              <Gamepad2 size={32} className="text-indigo-400" />
              <span className="text-sm font-medium text-slate-300">Gaming</span>
            </div>
            
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-rose-500/30 transition-all h-full">
              <Dumbbell size={32} className="text-rose-400" />
              <span className="text-sm font-medium text-slate-300">Fitness</span>
            </div>
            
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-cyan-500/30 transition-all h-full">
              <Music size={32} className="text-cyan-400" />
              <span className="text-sm font-medium text-slate-300">Music</span>
            </div>
            
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-yellow-500/30 transition-all h-full">
              <Plane size={32} className="text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">Travel</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}