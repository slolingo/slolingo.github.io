import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Github, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slolingo-primaryText text-white py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-3 lg:mb-4">
              <img src="/general/slolingo_logo.svg" alt="Slolingo" className="h-6 lg:h-8" />
            </div>
            <p className="text-sm lg:text-body text-gray-300 mb-4 lg:mb-6 max-w-md">
              Die interaktive Lern-App für Kinder, die spielerisch Slowenisch und 
              Deutsch lernen. Ein Projekt zur Förderung der Zweisprachigkeit.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:info@slolingo.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={18} className="lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base">Kontakt</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">App</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">Rechtliches</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <Link to="/privacy" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Nutzungsbedingungen
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="border-t border-gray-700 mt-6 lg:mt-8 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-300 mb-3 lg:mb-0">
            <span className="text-sm lg:text-base">Made with</span>
            <Heart size={14} className="text-slolingo-orange lg:w-4 lg:h-4" />
            <span className="text-sm lg:text-base">in Österreich</span>
          </div>
          
          <div className="flex items-center space-x-3 lg:space-x-4">
            <div className="bg-white px-1 py-0.5 rounded border border-gray-200">
              <img 
                src="/bka-logos/bka-logo-ger.svg" 
                alt="Bundeskanzleramt Österreich" 
                className="h-6 lg:h-8"
              />
            </div>
            <span className="text-xs lg:text-sm text-gray-400">
              Gefördert vom Bundeskanzleramt Österreich
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 