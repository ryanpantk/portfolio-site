import React, { useRef } from 'react';
import Image from 'next/image';
import LightSVG from '../../../public/light.svg';
import ShelveSVG from '../../../public/shelve.svg';
import ParisCat from './ParisCat';
import { motion, useScroll, useTransform } from 'framer-motion';

const Main = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    return (
		<div id="main" className="bg h-screen  flex items-center ">
            <Image src={LightSVG} alt="Light"  className='hidden xl:block absolute top-0 left-0 h-auto w-40 mt-4 ml-96 opacity-30'/>
			<div className="flex w-full flex-col md:flex-row justify-center md:justify-start items-center px-12 md:px-28">
                <div className='md:mr-auto md:pl-28 mb-8 md:mb-0'>
                    <p className="text-lg md:text-5xl text-gray-300 font-semibold tracking-wide">Hello! I am <span className='text-rose-300'>Ryan Pan</span></p>
                    <p className="text-md md:text-2xl text-gray-300 font-semibold py-2 tracking-wide">I&apos;m an aspiring <span className='text-rose-300 underline underline-offset-8'>Software Engineer</span></p>
                    <p className="text-sm md:text-md text-gray-400 font-semibold py-3 tracking-wide">Currently a student @ SUTD.</p>
                </div>
                <ParisCat/>
            </div>
            <motion.span style={{opacity}}>
                <Image src={ShelveSVG} alt="Light"  className='hidden xl:block absolute bottom-0 left-0 h-auto w-64 ml-56 opacity-40'/>
            </motion.span>
        </div>
    )
}

export default Main;