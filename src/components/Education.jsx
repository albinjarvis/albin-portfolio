import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Karunya Institute of Technology',
    period: '2025 - 2029 (Expected)',
    status: 'Currently Pursuing First Year',
    highlights: [
      'Participated in technical workshops and seminars',
      'Engaged in university technical communities',
    ],
  },
  {
    degree: 'Higher Secondary Education',
    field: 'Science Stream',
    institution: 'Carmel Garden Matriculation',
    period: '2025',
    status: 'Completed',
    highlights: [],
  },
  {
    degree: 'SSLC',
    field: 'Secondary Education',
    institution: 'SSLC Board',
    period: '2023',
    status: '74%',
    highlights: [],
  },
]

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-primary-light text-sm tracking-[0.3em] uppercase mb-3">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)]">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg -translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs text-primary-light font-medium">
                      {edu.period}
                    </span>
                    {edu.status && (
                      <span className="px-3 py-1 bg-accent/10 rounded-full text-xs text-accent-light font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-light transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-primary-light font-medium text-sm mt-1">{edu.field}</p>
                  <p className="text-text-secondary text-sm mt-1">{edu.institution}</p>
                  {edu.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">&#8226;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
