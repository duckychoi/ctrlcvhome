'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import FooterSection from '../sections/FooterSection'

interface Experiment {
  id: number
  title: string
  description: string
  status: 'in-progress' | 'completed' | 'planned'
  image: string
  progress: number
  startDate: string
  tags: string[]
  link?: string
}

const mockExperiments: Experiment[] = [
  {
    id: 1,
    title: "AI 코드 리뷰 자동화",
    description: "DeepSeek를 활용한 코드 리뷰 자동화 시스템 개발. 품질 기준 설정 및 피드백 생성.",
    status: 'in-progress',
    image: '/images/experiment-1.jpg',
    progress: 65,
    startDate: "2024-01-15",
    tags: ["AI", "Code Review", "Automation"]
  },
  {
    id: 2,
    title: "Vibe Coding 프레임워크",
    description: "최소한의 기술 지식으로 최대한의 결과물을 만드는 개발 방법론 체계화.",
    status: 'in-progress',
    image: '/images/experiment-2.jpg',
    progress: 40,
    startDate: "2024-02-01",
    tags: ["Framework", "Methodology", "AI"]
  },
  {
    id: 3,
    title: "지능형 프로젝트 생성기",
    description: "아이디어만 입력하면 전체 프로젝트 구조와 코드를 생성하는 AI 도구.",
    status: 'completed',
    image: '/images/experiment-3.jpg',
    progress: 100,
    startDate: "2023-12-01",
    tags: ["AI", "Generator", "Full-Stack"]
  },
  {
    id: 4,
    title: "실시간 협업 코딩 플랫폼",
    description: "다중 사용자가 동시에 코딩하고 AI 도우미의 도움을 받는 협업 환경.",
    status: 'planned',
    image: '/images/experiment-4.jpg',
    progress: 0,
    startDate: "2024-03-01",
    tags: ["Collaboration", "Real-time", "Platform"]
  },
  {
    id: 5,
    title: "맞춤형 학습 경로 생성",
    description: "개인의 현재 수준과 목표에 맞춘 최적의 학습 경로를 AI가 생성하고 관리.",
    status: 'completed',
    image: '/images/experiment-5.jpg',
    progress: 100,
    startDate: "2023-11-15",
    tags: ["Education", "AI", "Personalization"]
  },
  {
    id: 6,
    title: "노코드 AI 통합 플러그인",
    description: "노코드 플랫폼에서 AI 기능을 손쉽게 통합할 수 있는 플러그인 생태계.",
    status: 'planned',
    image: '/images/experiment-6.jpg',
    progress: 0,
    startDate: "2024-04-01",
    tags: ["No-Code", "Plugin", "Integration"]
  }
]

const statusFilters = [
  { id: 'all', label: '전체', count: 6 },
  { id: 'in-progress', label: '진행중', count: 2 },
  { id: 'completed', label: '완료', count: 2 },
  { id: 'planned', label: '계획중', count: 2 }
]

const statusConfig = {
  'in-progress': {
    label: '진행중',
    color: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    dotColor: 'bg-blue-400'
  },
  'completed': {
    label: '완료',
    color: 'bg-green-500/20 text-green-300 border-green-500/30',
    dotColor: 'bg-green-400'
  },
  'planned': {
    label: '계획중',
    color: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    dotColor: 'bg-gray-400'
  }
}

export default function LabPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredExperiments = mockExperiments.filter(experiment => {
    const matchesFilter = selectedFilter === 'all' || experiment.status === selectedFilter
    const matchesSearch = experiment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         experiment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         experiment.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              실험실
              <span className="block text-2xl md:text-3xl text-purple-300 mt-2 font-normal">
                혁신적인 아이디어를 실험하고 현실로 만듭니다
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              AI 기술과 개발 경험을 결합하여 미래의 개발 방식을 탐색합니다.
              진행중인 실험들을 통해 기술의 가능성을 확장해 나갑니다.
            </p>
          </motion.div>

          {/* Search and Controls */}
          <motion.div
            className="mb-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Search and New Experiment */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="실험 프로젝트 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  새 실험 시작
                </motion.button>
              </div>
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-3">
              {statusFilters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedFilter === filter.id
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {filter.label}
                  <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs">
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experiments Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredExperiments.map((experiment, index) => (
              <motion.div
                key={experiment.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusConfig[experiment.status].color}`}>
                      <span className={`inline-block w-2 h-2 rounded-full ${statusConfig[experiment.status].dotColor} mr-1`} />
                      {statusConfig[experiment.status].label}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {experiment.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      시작일: {experiment.startDate}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experiment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-lg border border-purple-500/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 line-clamp-2">
                    {experiment.description}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">진행률</span>
                      <span className="text-sm font-medium text-white">{experiment.progress}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${experiment.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    자세히 보기
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredExperiments.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">실험 프로젝트를 찾을 수 없습니다</h3>
              <p className="text-gray-400 mb-6">다른 검색어나 필터를 시도해보세요.</p>
              <button
                onClick={() => { setSelectedFilter('all'); setSearchQuery('') }}
                className="px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                필터 초기화
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <FooterSection />
    </div>
  )
}