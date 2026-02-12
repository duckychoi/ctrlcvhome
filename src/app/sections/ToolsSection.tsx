'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function ToolsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const toolCategories = [
    {
      icon: "code",
      title: "AI 코딩 파트너",
      description: "코드 작성을 돕는 최신 AI 도구들",
      color: "blue",
      tools: [
        { name: "ChatGPT", description: "GPT-4 기반 코딩 도우미", recommended: true },
        { name: "Claude", description: "코드 리뷰와 최적화 전문", recommended: false },
        { name: "Copilot", description: "VS Code 내장 AI 어시스턴트", recommended: false },
        { name: "Cursor", description: "AI-first 개발 환경", recommended: true }
      ]
    },
    {
      icon: "palette",
      title: "디자인 & 프로토타이핑",
      description: "아이디어를 시각화하는 디자인 도구",
      color: "purple",
      tools: [
        { name: "Figma", description: "협업 가능한 UI/UX 도구", recommended: true },
        { name: "Canva", description: "초보자 친화적 디자인 툴", recommended: true },
        { name: "Miro", description: "온라인 화이트보드", recommended: false },
        { name: "Notion", description: "문서화와 프로젝트 관리", recommended: true }
      ]
    },
    {
      icon: "server",
      title: "클라우드 & 배포",
      description: "프로젝트를 세상에 공개하는 도구들",
      color: "emerald",
      tools: [
        { name: "Vercel", description: "Next.js 최적화 배포", recommended: true },
        { name: "Netlify", description: "정적 사이트 쉬운 배포", recommended: true },
        { name: "GitHub Pages", description: "무료 웹사이트 호스팅", recommended: false },
        { name: "Railway", description: "백엔드 서비스 배포", recommended: false }
      ]
    },
    {
      icon: "book",
      title: "학습 & 문서",
      description: "지식을 축적하고 참고하는 리소스",
      color: "amber",
      tools: [
        { name: "MDN", description: "웹 기술 공식 문서", recommended: true },
        { name: "Stack Overflow", description: "개발자 Q&A 커뮤니티", recommended: true },
        { name: "Dev.to", description: "개발자 블로그 플랫폼", recommended: false },
        { name: "freeCodeCamp", description: "무료 코딩 교육", recommended: true }
      ]
    },
    {
      icon: "globe",
      title: "프론트엔드 프레임워크",
      description: "현대적인 웹 애플리케이션 개발",
      color: "cyan",
      tools: [
        { name: "React", description: "컴포넌트 기반 UI 라이브러리", recommended: true },
        { name: "Next.js", description: "React 풀스택 프레임워크", recommended: true },
        { name: "Tailwind CSS", description: "유틸리티 CSS 프레임워크", recommended: true },
        { name: "Framer Motion", description: "React 애니메이션 라이브러리", recommended: false }
      ]
    },
    {
      icon: "terminal",
      title: "개발 환경",
      description: "코딩 생산성을 높이는 필수 도구",
      color: "red",
      tools: [
        { name: "VS Code", description: "가장 인기 있는 코드 에디터", recommended: true },
        { name: "Git", description: "버전 관리 시스템", recommended: true },
        { name: "GitHub Desktop", description: "Git을 시각적으로 관리", recommended: false },
        { name: "Postman", description: "API 테스트 도구", recommended: true }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-cyan-500 border-blue-500/20 bg-blue-500/10",
      purple: "from-purple-500 to-pink-500 border-purple-500/20 bg-purple-500/10",
      emerald: "from-emerald-500 to-green-500 border-emerald-500/20 bg-emerald-500/10",
      amber: "from-amber-500 to-orange-500 border-amber-500/20 bg-amber-500/10",
      cyan: "from-cyan-500 to-blue-500 border-cyan-500/20 bg-cyan-500/10",
      red: "from-red-500 to-orange-500 border-red-500/20 bg-red-500/10"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Code Icons */}
        {mounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-600 text-xs font-mono"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 57) % 100}%`,
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5 + (i % 5),
              repeat: Infinity,
              delay: (i % 2) * 0.5
            }}
          >
            {['</>', '{}', '()', '[]', '=>', '&&', '||', '!=='][i % 8]}
          </motion.div>
        ))}

        {/* Glow Effects */}
        <motion.div
          className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="TOOLS" className="mb-6 text-blue-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              30년 차 엔지니어가 엄선한
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                '가장 효율적인 무기고'
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              수많은 도구들 속에서 진짜 필수적인 것만 골랐습니다<br />
              이 무기고로 당신의 개발 여정을 무장하세요
            </p>
          </RevealAnimation>
        </div>

        {/* Tool Categories Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, categoryIndex) => (
            <RevealAnimation key={categoryIndex} delay={0.2 + categoryIndex * 0.1}>
              <GlassCard className={`h-full border ${getColorClasses(category.color).split(' ')[1]} group hover:scale-[1.02] transition-transform duration-300`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={category.icon} className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Tools List */}
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className={`p-3 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${
                        tool.recommended 
                          ? 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/20' 
                          : 'bg-white/5 border-gray-500/20 hover:border-gray-500/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {tool.recommended && (
                            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                              <Icon name="star" className="w-3 h-3 text-white" />
                            </div>
                          )}
                          <div>
                            <div className="font-semibold text-white text-sm">
                              {tool.name}
                              {tool.recommended && (
                                <span className="ml-2 text-amber-400 text-xs font-bold">추천</span>
                              )}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {tool.description}
                            </div>
                          </div>
                        </div>
                        <Icon name="arrow-right" className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Bottom Stats */}
        <RevealAnimation delay={0.8}>
          <GlassCard className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24</div>
                <div className="text-gray-300 text-sm">엄선된 도구</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">15</div>
                <div className="text-gray-300 text-sm">무료 도구</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-2">9</div>
                <div className="text-gray-300 text-sm">강력 추천</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">30년</div>
                <div className="text-gray-300 text-sm">경험 기반</div>
              </div>
            </div>
          </GlassCard>
        </RevealAnimation>

        {/* Call to Action */}
        <RevealAnimation delay={0.9}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              이 도구들로 당신의 아이디어를 현실로 만들어 보세요
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              전체 도구 리스트 보기
            </motion.button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}