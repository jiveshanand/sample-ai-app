import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [particles, setParticles] = useState([])
  const [activeTab, setActiveTab] = useState('home')
  const [openFaq, setOpenFaq] = useState(null)

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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

      {/* Professional Navigation Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">CodeStart Academy</span>
          </div>
          <nav className="main-nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#tutorial" className="nav-link">Tutorial</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#community" className="nav-link">Community</a>
          </nav>
          <button className="cta-button">Get Started Free</button>
        </div>
      </header>

      {/* Main content */}
      <div className={`content ${loaded ? 'loaded' : ''}`}>
        <div className="card">
          <div className="shine"></div>

          {/* Hero Section */}
          <div className="hero-section">
            <div className="hero-badge">Perfect for Beginners</div>
            <h1 className="title">
              <span className="letter" style={{ animationDelay: '0.1s' }}>L</span>
              <span className="letter" style={{ animationDelay: '0.2s' }}>e</span>
              <span className="letter" style={{ animationDelay: '0.3s' }}>a</span>
              <span className="letter" style={{ animationDelay: '0.4s' }}>r</span>
              <span className="letter" style={{ animationDelay: '0.5s' }}>n</span>
              <span className="letter" style={{ animationDelay: '0.6s' }}> </span>
              <span className="letter" style={{ animationDelay: '0.7s' }}>W</span>
              <span className="letter" style={{ animationDelay: '0.8s' }}>e</span>
              <span className="letter" style={{ animationDelay: '0.9s' }}>b</span>
              <span className="letter" style={{ animationDelay: '1.0s' }}> </span>
              <span className="letter" style={{ animationDelay: '1.1s' }}>D</span>
              <span className="letter" style={{ animationDelay: '1.2s' }}>e</span>
              <span className="letter" style={{ animationDelay: '1.3s' }}>v</span>
            </h1>

            <div className="divider"></div>

            <p className="message">Start Your Coding Journey Today!</p>
            <p className="hero-subtitle">
              Master web development from scratch with our beginner-friendly tutorials.
              No prior experience needed - we'll guide you every step of the way!
            </p>

            <div className="hero-cta">
              <button className="primary-cta">Start Learning Now</button>
              <button className="secondary-cta">Watch Demo Video</button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="trust-section">
            <div className="trust-item">
              <div className="trust-number">10,000+</div>
              <div className="trust-label">Students Enrolled</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">4.9/5</div>
              <div className="trust-label">Average Rating</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">100%</div>
              <div className="trust-label">Free Forever</div>
            </div>
            <div className="trust-item">
              <div className="trust-number">24/7</div>
              <div className="trust-label">Community Support</div>
            </div>
          </div>

          <div className="description">
            <h2>What is a Static Website?</h2>
            <div className="description-content">
              <p>
                <strong>Think of a static website like a digital brochure!</strong> It's the simplest
                and most beginner-friendly type of website you can build. Here's why it's perfect for you:
              </p>
              <ul className="benefits-list">
                <li>📝 <strong>No complex programming needed</strong> - Start with just HTML and CSS</li>
                <li>⚡ <strong>Super fast loading</strong> - Your visitors will love the speed!</li>
                <li>💰 <strong>Free or cheap to host</strong> - Many hosting options cost $0</li>
                <li>🎓 <strong>Learn the fundamentals</strong> - Build a solid foundation for advanced topics</li>
              </ul>
              <div className="info-box">
                <div className="info-icon">💡</div>
                <div className="info-text">
                  <strong>Did you know?</strong> Some of the most popular websites started as static sites!
                  It's the perfect way to get your ideas online quickly and professionally.
                </div>
              </div>
            </div>
          </div>

          <div className="code-section">
            <h3>Your First Web Page - It's This Simple!</h3>
            <p className="code-intro">
              Copy this code and save it as <code className="inline-code">index.html</code>.
              That's it - you've just created a website! 🎉
            </p>
            <pre className="code-block">
              <code>{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Website</title>
  </head>
  <body>
    <h1>Hello World! 🌍</h1>
    <p>Welcome to my first website!</p>
    <p>I'm learning web development and this is my start!</p>
  </body>
</html>`}</code>
            </pre>
            <div className="code-explanation">
              <h4>Let's break this down (beginner-friendly!):</h4>
              <div className="explanation-grid">
                <div className="explanation-item">
                  <span className="code-tag">&lt;html&gt;</span>
                  <span className="explanation-text">Tells the browser "Hey, this is a web page!"</span>
                </div>
                <div className="explanation-item">
                  <span className="code-tag">&lt;head&gt;</span>
                  <span className="explanation-text">Contains information ABOUT your page (like the title in the browser tab)</span>
                </div>
                <div className="explanation-item">
                  <span className="code-tag">&lt;body&gt;</span>
                  <span className="explanation-text">The actual content people will see on your page</span>
                </div>
                <div className="explanation-item">
                  <span className="code-tag">&lt;h1&gt;</span>
                  <span className="explanation-text">A big heading - the most important text on your page</span>
                </div>
              </div>
            </div>
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

          {/* Testimonials Section */}
          <div className="testimonials-section">
            <h2>What Our Students Say</h2>
            <p className="section-subtitle">Join thousands of beginners who started their coding journey with us</p>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "I went from zero coding knowledge to building my own website in just one week!
                  The explanations are crystal clear and perfect for beginners."
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍💻</div>
                  <div>
                    <div className="author-name">Alex Johnson</div>
                    <div className="author-title">Complete Beginner → Web Developer</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "Finally, a tutorial that doesn't assume I know everything already!
                  Every step is explained like I'm five. I love it!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">👩‍💼</div>
                  <div>
                    <div className="author-name">Sarah Chen</div>
                    <div className="author-title">Career Changer</div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="testimonial-text">
                  "The community is amazing! Whenever I got stuck, someone was there to help.
                  Best learning experience ever!"
                </p>
                <div className="testimonial-author">
                  <div className="author-avatar">👨‍🎓</div>
                  <div>
                    <div className="author-name">Mike Rodriguez</div>
                    <div className="author-title">High School Student</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">We know starting can be scary. Here are answers to common questions!</p>
            <div className="faq-container">
              <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                <div className="faq-question">
                  <span>Do I need any prior experience to start?</span>
                  <span className="faq-icon">{openFaq === 0 ? '−' : '+'}</span>
                </div>
                {openFaq === 0 && (
                  <div className="faq-answer">
                    Absolutely not! This tutorial is designed for complete beginners. If you can use a computer
                    and type, you can learn to code. We start from the very basics and explain everything step by step.
                  </div>
                )}
              </div>
              <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                <div className="faq-question">
                  <span>Is this really free? What's the catch?</span>
                  <span className="faq-icon">{openFaq === 1 ? '−' : '+'}</span>
                </div>
                {openFaq === 1 && (
                  <div className="faq-answer">
                    Yes, it's 100% free forever! No hidden costs, no credit card required. We believe everyone
                    should have access to quality coding education. The only "catch" is that you'll need to put
                    in the effort to learn!
                  </div>
                )}
              </div>
              <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                <div className="faq-question">
                  <span>How long does it take to learn?</span>
                  <span className="faq-icon">{openFaq === 2 ? '−' : '+'}</span>
                </div>
                {openFaq === 2 && (
                  <div className="faq-answer">
                    You can build your first website in just a few hours! To become comfortable with the basics,
                    most students spend 2-4 weeks learning at their own pace. Remember, learning to code is a
                    journey, not a race. Go at your own speed!
                  </div>
                )}
              </div>
              <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                <div className="faq-question">
                  <span>What software or tools do I need?</span>
                  <span className="faq-icon">{openFaq === 3 ? '−' : '+'}</span>
                </div>
                {openFaq === 3 && (
                  <div className="faq-answer">
                    All you need is a computer and a text editor (we recommend VS Code - it's free!). You don't
                    need any expensive software or powerful hardware. If your computer can browse the web, it
                    can write code!
                  </div>
                )}
              </div>
              <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                <div className="faq-question">
                  <span>Can I really get a job after learning this?</span>
                  <span className="faq-icon">{openFaq === 4 ? '−' : '+'}</span>
                </div>
                {openFaq === 4 && (
                  <div className="faq-answer">
                    This tutorial teaches you the foundations. While you'll need to learn more advanced topics
                    for most developer jobs, you'll be surprised how many opportunities open up! Freelance web
                    design, building sites for local businesses, or using this as a stepping stone to a full
                    developer career are all possible paths.
                  </div>
                )}
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

      {/* Professional Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">CodeStart Academy</h3>
            <p className="footer-description">
              Empowering beginners to start their coding journey with confidence.
              Learn web development from scratch with our easy-to-follow tutorials.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Discord</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#tutorial">Start Tutorial</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#community">Join Community</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Video Tutorials</a></li>
              <li><a href="#">Code Examples</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Report Bug</a></li>
              <li><a href="#">Suggest Feature</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CodeStart Academy. Made with ❤️ for beginners worldwide.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
