import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";

// Add additional icons here as you collect them
import python_icon from '../../../public/python.png';
import java_icon from '../../../public/java.png';
import bash_icon from '../../../public/bash.png';
import ember_icon from '../../../public/ember.png';
import vercel_icon from '../../../public/vercel.png';
// ... rest of your imports

export const Skills: React.FC = () => {
    const technologies = [
        { name: 'Python', icon: python_icon },
        { name: 'Java', icon: java_icon },
        { name: 'Bash', icon: bash_icon },
        { name: 'Ember.js', icon: ember_icon },
        { name: 'React', icon: require('../../../public/react.png') },
        { name: 'Node.js', icon: require('../../../public/nodejs.png') },
        { name: 'Express.js', icon: require('../../../public/express.png') },
        { name: 'Docker', icon: require('../../../public/docker.png') },
        { name: 'Git', icon: require('../../../public/git.png') },
        { name: 'GitHub', icon: require('../../../public/github.png') },
        { name: 'Tailwind CSS', icon: require('../../../public/Tailwind CSS.png') },
        { name: 'Typescript', icon: require('../../../public/typescript.png') },
        { name: 'JavaScript', icon: require('../../../public/js.png') },
        { name: 'MySQL', icon: require('../../../public/MySQL.png') },
        { name: 'PostgreSQL', icon: require('../../../public/PostgresSQL.png') },
        { name: 'MongoDB', icon: require('../../../public/MongoDB.png') },
        { name: 'TensorFlow', icon: require('../../../public/TensorFlow.png') },
        { name: 'Scikit-learn', icon: require('../../../public/scikit-learn.png') },
        { name: 'Jupyter', icon: require('../../../public/Jupyter.png') },
        { name: 'AWS', icon: require('../../../public/AWS.png') },
        { name: 'Vercel', icon: vercel_icon },
        { name: 'Blockchain', icon: require('../../../public/blockchain.png') },
        { name: 'Zero Trust', icon: require('../../../public/zero.png') },
        { name: 'Federated Learning', icon: require('../../../public/federated.png') },
    ];

    return (
        <div id="skills" className="pt-28">
            <div className="mx-auto flex w-[90%] items-center justify-center">
                <AnimatedTitle
                    text={"Skills"}
                    className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
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
                            delay: 0.1 + index * 0.05,
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md group relative"
                    >
                        <Image
                            src={tech.icon}
                            title={tech.name}
                            alt={tech.name}
                            className="w-12 h-12 transition-all duration-300 ease-in-out group-hover:scale-125"
                        />
                        <span className="absolute bottom-[-1.5rem] text-xs text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
