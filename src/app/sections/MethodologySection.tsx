'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'

const methodologyTools = [
  {
    icon: '🤖',
    title: 'Cursor AI + Claude Code',
    description: 'AI와 대화하듯 코딩하는 새로운 패러다임. 복잡한 문법 대신 자연어로 생각을 코드로 변환합니다.',
    features: ['실시간 AI 파트너십', '자연어 코딩', '스마트 자동완성', '학습 곡선 최소화']
  },
  {
    icon: '⚡',
    title: 'Next.js + Supabase + Vercel',
    description: '현대적 웹 개발의 완벽한 삼각관계. 아이디어를 현실로 만드는 가장 빠른 방법입니다.',
    features: ['풀스택 통합', '실시간 데이터베이스', '자동 배포', '서버리스 아키텍처']
  },
  {
    icon: '📱',
    title: 'Flutter',
    description: '하나의 코드로 모바일과 웹을 지배하는 크로스플랫폼 혁명. 더 이상 플랫폼에 갇히지 마세요.',
    features: ['단일 코드베이스', '네이티브 성능', '풍부한 위젯', '핫 리로드']
  },
  {
    icon: '📋',
    title: 'Spec-Driven',
    description: '명확한 스펙이 만족스러운 결과를 보장합니다. 추측 대신 확실한 계획으로 개발하세요.',
    features: ['요구사명 명세화', '명확한 가이드라인', '품질 보증', '효율적 협업']
  }
]

export default function MethodologySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-16">
            <SectionLabel text="METHODOLOGY" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              복잡한 문법은 잊으세요.
              <br />
              이제, 코딩은 '대화'입니다
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI 시대의 개발 패러다임을 재정의합니다. 
              더 이상 기술에 얽매이지 말고, 당신의 아이디어에 집중하세요.
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodologyTools.map((tool, index) => (
            <RevealAnimation key={tool.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GlassCard className="h-full group hover:bg-white/10 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tool.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.8}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-medium">
                이 4가지 도구로 당신의 아이디어를 24시간 안에 현실로 만듭니다
              </span>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}