import Contact from "./components/Contact";
import Projects from "./components/Projects";
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
      <Projects />
      <Contact />
      
      <footer className="bg-[#7F9477] px-4 py-6 text-center text-white">
  <div className="mx-auto max-w-4xl">
    <p className="text-2xl font-serif">
      Sidra Tul Muntaha
    </p>

    <p className="mt-2 text-sm text-white/80">
      Web Developer
    </p>

    <p className="mt-5 text-xs text-white/70">
      © 2026 Sidra Tul Muntaha. All rights reserved.
    </p>
  </div>
</footer>

    </main>
  );
}