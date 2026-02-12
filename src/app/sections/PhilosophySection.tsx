'use client'

import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'
import SectionLabel from '../components/SectionLabel'

export default function PhilosophySection() {
  const philosophies = [
    {
      title: "본질에 집중합니다",
      description: "기술의 복잡함은 저희가 맡겠습니다. 당신은 오직 아이디어의 본질과 가치에만 집중하세요.",
      icon: "🎯",
      delay: 0
    },
    {
      title: "경험을 전수합니다",
      description: "30년의 개발 노하우를 AI 기술로 증폭시켜 당신의 지혜를 실행 가능한 코드로 변환합니다.",
      icon: "🤝",
      delay: 0.2
    },
    {
      title: "가능성을 확장합니다",
      description: "코딩의 장벽을 넘어, 당신의 상상력이 유일한 한계가 되는 세상을 만듭니다.",
      icon: "🚀",
      delay: 0.4
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealAnimation className="text-center mb-16">
          <SectionLabel text="Core Philosophy" className="mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            우리가 믿는 것
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            기술은 도구일 뿐입니다. 진정한 혁신은 인간의 지혜와 경험에서 비롯됩니다.
          </p>
        </RevealAnimation>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <RevealAnimation
              key={index}
              delay={philosophy.delay}
              className="h-full"
            >
              <GlassCard className="h-full group cursor-pointer">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {philosophy.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors duration-300">
                  {philosophy.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {philosophy.description}
                </p>

                {/* Hover Effect Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </RevealAnimation>
          ))}
        </div>

        {/* Bottom Quote */}
        <RevealAnimation delay={0.6} className="text-center mt-16">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
              "가장 위대한 기술은 인간의 지혜를 증폭시키되, 결코 대체하지 않는 것이다."
            </blockquote>
            <div className="mt-6 text-violet-400 font-semibold">
              — VibeLabs 철학
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}