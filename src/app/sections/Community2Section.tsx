'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import Icon from '../components/Icon'

export default function Community2Section() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const chatFeatures = [
    {
      icon: "message-circle",
      title: "실시간 소통",
      description: "코딩하는 중 궁금한 점이 생기면 언제든 물어보세요"
    },
    {
      icon: "users",
      title: "동료들과의 교류",
      description: "같은 고민을 하는 사람들과 함께 성장하세요"
    },
    {
      icon: "zap",
      title: "빠른 답변",
      description: "30년차 개발자의 경험과 AI 기술이 함께 답변해드려요"
    }
  ]

  const testimonials = [
    {
      name: "김문과",
      role: "디자이너 → 개발자 전향",
      content: "코딩이 너무 어려워서 포기할 뻔했어요. 오픈채팅방에서 질문하고 답변하다 보니 어느새 혼자서도 코딩하게 되었네요!",
      rating: 5
    },
    {
      name: "이비전",
      role: "기획자 → 개발자",
      content: "개발자들이 너무 어려운 용어만 써서 힘들었는데 여기선 우리 말로 다 설명해주셔서 이해하기 쉬웠어요.",
      rating: 5
    },
    {
      name: "박40대",
      role: "주부 → 개발자",
      content: "나이가 많아서 시작하기 늦었나 걱정했는데, 오픈채팅방에 비슷한 분들이 많아서 용기 얻었어요.",
      rating: 5
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-purple-950 via-indigo-950/20 to-purple-950 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0">
        {/* Chat Bubble Pattern */}
        <div className="absolute inset-0">
          {mounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 border border-purple-500/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1
              }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ 
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
          }}
          transition={{ 
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="COMMUNITY" className="mb-6 text-purple-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              바이브 코더들이 모이는 오픈채팅방
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                24시간 지식과 경험을 나누는 공간
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              혼자서 해결하지 못해 좌절한 경험, 이제 그만하세요<br />
              당신의 질문을 기다리는 동료들이 여기에 있습니다
            </p>
          </RevealAnimation>
        </div>

        {/* Chat Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {chatFeatures.map((feature, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <GlassCard className="text-center group cursor-pointer border-purple-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Live Chat Preview */}
        <RevealAnimation delay={0.6} className="mb-16">
          <GlassCard className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/20 overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white/10" />
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full border-2 border-white/10" />
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-400 rounded-full border-2 border-white/10" />
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full border-2 border-white/10" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">127명이 채팅 중</span>
              </div>
            </div>

            {/* Mock Chat Messages */}
            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-purple-500/20 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-sm text-white">혹시 useState랑 useEffect 차이점 쉽게 설명해주실 분 있나요?</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">2분 전</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-indigo-500/20 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-sm text-white">useState는 상태 저장이고 useEffect는 부가적인 일을 할 때 쓰는 거예요!</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">1분 전</span>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-green-500/20 rounded-2xl rounded-tl-none px-4 py-3">
                    <p className="text-sm text-white">🚀 오늘 React 프로젝트 완료했다! 여기 덕분에 가능했어 🙏</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">방금</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-white/5 border border-purple-500/20 rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/40 transition-colors"
                disabled
              />
              <motion.button
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon name="send" className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </GlassCard>
        </RevealAnimation>

        {/* Testimonials */}
        <RevealAnimation delay={0.7} className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">채팅방에서 시작된 성공 스토리</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <RevealAnimation key={index} delay={0.1 * index}>
                <GlassCard className="text-center border-purple-500/20">
                  <div className="flex justify-center mb-4">
                    {mounted && [...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="star" className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </GlassCard>
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        {/* Kakao Chat CTA */}
        <RevealAnimation delay={0.8}>
          <div className="relative">
            <GlassCard className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 text-center overflow-hidden">
              {/* Kakao Yellow Accent */}
              <div className="absolute top-4 right-4">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                  KAKAO
                </div>
              </div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-500/25">
                  <Icon name="message-circle" className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  지금 바로 오픈채팅방에 참여하세요
                </h3>
                <p className="text-gray-300 mb-6">
                  수백 명의 바이브 코더들이 당신을 기다리고 있습니다<br />
                  지금 바로 질문하고 함께 성장하세요!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg flex items-center gap-2"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(250, 204, 21, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon name="message-circle" className="w-5 h-5" />
                    카카오 오픈채팅방 가입
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full text-purple-400 font-medium hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    채팅방 규칙 보기
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Icon name="clock" className="w-4 h-4" />
                    <span>24시간 운영</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="users" className="w-4 h-4" />
                    <span>127명 활동 중</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="shield" className="w-4 h-4" />
                    <span>안전한 공간</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}