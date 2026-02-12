'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GradientButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

export default function GradientButton({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false
}: GradientButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
  `

  const variantClasses = variant === 'primary'
    ? `
      bg-gradient-to-r from-violet-600 to-indigo-600
      text-white
      hover:from-violet-700 hover:to-indigo-700
      focus:ring-violet-500
      shadow-lg shadow-violet-500/25
      hover:shadow-xl hover:shadow-violet-500/35
    `
    : `
      bg-white/10 backdrop-blur-sm
      border border-white/20
      text-white
      hover:bg-white/20 hover:border-white/30
      focus:ring-white/50
      shadow-lg
      hover:shadow-xl
    `

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  )
}