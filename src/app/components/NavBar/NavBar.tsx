import '../../globals.css'


function Logo(props: {label: string, hrefLink: string}) {
    return (
    <a href={props.hrefLink} className="flex items-center mr-auto">
        <span className="font-bold font text-2xl ml-3 pl-1 pr-1">{props.label}</span>
    </a>
    )
}

function NavItem(props: {label: string, hrefLink: string}) {
    return (
    <li>
        <a href={props.hrefLink} className=" hover:text-black py-3 px-4 text-gray-800 text-sm font-medium rounded-full relative after:bg-black after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            {props.label}
        </a>
    </li>
    )
}

const NavBar = () => {
    return (
        <nav className="fixed w-full backdrop-filter backdrop-blur-sm bg-gray-200 bg-opacity-20 shadow-md z-50 top-0 start-0">
            <div className="flex flex-wrap px-8 py-3">
                <Logo label="RP" hrefLink="https://ryanpantk.github.io/portfolio-site/" />
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
        </nav>
    )
}

export default NavBar;