import "../index.css"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <div className="text-gray-200 flex flex-col items-center justify-center text-center w-screen mt-30">
            <div className="h-0.5 bg-gray-200 w-30"></div>

            <div className="flex flex-col m-5 mb-0">
                <h2 className="items-center text-shadow-black text-xl">You know where to find me</h2>
                <h1 className="items-center text-shadow-black text-3xl">m.mund@cmg365.de</h1>
                <h2 className="items-center text-shadow-black text-xl">Marian Mund</h2>
            </div>

            <div className="mt-25">
                <div className="flex flex-row justify-evenly gap-5 z-300">
                        <Link to="/privacy-policy" className="hover:cursor-pointer hover:underline">
                            Privacy Policy
                        </Link>

                        <Link to="/legal-notice" className="hover:cursor-pointer hover:underline">
                            Legal Notice
                        </Link>
                </div>
            </div> 

            <div className="mt-3 mb-4">
                <h2>© 2026 Marian Mund. All rights reserved.</h2>
            </div>

        </div>
    )
}