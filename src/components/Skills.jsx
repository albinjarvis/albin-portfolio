import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Python', icon: '🐍', description: 'Core language for AI/ML development' },
  { name: 'Machine Learning', icon: '🤖', description: 'Building intelligent systems' },
  { name: 'Data Analysis', icon: '📊', description: 'Extracting insights from data' },
  { name: 'TensorFlow', icon: '🧠', description: 'Deep learning frameworks' },
  { name: 'Web Development', icon: '🌐', description: 'Full-stack web applications' },
  { name: 'SQL & Databases', icon: '🗃️', description: 'Data storage & retrieval' },
  { name: 'Pandas & NumPy', icon: '🐼', description: 'Data manipulation tools' },
  { name: 'Git & GitHub', icon: '📁', description: 'Version control & collaboration' },
  { name: 'Problem Solving', icon: '💡', description: 'Analytical thinking' },
  { name: 'Team Collaboration', icon: '🤝', description: 'Working together effectively' },
]

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="py-40 px-6 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-light">My Toolkit</p>
          <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
            <span className="text-cream">Skills &</span>{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-cream/40 text-lg mt-6 max-w-xl font-light leading-relaxed">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid - floating cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative p-8 rounded-2xl border border-cream/5 bg-dark-card/50 backdrop-blur-sm group-hover:border-primary/20 transition-all duration-500">
                {/* Icon */}
                <span className="text-4xl block mb-5 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                
                {/* Name */}
                <h3 className="text-cream font-semibold text-lg mb-2 group-hover:text-primary-light transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Description */}
                <p className="text-cream/40 text-sm font-light leading-relaxed">
                  {skill.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Skills
