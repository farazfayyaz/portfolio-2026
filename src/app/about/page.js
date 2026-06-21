import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Experience from "../../components/experience"; 
import AboutMe from "../../components/aboutme";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-24">
        
        {/* Section 1: The Bento Box Grid */}
        <AboutMe />

        {/* Section 2: The Professional Timeline */}
        <div className="max-w-4xl mx-auto">
          <Experience /> 
        </div>

      </div>

      <Footer />

    </main>
  );
}