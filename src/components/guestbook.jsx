"use client";

import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react'; // Removed the extra loading icons

export default function Guestbook() {
  // 1. Core State (Memory) for the Board
  const [notes, setNotes] = useState([
    { id: 1, text: "Can't wait to see what you build in Chicago!", author: "A Fellow Dev", color: "bg-yellow-300", rotation: "-rotate-2" },
    { id: 2, text: "Great work at United Way!", author: "Indy Colleague", color: "bg-pink-300", rotation: "rotate-3" }
  ]);
  
  // 2. Form Input State
  const [newNoteText, setNewNoteText] = useState("");
  const [newNoteAuthor, setNewNoteAuthor] = useState("");
  const [selectedColor, setSelectedColor] = useState("bg-yellow-300");

  const colors = ["bg-yellow-300", "bg-pink-300", "bg-green-300", "bg-blue-300", "bg-purple-300"];
  const rotations = ["-rotate-3", "-rotate-2", "-rotate-1", "rotate-1", "rotate-2", "rotate-3"];

  // 3. Function to Handle Form Submission
  const handleAddNote = (e) => {
    e.preventDefault(); 
    if (!newNoteText.trim() || !newNoteAuthor.trim()) return;

    const randomRotation = rotations[Math.floor(Math.random() * rotations.length)];
    
    const newNote = {
      id: Date.now(),
      text: newNoteText,
      author: newNoteAuthor,
      color: selectedColor,
      rotation: randomRotation
    };

    setNotes([newNote, ...notes]);
    setNewNoteText("");
    setNewNoteAuthor("");
  };

  return (
    <section id="guestbook" className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800">
      
      {/* Streamlined Header */}
      <div className="mb-12">
        <h2 className="text-xl font-press-start text-white mb-4 leading-relaxed flex items-center gap-3">
          <MessageSquare className="text-yellow-400" /> The Guestboard
        </h2>
        <p className="text-slate-400 max-w-xl">
          Leave a mark! Grab a virtual post-it, write your name, and pin it to the board. 
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        
        {/* Form Container */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
          <h3 className="font-inter font-bold text-xl text-slate-200 mb-6">Write a Note</h3>
          <form onSubmit={handleAddNote} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Your Name</label>
              <input 
                type="text" 
                value={newNoteAuthor}
                onChange={(e) => setNewNoteAuthor(e.target.value)}
                placeholder="John Doe" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                maxLength={30}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
              <textarea 
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="Hey Faraz, awesome portfolio!..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none h-24"
                maxLength={120}
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-2">Pick a Color</label>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${color} ${selectedColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110' : 'opacity-70 hover:opacity-100'} transition-all shadow-md`}
                  />
                ))}
              </div>
            </div>
            <button 
              type="submit"
              className="w-full mt-4 bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors flex justify-center items-center gap-2"
            >
              Pin to Board
            </button>
          </form>
        </div>

        {/* The Corkboard */}
        <div className="lg:col-span-2 min-h-125 bg-[url('https://www.transparenttextures.com/patterns/cork-board.png')] bg-slate-800/40 border border-slate-800 rounded-3xl p-8 relative overflow-hidden flex flex-wrap content-start gap-4 shadow-inner">
          {notes.map(note => (
            <div 
              key={note.id} 
              className={`${note.color} ${note.rotation} w-44 h-44 p-4 shadow-[2px_4px_10px_rgba(0,0,0,0.3)] flex flex-col justify-between transition-transform hover:scale-105 hover:z-10 cursor-pointer border-t border-l border-white/20`}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-sm border border-red-700/50 z-10">
                <div className="w-1 h-1 bg-white/50 rounded-full ml-0.5 mt-0.5"></div>
              </div>
              <p className="text-slate-900 font-medium text-sm leading-snug mt-2 text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
                {note.text}
              </p>
              <p className="text-slate-800 font-bold text-xs text-right mt-2 border-t border-black/10 pt-2">
                - {note.author}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}