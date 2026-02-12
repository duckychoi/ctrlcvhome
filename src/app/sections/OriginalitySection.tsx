'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'

const originalityPoints = [
  {
    icon: '🎯',
    title: '직관력',
    description: '30년의 경험은 단순한 지식이 아니라, 문제의 본질을 꿰뚫어 보는 직관력입니다. AI가 모방할 수 없는 깊이입니다.',
    highlight: '문제의 본질을 꿰뚫는 통찰'
  },
  {
    icon: '⚡',
    title: '속도',
    description: '수많은 실수를 통해 얻은 감각은 최적의 해결책을 즉시 찾아냅니다. 시행착오를 줄이는 가장 빠른 길입니다.',
    highlight: '수천 시간의 경험이 만든 즉각적 판단'
  },
  {
    icon: '🔄',
    title: '적응력',
    description: '기술은 변하지만 원칙은 변하지 않습니다. 30년의 내공은 어떤 기술 변화에도 유연하게 대응하는 힘을 줍니다.',
    highlight: '변하는 기술, 변하지 않는 원칙'
  },
  {
    icon: '🎨',
    title: '심미성',
    description: '좋은 코드는 작동하는 것을 넘어 아름다워야 합니다. 수많은 실험을 통해 얻은 코드의 미학을 알려드립니다.',
    highlight: '작동하는 것을 넘어 아름다운 코드'
  },
  {
    icon: '🌟',
    title: '비전',
    description: '기술은 수단일 뿐, 목적이 아닙니다. 30년의 경험은 기술을 진정한 가치 창출로 연결하는 비전을 제시합니다.',
    highlight: '기술을 가치로 연결하는 지혜'
  }
]

export default function OriginalitySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with dramatic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/20 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-amber-500/30 rotate-45" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-2 border-orange-500/30 rotate-12" />
      </div>

      <div className="relative container mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-16">
            <SectionLabel text="ORIGINALITY" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              왜 AI 시대에 '30년의 내공'이 
              <br />
              더 절실할까요?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI가 코드를 작성할 수 있지만, 진정한 가치는 경험에서 나옵니다.
              <br />
              기술 이상의 무언가를 원하신다면, 이 이야기를 들어보세요.
            </p>
          </div>
        </RevealAnimation>

        {/* Central Question */}
        <RevealAnimation delay={0.2}>
          <div className="text-center mb-16">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-xl">
              <div className="text-3xl font-bold text-white mb-2">
                "AI가 할 수 있는 일 vs AI가 할 수 없는 일"
              </div>
              <div className="text-lg text-amber-200">
                그 차이가 바로 30년의 내공입니다
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Originality Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {originalityPoints.map((point, index) => (
            <RevealAnimation key={point.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GlassCard className={`h-full group hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden`}>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {point.description}
                    </p>

                    {/* Highlight */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-amber-300">
                          {point.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        {/* Philosophy Statement */}
        <RevealAnimation delay={0.8}>
          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 italic">
                "AI는 최선을 알려줄 수 있지만, 
                <br />
                현명은 가장 적은 비용으로 최선을 얻는 법을 압니다."
              </blockquote>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500" />
                <span className="text-sm font-medium tracking-wider uppercase">30년 내공의 철학</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500" />
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Call to Action */}
        <RevealAnimation delay={1.0}>
          <div className="text-center mt-12">
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white font-semibold cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>내공의 비밀 알아보기</span>
              <span className="text-xl">✨</span>
            </motion.div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}