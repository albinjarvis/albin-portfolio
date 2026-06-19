import React, { useRef, useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SparklesBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate random sparkles
  const sparkles = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }))
  }, [])

  // Galaxy stars - tiny dots
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleDelay: Math.random() * 4,
    }))
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#0d0508]" />
      
      {/* Nebula clouds */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.03] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
          left: '20%',
          top: '10%',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.02] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #f87171 0%, transparent 70%)',
          right: '10%',
          top: '50%',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.015] blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #fdf6e3 0%, transparent 70%)',
          left: '50%',
          bottom: '10%',
        }}
      />

      {/* Mouse follow glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[80px] transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, #dc2626 0%, transparent 70%)',
          left: mousePos.x - 200,
          top: mousePos.y - 200,
        }}
      />

      {/* Galaxy stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-cream"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: 3,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Sparkles - glowing dots that pulse */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: sparkle.id % 3 === 0 ? '#dc2626' : sparkle.id % 3 === 1 ? '#f87171' : '#fdf6e3',
            boxShadow: `0 0 ${sparkle.size * 4}px ${sparkle.id % 2 === 0 ? '#dc2626' : '#fdf6e3'}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating orbs */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary/60 blur-[1px]"
        style={{ left: '15%', top: '20%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-accent/40 blur-[2px]"
        style={{ right: '20%', top: '40%' }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-cream/50 blur-[1px]"
        style={{ left: '70%', top: '70%' }}
        animate={{
          y: [0, -50, 0],
          x: [0, 25, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Drip lines */}
      <motion.div
        className="absolute w-px h-32 left-[10%] top-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, #dc2626, transparent)',
        }}
        animate={{ y: ['-100%', '100vh'], opacity: [0, 0.4, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 0, ease: "linear" }}
      />
      <motion.div
        className="absolute w-px h-48 left-[30%] top-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, #f87171, transparent)',
        }}
        animate={{ y: ['-100%', '100vh'], opacity: [0, 0.3, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2, ease: "linear" }}
      />
      <motion.div
        className="absolute w-px h-24 left-[55%] top-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, #fdf6e3, transparent)',
        }}
        animate={{ y: ['-100%', '100vh'], opacity: [0, 0.2, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 4, ease: "linear" }}
      />
      <motion.div
        className="absolute w-px h-36 left-[75%] top-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, #dc2626, transparent)',
        }}
        animate={{ y: ['-100%', '100vh'], opacity: [0, 0.3, 0] }}
        transition={{ duration: 9, repeat: Infinity, delay: 1, ease: "linear" }}
      />
      <motion.div
        className="absolute w-px h-40 left-[90%] top-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, #f87171, transparent)',
        }}
        animate={{ y: ['-100%', '100vh'], opacity: [0, 0.25, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3, ease: "linear" }}
      />
    </div>
  )
}

export default SparklesBackground
