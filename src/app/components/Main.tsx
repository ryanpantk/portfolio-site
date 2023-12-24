import React from 'react';
import ParisCat from './ParisCat';

const Main = () => {
    return (
		<div id="main" className="bg">
			<div className="h-screen flex flex-col md:flex-row justify-center md:justify-start items-center px-12 md:px-28">
                <div className='md:mr-auto md:pl-28 mb-8 md:mb-0'>
                    <p className="text-lg md:text-5xl text-gray-300 font-semibold tracking-wide">Hello! I am <span className='text-rose-300'>Ryan Pan</span></p>
                    <p className="text-md md:text-2xl text-gray-300 font-semibold py-2 tracking-wide">I&apos;m an aspiring <span className='text-rose-300 underline underline-offset-8'>Software Engineer</span></p>
                    <p className="text-sm md:text-md text-gray-400 font-semibold py-3 tracking-wide">Currently a student @ SUTD.</p>
                </div>
            <ParisCat/>
            </div>
        </div>
    )
}

export default Main;