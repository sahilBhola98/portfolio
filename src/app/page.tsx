"use client";

import { Hero } from "./sections/Hero";
import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { NavBar } from "./sections/NavBar";
import About from "./sections/About";
import EducationExperience from "./sections/EducationExperience";
import Projects from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Footer } from "./sections/Footer";
import { Contact } from "./sections/Contact";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setIsMobile(window.innerWidth < 768);
  });

  useEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

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
