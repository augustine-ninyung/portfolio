import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrap reveal-left">
            <div className="about-card-visual card">
              <div className="about-avatar">AN</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.15rem', color: 'var(--white)' }}>
                Augustine Ninyung
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--muted)', marginTop: '4px' }}>
                Ghana 🇬🇭 &nbsp;·&nbsp; ALX Africa
              </div>
              <div className="about-role-badges">
                <span className="role-badge rb-gold">Front-End Dev</span>
                <span className="role-badge rb-blue">UI/UX Designer</span>
                <span className="role-badge rb-gold">Campus Lead</span>
                <span className="role-badge rb-blue">React Native</span>
              </div>
              <div className="about-alx">
                Currently enrolled at <strong>ALX Africa</strong> — one of Africa's most intensive tech
                training programs, specialising in modern web &amp; mobile development.
              </div>
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-year">2024 – Present</div>
                  <div className="tl-text"><strong>ALX Africa</strong> – Front-End Development</div>
                </div>
                <div className="tl-item">
                  <div className="tl-year">2024 – Present</div>
                  <div className="tl-text"><strong>Campus Tech Lead</strong> – University Community</div>
                </div>
                <div className="tl-item">
                  <div className="tl-year">2024</div>
                  <div className="tl-text">Built full <strong>React Native App</strong> with auth &amp; booking system</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-story reveal-right">
            <div className="tag">// About Me</div>
            <h2 className="section-title">
              Building the<br /><span className="gold">intersection</span> of<br />tech &amp; impact.
            </h2>
            <p>
              I'm Augustine — a front-end developer and UX thinker who believes the best digital products
              are born where <strong>technical rigour meets human empathy</strong>. I'm currently sharpening
              my craft at ALX Africa while leading a campus tech community that bridges the gap between
              students and the tech industry.
            </p>
            <p>
              My approach to development is shaped by <strong>product thinking</strong> — I don't just
              build what's asked; I question why it's needed, map the user journey, and design systems
              that scale. From architecting auth flows to crafting tourism experiences, I treat every
              project as a product.
            </p>
            <p>
              When I'm not coding, I'm probably whiteboarding user flows, researching{' '}
              <strong>persuasive design systems</strong>, or rallying students around a hackathon.
              Leadership, for me, is a feature — not a side project.
            </p>
            <div className="about-values">
              <div className="value-item">
                <div className="value-icon">⚡</div>
                <div className="value-text">
                  <h4>Performance-first</h4>
                  <p>Fast, accessible, production-ready code</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <div className="value-text">
                  <h4>Product thinking</h4>
                  <p>Design decisions driven by user outcomes</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <div className="value-text">
                  <h4>Community-driven</h4>
                  <p>Building ecosystems, not just features</p>
                </div>
              </div>
              <div className="value-item">
                <div className="value-icon">🌍</div>
                <div className="value-text">
                  <h4>Africa-focused</h4>
                  <p>Tech that solves real local problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
