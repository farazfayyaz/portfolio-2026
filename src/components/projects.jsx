import React from 'react';
import { Folder, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

// Project data array
const projects = [
  {
    title: "Tab Recreation Website",
    description: "Designed and developed a brand new website to modernize the brand identity and improve the digital user experience.",
    techStack: ["Web Development", "UI/UX", "Brand Strategy"], 
    githubUrl: null, 
    liveUrl: "https://www.tabrecreation.org"
  },
  {
    title: "TechIndiana Website",
    description: "Redesigned the platform and built new components to resolve existing user-facing issues, significantly improving usability and brand alignment.",
    techStack: ["WordPress", "HTML/CSS", "JavaScript", "Custom Components", "Figma"],
    githubUrl: null,
    liveUrl: "https://www.techindiana.org"
  },
  {
    title: "3D Car Racing Simulation",
    description: "Collaborated with a team to build a racing game. Engineered the map architecture, core driving mechanics, and AI logic for non-playable vehicles.",
    techStack: ["C++", "Unity", "Object-Oriented Design"], 
    githubUrl: "https://github.com/farazfayyaz/raceGame3d",
    liveUrl: null
  },
  {
    title: "War: Terminal Card Game",
    description: "Developed a fully playable terminal-based 'War' card game, applying advanced data structures and algorithmic concepts.",
    techStack: ["C++", "Data Structures", "Algorithms", "CLI Architecture"],
    githubUrl: "https://github.com/farazfayyaz/CSCI2-Final-Project",
    liveUrl: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800">
      
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-xl font-press-start text-white leading-relaxed flex items-center gap-3">
          <Folder className="text-blue-400" size={28} /> Featured Projects
        </h2>
        <p className="text-slate-400 mt-2 text-sm max-w-2xl">
          A collection of applications I have built, focusing on scalable architecture, data integration, and intuitive user interfaces.
        </p>
      </div>

      {/* CSS Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col justify-between bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
          >
            {/* Top Half: Text Content */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-inter text-xl font-bold text-slate-200 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-slate-400">
  
                    {/* Only draw the GitHub icon IF project.githubUrl is NOT null */}
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <FaGithub size={20} />
                        </a>
                    )}

                    {/* Only draw the External Link icon IF project.liveUrl is NOT null */}
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <ExternalLink size={20} />
                        </a>
                    )}
                    
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Bottom Half: Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-medium rounded-full border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            
          </div>
        ))}

      </div>
    </section>
  );
}