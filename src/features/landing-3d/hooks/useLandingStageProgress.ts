'use client'

import { useEffect, useMemo, useState } from 'react'
import { timelineStages } from '../config/timelineStages'

type Range = {
  start: number
  end: number
}

const STAGE_IDS = timelineStages.map((stage) => stage.id)

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value))
}

export function useLandingStageProgress() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)

  const stageIds = useMemo(() => STAGE_IDS, [])

  useEffect(() => {
    let frame = 0
    let ranges: Range[] = []

    const computeRanges = () => {
      const viewportHeight = window.innerHeight
      ranges = stageIds.map((id) => {
        const nodes = Array.from(document.querySelectorAll(`[data-landing-3d-stage="${id}"]`))
        if (!nodes.length) {
          return { start: 0, end: viewportHeight }
        }

        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        const firstTop = first.getBoundingClientRect().top + window.scrollY
        const lastBottom = last.getBoundingClientRect().bottom + window.scrollY
        // Start almost exactly when the first stage section enters viewport.
        const start = firstTop - viewportHeight * 0.08
        const end = Math.max(start + 1, lastBottom - viewportHeight * 0.24)
        return { start, end }
      })
    }

    const tick = () => {
      const y = window.scrollY
      const viewportHeight = window.innerHeight
      const indexCount = stageIds.length - 1
      let timeline = 0

      for (let i = 0; i < ranges.length; i += 1) {
        const range = ranges[i]
        const local = clamp01((y - range.start) / (range.end - range.start))
        if (local > 0 || i === 0) {
          timeline = i + local
        }
      }

      setProgress(Math.max(0, Math.min(indexCount, timeline)))
      const first = ranges[0]
      const last = ranges[ranges.length - 1]
      setActive(y >= first.start && y <= last.end + viewportHeight * 0.18)
      frame = 0
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(tick)
    }

    computeRanges()
    tick()

    const onResize = () => {
      computeRanges()
      schedule()
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', schedule, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', onResize)
    }
  }, [stageIds])

  return { progress, active }
}
