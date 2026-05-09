'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    role: 'Mahasiswa IT & AI Explorer',
    company: 'Universitas Catur Insan Cendekia',
    period: '2025 — Sekarang',
    type: 'Pendidikan & Eksplorasi',
    description:
      'Mendalami kecerdasan buatan (AI) secara komprehensif. Mulai dari pemahaman dasar konsep AI, cara melatih model AI, hingga mengintegrasikan AI ke dalam aplikasi dan website modern. Secara bersamaan juga terus meningkatkan skill web development dan mengeksplorasi pembuatan aplikasi.',
    achievements: [
      'Mempelajari dan menerapkan framework Next.js untuk project website modern',
      'Memahami konsep dasar AI dan cara melatih model kecerdasan buatan',
      'Melakukan eksplorasi integrasi AI ke dalam aplikasi dan web',
      'Mulai melakukan riset (research) dan belajar tentang Mobile Development',
    ],
    skills: ['Next.js', 'AI Integration', 'Python', 'Mobile Dev (Learning)'],
    color: 'var(--accent-primary)',
  },
  {
    role: 'Web Development Enthusiast',
    company: 'Belajar Otodidak (SMA)',
    period: '2022 — 2025',
    type: 'Self-Taught',
    description:
      'Memulai perjalanan di dunia pemrograman secara mandiri dari internet. Membangun fondasi yang kuat di bidang web development sebelum akhirnya berfokus pada teknologi yang lebih modern.',
    achievements: [
      'Menguasai fundamental web menggunakan HTML, CSS, dan JavaScript (Vanilla)',
      'Mempelajari dan menggunakan framework Laravel untuk membangun website dinamis',
      'Membangun berbagai project-project kecil untuk melatih logika pemrograman',
    ],
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Laravel'],
    color: 'var(--accent-info)',
  },
];

const CERTIFICATIONS = [
  { name: 'Medali Emas Olimpiade Matematika', issuer: 'Kompetisi Nasional / Daerah', year: 'SMA', color: 'var(--accent-secondary)' },
  { name: 'Juara 3 Lomba Cerdas Cermat', issuer: 'Kompetisi Antar Sekolah', year: 'SMA', color: 'var(--accent-info)' },
  { name: 'Dasar Pemrograman Web', issuer: 'Dicoding / Kursus Online', year: '2023', color: 'var(--accent-tertiary)' },
];

const CAREER_STATS = [
  { value: '3+', label: 'Tahun Belajar Coding', icon: '⏰' },
  { value: '10+', label: 'Project Latihan', icon: '📦' },
  { value: 'Pemula', label: 'Tingkat Saat Ini', icon: '🌱' },
  { value: 'AI', label: 'Fokus Eksplorasi', icon: '🧠' },
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

        <h2 className="section-title animate-slideUp" >★ Pengalaman Belajar</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Jejak perjalananku mengeksplorasi dunia teknologi
        </p>

        {/* Career Stats */}
        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.15s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '32px',
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
                className="animate-slideUp"
                style={{
                  animationDelay: `${0.2 + i * 0.15}s`,
                  display: 'flex',
                  gap: '16px',
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
                <div className="pixel-dialog" style={{ flex: 1, padding: '20px', minWidth: 0 }}>
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
                      ▸ Pencapaian & Fokus Belajar
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
        <h2 className="section-title animate-slideUp" >🏅 Sertifikasi & Pembelajaran</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Lencana yang didapatkan selama belajar
        </p>

        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.2s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
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
