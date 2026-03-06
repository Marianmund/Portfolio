import "../index.css"

export function Day9() {
    return (
    <>
        {/* Jeder Abschnitt 1 P tag*/}
        <p className="mb-4">
            An diesem Tag besuchten wir die CSB Smart Factory, 
            wo die Maschinen, die später in großen Produktionen 
            verwendet werden, gebaut werden.
        </p>
        <p className="mb-4">
            Im ersten Raum befand sich ein Showroom, in dem verschiedene 
            spezialisierte Computer und technische Geräte ausgestellt 
            waren. Diese werden beispielsweise in Branchen wie der 
            Viehzucht oder in Metzgereien eingesetzt.
        </p>
        <p className="mb-4">
            Anschließend besichtigten wir eine große Halle mit verschiedenen 
            industriellen Anlagen. Dort gab es unter anderem Förderbänder, 
            Barcode-Systeme, Scanner und Messgeräte, die beispielsweise 
            bei der Verarbeitung von Fleisch eingesetzt werden. Einige 
            Geräte konnten sogar Fett- und Fleischanteile bei Tieren 
            wie Schweinen, Kühen oder Pferden analysieren.
        </p>
        <p className="mb-4">
            Parallel dazu arbeiteten wir weiterhin an unserer Anwendung. 
            Ein Schwerpunkt lag darauf, dass beim Anklicken einer 
            Wetterstation aus der Favoritenliste automatisch die detaillierte 
            Ansicht mit den passenden Daten geöffnet wird. Diese Funktion 
            erwies sich als relativ kompliziert und erforderte viel Trial-and-Error. 
            Aufgrund von Problemen mit der API funktionierte die Verbindung 
            zu den realen Daten noch nicht vollständig.
        </p>
    </>
    )
}