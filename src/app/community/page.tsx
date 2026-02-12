'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'

interface Post {
  id: number
  title: string
  author: string
  category: string
  content: string
  likes: number
  comments: number
  createdAt: string
  isPinned: boolean
  isHot: boolean
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "Vibe Coding 실천기: 3개월간의 변화",
    author: "김프론트",
    category: "자유",
    content: "Vibe Coding을 시작한지 3개월이 지났습니다. 처음에는 어색했지만 지금은 일과 삶의 균형이 찾아졌어요...",
    likes: 234,
    comments: 45,
    createdAt: "2시간 전",
    isPinned: true,
    isHot: true
  },
  {
    id: 2,
    title: "[공지] VibeLabs 커뮤니티 가이드라인 업데이트",
    author: "VibeLabs팀",
    category: "공지",
    content: "더 나은 커뮤니티를 위해 가이드라인을 업데이트했습니다. 모든 분들의 적극적인 참여를 부탁드립니다...",
    likes: 89,
    comments: 12,
    createdAt: "6시간 전",
    isPinned: true,
    isHot: false
  },
  {
    id: 3,
    title: "번아웃 없이 개발자 커리어 10년 유지하는 법",
    author: "이시니어",
    category: "자유",
    content: "10년 넘게 개발자로 일하면서 겪었던 번아웃과 극복 경험을 공유합니다. 건강한 커리어를 위한 팁들...",
    likes: 567,
    comments: 78,
    createdAt: "1일 전",
    isPinned: false,
    isHot: true
  },
  {
    id: 4,
    title: "새로운 AI 도구로 개발 생산성 2배 향상시킨 방법",
    author: "박AI",
    category: "자유",
    content: "최근에 나온 AI 코딩 도구들을 적극적으로 사용해보고 개발 생산성이 크게 향상된 경험을 공유합니다...",
    likes: 432,
    comments: 56,
    createdAt: "2일 전",
    isPinned: false,
    isHot: true
  },
  {
    id: 5,
    title: "원격 근무 3년 차의 솔직한 후기",
    author: "최리모트",
    category: "자유",
    content: "3년간 원격 근무만 하면서 느낀 장점과 단점, 그리고 성공적인 원격 근무를 위한 팁들을 정리해봤습니다...",
    likes: 298,
    comments: 67,
    createdAt: "3일 전",
    isPinned: false,
    isHot: false
  },
  {
    id: 6,
    title: "[공지] 다음 주 Vibe 컨퍼런스 안내",
    author: "VibeLabs팀",
    category: "공지",
    content: "다음 주말에 열리는 Vibe 컨퍼런스에 대해 안내드립니다. 많은 분들의 참여를 기대합니다...",
    likes: 156,
    comments: 23,
    createdAt: "4일 전",
    isPinned: false,
    isHot: false
  }
]

const categories = [
  { id: 'all', name: '전체', icon: '📋' },
  { id: 'free', name: '자유', icon: '💬' },
  { id: 'notice', name: '공지', icon: '📢' }
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const filteredPosts = mockPosts.filter(post => {
    switch (selectedCategory) {
      case 'free':
        return post.category === '자유'
      case 'notice':
        return post.category === '공지'
      default:
        return true
    }
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    // Pinned posts first
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    
    switch (sortBy) {
      case 'latest':
        return 0 // In real app, sort by date
      case 'likes':
        return b.likes - a.likes
      case 'comments':
        return b.comments - a.comments
      default:
        return 0
    }
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
              커뮤니티
              <span className="block text-2xl md:text-3xl text-purple-300 mt-2 font-normal">
                개발자들과 소통하고 성장하세요
              </span>
            </h1>
          </motion.div>

          {/* Controls */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Category Tabs */}
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-white/20 text-white border border-white/30'
                          : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </motion.button>
                  ))}
                </div>

                {/* Write Button and Sort */}
                <div className="flex gap-4 items-center">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="latest" className="bg-purple-900">최신순</option>
                    <option value="likes" className="bg-purple-900">추천순</option>
                    <option value="comments" className="bg-purple-900">댓글순</option>
                  </select>
                  
                  <motion.button
                    className="px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    글쓰기
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Posts List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {sortedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                  post.isPinned ? 'border-yellow-500/30 bg-yellow-500/5' : 'border-white/10'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  {/* Author Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {post.author[0]}
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-white hover:text-purple-300 cursor-pointer transition-colors">
                            {post.title}
                          </h3>
                          {post.isPinned && (
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-lg border border-yellow-500/30 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2v2h2V6H5zm3-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V2zm2 2v2h2V4h-2zm3-2a1 1 0 00-1 1v12a1 1 0 001 1h4a1 1 0 001-1V2a1 1 0 00-1-1h-4zm1 2v10h2V4h-2z" />
                              </svg>
                              고정
                            </span>
                          )}
                          {post.isHot && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-300 text-xs font-medium rounded-lg border border-red-500/30 flex items-center gap-1">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                              </svg>
                              인기
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-sm text-gray-300 mb-3">
                          <span className="font-medium text-purple-300">{post.author}</span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            {post.category}
                          </span>
                          <span>{post.createdAt}</span>
                        </div>

                        <p className="text-gray-300 line-clamp-2 mb-4">
                          {post.content}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-6 text-sm">
                          <motion.button
                            className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {post.likes}
                          </motion.button>
                          
                          <motion.button
                            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {post.comments}
                          </motion.button>

                          <motion.button
                            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 01-7.432 0m9.032-4.026A9.001 9.001 0 0112 3c-4.474 0-8.268 2.943-9.543 7a9.97 9.97 0 011.827 3.342m9.032 4.026a9.97 9.97 0 01-1.827 3.342" />
                            </svg>
                            공유
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300">
              더보기
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}