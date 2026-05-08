'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const FEATURED_PROJECTS = [
  {
    title: 'AI Chat Platform',
    description: 'Intelligent chatbot with NLP & context-aware responses.',
    tags: ['Python', 'FastAPI', 'TensorFlow'],
    color: 'var(--accent-purple)',
  },
  {
    title: 'CloudSync Dashboard',
    description: 'Real-time cloud monitoring with data visualizations.',
    tags: ['Next.js', 'WebSocket', 'D3.js'],
    color: 'var(--accent-info)',
  },
  {
    title: 'E-Commerce Engine',
    description: 'Scalable backend with payments & analytics.',
    tags: ['Laravel', 'MySQL', 'Redis'],
    color: 'var(--accent-secondary)',
  },
];

const TECH_ICONS = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: 'var(--text-primary)' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'Python', color: '#ffd43b' },
  { name: 'Laravel', color: '#ff2d20' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Git', color: '#f05032' },
];

const LATEST_EXPERIENCE = {
  role: 'Full Stack Developer',
  company: 'Tech Startup Inc.',
  period: '2024 — Present',
  highlights: [
    'Led frontend architecture with React & Next.js',
    'Built REST & GraphQL APIs serving 10k+ users',
    'Mentored 3 junior developers',
  ],
};

export default function HeroSection() {
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
      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        style={{
          minHeight: 'calc(100vh - 120px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 24px 80px',
          position: 'relative',
          zIndex: 1,
          background: 'var(--gradient-hero)',
        }}
      >
        <div className="pixel-grid-bg" />

        {/* Floating Pixel Stars */}
        {[
          { top: '15%', left: '10%', delay: '0s' },
          { top: '25%', right: '15%', delay: '0.5s' },
          { top: '60%', left: '5%', delay: '1s' },
          { top: '70%', right: '8%', delay: '1.5s' },
          { top: '40%', left: '85%', delay: '0.7s' },
          { top: '80%', left: '20%', delay: '2s' },
          { top: '10%', left: '50%', delay: '0.3s' },
          { top: '50%', right: '20%', delay: '1.2s' },
        ].map((star, i) => (
          <div
            key={i}
            className="pixel-star"
            style={{ ...star, animationDelay: star.delay, opacity: 0.6 }}
          />
        ))}

        {/* Pixel Character */}
        <div className="reveal" style={{ opacity: 0, marginBottom: '32px', animationDelay: '0.1s' }}>
          <div className="animate-float">
            <svg width="80" height="80" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
              <rect x="4" y="0" width="8" height="2" fill="var(--accent-secondary)" />
              <rect x="3" y="1" width="10" height="2" fill="var(--accent-secondary)" />
              <rect x="4" y="3" width="8" height="5" fill="#ffcc99" />
              <rect x="3" y="4" width="1" height="3" fill="#ffcc99" />
              <rect x="12" y="4" width="1" height="3" fill="#ffcc99" />
              <rect x="5" y="4" width="2" height="2" fill="var(--border-color)" />
              <rect x="9" y="4" width="2" height="2" fill="var(--border-color)" />
              <rect x="6" y="4" width="1" height="1" fill="#fff" />
              <rect x="10" y="4" width="1" height="1" fill="#fff" />
              <rect x="6" y="7" width="4" height="1" fill="var(--accent-primary)" />
              <rect x="4" y="8" width="8" height="4" fill="var(--accent-info)" />
              <rect x="3" y="9" width="1" height="3" fill="var(--accent-info)" />
              <rect x="12" y="9" width="1" height="3" fill="var(--accent-info)" />
              <rect x="1" y="9" width="2" height="2" fill="#ffcc99" />
              <rect x="13" y="9" width="2" height="2" fill="#ffcc99" />
              <rect x="5" y="12" width="2" height="3" fill="var(--accent-secondary)" />
              <rect x="9" y="12" width="2" height="3" fill="var(--accent-secondary)" />
              <rect x="4" y="15" width="3" height="1" fill="var(--border-color)" />
              <rect x="9" y="15" width="3" height="1" fill="var(--border-color)" />
            </svg>
          </div>
        </div>

        {/* Greeting Badge */}
        <div className="reveal" style={{ opacity: 0, animationDelay: '0.2s', marginBottom: '16px' }}>
          <span
            className="pixel-tag"
            style={{ background: 'var(--accent-tertiary)', color: '#0d1a12', padding: '6px 16px', fontSize: '0.55rem' }}
          >
            👋 Hello World!
          </span>
        </div>

        {/* Main Title */}
        <h1
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.3s',
            fontFamily: 'var(--font-pixel-heading), monospace',
            fontSize: 'clamp(1.2rem, 4vw, 2.2rem)',
            textAlign: 'center',
            lineHeight: '2',
            marginBottom: '8px',
            color: 'var(--text-primary)',
          }}
        >
          I&apos;m <span style={{ color: 'var(--accent-primary)' }}>Nanda Putra</span>
        </h1>

        {/* Subtitle */}
        <p
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.4s',
            fontFamily: 'var(--font-pixel-body), monospace',
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: '1.8',
            marginBottom: '32px',
          }}
        >
          A passionate Full Stack Developer crafting
          <br />
          digital experiences with pixels and code ✨
        </p>

        {/* CTA Buttons */}
        <div
          className="reveal"
          style={{ opacity: 0, animationDelay: '0.5s', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <Link href="/projects" className="pixel-btn" style={{ textDecoration: 'none' }}>
            View Projects
          </Link>
          <Link href="/contact" className="pixel-btn pixel-btn-secondary" style={{ textDecoration: 'none' }}>
            Contact Me
          </Link>
        </div>

        {/* Stats Row */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.6s',
            display: 'flex',
            gap: '32px',
            marginTop: '64px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { value: '10+', label: 'Projects' },
            { value: '2+', label: 'Years Exp' },
            { value: '15+', label: 'Technologies' },
            { value: '500+', label: 'Commits' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                textAlign: 'center',
                padding: '16px 24px',
                background: 'var(--bg-card)',
                boxShadow: `3px 0 0 0 var(--border-color), -3px 0 0 0 var(--border-color), 0 3px 0 0 var(--border-color), 0 -3px 0 0 var(--border-color)`,
                transition: 'background 0.3s',
              }}
            >
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.45rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <div
            className="animate-bounce"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-muted)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '3px' }}>
              Scroll Down
            </span>
            <span style={{ fontSize: '1.5rem' }}>▼</span>
          </div>
        </div>
      </section>

      {/* ===== WHAT I DO SECTION ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>◈ What I Do</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Skills and services I bring to the party
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {[
            {
              icon: '🖥️',
              title: 'Frontend Development',
              desc: 'Building responsive and interactive UIs with React, Next.js, and modern CSS. Pixel-perfect designs that work on every device.',
              color: 'var(--accent-primary)',
            },
            {
              icon: '⚙️',
              title: 'Backend Development',
              desc: 'Designing scalable APIs and server-side logic with Node.js, Laravel, and Python. Database design & optimization.',
              color: 'var(--accent-info)',
            },
            {
              icon: '🎨',
              title: 'UI/UX Design',
              desc: 'Creating intuitive and beautiful user experiences. From wireframes to high-fidelity prototypes with a focus on usability.',
              color: 'var(--accent-secondary)',
            },
            {
              icon: '🤖',
              title: 'AI & Automation',
              desc: 'Integrating AI solutions — chatbots, content generation, and intelligent automation to enhance user experiences.',
              color: 'var(--accent-purple)',
            },
          ].map((service) => (
            <div key={service.title} className="pixel-dialog" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{service.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-pixel-heading), monospace',
                  fontSize: '0.55rem',
                  color: service.color,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-pixel-body), monospace',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED PROJECTS PREVIEW ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>✦ Featured Projects</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          A sneak peek at my latest quests
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {FEATURED_PROJECTS.map((project) => (
            <div key={project.title} className="pixel-card" style={{ padding: 0, overflow: 'hidden' }}>
              {/* Project Header */}
              <div
                style={{
                  height: '100px',
                  background: `linear-gradient(135deg, ${project.color}, var(--bg-secondary))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(-45deg, rgba(0,0,0,0.05) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0,0,0,0.05) 75%), linear-gradient(-45deg, transparent 75%, rgba(0,0,0,0.05) 75%)`,
                    backgroundSize: '8px 8px',
                    backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
                  }}
                />
                <svg width="36" height="36" viewBox="0 0 12 12" style={{ imageRendering: 'pixelated', opacity: 0.8 }}>
                  <rect x="2" y="1" width="8" height="2" fill="#fff" />
                  <rect x="1" y="3" width="10" height="6" fill="#fff" />
                  <rect x="3" y="9" width="6" height="1" fill="#fff" />
                  <rect x="4" y="10" width="4" height="1" fill="#fff" />
                </svg>
              </div>
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-pixel-heading), monospace',
                    fontSize: '0.6rem',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-pixel-body), monospace',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    marginBottom: '12px',
                  }}
                >
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pixel-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ opacity: 0, animationDelay: '0.3s', textAlign: 'center' }}>
          <Link href="/projects" className="pixel-btn pixel-btn-secondary" style={{ textDecoration: 'none' }}>
            View All Projects →
          </Link>
        </div>
      </section>

      {/* ===== TECH STACK PREVIEW ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>⚔ Tech Stack</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Tools in my arsenal
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          {TECH_ICONS.map((tech) => (
            <div
              key={tech.name}
              className="pixel-card"
              style={{
                padding: '16px 24px',
                textAlign: 'center',
                minWidth: '100px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  background: tech.color,
                  margin: '0 auto 8px',
                  boxShadow: `2px 0 0 0 var(--border-color), -2px 0 0 0 var(--border-color), 0 2px 0 0 var(--border-color), 0 -2px 0 0 var(--border-color)`,
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-pixel-heading), monospace',
                  fontSize: '0.4rem',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ opacity: 0, animationDelay: '0.3s', textAlign: 'center' }}>
          <Link href="/tech" className="pixel-btn pixel-btn-secondary" style={{ textDecoration: 'none' }}>
            Full Arsenal →
          </Link>
        </div>
      </section>

      {/* ===== LATEST EXPERIENCE PREVIEW ===== */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="pixel-grid-bg" />
        <h2 className="section-title reveal" style={{ opacity: 0 }}>★ Current Quest</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Where I&apos;m adventuring right now
        </p>

        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            maxWidth: '700px',
            margin: '0 auto 32px',
          }}
        >
          <div className="pixel-dialog" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span
                className="pixel-tag"
                style={{ background: 'var(--accent-tertiary)', color: '#fff', padding: '4px 12px' }}
              >
                🟢 Active
              </span>
              <span
                className="pixel-tag"
                style={{ background: 'var(--accent-info)', color: '#fff', padding: '4px 12px' }}
              >
                {LATEST_EXPERIENCE.period}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.7rem',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '4px',
              }}
            >
              {LATEST_EXPERIENCE.role}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.5rem',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              @ {LATEST_EXPERIENCE.company}
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {LATEST_EXPERIENCE.highlights.map((highlight, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px',
                    background: 'var(--bg-secondary)',
                    boxShadow: `2px 0 0 0 var(--border-color), -2px 0 0 0 var(--border-color), 0 2px 0 0 var(--border-color), 0 -2px 0 0 var(--border-color)`,
                    transition: 'background 0.3s',
                  }}
                >
                  <span style={{ color: 'var(--accent-tertiary)', fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.6rem' }}>▸</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel-body), monospace',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal" style={{ opacity: 0, animationDelay: '0.3s', textAlign: 'center' }}>
          <Link href="/experience" className="pixel-btn pixel-btn-secondary" style={{ textDecoration: 'none' }}>
            Full Adventure Log →
          </Link>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="pixel-grid-bg" />
        <div className="reveal" style={{ opacity: 0 }}>
          <div className="pixel-dialog" style={{ padding: '48px 32px', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ fontSize: '2rem', marginBottom: '16px' }}>💬</div>
            <h2
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.8rem',
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '16px',
              }}
            >
              Let&apos;s Build Something!
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-pixel-body), monospace',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '24px',
              }}
            >
              Got an idea? A project? Just want to say hi?
              <br />
              I&apos;m always open for a chat!
            </p>
            <Link href="/contact" className="pixel-btn" style={{ textDecoration: 'none' }}>
              ✉ Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
