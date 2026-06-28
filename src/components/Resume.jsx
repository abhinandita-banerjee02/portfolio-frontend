import { motion } from 'framer-motion'
import { FiBriefcase, FiBookOpen, FiDownload } from 'react-icons/fi'

const experience = [
  {
    date: 'July 2024 — Present',
    title: 'Software Engineer',
    company: 'Amdocs, Pune',
    description:
      'Building Java & Spring Boot microservices across two parallel delivery tracks — SVO (B2C residential service activation) and PO (Project Orchestrator for infrastructure rollout) — contributing to multiple production releases. Developing core orchestration logic for B2C service activation flows spanning Fiber, Copper, ADSL, VoIP, and IPTV including Number Management, Modify OSP, Modify PAN/Switch VRF, and Effective Billing Date features. Authoring MEC definitions to drive rule-based decomposition of customer orders, and implementing REST consumers, event subscribers, activity hooks, and customizations that integrate with downstream network inventory, billing, and provisioning platforms. Actively resolving production defects across the fulfillment stack and stabilizing critical fallout flows to improve order completion rates.',
  },
  {
    date: 'May 2023 — July 2023',
    title: 'App Development Intern',
    company: 'Indian Oil Corporation Ltd., Kolkata',
    description:
      'Spearheaded the development of a Hall Booking application using React Native, Node.js, and MongoDB for the IS department. Delivered an efficient, user-friendly app that streamlines conference room reservations and enhances operational effectiveness across IOCL offices.',
  },
]

const education = [
  {
    date: '2020 — 2024',
    title: 'B.Tech in Computer Science',
    company: 'VIT Vellore, Tamil Nadu',
    description:
      'Graduated with a strong foundation in data structures, algorithms, software engineering, and system design. Actively participated in hackathons and technical communities.',
  },
  {
    date: '2020',
    title: 'Indian School Certificate (ISC)',
    company: 'Modern High School for Girls, Kolkata',
    description:
      'Completed higher secondary education with a focus on science and mathematics.',
  },
  {
    date: '2024',
    title: 'AWS Certified Solutions Architect — Associate',
    company: 'Amazon Web Services',
    description:
      'Industry-recognized certification validating expertise in designing distributed systems, cost-optimized architectures, and resilient applications on the AWS cloud platform.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          variants={itemVariants}
        >
          <div className="timeline-dot" />
          <span className="timeline-date">{item.date}</span>
          <h4 className="timeline-title">{item.title}</h4>
          <p className="timeline-company">{item.company}</p>
          <p className="timeline-description">{item.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="resume-header">
            <div>
              <motion.span className="section-label" variants={itemVariants}>
                <FiBriefcase /> Resume
              </motion.span>
              <motion.h2 className="section-title" variants={itemVariants}>
                Experience & <span className="gradient-text">Education</span>
              </motion.h2>
            </div>
            <motion.a
              href="#"
              className="btn btn-outline"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download CV
            </motion.a>
          </div>

          <div className="resume-columns">
            <motion.div variants={containerVariants}>
              <h3 className="resume-column-title">
                <FiBriefcase className="icon" /> Work Experience
              </h3>
              <Timeline items={experience} />
            </motion.div>

            <motion.div variants={containerVariants}>
              <h3 className="resume-column-title">
                <FiBookOpen className="icon" /> Education
              </h3>
              <Timeline items={education} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
