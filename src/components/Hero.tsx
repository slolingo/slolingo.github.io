import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-apfel-medium text-slolingo-primaryText leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Lerne <span className="text-slolingo-orange">slovenisch</span> oder <span className="text-slolingo-orange">deutsch</span> spielerisch
              </motion.h1>
              
              <motion.p 
                className="text-xl text-slolingo-secondaryText font-apfel leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Die interaktive Lern-App für Kinder, die durch Geschichten und Übungen 
                spielerisch Slowenisch und Deutsch lernen.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg border border-gray-200">
                <img src="/apple.svg" alt="Apple" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-100 transition-colors duration-200 shadow-lg border border-gray-200">
                <img src="/google-play.svg" alt="Google Play" className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </motion.div>

            {/* Features preview */}
            <motion.div 
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-slolingo-green rounded-full"></div>
                <span className="text-body">Interaktive Geschichten</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-slolingo-skyBlue rounded-full"></div>
                <span className="text-body">Sprachübungen</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-slolingo-lightPink rounded-full"></div>
                <span className="text-body">Für Kinder entwickelt</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Lurchi mascot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Background foot steps */}
            <motion.img
              src="/general/foot_steps.svg"
              alt=""
              className="absolute -bottom-20 -left-20 w-96 h-96 opacity-20 rotate-12"
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
              className="w-full max-w-md mx-auto"
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
                 className="absolute -top-4 -right-4 bg-slolingo-primary rounded-full p-3 shadow-slolingo-card"
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
                 <img src="/template-icons/template-gesprache-icon.svg" alt="" className="w-6 h-6" />
               </motion.div>
               
               <motion.div
                 className="absolute -bottom-4 -left-4 bg-slolingo-skyBlue rounded-full p-3 shadow-slolingo-card"
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
                 <img src="/template-icons/template-memory-icon.svg" alt="" className="w-6 h-6" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 