import React from 'react';
import { 
  Terminal, User, Gamepad2, Dumbbell, Music, Plane, Brain, Activity 
} from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="w-full animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">More Than Just Code.</h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A closer look at how I work, what drives me, and what I do when the laptop closes.
        </p>
      </div>

      {/* The Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Box 1: Terminal Bio (Spans 2 columns) */}
        <div className="md:col-span-2 row-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-colors shadow-xl group flex flex-col backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity"></div>
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

        {/* Box 2: Avatar / Identity (Spans 1 column) */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="w-32 h-32 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center mb-4 relative z-10 group">
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 group-hover:animate-ping opacity-20"></div>
            <User size={48} className="text-slate-400" />
          </div>
          <h3 className="font-bold text-white text-xl z-10">Faraz Fayyaz</h3>
          <p className="text-sm text-purple-400 font-medium z-10">Software & Data Strategist</p>
        </div>

        {/* Box 3: Personality Profile */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-colors shadow-xl flex flex-col justify-between backdrop-blur-sm">
          <div className="flex items-center gap-3 text-emerald-400 mb-4">
            <Brain size={24} />
            <h3 className="font-bold text-white">How I Work</h3>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-slate-300">Personality Type</span>
              <span className="text-xs font-bold px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30">ENFJ</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-300">Workplace Style</span>
              <span className="text-xs font-bold px-2 py-1 bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">DiSC "i"</span>
            </div>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              I learn best through visual content and teaching others. I thrive in collaborative environments where innovation and recognition drive the team forward.
            </p>
          </div>
        </div>

        {/* Box 4: Off the Clock (Spans 2 columns) */}
        <div className="md:col-span-2 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 text-orange-400 mb-6">
            <Activity size={24} />
            <h3 className="font-bold text-white text-xl">Off The Clock</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-950/50 p-4 rounded-2xl flex flex-col items-center text-center gap-3 border border-slate-800 hover:scale-[1.02] transition-transform">
              <Gamepad2 size={24} className="text-indigo-400" />
              <span className="text-xs font-medium text-slate-300">PS5 Gaming</span>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-2xl flex flex-col items-center text-center gap-3 border border-slate-800 hover:scale-[1.02] transition-transform">
              <Dumbbell size={24} className="text-rose-400" />
              <span className="text-xs font-medium text-slate-300">Fitness</span>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-2xl flex flex-col items-center text-center gap-3 border border-slate-800 hover:scale-[1.02] transition-transform">
              <Music size={24} className="text-cyan-400" />
              <span className="text-xs font-medium text-slate-300">Music</span>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-2xl flex flex-col items-center text-center gap-3 border border-slate-800 hover:scale-[1.02] transition-transform">
              <Plane size={24} className="text-yellow-400" />
              <span className="text-xs font-medium text-slate-300">Travel</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}