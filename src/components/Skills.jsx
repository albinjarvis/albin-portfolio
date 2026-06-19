import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Python', level: 85, category: 'Languages' },
  { name: 'Machine Learning', level: 75, category: 'AI/ML' },
  { name: 'Data Analysis', level: 80, category: 'AI/ML' },
  { name: 'Team Collaboration', level: 90, category: 'Soft Skills' },
  { name: 'Problem Solving', level: 85, category: 'Soft Skills' },
]

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Data Analysis', icon: '📊' },
  { name: 'Web Development', icon: '🌐' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Git', icon: '📁' },
  { name: 'Problem Solving', icon: '💡' },
]

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-primary-light text-sm tracking-[0.3em] uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all cursor-default group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-3xl mb-2 block group-hover:scale-110 transition-transform">{tech.icon}</span>
              <p className="text-text-secondary text-sm font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-primary font-medium">{skill.name}</span>
                <span className="text-primary-light text-sm font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-dark-card rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
