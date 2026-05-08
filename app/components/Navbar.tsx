'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/tech', label: 'Tech' },
  { href: '/experience', label: 'Exp' },
  { href: '/contact', label: 'Contact' },
];

// Pixel art SVG icons for each nav item
function NavIcon({ label, color }: { label: string; color: string }) {
  const s = { imageRendering: 'pixelated' as const };
  switch (label) {
    case 'Home': return (
      <svg width="14" height="14" viewBox="0 0 10 10" style={s}>
        <rect x="4" y="0" width="2" height="1" fill={color} />
        <rect x="3" y="1" width="4" height="1" fill={color} />
        <rect x="2" y="2" width="6" height="1" fill={color} />
        <rect x="1" y="3" width="8" height="1" fill={color} />
        <rect x="0" y="4" width="10" height="1" fill={color} />
        <rect x="1" y="5" width="8" height="4" fill={color} />
        <rect x="4" y="7" width="2" height="2" fill="var(--bg-primary)" />
      </svg>
    );
    case 'About': return (
      <svg width="14" height="14" viewBox="0 0 10 10" style={s}>
        <rect x="3" y="0" width="4" height="1" fill={color} />
        <rect x="2" y="1" width="6" height="3" fill={color} />
        <rect x="4" y="2" width="1" height="1" fill="var(--bg-primary)" />
        <rect x="6" y="2" width="1" height="1" fill="var(--bg-primary)" />
        <rect x="3" y="4" width="4" height="1" fill={color} />
        <rect x="2" y="5" width="6" height="1" fill={color} />
        <rect x="1" y="6" width="8" height="3" fill={color} />
        <rect x="3" y="9" width="1" height="1" fill={color} />
        <rect x="6" y="9" width="1" height="1" fill={color} />
      </svg>
    );
    case 'Projects': return (
      <svg width="14" height="14" viewBox="0 0 10 10" style={s}>
        <rect x="1" y="1" width="8" height="1" fill={color} />
        <rect x="0" y="2" width="10" height="6" fill={color} />
        <rect x="2" y="3" width="2" height="2" fill="var(--bg-primary)" />
        <rect x="6" y="3" width="2" height="2" fill="var(--bg-primary)" />
        <rect x="3" y="6" width="4" height="1" fill="var(--bg-primary)" />
        <rect x="3" y="8" width="4" height="1" fill={color} />
        <rect x="4" y="9" width="2" height="1" fill={color} />
      </svg>
    );
    case 'Tech': return (
      <svg width="14" height="14" viewBox="0 0 10 10" style={s}>
        <rect x="4" y="0" width="2" height="2" fill={color} />
        <rect x="3" y="2" width="4" height="1" fill={color} />
        <rect x="1" y="3" width="8" height="1" fill={color} />
        <rect x="0" y="4" width="10" height="2" fill={color} />
        <rect x="1" y="6" width="8" height="1" fill={color} />
        <rect x="3" y="7" width="4" height="1" fill={color} />
        <rect x="4" y="8" width="2" height="2" fill={color} />
      </svg>
    );
    case 'Exp': return (
      <svg width="14" height="14" viewBox="0 0 10 10" style={s}>
        <rect x="1" y="0" width="2" height="2" fill={color} />
        <rect x="0" y="2" width="1" height="6" fill={color} />
        <rect x="1" y="2" width="1" height="8" fill={color} />
        <rect x="2" y="2" width="1" height="6" fill={color} />
        <rect x="4" y="1" width="1" height="1" fill={color} />
        <rect x="5" y="2" width="1" height="2" fill={color} />
        <rect x="6" y="3" width="2" height="1" fill={color} />
        <rect x="8" y="2" width="1" height="2" fill={color} />
        <rect x="7" y="0" width="2" height="2" fill={color} />
        <rect x="4" y="5" width="4" height="3" fill={color} />
        <rect x="5" y="6" width="2" height="1" fill="var(--bg-primary)" />
      </svg>
    );
    case 'Contact': return (
      <svg width="14" height="14" viewBox="0 0 10 10" style={s}>
        <rect x="0" y="1" width="10" height="8" fill={color} />
        <rect x="1" y="2" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="7" y="2" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="2" y="3" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="6" y="3" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="3" y="4" width="4" height="1" fill="var(--bg-primary)" />
        <rect x="2" y="5" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="6" y="5" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="1" y="6" width="2" height="1" fill="var(--bg-primary)" />
        <rect x="7" y="6" width="2" height="1" fill="var(--bg-primary)" />
      </svg>
    );
    default: return null;
  }
}

const PIXEL_BORDER = `
  4px 0 0 0 var(--border-color),
  -4px 0 0 0 var(--border-color),
  0 4px 0 0 var(--border-color),
  0 -4px 0 0 var(--border-color),
  8px 0 0 0 var(--bg-primary),
  -8px 0 0 0 var(--bg-primary),
  0 8px 0 0 var(--bg-primary),
  0 -8px 0 0 var(--bg-primary),
  12px 0 0 0 var(--border-color),
  -12px 0 0 0 var(--border-color),
  0 12px 0 0 var(--border-color),
  0 -12px 0 0 var(--border-color)
`;

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [aiHover, setAiHover] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 50) { setIsTop(true); setIsVisible(true); }
      else {
        setIsTop(false);
        if (y < lastScrollY) setIsVisible(true);
        else if (y > lastScrollY) setIsVisible(false);
      }
      setLastScrollY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Top bar — Logo left, Theme+AI right
  const topBar = (
    <div style={{
      position: 'fixed', top: '28px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      width: 'calc(100% - 48px)', maxWidth: '1200px',
      opacity: isTop ? 1 : 0, pointerEvents: isTop ? 'auto' : 'none',
      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }}>
      <Link href="/" style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        textDecoration: 'none', color: 'var(--text-primary)',
        animation: 'fadeSlideDown 1.2s ease-out 1s both',
      }}>
        <div style={{
          width: '24px', height: '24px', display: 'grid',
          gridTemplateColumns: 'repeat(8, 3px)', gridTemplateRows: 'repeat(8, 3px)',
        }}>
          <div style={{ gridColumn: '1/3', gridRow: '1/9', background: 'var(--accent-primary)' }} />
          <div style={{ gridColumn: '3/4', gridRow: '2/4', background: 'var(--accent-primary)' }} />
          <div style={{ gridColumn: '4/5', gridRow: '3/5', background: 'var(--accent-primary)' }} />
          <div style={{ gridColumn: '5/6', gridRow: '4/6', background: 'var(--accent-primary)' }} />
          <div style={{ gridColumn: '6/7', gridRow: '5/7', background: 'var(--accent-primary)' }} />
          <div style={{ gridColumn: '7/9', gridRow: '1/9', background: 'var(--accent-primary)' }} />
        </div>
        <span className="nav-logo-text" style={{
          fontFamily: 'var(--font-pixel-heading), monospace',
          fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase',
        }}>Nanda Putra</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', animation: 'fadeSlideDown 1.2s ease-out 1s both' }}
        className="nav-right-section"
      >
        <button onClick={toggleTheme} aria-label="Toggle theme" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '8px', background: 'var(--bg-card)', border: 'none', cursor: 'pointer',
          fontSize: '1rem', color: 'var(--text-primary)', transition: 'all 0.3s ease',
          boxShadow: '3px 0 0 0 var(--border-color), -3px 0 0 0 var(--border-color), 0 3px 0 0 var(--border-color), 0 -3px 0 0 var(--border-color)',
        }}>
          {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
              <rect x="6" y="0" width="4" height="2" fill="var(--accent-secondary)" />
              <rect x="2" y="2" width="2" height="2" fill="var(--accent-secondary)" />
              <rect x="12" y="2" width="2" height="2" fill="var(--accent-secondary)" />
              <rect x="4" y="4" width="8" height="8" fill="var(--accent-secondary)" />
              <rect x="6" y="3" width="4" height="1" fill="var(--accent-secondary)" />
              <rect x="3" y="6" width="1" height="4" fill="var(--accent-secondary)" />
              <rect x="12" y="6" width="1" height="4" fill="var(--accent-secondary)" />
              <rect x="0" y="7" width="2" height="2" fill="var(--accent-secondary)" />
              <rect x="14" y="7" width="2" height="2" fill="var(--accent-secondary)" />
              <rect x="6" y="14" width="4" height="2" fill="var(--accent-secondary)" />
              <rect x="2" y="12" width="2" height="2" fill="var(--accent-secondary)" />
              <rect x="12" y="12" width="2" height="2" fill="var(--accent-secondary)" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
              <rect x="6" y="0" width="6" height="2" fill="var(--accent-info)" />
              <rect x="4" y="2" width="2" height="2" fill="var(--accent-info)" />
              <rect x="10" y="2" width="2" height="2" fill="var(--accent-info)" />
              <rect x="2" y="4" width="2" height="4" fill="var(--accent-info)" />
              <rect x="4" y="8" width="2" height="2" fill="var(--accent-info)" />
              <rect x="6" y="10" width="2" height="2" fill="var(--accent-info)" />
              <rect x="8" y="10" width="4" height="2" fill="var(--accent-info)" />
              <rect x="12" y="4" width="2" height="6" fill="var(--accent-info)" />
              <rect x="6" y="4" width="2" height="2" fill="var(--bg-primary)" />
            </svg>
          )}
        </button>
        <button id="ai-button" onMouseEnter={() => setAiHover(true)} onMouseLeave={() => setAiHover(false)} style={{
          display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px',
          background: aiHover ? 'var(--accent-purple)' : 'var(--bg-card)',
          color: aiHover ? '#fff' : 'var(--text-primary)',
          border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-pixel-heading), monospace', fontSize: '0.55rem',
          letterSpacing: '1px', textTransform: 'uppercase',
          boxShadow: '3px 0 0 0 var(--accent-purple), -3px 0 0 0 var(--accent-purple), 0 3px 0 0 var(--accent-purple), 0 -3px 0 0 var(--accent-purple)',
          transition: 'all 0.2s ease', animation: 'pixelPulse 3s ease-in-out infinite',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
            <rect x="4" y="1" width="8" height="2" fill="currentColor" />
            <rect x="3" y="3" width="10" height="2" fill="currentColor" />
            <rect x="3" y="5" width="2" height="2" fill="currentColor" />
            <rect x="7" y="5" width="2" height="2" fill="currentColor" />
            <rect x="11" y="5" width="2" height="2" fill="currentColor" />
            <rect x="3" y="7" width="10" height="2" fill="currentColor" />
            <rect x="5" y="9" width="6" height="2" fill="currentColor" />
            <rect x="4" y="11" width="2" height="3" fill="currentColor" />
            <rect x="10" y="11" width="2" height="3" fill="currentColor" />
            <rect x="1" y="4" width="2" height="4" fill="currentColor" />
            <rect x="13" y="4" width="2" height="4" fill="currentColor" />
          </svg>
          <span className="ai-text">AI</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {topBar}

      {/* Nav Pill — Desktop: top-center, Mobile: bottom-center */}
      <div
        className="nav-pill-wrapper"
        style={{
          position: 'fixed',
          ...(isMobile
            ? { bottom: '24px', left: '50%', transform: `translateX(-50%) translateY(${isVisible ? '0' : '120px'})` }
            : { top: '28px', left: '50%', transform: `translateX(-50%) translateY(${isVisible ? '0' : '-120px'})` }
          ),
          zIndex: 101,
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="nav-pill" style={{
          display: 'flex', alignItems: 'center',
          background: 'var(--bg-navbar)', backdropFilter: 'blur(10px)',
          boxShadow: PIXEL_BORDER, transformOrigin: 'center',
          animation: 'navPillOpen 1.5s ease-out 0.15s both',
          overflow: 'hidden',
        }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const iconColor = isActive ? '#fff' : 'var(--text-secondary)';
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '16px 16px',
                  background: isActive ? 'var(--accent-primary)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  textDecoration: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-pixel-heading), monospace',
                  fontSize: '0.5rem', letterSpacing: '1px', textTransform: 'uppercase',
                  transition: 'all 0.2s ease',
                  borderRight: item.label === 'Contact' ? 'none' : '2px solid var(--border-light)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)'; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)'; } }}
                className="nav-link-item"
              >
                <NavIcon label={item.label} color={iconColor} />
                <span className="nav-link-label">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes navPillOpen {
          0% {
            max-width: 4px;
            opacity: 0;
          }
          15% {
            opacity: 0.4;
          }
          40% {
            opacity: 0.8;
          }
          100% {
            max-width: 900px;
            opacity: 1;
          }
        }

        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-pill { max-width: 900px; }

        @media (max-width: 1024px) {
          .nav-logo-text { display: none !important; }
          .ai-text { display: none !important; }
        }

        @media (max-width: 768px) {
          .nav-pill-wrapper {
            width: auto !important;
            max-width: calc(100% - 48px) !important;
          }
          .nav-link-item {
            padding: 12px 12px !important;
          }
          .nav-link-label {
            display: none !important;
          }
          main {
            padding-bottom: 90px !important;
          }
        }
      `}</style>
    </>
  );
}
