import { motion } from 'framer-motion'
import { Users, Globe, Award, GraduationCap, Palette, Mic, Code } from 'lucide-react'

const About = () => {
  return (
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-apfel-medium text-slolingo-primaryText mb-4">
            Über <img src="/general/slolingo_logo.svg" alt="Slolingo" className="inline h-6 lg:h-8 align-middle mx-2" />
          </h2>
          <p className="text-lg lg:text-xl text-slolingo-secondaryText font-apfel max-w-3xl mx-auto">
            Ein innovatives Projekt zur Förderung der Zweisprachigkeit zwischen
            Österreich und Slowenien.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 lg:mb-16">
          {/* Project info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="card">
              <h3 className="text-xl lg:text-2xl font-apfel-medium text-slolingo-primaryText mb-3 lg:mb-4">
                Unser Ziel
              </h3>
                            <p className="text-sm lg:text-body text-slolingo-secondaryText leading-relaxed mb-3 lg:mb-4">
                <img src="/general/slolingo_logo.svg" alt="Slolingo" className="inline h-3 align-middle mx-1" /> wurde entwickelt, um Kindern spielerisch die Grundlagen
                der deutschen und slowenischen Sprache zu vermitteln. Durch
                interaktive Geschichten und Übungen wird das Lernen zu einem
                spannenden Abenteuer.
              </p>
              <p className="text-sm lg:text-body text-slolingo-secondaryText leading-relaxed">
                Die App fördert nicht nur die Sprachkenntnisse, sondern auch
                das kulturelle Verständnis zwischen beiden Ländern.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl lg:text-2xl font-apfel-medium text-slolingo-primaryText mb-3 lg:mb-4">
                Für wen ist <img src="/general/slolingo_logo.svg" alt="Slolingo" className="inline h-4 lg:h-5 align-middle mx-1" />?
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-body text-slolingo-secondaryText">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-green rounded-full"></div>
                  <span>Kinder im Grundschulalter (6-12 Jahre)</span>
                </li>

                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-lightPink rounded-full"></div>
                  <span>Lehrkräfte für den Schulunterricht</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slolingo-paleGreen rounded-full"></div>
                  <span>Sprachinteressierte aller Altersgruppen</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl lg:text-2xl font-apfel-medium text-slolingo-primaryText mb-3 lg:mb-4">
                Didaktische Materialien & App
              </h3>
              <p className="text-sm lg:text-body text-slolingo-secondaryText leading-relaxed mb-3 lg:mb-4">
                Im Jahr 2020 wurden in Kooperation von Mag. Susanne Weitlaner und Dr. Tatjana Vučajnk (AAU) zweisprachige Lehrmaterialien für Kinder unterschiedlichen Alters herausgegeben, die Slowenisch als Zweit- oder Fremdsprache lernen. Die Materialien eignen sich für die Arbeit mit sprachlich und altersmäßig heterogenen Gruppen und ermuntern zur Individualisierung und Binnendifferenzierung. Das didaktische Komplettset besteht aus einem zweisprachigen (slowenisch-deutschen) Lesebuch <em>Pravljisanica/Traummärchen</em> (slowenische Märchen als Comic, Bild-Lese-Text & Originaltext) und dem Handbuch für Lehrerinnen und Lehrer samt ausschneidbaren Spielkärtchen namens <em>Čebelice letijo in pravljice spregovorijo/Im Bienenflug durch Märchenwelten</em> (erhältlich unter <a href="mailto:office@pavelhaus.at" className="underline hover:text-slolingo-green">office@pavelhaus.at</a>).
              </p>
              <p className="text-sm lg:text-body text-slolingo-secondaryText leading-relaxed">
                Die dazu entwickelte App ermöglicht es Kindern, zu Hause oder im Unterricht die Inhalte sowie den Wortschatz der slowenischen Märchen spielerisch zu festigen und zu üben. Zusätzlich gibt es Spiele, mit denen Basissprachkenntnisse trainiert werden können.
              </p>
            </div>
          </motion.div>

          {/* Team/Partners */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 lg:space-y-6"
          >
            <div className="card">
              <h3 className="text-xl lg:text-2xl font-apfel-medium text-slolingo-primaryText mb-4 lg:mb-6">
                Team & Mitwirkende
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <GraduationCap size={16} className="text-slolingo-primaryText lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText text-sm lg:text-base">
                      Pädagogische Beratung & Projektleitung
                    </h4>
                    <p className="text-xs lg:text-sm text-slolingo-secondaryText">
                      Mag. Susanne Weitlaner & Dr. Tatjana Vučajnk, Slowenistin
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <Palette size={16} className="text-slolingo-primaryText lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText text-sm lg:text-base">
                      Illustrationen und Comics
                    </h4>
                    <p className="text-xs lg:text-sm text-slolingo-secondaryText">
                      Schmidt, Matjaž & Darja Remc
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <Mic size={16} className="text-slolingo-primaryText lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText text-sm lg:text-base">
                      Sprecher:innen
                    </h4>
                    <p className="text-xs lg:text-sm text-slolingo-secondaryText">
                      Corina Kaufmann & Vito At
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <Code size={16} className="text-slolingo-primaryText lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText text-sm lg:text-base">
                      Entwicklerteam und Gestaltung
                    </h4>
                    <p className="text-xs lg:text-sm text-slolingo-secondaryText">
                      David Kerschbaumer, Valentin Edelsbrunner, Patrick Lovric, Linder Schneider, Nika Mahne
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl lg:text-2xl font-apfel-medium text-slolingo-primaryText mb-4 lg:mb-6">
                Partner & Unterstützung
              </h3>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slolingo-skyBlue rounded-full flex items-center justify-center">
                    <Globe size={16} className="text-slolingo-primaryText lg:w-5 lg:h-5" />
                  </div>
                  <div>
                    <h4 className="font-apfel-medium text-slolingo-primaryText text-sm lg:text-base">
                      Bundeskanzleramt Österreich
                    </h4>
                    <p className="text-xs lg:text-sm text-slolingo-secondaryText">
                      Förderung der bilateralen Beziehungen
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default About
