import React from "react";
import Image from "next/image";
import photo from "../../../public/ryan.jpg";

const About = () => {
    return (
        <div id="about" className="w-full h-[80vh] grid grid-cols-1 md:grid-cols-3 lg:px-72 md:px-36 px-8 items-center">
            <div className="hidden md:block md:col-span-1 "> 
                <Image src={photo} alt="Picture of the author" className="object-cover lg:h-[60vh] lg:w-[40vh] sm:w-fit sm:h-fit rounded-2xl"/>
            </div>
            <div className="col-span-1 md:col-span-2 lg:pl-16 md:pl-4 tracking-wide ">
                <h1 className="lg:text-md sm:text-sm font-bold text-gray-400 py-4">A BIT ABOUT ME</h1>
                <p className="lg:text-lg sm:text-sm font-medium text-gray-300">I am a final-year undergraduate at Singapore University of Technology and Design (SUTD),
                 with a strong passion in <span className="text-rose-300">Software Engineering</span>. Over the years, I have completed Software Engineering Internships 
                 at a few start-ups and enterprises such as <a href="https://www.beepbeep.tech/" className="text-rose-300 hover:underline cursor-pointer underline-offset-8">Beep</a>, <a href="https://www.singtel.com/business/products-services/5g/paragon" className="text-rose-300 hover:underline cursor-pointer underline-offset-8">Singtel</a> & <a href="https://usenook.com/" className="text-rose-300 hover:underline cursor-pointer underline-offset-8">Nook</a>.</p>
                <p className="lg:text-lg sm:text-sm font-medium text-gray-300 py-4">I have experience in Full-Stack Software Development (Frontend & Backend) and Mobile Application Development. When I am not working, I like playing floorball and <a href="https://vsco.co/cinderyan/gallery" className="hover:underline cursor-pointer underline-offset-8">taking photos</a>.</p>
                <p className="lg:text-lg sm:text-sm font-medium text-gray-300">I enjoy building thoughtful products. <a href="mailto:ryanpantk@gmail.com" className="underline cursor-pointer underline-offset-8">Reach out to connect</a>!</p>
            </div>
        </div>
    )
}

export default About;