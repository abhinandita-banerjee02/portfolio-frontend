# Portfolio Frontend

React.js single-page application for a personal portfolio website.

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI library |
| **Vite 6** | Build tool & dev server |
| **Framer Motion** | Scroll & interaction animations |
| **React Icons** | Technology logos & UI icons |
| **CSS Custom Properties** | Theming (dark mode) |

## Prerequisites

- **Node.js** 18+
- **npm** 9+

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root component — assembles all sections
├── index.css                 # Global styles, variables, responsive rules
└── components/
    ├── ScrollProgress.jsx    # Top scroll progress bar
    ├── Navbar.jsx            # Fixed navbar, transparent → solid on scroll
    ├── Hero.jsx              # Full-viewport hero with particle canvas & typing effect
    ├── About.jsx             # Bio, photo placeholder, animated stat cards
    ├── Skills.jsx            # Tech stack cards with brand logos (Frontend / Backend / DevOps)
    ├── Projects.jsx          # Project showcase — Komorebi, EBD, Eat-n-Repeat, IOCL
    ├── Resume.jsx            # Timeline for work experience & education
    ├── Achievements.jsx      # Animated counter cards
    ├── Contact.jsx           # Contact form (POST /api/contact) + social links
    └── Footer.jsx            # Social icons & copyright
```

## Sections

| Section | Component | Animations |
|---|---|---|
| Hero | `Hero.jsx` | Particle constellation canvas, typing effect, fade-in |
| About | `About.jsx` | Scroll-triggered fade, stat card hover |
| Skills | `Skills.jsx` | Staggered card reveal, logo glow on hover |
| Projects | `Projects.jsx` | Staggered cards, lift on hover |
| Resume | `Resume.jsx` | Timeline slide-in from left |
| Achievements | `Achievements.jsx` | Counter animation on scroll, scale + rotate hover |
| Contact | `Contact.jsx` | Form validation, slide-in links |
| Footer | `Footer.jsx` | Social icons bounce on hover |

## API Proxy

During development, the Vite dev server proxies `/api/*` requests to the Spring Boot backend at `http://localhost:8080`. This is configured in `vite.config.js`:

```js
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:8080',
      changeOrigin: true,
    },
  },
}
```

For production, configure your web server (Nginx, etc.) to reverse-proxy `/api` to the backend.

## Customization Guide

| What to change | File | What to edit |
|---|---|---|
| Name & tagline | `Hero.jsx` | `roles` array, name text, description |
| Bio & stats | `About.jsx` | Paragraph text, `stats` array |
| Skills | `Skills.jsx` | `skillCategories` array — names, logos, colors |
| Projects | `Projects.jsx` | `projects` array — title, description, tags, links |
| Work & education | `Resume.jsx` | `experience` and `education` arrays |
| Achievement counters | `Achievements.jsx` | `achievements` array — icon, number, label |
| Social links | `Contact.jsx`, `Footer.jsx` | `href` values for LinkedIn, GitHub, email |
| Colors & theme | `index.css` | CSS custom properties in `:root` |

## Build Output

```bash
npm run build
```

Production files are generated in the `dist/` folder, ready for static hosting (Netlify, Vercel, S3, etc.).
