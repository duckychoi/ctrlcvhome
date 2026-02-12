'use client'

import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import Icon from '../components/Icon'

export default function FooterSection() {
  const socialLinks = [
    { name: "브런치", icon: "book-open", href: "#" },
    { name: "유튜브", icon: "play-circle", href: "#" },
    { name: "페이스북", icon: "facebook", href: "#" },
    { name: "인스타그램", icon: "instagram", href: "#" },
    { name: "이메일", icon: "mail", href: "#" }
  ]

  const footerLinks = [
    { name: "공지사항", href: "#" },
    { name: "About", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Contact", href: "#" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-black to-slate-950 border-t border-gray-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <RevealAnimation direction="fade">
                <div className="mb-6">
                  {/* Logo */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">V</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">VibeLabs</h3>
                    </div>
                  </div>
                  
                  {/* Tagline */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    기술의 언어가 아닌, 당신의 언어로 세상을 코딩합니다<br />
                    30년차 개발자의 경험이 AI 기술과 만나 당신의 아이디어를 현실로 만듭니다
                  </p>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold mb-4">Connect</h4>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className="group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-gray-700/30 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-gray-600/30 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon name={social.icon} className="w-4 h-4" />
                        <span className="text-sm">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>

            {/* Quick Links */}
            <div>
              <RevealAnimation direction="fade" delay={0.1}>
                <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                        whileHover={{ x: 4 }}
                      >
                        <Icon name="arrow-right" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
            </div>

            {/* Contact Info */}
            <div>
              <RevealAnimation direction="fade" delay={0.2}>
                <h4 className="text-white font-semibold mb-6">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Icon name="mail" className="w-4 h-4" />
                    <span className="text-sm">hello@vibelabs.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Icon name="phone" className="w-4 h-4" />
                    <span className="text-sm">02-1234-5678</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Icon name="map-pin" className="w-4 h-4" />
                    <span className="text-sm">서울시 강남구 테헤란로</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Icon name="clock" className="w-4 h-4" />
                    <span className="text-sm">월-금 9:00-18:00</span>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <RevealAnimation direction="fade" delay={0.3}>
                <div className="text-gray-400 text-sm text-center md:text-left">
                  © 2024 VibeLabs. All rights reserved.
                </div>
              </RevealAnimation>

              <RevealAnimation direction="fade" delay={0.4}>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span>온라인</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="users" className="w-4 h-4" />
                    <span>1,234+ Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="star" className="w-4 h-4" />
                    <span>4.9 Rating</span>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}