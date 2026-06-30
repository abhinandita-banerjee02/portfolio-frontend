import { motion } from 'framer-motion'
import { FiFolder, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Komorebi — Accessibility Platform',
    description:
      'An inclusive web application empowering visually impaired students with enhanced note-taking and reading tools. Features real-time object detection and recognition powered by TensorFlow and the COCO-SSD model, combined with text-to-speech and speech-to-text capabilities via the SpeechSynthesis API — enabling users to create, listen to, and manage notes, books, and PDFs for effective learning.',
    tags: ['React.js', 'TensorFlow', 'COCO-SSD', 'SpeechSynthesis API', 'JavaScript'],
    emoji: '🌿',
    github: 'https://github.com/abhinandita-banerjee02/komorebi',
  },
  {
    title: 'Effective Billing Date Feature',
    description:
      'Designed and developed the Effective Billing Date (EBD) computation engine for PLDT\'s B2C residential service activation flow as part of a large-scale OSS transformation program. Ensures accurate billing cycle start dates across multi-service orders spanning Internet, VoIP, IPTV, and Wireless — handling complex date logic, proration rules, and cross-service dependencies.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'Java Stream API', 'Microservices'],
    emoji: '📅',
    github: null,
  },
  {
    title: 'Eat-n-Repeat — Restaurant Finder',
    description:
      'A mobile application that lets users discover restaurants by location and custom search queries. Built with a clean, intuitive interface featuring real-time search, restaurant details, ratings, and location-based recommendations powered by third-party APIs and community modules.',
    tags: ['React Native', 'REST APIs', 'Community Modules', 'Mobile'],
    emoji: '🍕',
    github: 'https://github.com/abhinandita-banerjee02/Eat-n-repeat',
  },
  {
    title: 'IOCL Hall Booking System',
    description:
      'A full-stack conference room reservation system built during an internship at Indian Oil Corporation Ltd. Enables the IS department to seamlessly book, manage, and track meeting room availability — improving scheduling efficiency and eliminating double-booking issues across offices.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Full Stack'],
    emoji: '🏢',
    github: 'https://github.com/abhinandita-banerjee02/ioclapp',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.span className="section-label" variants={cardVariants}>
            <FiFolder /> Projects
          </motion.span>
          <motion.h2 className="section-title" variants={cardVariants}>
            Featured <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            A selection of projects that showcase my skills and passion for development.
          </motion.p>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className="project-image">{project.emoji}</div>
                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                        <FiGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
