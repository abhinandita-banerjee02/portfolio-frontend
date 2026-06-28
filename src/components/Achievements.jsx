import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const achievements = [
  { icon: '🏅', number: 1, suffix: '', label: 'AWS Certification' },
  { icon: '🚀', number: 5, suffix: '+', label: 'Production Releases' },
  { icon: '⚙️', number: 2, suffix: '', label: 'Delivery Tracks' },
  { icon: '📦', number: 10, suffix: '+', label: 'Features Shipped' },
]

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.span className="section-label" variants={cardVariants}>
            <FiAward /> Achievements
          </motion.span>
          <motion.h2 className="section-title" variants={cardVariants}>
            By the <span className="gradient-text">Numbers</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            A quick snapshot of my journey so far.
          </motion.p>

          <div className="achievements-grid">
            {achievements.map((item) => (
              <motion.div
                key={item.label}
                className="glass-card achievement-card"
                variants={cardVariants}
                whileHover={{ scale: 1.06, rotate: 1 }}
              >
                <span className="achievement-icon">{item.icon}</span>
                <div className="achievement-number">
                  <AnimatedCounter target={item.number} suffix={item.suffix} />
                </div>
                <p className="achievement-label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
