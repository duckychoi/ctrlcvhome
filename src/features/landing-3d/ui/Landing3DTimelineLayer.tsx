'use client'

import dynamic from 'next/dynamic'
import { useLandingStageProgress } from '../hooks/useLandingStageProgress'
import styles from './landing-3d.module.css'

const LandingTimelineScene = dynamic(
  () => import('../scene/LandingTimelineScene').then((module) => module.LandingTimelineScene),
  { ssr: false }
)

export function Landing3DTimelineLayer() {
  const { progress, active } = useLandingStageProgress()

  return (
    <div className={`${styles.root} ${active ? styles.active : ''}`} aria-hidden>
      <div className={styles.canvasSlot}>
        <LandingTimelineScene progress={progress} />
      </div>
    </div>
  )
}
