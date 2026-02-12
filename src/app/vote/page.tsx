'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'

interface VoteOption {
  id: number
  text: string
  votes: number
  percentage: number
}

interface Vote {
  id: number
  title: string
  description: string
  author: string
  category: string
  totalVotes: number
  createdAt: string
  endsAt: string
  isActive: boolean
  hasVoted: boolean
  selectedOption: number | null
  options: VoteOption[]
}

const mockVotes: Vote[] = [
  {
    id: 1,
    title: "가장 선호하는 프론트엔드 프레임워크는?",
    description: "2024년 개발자들이 가장 선호하는 프론트엔드 프레임워크를 알아봅니다.",
    author: "VibeLabs팀",
    category: "기술",
    totalVotes: 1234,
    createdAt: "3일 전",
    endsAt: "7일 남음",
    isActive: true,
    hasVoted: false,
    selectedOption: null,
    options: [
      { id: 1, text: "React", votes: 456, percentage: 37 },
      { id: 2, text: "Vue.js", votes: 312, percentage: 25 },
      { id: 3, text: "Angular", votes: 234, percentage: 19 },
      { id: 4, text: "Svelte", votes: 123, percentage: 10 },
      { id: 5, text: "Next.js", votes: 109, percentage: 9 }
    ]
  },
  {
    id: 2,
    title: "Vibe Coding 실습 시간 선호도",
    description: "가장 효율적인 Vibe Coding 실습 시간대를 선택해주세요.",
    author: "김코치",
    category: "라이프스타일",
    totalVotes: 567,
    createdAt: "1주 전",
    endsAt: "3일 남음",
    isActive: true,
    hasVoted: true,
    selectedOption: 2,
    options: [
      { id: 1, text: "오전 9시-12시", votes: 123, percentage: 22 },
      { id: 2, text: "오후 2시-5시", votes: 234, percentage: 41 },
      { id: 3, text: "저녁 7시-10시", votes: 156, percentage: 28 },
      { id: 4, text: "밤 10시-12시", votes: 54, percentage: 9 }
    ]
  },
  {
    id: 3,
    title: "가장 중요한 개발자 역량",
    description: "현대 개발자에게 가장 중요한 역량是什么? (최종 결과)",
    author: "이리더",
    category: "커리어",
    totalVotes: 2890,
    createdAt: "2주 전",
    endsAt: "종료됨",
    isActive: false,
    hasVoted: true,
    selectedOption: 1,
    options: [
      { id: 1, text: "문제 해결 능력", votes: 987, percentage: 34 },
      { id: 2, text: "커뮤니케이션", votes: 756, percentage: 26 },
      { id: 3, text: "기술 스택", votes: 578, percentage: 20 },
      { id: 4, text: "학습 능력", votes: 445, percentage: 15 },
      { id: 5, text: "비즈니스 이해", votes: 124, percentage: 5 }
    ]
  },
  {
    id: 4,
    title: "최고의 코드 리뷰 도구",
    description: "팀에서 사용하기 가장 좋은 코드 리뷰 도구를 선택해주세요.",
    author: "박아키텍트",
    category: "도구",
    totalVotes: 445,
    createdAt: "5일 전",
    endsAt: "10일 남음",
    isActive: true,
    hasVoted: false,
    selectedOption: null,
    options: [
      { id: 1, text: "GitHub PR", votes: 189, percentage: 42 },
      { id: 2, text: "GitLab MR", votes: 134, percentage: 30 },
      { id: 3, text: "Bitbucket PR", votes: 67, percentage: 15 },
      { id: 4, text: "Phabricator", votes: 55, percentage: 13 }
    ]
  }
]

const categories = ["전체", "기술", "라이프스타일", "커리어", "도구"]

export default function VotePage() {
  const [selectedCategory, setSelectedCategory] = useState('전체')
  const [votes, setVotes] = useState(mockVotes)

  const handleVote = (voteId: number, optionId: number) => {
    setVotes(prevVotes => 
      prevVotes.map(vote => {
        if (vote.id === voteId && !vote.hasVoted && vote.isActive) {
          const updatedOptions = vote.options.map(option => {
            if (option.id === optionId) {
              return {
                ...option,
                votes: option.votes + 1,
                percentage: Math.round(((option.votes + 1) / (vote.totalVotes + 1)) * 100)
              }
            }
            return {
              ...option,
              percentage: Math.round((option.votes / (vote.totalVotes + 1)) * 100)
            }
          })
          
          return {
            ...vote,
            totalVotes: vote.totalVotes + 1,
            hasVoted: true,
            selectedOption: optionId,
            options: updatedOptions
          }
        }
        return vote
      })
    )
  }

  const filteredVotes = votes.filter(vote => 
    selectedCategory === '전체' || vote.category === selectedCategory
  )

  const activeVotes = filteredVotes.filter(vote => vote.isActive)
  const endedVotes = filteredVotes.filter(vote => !vote.isActive)

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
              투표
              <span className="block text-2xl md:text-3xl text-purple-300 mt-2 font-normal">
                의견을 나누고 커뮤니티의 목소리를 들어보세요
              </span>
            </h1>
          </motion.div>

          {/* Create Vote Button */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              투표 만들기
            </motion.button>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Active Votes */}
          {activeVotes.length > 0 && (
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                진행중인 투표
              </h2>
              
              <div className="grid gap-6">
                {activeVotes.map((vote, index) => (
                  <motion.div
                    key={vote.id}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white mb-2">{vote.title}</h3>
                        <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm font-medium rounded-lg border border-green-500/30">
                          진행중
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{vote.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {vote.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          {vote.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {vote.endsAt}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          총 {vote.totalVotes}명 참여
                        </span>
                      </div>
                    </div>

                    {/* Vote Options */}
                    <div className="space-y-3">
                      {vote.options.map((option) => (
                        <div
                          key={option.id}
                          className={`relative p-4 rounded-xl border transition-all duration-300 ${
                            vote.hasVoted && vote.selectedOption === option.id
                              ? 'bg-purple-500/20 border-purple-500/50'
                              : vote.hasVoted
                              ? 'bg-white/5 border-white/10'
                              : 'bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer'
                          }`}
                          onClick={() => !vote.hasVoted && handleVote(vote.id, option.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium">{option.text}</span>
                            <span className="text-purple-300 font-semibold">{option.percentage}%</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${option.percentage}%` }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                            />
                          </div>
                          
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-gray-400 text-sm">{option.votes}표</span>
                            {vote.hasVoted && vote.selectedOption === option.id && (
                              <span className="text-purple-300 text-sm">✓ 선택한 항목</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {!vote.hasVoted && (
                      <p className="text-gray-400 text-sm mt-4 text-center">
                        항목을 클릭하여 투표하세요
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Ended Votes */}
          {endedVotes.length > 0 && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                종료된 투표
              </h2>
              
              <div className="grid gap-6">
                {endedVotes.map((vote, index) => (
                  <motion.div
                    key={vote.id}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 opacity-75"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.75, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white mb-2">{vote.title}</h3>
                        <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-sm font-medium rounded-lg border border-gray-500/30">
                          종료됨
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{vote.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {vote.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          {vote.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          총 {vote.totalVotes}명 참여
                        </span>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                      {vote.options.map((option, optionIndex) => (
                        <div
                          key={option.id}
                          className={`relative p-4 rounded-xl border ${
                            optionIndex === 0
                              ? 'bg-yellow-500/10 border-yellow-500/30'
                              : 'bg-white/5 border-white/10'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-medium">{option.text}</span>
                              {optionIndex === 0 && (
                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-medium rounded-lg">
                                  1위
                                </span>
                              )}
                            </div>
                            <span className="text-purple-300 font-semibold">{option.percentage}%</span>
                          </div>
                          
                          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                optionIndex === 0
                                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
                              }`}
                              style={{ width: `${option.percentage}%` }}
                            />
                          </div>
                          
                          <span className="text-gray-400 text-sm mt-2 block">{option.votes}표</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
    </div>
  )
}