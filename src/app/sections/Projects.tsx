"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import pawstime from '../../../public/pawstime.png';
import realTimeMusicPlayer from '../../../public/realTimeMusicPlayer.jpg';
import world_stock from '../../../public/world_stock.png';
import AnimatedTitle from '../animations/AnimatedTitle';
import netflix_dashboard from '../../../public/netflix_dashboard.png';
import rising_indians from '../../../public/rising_indians.png';

const Projects = () => {
    const projects = [
        {
            title: "PawsTime",
            description: "PawsTime is a full-stack web application which empowers veterinary practices with online appointment booking, secure logins, dedicated dashboards for both admins and pet owners, and AWS-powered CI/CD for reliable performance and scalability.",
            image: pawstime,
            link: "https://github.com/AmishaMe24/PawsTime",
            technologiesUsed: ["React", "Node.js", "Express", "MongoDB", "AWS"]
        },
        {
            title: "Exploring World Stock Prices with Machine Learning",
            description: "Architected robust ML pipeline to forecast stock prices, achieving peak 95% classification accuracy. Excelled in data cleaning, preprocessing, visualization, regression, classification, clustering, association analysis, feature engineering, model selection, evaluation metrics, and statistical data analysis to ensure accurate predictions.",
            image: world_stock,
            link: "#",
            technologiesUsed: ["Scikit-learn", "TensorFlow", "Python", "Statistics"]
        },
        {
            title: "Real-Time Emotion-Based Music Player",
            description: "Imagine a music player that reads your mood! It analyzes your facial expressions (thanks to OpenCV!) and uses a powerful neural network (CNN) to predict your emotions. Feeling happy? Get ready for some upbeat tunes! Feeling stressed? Calming melodies await.  This project showcases my expertise in computer vision, deep learning, and creating an interactive music experience.",
            image: realTimeMusicPlayer,
            link: "https://github.com/shahnitav/Real-Time-Emotion-Recognition-Based-Music-Player",
            technologiesUsed: ["Python", "TensorFlow", "CNNs", "OpenCV"]
        },
        {
            title: "Netflix Dashboard",
            description: "This Tableau dashboard offers a comprehensive analysis of Netflix content and viewing trends. It provides an overview of the content library, highlights trending shows and movies, and breaks down genre distribution. The dashboard also includes release year analysis and viewer ratings, giving users valuable insights into Netflix's content evolution and audience reception.",
            image: netflix_dashboard,
            link: "https://github.com/AmishaMe24/netflix-dashboard-tableau",
            technologiesUsed: ["Tableau", "Data Visualization", "Data Analysis"]
        },
        {
            title: "Rising Indians App",
            description: "Rising Indian is a non-profit organization located in Vadodara. This project aims at building an app which helps in volunteer registration for the organization. Features: Sign Up/Login, Upload Event, Like/Comment/Delete Event, Payment Gateway, Timeline, User Account.",
            image: rising_indians,
            link: "https://github.com/AmishaMe24/RisingIndiansApp",
            technologiesUsed: ["Java", "Android Studio", "Firebase", "Razorpay"]
        }
    ];

    const badgeColor = ["bg-red-100 text-red-800", "bg-indigo-100 text-indigo-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800", "bg-yellow-100 text-yellow-800"];

    return (
        <div id="projects" className="pt-28">
            <div className='mx-auto flex w-[90%] items-center justify-center'>
                <AnimatedTitle
                    text={"Projects"}
                    className={
                        "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 lg:gap-20 p-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + index * 0.2,
                                duration: 0.8,
                                ease: "easeInOut",
                            }}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className='flex justify-center items-center'
                            >
                                <a href={project.link}>
                                    <Image className="rounded-t-lg fixed-height" src={project.image} alt={project.title} />
                                </a>
                            </motion.div>

                            <div className="p-5">
                                <motion.a
                                    href={project.link}
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                >
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.title}</h5>
                                </motion.a>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="mb-3 font-normal text-gray-700 text-justify"
                                >
                                    {project.description}
                                </motion.p>
                                <motion.a
                                    href={project.link}
                                    target='_blank'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7685d6] rounded-lg hover:bg-[#6E7DCE] focus:ring-4 focus:outline-none focus:ring-blue-300"
                                >
                                    View On GitHub
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </motion.a>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="mt-4 flex flex-wrap gap-2"
                                >
                                    {project.technologiesUsed.map((tech, techIndex) => (
                                        <span key={techIndex} className={`text-xs font-medium px-2.5 py-0.5 rounded ${badgeColor[techIndex]}`}>
                                            {tech}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Projects;