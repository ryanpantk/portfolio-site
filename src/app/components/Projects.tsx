import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import Nook from '../../../public/Nook.png';
import PersonalSite from '../../../public/personal-site.png';
import AscendaUI from '../../../public/ascenda-fe.png';
import AuralDelicacy from '../../../public/aural-delicacy.png';
import ScanCart from '../../../public/scancart.png';
import { SocialIcon } from "react-social-icons";

class projectButton {
    label: string;
    link: string;

    constructor (label: string, link: string) {
        this.label = label;
        this.link = link;
    }
}

function ProjectCard (props: {title: string, subtitle:string, description: string, image: StaticImageData, buttons: projectButton[]}) {  
    return (                
    <div className='card relative col-span-1 h-96 rounded-2xl overflow-hidden border-4 border-slate-500/75 shadow-lg'>
        <Image src={props.image} alt="Personal Site" className='h-full w-full object-cover md:object-cover'/>
        <div className="card-body">
            <p className='text-white md:text-2xl font-bold mb-1'>{props.title}</p>
            <p className='text-sm text-slate-200  font-normal'>Technology: {props.subtitle}</p>
            <p className='text-sm text-white font-semibold my-8'>{props.description}</p>
            <div className='flex flex-row'>
                {props.buttons.map((button: projectButton) =>
                    <a key={button.link} className='mr-4 bg-blue-900 px-4 pr-8 py-1 rounded-lg flex flex-row items-center justify-center font-semibold text-white cursor-pointer' href={button.link}>
                        <SocialIcon
                                as="div"
                                network={button.link.includes('https://github.com/ryanpantk/') ? 'github' : ''}
                                fgColor="white"
                                bgColor="transparent"
                            />
                        {button.label ? button.label : "Github"}
                    </a>
                )}
            </div>
        </div>
    </div>)
}

const Projects = () => {
    return (
		<div id="projects" className="lg:mx-72 md:mx-36 mx-8  mb-36 flex flex-wrap items-start justify-start">
            <p className="lg:text-2xl sm:text-sm font-bold text-slate-200 mb-12">Selected Projects</p>
            <div className="w-full flex flex-wrap grid grid-cols-1 2xl:grid-cols-2 gap-x-8 gap-y-6">
                <ProjectCard 
                        title="Couple Finance App (Nook)" 
                        subtitle="Flutter, GraphQL, NestJS, TypeScript" 
                        description="Nook is a finance app built for couples to manage their finances together. As part of my internship, I worked on the Flutter mobile app and implemented REST and GraphQL APIs for features such as real-time chat support and an explore page." 
                        image={Nook} 
                        buttons = {[new projectButton("Website", "https://usenook.com/couples")]}
                />
                <ProjectCard 
                    title="Personal Website" 
                    subtitle="React, TailwindCSS, TypeScript" 
                    description="My personal portfolio site was built using React, TailwindCSS and TypeScript to display some of the projects I have worked on. The project is hosted on Github Pages and uses GitHub Actions for CI/CD." 
                    image={PersonalSite} 
                    buttons = {[new projectButton("Github", "https://github.com/ryanpantk/portfolio-site")]}
                />
                <ProjectCard 
                    title="Hotel Booking Platform" 
                    subtitle="React, AntDesign, NodeJS, MongoDB, Redis" 
                    description="This is a full-stack web development project done with Ascenda Loyalty, which made use of Ascenda's hotel API endpoints to deliver a white-label hotel booking platform. A reactJS frontend was developed to facilitate the booking process, and a NodeJS backend was built to manage results aggregation and caching." 
                    image={AscendaUI} 
                    buttons = {[new projectButton("Github (UI)", "https://github.com/ryanpantk/Ascenda-UI"), new projectButton("Github (APIs)", "https://github.com/ryanpantk/Ascenda-Server")]}
                />
                <ProjectCard 
                    title="Aural Delicacy" 
                    subtitle="Swift (IOS), Firebase" 
                    description="Aural Delicacy is an IOS Swift app developed as part of SUTD's Inclusive App Dev Hackathon 2022 to crowdsource restaurant menu images and convert them into text such that the visually impaired can access them through iPhone's VoiceOver feature." 
                    image={AuralDelicacy} 
                    buttons = {[new projectButton("Github", "https://github.com/ryanpantk/Aural-Delicacy" )]}
                />
                <ProjectCard 
                    title="ScanCart" 
                    subtitle="Java (Android), Firebase" 
                    description="ScanCart is an Android app developed as part of SUTD's Introduction to Information Systems and Programming module. By scanning NFC tags embedded in price tags, elderlies are able to add items to their shopping carts, complete the checkout process, and track their grocery deliveries." 
                    image={ScanCart} 
                    buttons = {[new projectButton("Github", "https://github.com/ryanpantk/Scan-Cart" )]}
                />
            </div>
        </div>
    )
}

export default Projects;