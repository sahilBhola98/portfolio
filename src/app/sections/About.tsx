"use client";

import React from "react";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import profile_photo from "../../../public/profile-photo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/moving-border'

const About: React.FC = () => {
  return (
    <section className="relative z-10 w-full pt-28" id="about">
      <div className="mx-auto flex w-[90%] flex-col lg:max-w-[1212.8px]">
        <AnimatedTitle
          text="About Me"
          className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between mt-4">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center lg:mr-10"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] xl:max-w-[350px]">
              <Image
                src={profile_photo}
                alt="Profile Photo"
                className="w-full h-auto rounded-full border-4 border-white shadow-lg object-cover"
                priority
              />
            </div>
            <div className="pt-4">
              <Button
                borderRadius="1.75rem"
                className="bg-white text-black border-neutral-200"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1xOtKNrGfFOHt7BsJB5bBfiPyfPm_6h4G/view?usp=drive_link",
                    "_blank"
                  );
                }}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>

          <div className="mt-8 lg:mt-0 flex flex-col gap-4 leading-relaxed tracking-wide md:gap-6 md:leading-relaxed lg:w-2/3">
            <AnimatedBody text="I'm Sahil Bhola — a software engineer, full-stack developer, and cybersecurity researcher currently completing my Master’s in Computer Science at Virginia Tech. With 3+ years of industry experience and a deep love for clean code, complex systems, and clever hacks, I thrive at the intersection of software engineering and research innovation." />
            <AnimatedBody delay={0.1} text="My journey spans building cloud-native apps at scale, engineering robust backend services in Node.js and AWS, and crafting reactive frontends with React and Ember. But what truly drives me is solving problems that matter — whether that’s architecting zero-trust systems, experimenting with federated learning for 5G security, or building decentralized frameworks using blockchain and multiparty computation." />
            <AnimatedBody delay={0.2} text="I believe software isn't just about features — it's about pushing limits, thinking adversarially, and constantly questioning the status quo. I don’t just code; I tinker, break, rebuild, and optimize." />
            <AnimatedBody delay={0.3} text="When I’m not writing code or researching how to make systems more secure and intelligent, you’ll find me exploring new tech stacks, reading about cyber-espionage history, or mentally reverse-engineering how things work. I like my CLI dark, my hacks elegant, and my solutions scalable." />
            <AnimatedBody delay={0.4} text="Always open to new collaborations, especially at the cutting edge of security, AI, and web engineering. Let’s build, break, and innovate together." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
