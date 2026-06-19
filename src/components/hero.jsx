import React from 'react';
import { MapPin, Mail } from 'lucide-react'; // import icons from Lucide-React
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // import icons from React-Icons

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
                    <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight'>
                        [Main Action Phrase] <br/>
                        <span className='text-slate-500'>
                            [secondary focus]
                        </span>
                    </h1>

                    {/* Elevator Pitch */}
                    <p className='text-lg text-slate-400 max-w-xl leading-relaxed'>
                        [Brief intro paragraph goes here.]
                    </p>

                    {/* Call to Action Buttons */}
                    <div className='flex gap-4 pt-4'>
                        <button className='px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all flex items-center gap-2'>
                            <Mail size={18} /> Contact Me
                        </button>

                        <div className='flex gap-2'>
                            <button className='p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all'>
                                <FaLinkedin size={20} />
                            </button>

                            <button className='p-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all'>
                                <FaGithub size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className='flex-1 w-full max-w-md aspect-square relative flex flex-col justify-center gap-4'>
                    <div className='bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-center'>
                        <p className='text-slate-500 font-medium'>
                            Interactive skill cards will go here
                        </p>
                    </div>
                </div>

            </div>

        </section>
    )
}