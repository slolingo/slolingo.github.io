import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: '/template-icons/template-gesprache-icon.svg',
      title: 'Interaktive Geschichten',
      description: 'Spannende Geschichten mit Audio und Animationen, die das Lernen lebendig machen.',
      color: 'bg-slolingo-lightPink'
    },
    {
      icon: '/template-icons/template-advanced-icon.svg',
      title: 'Audio-Unterstützung',
      description: 'Hochwertige Audio-Aufnahmen für die korrekte Aussprache beider Sprachen.',
      color: 'bg-slolingo-skyBlue'
    },
    {
      icon: '/template-icons/template-memory-icon.svg',
      title: 'Spielerische Übungen',
      description: 'Verschiedene Übungstypen wie Memory, Lückentests und Wortschatz-Spiele.',
      color: 'bg-slolingo-mintGreen'
    },
    {
      icon: '/template-icons/template-quiz-icon.svg',
      title: 'Fortschritts-Tracking',
      description: 'Verfolge den Lernfortschritt und sammle Belohnungen für Motivation.',
      color: 'bg-slolingo-goldenYellow'
    },
    {
      icon: '/template-icons/template-personen-icon.svg',
      title: 'Für Kinder entwickelt',
      description: 'Benutzerfreundliche Oberfläche speziell für Kinder im Grundschulalter.',
      color: 'bg-slolingo-peach'
    },
    {
      icon: '/template-icons/template-sprachen-icon.svg',
      title: 'Sicher & Werbefrei',
      description: '100% sicher für Kinder ohne Werbung oder In-App-Käufe.',
      color: 'bg-slolingo-paleGreen'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative plants */}
        <motion.img
          src="/general/plants_bottom.svg"
          alt=""
          className="absolute -bottom-20 -left-20 w-64 h-64 opacity-30"
          animate={{ 
            rotate: [0, 3, -3, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.img
          src="/general/right_hands.svg"
          alt=""
          className="absolute -top-20 -right-20 w-48 h-48 opacity-30"
          animate={{ 
            rotate: [0, -3, 3, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
            Warum Slolingo?
          </h2>
          <p className="text-xl text-slolingo-secondaryText font-apfel max-w-3xl mx-auto">
            Unsere App kombiniert bewährte Lernmethoden mit moderner Technologie 
            für ein optimales Spracherlebnis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <img src={feature.icon} alt="" className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-apfel-medium text-slolingo-primaryText mb-4">
                {feature.title}
              </h3>
              
              <p className="text-body text-slolingo-secondaryText leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Language flags section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-apfel-medium text-slolingo-primaryText mb-8">
            Unterstützte Sprachen
          </h3>
          
          <div className="flex justify-center items-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-slolingo-card">
                <img 
                  src="/assets/flags/aut-flag-round.svg" 
                  alt="Deutsch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-body font-apfel-medium">Deutsch</span>
            </div>
            
            <div className="text-3xl text-slolingo-orange font-apfel-medium">+</div>
            
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-slolingo-card">
                <img 
                  src="/assets/flags/slo-flag-round.svg" 
                  alt="Slowenisch" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-body font-apfel-medium">Slowenisch</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features 