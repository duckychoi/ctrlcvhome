'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'

const education = [
  {
    degree: 'Ph.D. in Electrical and Electronic Engineering',
    school: 'Korea University',
    period: '2013 - 2017',
  },
  {
    degree: 'M.S. in Electrical and Electronic Engineering',
    school: 'Korea University',
    period: '2011 - 2013',
  },
  {
    degree: 'B.S. in Electronic Engineering',
    school: 'Korea University',
    period: '2007 - 2011',
  },
]

const experience = [
  {
    position: 'Associate Professor',
    organization: 'Dept. of Smart ICT Convergence Engineering, Seoul National University of Science & Technology',
    period: '2024.09 - Present',
  },
  {
    position: 'Assistant Professor',
    organization: 'School of Electronics and Computer Engineering, Chonnam National University',
    period: '2019.09 - 2024.08',
  },
  {
    position: 'Principal Research Engineer',
    organization: 'AI Development Group, Samsung Electronics Co., Ltd.',
    period: '2018.10 - 2019.08',
  },
  {
    position: 'Principal Research Engineer',
    organization: 'Air Suspension Engineering Team, Hyundai Mobis Co., Ltd.',
    period: '2017.03 - 2018.09',
  },
]

const researchInterests = [
  'Robust Control',
  'Adaptive Control',
  'State Estimation',
  'Fuzzy Systems',
  'Neural Networks',
  'Artificial Intelligence',
  'Machine Learning',
  'Reinforcement Learning',
  'Robot Systems',
  'Vehicle Systems',
  'UAV Systems',
]

const socialLinks = [
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=SIfp2fUAAAAJ&hl=ko&oi=sra',
    icon: '🎓',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ducky87/',
    icon: '💼',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/duckychoi',
    icon: '💻',
  },
]

export default function ProfessorPage() {
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
          >
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Professor</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Hyun Duck Choi</h2>
            <p className="text-xl text-neutral-600">최현덕 교수</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Photo & Contact */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24 space-y-6">
                {/* Professor Photo */}
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/figure/professor/choi.jpg" 
                    alt="Prof. Hyun Duck Choi"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Contact Info */}
                <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg">
                  <h3 className="font-bold text-neutral-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <p className="font-medium text-neutral-900">Office</p>
                        <p className="text-neutral-600">Changhak Building #302</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📞</span>
                      <div>
                        <p className="font-medium text-neutral-900">Phone</p>
                        <p className="text-neutral-600">+82-2-970-6458</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-xl">✉️</span>
                      <div>
                        <p className="font-medium text-neutral-900">Email</p>
                        <a href="mailto:ducky.choi@seoultech.ac.kr" className="text-blue-600 hover:underline">
                          ducky.choi@seoultech.ac.kr
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-lg">
                  <h3 className="font-bold text-neutral-900 mb-4">Links</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="font-medium text-neutral-900">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio & Details */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Bio */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-600 leading-relaxed italic">
                  I am an associate professor at the{' '}
                  <a
                    href="https://icte.seoultech.ac.kr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Department of Smart ICT Convergence Engineering
                  </a>
                  , Seoul National University of Science & Technology (SEOULTECH).
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mt-4 italic">
                  Before joining SEOULTECH, I was an assistant professor at Chonnam National University from Sept. 2019 to Aug. 2024. 
                  I was a principal research engineer at the AI Development Group, Samsung Electronics, from Oct. 2018 to Aug. 2019, 
                  and the Air Suspension Engineering Team, Hyundai Mobis, from March 2017 to Sept. 2018.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed mt-4 italic">
                  I received my B.S. and Ph.D. degrees from Korea University, Seoul, Korea, in 2011 and 2017. 
                  My current research interests include <strong>robust control, adaptive control, state estimation, 
                  fuzzy systems, neural networks, artificial intelligence, machine learning, reinforcement learning, 
                  and their application to robot, vehicle, and UAV systems</strong>.
                </p>
              </div>

              {/* Research Interests */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {researchInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-neutral-900">{edu.degree}</h4>
                          <p className="text-neutral-600">{edu.school}</p>
                        </div>
                        <span className="text-sm text-neutral-500 font-medium">{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Experience</h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h4 className="font-bold text-neutral-900">{exp.position}</h4>
                          <p className="text-neutral-600">{exp.organization}</p>
                        </div>
                        <span className="text-sm text-neutral-500 font-medium">{exp.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10 mt-12">
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
