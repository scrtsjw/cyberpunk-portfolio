"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-black">
      <Navbar />

      <Hero />

      <Team />

      <Projects />

      <About />

      <Contact />

      <div className="pb-16 px-6 md:px-24">
        <Footer />
      </div>
    </main>
  );
}