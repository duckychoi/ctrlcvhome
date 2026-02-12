'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'

const internationalJournals = [
  {
    number: 26,
    authors: 'C. H. Park and H. D. Choi*',
    title: 'Towards Maximizing Feature Efficiency: All-in-One Image Restoration via Radial Basis Attention',
    venue: 'Pattern Recognition, Elsevier',
    note: '(Accepted)',
    year: 2025,
  },
  {
    number: 25,
    authors: 'H. D. Choi, P. Shi, and C. K. Ahn*',
    title: 'Adaptive Neuro-Fuzzy Sliding Mode Tracking for Quadrotor UAVs',
    venue: 'IEEE Transactions on Automation Science and Engineering',
    note: 'vol. 22, pp. 16322-16333, 2025',
    doi: '10.1109/TASE.2025.3576292',
    year: 2025,
  },
  {
    number: 24,
    authors: 'C. H. Park, W. J. Ahn, and H. D. Choi*',
    title: 'Toward Smooth Depth Driven by Selective Attention and Selective Aggregation',
    venue: 'IEEE Transactions on Multimedia',
    note: '(Accepted)',
    year: 2025,
  },
  {
    number: 23,
    authors: 'C. H. Park, H. D. Choi*, and M. T. Lim*',
    title: 'Harnessing Spatial-Frequency Information for Enhanced Image Restoration',
    venue: 'Applied Sciences, MDPI',
    note: 'vol. 15, no. 4, Feb. 2025 (Q1)',
    year: 2025,
  },
  {
    number: 22,
    authors: 'C. H. Park and H. D. Choi*',
    title: 'UP-Cycle-SENet: Unpaired phase-aware speech enhancement using deep complex cycle adversarial networks',
    venue: 'Neurocomputing, Elsevier',
    note: 'vol. 624, Apr. 2025 (Q1)',
    year: 2025,
  },
  {
    number: 21,
    authors: 'W. J. Ahn, S. Y. Park, D. S. Pae, H. D. Choi*, and M. T. Lim*',
    title: 'Bridging Viewpoints in Cross-view Geo-Localization with Siamese Vision Transformer',
    venue: 'IEEE Transactions on Geoscience and Remote Sensing',
    note: 'vol. 62, pp. 1-12, Jul. 2024 (Q1)',
    year: 2024,
  },
  {
    number: 20,
    authors: 'W. J. Ahn, G. Y. Yang, H. D. Choi*, and M. T. Lim*',
    title: 'Style Blind Domain Generalized Semantic Segmentation via Covariance Alignment and Semantic Consistence Contrastive Learning',
    venue: 'Conference on Computer Vision and Pattern Recognition (CVPR)',
    note: '2024',
    year: 2024,
    highlight: true,
  },
  {
    number: 19,
    authors: 'Y. J. Lee, D. S. Pae, H. D. Choi*, and M. T. Lim*',
    title: 'Extended Dissipative Output-Feedback Controller for Autonomous Vehicle Path-Following with Steering Delays',
    venue: 'IEEE Transactions on Intelligent Transportation Systems',
    note: 'vol. 25, no. 9, pp. 11143-11155, Mar. 2024 (Q1)',
    year: 2024,
  },
  {
    number: 18,
    authors: 'K. H. Kim, K. H. Oh, H. S. Ahn, H. D. Choi*',
    title: 'Time-Frequency Domain Deep Convolutional Neural Network for Li-ion Battery SoC Estimation',
    venue: 'IEEE Transactions on Power Electronics',
    note: 'vol. 39, no. 1, pp. 125-134, Jan. 2024 (Q1)',
    year: 2024,
  },
  {
    number: 17,
    authors: 'W. J. Ahn, T. K. Kang, H. D. Choi*, and M. T. Lim*',
    title: 'Domain Adaptation for Complex Shadow Removal with Shadow Transformer Network',
    venue: 'Neurocomputing, Elsevier',
    note: 'vol. 552, Oct. 2023 (Q1)',
    year: 2023,
  },
  {
    number: 16,
    authors: 'Y. J. Lee, D. S. Pae, H. D. Choi*, and Myo Taeg Lim*',
    title: 'Sampled-Data L2-L∞ Filter-Based Fuzzy Control for Active Suspensions',
    venue: 'IEEE Access',
    note: 'vol. 11, pp. 21068-21080, 2023 (Q2)',
    year: 2023,
  },
  {
    number: 15,
    authors: 'J. H. Chung, S. K. Park, D. S. Pae, H. D. Choi, and Myo Taeg Lim*',
    title: 'Feature-Selection-based Attentional-Deconvolution Detector for German Traffic Sign Detection',
    venue: 'Electronics',
    note: 'vol. 12, no. 3, 725, pp. 1-23, Feb. 2023',
    year: 2023,
  },
  {
    number: 14,
    authors: 'W. J. Ahn, T. K. Kang, H. D. Choi*, and M. T. Lim*',
    title: 'Remove and recover: Deep end-to-end two-stage attention network for single-shot heavy rain removal',
    venue: 'Neurocomputing, Elsevier',
    note: 'vol. 481, pp. 216-227, 2022 (Q1)',
    year: 2022,
  },
  {
    number: 13,
    authors: 'S. H. You, S. K. Kim*, and H. D. Choi*',
    title: 'Output-Feedback Position Tracking Servo System with Feedback Gain Learning Mechanism via Order-Reduction Speed-Error-Stabilization Approach',
    venue: 'MDPI Actuators',
    note: 'vol. 10, no. 12, 2021 (Q2)',
    year: 2021,
  },
  {
    number: 12,
    authors: 'H. D. Choi and S. K. Kim*',
    title: 'Delay-Dependent State-Feedback Dissipative Control for Suspension Systems With Constraints Using a Generalized Free-Weighting-Matrix Method',
    venue: 'IEEE Access',
    note: 'vol. 9, pp. 145573-145582, 2021 (Q2)',
    year: 2021,
  },
  {
    number: 11,
    authors: 'H. D. Choi and S. H. You*',
    title: 'Fuzzy Finite Memory State Estimation for Electro-hydraulic Active Suspension Systems',
    venue: 'IEEE Access',
    note: 'vol. 9, pp. 99364-99373, 2021 (Q2)',
    year: 2021,
  },
  {
    number: 10,
    authors: 'G. Kim, J. S. Lee, J. H. Park, H. D. Choi*, and M. J. Lee*',
    title: 'A Zero Crossing Hybrid Bidirectional DC Circuit Breaker for HVDC Transmission Systems',
    venue: 'MDPI Energies',
    note: 'vol. 5, no. 14, 2021 (Q1)',
    year: 2021,
  },
  {
    number: 9,
    authors: 'J. S. Lee, J. H. Park, G. Kim, H. D. Choi*, and M. J. Lee*',
    title: 'Partial Isolation Type Buried Channel Array Transistor (Pi-BCAT) for a Sub-20 nm DRAM Cell Transistor',
    venue: 'MDPI Electronics',
    note: 'vol. 9, no. 11, 2021 (Q2)',
    year: 2021,
  },
  {
    number: 8,
    authors: 'H. D. Choi, S. W. Lee, D. S. Pae, S. H. You, and M. T. Lim*',
    title: 'Smart Air Condition Load Forecasting based on Thermal Dynamic Model and Finite Memory Estimation for Peak-energy Distribution',
    venue: 'Journal of electrical engineering & technology',
    note: 'vol. 13, no. 2, pp. 559-567, 2018',
    year: 2018,
  },
  {
    number: 7,
    authors: 'H. D. Choi, C. J. Lee, and M. T. Lim*',
    title: 'Fuzzy Preview Control for Half-vehicle Electro-hydraulic Suspension System',
    venue: 'International Journal of Control, Automation, and Systems',
    note: 'vol. 16, no. 5, pp. 2489-2500, 2018 (Q2)',
    year: 2018,
  },
  {
    number: 6,
    authors: 'H. D. Choi, C. K. Ahn*, P. Shi, L. Wu, and M. T. Lim',
    title: 'Dynamic Output-Feedback Dissipative Control for T-S Fuzzy Systems With Time-Varying Input Delay and Output Constraints',
    venue: 'IEEE Trans. on Fuzzy Systems',
    note: 'vol. 25, no. 3, pp. 511-526, 2017. (ESI Top paper; ESI Highly cited paper (Top 1% by citation)) (Q1)',
    year: 2017,
    highlight: true,
  },
  {
    number: 5,
    authors: 'H. D. Choi, C. K. Ahn*, H. R. Karimi, and M. T. Lim',
    title: 'Filtering of Discrete-Time Switched Neural Networks Ensuring Exponential Dissipative and L2-L∞ Performances',
    venue: 'IEEE Transactions on Cybernetics',
    note: 'vol. 47, no. 10, pp. 3195-3207, 2017 (Q1)',
    year: 2017,
  },
  {
    number: 4,
    authors: 'H. D. Choi, C. K. Ahn*, M. T. Lim*, and M. K. Song',
    title: 'Dynamic Output-Feedback H∞ Control for Active Half-vehicle Suspension Systems with Time-varying Input Delay',
    venue: 'International Journal of Control, Automation, and Systems',
    note: 'vol. 14, no. 1, pp. 59-68, 2016. (2019 IJCAS Best Paper Award) (Q2)',
    year: 2016,
    highlight: true,
  },
  {
    number: 3,
    authors: 'H. D. Choi, C. K. Ahn*, P. Shi, M. T. Lim, and M. K. Song',
    title: 'L2-L∞ Filtering for Takagi-Sugeno fuzzy neural networks based on Wirtinger-type inequalities',
    venue: 'Neurocomputing, Elsevier',
    note: 'vol. 153, pp. 117-125, 2015 (Q1)',
    year: 2015,
  },
  {
    number: 2,
    authors: 'H. D. Choi, J. M. Pak, and M. T. Lim*, and Moon Kyou Song',
    title: 'A Gaussian Distributed Resampling Algorithm for Mitigation of Sample Impoverishment in Particle Filters',
    venue: 'International Journal of Control, Automation, and Systems',
    note: 'vol. 13, no. 4, pp. 1032-1036, 2015 (Q2)',
    year: 2015,
  },
  {
    number: 1,
    authors: 'H. D. Choi, C. K. Ahn*, and M. T. Lim*',
    title: 'Time-domain filtering for estimation of linear systems with colored noises using recent finite measurements',
    venue: 'Measurement, Elsevier',
    note: 'vol. 46, no. 8, pp. 2792-2797, 2013 (Q1)',
    year: 2013,
  },
]

const domesticJournals = [
  { number: 6, title: '강인한 시각관성계를 위한 프롬프트 기반 통합 영상복원 신경망', authors: '박철훈, 최현덕', venue: '제어.로봇.시스템학회 논문지', year: 2024 },
  { number: 5, title: '자율주행 무인항공기의 단안 깊이 추정을 위한 향상된 병렬 sparse-MLP', authors: '박철훈, 최현덕', venue: '제어.로봇.시스템학회 논문지', note: 'vol. 29, no. 11, pp. 928-935, 2023', year: 2023 },
  { number: 4, title: '유한기억 필터 기반 DPLL 최적설계', authors: '유성현, 배동성, 최현덕', venue: 'Journal of the KIIT', note: 'vol. 21, no. 3, pp. 75-81, 2023', year: 2023 },
  { number: 3, title: '그룹 집중 기술로 개선된 Trans-Unet기반 단일 영상 연무제거 신경망', authors: '홍찬의, 최현덕', venue: '전자공학회논문지', note: 'vol. 59, no. 6, 2022', year: 2022 },
  { number: 2, title: '최적의 측정값 구간의 길이를 갖는 최소 공분산 유한 임펄스 응답 필터 기반 디지털 위상 고정 루프 설계', authors: '유성현, 배동성, 최현덕', venue: '한국전자통신학회 논문지', note: 'vol. 16, no. 4, pp. 591-598, 2021', year: 2021 },
  { number: 1, title: '전자 유압 엑추에이터를 포함하는 비선형 능동 서스펜션의 상태추정을 위한 가우시안 분포 리샘플링 기반 입자 필터 설계', authors: '최현덕, 유성현', venue: '제어.로봇.시스템학회 논문지', note: 'vol. 27, no. 2, pp. 130-137, 2021', year: 2021 },
]

const internationalConferences = [
  { number: 10, title: 'CNN-based Apprenticeship Learning for Inverse Reinforcement Learning', authors: 'Y. R. Kim and H. D. Choi', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2024 },
  { number: 9, title: 'Cost-Based MPPI: Enhancing the Efficiency of MPPI Controllers in 3D Space for UAV Control', authors: 'J. H. Yang and H. D. Choi', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2024 },
  { number: 8, title: 'Improving Vision Transformer with Multi-Task Training', authors: 'W. J. Ahn, G. Y. Yang, H. D. Choi, M. T. Lim, and T. K. Kang', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2022 },
  { number: 7, title: 'Monocular Depth Estimation with SimpleGate and ASPP', authors: 'J. W. Jeong, H. D. Choi, and H. S. Ahn', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2022 },
  { number: 6, title: 'Robust Sampled-data Output Feedback T-S Fuzzy Control for Vehicle Active Suspension Systems via Input Delay Approach', authors: 'Y. J. Lee, S. W. Kang, D. S. Pae, H. D. Choi, and M. T. Lim', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2022 },
  { number: 5, title: 'Shadow Removal using GTA Road Dataset', authors: 'G. Kang, W. J Ahn, H. D. Choi, and M. T. Lim', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2021 },
  { number: 4, title: 'Dissipative filter design for Takagi-Sugeno fuzzy neural networks', authors: 'K. C. Lee, H. D. Choi, D. K. Kim, C. K. Ahn, and M. T. Lim', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2015 },
  { number: 3, title: 'Discrete-time Takagi-Sugeno fuzzy finite impulse response filter', authors: 'J. H. Chung, C. J. Lee, H. D. Choi, C. K. Ahn, and M. T. Lim', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2014 },
  { number: 2, title: 'Multi-target tracking algorithm based on FIR filters', authors: 'C. J. Lee, K. M. Min, H. D. Choi, C. K. Ahn, and M. T. Lim', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2014 },
  { number: 1, title: 'Gaussian distribution resampling algorithm of particle filter', authors: 'H. D. Choi, C. K. Ahn, and M. T. Lim', venue: 'International Conference on Control, Automation and Systems (ICCAS)', year: 2013 },
]

const domesticConferences = [
  { number: 6, title: '실내 자율주행 무인항공기를 위한 효율적인 이미지 깊이 추정 신경망', authors: '박철훈, 최현덕', venue: 'ICROS', year: 2023 },
  { number: 5, title: '주의집중기술을 활용한 무인항공기 경사 이미지 깊이 추정 신경망', authors: '박철훈, 최현덕', venue: 'ICROS', year: 2022 },
  { number: 4, title: '영상분할에서의 도메인 적응 기술을 위한 스타일 변환 기반의 컨텐츠화 기법', authors: '양근영, 안우진, 임묘택, 최현덕, 강태구', venue: 'ICROS', year: 2022 },
  { number: 3, title: 'Quadrotor의 경로추적을 위한 Chattering 감소 전역 최적 슬라이딩 모드 제어기 설계', authors: '손준영, 최현덕', venue: 'ICROS', year: 2022 },
  { number: 2, title: 'Attention PPO 강화학습을 활용한 드론의 자율 착륙 시스템', authors: '홍찬의, 최현덕', venue: 'ICROS', year: 2022 },
  { number: 1, title: '최소 공분산 유한 임펄스 응답 필터 기반 디지털 위상 고정 루프 설계', authors: '유성현, 최현덕', venue: 'ICROS', year: 2021 },
]

const patents = [
  { number: 2, title: '퍼지 유한 메모리 구조를 이용한 전자 유압 엑추에이터를 포함하는 비선형 능동 서스펜션의 상태추정 방법 및 이를 포함하는 전자장치', inventors: '최현덕', number_full: '10-2559648', date: '2023.07.20' },
  { number: 1, title: '파티클 필터를 이용한 전자 유압 엑추에이터를 포함하는 비선형 능동 서스펜션의 상태추정 방법 및 이를 포함하는 전자장치', inventors: '최현덕', number_full: '10-2551794', date: '2023.06.30' },
]

export default function PublicationsPage() {
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
            <h1 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Publications</h1>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Research Publications</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto italic">
              A comprehensive collection of our contributions to control systems, computer vision, and robotics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {[
              { label: 'International Journals', count: 26 },
              { label: 'Domestic Journals', count: 6 },
              { label: 'Int. Conferences', count: 10 },
              { label: 'Dom. Conferences', count: 6 },
              { label: 'Patents', count: 2 },
            ].map((stat, index) => (
              <div key={index} className="p-4 rounded-xl bg-white border border-black/5 shadow-sm text-center">
                <div className="text-2xl font-bold text-blue-600">{stat.count}</div>
                <div className="text-xs text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* International Journals */}
      <section className="py-12 px-6" id="international-journals">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">International Journals & Top AI Conferences</h3>
            <div className="space-y-4">
              {internationalJournals.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={`p-5 rounded-xl border ${
                    pub.highlight 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-md' 
                      : 'bg-white border-black/5 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-sm font-bold text-blue-600 shrink-0">[{pub.number}]</span>
                      {pub.highlight && (
                        <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold">
                          ★ Highlight
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-600">{pub.authors}</p>
                    <h4 className="font-bold text-neutral-900">{pub.title}</h4>
                    <p className="text-sm text-neutral-700">
                      <span className="font-medium italic">{pub.venue}</span>
                      {pub.note && <span>, {pub.note}</span>}
                    </p>
                    {pub.doi && (
                      <p className="text-xs text-neutral-500">DOI: {pub.doi}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domestic Journals */}
      <section className="py-12 px-6 bg-white/40" id="domestic-journals">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Domestic Journals (국내저널)</h3>
            <div className="space-y-3">
              {domesticJournals.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-blue-600 shrink-0">[{pub.number}]</span>
                    <div>
                      <p className="text-sm text-neutral-600">{pub.authors}</p>
                      <h4 className="font-bold text-neutral-900">{pub.title}</h4>
                      <p className="text-sm text-neutral-700">
                        <span className="italic">{pub.venue}</span>
                        {pub.note && <span>, {pub.note}</span>}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Conferences */}
      <section className="py-12 px-6" id="international-conferences">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">International Conferences</h3>
            <div className="space-y-3">
              {internationalConferences.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-blue-600 shrink-0">[{pub.number}]</span>
                    <div>
                      <p className="text-sm text-neutral-600">{pub.authors}</p>
                      <h4 className="font-bold text-neutral-900">{pub.title}</h4>
                      <p className="text-sm text-neutral-700">
                        <span className="italic">{pub.venue}</span>, {pub.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domestic Conferences */}
      <section className="py-12 px-6 bg-white/40" id="domestic-conferences">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Domestic Conferences (국내학회)</h3>
            <div className="space-y-3">
              {domesticConferences.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-white border border-black/5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-blue-600 shrink-0">[{pub.number}]</span>
                    <div>
                      <p className="text-sm text-neutral-600">{pub.authors}</p>
                      <h4 className="font-bold text-neutral-900">{pub.title}</h4>
                      <p className="text-sm text-neutral-700">
                        <span className="italic">{pub.venue}</span>, {pub.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patents */}
      <section className="py-12 px-6" id="patents">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">Patents</h3>
            <div className="space-y-4">
              {patents.map((patent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-yellow-700 shrink-0">[{patent.number}]</span>
                    <div>
                      <p className="text-sm text-neutral-600">{patent.inventors}</p>
                      <h4 className="font-bold text-neutral-900">{patent.title}</h4>
                      <p className="text-sm text-neutral-700 mt-1">
                        등록번호: <span className="font-medium">{patent.number_full}</span> | 등록일: {patent.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
