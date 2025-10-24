import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

const Footer = () => {
  const { t } = useI18n()
  return (
    <footer className="bg-slolingo-primaryText text-white py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* First column */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">{t('footer.aboutUs')}</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <a href="mailto:office@pavelhaus.at" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                  <Mail size={16} className="lg:w-4 lg:h-4" />
                  <span>{t('footer.contact')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">{t('footer.apps')}</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <a href="https://play.google.com/store/apps/details?id=lurchi.slolingo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  {t('footer.android')}
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/at/app/slolingo/id6751134811?l=en-GB" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  {t('footer.ios')}
                </a>
              </li>
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h3 className="text-base lg:text-lg font-apfel-medium mb-3 lg:mb-4">{t('footer.privacyAndTerms')}</h3>
            <ul className="space-y-1 lg:space-y-2">
              <li>
                <Link to="/datenschutz" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">
                  {t('footer.terms')}
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
            <span className="text-sm lg:text-base">{t('footer.madeWith')}</span>
            <Heart size={14} className="text-slolingo-orange lg:w-4 lg:h-4" />
            <span className="text-sm lg:text-base">{t('footer.inAustria')}</span>
          </div>

          <div className="flex items-center">
            <span className="text-xs lg:text-sm text-gray-400">
              {t('footer.fundedBy')}
            </span>
            <div>
              <img
                src="/bka-logos/bka-logo-ger.svg"
                alt="Bundeskanzleramt Österreich"
                className="h-6 lg:h-8"
              />
            </div>
            <span className="text-xs lg:text-sm text-gray-400">
              {t('footer.fundedBySuffix')}
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
