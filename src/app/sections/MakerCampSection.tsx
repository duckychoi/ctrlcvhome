'use client'

import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function MakerCampSection() {
  const target = [
    "코딩을 배우고 싶지만 어디서부터 시작할지 모르는 분",
    "아이디어는 있지만 구현 방법을 몰라 막막했던 분",
    "빠른 시간 안에 실제 프로젝트를 만들고 싶은 분",
    "AI 시대에 필요한 기술 스킬을 체계적으로 배우고 싶은 분"
  ]

  const results = [
    { title: "나만의 웹 애플리케이션", description: "실제 서비스 가능한 수준" },
    { title: "포트폴리오", description: "취업/프리랜싱에 바로 사용" },
    { title: "AI 활용 노하우", description: "효율적인 개발 방법" },
    { title: "메이커 커뮤니티", description: "지속적인 성장 네트워크" }
  ]

  const curriculum = [
    { week: "1주차", topic: "아이디어 구체화", content: "문제 정의, 사용자 리서치, 기술 스택 선정" },
    { week: "2주차", topic: "기초 다지기", content: "핵심 기술 학습, 간단한 프로토타입 제작" },
    { week: "3주차", topic: "본격 개발", content: "기능 구현, UI/UX 디자인, 데이터베이스 연동" },
    { week: "4주차", topic: "배포 및 피드백", content: "실제 서비스 배포, 사용자 테스트, 최종 발표" }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-950 via-teal-950/20 to-emerald-950 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="FLAGSHIP PROGRAM" className="mb-6 text-emerald-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              상상이 현실이 되는 4주,
              <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                '메이커 캠프'
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              30년 개발자와 함께하는 집중 훈련, 아이디어를 작동하는 제품으로 만드세요
            </p>
          </RevealAnimation>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Target Audience */}
          <RevealAnimation delay={0.3}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Icon name="users" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">대상</h3>
              </div>
              
              <ul className="space-y-3">
                {target.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </RevealAnimation>

          {/* Results */}
          <RevealAnimation delay={0.4}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Icon name="trophy" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">결과물</h3>
              </div>
              
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div key={index} className="p-3 bg-emerald-500/10 rounded-lg">
                    <div className="font-semibold text-emerald-400 text-sm mb-1">
                      {result.title}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </RevealAnimation>

          {/* Curriculum */}
          <RevealAnimation delay={0.5}>
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Icon name="calendar" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">커리큘럼</h3>
              </div>
              
              <div className="space-y-3">
                {curriculum.map((week, index) => (
                  <div key={index} className="border-l-2 border-emerald-500/30 pl-4">
                    <div className="font-semibold text-teal-400 text-sm mb-1">
                      {week.week}: {week.topic}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {week.content}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </RevealAnimation>
        </div>

        {/* Program Features */}
        <RevealAnimation delay={0.6} className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "clock", label: "매일 2시간", desc: "집중 훈련" },
              { icon: "person", label: "1:1 멘토링", desc: "개별 맞춤" },
              { icon: "code", label: "실습 중심", desc: "프로젝트 기반" },
              { icon: "certificate", label: "수료증", desc: "공식 인증" }
            ].map((feature, index) => (
              <GlassCard key={index} className="text-center group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={feature.icon} className="w-7 h-7 text-white" />
                </div>
                <div className="font-semibold text-white text-sm mb-1">
                  {feature.label}
                </div>
                <div className="text-gray-400 text-xs">
                  {feature.desc}
                </div>
              </GlassCard>
            ))}
          </div>
        </RevealAnimation>

        {/* CTA Section */}
        <RevealAnimation delay={0.8}>
          <div className="relative">
            <GlassCard className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  다음 기회는 언제 올까요?
                </h3>
                <p className="text-gray-300 mb-6">
                  정원 20명의 소수정예 캠프, 빠르게 자리를 확보하세요
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    지원하기
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-emerald-500/20 rounded-full text-emerald-400 font-medium hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    상담 예약
                  </motion.button>
                </div>

                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Icon name="clock" className="w-4 h-4" />
                    <span>다음 시작: 3월 1일</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="users" className="w-4 h-4" />
                    <span>현재 신청: 12/20명</span>
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