'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import FooterSection from '../sections/FooterSection'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
  benefits: string[]
}

interface Tool {
  id: number
  name: string
  description: string
  icon: string
  category: string
  features: string[]
  link?: string
}

const features: Feature[] = [
  {
    id: 1,
    title: "최소 기술, 최대 결과",
    description: "복잡한 기술 지식 없이도 AI의 힘을 활용하여 전문가 수준의 결과물을 만들 수 있습니다. Vibe Coding은 기술의 장벽을 허물고 창의력에 집중할 수 있게 합니다.",
    icon: "minimal-tech",
    benefits: [
      "복잡한 설정 없이 즉시 시작",
      "AI가 코드 구조 자동 생성",
      "실시간 피드백과 수정 제안",
      "베스트 프랙티스 자동 적용"
    ]
  },
  {
    id: 2,
    title: "AI 파트너십",
    description: "AI는 단순한 도구가 아니라 창조적인 파트너입니다. 아이디어를 공유하고 함께 발전시키며, 기술적인 제약 없이 상상하는 모든 것을 현실로 만들 수 있습니다.",
    icon: "ai-partner",
    benefits: [
      "24시간 내내 대화 가능한 AI 코치",
      "개인화된 학습 경로 제공",
      "실시간 문제 해결 지원",
      "코드 최적화 및 리팩토링 자동화"
    ]
  },
  {
    id: 3,
    title: "직관적 워크플로우",
    description: "Vibe Coding은 복잡한 개발 과정을 간단하고 직관적인 워크플로우로 단순화했습니다. 아이디어부터 실행까지의 모든 과정이 자연스럽고 즐겁습니다.",
    icon: "intuitive-workflow",
    benefits: [
      "자연어로 아이디어 설명",
      "단계별 프로젝트 생성",
      "시각적 진행 상황 확인",
      "클릭 한 번으로 배포"
    ]
  },
  {
    id: 4,
    title: "지속적인 성장",
    description: "Vibe Coding은 단순한 도구를 넘어 지속적인 성장을 돕는 생태계입니다. 커뮤니티와 함께 배우고, 최신 기술 트렌드를 자연스럽게 익힐 수 있습니다.",
    icon: "continuous-growth",
    benefits: [
      "실시간 기술 트렌드 업데이트",
      "맞춤형 학습 콘텐츠 제공",
      "성과 기반 성장 분석",
      "전문가 네트워크 연결"
    ]
  }
]

const tools: Tool[] = [
  {
    id: 1,
    name: "Cursor",
    description: "AI 지원 코드 편집기로, 자연어로 코딩하고 실시간으로 코드를 생성하고 수정할 수 있습니다.",
    icon: "cursor",
    category: "IDE",
    features: [
      "AI 기반 코드 자동완성",
      "자연어로 코드 수정",
      "실시간 오류 감지 및 수정",
      "다중 파일 동시 편집"
    ],
    link: "https://cursor.sh"
  },
  {
    id: 2,
    name: "Claude",
    description: "Anthropic의 고성능 AI로, 복잡한 문제 해결과 창의적인 솔루션 제안에 특화되어 있습니다.",
    icon: "claude",
    category: "AI Assistant",
    features: [
      "대규모 코드 분석 가능",
      "복잡한 로직 구현 지원",
      "코드 리뷰 및 최적화",
      "다양한 프로그래밍 언어 지원"
    ],
    link: "https://claude.ai"
  },
  {
    id: 3,
    name: "GitHub Copilot",
    description: "GitHub과 OpenAI가 협력하여 만든 AI 코딩 파트너로, 실시간으로 코드 제안과 자동완성을 제공합니다.",
    icon: "copilot",
    category: "AI Assistant",
    features: [
      "실시간 코드 제안",
      "함수 자동 생성",
      "주석 기반 코드 작성",
      "다양한 프레임워크 지원"
    ],
    link: "https://github.com/features/copilot"
  },
  {
    id: 4,
    name: "Replit",
    description: "브라우저 기반 개발 환경으로, 별도 설정 없이 즉시 코딩을 시작하고 프로젝트를 공유할 수 있습니다.",
    icon: "replit",
    category: "Cloud IDE",
    features: [
      "설정 없는 즉시 시작",
      "실시간 협업 기능",
      "자동 배포 시스템",
      "다양한 언어 및 프레임워크"
    ],
    link: "https://replit.com"
  },
  {
    id: 5,
    name: "Vercel",
    description: "Next.js와 완벽하게 통합된 배포 플랫폼으로, 코드를 푸시하는 것만으로 자동 배포가 완료됩니다.",
    icon: "vercel",
    category: "Deployment",
    features: [
      "자동 배포 시스템",
      "글로벌 CDN",
      "실시간 성능 모니터링",
      "서버리스 함수 지원"
    ],
    link: "https://vercel.com"
  },
  {
    id: 6,
    name: "Notion AI",
    description: "문서 작성과 프로젝트 관리를 위한 AI 도구로, 자동으로 문서를 생성하고 정리해줍니다.",
    icon: "notion",
    category: "Productivity",
    features: [
      "자동 문서 생성",
      "콘텐츠 요약 및 정리",
      "아이디어 브레인스토밍",
      "프로젝트 관리 자동화"
    ],
    link: "https://notion.ai"
  }
]

const stats = [
  { number: "10x", label: "개발 속도 향상" },
  { number: "70%", label: "코드 감소" },
  { number: "24/7", label: "AI 파트너 지원" },
  { number: "100+", label: "프로젝트 템플릿" }
]

export default function VibeCodingPage() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(1)
  const [expandedTool, setExpandedTool] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.section
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Vibe Coding
              <span className="block text-2xl md:text-3xl text-purple-300 mt-4 font-normal">
                당신의 아이디어가 AI와 함께 춤을 추는 곳
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto mb-8">
              Vibe Coding은 30년차 개발자의 경험과 최신 AI 기술이 만나 탄생한 새로운 개발 패러다임입니다. 
              복잡한 기술의 언어를 배우는 대신, 당신의 언어로 세상을 코딩하세요. 
              AI가 당신의 파트너가 되어 상상하는 모든 것을 현실로 만들어 드립니다.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vibe Coding 시작하기
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                둘러보기
              </motion.button>
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What is Vibe Coding */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Vibe Coding이란?</h2>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Vibe Coding은 전통적인 개발 방식의 한계를 뛰어넘는 새로운 접근법입니다. 
                  수년간의 코딩 경험으로 축적된 직관과 패턴을 AI가 학습하여, 
                  이제는 누구나 전문가 수준의 개발을 할 수 있게 되었습니다.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  더 이상 복잡한 문법과 프레임워크를 외울 필요가 없습니다. 
                  당신의 아이디어를 자연어로 설명하기만 하면, AI가 최적의 코드를 생성하고, 
                  실시간으로 피드백을 제공하며, 최종적으로 완성된 제품까지 만들어 드립니다.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mt-8">
                  <p className="text-purple-300 font-medium text-lg italic">
                    "Vibe Coding은 기술이 아닌 당신의 창의력에 집중할 수 있게 만듭니다."
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Vibe Coding의 특징</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    selectedFeature === feature.id 
                      ? 'border-purple-500/30 bg-white/10' 
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedFeature(feature.id)}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      {selectedFeature === feature.id && (
                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {feature.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tools Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Vibe Coding 도구들</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full border border-purple-500/20">
                        {tool.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{tool.description}</p>

                    {/* Features */}
                    <div className={`space-y-2 mb-4 ${expandedTool === tool.id ? 'block' : 'hidden md:block'}`}>
                      {tool.features.slice(0, expandedTool === tool.id ? tool.features.length : 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-400 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {tool.link && (
                        <motion.a
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 text-center text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          더보기
                        </motion.a>
                      )}
                      {tool.features.length > 2 && (
                        <motion.button
                          onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
                          className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all duration-300 text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {expandedTool === tool.id ? '접기' : '더보기'}
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">지금 바로 Vibe Coding을 시작하세요</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                복잡한 기술의 세계에서 해방되어, 당신의 창의력이 빛날 수 있는 곳으로 오세요. 
                AI 파트너와 함께라면 불가능은 없습니다.
              </p>
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vibe Coding 시작하기
              </motion.button>
            </div>
          </motion.section>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}