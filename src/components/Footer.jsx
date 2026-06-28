import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const socials = [
  { icon: <FiGithub />, href: '', label: 'GitHub' },
  { icon: <FiLinkedin />, href: '', label: 'LinkedIn' },
  { icon: <FiTwitter />, href: '', label: 'Twitter' },
  { icon: <FiMail />, href: 'mailto:abhinanditaban@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-socials">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href || '#'}
                className="footer-social-link"
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="footer-text">
            &copy; {year} Abhinandita Banerjee. Built with{' '}
            <span className="footer-heart">&hearts;</span> using React &amp; Spring Boot.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
