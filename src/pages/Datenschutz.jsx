import { useEffect } from 'react';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '30px 0', textAlign: 'left' }}>
      <div className="container">
        <h3>Datenschutzerklärung</h3>
        <br />

        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
          1. Verantwortlicher
        </h4>
        <p style={{ fontWeight: '400' }}>
          Verantwortlich für diese Website ist:
          <br />
          <br />
          Ekaterina Lopez Alvarez
          <br />
          <br />
          Phisio an der Enz
          <br />
          <br />
          An de Enz 3, 75223 Niefern-Öschelbronn
          <br />
          <br />
          E-Mail: info@padenz.de
          <br />
          <br />
          Telefon: 07233 942 6463
        </p>
        <br />
        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
          2. Zweck der Website
        </h4>
        <br />
        <p style={{ fontWeight: '400' }}>
          Unsere Website dient ausschließlich der Bereitstellung von
          Informationen über unsere physiotherapeutische Praxis. Sie verfolgt
          keine kommerziальных Zwecke und ist rein informativ gestaltet.
        </p>
        <br />
        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
          3. Erhebung und Verarbeitung von Daten
        </h4>
        <br />
        <p style={{ fontWeight: '400' }}>
          Diese Website erhebt keine personenbezogenen Daten von Besuchern. Es
          werden weder Cookies noch Tracking-Tools oder Analyseprogramme
          verwendet. Es gibt keine Kontaktformulare oder andere Funktionen, die
          eine Eingabe personenbezogener Daten erfordern.
        </p>
        <br />
        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
          4. Server-Logfiles
        </h4>
        <br />
        <p style={{ fontWeight: '400' }}>
          Beim Besuch unserer Website können durch den Hosting-Anbieter Host
          Europe automatisch technische данные wie IP-Adressen, Datum und
          Uhrzeit des Zugriffs oder der verwendete Browsertyp in Server-Logfiles
          gespeichert werden. Diese Daten werden nicht mit Personen verknüpft
          und dienen ausschließlich der technischen Bereitstellung der Website.
          Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. f GDPR
          (berechtigtes Interesse). Die Daten werden nach Ablauf der
          gesetzlichen Aufbewahrungsfrist gelöscht.
        </p>
        <br />
        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
          5. Weitergabe von Daten
        </h4>
        <br />
        <p style={{ fontWeight: '400' }}>
          Eine Weitergabe personenbezogener Daten an Dritte findet nicht statt.
        </p>
        <br />
        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>6. Ihre Rechte</h4>
        <br />
        <p style={{ fontWeight: '400' }}>
          Auch wenn wir keine personenbezogenen Daten aktiv erheben, haben Sie
          gemäß GDPR folgende Rechte: Recht auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung sowie Widerspruch gegen die
          Verarbeitung. Bei Fragen oder Anliegen wenden Sie sich bitte an die
          oben genannte Kontaktadresse.
        </p>
        <br />
        <h4 style={{ fontSize: '20px', fontWeight: '500' }}>
          7. Änderungen dieser Datenschutzerklärung
        </h4>
        <br />
        <p style={{ fontWeight: '400' }}>
          Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
          anzupassen, um sie an rechtliche oder technische Entwicklungen
          anzupassen.
        </p>
      </div>
    </div>
  );
};

export default Datenschutz;
