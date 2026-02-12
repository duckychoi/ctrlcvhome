'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'

const credentials = [
  {
    icon: '🏢',
    title: '삼성전자',
    role: '수석 연구원',
    period: '2010 - 2020',
    description: '차세대 플랫폼 아키텍처 설계 및 AI 기술 개발'
  },
  {
    icon: '🚀',
    title: '네이버',
    role: '기술 이사',
    period: '2020 - 2023',
    description: '클라우드 서비스 기술 총괄 및 개발팀 리딩'
  },
  {
    icon: '💡',
    title: '카카오',
    role: 'CTO',
    period: '2023 - 현재',
    description: '기 전략 수립 및 조직 문화 혁신'
  }
]

const achievements = [
  {
    number: '30+',
    label: '년간 개발 경험',
    description: '다양한 도메인과 기술 스택을 경험'
  },
  {
    number: '1000+',
    label: '멘티 양성',
    description: '성공적인 개발자로 성장시킨 멘티들'
  },
  {
    number: '50+',
    label: '기술 서적 저술',
    description: '한국 기술 커뮤니티에 기여한 지식'
  },
  {
    number: '10+',
    label: '오픈소스 프로젝트',
    description: '전 세계 개발자들과 협력'
  }
]

const expertise = [
  'AI / 머신러닝',
  '클라우드 아키텍처',
  '마이크로서비스',
  '프론트엔드 개발',
  '모바일 개발',
  '데이터 엔지니어링',
  'DevOps',
  '블록체인'
]

export default function AuthorSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with author theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900/20 to-pink-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '5s' }} />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-purple-500/30 rotate-45" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-indigo-500/30 rotate-12" />
      </div>

      <div className="relative container mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-16">
            <SectionLabel text="ABOUT THE AUTHOR" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              30년 차 기술 임원,
              <br />
              그리고 당신의 문장을 코드로 바꿔줄 작가
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              기술을 넘어 철학으로, 코드를 넘어 문장으로
              <br />
              당신의 아이디어를 현실로 만들어 드립니다
            </p>
          </div>
        </RevealAnimation>

        {/* Author Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Author Image & Bio */}
          <RevealAnimation delay={0.2}>
            <div className="lg:col-span-1">
              <GlassCard className="h-full text-center">
                {/* Profile Image Placeholder */}
                <div className="mb-6 mx-auto w-48 h-48 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full flex items-center justify-center border-2 border-purple-500/30">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-sm text-purple-300">Technology Leader</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">김민준</h3>
                <p className="text-purple-300 font-medium mb-4">기술 작가 & 멘토</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  30년간 기술의 최전선에서 달려온 개발자이자 작가. 
                  복잡한 기술을 인간의 언어로 번역하는 것을 삶의使命으로 삼고 있습니다.
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {expertise.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </RevealAnimation>

          {/* Career Path */}
          <RevealAnimation delay={0.4}>
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">주요 경력</h3>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={credential.title}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 10 }}
                    >
                      <GlassCard className="group hover:border-purple-500/30 transition-all duration-500">
                        <div className="flex items-start gap-4">
                          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {credential.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                                  {credential.title}
                                </h4>
                                <p className="text-purple-300 font-medium">{credential.role}</p>
                              </div>
                              <span className="text-sm text-gray-400 whitespace-nowrap">
                                {credential.period}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">
                              {credential.description}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Full Expertise */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">전문 분야</h4>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <RevealAnimation delay={0.6}>
            <h3 className="text-2xl font-bold text-white text-center mb-8">성과 요약</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <GlassCard className="text-center group hover:border-indigo-500/30 transition-all duration-500">
                    <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-white font-semibold mb-1">
                      {achievement.label}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {achievement.description}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </RevealAnimation>
        </div>

        {/* Philosophy Quote */}
        <RevealAnimation delay={0.8}>
          <div className="text-center mb-16">
            <GlassCard className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-purple-500/30">
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 italic">
                "코드는 현실이고, 문장은 비전입니다.
                <br />
                두 가지를 모두 마스터한 사람이
                <br />
                진정한 창조자입니다."
              </blockquote>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-indigo-400" />
                <span className="text-sm font-medium tracking-wider uppercase">저의 철학</span>
                <div className="w-16 h-px bg-gradient-to-l from-purple-400 to-indigo-400" />
              </div>
            </GlassCard>
          </div>
        </RevealAnimation>

        {/* Contact CTA */}
        <RevealAnimation delay={1.0}>
          <div className="text-center">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                함께 당신의 이야기를 코드로 만들어요
              </h3>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                지금 바로 저와 연락하여 당신의 아이디어를 현실로 만드는 첫걸음을 내디뎌보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white font-semibold cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>상담 예약하기</span>
                  <span className="text-xl">📧</span>
                </motion.div>
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-xl text-white font-semibold cursor-pointer border border-white/20"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>작품集 보기</span>
                  <span className="text-xl">📚</span>
                </motion.div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}