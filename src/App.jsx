import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <nav>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <section className="hero" id="about">
        <p className="welcome">HELLO, I'M</p>
        <h1>Ananya Bhat</h1>
        <h2>Aspiring Software Developer</h2>
        <p>
          I'm an engineering student passionate about programming,
          software development and learning new technologies.
        </p>
        <a className="btn" href="#projects">Explore My Work</a>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <div className="cards">
          <div className="card">C</div>
          <div className="card">C++</div>
          <div className="card">Python</div>
          <div className="card">Java (Learning)</div>
          <div className="card">Generative AI (Learning)</div>
        </div>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="card">
          <h3>Developer Portfolio</h3>
          <p>A personal website built using React and CSS.</p>
        </div>
        <div className="card">
          <h3>More Projects Coming Soon</h3>
          <p>I'm continuously learning and building new projects.</p>
        </div>
      </section>

<section id="contact">
  <h2>Contact Me</h2>

  <p>
    Email:{" "}
    <a href="mailto:nn25ise025@nmamit.in">
      nn25ise025@nmamit.in
    </a>
  </p>

  <p>
    Phone:{" "}
    <a
      href="tel:9606312475"  
    >
      9606312475
    </a>
  </p>
</section>

      <footer>© 2026 Ananya Bhat | My Portfolio</footer>
    </div>
  )
}

export default App