'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'

const journeySteps = [
  {
    phase: 'Reader',
    title: '읽는 사람',
    description: '다른 사람의 코드를 이해하고, 기술 문서를 소화하며, 최신 트렌드를 따라갑니다.',
    icon: '📚',
    color: 'from-blue-500 to-cyan-500',
    skills: ['코드 리딩', '문서 이해', '트렌드 파악', '기본 문법'],
    mindset: '학습자 마인드셋'
  },
  {
    phase: 'Coder',
    title: '코딩하는 사람',
    description: '스스로 생각을 코드로 표현하고, 문제를 해결하며, 실용적인 솔루션을 만듭니다.',
    icon: '💻',
    color: 'from-purple-500 to-pink-500',
    skills: ['알고리즘', '문제 해결', '코드 구현', '디버깅'],
    mindset: '실천자 마인드셋'
  },
  {
    phase: 'Creator',
    title: '창작하는 사람',
    description: '새로운 가치를 창출하고, 사람들의 문제를 해결하며, 세상을 바꾸는 제품을 만듭니다.',
    icon: '🚀',
    color: 'from-orange-500 to-red-500',
    skills: ['제품 설계', '비전 제시', '팀 리딩', '가치 창출'],
    mindset: '창조자 마인드셋'
  }
]

export default function JourneySection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900/20 to-pink-900" />
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-purple-500/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-blue-500/20 rotate-12 animate-spin" style={{ animationDuration: '30s' }} />
      </div>

      <div className="relative container mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-20">
            <SectionLabel text="Creator's Journey" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              창작자의 여정
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              코드를 읽는 것에서 시작해 세상을 바꾸는 제품을 만드는 창조자까지
            </p>
          </div>
        </RevealAnimation>

        {/* Journey Path Visual */}
        <div className="relative mb-16">
          <RevealAnimation>
            <div className="flex justify-center items-center">
              <div className="hidden md:block absolute w-full h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-orange-500/30" />
              <div className="relative flex justify-center items-center gap-4 md:gap-8">
                {['Reader', 'Coder', 'Creator'].map((step, index) => (
                  <div key={step} className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.2, type: "spring" }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                        index === 0 ? 'from-blue-500 to-cyan-500' :
                        index === 1 ? 'from-purple-500 to-pink-500' :
                        'from-orange-500 to-red-500'
                      } flex items-center justify-center text-white font-bold shadow-lg`}
                    >
                      {index + 1}
                    </motion.div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-300 whitespace-nowrap">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Journey Steps Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {journeySteps.map((step, index) => (
            <RevealAnimation key={step.phase} delay={index * 0.2}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <GlassCard className={`h-full group hover:border-white/20 transition-all duration-500`}>
                  {/* Phase Header */}
                  <div className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 border border-white/10`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium`}>
                        Phase {index + 1}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.phase}</h3>
                    <h4 className="text-lg font-medium text-gray-300 mt-1">{step.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">핵심 역량</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {step.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                          <span className="text-sm text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mindset */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">마인드셋</span>
                      <span className="text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full">
                        {step.mindset}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </RevealAnimation>
          ))}
        </div>

        {/* Call to Action */}
        <RevealAnimation delay={0.8}>
          <div className="text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/20 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                어느 단계에 계신가요?
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                당신의 현재 위치를 확인하고, 다음 단계로 나아갈 구체적인 방법을 알아보세요.
              </p>
              <motion.div
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>나의 여정 시작하기</span>
                <span className="text-xl">→</span>
              </motion.div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}