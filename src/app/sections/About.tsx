import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import profile_photo from "../../../public/profile-photo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";

const About: React.FC = () => {
    return (
        <>
            <section
                className="relative z-10 w-full h-full items-center justify-center overflow-hidden pt-28"
                id="about"
            >
                <div className="mx-auto flex w-[90%] flex-col lg:max-w-[1212.8px]">
                    <AnimatedTitle
                        text={"About Me"}
                        className={
                            "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                        }
                        wordSpace={"mr-[14px]"}
                        charSpace={"mr-[0.001em]"}
                    />

                    <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-between mt-4">
                        <motion.div
                            initial={{ opacity: 0.0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="flex flex-col items-center justify-center lg:mr-10"
                        >
                            <Image
                                src={profile_photo}
                                alt="Profile Photo"
                                width={600}
                                height={600}
                                className="rounded-full border-4 border-white shadow-lg"
                            />
                            <div className="pt-4">
                                <Button
                                    borderRadius="1.75rem"
                                    className="bg-white text-black border-neutral-200"
                                    onClick={() => {
                                        window.open(
                                            "https://drive.google.com/file/d/1or6Br5nAxnCwiLmlbGf9bWyFeH-RxMzG/view?usp=sharing",
                                            "_blank"
                                        );
                                    }
                                    }
                                >
                                    Download Resume
                                </Button>
                            </div>
                        </motion.div>

                        <div className="mt-8 lg:mt-0 flex flex-col gap-4 leading-relaxed tracking-wide md:gap-6 md:leading-relaxed lg:w-2/3">
                            <AnimatedBody text="I'm Amisha Mehta, a software engineer currently pursuing a Master's in Computer Science at Virginia Tech. Fueled by a passion for crafting innovative, high-performing solutions, I leverage my full-stack development skills to tackle projects from conception to deployment." />

                            <AnimatedBody
                                delay={0.1}
                                text="My background in machine learning, honed through my Master's program, allows me to integrate intelligent features that enhance user experience and efficiency. Fueled by a love for continuous learning, I'm a strong team player who consistently pushes for optimization and improved productivity. I thrive in collaborative environments where we can leverage each other's strengths to build impactful tech solutions that shape the future of software development and machine learning."
                            />

                            <AnimatedBody
                                delay={0.3}
                                text="When I'm not coding, you can find me exploring nature’s beauty on hiking trails, whipping up something delicious in the kitchen, or capturing moments through my camera lens. I enjoy the thrill of sports, catching the latest shows, and try to find my zen through yoga and meditation in this fast-paced world."
                            />

                            <AnimatedBody
                                delay={0.4}
                                text="I am always excited about new opportunities and collaborations. If you're interested in working together or discussing the latest in tech, please reach out. Let's create something amazing together!"
                            />

                            <AnimatedBody
                                delay={0.5}
                                text="Explore my projects, learn more about my journey, and connect with me."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;