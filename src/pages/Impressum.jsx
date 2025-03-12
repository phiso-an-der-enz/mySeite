import { useEffect } from 'react';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ textAlign: 'left', padding: '20px 0' }}>
      <div className="container">
        <h3>Impressum</h3>
        <br />
        <h5 style={{ fontSize: '18px', fontWeight: '600' }}>
          Phisio an der Enz
        </h5>
        <br />
        <p>An de Enz 3</p>
        <p>75223 Niefern-Öschelbronn</p>
        <br />
        <p>Tel: 07233 942 6463</p>
        <br />
        <p>Email: info@padenz.de</p>
        <br />
        <br />
        <br />
        <h2 style={{ fontSize: '24px', fontWeight: '700' }}>
          Haftungsausschluss (Disclaimer)
        </h2>
        <br />
        <h3>Haftung für Inhalte</h3>
        <p>
          Wir sind gemäß § 7 Abs. 1 TMG als Diensteanbieter für eigene Inhalte
          auf diesen Seiten verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch
          nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen ständig zu überwachen oder nach Hinweisen auf
          rechtswidrige Tätigkeiten zu suchen.
          <br />
          <br />
          Falls uns konkrete Rechtsverletzungen bekannt werden, entfernen wir
          entsprechende Inhalte unverzüglich. Eine Haftung ist erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
        </p>
        <br />
        <h3>Haftung für Links</h3>
        <br />
        <p>
          Unser Internetangebot enthält Links zu externen Webseiten Dritter. Auf
          deren Inhalte haben wir keinen Einfluss und übernehmen daher keine
          Gewähr. Für die Inhalte der verlinkten Seiten ist der jeweilige
          Betreiber verantwortlich.
          <br />
          <br />
          Zum Zeitpunkt der Verlinkung haben wir die externen Seiten auf
          mögliche Rechtsverstöße überprüft. Eine dauerhafte Kontrolle ist ohne
          konkrete Hinweise auf Rechtsverstöße nicht möglich. Sollten wir von
          solchen Kenntnis erhalten, werden wir die Links umgehend entfernen.
        </p>
        <br />
        <h3>Urheberrecht</h3>
        <br />
        <p>
          Die auf dieser Webseite veröffentlichten Inhalte unterliegen dem
          deutschen Urheberrecht. Jede Vervielfältigung, Bearbeitung oder
          Verbreitung außerhalb der gesetzlichen Grenzen bedarf der vorherigen
          Zustimmung des Rechteinhabers.
          <br />
          <br />
          Sollten Sie auf eine Urheberrechtsverletzung aufmerksam werden, bitten
          wir um einen entsprechenden Hinweis. Wir werden betroffene Inhalte
          schnellstmöglich entfernen.
        </p>
      </div>
    </div>
  );
};
export default Impressum;
