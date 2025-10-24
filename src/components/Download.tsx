import { motion } from 'framer-motion'
import QRCodeComponent from './QRCode'
import { useI18n } from '../i18n/i18n'

const Download = () => {
  const { t } = useI18n()
  return (
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <motion.img
          src="/general/Left group.svg"
          alt=""
          className="absolute -top-10 -left-10 w-48 h-48 opacity-20"
          animate={{ 
            rotate: [0, 2, -2, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-5xl font-apfel-medium text-slolingo-primaryText mb-4">
              {t('download.title')}
            </h2>
            <p className="text-lg lg:text-xl text-slolingo-secondaryText font-apfel max-w-2xl mx-auto">
              {t('download.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Download options */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            >
              {/* Download buttons side by side */}
              <div className="flex flex-row gap-3 lg:gap-4 mb-4 lg:mb-6 justify-center">
                {/* Apple Store */}
                <div className="flex flex-col items-center">
                  <a href="https://apps.apple.com/at/app/slolingo/id6751134811?l=en-GB" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 lg:px-6 lg:py-3 rounded-lg flex items-center justify-center space-x-1 lg:space-x-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg border border-gray-200 w-auto lg:w-auto">
                    <img src="/apple.svg" alt="Apple" className="w-8 h-8 lg:w-8 lg:h-8" />
                    <div className="text-left">
                      <div className="text-xs text-gray-600">{t('download.apple.line1')}</div>
                      <div className="text-sm lg:text-lg font-apfel-medium">{t('download.apple.line2')}</div>
                    </div>
                  </a>
                  <div className="text-center mt-2 lg:mt-3">
                    <div className="bg-white rounded-2xl p-2 lg:p-4 shadow-lg inline-block">
                      <QRCodeComponent 
                        value="https://apps.apple.com/at/app/slolingo/id6751134811?l=en-GB" 
                        size={120}
                        className="mx-auto lg:w-48 lg:h-48"
                      />
                    </div>
                  </div>
                </div>

                {/* Google Play */}
                <div className="flex flex-col items-center">
                  <a href="https://play.google.com/store/apps/details?id=lurchi.slolingo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 lg:px-6 lg:py-3 rounded-lg flex items-center justify-center space-x-1 lg:space-x-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg border border-gray-200 w-auto lg:w-auto">
                    <img src="/google-play.svg" alt="Google Play" className="w-8 h-8 lg:w-8 lg:h-8" />
                    <div className="text-left">
                      <div className="text-xs text-gray-600">{t('download.google.line1')}</div>
                      <div className="text-sm lg:text-lg font-apfel-medium">{t('download.google.line2')}</div>
                    </div>
                  </a>
                  <div className="text-center mt-2 lg:mt-3">
                    <div className="bg-white rounded-2xl p-2 lg:p-4 shadow-lg inline-block">
                      <QRCodeComponent 
                        value="https://play.google.com/store/apps/details?id=lurchi.slolingo&pcampaignid=web_share" 
                        size={120}
                        className="mx-auto lg:w-48 lg:h-48"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Demo screenshots */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 lg:gap-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <img 
                  src="/demo-screen1.png" 
                  alt="Slolingo App Screenshot 1" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-3 h-3 lg:w-4 lg:h-4 bg-slolingo-lightPink rounded-full"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative"
              >
                <img 
                  src="/demo-screen2.png" 
                  alt="Slolingo App Screenshot 2" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-3 h-3 lg:w-4 lg:h-4 bg-slolingo-skyBlue rounded-full"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="relative"
              >
                <img 
                  src="/demo-screen3.png" 
                  alt="Slolingo App Screenshot 3" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-3 h-3 lg:w-4 lg:h-4 bg-slolingo-mintGreen rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-16 h-16 opacity-30"
        >
          <img src="/template-icons/template-gesprache-icon.svg" alt="" className="w-full h-full" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-12 h-12 opacity-30"
        >
          <img src="/template-icons/template-memory-icon.svg" alt="" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  )
}

export default Download 