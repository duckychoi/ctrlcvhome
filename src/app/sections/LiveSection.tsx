'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import RevealAnimation from '../components/RevealAnimation'
import SectionLabel from '../components/SectionLabel'
import GlassCard from '../components/GlassCard'
import Icon from '../components/Icon'

export default function LiveSection() {
  const [subscribers, setSubscribers] = useState(2770)
  const [videos, setVideos] = useState(156)
  const [views, setViews] = useState(45000)

  useEffect(() => {
    // Animate counters
    const timer = setTimeout(() => {
      setSubscribers(2770)
      setVideos(156)
      setViews(45000)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const formatNumber = (num: number) => {
    return num.toLocaleString('ko-KR')
  }

  const Counter = ({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        setCount(Math.floor(progress * target))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }, [target, duration])

    return <>{formatNumber(count)}{suffix}</>
  }

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-950 via-rose-950 to-orange-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <RevealAnimation direction="fade">
            <SectionLabel text="LIVE PROOF" className="mb-6 text-rose-400" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              편집 없는 리얼타임,
              <span className="block bg-gradient-to-r from-red-400 via-rose-400 to-orange-400 bg-clip-text text-transparent mt-2">
                '바이브 코딩'의 증명
              </span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              모든 과정을 투명하게 보여드립니다. 실수도, 고민도, 그리고 해결까지.
            </p>
          </RevealAnimation>
        </div>

        {/* YouTube Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <RevealAnimation delay={0.3}>
            <GlassCard className="text-center group cursor-pointer">
              <div className="relative">
                {/* YouTube Play Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="play" className="w-7 h-7 text-white ml-1" />
                </div>

                <div className="pt-8">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <Counter target={subscribers} suffix="+" />
                  </div>
                  <div className="text-rose-400 font-medium mb-4">구독자</div>
                  <div className="text-gray-400 text-sm">
                    지속적으로 성장 중
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <GlassCard className="text-center group cursor-pointer">
              <div className="relative">
                {/* Video Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="video" className="w-7 h-7 text-white" />
                </div>

                <div className="pt-8">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <Counter target={videos} suffix="+" />
                  </div>
                  <div className="text-orange-400 font-medium mb-4">영상</div>
                  <div className="text-gray-400 text-sm">
                    주 3회 이상 업로드
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <GlassCard className="text-center group cursor-pointer">
              <div className="relative">
                {/* Eye Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Icon name="eye" className="w-7 h-7 text-white" />
                </div>

                <div className="pt-8">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <Counter target={views} suffix="+" />
                  </div>
                  <div className="text-red-400 font-medium mb-4">조회수</div>
                  <div className="text-gray-400 text-sm">
                    실제 사용자들의 참여
                  </div>
                </div>
              </div>
            </GlassCard>
          </RevealAnimation>
        </div>

        {/* YouTube Player Preview */}
        <RevealAnimation delay={0.6} className="mb-16">
          <div className="relative max-w-4xl mx-auto group cursor-pointer">
            <GlassCard className="overflow-hidden p-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden">
                {/* Simulated YouTube Player */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon name="play" className="w-10 h-10 text-white ml-2" />
                  </motion.div>
                </div>
                
                {/* YouTube Branding */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-bold">
                  LIVE
                </div>
                
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm">
                  바이브 코딩 채널
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </GlassCard>
          </div>
        </RevealAnimation>

        {/* CTA Section */}
        <RevealAnimation delay={0.8}>
          <div className="text-center">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              채널 방문하기
              <Icon name="arrow-right" className="w-5 h-5" />
            </motion.button>
            
            <p className="text-gray-400 text-sm mt-4">
              지금 바로 실시간 코딩 과정을 확인해보세요
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}