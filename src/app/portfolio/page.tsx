'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import FooterSection from '../sections/FooterSection'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  category: 'AI' | 'Web' | 'App' | 'Other'
  link?: string
  github?: string
  featured: boolean
  year: string
  duration: string
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "AI 학습 플랫폼",
    description: "개인화된 AI 기반 학습 경험을 제공하는 온라인 교육 플랫폼. 적응형 학습 알고리즘과 실시간 피드백 시스템 도입.",
    image: '/images/project-1.jpg',
    tech: ['React', 'Node.js', 'TensorFlow', 'MongoDB'],
    category: 'AI',
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    year: '2024',
    duration: '3개월'
  },
  {
    id: 2,
    title: "Vibe Coding 도구",
    description: "최소한의 코드 입력으로 최대한의 결과물을 만드는 개발 도구. AI 코드 생성과 자동화된 배포 시스템.",
    image: '/images/project-2.jpg',
    tech: ['Next.js', 'Python', 'OpenAI API', 'Docker'],
    category: 'AI',
    link: 'https://example.com',
    github: 'https://github.com',
    featured: true,
    year: '2024',
    duration: '6개월'
  },
  {
    id: 3,
    title: "스마트 홈 IoT 시스템",
    description: "IoT 기반 스마트 홈 관리 시스템. 실시간 모니터링과 원격 제어 기능을 통한 에너지 효율 최적화.",
    image: '/images/project-3.jpg',
    tech: ['Vue.js', 'Python', 'MQTT', 'Raspberry Pi'],
    category: 'Web',
    link: 'https://example.com',
    featured: false,
    year: '2023',
    duration: '4개월'
  },
  {
    id: 4,
    title: "모바일 뱅킹 앱",
    description: "안전하고 사용하기 쉬운 모바일 뱅킹 애플리케이션. 생체 인증과 실시간 거래 알림 기능.",
    image: '/images/project-4.jpg',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'App',
    link: 'https://example.com',
    featured: false,
    year: '2023',
    duration: '5개월'
  },
  {
    id: 5,
    title: "데이터 분석 대시보드",
    description: "실시간 데이터 분석 및 시각화 대시보드. 다양한 차트와 리포트 생성 기능을 제공하는 BI 솔루션.",
    image: '/images/project-5.jpg',
    tech: ['Angular', 'D3.js', 'Python', 'PostgreSQL'],
    category: 'Web',
    link: 'https://example.com',
    github: 'https://github.com',
    featured: false,
    year: '2023',
    duration: '2개월'
  },
  {
    id: 6,
    title: "헬스케어 관리 시스템",
    description: "환자 관리 및 의료 기록 관리 시스템. AI 기반 진단 보조 및 약물 관리 기능 포함.",
    image: '/images/project-6.jpg',
    tech: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
    category: 'AI',
    link: 'https://example.com',
    featured: true,
    year: '2024',
    duration: '8개월'
  },
  {
    id: 7,
    title: "소셜 미디어 플랫폼",
    description: "실시간 채팅과 커뮤니티 기능이 있는 소셜 미디어 플랫폼. 스케일러블 아키텍처 설계.",
    image: '/images/project-7.jpg',
    tech: ['React', 'Socket.io', 'Redis', 'MongoDB'],
    category: 'Web',
    github: 'https://github.com',
    featured: false,
    year: '2023',
    duration: '6개월'
  },
  {
    id: 8,
    title: "전자상거래 솔루션",
    description: "B2B/B2C 전자상거래 플랫폼. 재산 관리, 결제 시스템, 분석 리포트 기능 통합.",
    image: '/images/project-8.jpg',
    tech: ['Vue.js', 'Node.js', 'MySQL', 'Stripe API'],
    category: 'Web',
    link: 'https://example.com',
    featured: false,
    year: '2022',
    duration: '4개월'
  },
  {
    id: 9,
    title: "교육용 AR 앱",
    description: "증강현실을 활용한 교육용 모바일 애플리케이션. 몰입형 학습 경험 제공.",
    image: '/images/project-9.jpg',
    tech: ['Unity', 'C#', 'ARCore', 'Firebase'],
    category: 'App',
    link: 'https://example.com',
    featured: false,
    year: '2023',
    duration: '3개월'
  }
]

const categoryFilters = [
  { id: 'all', label: '전체', count: 9 },
  { id: 'AI', label: 'AI', count: 3 },
  { id: 'Web', label: 'Web', count: 5 },
  { id: 'App', label: 'App', count: 1 },
  { id: 'Other', label: '기타', count: 0 }
]

const categoryColors = {
  'AI': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Web': 'bg-green-500/20 text-green-300 border-green-500/30',
  'App': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Other': 'bg-gray-500/20 text-gray-300 border-gray-500/30'
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredProjects = mockProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesFeatured = !showFeaturedOnly || project.featured
    return matchesCategory && matchesSearch && matchesFeatured
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
              포트폴리오
              <span className="block text-2xl md:text-3xl text-purple-300 mt-2 font-normal">
                혁신적인 프로젝트들과 성공 사례
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              AI 기술과 최신 개발 트렌드를 결합하여 만든 다양한 프로젝트들을 소개합니다.
              각 프로젝트는 실제 문제 해결과 비즈니스 가치 창출에 초점을 맞춰 개발되었습니다.
            </p>
          </motion.div>

          {/* Search and Controls */}
          <motion.div
            className="mb-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Search and Register */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="프로젝트 검색..."
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
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  프로젝트 등록
                </motion.button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3">
                {categoryFilters.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category.label}
                    {category.count > 0 && (
                      <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs">
                        {category.count}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Featured Toggle */}
              <motion.button
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  showFeaturedOnly
                    ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                추천 프로젝트만
              </motion.button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group ${
                  project.featured ? 'ring-2 ring-yellow-500/20' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-full border border-yellow-500/30 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      추천
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-lg border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-lg border border-white/20">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 text-center text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        데모
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 text-center text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        소스
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">프로젝트를 찾을 수 없습니다</h3>
              <p className="text-gray-400 mb-6">다른 검색어나 카테고리를 시도해보세요.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setShowFeaturedOnly(false) }}
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