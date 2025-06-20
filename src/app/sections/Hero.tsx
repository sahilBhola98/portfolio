"use client";

import { motion } from "framer-motion";
import React from "react";
import { CodeRainBackground } from "@/components/ui/code-rain-background";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../../components/magicui/animated-gradient-text";
import Spline from "@splinetool/react-spline";
import WordRotate from "../../components/magicui/word-rotate";

export const Hero: React.FC = () => {
  return (
    <CodeRainBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        id="home"
        className="relative flex flex-col items-center justify-center pt-24 text-white"
      >
        <div className="z-10 flex items-center justify-center font-mono text-cyan-400 text-lg md:text-xl lg:text-2xl">
          <span className="border-r-2 border-cyan-400 animate-typing whitespace-nowrap overflow-hidden">
            System Online. Initializing Sahil.exe...
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mt-2">
          I’m Sahil Bhola
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 items-center mt-2 text-center sm:text-left">
          <div className="font-extralight text-xl md:text-2xl text-cyan-300 animate-pulse drop-shadow-md">
            I’m interested in
          </div>
          <WordRotate
            className="text-2xl md:text-4xl lg:text-3xl font-bold text-white"
            words={[
              "Full-Stack Development",
              "Software Engineering",
              "Privacy Preservation",
              "Cybersecurity",
              "Blockchain",
              "5G Security",
              "Federated Learning",
              "Zero Trust Systems",
            ]}
          />
        </div>

        <div className="w-full h-[600px] mt-4">
          <Spline scene="https://prod.spline.design/DSK49adP2JFlCREi/scene.splinecode" />
        </div>
      </motion.div>
    </CodeRainBackground>
  );
};