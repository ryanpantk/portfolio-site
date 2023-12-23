import React from 'react';
import ParisCat from './ParisCat';

const Main = () => {
    return (
		<div id="main" className="bg">
			<div className="h-screen flex justify-start items-center px-28">
                <div className='mr-auto pl-28'>
                    <p className="font-mukta text-5xl text-gray-300 font-semibold tracking-wide">Hello! I am <span className='text-rose-300'>Ryan Pan</span></p>
                    <p className="font-mukta text-2xl text-gray-300 font-semibold py-2 tracking-wide">I&apos;m an aspiring <span className='text-rose-300 underline'>Software Engineer</span></p>
                    <p className="font-mukta text-md text-gray-300 font-semibold py-3 tracking-wide">Currently a student @ SUTD.</p>
                </div>
            <ParisCat/>
            </div>
        </div>
    )
}

export default Main;