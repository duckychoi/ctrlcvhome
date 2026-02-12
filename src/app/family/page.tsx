'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'

interface Member {
  name: string
  nameKr: string
  role: string
  research: string
  image: string
}

const currentMembers: { phd: Member[]; master: Member[]; undergraduate: Member[] } = {
  phd: [],
  master: [
    {
      name: 'Yeon Seung Bin',
      nameKr: '연승빈',
      role: 'Master Student',
      research: 'Vision-based SLAM, RL based Control for Legged robot',
      image: '/figure/family/연승빈.jpg',
    },
  ],
  undergraduate: [
    {
      name: 'Gwon Se Min',
      nameKr: '권세민',
      role: 'Undergraduate Student',
      research: 'Vision-based SLAM, RL based Control for Legged robot',
      image: '/figure/family/권세민.jpg',
    },
    {
      name: 'Lee Seok Jun',
      nameKr: '이석준',
      role: 'Undergraduate Student',
      research: 'Vision-based SLAM, RL based Control for Legged robot',
      image: '/figure/family/이석준.jpg',
    },
  ],
}

const alumni = [
  {
    name: 'Cheolhun Park',
    nameKr: '박철훈',
    period: 'Master Course (2023.03~2025.02)',
    currentPosition: 'Ph.D Course of CML Lab. (adviser: MyoTaeg Lim) in Korea univ.',
  },
  {
    name: 'Chaneui Hong',
    nameKr: '홍찬의',
    period: 'Master Course (2021.03~2023.02)',
    currentPosition: 'Researcher, KITECH (한국생산기술연구소)',
  },
  {
    name: 'Yechan Lee',
    nameKr: '이예찬',
    period: 'Undergraduate (2023.03~2025.02)',
    currentPosition: 'Master Course of ACSS Lab. (adviser: SooJean Han) in KAIST',
  },
  {
    name: 'Junho Yang',
    nameKr: '양준호',
    period: 'Undergraduate (2023.03~2025.02)',
    currentPosition: 'Master Course of ARI Lab. (adviser: SeongWoo Kim) in SNU',
  },
  {
    name: 'Yerin Kim',
    nameKr: '김예린',
    period: 'Undergraduate (2023.03~2024.02)',
    currentPosition: 'Hanwha Aerospace (한화에어로스페이스) (Manufacturing eng.)',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function FamilyPage() {
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
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Family</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto italic">
              Meet the talented researchers and students who make our lab a vibrant community of innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Members */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professor */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Professor</h3>
            <div className="max-w-md mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-black/5 shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/figure/family/더키2D.png" 
                    alt="Prof. Hyun Duck Choi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Hyun Duck Choi</h4>
                <p className="text-neutral-600 mb-2">최현덕</p>
                <p className="text-sm text-blue-600 font-medium">Associate Professor</p>
                <p className="text-sm text-neutral-500 mt-2">Lab Director</p>
              </div>
            </div>
          </motion.div>

          {/* Ph.D Students */}
          {currentMembers.phd.length > 0 && (
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Ph.D Students</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentMembers.phd.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg text-center"
                  >
                    <div className="text-5xl mb-4">{member.image}</div>
                    <h4 className="text-lg font-bold text-neutral-900">{member.name}</h4>
                    <p className="text-neutral-600 text-sm mb-2">{member.nameKr}</p>
                    <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-neutral-500">{member.research}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Master Students */}
          {currentMembers.master.length > 0 && (
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Master Students</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentMembers.master.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900">{member.name}</h4>
                    <p className="text-neutral-600 text-sm mb-2">{member.nameKr}</p>
                    <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-neutral-500">{member.research}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Undergraduate Students */}
          {currentMembers.undergraduate.length > 0 && (
            <motion.div
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Undergraduate Students</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentMembers.undergraduate.map((member, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg text-center"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-neutral-900">{member.name}</h4>
                    <p className="text-neutral-600 text-sm mb-2">{member.nameKr}</p>
                    <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-neutral-500">{member.research}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Alumni */}
      <section className="py-12 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Alumni</h3>
            <div className="space-y-4">
              {alumni.map((alum, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white border border-black/5 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-neutral-900">
                        {alum.name} <span className="text-neutral-500 font-normal">/ {alum.nameKr}</span>
                      </h4>
                      <p className="text-sm text-neutral-500 mt-1">{alum.period}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{alum.currentPosition}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Join Our Team</h3>
            <p className="text-neutral-600 mb-6">
              We&apos;re always looking for motivated students to join our research family.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYR2YRD6vvuePhRgoL51DZcaQvoxhhpn9WFnzRbS9f9LwoUQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
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
