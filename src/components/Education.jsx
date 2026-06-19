import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Karunya Institute of Technology',
    period: '2025 - 2029',
    status: 'Currently Pursuing',
    icon: '🎓',
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
    icon: '📚',
    highlights: [],
  },
  {
    degree: 'SSLC',
    field: 'Secondary Education',
    institution: 'SSLC Board',
    period: '2023',
    status: '74%',
    icon: '🏫',
    highlights: [],
  },
]

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 relative">
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
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-primary text-xs sm:text-sm tracking-[0.4em] uppercase mb-3 sm:mb-4 font-light">My Journey</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-[family-name:var(--font-space)]">
            <span className="text-cream">Edu</span>
            <span className="gradient-text">cation</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-[23px] sm:left-[27px] md:left-[31px] top-0 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(to bottom, #dc2626, rgba(220,38,38,0.2), transparent)' }}
          />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
                className="relative flex gap-5 sm:gap-8 md:gap-10 group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-cream/10 bg-dark-card/80 flex items-center justify-center text-xl sm:text-2xl group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    {edu.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-150 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <span className="text-primary/80 text-xs sm:text-sm font-mono tracking-wide">
                      {edu.period}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-cream/20 hidden sm:block" />
                    <span className="text-cream/40 text-xs sm:text-sm">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-cream text-lg sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2 group-hover:text-primary-light transition-colors duration-300 font-[family-name:var(--font-space)]">
                    {edu.degree}
                  </h3>

                  <p className="text-primary-light/70 text-sm sm:text-base font-medium mb-1">
                    {edu.field}
                  </p>

                  <p className="text-cream/40 text-xs sm:text-sm font-light">
                    {edu.institution}
                  </p>

                  {edu.highlights.length > 0 && (
                    <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                      {edu.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                          <p className="text-cream/35 text-xs sm:text-sm font-light leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-16 sm:mt-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}

export default Education
