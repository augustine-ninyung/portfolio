import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Leadership() {
  useScrollReveal();

  return (
    <section id="leadership">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '56px' }}>
          <div className="tag">// Community Impact</div>
          <h2 className="section-title">Leading <span className="gold">beyond</span><br />the codebase.</h2>
          <p className="section-subtitle">
            Tech leadership isn't about titles — it's about lifting others while building things that last.
          </p>
        </div>

        <div className="leadership-layout">
          <div className="leader-main card reveal-left">
            <div style={{ fontSize: '2rem' }}>🏛️</div>
            <div className="leader-title">Campus Tech Community Lead</div>
            <p className="leader-desc">
              As campus tech lead, I bridge the gap between students and the real tech world. I organise
              hackathons, technical workshops, and mentoring sessions — creating a pipeline of
              industry-ready developers from our university campus. My approach is simple:{' '}
              <strong style={{ color: 'var(--white)' }}>create the environment I wish I had.</strong>
            </p>
            <p className="leader-desc">
              I've built a culture of peer-learning, open-source contribution, and project-based growth.
              Every event we run is designed with the same UX thinking I apply to products — clear goals,
              smooth experience, measurable outcomes.
            </p>
            <div className="impact-stats">
              <div className="impact-stat">
                <span className="impact-num">50+</span>
                <span className="impact-label">Students engaged</span>
              </div>
              <div className="impact-stat">
                <span className="impact-num">10+</span>
                <span className="impact-label">Events organised</span>
              </div>
              <div className="impact-stat">
                <span className="impact-num">3+</span>
                <span className="impact-label">Hackathons run</span>
              </div>
            </div>
          </div>

          <div className="leader-side">
            <div className="leader-card card reveal delay-1">
              <div className="leader-card-icon">🎓</div>
              <h4>Technical Mentorship</h4>
              <p>Running peer-to-peer learning sessions in web development, UI/UX, and career development for students entering the tech space.</p>
            </div>
            <div className="leader-card card reveal delay-2">
              <div className="leader-card-icon">⚡</div>
              <h4>Hackathon Organiser</h4>
              <p>Designing and facilitating campus hackathons that challenge students to build real solutions for real problems in compressed timelines.</p>
            </div>
            <div className="leader-card card reveal delay-3">
              <div className="leader-card-icon">🌱</div>
              <h4>Open Source Advocate</h4>
              <p>Championing open-source culture, helping students make their first contributions and build public portfolios that land them opportunities.</p>
            </div>
            <div className="leader-card card reveal delay-4">
              <div className="leader-card-icon">🔗</div>
              <h4>Industry Bridge Builder</h4>
              <p>Connecting campus talent with internship opportunities, tech companies, and mentors from the broader African tech ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
