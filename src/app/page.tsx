"use client";

import { Hero } from "./sections/Hero";
import { useEffect, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { NavBar } from "./sections/NavBar";
import About from "./sections/About";
import EducationExperience from "./sections/EducationExperience";

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
      <main className="flex flex-col bg-slate-50">
        <Hero />
        <About />
        <EducationExperience />
      </main>
    </>
  );
}
