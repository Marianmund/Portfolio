import "../index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';

export function UnderConstruction() {
    return (
        <div className="flex place-items-center justify-center min-h-screen">
            <div className="flex flex-row justify-center text-gray-200 items-center mt-30 mb-30 w-92">
                <div className="m-5 text-6xl"><FontAwesomeIcon icon={faHelmetSafety} /></div>
                <div>
                    <h1 className="flex flex-col text-shadow-black text-2xl mb-0">Under Construction!</h1>
                    <h2 className="m-0 text-s">This is currently being developed.</h2>
                </div>
            </div>
        </div>
    )
}
