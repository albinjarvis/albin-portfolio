import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="text-6xl font-bold font-[family-name:var(--font-space)]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="gradient-text">AJ</span>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="w-48 h-px bg-cream/5 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Text */}
        <motion.p
          className="text-cream/20 text-xs tracking-[0.4em] uppercase font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Loading
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Loader
