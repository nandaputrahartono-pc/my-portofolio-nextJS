'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const EDUCATION = [
  {
    school: 'Universitas Catur Insan Cendekia',
    degree: 'S1 — Teknik Informatika',
    period: '2025 — Now',
    description: 'berfokus pada coding, AI, Pengembangan Web dan Aplikasi Mobile. Aktif dalam komunitas teknologi kampus dan proyek open source.',
    color: 'var(--accent-info)',
  },
  {
    school: 'SMA IT Nuurusshidiiq',
    degree: 'Kurikulum Merdeka - IPA',
    period: '2022 — 2025',
    description: 'Seharusnya aku masuk SMK, tetapi aku belajar mandiri dengan belajar coding dari internet, dan aku menyukai Matematika.',
    color: 'var(--accent-tertiary)',
  },
  {
    school: 'SMP IT Nuurusshidiiq',
    degree: 'IPA dan IPS',
    period: '2019 — 2022',
    description: 'Aku menemukan passionku dalam dunia teknologi, sehingga aku tertarik untuk mendalami coding, dan rencanaku masuk SMK',
    color: 'var(--accent-secondary)',
  },
  {
    school: 'SDN 1 Jadimulya',
    degree: 'Elementary School',
    period: '2013 — 2019',
    description: 'Dasar-dasar pendidikan yang membentuk fondasi pengetahuan dan keterampilan dasar.',
    color: 'var(--accent-primary)',
  },
  {
    school: 'TK Al-Huda',
    degree: 'Kindergarten',
    period: '2010 — 2013',
    description: 'Awal mula pengenalan dunia pendidikan dan sosial.',
    color: 'var(--accent-purple)',
  }
];

const HOBBIES = [
  { icon: '🎮', name: 'Gaming', desc: 'hack & slash, rpg, story games' },
  { icon: '📚', name: 'Reading', desc: 'Light novels & tech books' },
  { icon: '🎵', name: 'Music', desc: 'Jpop, Jrock, & Yorushika' },
  { icon: '🎬', name: 'Movies', desc: 'Sci-fi & action' },
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
            if (entry.target.classList.contains('education-timeline')) {
              entry.target.classList.add('education-timeline-active');
            } else if (entry.target.classList.contains('education-timeline-item')) {
              entry.target.classList.add('education-item-active');
            } else {
              entry.target.classList.add('animate-slideUp');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .education-timeline, .education-timeline-item');
    elements?.forEach((el) => observer.observe(el));

    const timeline = sectionRef.current?.querySelector('.education-timeline') as HTMLElement | null;

    const handleScroll = () => {
      if (!timeline) return;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when the top of the timeline reaches 75% of the viewport height
      const startDrawPos = windowHeight * 0.75;

      let progress = (startDrawPos - rect.top) / rect.height;
      progress = Math.max(0, Math.min(1, progress));

      timeline.style.setProperty('--timeline-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* ===== HERO BIO ===== */}
      <section id="about" className="section" style={{ position: 'relative', minHeight: 'calc(100vh - 120px)' }}>
        <div className="pixel-grid-bg" />

        <h2 className="section-title animate-slideUp" >☺ About Me</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Get to know the person behind the pixels
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 2fr)', gap: '32px', alignItems: 'start' }} className="about-grid">
          {/* Pixel Avatar */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
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
              <Image
                src="/profile.webp"
                alt="Nanda Putra Profile Photo"
                width={240}
                height={240}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
              />
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
                Nanda Putra Hartono
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Full Stack Developer, AI Enginer
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                📍Indonesia
              </div>
              <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <span className="pixel-tag" style={{ background: 'var(--accent-tertiary)', color: '#fff', padding: '3px 8px' }}>
                  LVL 5
                </span>
                <span className="pixel-tag" style={{ background: 'var(--accent-info)', color: '#fff', padding: '3px 8px' }}>
                  CLASS: DEV
                </span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div>
            <div className="pixel-dialog animate-slideUp" style={{ animationDelay: '0.3s', marginBottom: '24px' }}>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.6rem', color: 'var(--accent-primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                ▸ Player Bio
              </div>
              <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Halo! Aku Nanda Putra Hartono, Seorang Web Developer, Mobile Developer, dan AI Engineer. Aku sudah memiliki minat pada saat saya SMP
                dan belajar secara otodidak pada saat SMA, hingga sekarang. Di Universitas Catur Insan Cendikia juga, aku sudah belajar mendalami AI
                dan aku juga aktif dalam komunitas teknologi kampus serta proyek open source.
              </p>
              <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Aku mengembangkan website dengan menggunakan Vanilla HTML/CSS/JS dan Framework Next JS dan Laravel.
                Untuk aplikasi mobile, aku menngunakan bahahsa Dart dengan framework Flutter. 
                Sedangkan untuk AI, aku menggunakan Python untuk membangun model AI.
              </p>
              <p style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                Selain aku mengoding, aku mengisi waktu luangku dengan bermain game, mendengarkan musik, membaca buku, dan menonton film. Aku percaya bahwa keseimbangan antara kerja keras dan hiburan adalah kunci untuk tetap kreatif dan termotivasi.
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
              className="animate-slideUp"
              style={{
                animationDelay: '0.4s',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
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
        <h2 className="section-title animate-slideUp" >🎓 Education</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Where I leveled up my knowledge
        </p>

        <div className="education-timeline" style={{ maxWidth: '700px', margin: '0 auto' }}>
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="education-timeline-item"
              style={{
                animationDelay: `${0.2 + i * 0.15}s`,
                '--timeline-delay': `${i * 0.18}s`,
                display: 'flex',
                gap: '16px',
                marginBottom: '24px',
                position: 'relative',
              } as React.CSSProperties}
            >
              {/* Timeline Dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '32px', paddingTop: '20px' }}>
                <div
                  className="education-timeline-dot"
                  style={{
                    width: '16px',
                    height: '16px',
                    background: edu.color,
                    boxShadow: `3px 0 0 0 var(--border-color), -3px 0 0 0 var(--border-color), 0 3px 0 0 var(--border-color), 0 -3px 0 0 var(--border-color)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="pixel-dialog education-timeline-card" style={{ flex: 1, padding: '20px', minWidth: 0 }}>
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
        <h2 className="section-title animate-slideUp" >🌐 Languages</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Communication skills unlocked
        </p>

        <div className="animate-slideUp" style={{ animationDelay: '0.2s', maxWidth: '500px', margin: '0 auto' }}>
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
        <h2 className="section-title animate-slideUp" >🎮 Hobbies & Interests</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          What I do when I&apos;m AFK
        </p>

        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.2s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
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
        <h2 className="section-title animate-slideUp" >🏆 Fun Facts</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Player statistics & achievements
        </p>

        <div
          className="animate-slideUp"
          style={{
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
