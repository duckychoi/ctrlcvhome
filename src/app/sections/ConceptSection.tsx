'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealAnimation from '../components/RevealAnimation'
import GlassCard from '../components/GlassCard'
import SectionLabel from '../components/SectionLabel'
import GradientButton from '../components/GradientButton'

export default function ConceptSection() {
  const [activeExample, setActiveExample] = useState(0)

  const examples = [
    {
      input: "사용자가 로그인하면 환영 메시지를 보여주고, 최근 활동을 표시해줘",
      output: `// AI가 생성한 코드
import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // 사용자 정보 가져오기
    fetchUserData().then(userData => {
      setUser(userData);
      // 최근 활동 가져오기
      fetchRecentActivity(userData.id).then(setRecentActivity);
    });
  }, []);

  if (!user) return <LoadingSpinner />;

  return (
    <div className="dashboard">
      <h1>환영합니다, {user.name}님!</h1>
      <RecentActivityList activities={recentActivity} />
    </div>
  );
}`,
      delay: 0
    },
    {
      input: "상품 목록을 보여주고, 필터링과 검색 기능을 추가해줘",
      output: `// AI가 생성한 코드
import React, { useState, useMemo } from 'react';

function ProductList({ products }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' || 
        product.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [products, searchTerm, filter]);

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <FilterSelect onFilter={setFilter} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}`,
      delay: 0.2
    },
    {
      input: "데이터를 차트로 시각화하고, 실시간으로 업데이트해줘",
      output: `// AI가 생성한 코드
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

function RealTimeChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const websocket = new WebSocket('wss://api.example.com/realtime');
    
    websocket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(prevData => [...prevData.slice(-50), newData]);
    };

    return () => websocket.close();
  }, []);

  return (
    <div className="chart-container">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8b5cf6" />
      </LineChart>
    </div>
  );
}`,
      delay: 0.4
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealAnimation className="text-center mb-16">
          <SectionLabel text="Main Concept" className="mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            당신의 문장이,<br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              곧 실행 가능한 코드가 됩니다
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            자연어로 설명하면 AI가 코드로 변환합니다.
          </p>
        </RevealAnimation>

        {/* Interactive Examples */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Input Section */}
          <RevealAnimation delay={0.2} className="h-full">
            <GlassCard className="h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">📝</span>
                </div>
                <h3 className="text-xl font-bold text-white">당신의 설명</h3>
              </div>
              
              <div className="space-y-4">
                {examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      activeExample === index
                        ? 'border-violet-500 bg-violet-500/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                    onClick={() => setActiveExample(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <p className="text-gray-300">{example.input}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </RevealAnimation>

          {/* Output Section */}
          <RevealAnimation delay={0.4} className="h-full">
            <GlassCard className="h-full">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white">AI가 생성한 코드</h3>
              </div>
              
              <motion.div
                key={activeExample}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-black/50 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                    <code>{examples[activeExample].output}</code>
                  </pre>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-green-400 text-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>코드 생성 완료 (0.3초)</span>
                </div>
              </motion.div>
            </GlassCard>
          </RevealAnimation>
        </div>

        {/* Features */}
        <RevealAnimation delay={0.6}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "🚀",
                title: "실시간 변환",
                description: "말하는 즉시 코드로 변환되는 속도"
              },
              {
                icon: "🎯",
                title: "정확한 이해",
                description: "문맥과 의도를 파악하는 최고의 AI"
              },
              {
                icon: "🔧",
                title: "즉시 실행",
                description: "생성된 코드는 바로 사용 가능"
              }
            ].map((feature, index) => (
              <GlassCard key={index} className="text-center p-6">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </RevealAnimation>

        {/* CTA */}
        <RevealAnimation delay={0.8} className="text-center">
          <GradientButton variant="primary" size="lg" className="text-lg px-8 py-4">
            지금 바로 경험해보기
          </GradientButton>
          <p className="mt-4 text-gray-400 text-sm">
            복잡한 설치 없이, 바로 시작할 수 있습니다
          </p>
        </RevealAnimation>
      </div>
    </section>
  )
}