import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-cream/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          className="text-cream/25 text-sm font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {new Date().getFullYear()} <span className="text-cream/40">Albin Jarvis A</span>
        </motion.p>
        <motion.p
          className="text-cream/25 text-sm font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Crafted with <span className="text-primary/60">&#9829;</span> using React & Three.js
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
