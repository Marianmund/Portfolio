import { UnderConstruction } from "./Underconstruction";

export default function Projects() {
    return (
    <>
    <div className="mb-20 flex justify-center flex-col items-center z-20 text-gray-200 text-center min-h-screen min-w-screen max-w-screen transition-all duration-900 ease-in-out uppercase">
        <h1 className="text-3xl mt-30 mb-10 lg:mt-25
        ">
            Projects
        </h1>
        {ProjectOverview()}

        {/* <h1 className="m-0 text-2xl mt-5 mb-0.5">Projects</h1>
        <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed">
                <p className="mb-4">
                    Im Zeitraum vom 26.01.2026 bis zum 06.02.2026 absolvierte ich mein Praktikumkkkkkkk bei der 
                    CSB-System SE in Geilenkirchen. Das Unternehmen befasst sich hauptsächlich mit der 
                    Entwicklung und dem Vertrieb branchenspezifischer ERP-Softwarelösungen für Unternehmen, 
                    insbesondere in der Lebensmittel-, Chemie-, Pharma- und Logistikbranche. Darüber hinaus 
                    bietet es IT-Beratung, Systemintegration sowie technische Dienstleistungen zur Optimierung 
                    betrieblicher Prozesse an.
                </p>
            </section> */}
        </div>
    </>
    )
}

function ProjectOverview(){
    // Projects will be added here in the future, for now there is only one project, which is still under construction.
    const projects = [
        {title: "AI study advisor", img_url:"/Portfolio/AIStudyAdvisor.png", link: "#", description:"AI helper for students to find the right study program based on their interests and skills."},
        {title: "Under Construction", img_url: "https://cdn.pixabay.com/photo/2017/10/26/17/51/under-construction-2891888_1280.jpg", link: "#", description:"This project is currently under construction. Please check back later for updates."},

    ]

    const elements = []

    for (let i = 0; i < projects.length; i++) {
        elements.push(
            <div className="mb-6 lg:mb-14 bg-gray-900 z-19 border-2 m-5 lg:mt-0.5 self-center rounded-4xl border-gray-200 flex flex-col justify-center md:max-w-70 lg:max-w-2xl max-w-xs xl:max-w-4xl overflow-hidden w-1000">               
            {/* Images */}
                <div className="flex justify-center max-h-80 w-full lg:border-none h-60">
                    <img 
                        src={projects[i].img_url} 
                        alt={projects[i].title} 
                        className="w-full object-cover"
                    />
                </div>

            {/* Content */}
                <div className="flex flex-col justify-center items-center text-center p-1 border-t-2">
                    <h1 className="m-0 text-xl mt-5 mb-0.5 place-self-center-safe">
                        {projects[i].title}
                    </h1>

                    <p className="ml-3 mr-3 mb-6">
                        {projects[i].description}
                    </p>
                    <a href={projects[i].link} className="mb-6 hover:cursor-pointer border-t-2 border-t-gray-200 hover:border-t-0 hover:border-b-2 hover:border-b-gray-200 z-30 transition-all ease-linear duration-100">
                        View Project
                    </a>
                </div>

            </div>
        )
    }
    return elements;
}
