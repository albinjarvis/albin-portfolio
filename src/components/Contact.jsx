import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-4 font-light">Let's Connect</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
            <span className="text-cream">Get In</span>{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-cream/40 text-base sm:text-lg mt-4 sm:mt-6 max-w-lg mx-auto font-light leading-relaxed">
            Have an idea or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 sm:space-y-12"
          >
            <div>
              <h3 className="text-cream text-xl sm:text-2xl font-bold font-[family-name:var(--font-space)] mb-3 sm:mb-4">
                Let's build something together.
              </h3>
              <p className="text-cream/40 font-light leading-relaxed text-sm sm:text-base">
                I'm always open to new opportunities and interesting projects.
                Whether it's a collaboration or just a friendly hello — drop me a line.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-8">
              <a href="mailto:albinjarvis1@gmail.com" className="group flex items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cream/50 group-hover:text-primary-light transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Email</p>
                  <p className="text-cream/80 font-medium text-sm sm:text-base group-hover:text-primary-light transition-colors break-all">albinjarvis1@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919566413112" className="group flex items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cream/50 group-hover:text-primary-light transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Phone</p>
                  <p className="text-cream/80 font-medium text-sm sm:text-base group-hover:text-primary-light transition-colors">+91 95664 13112</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 sm:gap-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cream/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Location</p>
                  <p className="text-cream/80 font-medium text-sm sm:text-base">Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
              <motion.a
                href="https://github.com/albinjarvis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:text-primary-light hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/albinjarvis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-cream/10 flex items-center justify-center text-cream/40 hover:text-primary-light hover:border-primary/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-2 sm:mb-3">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-cream/10 text-cream placeholder-cream/20 focus:border-primary/50 focus:outline-none transition-all font-light text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-2 sm:mb-3">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-cream/10 text-cream placeholder-cream/20 focus:border-primary/50 focus:outline-none transition-all font-light text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase block mb-2 sm:mb-3">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-0 py-3 sm:py-4 bg-transparent border-b border-cream/10 text-cream placeholder-cream/20 focus:border-primary/50 focus:outline-none transition-all resize-none font-light text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="group relative w-full sm:w-auto mt-2 sm:mt-4 px-8 sm:px-10 py-3.5 sm:py-4 bg-primary rounded-full text-cream font-medium overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 text-sm sm:text-base">
                  {submitted ? '✓ Sent Successfully' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.3)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
