import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  useScrollReveal();

  return (
    <section id="projects">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <div className="tag">// Featured Work</div>
          <h2 className="section-title">Projects that<br /><span className="gold">Ship.</span></h2>
          <p className="section-subtitle">
            Real-world applications built with production-grade thinking — from architecture to UI to deployment.
          </p>
        </div>

        <div className="projects-grid">
          {/* Featured project */}
          <div className="project-card card reveal">
            <div className="project-card-top">
              <div>
                <div className="project-badge">★ Featured Project</div>
                <h3 className="project-title">React Native Mobile App</h3>
                <p className="project-desc">
                  A full-featured mobile application with complete user authentication (Email &amp; Google SSO),
                  product listing &amp; detail screens, a booking management system, and an admin dashboard.
                  Built with a focus on performance, clean architecture, and seamless UX across platforms.
                </p>
                <div className="project-highlights">
                  <div className="highlight-item">Email + Google OAuth authentication</div>
                  <div className="highlight-item">Product listing &amp; detail screens</div>
                  <div className="highlight-item">Booking management system</div>
                  <div className="highlight-item">Admin dashboard &amp; analytics</div>
                  <div className="highlight-item">RESTful API data fetching</div>
                  <div className="highlight-item">Cross-platform (iOS &amp; Android)</div>
                </div>
                <div className="project-tech">
                  {['React Native','Expo','JavaScript','REST API','Google Auth','Firebase','AsyncStorage'].map(t => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="https://github.com/augustineninyung" target="_blank" rel="noopener noreferrer" className="project-link pl-primary">
                    View on GitHub ↗
                  </a>
                  <Link to="/contact" className="project-link pl-ghost">Request Demo</Link>
                </div>
              </div>
              <div className="project-visual">📱</div>
            </div>
          </div>

          {/* Two-column row */}
          <div className="projects-grid two-col">
            <div className="project-card card reveal delay-1">
              <div className="project-badge blue-badge">🌍 Tourism Tech</div>
              <h3 className="project-title" style={{ fontSize: '1.3rem' }}>YɛnkɔGH</h3>
              <p className="project-desc">
                A culturally-grounded tourism platform designed for Ghana — "Let's Go Ghana" in Twi.
                Full UI/UX design system including user research, journey maps, system flowcharts, and a
                comprehensive design language celebrating Ghanaian heritage.
              </p>
              <div className="project-tech">
                {['Figma','Design System','User Research','UX Strategy','Prototyping'].map(t => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <Link to="/contact" className="project-link pl-primary" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                  View Case Study
                </Link>
              </div>
            </div>

            <div className="project-card card reveal delay-2">
              <div className="project-badge">📐 Systems Design</div>
              <h3 className="project-title" style={{ fontSize: '1.3rem' }}>UX Architecture</h3>
              <p className="project-desc">
                Comprehensive system architecture and UX documentation — including system flowcharts,
                data models, user personas, and wireframes. Bridging the gap between product thinking
                and engineering implementation.
              </p>
              <div className="project-tech">
                {['System Design','Flowcharts','Wireframes','User Personas','Miro'].map(t => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <Link to="/contact" className="project-link pl-primary" style={{ fontSize: '0.8rem', padding: '8px 16px' }}>
                  View Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
