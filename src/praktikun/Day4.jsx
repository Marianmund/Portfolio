import "../index.css"

export function Day4() {
    return (
    <>
        {/* Jeder Abschnitt 1 P tag*/}
        <p className="mb-4">
            Am vierten Tag arbeiteten wir an einer detaillierten Informationsansicht 
            der Wetterdaten. Diese sollte sowohl eine Tagesübersicht 
            als auch eine Wochenübersicht enthalten.
        </p>
        <p className="mb-4">
            Informationsbalken, in denen verschiedene Daten dargestellt werden 
            sollten, beispielsweise Uhrzeit, Temperatur und Windrichtung. Zusätzlich 
            wurden passende Symbole integriert. Die Anzeige der Windrichtung wurde 
            über unterschiedliche CSS-Klassen gesteuert, die je nach Datenwert 
            verändert werden konnten.
        </p>
        <p className="mb-4">
            Zum Testen verwendeten wir zunächst Mockdaten, also künstlich 
            erzeugte Testdaten. Mithilfe der Angular-Struktur *ngFor konnten 
            die Balken automatisch in der passenden Anzahl erzeugt und 
            angezeigt werden.
        </p>
        <p className="mb-4">
            Außerdem begann ich mit der Gestaltung der Suchfunktion, über die 
            später verschiedene Wetterstationen ausgewählt werden sollten. 
            Parallel dazu programmierte mein Teampartner Fabian eine erste 
            Version der Suche. Diese funktionierte grundsätzlich, erwies sich 
            jedoch später als problematisch und musste noch überarbeitet werden.
        </p>
    </>
    )
}