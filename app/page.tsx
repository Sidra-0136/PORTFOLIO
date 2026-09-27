import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F7] text-[#29262A]">
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      
    </main>
  );
}