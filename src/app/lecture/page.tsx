'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'

const undergraduateCourses = [
  {
    semester: '2026-1',
    code: '',
    name: '제어공학 (Control Engineering)',
    schedule: '월/화',
    note: 'eclass 참고',
  },
  {
    semester: '2026-1',
    code: '',
    name: '마이크로프로세서 (Microprocessor)',
    schedule: '월/화',
    note: 'eclass 참고',
  },
  {
    semester: '2026-1',
    code: '',
    name: '캡스톤 디자인 (Capstone Design)',
    schedule: '금요일',
    note: '',
  },
]

interface Course {
  semester: string
  code: string
  name: string
  schedule: string
  note: string
}

const graduateCourses: Course[] = [
  // Add courses here when available
]

export default function LecturePage() {
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
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Lecture</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Courses</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto italic">
              Courses taught by Prof. Hyun Duck Choi at Seoul National University of Science & Technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Undergraduate Courses */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Undergraduate Courses</h3>
            <div className="space-y-4">
              {undergraduateCourses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                          {course.semester}
                        </span>
                        {course.schedule && (
                          <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm">
                            {course.schedule}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-neutral-900">{course.name}</h4>
                    </div>
                    {course.note && (
                      <div className="text-sm text-neutral-500">
                        {course.note}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Graduate Courses */}
      <section className="py-12 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Graduate Courses</h3>
            {graduateCourses.length > 0 ? (
              <div className="space-y-4">
                {graduateCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                            {course.semester}
                          </span>
                          {course.schedule && (
                            <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-sm">
                              {course.schedule}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-neutral-900">{course.name}</h4>
                      </div>
                      {course.note && (
                        <div className="text-sm text-neutral-500">
                          {course.note}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-12 rounded-2xl bg-white border border-black/5 shadow-lg text-center">
                <div className="text-4xl mb-4">📚</div>
                <p className="text-neutral-600">Graduate course information will be updated soon.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg">
              <h4 className="text-lg font-bold text-neutral-900 mb-4">e-Class Portal</h4>
              <p className="text-neutral-600 mb-4">
                Access course materials, assignments, and announcements through the university e-Class system.
              </p>
              <a
                href="https://eclass.seoultech.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Go to e-Class
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg">
              <h4 className="text-lg font-bold text-neutral-900 mb-4">Office Hours</h4>
              <p className="text-neutral-600 mb-4">
                Students are welcome to visit during office hours for questions and discussions.
              </p>
              <div className="text-sm text-neutral-700">
                <p><strong>Location:</strong> Changhak Building #302</p>
                <p><strong>Contact:</strong> ducky.choi@seoultech.ac.kr</p>
              </div>
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
