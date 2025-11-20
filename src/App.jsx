import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    setLoaded(true)

    // Generate random particles
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="app-container">
      {/* Animated gradient background */}
      <div className="gradient-bg"></div>

      {/* Floating particles */}
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`content ${loaded ? 'loaded' : ''}`}>
        <div className="card">
          <div className="shine"></div>
          <h1 className="title">
            <span className="letter" style={{ animationDelay: '0.1s' }}>H</span>
            <span className="letter" style={{ animationDelay: '0.2s' }}>a</span>
            <span className="letter" style={{ animationDelay: '0.3s' }}>p</span>
            <span className="letter" style={{ animationDelay: '0.4s' }}>p</span>
            <span className="letter" style={{ animationDelay: '0.5s' }}>y</span>
            <span className="letter" style={{ animationDelay: '0.6s' }}> </span>
            <span className="letter" style={{ animationDelay: '0.7s' }}>C</span>
            <span className="letter" style={{ animationDelay: '0.8s' }}>o</span>
            <span className="letter" style={{ animationDelay: '0.9s' }}>d</span>
            <span className="letter" style={{ animationDelay: '1.0s' }}>i</span>
            <span className="letter" style={{ animationDelay: '1.1s' }}>n</span>
            <span className="letter" style={{ animationDelay: '1.2s' }}>g</span>
          </h1>

          <div className="divider"></div>

          <p className="message">Hello world!</p>

          {/* Decorative elements */}
          <div className="decoration decoration-1"></div>
          <div className="decoration decoration-2"></div>
          <div className="decoration decoration-3"></div>
          <div className="decoration decoration-4"></div>
        </div>

        {/* Floating emojis */}
        <div className="emoji emoji-1">🚀</div>
        <div className="emoji emoji-2">✨</div>
        <div className="emoji emoji-3">💻</div>
        <div className="emoji emoji-4">🎨</div>
      </div>
    </div>
  )
}

export default App
