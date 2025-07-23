import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-slolingo-primaryText text-white py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* First column */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">Über uns</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <a href="mailto:office@pavelhaus.at" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Mail size={16} className="lg:w-4 lg:h-4" />
                  <span>Kontakt</span>
                </a>
              </li>
              <li>
                <Link to="/impressum" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">Apps</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <button type="button" aria-disabled="true" tabIndex={-1} className="text-sm lg:text-base text-gray-300 cursor-not-allowed opacity-60 transition-colors bg-transparent border-none p-0 m-0">
                  slolingo für Android
                </button>
              </li>
              <li>
                <button type="button" aria-disabled="true" tabIndex={-1} className="text-sm lg:text-base text-gray-300 cursor-not-allowed opacity-60 transition-colors bg-transparent border-none p-0 m-0">
                  slolingo für iOS
                </button>
              </li>
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">Datenschutz und AGB</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <Link to="/datenschutz" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  AGB
                </Link>
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

          <div className="flex items-center">
            <span className="text-xs lg:text-sm text-gray-400">
              Gefördert von
            </span>
            <div>
              <img
                src="/bka-logos/bka-logo-ger.svg"
                alt="Bundeskanzleramt Österreich"
                className="h-6 lg:h-8"
              />
            </div>
            <span className="text-xs lg:text-sm text-gray-400">
              Österreich
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
