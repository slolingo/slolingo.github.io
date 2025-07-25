import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import About from './components/About'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-slolingo">
        <Header />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Features />
              <Download />
              <About />
            </motion.div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<div className="pt-20 px-4 py-8"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Datenschutz</h1><p className="text-body">Datenschutzrichtlinien werden hier angezeigt...</p></div>} />
          <Route path="/impressum" element={<div className="pt-20 px-4 py-8 max-w-2xl mx-auto relative"><button onClick={() => window.location.href = '/'} aria-label="Schließen" className="absolute top-4 right-4 bg-white text-slolingo-primaryText rounded-full shadow p-2 hover:bg-gray-100 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Impressum</h1><div className="text-body space-y-4"><p>slolingo ist eine digitale Lern-App, die man herunterladen kann.<br/>Betreiber und Verantwortlicher im Sinne des Datenschutzes ist Artikel-VII-Kulturverein für Steiermark - Pavelhaus.<br/>Bei Fragen zum Datenschutz kannst du uns unter <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a> schreiben.<br/>Unseren Datenschutzbeauftragten kannst du unter folgenden Kontaktdaten erreichen:</p><ul className="list-disc ml-6"><li>E-Mail: <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a></li><li>Artikel-VII-Kulturverein für Steiermark - Pavelhaus<br/>Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/><a href="https://pavelhaus.at/" className="underline text-slolingo-orange" target="_blank" rel="noopener noreferrer">https://pavelhaus.at/</a><br/>Laafeld 30<br/>A-8490 Bad Radkersburg<br/>Tel/Fax: +43 3476 / 3862<br/>ZVR 141781065</li></ul><div className="mt-8 flex items-center gap-4"><span>Das Projekt slolingo wurde finanziert vom</span><img src="/bka-logos/bka-logo-ger.svg" alt="Bundeskanzleramt Österreich" className="h-8 inline" /></div></div><div className="flex justify-center mt-12"><button onClick={() => window.location.href = '/'} className="bg-slolingo-orange text-white font-apfel-medium px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors text-lg flex items-center gap-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' /></svg>Zurück zur Startseite</button></div></div>} />
          <Route path="/datenschutz" element={<div className="pt-20 px-4 py-8 max-w-2xl mx-auto"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Datenschutz</h1><div className="text-body space-y-8">
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">1. Allgemeines</h2>
    <p>slolingo ist eine digitale Lern-App, die man herunterladen kann.</p>
    <p>Betreiber und Verantwortlicher im Sinne des Datenschutzes ist:</p>
    <address className="not-italic mb-2">
      <strong>Artikel-VII-Kulturverein für Steiermark - Pavelhaus</strong><br/>
      Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/>
      <a href="https://pavelhaus.at/" className="underline text-slolingo-orange" target="_blank" rel="noopener noreferrer">https://pavelhaus.at/</a><br/>
      Laafeld 30<br/>
      A-8490 Bad Radkersburg<br/>
      Tel/Fax: +43 3476 / 3862<br/>
      ZVR 141781065
    </address>
    <p>Bei Fragen zum Datenschutz kannst du uns unter <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a> schreiben.</p>
    <p>Unseren Datenschutzbeauftragten kannst du unter folgenden Kontaktdaten erreichen:</p>
    <ul className="list-disc ml-6 mb-2">
      <li>E-Mail: <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a></li>
      <li>Adresse wie oben</li>
    </ul>
    <p>Der Schutz deiner Daten ist uns besonders wichtig. Wir sammeln so wenig Daten wie möglich, löschen diese automatisch bei Inaktivität, speichern diese nur auf sicheren Servern in Europa und geben sie nicht an Dritte weiter.</p>
  </section>
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">2. Welche Daten speichert slolingo?</h2>
    <p>Wenn du slolingo nutzt, werden bestimmte Nutzungsdaten zunächst lokal auf deinem Gerät gespeichert und, sobald eine Internetverbindung besteht, mit unserem Server synchronisiert, damit du deinen Account problemlos auf mehreren Geräten verwenden kannst.</p>
    <ul className="list-disc ml-6">
      <li>Lernfortschritt</li>
      <li>Benutzername</li>
      <li>Spielergebnisse</li>
      <li>E‑Mail‑Adresse (falls du sie freiwillig angibst, um dein Konto im Bedarfsfall wiederherstellen zu können)</li>
    </ul>
    <p>Wir erfassen keine IP‑Adressen oder sonstige Metadaten, damit du anonym bleibst.</p>
  </section>
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">3. Wofür werden diese Daten gespeichert?</h2>
    <p>Die gespeicherten Daten werden ausschließlich dazu verwendet, um dir slolingo anbieten zu können, um dir bei Problemen mit slolingo helfen zu können, und um slolingo nach den Bedürfnissen unserer Nutzer/innen weiterzuentwickeln.</p>
  </section>
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">4. Wie lange werden die Daten gespeichert?</h2>
    <p>Deine Nutzerdaten bleiben gespeichert, solange du Slolingo verwendest. Du kannst deinen Account jederzeit löschen; dabei werden alle zugehörigen Daten endgültig entfernt.</p>
  </section>
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">5. Gibt slolingo Daten an Dritte weiter?</h2>
    <p>Wir geben deine Daten nicht an Dritte weiter. Eine Übermittlung erfolgt nur, wenn du vorher ausdrücklich zugestimmt hast oder eine gesetzliche Pflicht dazu besteht. Slolingo verwendet keine Integrationen von Google, Facebook, Amazon oder anderen externen Diensten; deine Daten bleiben ausschließlich auf unseren Servern.</p>
  </section>
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">6. Wie wird deine Sicherheit gewährleistet?</h2>
    <p>Sämtliche Daten werden ausschließlich auf Servern in der EU gespeichert und verschlüsselt übertragen. Die Rechenzentren erfüllen höchste Sicherheitsstandards und sind nach DIN ISO/IEC 27001 zertifiziert.</p>
    <p>Zugleich sollte sich der/die Nutzer/in der Tatsache bewusst sein, dass aufgrund ständig neu auftauchender Viren und anderer Mittel zum Angriff auf gesicherte Datensysteme von Internet-Diensten ein hundertprozentiger Schutz vor Angriffen nicht gewährleistet werden kann.</p>
  </section>
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">7. Deine Rechte</h2>
    <p>Jede/r Nutzer/in hat das Recht, kostenlos Auskunft über die zu seiner Person gespeicherten personenbezogenen Daten zu erhalten. Schicke uns bitte eine E-Mail an <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a> mit folgenden Angaben zu deiner Identifizierung:</p>
    <ul className="list-disc ml-6 mb-2">
      <li>Benutzername</li>
      <li>Anmelde-Code</li>
      <li>Name</li>
      <li>E-Mail-Adresse</li>
    </ul>
    <p>Um deine auf deinen Geräten gespeicherten Nutzerdaten zu löschen, kannst du slolingo deinstallieren oder in der App unter Einstellungen auf Abmelden klicken und dort das zu löschende Nutzerprofil auswählen.</p>
  </section>
  <div className="flex justify-center mt-12">
    <button onClick={() => window.location.href = '/'} className="bg-slolingo-orange text-white font-apfel-medium px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors text-lg flex items-center gap-2">
      <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' /></svg>
      Zurück zur Startseite
    </button>
  </div>
</div></div>} />
          <Route path="/community-richtlinien" element={<div className="pt-20 px-4 py-8 max-w-2xl mx-auto"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Community Richtlinien</h1><p className="text-body mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur sagittis, nisl nunc.</p><div className="flex justify-center mt-12"><button onClick={() => window.location.href = '/'} className="bg-slolingo-orange text-white font-apfel-medium px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors text-lg flex items-center gap-2"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' /></svg>Zurück zur Startseite</button></div></div>} />
          <Route path="/agb" element={<div className="pt-20 px-4 py-8 max-w-2xl mx-auto"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1><div className="text-body space-y-8">
  <section>
    <h2 className="text-2xl font-apfel-medium mb-2">Stand: 23. Juli 2025</h2>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">1. Anbieter</h2>
    <address className="not-italic mb-2">
      <strong>Artikel‑VII‑Kulturverein für Steiermark – Pavelhaus</strong><br/>
      Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/>
      Laafeld 30, A‑8490 Bad Radkersburg, Österreich<br/>
      Tel/Fax +43 3476 3862<br/>
      E‑Mail <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a><br/>
      ZVR‑Zahl 141781065<br/>
      UID keine UID vorhanden<br/>
      Vertreten durch den Vereinsvorstand (Obfrau/Obmann).<br/>
      Datenschutz­verantwortlicher & Kontakt: <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a>
    </address>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">2. Leistungs­umfang</h2>
    <p>slolingo ist eine kostenlose mobile Lern‑App zum Üben von Sprachen – primär für Kinder im Grund­schul­alter, Lehrkräfte sowie alle Sprach­interessierten. Es gibt keine kosten­pflichtigen Upgrades, Abos oder In‑App‑Käufe.</p>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">3. Registrierung und Datenschutz</h2>
    <h3 className="font-apfel-medium mt-4 mb-1">3.1 Erhobene Daten</h3>
    <ul className="list-disc ml-6 mb-2">
      <li>Lernfortschritt, Benutzername, Spielergebnisse</li>
      <li>E‑Mail‑Adresse (freiwillig, zur Konto‑Wieder­herstellung)</li>
      <li>Daten werden zunächst lokal auf dem Gerät gespeichert und bei bestehender Internet­verbindung mit unserem EU‑Server synchronisiert.</li>
      <li>Keine Protokollierung von IP‑Adressen oder sonstigen Meta­daten; Nutzung bleibt anonym.</li>
    </ul>
    <h3 className="font-apfel-medium mt-4 mb-1">3.2 Zweck</h3>
    <ul className="list-disc ml-6 mb-2">
      <li>Bereitstellung und Synchronisierung deines Accounts</li>
      <li>Fehler­behebung / Support</li>
      <li>nicht‑personalisierte Weiter­entwicklung der App</li>
    </ul>
    <h3 className="font-apfel-medium mt-4 mb-1">3.3 Weitergabe</h3>
    <p>Es erfolgt keine Weitergabe an Dritte. Übermittlungen finden nur statt, wenn du ausdrücklich zustimmst oder wir gesetzlich dazu verpflichtet sind. Slolingo nutzt keine Integrationen von Google, Facebook, Amazon o. Ä.; alle Daten verbleiben auf unseren eigenen Servern.</p>
    <h3 className="font-apfel-medium mt-4 mb-1">3.4 Speicherdauer & Löschung</h3>
    <p>Deine Daten bleiben gespeichert, solange du Slolingo aktiv nutzt. Du kannst deinen Account jederzeit in der App (Einstellungen → Abmelden → Profil löschen) oder per Mail an <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a> löschen; sämtliche damit verbundenen Daten werden dann dauerhaft entfernt. Bei 12 Monaten Inaktivität erfolgt eine automatische Löschung.</p>
    <h3 className="font-apfel-medium mt-4 mb-1">3.5 Sicherheit</h3>
    <p>Alle Daten liegen auf Servern innerhalb der EU, werden verschlüsselt übertragen und in Rechen­zentren gespeichert, die nach DIN ISO/IEC 27001 zertifiziert sind. Dennoch kann aufgrund stetig neuer Angriffs­methoden kein absoluter Schutz garantiert werden.</p>
    <h3 className="font-apfel-medium mt-4 mb-1">3.6 Deine Rechte</h3>
    <p>Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Daten­übertrag­barkeit sowie Widerspruch gegen die Verarbeitung. Bitte sende dazu eine E‑Mail an <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a> unter Angabe deines Benutzer­namens und – falls hinterlegt – deiner E‑Mail‑Adresse.</p>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">4. Nutzungs­rechte</h2>
    <p>Alle App‑Inhalte sind urheber­rechtlich geschützt. Du erhältst ein einfaches, persönliches und nicht übertragbares Recht zur privaten Nutzung. Kommerzielle Nutzung, Verviel­fältigung oder Verteilung bedürfen unserer vorherigen schrift­lichen Zustimmung.</p>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">5. Haftung</h2>
    <p>Die Inhalte wurden sorgfältig erstellt; eine Gewähr für Richtig­keit, Vollständig­keit oder Aktualität wird jedoch nicht übernommen. Für Schäden – außer bei Vorsatz oder grober Fahr­lässigkeit – wird nicht gehaftet (§ 6 Abs 1 Z 9 KSchG).</p>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">6. Verfügbarkeit</h2>
    <p>Slolingo wird als unentgeltlicher Dienst „as is“ bereitgestellt. Ein Anspruch auf stetige Verfügbarkeit, bestimmte Funktionen oder fehler­freie Nutzung besteht nicht. Wartungen, Updates oder Abschaltungen können jederzeit ohne Ankündigung erfolgen.</p>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">7. Anwendbares Recht und Gerichts­stand</h2>
    <p>Es gilt österreichisches Recht unter Ausschluss seiner Kollisions­normen und des UN‑Kaufrechts.<br/>Für Verbraucher*innen richtet sich der Gerichts­stand nach § 14 KSchG; im Übrigen ist das sachlich zuständige Gericht in 8010 Graz vereinbart.</p>
  </section>
  <section>
    <h2 className="text-xl font-apfel-medium mb-2">8. Schluss­bestimmungen</h2>
    <p>Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen unberührt. Anstelle der unwirksamen Regelung tritt die gesetzliche Regelung, die dem wirtschaftlichen Zweck am nächsten kommt. Änderungen der AGB werden durch Veröffentlichung in der App wirksam.</p>
  </section>
  <div className="text-center text-gray-400 text-sm mt-8">(Ende der AGB)</div>
  <div className="flex justify-center mt-12">
    <button onClick={() => window.location.href = '/'} className="bg-slolingo-orange text-white font-apfel-medium px-8 py-3 rounded-full shadow-lg hover:bg-orange-500 transition-colors text-lg flex items-center gap-2">
      <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' /></svg>
      Zurück zur Startseite
    </button>
  </div>
</div></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
