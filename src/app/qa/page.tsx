'use client'

import dynamic from 'next/dynamic'
import Header from '../components/Header'
import { QAOverlay } from '@/features/qa-3d/ui'
import pageStyles from '@/features/qa-3d/ui/qa-page.module.css'

const ConnectorsScene = dynamic(() => import('@/features/qa-3d/scene/ConnectorsScene'), {
  ssr: false
})

export default function QAPage() {
  return (
    <div className={pageStyles.page}>
      <Header />

      <div className={pageStyles.canvasWrap}>
        <ConnectorsScene className={pageStyles.canvas} />
        <div className={pageStyles.canvasVignette} />
      </div>

      <QAOverlay />
    </div>
  )
}
