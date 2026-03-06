import "../index.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import ScrollArrow from "../components/Scrollarrow";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug, faPeopleGroup, faPencil } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faHtml5, faCss3Alt, faTailwindCss, faJs, faReact, faTypescript, faJava } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      {/* Title Screen */}
      <div className="flex justify-center flex-col items-center z-20 text-gray-200 text-center h-screen min-w-screen transition-all duration-900 ease-in-out uppercase ">
        {/* Social Icons */}
        <ul className="flex flex-row items-center text-shadow-black text-4xl p-2 m-5 mb-0 -mt-8 gap-4 z-10">
          <li>
            <a
              href="https://github.com/Marianmund"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 hover:drop-shadow-[0_0_17px_rgba(107,114,128,0.7)] transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/marixn.m?igsh=MXRkbTZkb2J4MGFsNw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 hover:drop-shadow-[0_0_15px_rgba(219,39,119,0.8)] transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:drop-shadow-[0_0_19px_rgba(37,99,235,0.6)] transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>

        {/* Title */}
        <div className="flex flex-col items-center text-shadow-black text-6xl m-5 mb-0 -mt-0.5">
          <h1 className="mb-0 pb-0">Marian Mund</h1>
        </div>

        {/* Subtitle */}
        <div className="m-0 text-2xl mt-0.5">
          <h2>Student</h2>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center z-20 text-gray-200 text-center h-screen min-w-screen transition-all duration-900 ease-in-out uppercase">
        <h1 className="m-0 text-2xl">Who Am I?</h1>
        <h2 className="max-w-75">
          I’m a creative person who enjoys building modern applications
          with a strong focus on intuitive user experience and clean design.
          As a student, I’m constantly learning, improving, and refining my skills.
        </h2>

        <Link to="/about" className="mt-3 hover:cursor-pointer border-t-2 border-t-gray-200 hover:border-t-0 hover:border-b-2 hover:border-b-gray-200 z-30 transition-all ease-linear duration-100">
          <h2>
            About me
          </h2>
        </Link>


        <h1 className="m-0 text-2xl mt-14">Core Skills</h1>
            {/* SKILLS LIST */}
                  <ul className="mt-2 flex flex-row max-w-75 gap-3 text-5xl text-center items-center justify-center">
                    <li>
                      <FontAwesomeIcon icon={faHtml5} />
                      <h2 className="text-xs mt-0.5">HTML</h2>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCss3Alt} />
                      <h2 className="text-xs mt-0.5">CSS</h2>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTailwindCss} />
                      <h2 className="text-xs mt-0.5">Tailwind</h2>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faJs} />
                      <h2 className="text-xs mt-0.5">JS</h2>
                    </li>
                  </ul>

          <h1 className="m-0 text-2xl mt-14">Currently Learning</h1>
            {/* LEarning LIST */}
                  <ul className="mt-2 flex flex-row max-w-75 gap-3 text-5xl text-center items-center justify-center">
                    <li>
                      <FontAwesomeIcon icon={faReact} />
                      <h2 className="text-xs mt-0.5">React</h2>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faJava} />
                      <h2 className="text-xs mt-0.5">Java</h2>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTypescript} />
                      <h2 className="text-xs mt-0.5">TS</h2>
                    </li>
                  </ul>
          <h1 className="m-0 text-2xl mt-14">Soft Skills</h1>
            {/* LEarning LIST */}
                  <ul className="mt-2 flex flex-row max-w-75 gap-3 text-3xl text-center items-center justify-center">
                    <li>
                      <FontAwesomeIcon icon={faBug} />
                      <h2 className="text-xs mt-0.5">Problem Solving</h2>
                    </li>
                    <li className="">
                      <FontAwesomeIcon icon={faPencil} />
                      <h2 className="text-xs mt-0.5">Creative</h2>
                    </li>
                    <li className="">
                      <FontAwesomeIcon icon={faPeopleGroup} />
                      <h2 className="text-xs mt-0.5">Collaboration</h2>
                    </li>
                    
                  </ul>
      </div>

      <ScrollArrow />
    </>
  );
}
