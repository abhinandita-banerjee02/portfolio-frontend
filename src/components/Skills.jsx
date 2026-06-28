import { motion } from 'framer-motion'
import { FiCode, FiServer, FiTool } from 'react-icons/fi'
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
  FaAws,
  FaJira,
  FaConfluence,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si'
import { TbApi, TbBrandTypescript } from 'react-icons/tb'
import { GoGitMerge } from 'react-icons/go'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: [
      { name: 'React.js', logo: <FaReact />, color: '#61DAFB' },
      { name: 'JavaScript / TypeScript', logo: <><FaJsSquare /><TbBrandTypescript /></>, color: '#F7DF1E' },
      { name: 'HTML5 & CSS3', logo: <><FaHtml5 /><FaCss3Alt /></>, color: '#E34F26' },
      { name: 'Tailwind CSS', logo: <SiTailwindcss />, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Java', logo: <FaJava />, color: '#ED8B00' },
      { name: 'Spring Boot', logo: <SiSpringboot />, color: '#6DB33F' },
      { name: 'PostgreSQL / MySQL', logo: <><SiPostgresql /><SiMysql /></>, color: '#336791' },
      { name: 'REST APIs', logo: <TbApi />, color: '#FF6584' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <FiTool />,
    skills: [
      { name: 'Git & GitHub', logo: <><FaGitAlt /><FaGithub /></>, color: '#F05032' },
      { name: 'Bitbucket', logo: <FaBitbucket />, color: '#0052CC' },
      { name: 'Docker', logo: <FaDocker />, color: '#2496ED' },
      { name: 'CI/CD Pipelines', logo: <GoGitMerge />, color: '#00D4AA' },
      { name: 'AWS', logo: <FaAws />, color: '#FF9900' },
      { name: 'JIRA / Confluence', logo: <><FaJira /><FaConfluence /></>, color: '#0052CC' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const skillItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
}

function SkillItem({ name, logo, color }) {
  return (
    <motion.div
      className="skill-chip"
      variants={skillItemVariants}
      whileHover={{ scale: 1.04, x: 6 }}
      style={{ '--skill-accent': color }}
    >
      <span className="skill-chip-logo" style={{ color }}>
        {logo}
      </span>
      <span className="skill-chip-name">{name}</span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.span className="section-label" variants={cardVariants}>
            <FiCode /> Skills
          </motion.span>
          <motion.h2 className="section-title" variants={cardVariants}>
            My <span className="gradient-text">Tech Stack</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            Technologies and tools I use to bring ideas to life.
          </motion.p>

          <div className="skills-grid">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="glass-card skill-category"
                variants={cardVariants}
              >
                <div className="skill-category-icon">{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
                <motion.div
                  className="skill-chips"
                  variants={containerVariants}
                >
                  {category.skills.map((skill) => (
                    <SkillItem
                      key={skill.name}
                      name={skill.name}
                      logo={skill.logo}
                      color={skill.color}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
