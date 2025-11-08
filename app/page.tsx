import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav-section">
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="profile-image-container">
            <Image
              src="/profile-photo.jpg"
              alt="Logan's Profile Photo"
              width={120}
              height={120}
              className="profile-image"
              priority
            />
          </div>
          <h1 className="hero-title">Logan</h1>
          <h2 className="hero-subtitle">Developer & Designer</h2>
          <p className="hero-description">
            I create digital experiences that are both beautiful and functional. 
            Currently focused on building innovative web applications and exploring 
            the intersection of technology and design.
          </p>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">Scroll</div>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="projects-title">Selected Work</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Elegant Jewelry E-Commerce Platform</h3>
                <span className="project-year">2025</span>
              </div>
              <p className="project-description">
                A full-stack e-commerce solution built with React, Node.js, and MongoDB. 
                Currently in progress, but planned features include user authentication, payment processing, inventory management, 
                and a responsive admin dashboard.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="https://github.com/LardTheTard/shop" className="project-link secondary">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Discord Poker Bot and Screentime Tracker</h3>
                <span className="project-year">2025</span>
              </div>
              <p className="project-description">
                Created a Discord bot using Python and the Discord.py library. It has poker functionality and a screentime tracker that tracks how long users in the same server are online, allowing the display of data through Matplotlib.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="https://github.com/LardTheTard/discord_bot" className="project-link secondary">GitHub</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}


