import React from 'react';
import { 
  Terminal, User, Gamepad2, Dumbbell, Music, Plane, Activity 
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Box 1: Terminal Bio (Spans 2 columns) */}
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

        {/* Box 2: Avatar / Identity (Spans 1 column, height matches Terminal automatically) */}
        <div className="md:col-span-1 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/50 transition-colors shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-linear-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Increased avatar size to w-40 h-40 */}
          <div className="w-40 h-40 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center mb-6 relative z-10 group-hover:border-purple-500/50 transition-colors">
            {/* REPLACE THIS ICON WITH AN IMAGE TAG LATER */}
            {/* Example: <img src="/your-photo.jpg" alt="Faraz Fayyaz" className="w-full h-full object-cover rounded-full" /> */}
            <User size={64} className="text-slate-400" />
          </div>
          
          <h3 className="font-bold text-white text-2xl z-10 mb-1">Faraz Fayyaz</h3>
          <p className="text-sm text-purple-400 font-medium z-10">Software Engineer</p>
        </div>

        {/* Box 3: Off the Clock (Spans ALL 3 columns now) */}
        <div className="md:col-span-3 bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-center md:justify-start gap-3 text-orange-400 mb-6">
            <Activity size={24} />
            <h3 className="font-bold text-white text-xl">Off The Clock</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-indigo-500/30 transition-all">
              <Gamepad2 size={32} className="text-indigo-400" />
              <span className="text-sm font-medium text-slate-300">Gaming</span>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-rose-500/30 transition-all">
              <Dumbbell size={32} className="text-rose-400" />
              <span className="text-sm font-medium text-slate-300">Fitness</span>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-cyan-500/30 transition-all">
              <Music size={32} className="text-cyan-400" />
              <span className="text-sm font-medium text-slate-300">Music</span>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-2xl flex flex-col items-center text-center gap-4 border border-slate-800 hover:scale-[1.02] hover:border-yellow-500/30 transition-all">
              <Plane size={32} className="text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">Travel</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}