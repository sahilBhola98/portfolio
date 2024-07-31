"use client";

import { Hero } from "./sections/Hero";
import { NavBar } from "./sections/NavBar";
import About from "./sections/About";
import EducationExperience from "./sections/EducationExperience";
import Projects from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Footer } from "./sections/Footer";
import { Contact } from "./sections/Contact";

export default function Home() {

  return (
    <>
      <NavBar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <EducationExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
