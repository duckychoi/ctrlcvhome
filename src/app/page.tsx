'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Link from 'next/link'

const researchAreas = [
  {
    title: 'Robust Control for Nonlinear Systems',
    description: 'Fuzzy Systems, LMI-based Control, Neural Adaptive Control',
    icon: '🎯',
    href: '/research#robust-control',
  },
  {
    title: 'Reinforcement Learning',
    description: 'Imitation Learning, Inverse RL, Offline RL',
    icon: '🧠',
    href: '/research#reinforcement-learning',
  },
  {
    title: 'Deep Learning Vision',
    description: 'Depth Estimation, Image Restoration, Visual SLAM, 3D Pose Estimation',
    icon: '👁️',
    href: '/research#deep-learning-vision',
  },
  {
    title: 'Robot Systems & Hardware',
    description: 'Quadruped Robot, Mobile Manipulator, Unmanned Aerial Vehicle (UAV)',
    icon: '🤖',
    href: '/research#robot-systems',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen softrealism-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 softrealism-vignette" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/10 shadow-lg mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-neutral-700">Now recruiting motivated students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6 tracking-tight">
              Control & Computer Vision
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Laboratory
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed italic">
              Developing intelligent robots that make <strong>better decisions</strong> even in environments with <strong>disturbances and uncertainties</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/research"
                className="px-8 py-4 rounded-full bg-neutral-900 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Explore Research
              </Link>
              <Link
                href="/professor"
                className="px-8 py-4 rounded-full bg-white text-neutral-900 font-semibold border border-black/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Meet Professor
              </Link>
            </div>
          </motion.div>
          
          {/* Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { number: '26+', label: 'International Journals' },
              { number: '10+', label: 'International Conferences' },
              { number: '4', label: 'Research Areas' },
              { number: '2024', label: 'Established at Seoultech' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-black/5 shadow-lg"
                variants={fadeInUp}
              >
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Realizing &quot;Robust Physical AI&quot;
              </h3>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed italic">
                Led by Professor Hyun Duck Choi, our research team focuses on realizing <strong>&quot;Robust Physical AI&quot;</strong> by developing <strong>deep learning-based robot vision</strong> and <strong>reinforcement learning with robust control theory</strong>.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed italic">
                Building on these technologies, we provide optimal solutions for <strong>autonomous mobile robots and drones</strong> that can operate effectively in real-world environments.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                Learn more about our lab
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src="/figure/home/vision_robotics.png" 
                  alt="Vision-based Robotics Research"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-24 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Research</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Research Areas</h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto italic">
              We explore cutting-edge technologies at the intersection of control theory, computer vision, and artificial intelligence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Link href={area.href}>
                  <div className="group p-8 rounded-2xl bg-white border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-neutral-600">{area.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-700 p-12 text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Lab</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Prof. Choi is accepting applications from highly motivated MS/Ph.D./Undergraduate students interested in Reinforcement Learning for Robots and Computer Vision.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdYR2YRD6vvuePhRgoL51DZcaQvoxhhpn9WFnzRbS9f9LwoUQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </a>
                <Link
                  href="/family"
                  className="px-8 py-4 rounded-full bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  Meet Our Team
                </Link>
              </div>
              
              <div className="text-sm text-white/70">
                <p className="mb-2"><strong>Preferred skillsets:</strong> Linear algebra, probability statistics, control theory, and artificial intelligence</p>
                <p><strong>Programming Skills:</strong> Python / PyTorch / ROS2</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Location</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Find Us</h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Visit our lab at Seoul National University of Science & Technology
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-5 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map */}
            <div className="lg:col-span-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.831689381201!2d127.0794444!3d37.6323889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb77b0f0a5d7d%3A0x6f1e0b6e5f0a5d7d!2z7ISc7Jq47Iuc66a97Yq567OE6rO87ZWZ7JuQ!5e0!3m2!1sko!2skr!4v1707753600000!5m2!1sko!2skr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Location Info */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white border border-black/5 shadow-lg h-full">
                <h4 className="text-xl font-bold text-neutral-900 mb-6">Lab Address</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Address</p>
                      <p className="text-neutral-600">Changhak Building #302</p>
                      <p className="text-neutral-600">Seoul National University of Science & Technology</p>
                      <p className="text-neutral-600">232 Gongneung-ro, Nowon-gu, Seoul, 01811, Korea</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Contact</p>
                      <p className="text-neutral-600">Phone: +82-2-970-6458</p>
                      <p className="text-neutral-600">Email: ducky.choi@seoultech.ac.kr</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600 shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Office Hours</p>
                      <p className="text-neutral-600">By appointment</p>
                      <p className="text-sm text-neutral-500 mt-1">Please contact us before visiting</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=37.6323889,127.0794444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Open in Google Maps
                </a>
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
              <p className="mt-2">Changhak Building #302 | ducky.choi@seoultech.ac.kr</p>
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
