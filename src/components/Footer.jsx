import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-dark-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-text-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} <span className="text-primary-light">Albin Jarvis A</span>. All rights reserved.
        </motion.p>
        <motion.p
          className="text-text-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Built with <span className="text-red-400">&#9829;</span> using React & Three.js
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
