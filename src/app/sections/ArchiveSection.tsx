'use client'

import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'

const books = [
  {
    title: '마이크로서비스 아키텍처 구축',
    author: '샘 뉴먼',
    yes24Link: 'https://www.yes24.com/Product/Goods/79325764',
    category: 'Architecture',
    year: '2020'
  },
  {
    title: '클린 코드',
    author: '로버트 C. 마틴',
    yes24Link: 'https://www.yes24.com/Product/Goods/11681152',
    category: 'Programming',
    year: '2013'
  },
  {
    title: '설계자는 어떻게 생각하는가',
    author: '브라이언 크리스천',
    yes24Link: 'https://www.yes24.com/Product/Goods/109275839',
    category: 'Design Thinking',
    year: '2023'
  },
  {
    title: '실용주의 프로그래머',
    author: '데이비드 토마스, 앤드류 헌트',
    yes24Link: 'https://www.yes24.com/Product/Goods/6996185',
    category: 'Programming',
    year: '2020'
  },
  {
    title: '도메인 주도 설계',
    author: '에릭 에반스',
    yes24Link: 'https://www.yes24.com/Product/Goods/27108113',
    category: 'Architecture',
    year: '2018'
  },
  {
    title: '리팩토링',
    author: '마틴 파울러',
    yes24Link: 'https://www.yes24.com/Product/Goods/13216387',
    category: 'Programming',
    year: '2020'
  },
  {
    title: '오브젝트',
    author: '조영호',
    yes24Link: 'https://www.yes24.com/Product/Goods/74219491',
    category: 'Programming',
    year: '2019'
  },
  {
    title: '처음 시작하는 파이썬',
    author: '에릭 매티스',
    yes24Link: 'https://www.yes24.com/Product/Goods/10622598',
    category: 'Programming',
    year: '2022'
  },
  {
    title: 'AI 시대의 생존 전략',
    author: '케빈 루스',
    yes24Link: 'https://www.yes24.com/Product/Goods/125311907',
    category: 'AI/ML',
    year: '2023'
  }
]

const courses = [
  {
    title: 'AI 코딩 파트너십 마스터',
    description: 'Cursor AI와 Claude Code를 활용한 현대적 개발 방법론',
    duration: '8주',
    level: 'Intermediate',
    price: '₩990,000'
  },
  {
    title: 'Next.js 풀스택 실전 프로젝트',
    description: 'Supabase와 Vercel로 완성형 웹 애플리케이션 구축하기',
    duration: '12주',
    level: 'Advanced',
    price: '₩1,490,000'
  },
  {
    title: '플러터 크로스플랫폼 앱 개발',
    description: '하나의 코드로 iOS, Android, Web 모두 정복하기',
    duration: '10주',
    level: 'Beginner',
    price: '₩790,000'
  }
]

export default function ArchiveSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with knowledge theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900/20 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative container mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-16">
            <SectionLabel text="KNOWLEDGE ARCHIVE" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              바이브랩스의 지식 아카이브
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              30년의 지식이 담긴 필독서와 체계적인 학습 코스로
              <br />
              당신의 기술 여정을 가속화하세요
            </p>
          </div>
        </RevealAnimation>

        {/* Books Section */}
        <div className="mb-20">
          <RevealAnimation delay={0.2}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white">추천 도서</h3>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-teal-400" />
                <span className="text-sm text-emerald-300 font-medium">9권의 필독서</span>
                <div className="w-8 h-px bg-gradient-to-l from-emerald-400 to-teal-400" />
              </div>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <RevealAnimation key={book.title} delay={0.05 * index}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <a 
                    href={book.yes24Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <GlassCard className="h-full group hover:border-emerald-500/30 transition-all duration-500 cursor-pointer">
                      <div className="relative">
                        {/* Book cover placeholder */}
                        <div className="mb-4 h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/50 transition-colors">
                          <div className="text-center">
                            <div className="text-4xl mb-2">📚</div>
                            <div className="text-xs text-emerald-300 font-medium">{book.category}</div>
                          </div>
                        </div>

                        {/* Book info */}
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                          {book.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">by {book.author}</p>

                        {/* Meta info */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                            {book.year}
                          </span>
                          <div className="flex items-center gap-1 text-gray-400 group-hover:text-emerald-300 transition-colors">
                            <span>Yes24에서 보기</span>
                            <span className="text-sm">→</span>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </a>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <RevealAnimation delay={0.6}>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white">체계적 코스</h3>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-teal-400 to-cyan-400" />
                <span className="text-sm text-teal-300 font-medium">3개의 집중 코스</span>
                <div className="w-8 h-px bg-gradient-to-l from-teal-400 to-cyan-400" />
              </div>
            </div>
          </RevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <RevealAnimation key={course.title} delay={0.1 * index}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GlassCard className={`h-full group hover:border-teal-500/30 transition-all duration-500`}>
                    {/* Course header */}
                    <div className={`mb-4 p-4 rounded-lg bg-gradient-to-br ${
                      index === 0 ? 'from-purple-500/20 to-pink-500/20 border-purple-500/30' :
                      index === 1 ? 'from-blue-500/20 to-cyan-500/20 border-blue-500/30' :
                      'from-orange-500/20 to-red-500/20 border-orange-500/30'
                    } border`}>
                      <div className="text-3xl mb-2">
                        {index === 0 ? '🤖' : index === 1 ? '⚡' : '📱'}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {course.duration}
                      </div>
                    </div>

                    {/* Course content */}
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Course meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                        course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                        'bg-red-500/20 text-red-300 border border-red-500/30'
                      }`}>
                        {course.level}
                      </span>
                      <span className="text-lg font-bold text-teal-300">
                        {course.price}
                      </span>
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="w-full py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg text-center text-white font-medium cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      코스 신청하기
                    </motion.div>
                  </GlassCard>
                </motion.div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <RevealAnimation delay={1.0}>
          <div className="text-center mt-16">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                지식의 아카이브를 탐험해보세요
              </h3>
              <p className="text-gray-300 mb-6">
                30년의 경험이 압축된 학습 자료로 당신의 성장을 가속화합니다
              </p>
              <motion.div
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white font-semibold cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>전체 아카이브 보기</span>
                <span className="text-xl">📖</span>
              </motion.div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}