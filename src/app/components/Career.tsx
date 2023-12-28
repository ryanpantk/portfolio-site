import { useRef } from "react";
import ComputerSVG from "../../../public/computer.svg";
import PhoneSVG from "../../../public/phone.svg";
import Image from "next/image";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue
  } from "framer-motion";

enum skillCategory {
    "Frontend",
    "Backend",
    "DevOps",
    "Others"
}


let careers: Array<{label: string, company: string, location: string, duration: string, date: string, tags?: Array<{label: string, category: skillCategory}>}> = [
    {
        label: "Software Engineer (Internship)",
        company: "Nook",
        location: "Singapore",
        duration: "3 mos",
        date: "Jun 2023 - Aug 2023",
        tags: [{label: "Flutter", category: skillCategory["Frontend"]},
        {label: "NestJS", category: skillCategory["Backend"]},
        {label: "TypeScript", category: skillCategory["Backend"]},
        {label: "GraphQL", category: skillCategory["Backend"]},]
    },
    {
        label: "Software Developer (Internship)",
        company: "Singtel 5G / IoT Team",
        location: "Singapore",
        duration: "4 mos",
        date: "Aug 2022 - Dec 2022",
        tags: [{label: "VueJS", category: skillCategory["Frontend"]},
        {label: "Spring Boot (Java)", category: skillCategory["Backend"]},
        {label: "Docker", category: skillCategory["DevOps"]},
        {label: "Kubernetes", category: skillCategory["DevOps"]},
        {label: "Jenkins", category: skillCategory["DevOps"]},]
    },
    {
        label: "Software Engineer (Internship)",
        company: "Beep",
        location: "Singapore",
        duration: "5 mos",
        date: "May 2021 - Sep 2021",
        tags: [{label: "VueJS", category: skillCategory["Frontend"]},
        {label: "Tailwind", category: skillCategory["Frontend"]},
        {label: "C", category: skillCategory["Backend"]},
        {label: "Figma", category: skillCategory["Others"]},]
    }

]

function SkillTag(props: {label: string, category: skillCategory}) {
    return (
        <div>     
        {
            (() => {
                switch(props.category) {
                    case(skillCategory.Frontend): {
                            return (
                                <div className="flex items-center mt-4 py-2 px-4 bg-rose-200 rounded-full mr-2">
                                    <span className="font-semibold text-sm ">{props.label}</span>
                                </div>
                            )
                        }
                    break;
                    case(skillCategory.Backend): {
                        return (
                            <div className="flex items-center mt-4 py-2 px-4 bg-blue-200 rounded-full mr-2">
                                <span className="font-semibold text-sm ">{props.label}</span>
                            </div>
                        )
                    }
                    break;
                    case(skillCategory.DevOps): {
                        return (
                            <div className="flex items-center mt-4 py-2 px-4 bg-green-200 rounded-full mr-2">
                                <span className="font-semibold text-sm ">{props.label}</span>
                            </div>
                        )
                    }
                    default: {
                            return (
                            <div className="flex items-center mt-4 py-2 px-4 bg-gray-200 rounded-full mr-2">
                                <span className="font-semibold text-sm ">{props.label}</span>
                            </div>
                            )
                        }
                    break;
                    }
            })()  
        }  
        </div>  
    )
}

function CareerItem(props: {label: string, company: string, location: string, duration: string, date: string, tags?:Array<{label: string, category: skillCategory}>}) {
    return (
        <div className="my-12 border-l-[4px] pl-8 border-slate-200">
            <div>
                <p className="lg:text-xl sm:text-sm font-bold text-slate-200">{props.label}</p>
                <p className="lg:text-lg sm:text-sm font-bold text-slate-200">{props.company} • <span className="font-normal text-gray-400">{props.location}</span></p>
                <p className="lg:text-lg sm:text-sm font-normal text-gray-400">{props.date} • {props.duration}</p>
                <div className="flex flex-wrap">
                    {props.tags?.map((tag) => (
                        <SkillTag key={tag.label} label={tag.label} category={tag.category}/>
                    ))} 
                </div>
            </div>
        </div>
    )
}

const Career = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y1 = useTransform(scrollYProgress, [0, 1], [-500, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-400, 250]);
    return (
        <div className="flex flex-row items-start my-[15vh]">
            <div  className="h-fit lg:px-72 md:px-36 px-8 mr-auto">
                <p className="lg:text-2xl sm:text-sm font-bold text-slate-200 mb-12">Career Highlights</p>
                {careers.map((career) => (
                    <CareerItem key={career.label} label={career.label} company={career.company} location={career.location} duration={career.duration} date={career.date} tags={career.tags}/>
                ))}
            </div>
            <div className="relative">
                <motion.div style={{ y:y1, opacity }}>
                    <Image src={ComputerSVG} alt="Computer" className="hidden lg:block h-64 w-64 mt-4 mr-8 md:mr-36 rotate-6 opacity-20 skew-x-6" />
                </motion.div>
                <motion.div style={{ y:y2, opacity }}>
                    <Image src={PhoneSVG} alt="Computer" className="hidden lg:block absolute right-64 h-40 w-40 mt-4 mr-8 md:mr-36 rotate-[-17deg] opacity-20 skew-y-6" />
                </motion.div>
            </div>

        </div>
    )
}

export default Career;