'use client'

import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function PremiumSection() {
  const services = [
    {
      title: "코드 리뷰",
      description: "30년 경험의 눈으로 당신의 코드를 진단합니다. 성능, 보안, 유지보수성까지 완벽하게.",
      icon: "code",
      features: ["실시간 리뷰", "성능 최적화", "보안 점검", "문서화"],
      price: "300,000원",
      duration: "1회 2시간"
    },
    {
      title: "출판 기획",
      description: "기술 서적부터 AI 관련 콘텐츠까지. 아이디어를 베스트셀러로 만드는 비법을 전수합니다.",
      icon: "book",
      features: ["기획 컨설팅", "목차 구성", "출판사 연계", "마케팅 전략"],
      price: "500,000원",
      duration: "1회 3시간"
    },
    {
      title: "노션 컨설팅",
      description: "개인 지식 관리부터 팀 협업까지. 당신의 생각을 체계적으로 정리하고 실행하게 합니다.",
      icon: "notion",
      features: ["시스템 구축", "템플릿 제작", "자동화 설정", "교육 지원"],
      price: "200,000원",
      duration: "1회 2시간"
    }
  ]

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-amber-950 via-yellow-950/20 to-amber-950 overflow-hidden">
      {/* Luxurious Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, rgba(251, 191, 36, 0.1) 25%, transparent 25%),
                             linear-gradient(-45deg, rgba(251, 191, 36, 0.1) 25%, transparent 25%),
                             linear-gradient(45deg, transparent 75%, rgba(251, 191, 36, 0.1) 75%),
                             linear-gradient(-45deg, transparent 75%, rgba(251, 191, 36, 0.1) 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }} />
        </div>
        
        <motion.div
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="PREMIUM SERVICE" className="mb-6 text-amber-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master's Insight:
              <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                30년의 시야를 빌려드립니다
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              시행착오를 줄이고, 단기간에 전문가의 수준으로 성장하세요
            </p>
          </RevealAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <GlassCard className="h-full group cursor-pointer border-amber-500/20">
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name={service.icon} className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Duration */}
                <div className="border-t border-amber-500/20 pt-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-amber-400">
                        {service.price}
                      </div>
                      <div className="text-gray-400 text-sm mt-1">
                        {service.duration}
                      </div>
                    </div>
                    <motion.div
                      className="px-4 py-2 bg-amber-500/10 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-amber-400 text-sm font-medium">예약하기</span>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Trust Indicators */}
        <RevealAnimation delay={0.8}>
          <div className="relative max-w-4xl mx-auto">
            <GlassCard className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-amber-500/20">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
                  <div className="text-gray-300 text-sm">고객 만족도</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm">컨설팅 완료</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">4.9</div>
                  <div className="text-gray-300 text-sm">평균 평점</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </RevealAnimation>

        {/* Bottom CTA */}
        <RevealAnimation delay={0.9} className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            맞춤형 컨설팅이 필요하신가요?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-amber-500/20 rounded-full text-amber-400 font-medium hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            문의하기
            <Icon name="arrow-right" className="w-4 h-4" />
          </motion.button>
        </RevealAnimation>
      </div>
    </section>
  )
}