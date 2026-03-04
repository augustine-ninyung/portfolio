import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  useScrollReveal();

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow reveal">
              <div className="hero-dot"></div>
              <span className="hero-eyebrow-text">Available for opportunities</span>
            </div>
            <h1 className="hero-name reveal delay-1">
              Augustine<br />
              <span className="line2">Ninyung.</span>
            </h1>
            <p className="hero-tagline reveal delay-2">
              <strong>Front-End Developer &amp; UX Strategist.</strong><br />
              I craft digital experiences that merge <strong>technical precision</strong> with{' '}
              <strong>strategic design</strong> — from React Native apps to community-powered platforms.
            </p>
            <div className="hero-btns reveal delay-3">
              <Link to="/projects" className="btn btn-gold">View My Work ↓</Link>
              <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
            </div>
            <div className="hero-stats reveal delay-4">
              <div>
                <span className="stat-num">3+</span>
                <span className="stat-label">Real-world projects</span>
              </div>
              <div>
                <span className="stat-num">ALX</span>
                <span className="stat-label">Africa certified</span>
              </div>
              <div>
                <span className="stat-num">Lead</span>
                <span className="stat-label">Campus tech community</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal delay-2">
            <div className="orbit-ring orbit-2">
              <div className="orbit-chip counter-spin">React Native</div>
            </div>
            <div className="orbit-ring orbit-1">
              <div className="orbit-chip counter-spin" style={{ top: 'auto', bottom: '-12px' }}>UI/UX Design</div>
            </div>
            <div className="hero-orb">
              <div className="orb-inner">
                <div>
                  <div className="orb-initials">AN</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '6px', fontFamily: "'JetBrains Mono',monospace" }}>
                    Front-End Dev
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
