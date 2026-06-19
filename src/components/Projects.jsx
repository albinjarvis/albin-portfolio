import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Vehicle Parking Management System',
    description: 'A web application for efficient parking slot and vehicle record management. Built with modern web technologies to streamline parking operations.',
    tags: ['Web App', 'Python', 'Database'],
    image: '/images/project-parking.jpg',
    color: 'from-primary to-red-700',
  },
  {
    title: 'Stress Management Website',
    description: 'Designed a platform promoting mental wellness through stress-relief resources, offering tools and techniques for better mental health.',
    tags: ['Web Design', 'Wellness', 'UI/UX'],
    image: '/images/project-stress.jpg',
    color: 'from-red-600 to-accent',
  },
  {
    title: 'Vision Translate',
    description: 'Built a translation tool to improve multilingual communication and accessibility, breaking language barriers with AI-powered translations.',
    tags: ['AI', 'NLP', 'Translation'],
    image: '/images/project-translate.jpg',
    color: 'from-accent to-red-800',
  },
  {
    title: 'SMS Spam Detection',
    description: 'Developed a machine learning model to identify and filter spam messages with high accuracy using NLP techniques.',
    tags: ['Machine Learning', 'NLP', 'Python'],
    image: '/images/project-spam.jpg',
    color: 'from-red-500 to-red-900',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Created a recommendation system that suggests movies based on user preferences using collaborative filtering and ML algorithms.',
    tags: ['ML', 'Recommendation', 'Data Science'],
    image: '/images/project-movie.jpg',
    color: 'from-primary to-red-600',
  },
]

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
        {/* Project Image / Gradient */}
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all">
              {index === 0 ? '🅿️' : index === 1 ? '🧘' : index === 2 ? '🌐' : index === 3 ? '📧' : '🎬'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary-light text-sm tracking-[0.3em] uppercase mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Here are some projects I've built during my academic journey, showcasing my skills in AI, ML, and web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
