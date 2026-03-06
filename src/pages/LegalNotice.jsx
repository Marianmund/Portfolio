export default function LegalNotice() {
  return (
    <div className="flex justify-center flex-col items-center z-20 text-gray-200 text-center min-h-screen min-w-screen uppercase">
      <h1 className="text-3xl mt-25">Impressum</h1>

      <section className="max-w-full sm:max-w-4xl mx-auto ml-3 mr-3 px-4 leading-relaxed normal-case text-left mt-5">

        <h2 className="text-xl mb-2">Angaben gemäß § 5 TMG</h2>

        <p className="mb-4">
          Marian Mund<br />
          Brabantstr. 12<br />
          52531 Übach-Palenberg<br />
          Deutschland
        </p>

        <h2 className="text-xl mt-6 mb-2">Kontakt</h2>

        <p className="mb-4">
          E-Mail: m.mund@cmg365.de
        </p>

        <h2 className="text-xl mt-6 mb-2">Haftung für Inhalte</h2>

        <p className="mb-4">
          Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.
        </p>

        <h2 className="text-xl mt-6 mb-2">Haftung für Links</h2>

        <p className="mb-4">
          Meine Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
          Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
        </p>

        <h2 className="text-xl mt-6 mb-2">Urheberrecht</h2>

        <p className="mb-4">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
        </p>

      </section>
    </div>
  );
}