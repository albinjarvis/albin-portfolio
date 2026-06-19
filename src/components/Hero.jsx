import React from 'react'
import { motion } from 'framer-motion'
import Scene3D from './Scene3D'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/50 via-transparent to-dark-bg pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-primary-light text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            B.Tech AI & Data Science
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-space)] leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-text-primary">Hi, I'm </span>
            <span className="gradient-text">Albin</span>
            <br />
            <span className="text-text-primary">Jarvis</span>
          </motion.h1>

          <motion.p
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Enthusiastic B.Tech student passionate about Artificial Intelligence, 
            Machine Learning & building impactful tech solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-primary/30 rounded-full text-primary-light font-medium hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary-light rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
