import React from 'react';
import ParisCat from './ParisCat';

const Main = () => {
    return (
		<div id="main" className="bg">
			<div className="h-screen flex justify-start items-center px-28">
                <div className='mr-auto pl-28'>
                    <p className="font-mukta text-4xl text-gray-800 font-semibold tracking-wide">Hello! I am <span className='text-slate-200'>Ryan Pan</span></p>
                    <p className="font-mukta text-2xl text-gray-800 font-semibold py-2 tracking-wide">I&apos;m an aspiring <span className='text-slate-200'>Software Engineer</span></p>
                    <p className="font-mukta text-sm text-gray-800 font-semibold py-3 tracking-wide">Currently a student @ SUTD.</p>
                </div>
            <ParisCat/>
            </div>
        </div>
    )
}

export default Main;