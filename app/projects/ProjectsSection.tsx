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

interface ContributionDay {
  date: string;
  label: string;
  month: number;
  count: number;
  level: number;
  summary: string;
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

const CONTRIBUTION_YEARS = [2026, 2025, 2024];
const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = ['Mon', '', 'Wed', '', 'Fri', '', 'Sun'];

// Seeded pseudo-random to avoid hydration mismatch (no Math.random)
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function padDatePart(value: number): string {
  return value.toString().padStart(2, '0');
}

function getContributionLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 4) return 2;
  if (count <= 6) return 3;
  return 4;
}

function getContributionSummary(count: number): string {
  if (count === 0) return 'No commits logged';
  if (count <= 2) return 'Light maintenance';
  if (count <= 4) return 'Feature polish';
  if (count <= 6) return 'Active build session';
  return 'Major shipping day';
}

function generateContributionDay(year: number, month: number, day: number): ContributionDay {
  const rand = seededRandom(year * 10000 + month * 100 + day);
  const count = rand < 0.24 ? 0 : Math.ceil(rand * 8);
  const date = `${year}-${padDatePart(month + 1)}-${padDatePart(day)}`;

  return {
    date,
    label: `${MONTH_LABELS[month]} ${day}, ${year}`,
    month,
    count,
    level: getContributionLevel(count),
    summary: getContributionSummary(count),
  };
}

function generateContributions(year: number): Array<Array<ContributionDay | null>> {
  const weeks: Array<Array<ContributionDay | null>> = [];
  let week: Array<ContributionDay | null> = [];
  const firstDay = new Date(Date.UTC(year, 0, 1));
  const firstDayIndex = (firstDay.getUTCDay() + 6) % 7;

  for (let i = 0; i < firstDayIndex; i++) {
    week.push(null);
  }

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

    for (let day = 1; day <= daysInMonth; day++) {
      week.push(generateContributionDay(year, month, day));

      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    weeks.push(week);
  }

  return weeks;
}

function getDefaultContributionDate(year: number): string {
  return `${year}-05-09`;
}

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
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(getDefaultContributionDate(2026));

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
  const contributions = generateContributions(selectedYear);
  const contributionDays = contributions.flat().filter((day): day is ContributionDay => day !== null);
  const selectedContribution = contributionDays.find((day) => day.date === selectedDate) ?? contributionDays[0];
  const yearlyTotal = contributionDays.reduce((sum, day) => sum + day.count, 0);
  const activeDays = contributionDays.filter((day) => day.count > 0).length;

  return (
    <div ref={sectionRef}>
      {/* ===== PROJECT STATS ===== */}
      <section id="projects" className="section" style={{ position: 'relative', minHeight: 'calc(100vh - 120px)' }}>
        <div className="pixel-grid-bg" />

        <h2 className="section-title animate-slideUp" >✦ My Projects</h2>
        <p className="section-subtitle animate-slideUp" style={{ animationDelay: '0.1s' }}>
          Quest log of completed adventures
        </p>

        {/* Stats Overview */}
        <div
          className="animate-slideUp"
          style={{
            animationDelay: '0.15s',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '28px',
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
          className="animate-slideUp"
          style={{
            animationDelay: '0.2s',
            marginBottom: '28px',
          }}
        >
          <div className="pixel-dialog" style={{ padding: '20px', maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.55rem', color: 'var(--accent-tertiary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px', textAlign: 'center' }}>
              ▸ Contribution Activity
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) auto',
                gap: '16px',
                alignItems: 'start',
              }}
              className="contrib-panel"
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', overflowX: 'auto', padding: '0 0 12px' }}>
                  <div style={{ display: 'grid', gridTemplateRows: '16px repeat(7, 9px)', gap: '3px', flex: '0 0 auto' }}>
                    <div />
                    {DAY_LABELS.map((day, i) => (
                      <span
                        key={`${day}-${i}`}
                        style={{
                          fontFamily: 'var(--font-pixel-heading), monospace',
                          fontSize: '0.32rem',
                          lineHeight: '9px',
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          width: '18px',
                        }}
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '3px', flex: '0 0 auto' }}>
                    {contributions.map((week, wi) => {
                      const monthStart = week.find((day) => day?.date.endsWith('-01'));
                      const firstDay = week.find(Boolean);
                      const monthLabel = wi === 0 ? firstDay?.month : monthStart?.month;

                      return (
                        <div key={wi} style={{ display: 'grid', gridTemplateRows: '16px repeat(7, 9px)', gap: '3px', minWidth: '9px' }}>
                          <span
                            style={{
                              fontFamily: 'var(--font-pixel-heading), monospace',
                              fontSize: '0.32rem',
                              lineHeight: '12px',
                              color: 'var(--text-muted)',
                              textTransform: 'uppercase',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {monthLabel !== undefined ? MONTH_LABELS[monthLabel] : ''}
                          </span>
                          {week.map((day, di) => (
                            <button
                              key={`${wi}-${di}`}
                              className="contrib-day"
                              type="button"
                              onClick={() => day && setSelectedDate(day.date)}
                              disabled={!day}
                              style={{
                                width: '9px',
                                height: '9px',
                                padding: 0,
                                border: 'none',
                                background: day ? getContribColor(day.level) : 'transparent',
                                boxShadow: day
                                  ? `1px 0 0 0 var(--border-light), -1px 0 0 0 var(--border-light), 0 1px 0 0 var(--border-light), 0 -1px 0 0 var(--border-light)`
                                  : 'none',
                                outline: day?.date === selectedContribution?.date ? '2px solid var(--accent-primary)' : 'none',
                                outlineOffset: '1px',
                                cursor: day ? 'pointer' : 'default',
                                flexShrink: 0,
                              }}
                              title={day ? `${day.label}: ${day.count} contributions` : undefined}
                              aria-label={day ? `${day.label}: ${day.count} contributions` : undefined}
                            />
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '8px',
                    marginTop: '4px',
                  }}
                  className="contrib-stats"
                >
                  {[
                    { label: 'Selected', value: selectedContribution?.label ?? selectedYear.toString() },
                    { label: 'Activity', value: `${selectedContribution?.count ?? 0} commits` },
                    { label: 'Year Total', value: `${yearlyTotal} commits` },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        padding: '8px',
                        background: 'var(--bg-secondary)',
                        boxShadow: `2px 0 0 0 var(--border-light), -2px 0 0 0 var(--border-light), 0 2px 0 0 var(--border-light), 0 -2px 0 0 var(--border-light)`,
                        minWidth: 0,
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.35rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.82rem', color: 'var(--text-primary)', lineHeight: '1.2', overflowWrap: 'break-word' }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontFamily: 'var(--font-pixel-body), monospace', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '12px', textAlign: 'center' }}>
                  {activeDays} active days in {selectedYear} • {selectedContribution?.summary}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="contrib-years">
                {CONTRIBUTION_YEARS.map((year) => (
                  <button
                    key={year}
                    className="contrib-year-btn"
                    type="button"
                    onClick={() => {
                      setSelectedYear(year);
                      setSelectedDate(getDefaultContributionDate(year));
                    }}
                    style={{
                      padding: '8px 10px',
                      background: selectedYear === year ? 'var(--accent-primary)' : 'var(--bg-card)',
                      color: selectedYear === year ? '#fff' : 'var(--text-secondary)',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-pixel-heading), monospace',
                      fontSize: '0.42rem',
                      boxShadow: `2px 0 0 0 var(--border-color), -2px 0 0 0 var(--border-color), 0 2px 0 0 var(--border-color), 0 -2px 0 0 var(--border-color)`,
                    }}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '14px' }}>
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
          className="animate-slideUp"
          style={{
            animationDelay: '0.25s',
            display: 'flex',
            justifyContent: 'center',
            gap: '0px',
            marginBottom: '28px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              maxWidth: '100%',
              overflowX: 'auto',
              boxShadow: `4px 0 0 0 var(--border-color), -4px 0 0 0 var(--border-color), 0 4px 0 0 var(--border-color), 0 -4px 0 0 var(--border-color)`,
            }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                className="project-filter-btn"
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: '24px',
          }}
        >
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="pixel-card project-card animate-slideUp"
              style={{ animationDelay: `${0.3 + i * 0.1}s`, padding: '0', overflow: 'hidden' }}
            >
              {/* Project Header */}
              <div
                className="project-card-media"
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
                <svg className="project-icon" width="40" height="40" viewBox="0 0 12 12" style={{ imageRendering: 'pixelated', opacity: 0.8, position: 'relative', zIndex: 1 }}>
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
              <div className="project-card-content" style={{ padding: '20px' }}>
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
                <div className="project-card-actions" style={{ display: 'flex', gap: '12px' }}>
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
