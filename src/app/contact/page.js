"use client";

import React, { useState } from 'react';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Send, User, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 1. Gather all the data from the form inputs
    const formData = new FormData(e.target);

    // 2. Add your Web3Forms access key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    // 3. Set your custom subject line
    formData.append("subject", "🚨 New Message from Portfolio Website!");

    // 4. Set a clean "From" name for your inbox
    formData.append("from_name", "Portfolio Contact Form");

    try {
      // 5. Send the payload to the API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        e.target.reset(); // Clear the form fields after success
      } else {
        console.error("Submission failed:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      <Navbar />

      <div className="pt-48 md:pt-64 pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-start mt-12 md:mt-0">
        
        {/* Left Side: Context & Copy */}
        <div className="w-full md:w-5/12 space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-press-start text-white mb-6 leading-relaxed relative z-10">
              Let's Connect.
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed relative z-10">
              Currently managing software solutions in Indy and gearing up for computer science at DePaul University in Fall 2026. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
          </div>
          
          <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl relative z-10">
            <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
              <MessageSquare size={18} />
              Response Time
            </h3>
            <p className="text-sm text-slate-300">
              I typically reply within 24-48 hours. If it's time-sensitive, feel free to reach out directly via LinkedIn.
            </p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-7/12 relative mt-8 md:mt-0">
          
          {/* Custom Animation for the Pop-Up */}
          <style>{`
            @keyframes pop-up {
              0% { transform: translate(-50%, 100%); }
              100% { transform: translate(-50%, 0); }
            }
            .animate-pop-up {
              animation: pop-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
              animation-delay: 0.5s; 
              transform: translate(-50%, 100%); 
            }
          `}</style>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-sm relative z-10">
            
            {/* NEW: The Clipping Stage */}
            <div className="absolute bottom-full left-0 w-full h-32 overflow-hidden pointer-events-none z-0">
              <div className="absolute bottom-0 left-1/2 w-28 h-28 animate-pop-up drop-shadow-[0_4px_12px_rgba(239,68,68,0.4)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/spidey-scratchin.gif" 
                  alt="Spider-Man" 
                  className="w-full h-full object-contain object-bottom"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden text-5xl text-center">🕷️</div>
              </div>
            </div>

            {/* Success State Overlay */}
            {isSubmitted ? (
              <div className="absolute inset-0 z-20 bg-slate-900 rounded-3xl flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                <CheckCircle2 size={64} className="text-emerald-500 mb-6 animate-bounce" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-6">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <User size={16} /> Your Name
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-slate-600"
                    placeholder="Peter Parker"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400 flex items-center gap-2">
                    <Mail size={16} /> Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-slate-600"
                    placeholder="peter@dailybugle.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400 flex items-center gap-2">
                  <MessageSquare size={16} /> Your Message
                </label>
                <textarea 
                  name="message" 
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-slate-600 resize-none"
                  placeholder="Hey Faraz, heard you're the guy to talk to about..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-500 transition-all flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Shooting Web...</span>
                ) : (
                  <>
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}