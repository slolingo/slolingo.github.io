import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18n'

const Features = () => {
  const { t } = useI18n()
  const features = [
    {
      icon: '/template-icons/template-connect-icon.svg',
      title: t('features.item.interactiveStories.title'),
      description: t('features.item.interactiveStories.desc'),
      color: 'bg-slolingo-lightPink'
    },
    {
      icon: '/template-icons/template-advanced-icon.svg',
      title: t('features.item.audio.title'),
      description: t('features.item.audio.desc'),
      color: 'bg-slolingo-skyBlue'
    },
    {
      icon: '/template-icons/template-memory-icon.svg',
      title: t('features.item.games.title'),
      description: t('features.item.games.desc'),
      color: 'bg-slolingo-mintGreen'
    },
    {
      icon: '/template-icons/template-quiz-icon.svg',
      title: t('features.item.progress.title'),
      description: t('features.item.progress.desc'),
      color: 'bg-slolingo-orange'
    },
    {
      icon: '/template-icons/template-personen-icon.svg',
      title: t('features.item.forKids.title'),
      description: t('features.item.forKids.desc'),
      color: 'bg-slolingo-peach'
    },
    {
      icon: '/template-icons/template-sprachen-icon.svg',
      title: t('features.item.safe.title'),
      description: t('features.item.safe.desc'),
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
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-8 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-apfel-medium text-slolingo-primaryText mb-4" dangerouslySetInnerHTML={{ __html: t('features.title.html') }} />
          <p className="text-lg lg:text-xl text-slolingo-secondaryText font-apfel max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-transform duration-300 p-4 lg:p-6"
            >
              <div className={`w-12 h-12 lg:w-16 lg:h-16 ${feature.color} rounded-full flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <img src={feature.icon} alt="" className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>

              <h3 className="text-lg lg:text-xl font-apfel-medium text-slolingo-primaryText mb-3 lg:mb-4">
                {feature.title}
              </h3>

              <p className="text-sm lg:text-body text-slolingo-secondaryText leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
