import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n'

const Header = () => {
  const { locale, setLocale } = useI18n()
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-slolingo backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/general/slolingo_logo.svg" alt="Slolingo" className="h-10" />
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale('de')}
              className={`px-3 py-1 rounded-full text-sm font-apfel-medium ${locale === 'de' ? 'bg-white text-slolingo-primaryText shadow' : 'bg-white/60 text-slolingo-primaryText hover:bg-white'}`}
            >DE</button>
            <button
              type="button"
              onClick={() => setLocale('sl')}
              className={`px-3 py-1 rounded-full text-sm font-apfel-medium ${locale === 'sl' ? 'bg-white text-slolingo-primaryText shadow' : 'bg-white/60 text-slolingo-primaryText hover:bg-white'}`}
            >SL</button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 