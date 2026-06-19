import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Vehicle Parking Management System',
    description: 'A web application for efficient parking slot and vehicle record management, streamlining parking operations.',
    tags: ['Web App', 'Python', 'Database'],
    icon: '🅿️',
    gradient: 'from-red-500/20 via-red-900/10 to-transparent',
    accentColor: 'group-hover:border-red-500/40',
    number: '01',
  },
  {
    title: 'Stress Management Website',
    description: 'A platform promoting mental wellness through stress-relief resources and techniques for better mental health.',
    tags: ['Web Design', 'Wellness', 'UI/UX'],
    icon: '🧘',
    gradient: 'from-orange-500/20 via-orange-900/10 to-transparent',
    accentColor: 'group-hover:border-orange-500/40',
    number: '02',
  },
  {
    title: 'Vision Translate',
    description: 'A translation tool to improve multilingual communication and accessibility, breaking language barriers with AI.',
    tags: ['AI', 'NLP', 'Translation'],
    icon: '🌐',
    gradient: 'from-primary/20 via-primary/5 to-transparent',
    accentColor: 'group-hover:border-primary/40',
    number: '03',
  },
  {
    title: 'SMS Spam Detection',
    description: 'A machine learning model to identify and filter spam messages with high accuracy using NLP techniques.',
    tags: ['Machine Learning', 'NLP', 'Python'],
    icon: '📧',
    gradient: 'from-rose-500/20 via-rose-900/10 to-transparent',
    accentColor: 'group-hover:border-rose-500/40',
    number: '04',
  },
  {
    title: 'Movie Recommendation System',
    description: 'A recommendation engine that suggests movies based on user preferences using collaborative filtering.',
    tags: ['ML', 'Recommendation', 'Data Science'],
    icon: '🎬',
    gradient: 'from-amber-500/20 via-amber-900/10 to-transparent',
    accentColor: 'group-hover:border-amber-500/40',
    number: '05',
  },
]

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group"
    >
      <div className={`relative p-10 rounded-3xl border border-cream/5 bg-dark-card/30 backdrop-blur-sm ${project.accentColor} transition-all duration-500 hover:bg-dark-card/60 overflow-hidden`}>
        {/* Background gradient blob */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/4`} />
        
        {/* Project number */}
        <span className="absolute top-8 right-8 text-cream/5 text-7xl font-bold font-[family-name:var(--font-space)] group-hover:text-cream/10 transition-colors duration-500">
          {project.number}
        </span>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <span className="text-5xl block mb-8 group-hover:scale-110 transition-transform duration-500">
            {project.icon}
          </span>

          {/* Title */}
          <h3 className="text-cream text-2xl font-bold mb-4 group-hover:text-primary-light transition-colors duration-300 font-[family-name:var(--font-space)]">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-cream/40 text-base leading-relaxed font-light mb-8 max-w-md">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs text-cream/50 border border-cream/10 group-hover:border-primary/20 group-hover:text-cream/70 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom line accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-700" />
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-40 px-6 relative">
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
          <p className="text-primary text-sm tracking-[0.4em] uppercase mb-4 font-light">My Work</p>
          <h2 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
            <span className="text-cream">Featured</span>{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-cream/40 text-lg mt-6 max-w-xl font-light leading-relaxed">
            Academic projects showcasing my exploration in AI, Machine Learning, and web development.
          </p>
        </motion.div>

        {/* Projects - staggered 2-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Last project - full width */}
        <div className="mt-8">
          <ProjectCard project={projects[4]} index={4} />
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

export default Projects
