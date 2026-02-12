'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function FAQSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "문과생도 코딩을 할 수 있나요?",
      answer: "물론입니다! 바이브 코딩은 문과생을 위해 특별히 설계된 코딩 학습법입니다. 수학이나 논리적 사고가 부족해도 괜찮습니다. AI가 번역가처럼 당신의 언어를 컴퓨터 언어로 변환해주기 때문에, 당신은 아이디어와 스토리에만 집중하면 됩니다. 실제로 저희 커뮤니티에는 문과 출신 개발자들이 가장 많습니다. 문과생의 강점인 '스토리텔링'과 '감성적 접근'이 오히려 코딩에 큰 도움이 된다는 것을 알게 되실 겁니다.",
      icon: "book",
      color: "purple"
    },
    {
      question: "나이가 많아도 코딩을 시작할 수 있나요?",
      answer: "나이는 전혀 문제 되지 않습니다. 오히려 인생 경험과 전문성이 있는 분들이 더 빠르게 성장하는 경우가 많습니다. 30대, 40대, 50대 분들이 자신의 전문 분야와 코딩을 결합해 새로운 기회를 만들고 있습니다. 뇌과학적으로도 성인은 학습에 더 유리한 구조를 가지고 있습니다. 중요한 것은 나이가 아니라 '꾸준함'과 '올바른 방법'입니다. 바이브 코딩은 어른 학습자의 특성을 고려해 설계되었습니다.",
      icon: "clock",
      color: "blue"
    },
    {
      question: "개발자도 글쓰기 실력이 중요한가요?",
      answer: "매우 중요합니다. 현대 개발자에게 글쓰기는 선택이 아닌 필수 능력입니다. 1) 코드는 글입니다. 변수명, 함수명, 주석처리 모두 글쓰기입니다. 2) 기술 블로그로 자신을 브랜딩해야 취업과 프리랜싱에 유리합니다. 3) 프로젝트 기획서, 제안서, 발표 자료 모두 글쓰기 능력이 필요합니다. 4) 팀원들과의 소통과 협업에도 글쓰기가 필수적입니다. 좋은 개발자는 좋은 글쓰기 능력을 갖춘 개발자입니다.",
      icon: "pen-tool",
      color: "emerald"
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: "from-purple-500 to-pink-500 border-purple-500/20 bg-purple-500/10",
      blue: "from-blue-500 to-cyan-500 border-blue-500/20 bg-blue-500/10", 
      emerald: "from-emerald-500 to-green-500 border-emerald-500/20 bg-emerald-500/10"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Question Mark Pattern */}
        <div className="absolute inset-0 opacity-5">
          {mounted && [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl text-white/10 font-serif"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            >
              ?
            </div>
          ))}
        </div>

        {/* Glow Effects */}
        <motion.div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="FAQ" className="mb-6 text-indigo-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              자주 묻는 질문
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                궁금한 점을 바로 해결하세요
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              대부분의 초보자들이 궁금해하는 질문들을 모았습니다<br />
              더 궁금한 점이 있다면 언제든 오픈채팅방에서 물어보세요
            </p>
          </RevealAnimation>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <details 
                className="group"
                open={openIndex === index}
                onToggle={(e) => {
                  e.preventDefault()
                  toggleFAQ(index)
                }}
              >
                <summary className="list-none cursor-pointer">
                  <GlassCard className={`border ${getColorClasses(faq.color).split(' ')[1]} transition-all duration-300 ${
                    openIndex === index ? 'ring-2 ring-indigo-500/30' : ''
                  }`}>
                    <div className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(faq.color).split(' ')[0]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon name={faq.icon} className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      
                      <motion.div
                        className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                        animate={{ 
                          rotate: openIndex === index ? 180 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon name="chevron-down" className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-gray-500/20">
                              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </summary>
              </details>
            </RevealAnimation>
          ))}
        </div>

        {/* Additional Help Section */}
        <RevealAnimation delay={0.7} className="mt-16">
          <GlassCard className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="help-circle" className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              더 궁금한 점이 있으신가요?
            </h3>
            <p className="text-gray-300 mb-6">
              24시간 운영되는 오픈채팅방에서 바로 질문하고 답변을 받아보세요<br />
              수백 명의 동료들이 당신의 질문을 기다리고 있습니다
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                오픈채팅방으로 가기
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-full text-indigo-400 font-medium hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                1:1 상담 예약
              </motion.button>
            </div>
          </GlassCard>
        </RevealAnimation>
      </div>
    </section>
  )
}
