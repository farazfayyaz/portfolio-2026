import React from 'react';
import { Sword, Brain, Zap, Sparkles } from 'lucide-react';

export default function PlayerStats() {
  // We define the skills with individual levels to reflect your actual strengths
  const intelligence = [
    { name: 'HTML/CSS', level: 'Lvl. 95' },
    { name: 'JavaScript', level: 'Lvl. 90' },
    { name: 'Python', level: 'Lvl. 75' },
    { name: 'C++', level: 'Lvl. 65' }
  ];

  const agility = [
    { name: 'React', level: 'Lvl. 88' },
    { name: 'Next.js', level: 'Lvl. 85' },
    { name: 'Django', level: 'Lvl. 65' },
    { name: 'Flask', level: 'Lvl. 60' }
  ];

  const charisma = [
    { name: 'Communication', level: 'Lvl. 95' },
    { name: 'Team Leadership', level: 'Lvl. 90' },
    { name: 'UX/UI', level: 'Lvl. 85' },
    { name: 'Creativity', level: 'Lvl. 92' }
  ];

  return (
    <section className="w-full my-12">
      <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[30px_30px] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20 mb-3">
              <Sword size={14} /> Character Profile
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-widest uppercase">Software Engineer</h2>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">Current Level</div>
            <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-blue-400 to-purple-500">
              25
            </div>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-3 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 mb-4">
              <Brain size={20} />
              <h3 className="font-bold text-lg uppercase tracking-wider">Intelligence</h3>
            </div>
            <div className="space-y-2">
              {intelligence.map(skill => (
                <div key={skill.name} className="bg-slate-950/50 border border-slate-800 px-4 py-2 rounded-lg text-slate-300 text-sm font-medium flex justify-between items-center">
                  {skill.name} <span className="text-blue-500/60 text-xs font-mono">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <Zap size={20} />
              <h3 className="font-bold text-lg uppercase tracking-wider">Agility</h3>
            </div>
            <div className="space-y-2">
              {agility.map(skill => (
                <div key={skill.name} className="bg-slate-950/50 border border-slate-800 px-4 py-2 rounded-lg text-slate-300 text-sm font-medium flex justify-between items-center">
                  {skill.name} <span className="text-emerald-500/60 text-xs font-mono">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-purple-400 mb-4">
              <Sparkles size={20} />
              <h3 className="font-bold text-lg uppercase tracking-wider">Charisma</h3>
            </div>
            <div className="space-y-2">
              {charisma.map(skill => (
                <div key={skill.name} className="bg-slate-950/50 border border-slate-800 px-4 py-2 rounded-lg text-slate-300 text-sm font-medium flex justify-between items-center">
                  {skill.name} <span className="text-purple-500/60 text-xs font-mono">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}