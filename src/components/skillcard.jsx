import React from 'react';

export default function SkillCard({ title, description, icon }) {
  return (
    <div className="group flex flex-col gap-2 bg-slate-800/50 p-4 rounded-2xl border border-slate-700 transition-all hover:bg-slate-800">
      <div className="flex justify-between items-start">
        
        {/* Left Side: Icon and Text */}
        <div className="flex items-center gap-4">
          
          {/* render whatever icon gets passed in here */}
          <div className="text-slate-400">
             {icon}
          </div>
          
          {/* render the text props here */}
          <div>
            <h3 className="font-semibold text-slate-200">{title}</h3>
            <p className="text-xs text-slate-400">{description}</p>
          </div>

        </div>

      </div>
    </div>
  );
}