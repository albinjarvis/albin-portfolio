import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-4 font-light">Who I Am</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
            <span className="text-cream">About</span>{' '}
            <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Content - Photo + Text */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
          
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-none">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Photo frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-cream/10 group-hover:border-primary/30 transition-colors duration-500">
                <img
                  src="/images/profile.jpg"
                  alt="Albin Jarvis A"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-card to-dark-surface">
                        <span class="text-7xl sm:text-8xl font-bold gradient-text font-[family-name:var(--font-space)]">AJ</span>
                      </div>
                    `
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-3 space-y-8 sm:space-y-10"
          >
            <div className="space-y-5 sm:space-y-6">
              <p className="text-cream/80 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                I'm <span className="text-primary-light font-medium">Albin Jarvis A</span> — 
                an enthusiastic first-year B.Tech student specializing in 
                <span className="text-cream font-medium"> Artificial Intelligence & Data Science</span> at 
                Karunya Institute of Technology.
              </p>
              <p className="text-cream/50 text-base sm:text-lg leading-relaxed font-light">
                I believe in the power of technology to transform lives. As a fresher, I bring 
                fresh perspectives and boundless curiosity to every project I touch. 
                I'm constantly exploring, learning, and building.
              </p>
            </div>

            {/* Minimal info blocks */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="space-y-1">
                <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Location</p>
                <p className="text-cream/80 font-medium text-sm sm:text-base">Tamil Nadu, India</p>
              </div>
              <div className="space-y-1">
                <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Languages</p>
                <p className="text-cream/80 font-medium text-sm sm:text-base">English, Tamil</p>
              </div>
              <div className="space-y-1">
                <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Email</p>
                <p className="text-cream/80 font-medium text-xs sm:text-sm break-all">albinjarvis1@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase">Phone</p>
                <p className="text-cream/80 font-medium text-sm sm:text-base">+91 95664 13112</p>
              </div>
            </div>

            {/* Hobbies */}
            <div className="pt-6 sm:pt-8 border-t border-cream/5">
              <p className="text-cream/30 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4 sm:mb-5">When I'm not coding</p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <motion.span
                  className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-primary/20 bg-primary/5 text-primary-light text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(220,38,38,0.5)' }}
                >
                  <span className="text-base sm:text-lg">⚽</span>
                  Football
                </motion.span>
                <motion.span
                  className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-cream/10 bg-cream/5 text-cream/70 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(253,246,227,0.3)' }}
                >
                  <span className="text-base sm:text-lg">🏍️</span>
                  Bike Riding
                </motion.span>
                <motion.span
                  className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-cream/10 bg-cream/5 text-cream/70 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(253,246,227,0.3)' }}
                >
                  <span className="text-base sm:text-lg">🚀</span>
                  Tech Exploration
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
