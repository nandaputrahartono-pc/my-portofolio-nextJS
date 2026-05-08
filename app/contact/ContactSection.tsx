'use client';

import { useEffect, useRef, useState } from 'react';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="4" y="0" width="8" height="2" fill="currentColor" />
        <rect x="2" y="2" width="2" height="2" fill="currentColor" />
        <rect x="12" y="2" width="2" height="2" fill="currentColor" />
        <rect x="0" y="4" width="2" height="4" fill="currentColor" />
        <rect x="14" y="4" width="2" height="4" fill="currentColor" />
        <rect x="2" y="4" width="12" height="6" fill="currentColor" />
        <rect x="4" y="5" width="2" height="2" fill="var(--bg-card)" />
        <rect x="10" y="5" width="2" height="2" fill="var(--bg-card)" />
        <rect x="2" y="10" width="4" height="2" fill="currentColor" />
        <rect x="10" y="10" width="4" height="2" fill="currentColor" />
        <rect x="4" y="12" width="2" height="2" fill="currentColor" />
        <rect x="10" y="12" width="2" height="2" fill="currentColor" />
        <rect x="2" y="12" width="2" height="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="1" y="1" width="14" height="14" fill="currentColor" />
        <rect x="3" y="3" width="2" height="2" fill="var(--bg-card)" />
        <rect x="3" y="6" width="2" height="7" fill="var(--bg-card)" />
        <rect x="7" y="6" width="2" height="7" fill="var(--bg-card)" />
        <rect x="9" y="8" width="2" height="5" fill="var(--bg-card)" />
        <rect x="11" y="6" width="2" height="7" fill="var(--bg-card)" />
        <rect x="9" y="6" width="2" height="2" fill="var(--bg-card)" />
      </svg>
    ),
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="0" y="2" width="16" height="12" fill="currentColor" />
        <rect x="1" y="3" width="14" height="10" fill="var(--bg-card)" />
        <rect x="1" y="3" width="2" height="2" fill="currentColor" />
        <rect x="13" y="3" width="2" height="2" fill="currentColor" />
        <rect x="3" y="5" width="2" height="2" fill="currentColor" />
        <rect x="11" y="5" width="2" height="2" fill="currentColor" />
        <rect x="5" y="7" width="2" height="2" fill="currentColor" />
        <rect x="9" y="7" width="2" height="2" fill="currentColor" />
        <rect x="7" y="7" width="2" height="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="2" y="2" width="8" height="2" fill="currentColor" />
        <rect x="0" y="4" width="2" height="4" fill="currentColor" />
        <rect x="10" y="2" width="2" height="4" fill="currentColor" />
        <rect x="2" y="8" width="8" height="2" fill="currentColor" />
        <rect x="4" y="4" width="4" height="4" fill="currentColor" />
        <rect x="8" y="10" width="4" height="2" fill="currentColor" />
        <rect x="10" y="12" width="4" height="2" fill="currentColor" />
        <rect x="12" y="10" width="2" height="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{ position: 'relative', minHeight: 'calc(100vh - 120px)', transition: 'background 0.3s' }}
    >
      <div className="pixel-grid-bg" />

      <h2 className="section-title reveal" style={{ opacity: 0 }}>
        ✉ Contact
      </h2>
      <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
        Send a message to the quest board
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
        className="contact-grid"
      >
        {/* Contact Form */}
        <div className="reveal" style={{ opacity: 0, animationDelay: '0.2s' }}>
          <div className="pixel-dialog" style={{ padding: '32px' }}>
            <div
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.6rem',
                color: 'var(--accent-primary)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              ▸ New Message
            </div>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>✨</div>
                <div
                  style={{
                    fontFamily: 'var(--font-pixel-heading), monospace',
                    fontSize: '0.6rem',
                    color: 'var(--accent-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                  }}
                >
                  Message Sent!
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-pixel-body), monospace',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    marginTop: '8px',
                  }}
                >
                  Thanks for reaching out! I&apos;ll respond soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.45rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '6px',
                      display: 'block',
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="pixel-input"
                    placeholder="Enter your name..."
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.45rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '6px',
                      display: 'block',
                    }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="pixel-input"
                    placeholder="Enter your email..."
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.45rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '6px',
                      display: 'block',
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    className="pixel-textarea"
                    placeholder="Write your message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="pixel-btn" style={{ width: '100%', marginTop: '8px' }}>
                  ◈ Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="reveal" style={{ opacity: 0, animationDelay: '0.3s' }}>
          {/* Info Card */}
          <div className="pixel-dialog" style={{ padding: '32px', marginBottom: '24px' }}>
            <div
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.6rem',
                color: 'var(--accent-info)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              ▸ Contact Info
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Email', value: 'hello@nandaputra.dev', icon: '✉' },
                { label: 'Location', value: 'Indonesia 🇮🇩', icon: '📍' },
                { label: 'Availability', value: 'Open for opportunities', icon: '🟢' },
              ].map((info) => (
                <div
                  key={info.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: 'var(--bg-secondary)',
                    boxShadow: `
                      2px 0 0 0 var(--border-color),
                      -2px 0 0 0 var(--border-color),
                      0 2px 0 0 var(--border-color),
                      0 -2px 0 0 var(--border-color)
                    `,
                    transition: 'background 0.3s',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{info.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-pixel-heading), monospace',
                        fontSize: '0.4rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '2px',
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-pixel-body), monospace',
                        fontSize: '0.85rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="pixel-dialog" style={{ padding: '24px' }}>
            <div
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.6rem',
                color: 'var(--accent-secondary)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              ▸ Social Links
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
              }}
            >
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-card"
                  style={{
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                  }}
                >
                  {social.icon}
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="reveal"
        style={{
          opacity: 0,
          animationDelay: '0.4s',
          marginTop: '64px',
          textAlign: 'center',
          paddingTop: '32px',
          borderTop: '3px solid var(--border-light)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-pixel-heading), monospace',
            fontSize: '0.45rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          © 2026 Nanda Putra — Crafted with pixels & ❤️
        </div>
        <div
          style={{
            fontFamily: 'var(--font-pixel-heading), monospace',
            fontSize: '0.35rem',
            color: 'var(--text-muted)',
            marginTop: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            opacity: 0.6,
          }}
        >
          Built with Next.js + Pixel Art ✨
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
