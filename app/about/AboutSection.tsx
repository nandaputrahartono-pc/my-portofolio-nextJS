'use client';

import { useEffect, useRef } from 'react';

const EDUCATION = [
  {
    school: 'Universitas Teknologi Indonesia',
    degree: 'S1 — Teknik Informatika',
    period: '2020 — 2024',
    description: 'Focused on software engineering, algorithms, and web development. Active in coding communities and hackathons.',
    color: 'var(--accent-info)',
  },
  {
    school: 'SMA Negeri 1',
    degree: 'MIPA — Ilmu Pengetahuan Alam',
    period: '2017 — 2020',
    description: 'Discovered passion for programming and technology. Started learning web development through online courses.',
    color: 'var(--accent-tertiary)',
  },
];

const HOBBIES = [
  { icon: '🎮', name: 'Gaming', desc: 'RPGs, strategy, and indie games' },
  { icon: '📚', name: 'Reading', desc: 'Tech blogs & sci-fi novels' },
  { icon: '🎵', name: 'Music', desc: 'Lo-fi, chiptune, & ambient' },
  { icon: '☕', name: 'Coffee', desc: 'Fuel for coding sessions' },
  { icon: '🌏', name: 'Traveling', desc: 'Exploring new places' },
  { icon: '🎬', name: 'Movies', desc: 'Sci-fi & thriller' },
];

const FUN_FACTS = [
  { stat: '☕ 1000+', label: 'Cups of Coffee' },
  { stat: '⌨️ 500K+', label: 'Lines of Code' },
  { stat: '🐛 999+', label: 'Bugs Fixed' },
  { stat: '💡 50+', label: 'Ideas Noted' },
];

const LANGUAGES = [
  { name: 'Bahasa Indonesia', level: 100, label: 'Native' },
  { name: 'English', level: 80, label: 'Professional' },
  { name: 'Japanese', level: 25, label: 'Learning' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef}>
      {/* ===== HERO BIO ===== */}
      <section id="about" className="section" style={{ position: 'relative', minHeight: 'calc(100vh - 120px)' }}>
        <div className="pixel-grid-bg" />

        <h2 className="section-title reveal" style={{ opacity: 0 }}>☺ About Me</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Get to know the person behind the pixels
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '40px', alignItems: 'start' }} className="about-grid">
          {/* Pixel Avatar */}
          <div className="reveal" style={{ opacity: 0, animationDelay: '0.2s' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '240px',
                aspectRatio: '1',
                margin: '0 auto',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `
                  4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color),
                  0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color),
                  8px 4px 0 0 var(--border-color), -8px 4px 0 0 var(--border-color),
                  8px -4px 0 0 var(--border-color), -8px -4px 0 0 var(--border-color),
                  4px 8px 0 0 var(--border-color), -4px 8px 0 0 var(--border-color),
                  4px -8px 0 0 var(--border-color), -4px -8px 0 0 var(--border-color)
                `,
                position: 'relative',
                overflow: 'hidden',
                transition: 'background 0.3s',
              }}
            >
              <svg width="160" height="160" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
                <rect x="5" y="0" width="6" height="1" fill="var(--accent-primary)" />
                <rect x="3" y="1" width="10" height="2" fill="var(--accent-primary)" />
                <rect x="4" y="2" width="8" height="2" fill="var(--accent-secondary)" />
                <rect x="4" y="4" width="8" height="5" fill="#ffcc99" />
                <rect x="3" y="5" width="1" height="3" fill="#ffcc99" />
                <rect x="12" y="5" width="1" height="3" fill="#ffcc99" />
                <rect x="5" y="5" width="2" height="2" fill="var(--border-color)" />
                <rect x="9" y="5" width="2" height="2" fill="var(--border-color)" />
                <rect x="6" y="5" width="1" height="1" fill="#fff" />
                <rect x="10" y="5" width="1" height="1" fill="#fff" />
                <rect x="6" y="8" width="1" height="1" fill="var(--accent-primary)" />
                <rect x="7" y="8" width="2" height="1" fill="var(--accent-primary)" />
                <rect x="9" y="8" width="1" height="1" fill="var(--accent-primary)" />
                <rect x="4" y="9" width="8" height="4" fill="var(--accent-info)" />
                <rect x="6" y="9" width="4" height="1" fill="var(--accent-secondary)" />
                <rect x="2" y="10" width="2" height="3" fill="#ffcc99" />
                <rect x="12" y="10" width="2" height="3" fill="#ffcc99" />
                <rect x="5" y="13" width="2" height="2" fill="var(--accent-secondary)" />
                <rect x="9" y="13" width="2" height="2" fill="var(--accent-secondary)" />
                <rect x="4" y="15" width="3" height="1" fill="var(--border-color)" />
                <rect x="9" y="15" width="3" height="1" fill="var(--border-color)" />
              </svg>
              <div style={{ position: 'absolute', top: '8px', left: '8px', width: '8px', height: '8px', borderTop: '3px solid var(--accent-primary)', borderLeft: '3px solid var(--accent-primary)' }} />
              <div style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', borderTop: '3px solid var(--accent-primary)', borderRight: '3px solid var(--accent-primary)' }} />
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '8px', height: '8px', borderBottom: '3px solid var(--accent-primary)', borderLeft: '3px solid var(--accent-primary)' }} />
              <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '8px', height: '8px', borderBottom: '3px solid var(--accent-primary)', borderRight: '3px solid var(--accent-primary)' }} />
            </div>

            {/* Player Card below avatar */}
            <div
              className="pixel-dialog"
              style={{ marginTop: '24px', padding: '16px', textAlign: 'center', maxWidth: '240px', marginLeft: 'auto', marginRight: 'auto' }}
            >
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Player Card
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.6rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                Nanda Putra
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Full Stack Developer
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                📍 Indonesia
              </div>
              <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <span className="pixel-tag" style={{ background: 'var(--accent-tertiary)', color: '#fff', padding: '3px 8px' }}>
                  LVL 24
                </span>
                <span className="pixel-tag" style={{ background: 'var(--accent-info)', color: '#fff', padding: '3px 8px' }}>
                  CLASS: DEV
                </span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <div className="pixel-dialog reveal" style={{ opacity: 0, animationDelay: '0.3s', marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.6rem', color: 'var(--accent-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                ▸ Player Bio
              </div>
              <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Hello! I&apos;m Nanda Putra, a Full Stack Developer from Indonesia. I started
                my coding journey back in high school when I built my first website, and
                I&apos;ve been hooked ever since.
              </p>
              <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                I specialize in building modern web applications using React, Next.js, and
                Laravel. I love turning complex problems into simple, beautiful solutions
                and I&apos;m always eager to learn new technologies.
              </p>
              <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                When I&apos;m not coding, you&apos;ll find me gaming, exploring new tech,
                or brewing the perfect cup of coffee. ☕
              </p>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '14px',
                  background: 'var(--accent-primary)',
                  marginLeft: '4px',
                  animation: 'blink 1s step-end infinite',
                  verticalAlign: 'text-bottom',
                }}
              />
            </div>

            {/* Quick Info Cards */}
            <div
              className="reveal"
              style={{
                opacity: 0,
                animationDelay: '0.4s',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
              }}
            >
              {[
                { icon: '🎓', title: 'Education', value: 'Teknik Informatika' },
                { icon: '📍', title: 'Location', value: 'Indonesia' },
                { icon: '🎮', title: 'Interests', value: 'Gaming & Tech' },
                { icon: '💼', title: 'Status', value: 'Open to Work' },
                { icon: '🗓️', title: 'Experience', value: '2+ Years' },
                { icon: '🌐', title: 'Work Mode', value: 'Remote / Hybrid' },
              ].map((info) => (
                <div key={info.title} className="pixel-card" style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>{info.icon}</div>
                  <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.4rem', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                    {info.title}
                  </div>
                  <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION TIMELINE ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>🎓 Education</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Where I leveled up my knowledge
        </p>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                opacity: 0,
                animationDelay: `${0.2 + i * 0.15}s`,
                display: 'flex',
                gap: '24px',
                marginBottom: '24px',
                position: 'relative',
              }}
            >
              {/* Timeline Dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '32px', paddingTop: '20px' }}>
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    background: edu.color,
                    boxShadow: `3px 0 0 0 var(--border-color), -3px 0 0 0 var(--border-color), 0 3px 0 0 var(--border-color), 0 -3px 0 0 var(--border-color)`,
                  }}
                />
                {i < EDUCATION.length - 1 && (
                  <div style={{ width: '4px', flex: 1, background: 'var(--border-color)', marginTop: '8px' }} />
                )}
              </div>

              {/* Content */}
              <div className="pixel-dialog" style={{ flex: 1, padding: '24px' }}>
                <span className="pixel-tag" style={{ background: edu.color, color: '#fff', padding: '4px 12px', marginBottom: '12px', display: 'inline-block' }}>
                  {edu.period}
                </span>
                <h3 style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.6rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px', marginTop: '8px' }}>
                  {edu.school}
                </h3>
                <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.45rem', color: edu.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                  {edu.degree}
                </div>
                <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>🌐 Languages</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Communication skills unlocked
        </p>

        <div className="reveal" style={{ opacity: 0, animationDelay: '0.2s', maxWidth: '500px', margin: '0 auto' }}>
          <div className="pixel-dialog" style={{ padding: '28px' }}>
            {LANGUAGES.map((lang) => (
              <div key={lang.name} style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {lang.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.4rem', color: 'var(--accent-info)', textTransform: 'uppercase' }}>
                    {lang.label}
                  </span>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: `${lang.level}%`, background: 'var(--accent-info)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOBBIES ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>🎮 Hobbies & Interests</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          What I do when I&apos;m AFK
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          {HOBBIES.map((hobby) => (
            <div key={hobby.name} className="pixel-card" style={{ padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{hobby.icon}</div>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                {hobby.name}
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {hobby.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FUN FACTS ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>🏆 Fun Facts</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Player statistics & achievements
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {FUN_FACTS.map((fact) => (
            <div
              key={fact.label}
              className="pixel-dialog"
              style={{ padding: '24px 32px', textAlign: 'center', minWidth: '160px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-pixel-heading), monospace',
                  fontSize: '1rem',
                  color: 'var(--accent-secondary)',
                  marginBottom: '8px',
                }}
              >
                {fact.stat}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-pixel-heading), monospace',
                  fontSize: '0.4rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
