'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './qa-overlay.module.css'

type Question = {
  id: number
  title: string
  author: string
  category: string
  replies: number
  views: number
  createdAt: string
  solved: boolean
  tags: string[]
}

type SortKey = 'latest' | 'popular' | 'replies'

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'React state management: is it safe to mix Context with Zustand?',
    author: 'Kim Dev',
    category: 'React',
    replies: 12,
    views: 234,
    createdAt: '2h ago',
    solved: true,
    tags: ['React', 'State', 'Architecture']
  },
  {
    id: 2,
    title: 'Reliable parsing pattern for TypeScript union API responses',
    author: 'Lee Type',
    category: 'TypeScript',
    replies: 8,
    views: 156,
    createdAt: '4h ago',
    solved: false,
    tags: ['TypeScript', 'Validation']
  },
  {
    id: 3,
    title: 'Performance tips for Next.js App Router server actions',
    author: 'Park Front',
    category: 'Next.js',
    replies: 23,
    views: 567,
    createdAt: '1d ago',
    solved: true,
    tags: ['Next.js', 'App Router', 'Server Action']
  },
  {
    id: 4,
    title: 'First metrics to inspect when reducing Node.js API latency',
    author: 'Jung Backend',
    category: 'Node.js',
    replies: 31,
    views: 892,
    createdAt: '3d ago',
    solved: true,
    tags: ['Node.js', 'Performance']
  }
]

const CATEGORIES = ['All', 'React', 'TypeScript', 'Next.js', 'Node.js', 'CSS', 'JavaScript']

export default function QAOverlay() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState<SortKey>('latest')
  const [heroMode, setHeroMode] = useState(true)

  useEffect(() => {
    const threshold = 180
    const updateHeroMode = () => {
      setHeroMode(window.scrollY <= threshold)
    }

    updateHeroMode()
    window.addEventListener('scroll', updateHeroMode, { passive: true })
    return () => window.removeEventListener('scroll', updateHeroMode)
  }, [])

  const filteredQuestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    const bySearch = QUESTIONS.filter((question) => {
      if (!query) return true
      return question.title.toLowerCase().includes(query) || question.tags.some((tag) => tag.toLowerCase().includes(query))
    })

    const byCategory =
      selectedCategory === 'All' ? bySearch : bySearch.filter((question) => question.category === selectedCategory)

    return [...byCategory].sort((a, b) => {
      if (sortBy === 'popular') return b.views - a.views
      if (sortBy === 'replies') return b.replies - a.replies
      return b.id - a.id
    })
  }, [searchQuery, selectedCategory, sortBy])

  return (
    <main className={`${styles.overlayRoot} ${heroMode ? styles.heroMode : ''}`}>
      <div className={styles.contentFrame}>
        <motion.section
          className={styles.heroBlock}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.heroKicker}>VibeLabs Q&A</p>
          <h1 className={styles.heroTitle}>Ask, answer, and iterate with clarity</h1>
          <p className={styles.heroSubtitle}>
            The background follows cursor motion and click accents. The content layer stays crisp for scanning technical threads.
          </p>
        </motion.section>

        <motion.section
          className={styles.glassPanel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className={styles.toolbar}>
            <input
              type="text"
              placeholder="Search question..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className={styles.input}
            />
            <button className={styles.primaryButton}>Ask</button>
          </div>

          <div className={styles.filterRow}>
            <div className={styles.chipList}>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`${styles.chip} ${selectedCategory === category ? styles.chipActive : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortKey)} className={styles.select}>
              <option value="latest">Latest</option>
              <option value="popular">Popular</option>
              <option value="replies">Replies</option>
            </select>
          </div>
        </motion.section>

        <motion.section
          className={styles.list}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          {filteredQuestions.map((question) => (
            <article key={question.id} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{question.title}</h3>
                {question.solved ? <span className={styles.badge}>Solved</span> : null}
              </div>

              <div className={styles.cardMeta}>
                <span>{question.author}</span>
                <span>{question.category}</span>
                <span>{question.replies} replies</span>
                <span>{question.views} views</span>
                <span>{question.createdAt}</span>
              </div>

              <div className={styles.cardTags}>
                {question.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </motion.section>
      </div>
    </main>
  )
}
