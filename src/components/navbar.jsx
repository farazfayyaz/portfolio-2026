import React from 'react'; // import React
import Link from 'next/link';
import Image from 'next/image'; // import optimized Image component

// component named 'Navbar'
export default function Navbar () {
    return (
        <nav className='fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800'>
            <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>

                {/* Brand Logo - 8-bit Faraz */}
                <a href='/' className='flex items-center gap-3 transition-opacity hover:opacity-80' >
                    <Image
                        src='/Faraz Logo White Face - clear.png'
                        alt='Faraz Fayyaz Logo'
                        width={180}
                        height={40}
                        priority
                        className='object-contain'
                    />
                </a>

                {/* Nav links - desktop navigation */}
                <div className='display:none md:flex gap-6 text-sm text-slate-400 '>
                    <a href='/About' className='hover:text-white transition-colors'>About</a>
                    <a href='/Projects' className='hover:text-white transition-colors'>Projects</a>
                    <a href='/GuestBoard' className='hover:text-white transition-colors'>Guest Board</a>
                </div>

                {/* call to action */}
                <button className='px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-all'>
                    Resume
                </button>

            </div>
        </nav>
    );
}