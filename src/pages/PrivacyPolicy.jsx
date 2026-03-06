export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center flex-col items-center z-20 text-gray-200 text-center min-h-screen min-w-screen uppercase">
      <h1 className="text-3xl mt-25">Datenschutzerklärung</h1>

      <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed normal-case text-left mt-5">

        <p className="mb-4">
          Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Diese Website dient ausschließlich
          der Darstellung meines Portfolios. Es werden grundsätzlich keine personenbezogenen Daten automatisch
          erfasst oder gespeichert.
        </p>

        <h2 className="text-xl mt-6 mb-2">1. Verantwortlicher</h2>
        <p className="mb-4">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          <br /><br />
          Marian Mund<br />
          E-Mail: marian@fit-for-fire.eu
        </p>

        <h2 className="text-xl mt-6 mb-2">2. Hosting</h2>
        <p className="mb-4">
          Diese Website wird über einen externen Hosting-Anbieter bereitgestellt. Beim Besuch der Website
          können technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs oder Browsertyp)
          durch den Hostinganbieter verarbeitet werden, um den sicheren Betrieb der Website zu gewährleisten.
        </p>

        <h2 className="text-xl mt-6 mb-2">3. Kontaktformular</h2>
        <p className="mb-4">
          Wenn Sie mich über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten
          (z. B. Name, E-Mail-Adresse und Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
          Diese Daten werden nicht an Dritte weitergegeben und nur so lange gespeichert, wie es für die
          Bearbeitung der Anfrage erforderlich ist.
        </p>

        <h2 className="text-xl mt-6 mb-2">4. Keine Analyse-Tools</h2>
        <p className="mb-4">
          Auf dieser Website werden keine Tracking- oder Analyse-Tools wie Google Analytics verwendet.
        </p>

        <h2 className="text-xl mt-6 mb-2">5. Ihre Rechte</h2>
        <p className="mb-4">
          Sie haben jederzeit das Recht auf Auskunft über die von Ihnen gespeicherten personenbezogenen Daten,
          deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Außerdem haben Sie ein Recht auf
          Berichtigung oder Löschung dieser Daten.
        </p>

      </section>
    </div>
  );
}