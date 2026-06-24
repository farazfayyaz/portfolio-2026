import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <a href="/" className="w-fit hover:opacity-75 transition-opacity">
              <Image
                src="/logos/Faraz Logo White Face - clear.png"
                alt="Faraz Fayyaz Logo"
                width={140}
                height={32}
                className="object-contain"
              />
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building thoughtful software, one project at a time.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Navigate</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="/about" className="hover:text-white transition-colors w-fit">About</a>
              <a href="/#Projects" className="hover:text-white transition-colors w-fit">Projects</a>
              <a href="/#GuestBoard" className="hover:text-white transition-colors w-fit">Guest Board</a>
              <a href="/contact" className="hover:text-white transition-colors w-fit">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">Connect</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <FaLinkedin size={15} /> LinkedIn
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <FaGithub size={15} /> GitHub
              </a>
              <a
                href="mailto:farazfayyazwork@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors w-fit"
              >
                <Mail size={15} /> Email
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/60 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Faraz Fayyaz. All rights reserved.</span>
          <span>Built with Next.js &amp; Tailwind CSS</span>
        </div>
      </div>

    </footer>
  );
}
