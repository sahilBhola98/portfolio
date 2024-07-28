"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "../../components/magicui/animated-gradient-text";
import Spline from "@splinetool/react-spline";
import WordRotate from "../../components/magicui/word-rotate";

export const Hero: React.FC = () => {
    return (
        <>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    id="home"
                    className="relative flex flex-col items-center justify-center pt-24 mt-4 sm:mt-0 md:mt-8 lg:mt-4 sm:pt-0 md:pt-20 lg:pt-24 gap-0 sm:gap-4 md:gap-2 lg:gap-0"
                >
                    <div className="z-10 flex items-center justify-center">
                        <AnimatedGradientText>
                            <span
                                className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xl`
                                )}
                            >
                                <p>Hi There!!👋🏻✨</p>
                            </span>
                        </AnimatedGradientText>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center mt-2 sm:mt-2">
                        I’m Amisha Mehta
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-2 items-center mt-2 sm:mt-3 text-center sm:text-left">
                        <div className="font-extralight text-xl sm:text-base md:text-2xl lg:text-2xl">
                            I’m interested in
                        </div>
                        <WordRotate
                            className="text-2xl md:text-4xl lg:text-3xl font-bold text-black"
                            words={[
                                "Full-Stack Development",
                                "Backend Development",
                                "Machine Learning",
                            ]}
                        />
                    </div>
                    <div className="w-full h-[512px] md:h-[512px] lg:h-[420px] 3xl:h-[512px] mt-0 lg:mt-4">
                        <Spline
                            scene="https://prod.spline.design/kR1RqLXL-0jizDdF/scene.splinecode"
                        />
                    </div>
                </motion.div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-fade-to-white" />
            </AuroraBackground>
        </>
    );
};