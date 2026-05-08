'use client';

import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  category: string;
  status: string;
  progress: number;
  stars: number;
  commits: number;
}

const PROJECTS: Project[] = [
  {
    title: 'Pixel Quest RPG',
    description: 'A retro-style RPG web game built with modern web technologies. Features pixel art graphics, turn-based combat, and an immersive storyline with 20+ levels.',
    tags: ['React', 'TypeScript', 'Canvas API', 'Howler.js'],
    color: 'var(--accent-primary)',
    category: 'web',
    status: 'Complete',
    progress: 100,
    stars: 45,
    commits: 234,
  },
  {
    title: 'CloudSync Dashboard',
    description: 'A real-time cloud monitoring dashboard with beautiful data visualizations, intelligent alerting, and multi-region support for DevOps teams.',
    tags: ['Next.js', 'WebSocket', 'D3.js', 'Tailwind'],
    color: 'var(--accent-info)',
    category: 'web',
    status: 'Complete',
    progress: 100,
    stars: 32,
    commits: 187,
  },
  {
    title: 'TaskForge Mobile',
    description: 'A productivity app with gamification elements. Complete tasks, earn XP, level up your character, and compete with friends on the leaderboard.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    color: 'var(--accent-tertiary)',
    category: 'mobile',
    status: 'In Progress',
    progress: 75,
    stars: 18,
    commits: 156,
  },
  {
    title: 'AI Chat Platform',
    description: 'An intelligent chatbot platform powered by machine learning. Features NLP, context-aware responses, multi-language support, and conversation history.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis'],
    color: 'var(--accent-purple)',
    category: 'ai',
    status: 'Complete',
    progress: 100,
    stars: 67,
    commits: 312,
  },
  {
    title: 'E-Commerce Engine',
    description: 'A scalable e-commerce backend with inventory management, payment processing, analytics dashboard, and multi-vendor support.',
    tags: ['Laravel', 'MySQL', 'Redis', 'Stripe'],
    color: 'var(--accent-secondary)',
    category: 'web',
    status: 'Complete',
    progress: 100,
    stars: 28,
    commits: 245,
  },
  {
    title: 'DevOps Pipeline',
    description: 'Automated CI/CD pipeline tool with container orchestration, monitoring, one-click deployment, and rollback capabilities.',
    tags: ['Docker', 'GitHub Actions', 'AWS', 'Terraform'],
    color: 'var(--accent-info)',
    category: 'tools',
    status: 'In Progress',
    progress: 60,
    stars: 12,
    commits: 89,
  },
];

const FILTERS = [
  { id: 'all', label: 'All', icon: '◆' },
  { id: 'web', label: 'Web', icon: '◈' },
  { id: 'mobile', label: 'Mobile', icon: '◇' },
  { id: 'ai', label: 'AI', icon: '◉' },
  { id: 'tools', label: 'Tools', icon: '◎' },
];

// Seeded pseudo-random to avoid hydration mismatch (no Math.random)
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateContributions(): number[][] {
  const weeks = 20;
  const days = 7;
  const data: number[][] = [];
  let seed = 42;
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      seed++;
      const rand = seededRandom(seed);
      if (rand < 0.3) week.push(0);
      else if (rand < 0.55) week.push(1);
      else if (rand < 0.75) week.push(2);
      else if (rand < 0.9) week.push(3);
      else week.push(4);
    }
    data.push(week);
  }
  return data;
}

const CONTRIBUTIONS = generateContributions();

function getContribColor(level: number): string {
  switch (level) {
    case 0: return 'var(--bg-secondary)';
    case 1: return 'rgba(39, 174, 96, 0.3)';
    case 2: return 'rgba(39, 174, 96, 0.5)';
    case 3: return 'rgba(39, 174, 96, 0.7)';
    case 4: return 'var(--accent-tertiary)';
    default: return 'var(--bg-secondary)';
  }
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const totalCommits = PROJECTS.reduce((sum, p) => sum + p.commits, 0);
  const totalStars = PROJECTS.reduce((sum, p) => sum + p.stars, 0);

  return (
    <div ref={sectionRef}>
      {/* ===== PROJECT STATS ===== */}
      <section id="projects" className="section" style={{ position: 'relative', minHeight: 'calc(100vh - 120px)' }}>
        <div className="pixel-grid-bg" />

        <h2 className="section-title reveal" style={{ opacity: 0 }}>✦ My Projects</h2>
        <p className="section-subtitle reveal" style={{ opacity: 0, animationDelay: '0.1s' }}>
          Quest log of completed adventures
        </p>

        {/* Stats Overview */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.15s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {[
            { value: PROJECTS.length.toString(), label: 'Projects', icon: '📁' },
            { value: totalCommits.toString(), label: 'Total Commits', icon: '⌨️' },
            { value: totalStars.toString(), label: 'Total Stars', icon: '⭐' },
            { value: PROJECTS.filter(p => p.status === 'Complete').length.toString(), label: 'Completed', icon: '✅' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="pixel-card"
              style={{ padding: '16px 24px', textAlign: 'center', minWidth: '130px' }}
            >
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

        {/* Contribution Graph */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.2s',
            marginBottom: '40px',
          }}
        >
          <div className="pixel-dialog" style={{ padding: '24px', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.55rem', color: 'var(--accent-tertiary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', textAlign: 'center' }}>
              ▸ Contribution Activity
            </div>
            <div style={{ display: 'flex', gap: '3px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {CONTRIBUTIONS.map((week, wi) => (
                <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {week.map((level, di) => (
                    <div
                      key={di}
                      style={{
                        width: '12px',
                        height: '12px',
                        background: getContribColor(level),
                        boxShadow: `1px 0 0 0 var(--border-light), -1px 0 0 0 var(--border-light), 0 1px 0 0 var(--border-light), 0 -1px 0 0 var(--border-light)`,
                        transition: 'background 0.2s',
                      }}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '12px' }}>
              <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.35rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  style={{
                    width: '10px',
                    height: '10px',
                    background: getContribColor(level),
                    boxShadow: `1px 0 0 0 var(--border-light), -1px 0 0 0 var(--border-light), 0 1px 0 0 var(--border-light), 0 -1px 0 0 var(--border-light)`,
                  }}
                />
              ))}
              <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.35rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>More</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            animationDelay: '0.25s',
            display: 'flex',
            justifyContent: 'center',
            gap: '0px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              boxShadow: `4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color), 0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color)`,
            }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '10px 18px',
                  background: activeFilter === filter.id ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: activeFilter === filter.id ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRight: '2px solid var(--border-light)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-pixel-heading), monospace',
                  fontSize: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="pixel-card reveal"
              style={{ opacity: 0, animationDelay: `${0.3 + i * 0.1}s`, padding: '0', overflow: 'hidden' }}
            >
              {/* Project Header */}
              <div
                style={{
                  height: '120px',
                  background: `linear-gradient(135deg, ${project.color}, var(--bg-secondary))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
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
                {/* Status badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                  }}
                >
                  <span
                    className="pixel-tag"
                    style={{
                      background: project.status === 'Complete' ? 'var(--accent-tertiary)' : 'var(--accent-secondary)',
                      color: '#fff',
                      padding: '3px 8px',
                    }}
                  >
                    {project.status === 'Complete' ? '✓ ' : '◐ '}{project.status}
                  </span>
                </div>
                <svg width="40" height="40" viewBox="0 0 12 12" style={{ imageRendering: 'pixelated', opacity: 0.8 }}>
                  <rect x="2" y="1" width="8" height="2" fill="#fff" />
                  <rect x="1" y="3" width="10" height="6" fill="#fff" />
                  <rect x="3" y="9" width="6" height="1" fill="#fff" />
                  <rect x="4" y="10" width="4" height="1" fill="#fff" />
                  <rect x="3" y="4" width="2" height="2" fill={project.color} />
                  <rect x="7" y="4" width="2" height="2" fill={project.color} />
                  <rect x="4" y="7" width="4" height="1" fill={project.color} />
                </svg>
              </div>

              {/* Project Content */}
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

                {/* Progress bar */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.35rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Progress
                    </span>
                    <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.35rem', color: project.color }}>
                      {project.progress}%
                    </span>
                  </div>
                  <div className="skill-bar-container" style={{ height: '10px' }}>
                    <div className="skill-bar-fill" style={{ width: `${project.progress}%`, background: project.color }} />
                  </div>
                </div>

                {/* Mini stats */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
                  <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.4rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ⭐ {project.stars}
                  </span>
                  <span style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.4rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    ⌨️ {project.commits} commits
                  </span>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pixel-tag">{tag}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button className="pixel-btn" style={{ fontSize: '0.45rem', padding: '8px 14px' }}>
                    ◈ Demo
                  </button>
                  <button className="pixel-btn pixel-btn-secondary" style={{ fontSize: '0.45rem', padding: '8px 14px' }}>
                    ◇ Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
