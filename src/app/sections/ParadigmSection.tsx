'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function ParadigmSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const beforeItems = [
    "책상 위 코딩 책 더미",
    "암기하려다 스트레스",
    "에러 메시지 공포증",
    "혼자 끙끙 앓는 밤",
    "포기 직전의 좌절감"
  ]

  const afterItems = [
    "AI가 코딩의 언어가 되어",
    "대화하며 자연스럽게 학습",
    "문제 해결의 즐거움",
    "동료들과 함께 성장",
    "창작자로서의 자신감"
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-950 via-gray-950 to-slate-950 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        {/* Split Background Effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-emerald-950/20" />
        </div>

        {/* Floating Particles */}
        {mounted && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1
            }}
            animate={{ 
              opacity: [0.1, 0.5, 0.1],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Glow Effects */}
        <motion.div
          className="absolute top-20 left-20 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="PARADIGM SHIFT" className="mb-6 text-amber-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              고통스러운 암기인가, 즐거운 창작인가
              <span className="block bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                코딩 학습의 패러다임이 바뀝니다
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              이제 코딩은 외워야 할 지식이 아니라, 당신의 아이디어를 현실로 만드는 도구입니다<br />
              고통스러운 암기의 시대는 끝났습니다
            </p>
          </RevealAnimation>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Before Card */}
          <RevealAnimation delay={0.3}>
            <GlassCard className="relative overflow-hidden border-red-500/20 bg-gradient-to-br from-red-950/10 to-transparent">
              {/* Before Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold border border-red-500/30">
                  BEFORE
                </div>
              </div>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Icon name="x-circle" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">고통스러운 암기</h3>
                  <p className="text-gray-400">전통적인 코딩 학습</p>
                </div>
              </div>

              {/* Visual Pain Points */}
              <div className="space-y-4 mb-6">
                {beforeItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                      <Icon name="frown" className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Warning */}
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <div className="flex items-center gap-3">
                  <Icon name="alert-triangle" className="w-5 h-5 text-red-400" />
                  <span className="text-red-400 font-medium">90%의 초보자가 3개월 안에 포기합니다</span>
                </div>
              </div>
            </GlassCard>
          </RevealAnimation>

          {/* After Card */}
          <RevealAnimation delay={0.4}>
            <GlassCard className="relative overflow-hidden border-emerald-500/20 bg-gradient-to-br from-emerald-950/10 to-transparent">
              {/* After Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-bold border border-emerald-500/30">
                  AFTER
                </div>
              </div>

              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center">
                  <Icon name="check-circle" className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">즐거운 창작</h3>
                  <p className="text-gray-400">AI 기반 바이브 코딩</p>
                </div>
              </div>

              {/* Visual Success Points */}
              <div className="space-y-4 mb-6">
                {afterItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                      <Icon name="smile" className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Success */}
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <div className="flex items-center gap-3">
                  <Icon name="trending-up" className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">95%가 1개월 안에 첫 프로젝트 완성</span>
                </div>
              </div>
            </GlassCard>
          </RevealAnimation>
        </div>

        {/* Transformation Arrow */}
        <RevealAnimation delay={0.5} className="flex justify-center mb-16">
          <motion.div
            className="relative"
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-4 text-amber-400">
              <span className="text-lg font-bold">변화</span>
              <Icon name="arrow-right" className="w-8 h-8" />
              <span className="text-lg font-bold">성장</span>
            </div>
          </motion.div>
        </RevealAnimation>

        {/* Key Benefits */}
        <RevealAnimation delay={0.6}>
          <GlassCard className="bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border-amber-500/20 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="brain" className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">자연스러운 학습</h4>
                <p className="text-gray-400 text-sm">외우지 않고, 대화하며 자연스럽게 코딩을 배웁니다</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="zap" className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">10배 빠른 성장</h4>
                <p className="text-gray-400 text-sm">AI가 30년 경험을 담아 당신의 성장을 가속화합니다</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="heart" className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">즐거운 경험</h4>
                <p className="text-gray-400 text-sm">스트레스 대신 성취감과 즐거움을 느끼게 됩니다</p>
              </div>
            </div>
          </GlassCard>
        </RevealAnimation>
      </div>
    </section>
  )
}