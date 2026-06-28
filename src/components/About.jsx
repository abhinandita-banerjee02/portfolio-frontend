import { motion } from 'framer-motion'
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

export default function About() {
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
            <motion.div className="about-image-wrapper" variants={itemVariants}>
              <div className="about-image-frame">
                <div className="about-image-placeholder">👨‍💻</div>
              </div>
              <div className="about-decoration" />
            </motion.div>

            <motion.div className="about-text" variants={containerVariants}>
              <motion.p variants={itemVariants}>
                I&apos;m Abhinandita — a Software Engineer at Amdocs with a B.Tech in Computer
                Science from VIT Vellore. I build Java &amp; Spring Boot microservices that
                power large-scale telecom fulfillment systems, working across orchestration,
                billing integration, and service activation domains.
              </motion.p>
              <motion.p variants={itemVariants}>
                My experience spans both frontend and backend — from crafting React and React
                Native applications to designing REST APIs, event-driven consumers, and
                rule-based orchestration engines. I&apos;m an AWS Certified Solutions
                Architect and enjoy architecting cloud-native solutions that are resilient
                and cost-optimized.
              </motion.p>
              <motion.p variants={itemVariants}>
                I&apos;m driven by the challenge of turning complex business requirements
                into clean, maintainable code. Whether it&apos;s debugging production
                fallouts or building accessibility tools for visually impaired students,
                I bring the same passion for quality and impact.
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
