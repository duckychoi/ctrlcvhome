'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RevealAnimation from '../components/RevealAnimation'
import GradientButton from '../components/GradientButton'
import Icon from '../components/Icon'

export default function CTASection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        {/* Radial Gradient Burst */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        {mounted && [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{ 
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <div 
              className="w-1 h-1 bg-white rounded-full"
              style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
            />
          </motion.div>
        ))}

        {/* Animated Color Bursts */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transform: 'translate(-50%, -50%)' }}
        />

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-500/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-indigo-500/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <RevealAnimation direction="fade">
          <div className="mb-12">
            {/* Sparkle Icons */}
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon name="sparkles" className="w-8 h-8 text-yellow-400" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: [0, -360],
                    scale: [1.2, 1, 1.2],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon name="star" className="w-6 h-6 text-pink-400" />
                </motion.div>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon name="sparkles" className="w-7 h-7 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              지금, 당신의
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-2">
                두 번째 전성기를
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent mt-2">
                설계하세요
              </span>
            </h1>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            코딩을 몰라도 괜찮습니다. 당신의 이야기와 경험만으로 충분합니다<br />
            30년차 개발자와 AI 기술이 당신의 아이디어를 현실로 만들어 드릴 것입니다
          </p>
        </RevealAnimation>

        {/* CTA Buttons */}
        <RevealAnimation delay={0.5} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(251, 191, 36, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <GradientButton
                variant="primary"
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 flex items-center gap-3 shadow-2xl"
              >
                <Icon name="rocket" className="w-6 h-6" />
                무료로 시작하기
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm ml-2">
                  즉시 시작
                </span>
              </GradientButton>
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(147, 51, 234, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <GradientButton
                variant="secondary"
                size="lg"
                className="text-xl px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 flex items-center gap-3"
              >
                <Icon name="calendar" className="w-6 h-6" />
                제안하기
                <span className="text-sm opacity-75 ml-2">
                  맞춤 상담
                </span>
              </GradientButton>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>무료 체험 가능</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="shield-check" className="w-4 h-4 text-green-400" />
              <span>30일 환불 보장</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="clock" className="w-4 h-4 text-blue-400" />
              <span>언제든 중지 가능</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="users" className="w-4 h-4 text-purple-400" />
              <span>500+ 성공 사례</span>
            </div>
          </div>
        </RevealAnimation>

        {/* Final Message */}
        <RevealAnimation delay={0.7}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-4">
                <Icon name="quote" className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-lg text-gray-300 italic mb-4">
                "가장 위대한 순간은 당신이 시작하는 순간입니다"
              </p>
              <p className="text-sm text-gray-400">
                - VibeLabs 창립자
              </p>
            </div>
          </motion.div>
        </RevealAnimation>

        {/* Final CTA Pulse */}
        <RevealAnimation delay={0.9}>
          <motion.div
            className="mt-12"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full border border-yellow-400/30">
              <motion.div
                className="w-3 h-3 bg-yellow-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-yellow-400 font-medium">
                지금 바로 당신의 여정을 시작하세요
              </span>
            </div>
          </motion.div>
        </RevealAnimation>
      </div>
    </section>
  )
}