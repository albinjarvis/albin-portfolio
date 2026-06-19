import React from 'react'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Subtle top badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-cream/70 text-xs sm:text-sm tracking-widest uppercase font-light">
              Available for opportunities
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold font-[family-name:var(--font-space)] leading-[0.9] mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <span className="text-cream block">Albin</span>
            <span className="gradient-text block mt-2">Jarvis</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-cream/50 text-base sm:text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10 sm:mb-16 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            B.Tech in <span className="text-primary-light font-normal">Artificial Intelligence</span> & 
            <span className="text-primary-light font-normal"> Data Science</span>
            <br />
            <span className="text-cream/30 text-sm sm:text-lg">Building the future with code & creativity</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.a
              href="#projects"
              className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 bg-primary rounded-full text-cream font-medium overflow-hidden text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 sm:px-10 py-4 border border-cream/20 rounded-full text-cream/80 font-medium hover:border-primary/50 hover:text-cream transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Say Hello
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - hidden on mobile */}
        <motion.div
          className="hidden sm:block absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-cream/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
