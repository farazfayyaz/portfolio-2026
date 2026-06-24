import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Education from "../../components/education";
import Experience from "../../components/experience"; 
import AboutMe from "../../components/aboutme";
import PlayerStats from "../../components/playerstats";
import AFKCar from "../../components/afkcar";
import ScrollSpidey from "../../components/scrollspidey";
import { Award } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 relative">
      
      {/* The invisible Easter Egg tracker */}
      <AFKCar />

      {/* Scrolling Spidey */}
      <ScrollSpidey/>

      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto space-y-24">
        
        {/* Section 1: Identity & Live Status */}
        <AboutMe />

        {/* Section 2: The RPG Stats Card */}
        <PlayerStats />

        {/* Section 3: Featured Video */}
        <section className="w-full">
          <div className="bg-linear-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-1 md:p-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-linear-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rotate-12 pointer-events-none opacity-50"></div>
            <div className="bg-slate-950 rounded-[1.25rem] p-6 md:p-10 relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded-full border border-yellow-500/20">
                  <Award size={14} /> Spotlight Feature
                </div>
                <h3 className="text-2xl font-bold text-white">The PepsiCo Scholarship</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  During my time at Ivy Tech Community College, I was honored to be a recipient of the PepsiCo scholarship. This recognition reinforced my drive to use technology to create opportunities not just for myself, but for the community around me.
                </p>
              </div>
              <div className="w-full md:w-125 aspect-video bg-slate-900 rounded-xl border border-slate-800 overflow-hidden relative shadow-lg">
                <iframe 
                  className="w-full h-full absolute top-0 left-0"
                  src="https://www.youtube.com/embed/GH1AWGWNh8w" 
                  title="PepsiCo Scholarship Feature" 
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Academics */}
        <Education />

        {/* Section 5: Professional Timeline */}
        <div className="pt-8 border-t border-slate-800/50">
          <Experience />
        </div>

      </div>

      <Footer />

    </main>
  );
}