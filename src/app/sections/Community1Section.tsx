'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function Community1Section() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const features = [
    {
      icon: "book",
      title: "2026 독서모임",
      description: "기술과 인문학의 경계에서 함께 책을 읽고 생각을 나누는 공간",
      items: [
        "월 2회 정기 모임 (온/오프라인 병행)",
        "기술 서적 & 인문학 도서 선정",
        "깊이 있는 토론과 사유의 시간",
        "독후감 공유와 지식 축적"
      ]
    },
    {
      icon: "users",
      title: "AI 크리에이터 커뮤니티",
      description: "새로운 시대를 만들어가는 크리에이터들의 모임",
      items: [
        "AI 활용 노하우 공유",
        "크리에이터 간 협업 프로젝트",
        "최신 트렌드 및 기술 정보 교류",
        "성공 사례 분석 및 네트워킹"
      ]
    }
  ]

  const values = [
    { icon: "heart", label: "따뜻한 소통", desc: "차가운 기술 속 인간적인 연결" },
    { icon: "brain", label: "지적 성장", desc: "서로의 지혜로 함께 발전" },
    { icon: "sparkles", label: "창의적 영감", desc: "새로운 아이디어의 발견" },
    { icon: "handshake", label: "신뢰 기반", desc: "서로를 존중하는 관계" }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-950 via-blue-950/20 to-indigo-950 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0">
        {/* Starry Night Effect */}
        <div className="absolute inset-0">
          {mounted && [...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2
              }}
              animate={{ 
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute top-20 left-20 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
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
            <SectionLabel text="COMMUNITY" className="mb-6 text-indigo-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              차가운 기술 속, 따뜻한 사유의 공간
              <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                '심야서재'
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              기술 개발자의 고독함을 채워주는 지적이고 따뜻한 커뮤니티
            </p>
          </RevealAnimation>
        </div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.2}>
              <GlassCard className="h-full group cursor-pointer border-indigo-500/20">
                {/* Feature Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={feature.icon} className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Feature Items */}
                <div className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Core Values */}
        <RevealAnimation delay={0.7} className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">우리가 추구하는 가치</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <RevealAnimation key={index} delay={0.1 * index}>
                <GlassCard className="text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={value.icon} className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="font-semibold text-white text-sm mb-2">
                    {value.label}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {value.desc}
                  </div>
                </GlassCard>
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        {/* Community Stats */}
        <RevealAnimation delay={0.8} className="mb-16">
          <GlassCard className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border-indigo-500/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">150+</div>
                <div className="text-gray-300 text-sm">활성 멤버</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24</div>
                <div className="text-gray-300 text-sm">월간 모임</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">누적 참여</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">4.8</div>
                <div className="text-gray-300 text-sm">만족도</div>
              </div>
            </div>
          </GlassCard>
        </RevealAnimation>

        {/* Join CTA */}
        <RevealAnimation delay={0.9}>
          <div className="relative">
            <GlassCard className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white to-transparent rounded-full blur-2xl" />
              </div>

              <div className="relative z-10 max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  지금 바로 '심야서재'에 참여하세요
                </h3>
                <p className="text-gray-300 mb-6">
                  당신의 지적 여정에 따뜻한 동반자가 되어드립니다
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    커뮤니티 가입하기
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-full text-indigo-400 font-medium hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    다음 모임 보기
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Icon name="calendar" className="w-4 h-4" />
                    <span>매주 화/금 20:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="map-pin" className="w-4 h-4" />
                    <span>온라인 + 오프라인</span>
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