import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Faraz Fayyaz
          </span>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Built with React & Next.js.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="/guestbook" className="hover:text-blue-400 transition-colors">Guest Book</a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-4">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-all"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-all"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="#" 
            className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg border border-slate-800 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
}