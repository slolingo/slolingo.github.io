import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-slolingo backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/general/slolingo_logo.svg" alt="Slolingo" className="h-10" />
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 