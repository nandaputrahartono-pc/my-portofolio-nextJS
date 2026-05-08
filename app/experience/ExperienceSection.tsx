'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Startup Inc.',
    period: '2024 — Present',
    type: 'Full-time',
    description:
      'Building and maintaining scalable web applications using modern tech stack. Leading frontend architecture decisions, implementing CI/CD pipelines, and mentoring junior developers.',
    achievements: [
      'Led migration from CRA to Next.js, improving load times by 60%',
      'Built real-time dashboard serving 10,000+ daily users',
      'Mentored 3 junior developers into mid-level roles',
      'Implemented automated testing, achieving 85% code coverage',
    ],
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    color: 'var(--accent-primary)',
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2023 — 2024',
    type: 'Full-time',
    description:
      'Developed responsive and interactive user interfaces for diverse client projects across e-commerce, healthcare, and education sectors.',
    achievements: [
      'Delivered 12+ client projects on time and within budget',
      'Improved web performance scores from 45 to 92 on Lighthouse',
      'Created reusable component library used across all projects',
      'Reduced development time by 30% through workflow automation',
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Figma'],
    color: 'var(--accent-info)',
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2022 — 2023',
    type: 'Freelance',
    description:
      'Took on diverse client projects ranging from landing pages to full web applications. Built a strong foundation in web technologies and client communication.',
    achievements: [
      'Completed 20+ freelance projects with 5-star ratings',
      'Built e-commerce stores generating $50K+ in monthly revenue',
      'Developed custom CMS solutions for small businesses',
      'Maintained 100% client satisfaction rate',
    ],
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'WordPress'],
    color: 'var(--accent-tertiary)',
  },
];

const CERTIFICATIONS = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', color: 'var(--accent-secondary)' },
  { name: 'Meta Frontend Developer', issuer: 'Meta / Coursera', year: '2023', color: 'var(--accent-info)' },
  { name: 'Google IT Support', issuer: 'Google / Coursera', year: '2022', color: 'var(--accent-tertiary)' },
];

const CAREER_STATS = [
  { value: '2+', label: 'Years Experience', icon: '⏰' },
  { value: '30+', label: 'Projects Delivered', icon: '📦' },
  { value: '15+', label: 'Happy Clients', icon: '😊' },
  { value: '3', label: 'Certifications', icon: '🏅' },
];

export default function ExperienceSection() {
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
      {/* ===== EXPERIENCE MAIN ===== */}
      <section id="experience" className="section" style={{ position: 'relative', minHeight: 'calc(100vh - 120px)' }}>
        <div className="pixel-grid-bg" />

        <h2 className="section-title reveal" style={{ opacity: 0 }}>★ Experience</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          My adventure log through the tech realm
        </p>

        {/* Career Stats */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.15s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {CAREER_STATS.map((stat) => (
            <div key={stat.label} className="pixel-card" style={{ padding: '16px 24px', textAlign: 'center', minWidth: '130px' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{stat.icon}</div>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '1rem', color: 'var(--accent-primary)', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.4rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Timeline Line */}
          <div
            style={{
              position: 'absolute',
              left: '24px',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'var(--border-color)',
            }}
          />

          {/* Experience Entries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  opacity: 0,
                  animationDelay: `${0.2 + i * 0.15}s`,
                  display: 'flex',
                  gap: '32px',
                  position: 'relative',
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    width: '48px',
                    minWidth: '48px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '20px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      background: exp.color,
                      boxShadow: `4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color), 0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color)`,
                    }}
                  />
                </div>

                {/* Experience Card */}
                <div className="pixel-dialog" style={{ flex: 1, padding: '24px' }}>
                  {/* Badges */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span className="pixel-tag" style={{ background: exp.color, color: '#fff', padding: '4px 12px' }}>
                      {exp.period}
                    </span>
                    <span className="pixel-tag" style={{ padding: '4px 12px' }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.65rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', color: exp.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                    @ {exp.company}
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.45rem', color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                      ▸ Key Achievements
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {exp.achievements.map((achievement, ai) => (
                        <div
                          key={ai}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            padding: '8px 12px',
                            background: 'var(--bg-secondary)',
                            boxShadow: `2px 0 0 0 var(--border-light), -2px 0 0 0 var(--border-light), 0 2px 0 0 var(--border-light), 0 -2px 0 0 var(--border-light)`,
                            transition: 'background 0.3s',
                          }}
                        >
                          <span style={{ color: 'var(--accent-tertiary)', fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', marginTop: '2px' }}>★</span>
                          <span style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="pixel-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>🏅 Certifications</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Badges earned along the way
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="pixel-dialog" style={{ padding: '24px', textAlign: 'center' }}>
              {/* Badge icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 auto 16px',
                  background: cert.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color), 0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color)`,
                  fontSize: '1.2rem',
                }}
              >
                🏅
              </div>
              <h3 style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', lineHeight: '1.6' }}>
                {cert.name}
              </h3>
              <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                {cert.issuer}
              </div>
              <span className="pixel-tag" style={{ background: cert.color, color: '#fff', padding: '3px 10px' }}>
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
