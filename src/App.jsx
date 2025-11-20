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

          <div className="description">
            <h2>What is a Static Website?</h2>
            <p>
              A static website is the simplest type of web application. It consists of
              HTML, CSS, and JavaScript files that are served directly to the browser
              without any server-side processing. Perfect for getting started with web development!
            </p>
          </div>

          <div className="code-section">
            <h3>Basic Structure</h3>
            <pre className="code-block">
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>Server Hello World</title>
  </head>
  <body>
    <h1>Happy Coding</h1>
    <p>Hello world!</p>
  </body>
</html>`}</code>
            </pre>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📁</div>
              <h3>Simple Files</h3>
              <p>Just HTML, CSS, and JavaScript files in a directory</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Loading</h3>
              <p>No server processing means instant page loads</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Easy Deploy</h3>
              <p>Copy to Tomcat or Jetty server and you're done!</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>No database or server-side code to exploit</p>
            </div>
          </div>

          <div className="deployment-section">
            <h2>Deploying to a Server</h2>
            <div className="server-options">
              <div className="server-card">
                <h3>Apache Tomcat</h3>
                <p>Copy your files to the webapps directory:</p>
                <code className="inline-code">tomcat/webapps/myapp/</code>
              </div>
              <div className="server-card">
                <h3>Jetty Server</h3>
                <p>Place files in the webapps directory:</p>
                <code className="inline-code">jetty/webapps/myapp/</code>
              </div>
            </div>
          </div>

          <div className="concepts-section">
            <h2>Key Concepts</h2>
            <ul className="concepts-list">
              <li>
                <strong>Web App Anatomy:</strong> A web app consists of HTML files,
                static resources (CSS, JS, images), and optionally server-side code
              </li>
              <li>
                <strong>Static vs Dynamic:</strong> Static sites serve pre-written files,
                while dynamic sites generate content on the fly
              </li>
              <li>
                <strong>Server Role:</strong> The web server (like Tomcat or Jetty)
                handles HTTP requests and serves your files to browsers
              </li>
              <li>
                <strong>Context Path:</strong> The URL path where your app lives,
                e.g., <code className="inline-code">http://localhost:8080/myapp/</code>
              </li>
            </ul>
          </div>

          <div className="next-steps">
            <h2>Next Steps</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>Add Servlets</h3>
                <p>Learn to handle dynamic requests with Java servlets</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>Use JSP</h3>
                <p>Create dynamic pages with JavaServer Pages</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>Add a Database</h3>
                <p>Store and retrieve data with SQL databases</p>
              </div>
              <div className="step-card">
                <div className="step-number">4</div>
                <h3>Deploy to Cloud</h3>
                <p>Host on AWS, Google Cloud, or other platforms</p>
              </div>
            </div>
          </div>

          <div className="resources">
            <h2>Learn More</h2>
            <p>
              This tutorial is based on{' '}
              <a
                href="https://happycoding.io/tutorials/java-server/web-app/hello-world-static-website"
                target="_blank"
                rel="noopener noreferrer"
                className="tutorial-link"
              >
                Happy Coding's Static Website Tutorial
              </a>
            </p>
            <p className="tutorial-series">
              Part of the Java Server tutorial series covering everything from
              basic static sites to advanced web applications with databases and cloud hosting.
            </p>
          </div>

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
