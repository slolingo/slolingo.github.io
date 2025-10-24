import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="pt-8 pb-8 px-4 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-3 lg:space-y-4">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-6xl font-apfel-medium text-slolingo-primaryText leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Lerne <span className="text-slolingo-orange">Slowenisch</span> oder <span className="text-slolingo-orange">Deutsch</span> spielerisch
              </motion.h1>

              <motion.p
                className="text-lg lg:text-xl text-slolingo-secondaryText font-apfel leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Die interaktive Lern-App für Kinder, die durch Geschichten und Übungen
                spielerisch Slowenisch und Deutsch lernen.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-row gap-3 lg:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://apps.apple.com/at/app/slolingo/id6751134811?l=en-GB" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 lg:px-6 lg:py-3 rounded-lg flex items-center justify-center space-x-1 lg:space-x-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg border border-gray-200 w-auto lg:w-auto">
                <img src="/apple.svg" alt="Apple" className="w-8 h-8 lg:w-8 lg:h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-sm lg:text-sm font-apfel-medium">App Store</div>
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=lurchi.slolingo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 lg:px-6 lg:py-3 rounded-lg flex items-center justify-center space-x-1 lg:space-x-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg border border-gray-200 w-auto lg:w-auto">
                <img src="/google-play.svg" alt="Google Play" className="w-8 h-8 lg:w-8 lg:h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">GET IT ON</div>
                  <div className="text-sm lg:text-sm font-apfel-medium">Google Play</div>
                </div>
              </a>
            </motion.div>

            {/* Features preview */}
            <motion.div
              className="flex flex-wrap items-center gap-4 lg:gap-8 pt-4 lg:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-slolingo-green rounded-full"></div>
                <span className="text-sm lg:text-body">Interaktive Geschichten</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-slolingo-skyBlue rounded-full"></div>
                <span className="text-sm lg:text-body">Sprachübungen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-slolingo-lightPink rounded-full"></div>
                <span className="text-sm lg:text-body">Für Kinder entwickelt</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Lurchi mascot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            {/* Background foot steps */}
            <motion.img
              src="/general/foot_steps.svg"
              alt=""
              className="absolute -bottom-10 -left-10 lg:-bottom-20 lg:-left-20 w-48 h-48 lg:w-96 lg:h-96 opacity-20 rotate-12"
              animate={{
                rotate: [12, 15, 12],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative">
                          <motion.img
              src="/general/lurchi_bunt_logo.svg"
              alt="Lurchi - Slolingo Mascot"
              className="w-full max-w-sm lg:max-w-md mx-auto"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

              {/* Floating elements */}
                             <motion.div
                 className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-slolingo-primary rounded-full p-2 lg:p-3 shadow-slolingo-card"
                 animate={{
                   scale: [1, 1.1, 1],
                   rotate: [0, 10, -10, 0]
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               >
                 <img src="/template-icons/template-gesprache-icon.svg" alt="" className="w-4 h-4 lg:w-6 lg:h-6" />
               </motion.div>

               <motion.div
                 className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 bg-slolingo-skyBlue rounded-full p-2 lg:p-3 shadow-slolingo-card"
                 animate={{
                   scale: [1, 1.1, 1],
                   rotate: [0, -10, 10, 0]
                 }}
                 transition={{
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut",
                   delay: 1
                 }}
               >
                 <img src="/template-icons/template-memory-icon.svg" alt="" className="w-4 h-4 lg:w-6 lg:h-6" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
