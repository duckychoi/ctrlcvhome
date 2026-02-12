'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import FooterSection from '../sections/FooterSection'

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  icon: string
  popular?: boolean
}

interface PricingTier {
  id: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted?: boolean
  buttonText: string
  buttonColor: string
}

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const services: Service[] = [
  {
    id: 1,
    title: "코드 리뷰",
    description: "30년 경험의 전문가가 직접 검토하는 깊이 있는 코드 리뷰 서비스. 성능, 보안, 유지보수성 등 다각적인 관점에서 분석.",
    features: [
      "전체 코드베이스 검토",
      "성능 최적화 제안",
      "보안 취약점 분석",
      "리팩토링 가이드",
      "모범 사례 적용"
    ],
    icon: "code-review"
  },
  {
    id: 2,
    title: "출판 기획",
    description: "기술 서적 출판부터 마케팅까지. 집필 구조 설계, 내용 검토, 출판 프로세스 전반을 지원합니다.",
    features: [
      "집필 계획 수립",
      "콘텐츠 구조 설계",
      "원고 검토 및 교정",
      "출판사 연결",
      "마케팅 전략"
    ],
    icon: "book-publishing"
  },
  {
    id: 3,
    title: "노션 컨설팅",
    description: "개인 팀 기업에 최적화된 노션 워크스페이스 구축. 업무 자동화와 지식 관리 시스템 설계.",
    features: [
      "워크스페이스 설계",
      "템플릿 제작",
      "자동화 설정",
      "팀 교육",
      "지식 관리 시스템"
    ],
    icon: "notion-consulting"
  }
]

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "스타터",
    price: "₩50만",
    period: "/회",
    description: "개인 프로젝트나 작은 규모의 코드 리뷰에 적합한 기본 패키지",
    features: [
      "코드 리뷰 (최대 5시간)",
      "상세 리포트 제공",
      "개선 방향 제시",
      "이메일 지원",
      "1회 피드백"
    ],
    buttonText: "상담 신청",
    buttonColor: "bg-white/5 hover:bg-white/10"
  },
  {
    id: 2,
    name: "프로페셔널",
    price: "₩150만",
    period: "/월",
    description: "지속적인 프로젝트 관리가 필요한 전문가를 위한 패키지",
    features: [
      "주간 코드 리뷰 (최대 20시간)",
      "실시간 피드백",
      "기술 멘토링",
      "성장 로드맵",
      "우선 지원",
      "워크샵 1회"
    ],
    highlighted: true,
    buttonText: "상담 신청",
    buttonColor: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
  },
  {
    id: 3,
    name: "엔터프라이즈",
    price: "맞춤 견적",
    period: "",
    description: "팀 기관 대규모 프로젝트를 위한 종합 솔루션",
    features: [
      "무제한 코드 리뷰",
      "팀 교육",
      "프로세스 설계",
      "전용 담당자",
      "24/7 지원",
      "맞춤 솔루션",
      "현장 방문 컨설팅"
    ],
    buttonText: "맞춤 견적",
    buttonColor: "bg-white/5 hover:bg-white/10"
  }
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "김민준",
    role: "개발팀장",
    company: "테크솔루션",
    content: "코드 리뷰를 받은 후 팀 전체의 코드 품질이 크게 향상되었습니다. 특히 성능 최적화 제안은 실제로 40%의 속도 개선으로 이어졌습니다.",
    rating: 5,
    avatar: "/images/avatar-1.jpg"
  },
  {
    id: 2,
    name: "이서아",
    role: "CTO",
    company: "스타트업A",
    content: "Vibe Coding 방법론을 도입한 이후로 개발 생산성이 2배 이상 증가했습니다. AI 도구 활용법과 자동화 전략이 정말 인상 깊었습니다.",
    rating: 5,
    avatar: "/images/avatar-2.jpg"
  },
  {
    id: 3,
    name: "박지민",
    role: "작가",
    company: "프리랜서",
    content: "기술 서적 출판 컨설팅을 받아 정말 큰 도움이 되었습니다. 구조 설계부터 출판까지 전 과정을 체계적으로 도와주셨습니다.",
    rating: 5,
    avatar: "/images/avatar-3.jpg"
  }
]

export default function ConsultingPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-violet-950 to-purple-950">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              컨설팅 서비스
              <span className="block text-2xl md:text-3xl text-purple-300 mt-2 font-normal">
                30년 경험의 전문가가 당신의 성공을 함께 만듭니다
              </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              코드 리뷰, 출판 기획, 노션 컨설팅까지. 당신의 기술적 성장과 비즈니스 성공을 위한 맞춤형 솔루션을 제공합니다.
            </p>
          </motion.div>

          {/* Services Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">서비스 소개</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setSelectedService(service.id)}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing Section */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">가격 플랜</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  className={`relative bg-white/5 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${
                    tier.highlighted 
                      ? 'border-purple-500/30 ring-2 ring-purple-500/20 hover:bg-white/15' 
                      : 'border-white/10 hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                        인기
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      tier.highlighted
                        ? 'text-white shadow-lg shadow-purple-500/25 hover:shadow-xl'
                        : 'text-white border border-white/10'
                    } ${tier.buttonColor}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tier.buttonText}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Consultation Form */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">상담 신청</h2>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      회사/기관명
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="회사명 또는 기관명"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      희망 서비스 *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="" className="bg-purple-900">서비스를 선택해주세요</option>
                      <option value="code-review" className="bg-purple-900">코드 리뷰</option>
                      <option value="publishing" className="bg-purple-900">출판 기획</option>
                      <option value="notion" className="bg-purple-900">노션 컨설팅</option>
                      <option value="other" className="bg-purple-900">기타</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      상담 내용 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="상담받고 싶은 내용을 자유롭게 작성해주세요."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    상담 신청하기
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">고객 후기</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}