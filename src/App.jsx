import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function FloatingDecorations() {
  return (
    <div className="bg-decorations" aria-hidden="true">
      {/* Leaves */}
      <svg className="bg-deco deco-leaf-1" width="32" height="32" viewBox="0 0 32 32"><path d="M16 2C8 8 2 18 6 26c4-2 10-6 14-14 2 10-2 16-2 16s12-8 8-22c-2 0-6-2-10-4z" fill="#b5d6c8" opacity=".35"/></svg>
      <svg className="bg-deco deco-leaf-2" width="26" height="26" viewBox="0 0 32 32"><path d="M16 2C8 8 2 18 6 26c4-2 10-6 14-14 2 10-2 16-2 16s12-8 8-22c-2 0-6-2-10-4z" fill="#d4c5a9" opacity=".3"/></svg>
      <svg className="bg-deco deco-leaf-3" width="22" height="22" viewBox="0 0 32 32"><path d="M16 2C8 8 2 18 6 26c4-2 10-6 14-14 2 10-2 16-2 16s12-8 8-22c-2 0-6-2-10-4z" fill="#b5d6c8" opacity=".25"/></svg>

      {/* Circles */}
      <svg className="bg-deco deco-circle-1" width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="8" fill="none" stroke="#d4725c" strokeWidth="1.2" opacity=".18"/></svg>
      <svg className="bg-deco deco-circle-2" width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#3a7d6e" opacity=".08"/></svg>

      {/* Dots */}
      <svg className="bg-deco deco-dot-1" width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#d4725c" opacity=".2"/></svg>
      <svg className="bg-deco deco-dot-2" width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#3a7d6e" opacity=".15"/></svg>
      <svg className="bg-deco deco-dot-3" width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#d4c5a9" opacity=".22"/></svg>

      {/* Stars */}
      <svg className="bg-deco deco-star-1" width="16" height="16" viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#d4725c" opacity=".12"/></svg>
      <svg className="bg-deco deco-star-2" width="12" height="12" viewBox="0 0 16 16"><path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#3a7d6e" opacity=".1"/></svg>

      {/* Plus signs */}
      <svg className="bg-deco deco-plus-1" width="14" height="14" viewBox="0 0 14 14"><path d="M7 2v10M2 7h10" stroke="#b5d6c8" strokeWidth="1.5" strokeLinecap="round" opacity=".25"/></svg>
      <svg className="bg-deco deco-plus-2" width="10" height="10" viewBox="0 0 14 14"><path d="M7 2v10M2 7h10" stroke="#d4725c" strokeWidth="1.5" strokeLinecap="round" opacity=".15"/></svg>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <FloatingDecorations />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
