import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  useScrollReveal();

  useEffect(() => {
    const section = document.getElementById('skills');
    if (!section) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.skill-fill[data-width]').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 200 + i * 80);
        });
      }
    }, { threshold: 0.1 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 56px' }}>
          <div className="tag">// Capabilities</div>
          <h2 className="section-title">Skills &amp; <span className="gold">Expertise</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A full-stack of capabilities — from pixel-perfect interfaces to strategic community leadership.
          </p>
        </div>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category card reveal delay-1">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">🖥️</div>
              <span className="skill-cat-title">Frontend Development</span>
            </div>
            <div className="skill-list">
              {[
                { name: 'React & React Native', pct: 88 },
                { name: 'JavaScript / TypeScript', pct: 82 },
                { name: 'HTML5 & CSS3', pct: 92 },
                { name: 'Tailwind CSS', pct: 85 },
                { name: 'REST API Integration', pct: 80 },
              ].map(s => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-item-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width={s.pct}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* UI/UX */}
          <div className="skill-category card reveal delay-2">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">🎨</div>
              <span className="skill-cat-title">UI/UX &amp; Design Systems</span>
            </div>
            <div className="skill-list">
              {[
                { name: 'Figma & Prototyping', pct: 85 },
                { name: 'User Flow Mapping', pct: 88 },
                { name: 'System Architecture Design', pct: 78 },
                { name: 'Persuasive UX Strategy', pct: 80 },
                { name: 'Responsive Design', pct: 90 },
              ].map(s => (
                <div className="skill-item" key={s.name}>
                  <div className="skill-item-top">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill blue-fill" data-width={s.pct}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category card reveal delay-3">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">🛠️</div>
              <span className="skill-cat-title">Tools &amp; Workflow</span>
            </div>
            <div className="skill-tags">
              {['Git & GitHub','VS Code','Vite','npm / yarn','Framer Motion','Expo','Firebase','Postman','Notion','Linear','Miro','Google Auth','JWT','ESLint','Prettier'].map(t => (
                <span className="s-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="skill-category card reveal delay-4">
            <div className="skill-cat-header">
              <div className="skill-cat-icon">🚀</div>
              <span className="skill-cat-title">Leadership &amp; Soft Skills</span>
            </div>
            <div className="skill-tags">
              {['Community Building','Technical Mentoring','Event Organization','Public Speaking','Product Strategy','Agile/Scrum','Team Coordination','Stakeholder Comms','Workshop Facilitation','Problem Solving','Design Thinking'].map(t => (
                <span className="s-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
