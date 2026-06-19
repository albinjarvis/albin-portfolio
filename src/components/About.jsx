import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="about" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-primary-light text-sm tracking-[0.3em] uppercase mb-3">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Albin Jarvis A"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-dark-card"><span class="text-6xl font-bold gradient-text font-[family-name:var(--font-space)]">AJ</span></div>'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm <span className="text-primary-light font-semibold">Albin Jarvis A</span>, 
              an enthusiastic B.Tech student in Artificial Intelligence and Data Science at 
              Karunya Institute of Technology. I'm passionate about leveraging technology to 
              build impactful solutions and continuously learning new things.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              As a fresher, I'm eager to contribute to meaningful projects and grow as a 
              developer. I love exploring the intersection of AI and real-world applications, 
              turning ideas into working products.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card rounded-xl p-4">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-text-primary font-medium">Tamil Nadu, India</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Email</p>
                <p className="text-text-primary font-medium text-sm">albinjarvis1@gmail.com</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Phone</p>
                <p className="text-text-primary font-medium">+91 95664 13112</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Languages</p>
                <p className="text-text-primary font-medium">English, Tamil</p>
              </div>
            </div>

            {/* Hobbies */}
            <div className="pt-4">
              <p className="text-text-muted text-xs uppercase tracking-wider mb-3">When I'm not coding</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 glass-card rounded-full text-sm text-primary-light flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.93 0 3.68.69 5.05 1.83L12 8.5 6.95 5.83A7.95 7.95 0 0112 4zm-8 8c0-1.62.49-3.13 1.33-4.38L10.5 12l-5.17 4.38A7.95 7.95 0 014 12zm8 8c-1.93 0-3.68-.69-5.05-1.83L12 15.5l5.05 2.67A7.95 7.95 0 0112 20zm1.5-8L18.67 7.62A7.95 7.95 0 0120 12c0 1.62-.49 3.13-1.33 4.38L13.5 12z"/>
                  </svg>
                  Football
                </span>
                <span className="px-4 py-2 glass-card rounded-full text-sm text-accent-light flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  Bike Riding
                </span>
                <span className="px-4 py-2 glass-card rounded-full text-sm text-text-secondary flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  Tech Exploration
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
