import VerticalTimeline01 from '../../components/ui/verticaltimeline1';
import AnimatedTitle from '../animations/AnimatedTitle';

const EducationExperience: React.FC = () => {
    const timelineItems = [
        {
            date: "Present",
            label: "The IPO",
            title: "Masters in Computer Science at Virginia Tech",
            content: "Relevant Coursework: Machine Learning, Intro To Artificial Intelligence, Software Engineering, Cloud Computing, Social Media Analytics, Usability Engineering. CGPA: 3.78/4.0"
        },
        {
            date: "Aug 2024",
            label: "The origin",
            title: "Full-Stack Software Engineer Intern at Flow",
            content: "Engineered front-end components using React.JS, including advanced React state management, React hooks, and Redux. Implemented interactive graphics using D3.js and utilized Electron for cross - platform deployment. Designed, developed, and tested APIs for integrations between front- end, back - end, AI tasks, and third - party systems. Deployed releases to live production environments on various cloud platforms, ensuring scalability, reliability, & security."
        },
        {
            date: "JUN, 2023",
            label: "The milestone",
            title: "Associate Software Engineer at Altera Digital Health",
            content: "Developed 10+ healthcare modules using C#, .NET, MVC, and WPF, significantly boosting customer satisfaction by 20%, enhancing UI/UX, and improving desktop application responsiveness. • Led a critical migration from GWT to .NET, slashing maintenance by 60% and increasing system performance by 30%. • Spearheaded quality assurance, reducing bug incidence by 25% through advanced unit testing with xUnit; managed peer code reviews and knowledge sharing, increasing coding efficiency by 10%"
        },
        {
            date: "JUN, 2022",
            label: "The acquisitions",
            title: "Web Developer at Confidosoft Solutions Pvt. Ltd.",
            content: "• Engineered and deployed full-stack applications using C#, .NET, Angular, and Microsoft SQL Server, delivering 30% increase in operational efficiency through advanced system optimizations. • Designed and launched scalable ASP.NET Core Web APIs for the backend, increasing system throughput by 25%. • Enhanced data integration processes and optimized data querying using Entity Framework and leveraging Angular and Typescript, reducing response times by 20% and increasing user engagement by 15%. • Optimized data exchanges and deployments with RESTful, SOAP, and Jenkins, cutting times by 40%. Mentored 5 developers and coordinated Git, boosting productivity by 20%."
        },
        {
            date: "May, 2020",
            label: "The IPO",
            title: "Bachelors in Computer Science at Navrachana University",
            content: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Machine Learning and Deep Learning, Artificial Intelligence, Database Management, Web Development, Data Analysis, Statistics & Probability. CGPA: 8.34/10.0"
        }
    ]

    return (
        <>
            <div className='mx-auto flex w-[90%] items-center justify-center'>
                <AnimatedTitle
                    text={"Education & Experience"}
                    className={
                        "text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-slate-950 sm:text-[45px] md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
            </div>
            <div className="relative flex flex-col justify-center bg-slate-50 overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">

                        <div className="w-full max-w-3xl mx-auto">
                            <VerticalTimeline01 items={timelineItems} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationExperience;