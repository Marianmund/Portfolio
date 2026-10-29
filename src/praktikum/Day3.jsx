import "../index.css"

export function Day3() {
    return (
    <>
        {/* Jeder Abschnitt 1 P tag*/}
        <p className="mb-4">
            Am dritten Tag erhielten wir einen ersten Einblick in das 
            eigentliche Programmprojekt. Für den Zugriff auf die Wetterdaten 
            wurde die API des Deutschen Wetterdienstes &#40;DWD&#41; verwendet. 
            Diese war bereits in Form einer C#-Anwendung vorbereitet.

        </p>
        <p className="mb-4">
            Dabei wurde uns erklärt, dass der Zugriff über einen Proxy-Server 
            erfolgen muss, da der Deutsche Wetterdienst sonst den Zugriff 
            als möglichen Hackerangriff interpretieren könnte.
        </p>
        <p className="mb-4">
            Anschließend begannen wir mit der Gestaltung der Benutzeroberfläche 
            unserer Wetter-App. Zunächst konzentrierten wir uns ausschließlich 
            auf das Design mit HTML und CSS, ohne bereits Funktionen zu 
            implementieren. Dabei entwickelte ich die Startseite &#40;Mainpage Component&#41; 
            der Anwendung. Auf dieser Seite sollte unter anderem ein als 
            Favorit gespeicherter Wetterstandort mit einer groben Übersicht 
            der aktuellen Wetterdaten angezeigt werden.
        </p>
        <p className="mb-4">
            Ein großer Teil der Zeit wurde für das genaue Anpassen der 
            Abstände und des Layouts verwendet, damit die Oberfläche 
            möglichst ordentlich und übersichtlich wirkt. Rückblickend 
            nahm dieser Teil mehr Zeit in Anspruch als geplant.
        </p>
        <p className="mb-4">
            Nach der Mittagspause half ich einer anderen Gruppe bei der Behebung 
            von Fehlern im Menübereich der Anwendung. Die Gruppe bestand aus 
            jüngeren und weniger erfahrenen Teilnehmern, weshalb ich sie bei einigen 
            technischen Problemen unterstützen konnte.
        </p>
    </>
    )
}