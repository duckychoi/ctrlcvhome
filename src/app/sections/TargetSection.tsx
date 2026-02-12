'use client'

import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'
import SectionLabel from '../components/SectionLabel'

export default function TargetSection() {
  const personas = [
    {
      emoji: "✍️",
      title: "작가님",
      description: "당신의 이야기를 웹으로, 앱으로, 당신의 상상력을 코드로 표현하세요",
      color: "from-purple-500 to-pink-500",
      delay: 0
    },
    {
      emoji: "💻",
      title: "개발자",
      description: "복잡한 구현은 AI에게, 당신은 아키텍처와 비즈니스 로직에 집중하세요",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      emoji: "📊",
      title: "기획자",
      description: "아이디어 스케치만으로 프로토타입을 만들고, 빠르게 검증하세요",
      color: "from-green-500 to-emerald-500",
      delay: 0.2
    },
    {
      emoji: "🎭",
      title: "무대가 필요한 분",
      description: "당신의 작품을 디지털 무대로, 온라인 갤러리로 만들어보세요",
      color: "from-orange-500 to-red-500",
      delay: 0.3
    },
    {
      emoji: "🌟",
      title: "디지털 존재감",
      description: "개인 브랜드를 웹사이트로, 포트폴리오를 인터랙티브하게",
      color: "from-violet-500 to-indigo-500",
      delay: 0.4
    },
    {
      emoji: "👵",
      title: "4050 세대",
      description: "나이와 상관없이, 당신의 경험과 지혜를 디지털로 남길 수 있습니다",
      color: "from-amber-500 to-orange-500",
      delay: 0.5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealAnimation className="text-center mb-16">
          <SectionLabel text="Who is it for?" className="mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            기술의 장벽 앞에서<br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              망설였던, 바로 당신의 이야기인가요?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            코드를 모르는 당신도, 아이디어만 있다면 충분합니다.
            당신의 경험과 상상력이 최고의 자산입니다.
          </p>
        </RevealAnimation>

        {/* Persona Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {personas.map((persona, index) => (
            <RevealAnimation
              key={index}
              delay={persona.delay}
              className="h-full group"
            >
              <GlassCard className="h-full relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Emoji and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-5xl group-hover:scale-110 transition-transform duration-300`}>
                      {persona.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300" 
                        style={{
                          backgroundImage: persona.delay % 2 === 0 ? 
                            'linear-gradient(to right, #a855f7, #ec4899)' : 
                            'linear-gradient(to right, #3b82f6, #06b6d4)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>
                      {persona.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed flex-grow">
                    {persona.description}
                  </p>
                  
                  {/* Hover Accent Line */}
                  <div className={`h-1 w-full bg-gradient-to-r ${persona.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-4`} />
                </div>
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Bottom Message */}
        <RevealAnimation delay={0.7} className="text-center">
          <GlassCard className="max-w-4xl mx-auto p-8">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              아직 확신이 서지 않으신가요?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              괜찮습니다. 첫발짝이 가장 어렵지만, 저희가 함께하겠습니다.<br />
              30년 경험의 개발자가 당신의 아이디어를 현실로 만드는 과정을 직접 보여드릴게요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                1:1 상담 신청하기
              </button>
              <button className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                사례 더보기
              </button>
            </div>
          </GlassCard>
        </RevealAnimation>
      </div>
    </section>
  )
}