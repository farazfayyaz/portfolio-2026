"use client"; // 1. Added this to allow React state (button clicks)

import React, { useState } from 'react'; // 2. Imported useState
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // 3. Imported the hamburger icons

export default function Navbar () {
    // 4. Added state to track if the menu is open or closed
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800'>
            <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>

                {/* Brand Logo - 8-bit Faraz */}
                <a href='/' className='flex items-center gap-3 transition-opacity hover:opacity-80' >
                    <Image
                        src='/logos/Faraz Logo White Face - clear.png'
                        alt='Faraz Fayyaz Logo'
                        width={180}
                        height={40}
                        priority
                        className='object-contain'
                    />
                </a>

                {/* Nav links - desktop navigation */}
                {/* FIX: Changed 'display:none' to 'hidden' so it correctly hides on phones */}
                <div className='hidden md:flex gap-6 text-sm text-slate-400 items-center'>
                    <a href='/about' className='hover:text-white transition-colors'>About</a>
                    <a href='/Projects' className='hover:text-white transition-colors'>Projects</a>
                    <a href='/GuestBoard' className='hover:text-white transition-colors'>Guest Board</a>
                    
                    {/* Desktop call to action (Moved inside the desktop flex container) */}
                    <button className='px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-all ml-4'>
                        Resume
                    </button>
                </div>

                {/* Mobile Hamburger Toggle Button (Hidden on Desktop) */}
                <button
                    className='md:hidden text-slate-300 hover:text-white focus:outline-none'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* NEW: Mobile Dropdown Menu */}
            {/* This only renders if the user clicks the hamburger icon */}
            {isOpen && (
                <div className='md:hidden bg-slate-900 border-b border-slate-800 shadow-2xl absolute w-full top-full left-0'>
                    <div className='flex flex-col px-6 py-4 space-y-4'>
                        <a href='/about' onClick={() => setIsOpen(false)} className='text-base font-medium text-slate-300 hover:text-white transition-colors'>About</a>
                        <a href='/Projects' onClick={() => setIsOpen(false)} className='text-base font-medium text-slate-300 hover:text-white transition-colors'>Projects</a>
                        <a href='/GuestBoard' onClick={() => setIsOpen(false)} className='text-base font-medium text-slate-300 hover:text-white transition-colors'>Guest Board</a>
                        
                        {/* Mobile call to action */}
                        <button onClick={() => setIsOpen(false)} className='w-full px-4 py-3 mt-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-base font-medium transition-all'>
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}