import { motion } from 'framer-motion'
import { Download as DownloadIcon, Smartphone, QrCode, ExternalLink } from 'lucide-react'

const Download = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
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
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-apfel-medium text-slolingo-primaryText mb-4">
            Jetzt herunterladen
          </h2>
          <p className="text-xl text-slolingo-secondaryText font-apfel max-w-3xl mx-auto">
            Verfügbar für iOS und Android. Lade die App kostenlos herunter und 
            beginne noch heute mit dem Sprachenlernen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Download options */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <Smartphone size={24} className="text-slolingo-primaryText" />
                  </div>
                  <div>
                    <h3 className="text-xl font-apfel-medium text-slolingo-primaryText">
                      Mobile App
                    </h3>
                    <p className="text-slolingo-secondaryText">
                      Für iOS und Android verfügbar
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <DownloadIcon size={20} />
                    <span>App Store (iOS)</span>
                    <ExternalLink size={16} />
                  </button>
                  
                  <button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <DownloadIcon size={20} />
                    <span>Google Play (Android)</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-slolingo-lightPink rounded-full flex items-center justify-center">
                    <QrCode size={24} className="text-slolingo-primaryText" />
                  </div>
                  <div>
                    <h3 className="text-xl font-apfel-medium text-slolingo-primaryText">
                      QR-Code Demo
                    </h3>
                    <p className="text-slolingo-secondaryText">
                      Scanne den QR-Code für eine Demo
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <img 
                    src="/demo-qr.svg" 
                    alt="Demo QR Code" 
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <p className="text-sm text-slolingo-secondaryText">
                    Scanne mit deinem Smartphone
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* App preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Mock phone frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-slolingo-primary rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-gradient-slolingo rounded-[2.5rem] overflow-hidden relative">
                  {/* Mock app content */}
                  <div className="absolute inset-0 flex flex-col">
                    {/* Header */}
                    <div className="bg-white/20 backdrop-blur-sm p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img src="/general/lurchi.svg" alt="Lurchi" className="w-8 h-8" />
                        <span className="font-apfel-medium text-slolingo-primaryText">Slolingo</span>
                      </div>
                      <div className="w-6 h-6 bg-slolingo-skyBlue rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 space-y-4">
                      <div className="text-center">
                        <h3 className="text-lg font-apfel-medium text-slolingo-primaryText mb-2">
                          Willkommen zurück!
                        </h3>
                        <p className="text-sm text-slolingo-secondaryText">
                          Wähle deine Lernoption
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                                                 <div className="bg-white/30 rounded-slolingo p-4 flex items-center space-x-3">
                           <div className="w-12 h-12 bg-slolingo-lightPink rounded-full flex items-center justify-center">
                             <img src="/template-icons/template-gesprache-icon.svg" alt="" className="w-6 h-6" />
                           </div>
                           <span className="font-apfel-medium text-slolingo-primaryText">Geschichten</span>
                         </div>
                         
                         <div className="bg-white/30 rounded-slolingo p-4 flex items-center space-x-3">
                           <div className="w-12 h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                             <img src="/template-icons/template-memory-icon.svg" alt="" className="w-6 h-6" />
                           </div>
                           <span className="font-apfel-medium text-slolingo-primaryText">Übungen</span>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
                             <motion.div
                 className="absolute -top-4 -right-4 bg-slolingo-goldenYellow rounded-full p-3 shadow-slolingo-card"
                 animate={{ 
                   scale: [1, 1.1, 1],
                   rotate: [0, 5, -5, 0]
                 }}
                 transition={{ 
                   duration: 3,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
               >
                 <img src="/template-icons/template-quiz-icon.svg" alt="" className="w-6 h-6" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Download 