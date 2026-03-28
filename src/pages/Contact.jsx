import { UnderConstruction } from "./Underconstruction";

export default function Contact() {
    return (
    <>
        <div className="min-h-screen min-w-screen max-w-screen lg:min-w-110  -mt-15 mb-30 lg:mt-0 lg:mb-20 flex justify-center align-center flex-col items-center z-20 text-gray-200 text-center  transition-all duration-900 ease-in-out uppercase ">
            <h1 className="text-3xl lg:min-w-110 mt-30 mb-4 lg:mt-25 min-w-80 text-left mr-20 ml-20">
           
                Contact Me 
            </h1>
            <section className="min-w-87 lg:min-w-110 lg:max-w-400 mx-auto px-4 leading-relaxed mr-20 ml-20">
                <form>
                    {/* Name and Email */}
                    <div className="mb-4">
                        <input type="text" id="name" className="" placeholder=" " required/>
                        <label htmlFor="name" className="text-gray-200 ">Name</label>
                    </div>
                    <div className="mb-4">
                        <input type="email" id="email" className="text-gray-200" placeholder=" " />
                        <label htmlFor="email" className="">Email</label>
                    </div>

                    {/* Title */}
                    <div className="mb-4">  
                        <input type="text" id="subject" className="text-gray-200" placeholder=" " />
                        <label htmlFor="subject" className="">Subject</label>
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                        <textarea id="message" className="text-gray-200" placeholder=" " rows="5"></textarea>
                        <label htmlFor="message" className="">Message</label>
                    </div>
        
                    <button type="submit" onClick={sendAlert} className="cursor-pointernter  align-self-start bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300 transition-colors duration-300">
                        Send Message
                    </button>
                </form>
            </section>

        </div>
        
    </>
    )
}

function sendAlert(event) {
    event.preventDefault(); 
    alert("This form is currently not functional. Please contact me via email at m.mund@cmg365.de");
}