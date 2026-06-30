import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUser } from 'react-icons/fi'

const stats = [
  { number: '2+', label: 'Years Experience' },
  { number: '10+', label: 'Projects Shipped' },
  { number: '1', label: 'AWS Certification' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function AvatarIllustration({ waving }) {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-avatar-svg">
      {/* Speech bubble — "Hello!" */}
      <g className={`speech-bubble ${waving ? 'speech-visible' : ''}`}>
        <rect x="180" y="28" width="100" height="40" rx="16" fill="white" stroke="#d4725c" strokeWidth="1.5" />
        <polygon points="195,68 205,68 190,82" fill="white" stroke="#d4725c" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="188" y="66" width="20" height="6" fill="white" />
        <text x="230" y="54" textAnchor="middle" fill="#d4725c" fontSize="16" fontFamily="'Caveat', cursive" fontWeight="600">Hello!</text>
      </g>

      {/* Curly hair (back layer) */}
      <ellipse cx="150" cy="120" rx="82" ry="78" fill="#2a1a0e" />
      <circle cx="78" cy="100" r="24" fill="#2a1a0e" />
      <circle cx="222" cy="100" r="24" fill="#2a1a0e" />
      <circle cx="72" cy="135" r="22" fill="#2a1a0e" />
      <circle cx="228" cy="135" r="22" fill="#2a1a0e" />
      <circle cx="85" cy="165" r="18" fill="#2a1a0e" />
      <circle cx="215" cy="165" r="18" fill="#2a1a0e" />
      <circle cx="100" cy="68" r="20" fill="#2a1a0e" />
      <circle cx="200" cy="68" r="20" fill="#2a1a0e" />
      <circle cx="150" cy="55" r="22" fill="#2a1a0e" />
      <circle cx="120" cy="58" r="18" fill="#2a1a0e" />
      <circle cx="180" cy="58" r="18" fill="#2a1a0e" />

      {/* Face */}
      <ellipse cx="150" cy="140" rx="62" ry="68" fill="#f5d0b0" />

      {/* Curly hair (front curls that overlap the forehead) */}
      <circle cx="105" cy="85" r="16" fill="#2a1a0e" />
      <circle cx="130" cy="78" r="15" fill="#2a1a0e" />
      <circle cx="155" cy="75" r="16" fill="#2a1a0e" />
      <circle cx="180" cy="78" r="15" fill="#2a1a0e" />
      <circle cx="195" cy="88" r="14" fill="#2a1a0e" />

      {/* Round glasses */}
      <circle cx="128" cy="140" r="20" stroke="#4a3728" strokeWidth="3" fill="none" />
      <circle cx="172" cy="140" r="20" stroke="#4a3728" strokeWidth="3" fill="none" />
      <line x1="148" y1="140" x2="152" y2="140" stroke="#4a3728" strokeWidth="3" />
      <line x1="108" y1="136" x2="95" y2="128" stroke="#4a3728" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="192" y1="136" x2="205" y2="128" stroke="#4a3728" strokeWidth="2.5" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="128" cy="140" r="5" fill="#2a1a0e" />
      <circle cx="172" cy="140" r="5" fill="#2a1a0e" />
      <circle cx="130" cy="138" r="2" fill="white" />
      <circle cx="174" cy="138" r="2" fill="white" />

      {/* Eyebrows */}
      <path d="M114 124 Q128 116 142 124" stroke="#2a1a0e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M158 124 Q172 116 186 124" stroke="#2a1a0e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M148 150 Q150 158 154 155" stroke="#c9a88a" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Smile */}
      <path d="M130 168 Q150 184 170 168" stroke="#2a1a0e" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Rosy cheeks */}
      <ellipse cx="110" cy="162" rx="10" ry="6" fill="#e8a090" opacity=".45" />
      <ellipse cx="190" cy="162" rx="10" ry="6" fill="#e8a090" opacity=".45" />

      {/* Neck */}
      <rect x="138" y="205" width="24" height="20" rx="4" fill="#f5d0b0" />

      {/* Body — orange kurta/top */}
      <path d="M90 225 Q90 218 110 218 L190 218 Q210 218 210 225 L220 340 Q220 355 200 355 L100 355 Q80 355 80 340 Z" fill="#e07030" />
      <path d="M110 218 Q150 235 190 218" stroke="#c85e20" strokeWidth="1.5" fill="none" />

      {/* Neckline detail */}
      <path d="M130 218 Q150 238 170 218" fill="#d45e25" />

      {/* Pattern on outfit */}
      <circle cx="130" cy="280" r="3" fill="#c85e20" opacity=".6" />
      <circle cx="170" cy="290" r="3" fill="#c85e20" opacity=".6" />
      <circle cx="150" cy="310" r="3" fill="#c85e20" opacity=".6" />
      <circle cx="120" cy="320" r="2.5" fill="#c85e20" opacity=".5" />
      <circle cx="180" cy="265" r="2.5" fill="#c85e20" opacity=".5" />

      {/* Left arm (resting) */}
      <path d="M90 230 Q60 270 70 310 Q72 318 80 315 Q88 290 92 260" fill="#e07030" stroke="#c85e20" strokeWidth="1" />
      <ellipse cx="72" cy="315" rx="10" ry="8" fill="#f5d0b0" />

      {/* Right arm (waving) */}
      <g className={`waving-arm ${waving ? 'wave' : ''}`} style={{ transformOrigin: '210px 230px' }}>
        <path d="M210 230 Q240 200 250 160 Q252 148 244 150 Q236 155 238 170 Q230 195 214 218" fill="#e07030" stroke="#c85e20" strokeWidth="1" />
        {/* Hand */}
        <g className="hand-group">
          <ellipse cx="248" cy="152" rx="12" ry="10" fill="#f5d0b0" />
          {/* Fingers */}
          <rect x="244" y="140" width="4" height="10" rx="2" fill="#f5d0b0" transform="rotate(-10 246 140)" />
          <rect x="250" y="138" width="4" height="11" rx="2" fill="#f5d0b0" transform="rotate(0 252 138)" />
          <rect x="256" y="140" width="4" height="10" rx="2" fill="#f5d0b0" transform="rotate(10 258 140)" />
          <rect x="260" y="144" width="4" height="8" rx="2" fill="#f5d0b0" transform="rotate(20 262 144)" />
        </g>
      </g>

      {/* Side curls hanging down */}
      <circle cx="88" cy="185" r="12" fill="#2a1a0e" />
      <circle cx="90" cy="200" r="10" fill="#2a1a0e" />
      <circle cx="212" cy="185" r="12" fill="#2a1a0e" />
      <circle cx="210" cy="200" r="10" fill="#2a1a0e" />
    </svg>
  )
}

export default function About() {
  const avatarRef = useRef(null)
  const isInView = useInView(avatarRef, { once: false, amount: 0.4 })

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.span className="section-label" variants={itemVariants}>
            <FiUser /> About Me
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Turning ideas into <span className="gradient-text">software</span>
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-image-wrapper" variants={itemVariants} ref={avatarRef}>
              <div className="about-image-frame">
                <AvatarIllustration waving={isInView} />
              </div>
              <div className="about-decoration" />
            </motion.div>

            <motion.div className="about-text" variants={containerVariants}>
              <motion.p variants={itemVariants}>
                Software Engineer at Amdocs, building Java &amp; Spring Boot microservices
                for large-scale telecom systems. AWS Certified Solutions Architect with
                hands-on experience across React, REST APIs, and cloud-native architecture.
              </motion.p>
              <motion.p variants={itemVariants}>
                I love turning complex requirements into clean, reliable code — whether
                it&apos;s orchestration engines or accessibility tools for students.
              </motion.p>

              <motion.div className="about-stats" variants={containerVariants}>
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="stat-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
