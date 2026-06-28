import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiSend,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from 'react-icons/fi'

// ── EmailJS configuration ──────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service  (e.g. Gmail) → copy the Service ID
// 3. Create an Email Template           → copy the Template ID
// 4. Go to Account → General            → copy the Public Key
// 5. Paste the three values below:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
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
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ from_name: '', from_email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      })
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
                  href="https://linkedin.com/in/abhinandita-banerjee"
                  className="contact-link-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon"><FiLinkedin /></div>
                  <div>
                    <div className="contact-link-label">LinkedIn</div>
                    <div className="contact-link-value">
                      linkedin.com/in/abhinandita-banerjee
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/abhinandita-banerjee02"
                  className="contact-link-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon"><FiGithub /></div>
                  <div>
                    <div className="contact-link-label">GitHub</div>
                    <div className="contact-link-value">
                      github.com/abhinandita-banerjee02
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Pune,India"
                  className="contact-link-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-link-icon"><FiMapPin /></div>
                  <div>
                    <div className="contact-link-label">Location</div>
                    <div className="contact-link-value">Pune, India</div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              variants={itemVariants}
            >
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="from_name">Your Name</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="from_email">Your Email</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.from_email}
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
