"use client";

import { MotionValue } from 'framer-motion'
import '../../globals.css'
import { motion, useScroll } from "framer-motion"


function Logo(props: {label: string, hrefLink: string}) {
    return (
    <a href={props.hrefLink} className="flex items-center mr-auto">
        <span className="font-bold font text-2xl ml-3 pl-1 pr-1 text-rose-300">{props.label}</span>
    </a>
    )
}

function NavItem(props: {label: string, hrefLink: string}) {
    return (
    <li>
        <a href={props.hrefLink} className=" hover:text-rose-300 py-3 px-4 text-slate-400 text-sm font-medium rounded-full relative after:bg-rose-300 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            {props.label}
        </a>
    </li>
    )
}

const NavBar = (props: {scaleX: MotionValue<any>}) => {
    return (
        <nav className="fixed w-full backdrop-filter backdrop-blur-sm bg-gray-200 bg-opacity-20 shadow-md z-50">
            {/* Navigation Bar */}
            <div className="flex flex-wrap px-8 py-3">
                {/* Name Logo */}
                <Logo label="RP" hrefLink="https://ryanpantk.github.io/portfolio-site/" />
                {/* Buttons */}
                <div className="items-center justify-end hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col md:space-x-4 md:flex-row md:mt-0 md:border-0">
                        <NavItem label="Main" hrefLink="#main" />
                        <NavItem label="About" hrefLink="#about" />
                        <NavItem label="Projects" hrefLink="#projects" />
                        <NavItem label="Skills" hrefLink="#skills" />
                        <NavItem label="Contact" hrefLink="#contact" />
                    </ul>
                </div>
            </div>
            {/* Progress Bar */}
            <motion.div className='progress-bar bg-rose-300 bg-opacity-70 h-1' style={{ scaleX: props.scaleX }} />
        </nav>
    )
}

export default NavBar;