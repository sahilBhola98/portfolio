import VerticalTimeline01 from '../../components/ui/verticaltimeline1';
import AnimatedTitle from '../animations/AnimatedTitle';

const EducationExperience: React.FC = () => {
    const timelineItems = [
        {
            date: "Present",
            label: "The Upgrade",
            title: "Software Engineer at Genesys",
            content: "Rejoining the Genesys Cloud CX team full-time after a successful internship. Working on real-time Agent-Customer interaction features using Ember.js and TypeScript. Contributing to voice integration protocols, feature engineering, and scalable frontend architectures within a globally deployed customer experience platform."
            // Optional: logo: "/logos/genesys.png"
        },
        {
            date: "2023 - 2025 ",
            label: "The Build-Up",
            title: "Master's in Computer Science at Virginia Tech",
            content: "Focus: Cybersecurity, Federated Learning, Cloud Computing, Blockchain, 5G Security. Researched decentralized cross-zone spectrum management, multiparty computation, and anomaly detection using ML techniques."
        },
        {
            date: "May 2024",
            label: "The Internship",
            title: "Software Engineering Intern at Genesys",
            content: "Built new features for Genesys Cloud CX using Ember.js, Handlebars, and TypeScript. Delivered Agent Consult, Chat Polls, and DTMF Dialpad functionality integrated into the VoIP interface. Maintained automated test coverage and release management workflows using Bitbucket and Jenkins."
        },
        {
            date: " 2020 – 2023",
            label: "The Enterprise",
            title: "Senior Software Engineer at Telstra",
            content: "Developed microservices in Node.js on PCF and AWS, automated engineering metrics pipelines, and created a scalable Hackathon platform with AWS Lambda, DynamoDB, and React. Improved dashboarding and DevOps through PowerBI integration, scripting, and backend APIs."
        },
        {
            date: "2016 – 2020",
            label: "The Foundation",
            title: "B.Tech in Instrumentation and Control – University of Delhi",
            content: "Minor in Computer Science. Key Courses: Computer Networks, OS, Distributed Systems, AI, Digital Signal Processing."
        }
    ];

    return (
        <div id="experience" className="pt-28">
            <div className="mx-auto flex w-[90%] items-center justify-center">
                <AnimatedTitle
                    text={"Education & Experience"}
                    className={
                        "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                        <div className="w-full max-w-3xl mx-auto">
                            <VerticalTimeline01 items={timelineItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationExperience;
