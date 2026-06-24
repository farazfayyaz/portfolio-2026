import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Code, Database, Cpu } from 'lucide-react'; // import icons from Lucide-React
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // import icons from React-Icons
import SkillCard from './skillcard'; // import SkillCard component

export default function Hero () {
    return (
        <section className='pt-32 pb-20 px-6 max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                {/* Left Column: My story */}
                <div className='flex-1 space-y-6'>
                    
                    {/* Location Pin */}
                    <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20'>
                        <MapPin size={14} /> Chicago, IL
                    </div>

                    {/* Main Headline */}
                    <h1 className='text-2xl md:text-4xl font-press-start text-white leading-tight'>
                        Hi,I'm Faraz!
                    </h1>

                    {/* Typing SVG Subtitle */}
                    <a href="https://git.io/typing-svg" className="block">
                        <img
                            src="https://readme-typing-svg.herokuapp.com?font=Press+Start+2P&size=28&duration=2000&pause=1500&color=94A3B8&width=750&height=70&lines=Computer+Science+Student;Software+Engineer;Full-Stack+Developer;Freelance+Developer"
                            alt="Typing SVG"
                            className="max-w-full"
                        />
                    </a>

                    {/* Elevator Pitch */}
                    <p className='text-lg text-slate-400 max-w-xl leading-relaxed -mt-4'>
                        I'm looking for internship and early-career software engineering 
                        opportunities where I can help teams ship clean interfaces, reliable 
                        workflows, and tools people actually use.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className='flex gap-4 pt-4'>
                        {/* 1. Updated Contact Button to use Next.js Link */}
                        <Link 
                            href="/contact" 
                            className='px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all flex items-center gap-2 w-fit'
                        >
                            <Mail size={18} /> Contact Me
                        </Link>

                        <div className='flex gap-2'>
                            {/* 2. Updated LinkedIn Button to external anchor tag */}
                            <a 
                                href="https://www.linkedin.com/in/faraz-fayyaz/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center justify-center'
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            {/* 3. Updated GitHub Button to external anchor tag */}
                            <a 
                                href="https://github.com/farazfayyaz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all flex items-center justify-center'
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                {/* Right Column */}
                <div className='flex-1 w-full max-w-md aspect-square relative flex flex-col justify-center gap-4'>
                    
                    {/* Card 1: Web Dev */}
                    <SkillCard 
                        title="Web Development" 
                        description="React, Next.js, WordPress" 
                        icon={<Code size={24} className="text-blue-400" />} 
                    />

                    {/* Card 2: Data Architecture (Notice the ml-8 class to offset it visually) */}
                    <div className="ml-8">
                        <SkillCard 
                            title="Data Architecture" 
                            description="Python, SQL, Salesforce" 
                            icon={<Database size={24} className="text-emerald-400" />} 
                        />
                    </div>

                    {/* Card 3: AI & Engineering */}
                    <SkillCard 
                        title="AI & Engineering" 
                        description="Machine Learning, Systems Design" 
                        icon={<Cpu size={24} className="text-purple-400" />} 
                    />

                </div>

            </div>

        </section>
    )
}