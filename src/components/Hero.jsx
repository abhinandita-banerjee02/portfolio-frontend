import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

const roles = ['Software Engineer', 'Full Stack Developer', 'Cloud Enthusiast']

function useTypingEffect(strings, typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = strings[index]
    let timeout

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % strings.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? current.substring(0, displayed.length - 1)
            : current.substring(0, displayed.length + 1)
        )
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseDuration])

  return displayed
}

export default function Hero() {
  const typedText = useTypingEffect(roles)

  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Abhinandita.
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {typedText}
            <span className="typing-cursor" />
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I build enterprise-grade microservices and telecom fulfillment systems
            at Amdocs. AWS Certified Solutions Architect with a knack for turning
            complex requirements into clean, reliable software.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <FiArrowRight />
            </a>
            <a
              href="/Abhinandita_Banerjee_Resume.pdf"
              download="Abhinandita_Banerjee_Resume.pdf"
              className="btn btn-outline"
            >
              <FiDownload /> Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-dot" />
      </motion.div>
    </section>
  )
}
