// ✅ Updated Projects.tsx without images, stylized cards only
"use client";

import { motion } from 'framer-motion';
import AnimatedTitle from '../animations/AnimatedTitle';

const Projects = () => {
    const publications = [
        {
            title: "A Machine Learning Approach for Predictive Maintenance of Air Conditioning Systems",
            description: "Published in IEEE ISAP 2019. Developed a fault classification model using SVM, decision trees, and DCGANs on Indian household HVAC datasets.",
            link: "https://ieeexplore.ieee.org/document/9065995",
            technologiesUsed: ["SVM", "DCGAN", "MATLAB", "WEKA"]
        },
        {
            title: "Anomaly-Driven Node Trust Scoring in Federated 5G Network Detection Systems",
            description: "Master's thesis on scalable, decentralized trust management in 5G intrusion detection systems using blockchain and federated learning.",
            link: "https://vtechworks.lib.vt.edu/items/e32dd0ba-163f-4169-a922-35174295aad4",
            technologiesUsed: ["Federated Learning", "Blockchain", "Zero Trust", "Python"]
        }
    ];

    const projects = [
        {
            title: "Enhanced Agent Interaction Panel for Genesys Cloud",
            description: "Built new VoIP-based features for Genesys Cloud CX, including DTMF Dialpad, Agent Consult, and Chat Polls. Developed using Ember.js and TypeScript.",
            link: "https://github.com/sahilBhola98",
            technologiesUsed: ["Ember.js", "TypeScript", "HTML/CSS", "Jenkins"]
        },
        {
            title: "Dynamic Spectrum Sharing Simulation Tool",
            description: "Built a Python-based simulator for context-aware spectrum access using openWeather APIs to optimize satellite band sharing decisions.",
            link: "https://github.com/sahilBhola98/spectrum-sim",
            technologiesUsed: ["Python", "openWeatherAPI", "Federated Systems"]
        },
        {
            title: "Fingerprint Liveliness Detection",
            description: "Built a spoof-proof fingerprint authentication model using DCGANs and One-Class Classifiers on the LivDet dataset.",
            link: "https://github.com/sahilBhola98/fingerprint-spoof",
            technologiesUsed: ["DCGAN", "Python", "Keras", "TensorFlow"]
        },
        {
            title: "Zero Trust Dashboard Prototype",
            description: "Designed a proof-of-concept dashboard to visualize dynamic trust scores from Kitsune-style NIDS with node scoring mechanism integrated.",
            link: "https://github.com/sahilBhola98/zero-trust-dashboard",
            technologiesUsed: ["React", "Python", "Kitsune", "Node Trust"]
        }
    ];

    const badgeColor = ["bg-red-100 text-red-800", "bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"];

    return (
        <>
            <div id="publications" className="pt-28">
                <div className='mx-auto flex w-[90%] items-center justify-center'>
                    <AnimatedTitle
                        text={"Publications"}
                        className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                        wordSpace="mr-[14px]"
                        charSpace="mr-[0.001em]"
                    />
                </div>
                <div className='flex justify-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-20 p-10">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.2, duration: 0.8, ease: "easeInOut" }}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-6"
                            >
                                <a href={pub.link} target="_blank">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">{pub.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 text-justify">{pub.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {pub.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeColor[techIndex % badgeColor.length]}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="projects" className="pt-28">
                <div className='mx-auto flex w-[90%] items-center justify-center'>
                    <AnimatedTitle
                        text={"Projects"}
                        className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                        wordSpace="mr-[14px]"
                        charSpace="mr-[0.001em]"
                    />
                </div>
                <div className='flex justify-center'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-20 p-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.2, duration: 0.8, ease: "easeInOut" }}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-6"
                            >
                                <a href={project.link} target="_blank">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline">{project.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 text-justify">{project.description}</p>
                                <a href={project.link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7685d6] rounded-lg hover:bg-[#6E7DCE] focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    View Project
                                </a>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeColor[techIndex % badgeColor.length]}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
