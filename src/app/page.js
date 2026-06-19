import Navbar from "../components/navbar";
import Hero from "../components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navbar section */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>
      {/* Experience Section */}

      {/* Visitor Board Section */}
      
    </main>
  );
}