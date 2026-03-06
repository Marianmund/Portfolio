import { Day1 } from "../praktikun/Day1";
import { Day2 } from "../praktikun/Day2";
import { Day3 } from "../praktikun/Day3";
import { Day4 } from "../praktikun/Day4";
import { Day5 } from "../praktikun/Day5";
import { Day6 } from "../praktikun/Day6";
import { Day7 } from "../praktikun/Day7";
import { Day8 } from "../praktikun/Day8";
import { Day9 } from "../praktikun/Day9";
import { Day10 } from "../praktikun/Day10";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';


import { useState } from "react";

export default function Praktikum() {
    const days = [
    {title: "Day1", date:"Montag 26.01.2026", content:<Day1 />},
    {title: "Day2", date:"Dienstag 27.01.2026", content:<Day2 />},
    {title: "Day3", date:"Mittwoch 28.01.2026", content:<Day3 />},
    {title: "Day4", date:"Donnerstag 29.01.2026", content:<Day4 />},
    {title: "Day5", date:"Freitag 30.01.2026", content:<Day5 />},
    {title: "Day6", date:"Montag 02.02.2026", content:<Day6 />},
    {title: "Day7", date:"Dienstag 03.02.2026", content:<Day7 />},
    {title: "Day8", date:"Mittwoch 04.02.2026", content:<Day8 />},
    {title: "Day9", date:"Donnerstag 05.02.2026", content:<Day9 />},
    {title: "Day10", date:"Freitag 06.02.2026", content:<Day10 />},
]

    const [day, setDay] = useState(0);

    function daysMinus() {
        if (day > 0){
            setDay(day - 1);
        }
    }

    function daysPlus() {
        if (day < days.length - 1){
            setDay(day + 1);
        }
    }
    

    return (
    <>
      <div className="flex justify-center flex-col items-center z-20 text-gray-200 text-center min-h-screen min-w-screen transition-all duration-900 ease-in-out uppercase">
        <h1 className="text-3xl mt-25">
            Praktikumsbericht <br />- DE / GER -
        </h1>
            <a
                href="/src/praktikun/Praktikumsbericht.pdf"
                target="_blank"
                className="mt-3 hover:cursor-pointer border-t-2 border-t-gray-200 hover:border-t-0 hover:border-b-2 hover:border-b-gray-200 z-30 transition-all ease-linear duration-100"
                >
                View as PDF
                </a>

        {/* 
####################################

        (1.) Einleitung 

####################################        
        */}
        <h1 className="m-0 text-2xl mt-5 mb-0.5">Einleitung</h1>
        <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed">
                <p className="mb-4">
                    Im Zeitraum vom 26.01.2026 bis zum 06.02.2026 absolvierte ich mein Praktikum bei der 
                    CSB-System SE in Geilenkirchen. Das Unternehmen befasst sich hauptsächlich mit der 
                    Entwicklung und dem Vertrieb branchenspezifischer ERP-Softwarelösungen für Unternehmen, 
                    insbesondere in der Lebensmittel-, Chemie-, Pharma- und Logistikbranche. Darüber hinaus 
                    bietet es IT-Beratung, Systemintegration sowie technische Dienstleistungen zur Optimierung 
                    betrieblicher Prozesse an.
                </p>

                <p className="mb-4">
                    Ich entschied mich für diesen Praktikumsplatz, da ich mich für Web- und Softwareentwicklung 
                    interessiere und einen vertieften Einblick in den Arbeitsalltag sowie das Berufsleben in 
                    der IT-Branche erhalten wollte.
                </p>

                <p className="mb-4">
                    Ziel dieses Berichts ist es, meine Tätigkeiten, Erfahrungen und Eindrücke während des 
                    Praktikums darzustellen und abschließend zu reflektieren.
                </p>
            </section>

{/*

####################################

        (2.) Beschreibung des Betriebs 

####################################        
        */}
        <h1 className="m-0 text-2xl mt-5 mb-0.5">Beschreibung des Betriebs</h1>
        <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed">
                <p className="mb-4">
                    Der Betrieb CSB-System SE ist ein international tätiges IT-Unternehmen mit Sitz in 
                    Geilenkirchen. Das Unternehmen entwickelt branchenspezifische ERP-Softwarelösungen 
                    &#40;Enterprise-Resource-Planning-Systeme&#41;, mit denen Betriebe ihre gesamten Geschäfts- 
                    und Produktionsprozesse digital steuern, planen und überwachen können.
                </p>

                <p className="mb-4">
                    Der Schwerpunkt liegt dabei auf prozessintensiven Branchen wie der Lebensmittelindustrie, 
                    Chemieindustrie, Pharmaindustrie sowie Handel und Logistik. Die Software deckt unter anderem 
                    Bereiche wie Warenwirtschaft, Produktionsplanung, Qualitätsmanagement, Lagerverwaltung, 
                    Einkauf, Verkauf, Controlling und Finanzbuchhaltung ab. Ziel ist es, betriebliche Abläufe 
                    effizienter, transparenter und wirtschaftlicher zu gestalten.
                </p>

                <p className="mb-4">
                    Neben der reinen Softwareentwicklung bietet das Unternehmen auch IT-Beratung, Projektplanung 
                    und Systemeinführung an. Dazu gehört die Analyse der bestehenden Prozesse eines Kundenunternehmens, 
                    die individuelle Anpassung der Software an betriebliche Anforderungen sowie die Schulung der 
                    Mitarbeiter. Außerdem übernimmt die Firma Wartung, Support und Weiterentwicklung der Systeme.
                </p>

                <p className="mb-4">
                    Ein weiterer Bestandteil des Betriebs ist die internationale Zusammenarbeit, da 
                    Kunden weltweit betreut werden. Das Unternehmen verbindet also Softwareentwicklung, 
                    betriebswirtschaftliche Beratung und technische Dienstleistungen in einem ganzheitlichen 
                    Konzept.
                </p>
            </section>


{/*
####################################

        (3.) Beschreibung der Berufe

####################################        
        */}
        <h1 className="m-0 text-2xl mt-5 mb-0.5">Beschreibung der Berufe</h1>
        <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed">
                <p className="mb-4">
                    Bei CSB-System SE werden vor allem Berufe im IT-Bereich nachgefragt, zum Beispiel 
                    Softwareentwicklung, Betreuung von IT-Systemen und Datenbanken sowie Beratung zur 
                    Einführung und Optimierung von ERP-Systemen. Weitere Tätigkeiten gibt es im Support, 
                    in Vertrieb und Marketing sowie in der Verwaltung. Die Mitarbeiter arbeiten daran, 
                    Unternehmensprozesse effizient zu gestalten, Softwarelösungen anzupassen und Kunden 
                    bei der Nutzung der Systeme zu unterstützen.
                </p>
            </section>

{/*
####################################

        (4.) Tätigkeitsfeld

####################################        
        */}
        <h1 className="m-0 text-2xl mt-5 mb-0.5">Mein Tätigkeitsfeld</h1>
        <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed">
                <p className="mb-4">
                    Während meines Praktikums nahm ich gemeinsam mit fünf weiteren Praktikanten am POWERUP 
                    Go-IT-Informatikwettbewerb teil. Im Rahmen dieses einwöchigen Projekts arbeiteten wir
                    an einer Wetter-App, die mithilfe der API des Deutschen Wetterdienstes Daten in Echtzeit 
                    anzeigt. Dabei lernten wir den Umgang mit TypeScript, HTML und CSS im Angular-Framework, 
                    einem von Google entwickelten Tool zur Erstellung komplexer Webanwendungen.
                </p>
            </section>


        {/* 
####################################

        (5.) Tagesprotokolle  

####################################        
        */}

        <section className="max-w-full sm:max-w-4xl m-auto px-4 leading-relaxed">    
            <h1 className="m-0 text-2xl mt-5 mb-0.5">Tagesprotokolle</h1>
            <div className="flex items-center justify-center text-xl gap-x-4 mt-2 mb-2">
                <button
                    disabled={day === 0}
                    onClick={daysMinus}
                    className="disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer mr-2 mb-0"
                >
                    <FontAwesomeIcon icon={faCircleArrowDown} rotation={90} />
                </button>

                <h2 className="text-center mt-0 w-45 md:w-75 transition-all duration-300">
                    {days[day].date}
                </h2>

                <button
                    disabled={day === days.length - 1}
                    onClick={daysPlus}
                    className="disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer ml-2"
                >
                    <FontAwesomeIcon icon={faCircleArrowDown} rotation={270} />
                </button>
            </div>

            {days[day].content}

            
        </section>

        {/*
####################################

        (6.) Reflexion / Fazit

####################################        
        */}
        <h1 className="m-0 text-2xl mt-5 mb-0.5">Reflexion</h1>
        <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed">
                <p className="mb-4">
                    Mein zweiwöchiges Praktikum bei der CSB-System SE war eine sehr lehrreiche Erfahrung, 
                    die mir viele neue Einblicke in den Bereich Softwareentwicklung gegeben hat. Auch wenn 
                    ich bereits Erfahrungen in HTML, CSS, JavaScript und ReactJS mitbrachte, konnte ich 
                    während des Praktikums mein Wissen erheblich erweitern. Besonders der Umgang mit 
                    TypeScript und Angular hat mir gezeigt, wie komplexe Webanwendungen strukturiert 
                    aufgebaut werden und wie wichtig saubere, typisierte Programmierung für die 
                    Fehlervermeidung ist.
                </p>
                <p className="mb-4">
                    Darüber hinaus konnte ich meine Fähigkeiten im Design von Benutzeroberflächen 
                    weiterentwickeln. Obwohl ich zuvor schon Layouts erstellt hatte, habe ich gelernt, 
                    wie wichtig Details wie Abstände, Icons oder Übersichten sind, um eine App 
                    benutzerfreundlich und übersichtlich zu gestalten. Auch das Arbeiten mit 
                    Mockdaten und das Testen von Funktionen hat mir einen guten Einblick gegeben, 
                    wie man Features Schritt für Schritt implementiert und prüft.
                </p>
                <p className="mb-4">
                    Rückblickend hat mir das Praktikum gezeigt, dass mir die Arbeit in der 
                    Softwareentwicklung sehr liegt. Ich habe nicht nur fachlich viel dazu gelernt, 
                    sondern auch erkannt, wie sehr mir die Kombination aus technischem Arbeiten und kreativer 
                    Gestaltung Spaß macht.
                </p>
                <p className="mb-4">
                    Insgesamt hat mir das Praktikum bestätigt, dass ich mich in diesem Berufszweig 
                    weiterentwickeln möchte. Die zwei Wochen haben mir gezeigt, wie praxisnah die 
                    Arbeit in einem IT-Unternehmen ist, wie viele Herausforderungen es gibt und wie 
                    befriedigend es sein kann, am Ende ein funktionierendes Produkt in den Händen zu 
                    halten. Ich fühle mich motiviert, die erlernten Fähigkeiten weiter auszubauen und 
                    in zukünftigen Projekten sowohl technisch als auch organisatorisch Verantwortung 
                    zu übernehmen.
                </p>
            </section>
        


    </div>
    </>
    )
}