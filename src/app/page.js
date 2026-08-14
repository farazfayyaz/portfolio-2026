import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ScrollSpidey from "../components/scrollspidey";
import Projects from "../components/projects";
import Guestbook from "../components/guestbook";
import AFKCar from "../components/afkcar";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* AFK Easter Egg */}
      <AFKCar />

      {/* Navbar section */}
      <Navbar/>

      {/* City Skyline Section */}
      <ScrollSpidey/>

      {/* Hero Section */}
      <Hero/>

      {/* Projects Section */}
      <Projects/>

      {/* Visitor Board Section */}
      <Guestbook/>

      {/* Footer Section */}
      <Footer/>

      {/* Analytics */}
      <Analytics/>
      
    </main>
  );
}