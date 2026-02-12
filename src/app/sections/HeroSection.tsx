'use client'

import { motion } from 'framer-motion'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'

type Edition = {
  id: string
  year: string
  season: string
  title: string
  subtitle: string
  href: string
  base: string
  grain: string
  sticker?: string
}

type FocusPose = {
  x: number
  y: number
}

const editions: Edition[] = [
  {
    id: 'renaissance',
    year: '2026',
    season: 'Winter',
    title: 'Renaissance',
    subtitle: 'A new world of commerce awaits.',
    href: '/',
    base: 'radial-gradient(86% 80% at 72% 12%, #60738a 0%, #39424e 34%, #1d242c 60%, #15191e 100%)',
    grain:
      'repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 1px, rgba(0,0,0,0.03) 1px 3px), radial-gradient(120% 120% at 5% 95%, rgba(255,176,130,0.18), transparent 50%)',
    sticker: 'NOW PLAYING'
  },
  {
    id: 'vibe-coding',
    year: '2025',
    season: 'Summer',
    title: 'Vibe Coding',
    subtitle: 'Bring any vision to life.',
    href: '/vibe-coding',
    base: 'radial-gradient(90% 120% at 25% 18%, #d18bff 0%, #8f5dde 37%, #5f4a9e 56%, #2b2550 100%)',
    grain:
      'repeating-linear-gradient(145deg, rgba(255,255,255,0.08) 0 1px, rgba(0,0,0,0.05) 1px 4px), radial-gradient(42% 38% at 85% 80%, rgba(149,213,255,0.22), transparent 60%)'
  },
  {
    id: 'qa',
    year: '2025',
    season: 'Winter',
    title: 'Q&A',
    subtitle: 'Ask, answer, and iterate.',
    href: '/qa',
    base: 'linear-gradient(180deg, #eeeeef 0%, #d8d9df 55%, #bfc2cc 100%)',
    grain:
      'repeating-linear-gradient(180deg, rgba(0,0,0,0.08) 0 1px, rgba(255,255,255,0.2) 1px 2px), radial-gradient(35% 35% at 75% 70%, rgba(0,0,0,0.18), transparent 70%)'
  },
  {
    id: 'community',
    year: '2024',
    season: 'Summer',
    title: 'Community',
    subtitle: 'Share updates and feedback loops.',
    href: '/community',
    base: 'radial-gradient(80% 65% at 78% 22%, #4f5d77 0%, #2c3446 42%, #171d28 100%)',
    grain:
      'repeating-linear-gradient(140deg, rgba(255,255,255,0.1) 0 1px, rgba(0,0,0,0.08) 1px 4px), radial-gradient(38% 38% at 20% 78%, rgba(131,101,220,0.35), transparent 65%)'
  },
  {
    id: 'vote',
    year: '2024',
    season: 'Winter',
    title: 'Vote',
    subtitle: 'Prioritize features transparently.',
    href: '/vote',
    base: 'linear-gradient(145deg, #cbdcf4 0%, #9cb4d8 55%, #7f99bf 100%)',
    grain:
      'repeating-linear-gradient(140deg, rgba(255,255,255,0.14) 0 1px, rgba(0,0,0,0.03) 1px 5px), radial-gradient(34% 30% at 76% 16%, rgba(255,255,255,0.42), transparent 70%)'
  },
  {
    id: 'lab',
    year: '2023',
    season: 'Summer',
    title: 'Lab',
    subtitle: 'Experiment with prototypes.',
    href: '/lab',
    base: 'linear-gradient(155deg, #0f1532 0%, #21408f 52%, #531f6d 100%)',
    grain:
      'repeating-linear-gradient(130deg, rgba(255,255,255,0.08) 0 1px, rgba(0,0,0,0.08) 1px 4px), radial-gradient(65% 45% at 60% 30%, rgba(255,124,73,0.25), transparent 72%)'
  },
  {
    id: 'portfolio',
    year: '2023',
    season: 'Winter',
    title: 'Portfolio',
    subtitle: 'Cases and measurable outcomes.',
    href: '/portfolio',
    base: 'linear-gradient(155deg, #f1be47 0%, #ee9d2f 50%, #a86c21 100%)',
    grain:
      'repeating-linear-gradient(130deg, rgba(255,255,255,0.08) 0 1px, rgba(0,0,0,0.08) 1px 4px), radial-gradient(50% 60% at 82% 20%, rgba(255,236,172,0.3), transparent 70%)'
  },
  {
    id: 'consulting',
    year: '2022',
    season: 'Summer',
    title: 'Consulting',
    subtitle: 'Hands-on strategy and execution.',
    href: '/consulting',
    base: 'linear-gradient(145deg, #e4ccff 0%, #bc91f5 48%, #8a65cc 100%)',
    grain:
      'repeating-linear-gradient(130deg, rgba(255,255,255,0.1) 0 1px, rgba(0,0,0,0.07) 1px 4px), radial-gradient(56% 44% at 26% 78%, rgba(123,228,255,0.27), transparent 70%)'
  }
]

const topRow = editions.slice(0, 4)
const bottomRow = editions.slice(4, 8)

function RecordCard({
  item,
  focusedId,
  setFocused,
  testId,
  registerRef,
  focusPose
}: {
  item: Edition
  focusedId: string | null
  setFocused: (id: string | null) => void
  testId: string
  registerRef: (id: string, el: HTMLAnchorElement | null) => void
  focusPose: FocusPose | null
}) {
  const isFocused = focusedId === item.id
  const hasFocused = focusedId !== null
  const pose = isFocused ? focusPose : null

  return (
    <motion.a
      href={item.href}
      ref={(el) => registerRef(item.id, el)}
      data-testid={testId}
      onMouseEnter={() => setFocused(item.id)}
      className="group relative block h-full w-full overflow-hidden rounded-[5px] border border-black/10 isolate"
      animate={{
        x: pose ? pose.x : 0,
        y: pose ? pose.y : 0,
        scale: pose ? 2.2 : 1,
        z: pose ? 380 : 0,
        filter: hasFocused && !isFocused ? 'blur(4.8px) saturate(0.84)' : 'blur(0px) saturate(1)',
        opacity: hasFocused && !isFocused ? 0.5 : 1,
        boxShadow: pose
          ? '0 42px 56px rgba(0,0,0,0.3)'
          : '0 10px 18px rgba(0,0,0,0.15)'
      }}
      transition={{ type: 'spring', stiffness: 92, damping: 22, mass: 0.92 }}
      style={{ transformStyle: 'preserve-3d', zIndex: pose ? 80 : 10 }}
    >
      <div className="absolute inset-0" style={{ background: item.base }} />
      <div
        className="absolute inset-0"
        style={{
          background: item.grain,
          opacity: isFocused ? 0.2 : 0.6,
          mixBlendMode: isFocused ? 'normal' : 'overlay'
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: isFocused
            ? 'linear-gradient(180deg, rgba(0,0,0,0.01) 0%, rgba(0,0,0,0.16) 100%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.42) 100%)'
        }}
      />
      <h3 className="absolute bottom-3 left-3 right-3 text-[22px] font-semibold leading-[1.04] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
        {item.title}
      </h3>
    </motion.a>
  )
}

export default function HeroSection() {
  const [focusedId, setFocusedId] = useState<string | null>(null)
  const [focusPose, setFocusPose] = useState<FocusPose | null>(null)
  const [focusLocked, setFocusLocked] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const focused = useMemo(
    () => editions.find((edition) => edition.id === focusedId) ?? null,
    [focusedId]
  )

  const setFocusedWithDelay = (id: string | null) => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (id === null) {
      timerRef.current = setTimeout(() => setFocusedId(null), 120)
      return
    }
    if (focusLocked && focusedId && focusedId !== id) return
    timerRef.current = setTimeout(() => setFocusedId(id), 70)
  }

  useLayoutEffect(() => {
    const computePose = () => {
      if (!focusedId || !stageRef.current) {
        setFocusPose(null)
        return
      }

      const el = cardRefs.current[focusedId]
      if (!el) {
        setFocusPose(null)
        return
      }

      const stageRect = stageRef.current.getBoundingClientRect()
      const rect = el.getBoundingClientRect()
      const targetX = stageRect.left + stageRect.width * 0.5
      const targetY = stageRect.top + stageRect.height * 0.43
      const currentX = rect.left + rect.width / 2
      const currentY = rect.top + rect.height / 2

      setFocusPose({
        x: targetX - currentX,
        y: targetY - currentY
      })
    }

    computePose()
    window.addEventListener('resize', computePose)
    return () => window.removeEventListener('resize', computePose)
  }, [focusedId])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#ececec] pb-16 pt-[92px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.7)_0%,rgba(236,236,236,0.9)_44%,rgba(217,217,217,1)_100%)]" />

      <div className="absolute inset-x-0 top-0 z-40 border-b border-black/10 bg-white/72 backdrop-blur-[2px]">
        <div className="mx-auto flex h-14 max-w-[1520px] items-center justify-between px-6">
          <div className="flex items-center gap-8 text-[18px]">
            <a href="/" className="flex items-center gap-2 font-semibold text-neutral-900">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] bg-black text-[10px] text-white">S</span>
              VibeLabs Editions
            </a>
            <button className="text-neutral-900">Search</button>
          </div>
          <div className="flex items-center gap-6 text-[18px]">
            <span className="text-neutral-900">VibeLabs.com</span>
            <button className="rounded-full bg-black px-5 py-1.5 text-[16px] font-semibold text-white">
              Start for free
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1520px] px-6">
        <div className="mb-2 text-[31px] leading-[1.18] text-neutral-600">
          Everything new across VibeLabs.
          <br />
          Every six months.
        </div>

        {focused && (
          <div className="absolute left-6 top-[198px] z-30 max-w-[300px]">
            <h2 className="text-[44px] font-semibold tracking-tight text-neutral-900">{focused.title}</h2>
            <p className="mt-1 text-[30px] leading-[1.06] tracking-tight text-neutral-900">{focused.subtitle}</p>
          </div>
        )}

        <div
          ref={stageRef}
          onMouseLeave={() => {
            setFocusLocked(false)
            setFocusedWithDelay(null)
          }}
          className="relative [perspective:1800px]"
        >
          <div className="relative z-20 grid grid-cols-4 gap-6">
            {topRow.map((item) => (
              <div key={item.id} className="aspect-square">
                <RecordCard
                  item={item}
                  focusedId={focusedId}
                  setFocused={(id) => {
                    setFocusLocked(true)
                    setFocusedWithDelay(id)
                  }}
                  testId={`top-card-${item.id}`}
                  registerRef={(id, el) => {
                    cardRefs.current[id] = el
                  }}
                  focusPose={focusPose}
                />
              </div>
            ))}
          </div>

          <div className="shelf-3d shelf-3d-flow mt-2" />

          <div className="relative z-20 mt-10 grid grid-cols-4 gap-6">
            {bottomRow.map((item) => (
              <div key={item.id} className="aspect-square">
                <RecordCard
                  item={item}
                  focusedId={focusedId}
                  setFocused={(id) => {
                    setFocusLocked(true)
                    setFocusedWithDelay(id)
                  }}
                  testId={`bottom-card-${item.id}`}
                  registerRef={(id, el) => {
                    cardRefs.current[id] = el
                  }}
                  focusPose={focusPose}
                />
              </div>
            ))}
          </div>

          <div className="shelf-3d shelf-3d-flow mt-2" />

          {focused && (
            <a
              href={focused.href}
              className="absolute left-1/2 top-[74%] z-[90] -translate-x-1/2 rounded-full bg-black px-6 py-2 text-[20px] font-semibold text-white shadow-[0_8px_14px_rgba(0,0,0,0.2)]"
            >
              Open
            </a>
          )}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-black/10 pt-6 text-[12px] md:grid-cols-8">
          {editions.map((item) => (
            <a
              key={`${item.id}-${item.year}`}
              href={item.href}
              data-testid={`timeline-${item.id}`}
              onMouseEnter={() => setFocusedWithDelay(item.id)}
              onFocus={() => setFocusedWithDelay(item.id)}
              className={`text-left leading-tight transition-colors ${
                focusedId === item.id ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-800'
              }`}
            >
              <div>
                {item.year}
                <br />
                {item.season}
              </div>
              <div className="mt-1 font-medium">{item.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
