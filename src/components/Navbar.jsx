import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFolder, faBriefcase, faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="flex flex-row self-center justify-center items-center fixed top-0.5  z-50 min-w-screen">
            <ul className="
                bg-gray-700 
                gray-100 
                flex 
                flex-row 
                self-center 
                justify-center 
                items-center
                gap-2 
                rounded-xl 
                m-2
                p-1 
                w-68 
                h-14 
                bg-opacity-10 
                md:bg-opacity-10
                z-100000">
                <CustomLink to="/">
                    <FontAwesomeIcon icon={faHouse} />
                </CustomLink>
                <CustomLink to="/projects">
                    <FontAwesomeIcon icon={faFolder} />
                </CustomLink>
                <CustomLink to="/experience">
                    <FontAwesomeIcon icon={faBriefcase} />
                </CustomLink>
                <CustomLink to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </CustomLink>
                <CustomLink to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                </CustomLink>
            </ul>
        </nav>
        
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <Link to={to} {...props} className={isActive ? "active navbutton" : "inactive navbutton"}>
            <li >
                {children}
            </li>
        </Link>
        
    )
}