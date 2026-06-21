import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Experience from "../../components/Experience"; // Reusing our timeline!

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      
      <Navbar />

      {/* Main Content Wrapper - Added top padding to clear the fixed navbar */}
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-16">
        
        {/* Section 1: The Bio */}
        <section className="space-y-6">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Behind the Code
          </h1>
          <div className="text-lg text-slate-400 leading-relaxed space-y-4">
            <p>
              My tech journey started with a strong foundation in computer science, and it is actively evolving as I prepare to relocate to Chicago and dive into my M.S. at DePaul University. I thrive at the intersection of web development, data architecture, and creating systems that actually make an impact.
            </p>
            <p>
              When I am not writing React components or optimizing SQL queries, I am usually planning my next day-in-the-life vlog, hunting for the perfect oversized graphic hoodie, or grabbing a matcha latte before jumping into a Marvel Rivals match on the PS5.
            </p>
          </div>
        </section>

        {/* Section 2: The Timeline */}
        <section>
          {/* We drop the component right here and it perfectly renders! */}
          <Experience /> 
        </section>

      </div>

      <Footer />

    </main>
  );
}