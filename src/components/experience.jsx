import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Manager of Software Solutions",
    company: "United Way of Central Indiana",
    period: "Current",
    description: "Working across CRM, finance, and impact teams to support software workflows, data analysis, Salesforce processes, and internal reporting needs. I help translate operational problems into clearer systems and more usable data.",
  },
  {
    role: "Web Design & Web Development Intern",
    company: "Tab Recreation",
    period: "March 2026 - June 2026",
    description: "Designed, built, and launched a modern website for Tab Recreation, balancing stakeholder needs, responsive design, content structure, and deployment.",
  },
  {
    role: "WordPress Developer",
    company: "TechIndiana",
    period: "January 2026 - June 2026",
    description: "Improved the TechIndiana website by redesigning pages, building custom components, fixing user-facing issues, and aligning the site more closely with the organization's brand.",
  },
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    period: "Ongoing",
    description: "Building websites and small software solutions for clients, with a focus on clear communication, responsive interfaces, maintainable implementation, and practical business outcomes.",
  }
];

export default function Experience() {
  return (
    <section className="w-full">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-xl font-press-start text-white leading-relaxed flex items-center gap-3">
          <Briefcase className="text-blue-400" size={28} /> Professional Journey
        </h2>
        <p className="text-slate-400 mt-2 text-sm">
          A timeline of my professional roles, internships, and freelance work.
        </p>
      </div>

      {/* The Timeline Container */}
      <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-10">
        
        {experiences.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            
            {/* The Timeline Indicator Dot */}
            <div className="absolute -left-2.25 top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors duration-300" />
            </div>

            {/* Job Card Content */}
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60 hover:border-slate-700 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-inter text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{item.role}</h3>
                  <p className="text-sm text-slate-400 font-medium">{item.company}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-950 px-3 py-1 rounded-full border border-slate-800 h-fit w-fit">
                  <Calendar size={12} /> {item.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}