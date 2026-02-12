'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealAnimationProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'fade'
  className?: string
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
}

export default function RevealAnimation({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: RevealAnimationProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1],
        delay
      }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  )
}