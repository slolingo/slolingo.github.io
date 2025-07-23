import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
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
          <Route path="/impressum" element={<div className="pt-20 px-4 py-8 max-w-2xl mx-auto"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Impressum</h1><div className="text-body space-y-4"><p>slolingo ist eine digitale Lern-App, die man herunterladen kann.<br/>Betreiber und Verantwortlicher im Sinne des Datenschutzes ist Artikel-VII-Kulturverein für Steiermark - Pavelhaus.<br/>Bei Fragen zum Datenschutz kannst du uns unter <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a> schreiben.<br/>Unseren Datenschutzbeauftragten kannst du unter folgenden Kontaktdaten erreichen:</p><ul className="list-disc ml-6"><li>E-Mail: <a href="mailto:office@pavelhaus.at" className="underline text-slolingo-orange">office@pavelhaus.at</a></li><li>Artikel-VII-Kulturverein für Steiermark - Pavelhaus<br/>Kulturno društvo Člen 7 za avstrijsko Štajersko – Pavlova hiša<br/><a href="https://pavelhaus.at/" className="underline text-slolingo-orange" target="_blank" rel="noopener noreferrer">https://pavelhaus.at/</a><br/>Laafeld 30<br/>A-8490 Bad Radkersburg<br/>Tel/Fax: +43 3476 / 3862<br/>ZVR 141781065</li></ul><div className="mt-8 flex items-center gap-4"><span>Das Projekt slolingo wurde finanziert vom</span><img src="/bka-logos/bka-logo-ger.svg" alt="Bundeskanzleramt Österreich" className="h-8 inline" /></div></div></div>} />
          <Route path="/datenschutz" element={<div className="pt-20 px-4 py-8"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Datenschutz</h1><p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur sagittis, nisl nunc.</p></div>} />
          <Route path="/community-richtlinien" element={<div className="pt-20 px-4 py-8"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Community Richtlinien</h1><p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur sagittis, nisl nunc.</p></div>} />
          <Route path="/agb" element={<div className="pt-20 px-4 py-8"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">AGB</h1><p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur sagittis, nisl nunc.</p></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
