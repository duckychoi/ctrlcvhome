'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'

const researchAreas = [
  {
    id: 'robust-control',
    title: 'Robust Control for Nonlinear Systems',
    description: 'Our research in robust control focuses on developing advanced control strategies for nonlinear systems with uncertainties and disturbances. We utilize fuzzy systems, LMI-based control design, and neural adaptive control techniques to ensure stability and performance.',
    icon: '🎯',
    topics: [
      'Fuzzy Systems & T-S Fuzzy Models',
      'LMI-based Controller Design',
      'Neural Adaptive Control',
      'State Estimation & Filtering',
      'Dissipative Control',
      'Sampled-Data Control Systems',
    ],
    applications: ['Vehicle Suspension Systems', 'Active Safety Systems', 'Industrial Process Control'],
  },
  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    description: 'We investigate reinforcement learning algorithms for robotic systems, focusing on sample-efficient learning, safe exploration, and real-world deployment. Our work spans from theoretical foundations to practical implementations on physical robots.',
    icon: '🧠',
    topics: [
      'Imitation Learning',
      'Inverse Reinforcement Learning',
      'Offline Reinforcement Learning',
      'Model-Based RL',
      'Safe RL for Physical Systems',
      'Multi-Agent RL',
    ],
    applications: ['Robot Navigation', 'Manipulation Tasks', 'Autonomous Vehicle Control'],
  },
  {
    id: 'deep-learning-vision',
    title: 'Deep Learning Vision',
    description: 'Our computer vision research leverages deep learning to solve challenging perception problems for robotics. We develop algorithms for depth estimation, image restoration, and 3D pose estimation that are robust to real-world conditions.',
    icon: '👁️',
    topics: [
      'Depth Estimation',
      'Image Restoration & Enhancement',
      'Visual SLAM',
      '3D Pose Estimation',
      'Domain Adaptation',
      'Shadow Removal & Rain Removal',
    ],
    applications: ['Autonomous Navigation', 'Drone Perception', 'AR/VR Systems'],
  },
  {
    id: 'robot-systems',
    title: 'Applications in Robot Systems & Hardware',
    description: 'We apply our theoretical research to real-world robotic systems. Our lab focuses on developing autonomous capabilities for various robotic platforms including legged robots, mobile manipulators, and unmanned aerial vehicles.',
    icon: '🤖',
    topics: [
      'Quadruped Robot Control',
      'Mobile Manipulator Systems',
      'Unmanned Aerial Vehicles (UAV)',
      'Path Planning & Tracking',
      'Robot Vision Integration',
      'Hardware-in-the-Loop Simulation',
    ],
    applications: ['Search & Rescue', 'Industrial Inspection', 'Service Robotics'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function ResearchPage() {
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
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Research</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Research Areas</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto italic">
              We explore cutting-edge technologies at the intersection of control theory, computer vision, 
              and artificial intelligence to enable robust autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                id={area.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 text-4xl mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Key Topics</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-3">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.applications.map((app, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-medium border border-purple-100"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 flex items-center justify-center shadow-lg border border-black/5">
                    <div className="text-center">
                      <div className="text-9xl mb-4">{area.icon}</div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-medium text-neutral-700">Active Research</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-24 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Research Philosophy
            </h3>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Our research philosophy centers on bridging the gap between theoretical advances and practical implementation. 
              We believe that robust AI systems must be validated on real hardware and in real-world conditions. 
              This &quot;Robust Physical AI&quot; approach ensures that our research contributions are both scientifically rigorous 
              and practically relevant.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="text-3xl mb-3">📐</div>
                <h4 className="font-bold text-neutral-900 mb-2">Theoretical Rigor</h4>
                <p className="text-sm text-neutral-600">Mathematically sound foundations for all our methods</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="text-3xl mb-3">🔧</div>
                <h4 className="font-bold text-neutral-900 mb-2">Practical Validation</h4>
                <p className="text-sm text-neutral-600">Real hardware implementation and testing</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-neutral-900 mb-2">Open Collaboration</h4>
                <p className="text-sm text-neutral-600">Active engagement with academic and industry partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Explore Our Publications</h3>
              <p className="text-lg text-white/90 mb-6">
                Discover our latest research findings and contributions to the field.
              </p>
              <a
                href="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-600 font-semibold hover:shadow-lg transition-shadow"
              >
                View Publications
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl" />
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
