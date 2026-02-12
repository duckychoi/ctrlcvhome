'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'

const notices = [
  {
    id: 1,
    title: 'Welcome to Ctrl+CV Lab Website',
    date: '2025-02-12',
    content: 'We are pleased to announce the launch of our new lab website. Here you can find information about our research, publications, team members, and more.',
    important: true,
  },
]

export default function NoticePage() {
  return (
    <div className="min-h-screen softrealism-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Notice</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Announcements</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto italic">
              Latest news and updates from Ctrl+CV Lab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {notices.length > 0 ? (
            <div className="space-y-6">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border shadow-lg ${
                    notice.important
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200'
                      : 'bg-white border-black/5'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        {notice.important && (
                          <span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold">
                            IMPORTANT
                          </span>
                        )}
                        <span className="text-sm text-neutral-500">{notice.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">{notice.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{notice.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-12 rounded-2xl bg-white border border-black/5 shadow-lg text-center"
            >
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">No Notices</h3>
              <p className="text-neutral-600">There are no announcements at this time.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Stay Updated</h3>
            <p className="text-neutral-600 mb-6">
              Follow our lab for the latest research updates, publications, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:ducky.choi@seoultech.ac.kr"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg">
                CV
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Ctrl+CV Lab</h3>
                <p className="text-sm text-neutral-500">Control & Computer Vision Laboratory</p>
              </div>
            </div>
            
            <div className="text-center md:text-right text-sm text-neutral-500">
              <p>Department of Smart ICT Convergence Engineering</p>
              <p>Seoul National University of Science & Technology</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-black/10 text-center text-sm text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Ctrl+CV Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
