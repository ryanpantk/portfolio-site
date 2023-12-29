import React from 'react';
import { SocialIcon } from "react-social-icons";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  

const Contact = () => {
    return (
		<div id="contact" className='w-full flex items-center justify-center mb-12'>
            <div className='flex flex-col'>
                <div className="flex flex-row justify-evenly items-center space-x-5">
                    <SocialIcon
                        className="contactButton"
                        url="https://www.linkedin.com/in/ryanpantk/"
                        fgColor="white"
                        bgColor="transparent"
                        style={{ height: 84, width: 84 }}
                    />
                    <SocialIcon
                        className="contactButton"
                        url="https://github.com/ryanpantk"
                        fgColor="white"
                        bgColor="transparent"
                        style={{ height: 84, width: 84 }}
                    />
                    <SocialIcon
                        className="contactButton"
                        url="mailto:ryanpantk@gmail.com"
                        fgColor="white"
                        bgColor="transparent"
                        style={{ height: 84, width: 84 }}
                    />
                </div>
                <div className='flex justify-center items-center text-sm text-slate-400 mt-4'>
                    <p>Updated on Dec 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;