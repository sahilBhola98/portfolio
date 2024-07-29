import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import python_icon from '../../../public/python.png';
import csharp_icon from '../../../public/c-sharp.png';
import react_icon from '../../../public/react.png';
import nodejs_icon from '../../../public/nodejs.png';
import js from '../../../public/js.png';
import asp_net_core from '../../../public/NET core.png';
import typescript from '../../../public/typescript.png';
import docker_icon from '../../../public/docker.png';
import git_icon from '../../../public/git.png';
import github_icon from '../../../public/github.png';
import tailwind_icon from '../../../public/Tailwind CSS.png';
import tensorflow_icon from '../../../public/TensorFlow.png';
import jupyter_icon from '../../../public/Jupyter.png';
import angular_icon from '../../../public/Angular.png';
import aws_icon from '../../../public/AWS.png';
import scikit_learn_icon from '../../../public/scikit-learn.png';
import postgress_icon from '../../../public/PostgresSQL.png';
import mysql_icon from '../../../public/MySQL.png';
import mongodb_icon from '../../../public/MongoDB.png';

export const Skills: React.FC = () => {
    const technologies = [
        { name: 'Python', icon: python_icon },
        { name: 'C#', icon: csharp_icon },
        { name: 'ASP .Net', icon: asp_net_core },
        { name: 'React', icon: react_icon },
        { name: 'Angular', icon: angular_icon },
        { name: 'TensorFlow', icon: tensorflow_icon },
        { name: 'Scikit-learn', icon: scikit_learn_icon },
        { name: 'NodeJs', icon: nodejs_icon },
        { name: 'JavaScript', icon: js },
        { name: 'Typescript', icon: typescript },
        { name: 'Jupyter', icon: jupyter_icon },
        { name: 'AWS', icon: aws_icon },
        { name: 'MySQL', icon: mysql_icon },
        { name: 'MongoDB', icon: mongodb_icon },
        { name: 'PostgresSQL', icon: postgress_icon },
        { name: 'Tailwind', icon: tailwind_icon },
        { name: 'Docker', icon: docker_icon },
        { name: 'Git', icon: git_icon },
        { name: 'GitHub', icon: github_icon },
    ];

    return (
        <div id="skills" className="pt-28">
            <div className='mx-auto flex w-[90%] items-center justify-center'>
                <AnimatedTitle
                    text={"Skills"}
                    className={
                        "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 p-10 lg:pl-24 lg:pr-24">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.1 + index * 0.2,
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md"
                    >
                        <Image
                            src={tech.icon}
                            title={tech.name}
                            alt={tech.name}
                            className="w-12 h-12 transition-all duration-300 ease-in-out hover:scale-125"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}