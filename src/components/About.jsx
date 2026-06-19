import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="py-40 px-6 relative">
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
          className="mb-24"
        >
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-light">Who I Am</p>
          <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
            <span className="text-cream">About</span>{' '}
            <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        {/* Content - Photo + Text side by side */}
        <div className="grid md:grid-cols-5 gap-16 items-start">
          
          {/* Profile Photo - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-2"
          >
            <div className="relative group">
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
                        <span class="text-8xl font-bold gradient-text font-[family-name:var(--font-space)]">AJ</span>
                      </div>
                    `
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text content - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-3 space-y-10"
          >
            <div className="space-y-6">
              <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-light">
                I'm <span className="text-primary-light font-medium">Albin Jarvis A</span> — 
                an enthusiastic first-year B.Tech student specializing in 
                <span className="text-cream font-medium"> Artificial Intelligence & Data Science</span> at 
                Karunya Institute of Technology.
              </p>
              <p className="text-cream/50 text-lg leading-relaxed font-light">
                I believe in the power of technology to transform lives. As a fresher, I bring 
                fresh perspectives and boundless curiosity to every project I touch. 
                I'm constantly exploring, learning, and building.
              </p>
            </div>

            {/* Minimal info blocks */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-1">
                <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">Location</p>
                <p className="text-cream/80 font-medium">Tamil Nadu, India</p>
              </div>
              <div className="space-y-1">
                <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">Languages</p>
                <p className="text-cream/80 font-medium">English, Tamil</p>
              </div>
              <div className="space-y-1">
                <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">Email</p>
                <p className="text-cream/80 font-medium text-sm">albinjarvis1@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-cream/30 text-xs tracking-[0.2em] uppercase">Phone</p>
                <p className="text-cream/80 font-medium">+91 95664 13112</p>
              </div>
            </div>

            {/* Hobbies - elegant pills */}
            <div className="pt-8 border-t border-cream/5">
              <p className="text-cream/30 text-xs tracking-[0.2em] uppercase mb-5">When I'm not coding</p>
              <div className="flex flex-wrap gap-4">
                <motion.span
                  className="px-6 py-3 rounded-full border border-primary/20 bg-primary/5 text-primary-light text-sm font-medium flex items-center gap-3"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(220,38,38,0.5)' }}
                >
                  <span className="text-lg">⚽</span>
                  Football
                </motion.span>
                <motion.span
                  className="px-6 py-3 rounded-full border border-cream/10 bg-cream/5 text-cream/70 text-sm font-medium flex items-center gap-3"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(253,246,227,0.3)' }}
                >
                  <span className="text-lg">🏍️</span>
                  Bike Riding
                </motion.span>
                <motion.span
                  className="px-6 py-3 rounded-full border border-cream/10 bg-cream/5 text-cream/70 text-sm font-medium flex items-center gap-3"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(253,246,227,0.3)' }}
                >
                  <span className="text-lg">🚀</span>
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
