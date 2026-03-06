import { UnderConstruction } from "./Underconstruction";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Experience() {
    return (
    <>
        <div className="flex justify-center flex-col items-center z-20 text-gray-200 text-center h-screen min-w-screen transition-all duration-900 ease-in-out uppercase">
            <Link to="/praktikum" className="mt-3 hover:cursor-pointer border-t-2 border-t-gray-200 hover:border-t-0 hover:border-b-2 hover:border-b-gray-200 z-30 transition-all ease-linear duration-100">
                <h2>
                    Praktikumsbericht - DE
                </h2>
            </Link>
        </div>

        <UnderConstruction />
    </>
    )
}