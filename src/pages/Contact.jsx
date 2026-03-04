import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [btnState, setBtnState] = useState({ text: 'Send Message →', style: {} });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setBtnState({ text: '⚠ Please fill all required fields', style: { background: 'rgba(239,68,68,0.8)' } });
      setTimeout(() => setBtnState({ text: 'Send Message →', style: {} }), 3000);
      return;
    }
    const mailto = `mailto:augustineninyung@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Augustine,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}`)}`;
    window.location.href = mailto;
    setBtnState({ text: '✓ Opening mail client...', style: { background: 'linear-gradient(135deg, #22c55e, #16a34a)' } });
    setTimeout(() => setBtnState({ text: 'Send Message →', style: {} }), 4000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="reveal-left">
            <div className="tag">// Let's Connect</div>
            <h2 className="contact-headline">
              Let's build<br />something <span>remarkable.</span>
            </h2>
            <p className="contact-body">
              Whether you're a recruiter with an exciting opportunity, a team looking for a passionate
              front-end developer, or a founder who needs a product-minded engineer — I'd love to hear
              from you.
            </p>
            <div className="contact-links">
              <a href="https://github.com/augustineninyung" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="cli-icon cli-github">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--white)' }}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div className="cli-text">
                  <div className="cli-label">GitHub</div>
                  <div className="cli-value">github.com/augustineninyung</div>
                </div>
                <span style={{ color: 'var(--muted)', marginLeft: 'auto' }}>↗</span>
              </a>

              <a href="https://linkedin.com/in/augustineninyung" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="cli-icon cli-linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="cli-text">
                  <div className="cli-label">LinkedIn</div>
                  <div className="cli-value">linkedin.com/in/augustineninyung</div>
                </div>
                <span style={{ color: 'var(--muted)', marginLeft: 'auto' }}>↗</span>
              </a>

              <a href="mailto:augustineninyung@gmail.com" className="contact-link-item">
                <div className="cli-icon cli-email">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="cli-text">
                  <div className="cli-label">Email</div>
                  <div className="cli-value">augustineninyung@gmail.com</div>
                </div>
                <span style={{ color: 'var(--muted)', marginLeft: 'auto' }}>↗</span>
              </a>
            </div>
          </div>

          <div className="contact-form card reveal-right">
            <h3 className="form-title">Send a message <span className="gold">✦</span></h3>
            <div className="form-group">
              <label className="form-label" htmlFor="fname">Your Name</label>
              <input className="form-input" id="fname" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="femail">Email Address</label>
              <input className="form-input" id="femail" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="fsubject">Subject</label>
              <input className="form-input" id="fsubject" name="subject" type="text" placeholder="Internship Opportunity / Collaboration" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="fmessage">Message</label>
              <textarea className="form-textarea" id="fmessage" name="message" placeholder="Tell me about the opportunity or what you're building..." value={form.message} onChange={handleChange}></textarea>
            </div>
            <button className="form-btn" style={btnState.style} onClick={handleSubmit}>
              {btnState.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
