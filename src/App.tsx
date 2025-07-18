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
          <Route path="/impressum" element={<div className="pt-20 px-4 py-8"><h1 className="text-4xl font-apfel-medium text-slolingo-primaryText mb-8">Impressum</h1><p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod, nisl eget consectetur sagittis, nisl nunc.</p></div>} />
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
