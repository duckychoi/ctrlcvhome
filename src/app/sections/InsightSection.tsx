'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'
import SectionLabel from '../components/SectionLabel'

export default function InsightSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const insights = [
    {
      icon: "🧭",
      title: "방향을 설정하는 것은 당신입니다",
      description: "AI는 어떻게든 할 수 있습니다. 하지만 '무엇을' 왜 만들어야 하는지 아는 것은 오직 당신뿐입니다.",
      details: [
        "비전과 목표 설정은 인간의 고유 영역",
        "AI는 도구일 뿐, 목적이 될 수 없습니다",
        "당신의 경험이 최고의 가이드입니다"
      ],
      delay: 0
    },
    {
      icon: "❓",
      title: "올바른 질문을 던지는 것",
      description: "답보다 질문이 더 중요합니다. 당신이 던지는 질문의 깊이가 AI의 결과를 결정합니다.",
      details: [
        "문제를 정확히 이해하는 능력",
        "비판적 사고와 분석력",
        "상황을 파악하는 통찰력"
      ],
      delay: 0.2
    },
    {
      icon: "📖",
      title: "이야기의 힘을 믿으세요",
      description: "데이터와 정보는 넘쳐나지만, 진정한 영감은 이야기에서 옵니다. 당신의 이야기가 가장 강력한 자산입니다.",
      details: [
        "경험과 감정은 AI가 흉내 낼 수 없습니다",
        "공감과 이해는 인간의 고유 능력",
        "스토리텔링이 최고의 소통입니다"
      ],
      delay: 0.4
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealAnimation className="text-center mb-16">
          <SectionLabel text="Insight" className="mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            AI는 '손'이 빠를 뿐,<br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              '길'을 아는 건 당신입니다
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            기술은 도구일 뿐입니다. 진정한 가치는 인간의 통찰력과 경험에서 나옵니다.
          </p>
        </RevealAnimation>

        {/* Quote Banner */}
        <RevealAnimation delay={0.2} className="mb-16">
          <GlassCard className="p-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed mb-4">
              "AI가 증기기관이라면, 당신은 그 기관을 어디로 이끌지 아는 기관사입니다."
            </blockquote>
            <div className="text-violet-400 font-semibold">— VibeLabs</div>
          </GlassCard>
        </RevealAnimation>

        {/* Insight Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <RevealAnimation
              key={index}
              delay={insight.delay}
              className="h-full"
            >
              <motion.div
                className="h-full cursor-pointer"
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className={`h-full ${activeCard === index ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-black' : ''}`}>
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-5xl">{insight.icon}</div>
                    {activeCard === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white text-sm">✓</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {insight.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {insight.description}
                  </p>

                  {/* Expanded Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: activeCard === index ? 'auto' : 0,
                      opacity: activeCard === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <ul className="space-y-2">
                        {insight.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: detailIndex * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Click Indicator */}
                  <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
                    <span>{activeCard === index ? '클릭하여 접기' : '클릭하여 자세히 보기'}</span>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        {/* Bottom Message */}
        <RevealAnimation delay={0.8}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-violet-500/10 border border-violet-500/30 rounded-full">
              <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse" />
              <span className="text-violet-300 font-semibold">
                당신의 경험이야말로 최고의 기술입니다
              </span>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}