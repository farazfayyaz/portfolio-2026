import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  // Tags specifically formatted to float at the bottom of the cards
  const depaulTags = [
    { text: "Current", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-bold" },
    // { text: "B.S.", style: "bg-slate-800 text-slate-300 border-slate-700" },
    // { text: "M.S.", style: "bg-slate-800 text-slate-300 border-slate-700" }
  ];

  const ivyTechTags = [
    { text: "Completed", style: "bg-blue-500/10 text-blue-400 border-blue-500/20 font-bold" },
    { text: "A.S. Computer Science", style: "bg-slate-800 text-slate-300 border-slate-700" },
    { text: "PepsiCo Scholar", style: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 font-bold" }
  ];

  return (
    <section className="w-full">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <GraduationCap className="text-emerald-400" size={28} /> Academic Foundation
        </h2>
        <p className="text-slate-400 mt-2 text-sm">My formal training in computer science and advanced engineering.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Card 1: DePaul */}
        {/* Added flex, flex-col, and justify-between to push the pills to the very bottom */}
        <div className="bg-slate-900/40 border border-emerald-900/30 p-8 rounded-3xl relative overflow-hidden group hover:border-emerald-700/50 transition-all duration-300 flex flex-col justify-between">
          
          <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <GraduationCap size={150} />
          </div>
          
          {/* Top Content: School, Degree, Location, Description */}
          <div className="relative z-10 mb-8">
            <h3 className="font-bold text-2xl text-slate-100 mb-1">DePaul University</h3>
            <p className="text-emerald-400 font-medium mb-3">M.S. & B.S. in Computer Science</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <span className="flex items-center gap-1"><MapPin size={14}/> Chicago, IL</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Advancing my expertise in software architecture, complex data systems, and machine learning to tackle enterprise-level engineering challenges.
            </p>
          </div>

          {/* Bottom Content: Floating Pill Tags */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
            {depaulTags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 text-xs rounded-full border ${tag.style}`}>
                {tag.text}
              </span>
            ))}
          </div>

        </div>

        {/* Card 2: Ivy Tech */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
          
          {/* Top Content: School, Degree, Location, Description */}
          <div className="relative z-10 mb-8">
            <h3 className="font-bold text-2xl text-slate-100 mb-1">Ivy Tech Community College</h3>
            <p className="text-blue-400 font-medium mb-3">A.S. in Computer Science</p>
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
              <span className="flex items-center gap-1"><MapPin size={14}/> Indianapolis, IN</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Built a rigorous foundation in algorithms, data structures, and full-stack web development while actively leading community-focused tech initiatives.
            </p>
          </div>

          {/* Bottom Content: Floating Pill Tags */}
          <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
            {ivyTechTags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 text-xs rounded-full border ${tag.style}`}>
                {tag.text}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}