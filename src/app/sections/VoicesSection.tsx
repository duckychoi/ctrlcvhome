'use client'

import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function VoicesSection() {
  const testimonials = [
    {
      quote: "코딩을 전혀 몰랐는데, 제 아이디어만으로 완전한 앱이 만들어졌어요. 마치 마법을 본 것 같았습니다.",
      author: "김민지",
      role: "스타트업 대표"
    },
    {
      quote: "30년 경험의 선생님께서 AI의 시야로 제 코드를 보셨습니다. 단 30분 만에 3개월 고민이 해결됐어요.",
      author: "이현우",
      role: "개발자"
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating Quote Marks */}
      <div className="absolute top-20 left-10 text-8xl md:text-9xl font-bold text-violet-500/10">
        "
      </div>
      <div className="absolute bottom-20 right-10 text-8xl md:text-9xl font-bold text-indigo-500/10">
        "
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="VOICES" className="mb-6" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              막막함이 확신으로
              <span className="block bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mt-2">
                바뀐 순간들
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              바이브 코딩을 만난 사람들의 진짜 이야기
            </p>
          </RevealAnimation>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.2}>
              <GlassCard className="h-full group cursor-pointer">
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Icon name="quote" className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    <blockquote className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6 font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-white text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-violet-400 text-sm mt-1">
                          {testimonial.role}
                        </div>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealAnimation delay={0.8} className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-4">
            더 많은 분들의 성공 스토리가 궁금하신가요?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-violet-400 font-medium hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            더 보기
            <Icon name="arrow-right" className="w-4 h-4" />
          </motion.button>
        </RevealAnimation>
      </div>
    </section>
  )
}