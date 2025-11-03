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
                <h3 className="project-title">E-Commerce Platform</h3>
                <span className="project-year">2024</span>
              </div>
              <p className="project-description">
                A full-stack e-commerce solution built with React, Node.js, and MongoDB. 
                Features include user authentication, payment processing, inventory management, 
                and a responsive admin dashboard.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Task Management App</h3>
                <span className="project-year">2024</span>
              </div>
              <p className="project-description">
                A collaborative task management application with real-time updates, 
                team collaboration features, and advanced filtering options. Built with 
                modern web technologies and deployed on the cloud.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Weather Dashboard</h3>
                <span className="project-year">2023</span>
              </div>
              <p className="project-description">
                An interactive weather dashboard that displays current conditions, 
                forecasts, and historical data. Features beautiful data visualizations 
                and location-based weather alerts.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Social Media Analytics</h3>
                <span className="project-year">2023</span>
              </div>
              <p className="project-description">
                A comprehensive analytics platform for social media metrics. 
                Provides insights into engagement, reach, and audience demographics 
                with interactive charts and exportable reports.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">AI Chat Assistant</h3>
                <span className="project-year">2023</span>
              </div>
              <p className="project-description">
                An intelligent chat assistant powered by machine learning. 
                Capable of natural language processing, context awareness, 
                and integration with various APIs for enhanced functionality.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">Mobile Fitness Tracker</h3>
                <span className="project-year">2022</span>
              </div>
              <p className="project-description">
                A cross-platform mobile application for fitness tracking and workout planning. 
                Features include progress tracking, social challenges, and integration 
                with wearable devices.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


