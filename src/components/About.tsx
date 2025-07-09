import { motion } from 'framer-motion'
import { Users, Heart, Globe, Award } from 'lucide-react'

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative plants */}
        <motion.img
          src="/general/pflanze_heller.svg"
          alt=""
          className="absolute -top-10 -left-10 w-32 h-32 opacity-60"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src="/general/pflanze_dunkler.svg"
          alt=""
          className="absolute -bottom-10 -right-10 w-24 h-24 opacity-60"
          animate={{ 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
            Über Slolingo
          </h2>
          <p className="text-xl text-slolingo-secondaryText font-apfel max-w-3xl mx-auto">
            Ein innovatives Projekt zur Förderung der Zweisprachigkeit zwischen 
            Deutschland und Slowenien.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Project info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-apfel-medium text-slolingo-primaryText mb-4">
                Unser Ziel
              </h3>
              <p className="text-body text-slolingo-secondaryText leading-relaxed mb-4">
                Slolingo wurde entwickelt, um Kindern spielerisch die Grundlagen 
                der deutschen und slowenischen Sprache zu vermitteln. Durch 
                interaktive Geschichten und Übungen wird das Lernen zu einem 
                spannenden Abenteuer.
              </p>
              <p className="text-body text-slolingo-secondaryText leading-relaxed">
                Die App fördert nicht nur die Sprachkenntnisse, sondern auch 
                das kulturelle Verständnis zwischen beiden Ländern.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-apfel-medium text-slolingo-primaryText mb-4">
                Für wen ist Slolingo?
              </h3>
              <ul className="space-y-3 text-body text-slolingo-secondaryText">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-green rounded-full"></div>
                  <span>Kinder im Grundschulalter (6-12 Jahre)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-skyBlue rounded-full"></div>
                  <span>Eltern, die ihre Kinder zweisprachig erziehen möchten</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-lightPink rounded-full"></div>
                  <span>Lehrkräfte in bilingualen Schulen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-goldenYellow rounded-full"></div>
                  <span>Sprachinteressierte aller Altersgruppen</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Team/Partners */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-apfel-medium text-slolingo-primaryText mb-6">
                Partner & Unterstützung
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <Globe size={24} className="text-slolingo-primaryText" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText">
                      Bundeskanzleramt Österreich
                    </h4>
                    <p className="text-sm text-slolingo-secondaryText">
                      Förderung der bilateralen Beziehungen
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slolingo-lightPink rounded-full flex items-center justify-center">
                    <Award size={24} className="text-slolingo-primaryText" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText">
                      Bildungsexperten
                    </h4>
                    <p className="text-sm text-slolingo-secondaryText">
                      Pädagogische Beratung und Entwicklung
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-slolingo-mintGreen rounded-full flex items-center justify-center">
                    <Users size={24} className="text-slolingo-primaryText" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText">
                      Entwicklerteam
                    </h4>
                    <p className="text-sm text-slolingo-secondaryText">
                      Technische Umsetzung und Design
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <Heart size={24} className="text-slolingo-orange" />
                <h4 className="font-apfel-medium text-slolingo-primaryText">
                  Made with Love
                </h4>
              </div>
              <p className="text-body text-slolingo-secondaryText">
                Slolingo ist ein Open-Source-Projekt, das mit viel Liebe und 
                Engagement für die Förderung der Zweisprachigkeit entwickelt wurde.
              </p>
            </div>
          </motion.div>
        </div>

        {/* BKA Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-6 bg-white rounded-slolingo shadow-slolingo-card">
            <img 
              src="/images/bundeskanzleramt.png" 
              alt="Bundeskanzleramt Österreich" 
              className="h-16"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 