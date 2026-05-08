'use client';

import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  level: number;
  icon: string;
}

interface TechCategory {
  title: string;
  icon: string;
  color: string;
  items: TechItem[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Frontend',
    icon: '⚔',
    color: 'var(--accent-primary)',
    items: [
      { name: 'React', level: 90, icon: '⚛' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'TypeScript', level: 80, icon: '◆' },
      { name: 'HTML/CSS', level: 95, icon: '◇' },
      { name: 'Tailwind CSS', level: 85, icon: '◈' },
      { name: 'JavaScript', level: 90, icon: '◉' },
    ],
  },
  {
    title: 'Backend',
    icon: '🛡',
    color: 'var(--accent-info)',
    items: [
      { name: 'Node.js', level: 80, icon: '◆' },
      { name: 'Python', level: 75, icon: '◇' },
      { name: 'Laravel', level: 85, icon: '◈' },
      { name: 'PHP', level: 80, icon: '◉' },
      { name: 'PostgreSQL', level: 70, icon: '◎' },
      { name: 'MySQL', level: 80, icon: '◆' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🧪',
    color: 'var(--accent-tertiary)',
    items: [
      { name: 'Git', level: 90, icon: '◆' },
      { name: 'Docker', level: 70, icon: '◇' },
      { name: 'Linux', level: 75, icon: '◈' },
      { name: 'VS Code', level: 95, icon: '◉' },
      { name: 'Figma', level: 65, icon: '◎' },
      { name: 'CI/CD', level: 60, icon: '◆' },
    ],
  },
];

function getXPLabel(level: number): string {
  if (level >= 90) return 'MASTER';
  if (level >= 80) return 'EXPERT';
  if (level >= 70) return 'ADVANCED';
  if (level >= 60) return 'SKILLED';
  return 'LEARNING';
}

export default function TechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleBars, setVisibleBars] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
            if (entry.target.id === 'tech-content') {
              setVisibleBars(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const currentCategory = TECH_CATEGORIES[activeCategory];

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="section"
      style={{ position: 'relative', minHeight: 'calc(100vh - 120px)', transition: 'background 0.3s' }}
    >
      <div className="pixel-grid-bg" />

      <h2 className="section-title reveal" style={{ opacity: 0 }}>
        ⚔ Tech Arsenal
      </h2>
      <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
        Weapons and skills acquired on my journey
      </p>

      {/* Category Selector — RPG style tabs */}
      <div
        className="reveal"
        style={{
          opacity: 0,
          animationDelay: '0.2s',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}
      >
        {TECH_CATEGORIES.map((cat, i) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(i)}
            className="pixel-card"
            style={{
              padding: '16px 24px',
              cursor: 'pointer',
              border: 'none',
              textAlign: 'center',
              background: activeCategory === i ? cat.color : 'var(--bg-card)',
              color: activeCategory === i ? '#fff' : 'var(--text-primary)',
              transform: activeCategory === i ? 'translateY(-4px)' : 'none',
              boxShadow: activeCategory === i
                ? `4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color), 0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color), 0 8px 0 0 rgba(0,0,0,0.2)`
                : `4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color), 0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color)`,
              fontFamily: 'var(--font-pixel-heading), monospace',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{cat.icon}</div>
            <div style={{ fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {cat.title}
            </div>
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div
        id="tech-content"
        className="reveal"
        style={{
          opacity: 0,
          animationDelay: '0.3s',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <div className="pixel-dialog" style={{ padding: '32px' }}>
          {/* Category Header */}
          <div
            style={{
              fontFamily: 'var(--font-pixel-heading), monospace',
              fontSize: '0.7rem',
              color: currentCategory.color,
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>{'═'.repeat(6)}</span>
            <span>{currentCategory.icon} {currentCategory.title} Skills</span>
            <span>{'═'.repeat(6)}</span>
          </div>

          {/* Skill Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {currentCategory.items.map((item, i) => (
              <div key={item.name}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.5rem',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: currentCategory.color }}>{item.icon}</span>
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.4rem',
                      color: currentCategory.color,
                      textTransform: 'uppercase',
                    }}
                  >
                    {getXPLabel(item.level)} — {item.level}%
                  </span>
                </div>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: visibleBars ? `${item.level}%` : '0%',
                      background: currentCategory.color,
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Total XP */}
          <div
            style={{
              marginTop: '24px',
              textAlign: 'center',
              padding: '12px',
              background: 'var(--bg-secondary)',
              boxShadow: `
                2px 0 0 0 var(--border-color),
                -2px 0 0 0 var(--border-color),
                0 2px 0 0 var(--border-color),
                0 -2px 0 0 var(--border-color)
              `,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-pixel-heading), monospace',
                fontSize: '0.45rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Total {currentCategory.title} XP:{' '}
              <span style={{ color: currentCategory.color }}>
                {Math.round(currentCategory.items.reduce((sum, item) => sum + item.level, 0) / currentCategory.items.length)}%
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
