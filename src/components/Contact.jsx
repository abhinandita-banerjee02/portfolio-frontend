import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiSend,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.span className="section-label" variants={itemVariants}>
            <FiMail /> Contact
          </motion.span>
          <motion.h2 className="section-title" variants={itemVariants}>
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
          </motion.p>

          <div className="contact-grid">
            <motion.div
              className="glass-card contact-info-card"
              variants={itemVariants}
            >
              <h3 className="contact-info-title">Let&apos;s Connect</h3>
              <p className="contact-info-text">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing.
              </p>

              <div className="contact-links">
                <a
                  href="mailto:abhinanditaban@gmail.com"
                  className="contact-link-item"
                >
                  <div className="contact-link-icon"><FiMail /></div>
                  <div>
                    <div className="contact-link-label">Email</div>
                    <div className="contact-link-value">abhinanditaban@gmail.com</div>
                  </div>
                </a>

                <a
                  href=""
                  className="contact-link-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon"><FiLinkedin /></div>
                  <div>
                    <div className="contact-link-label">LinkedIn</div>
                    <div className="contact-link-value">
                      {/* Add your LinkedIn profile URL above */}
                      linkedin.com/in/abhinandita-banerjee
                    </div>
                  </div>
                </a>

                <a
                  href=""
                  className="contact-link-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon"><FiGithub /></div>
                  <div>
                    <div className="contact-link-label">GitHub</div>
                    <div className="contact-link-value">
                      {/* Add your GitHub profile URL above */}
                      github.com/abhinandita-banerjee02
                    </div>
                  </div>
                </a>

                <a href="#" className="contact-link-item">
                  <div className="contact-link-icon"><FiMapPin /></div>
                  <div>
                    <div className="contact-link-label">Location</div>
                    <div className="contact-link-value">Your City, Country</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : (
                  <>Send Message <FiSend /></>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
