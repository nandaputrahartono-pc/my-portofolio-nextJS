'use client';

const FOOTER_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/nandaputrahartono-pc',
    icon: (
      <svg width="24" height="24" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
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
    name: 'Email',
    url: 'mailto:nandaputrah235@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
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
    name: 'Instagram',
    url: 'https://www.instagram.com/nanda_putra324?igsh=MWQ3NWNsazVnbjl6ZQ==',
    icon: (
      <svg width="24" height="24" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="2" y="1" width="12" height="2" fill="currentColor" />
        <rect x="2" y="13" width="12" height="2" fill="currentColor" />
        <rect x="1" y="2" width="2" height="12" fill="currentColor" />
        <rect x="13" y="2" width="2" height="12" fill="currentColor" />
        <rect x="5" y="4" width="6" height="2" fill="currentColor" />
        <rect x="5" y="10" width="6" height="2" fill="currentColor" />
        <rect x="4" y="5" width="2" height="6" fill="currentColor" />
        <rect x="10" y="5" width="2" height="6" fill="currentColor" />
        <rect x="11" y="3" width="2" height="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '3px solid var(--border-light)',
      background: 'var(--bg-card)',
      padding: '40px 24px 32px',
      marginTop: 'auto',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Social Links */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="social-icon-link"
              style={{
                color: 'var(--text-secondary)',
                transition: 'color 0.2s, transform 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright & Branding */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-pixel-heading), monospace',
            fontSize: '0.55rem',
            color: 'var(--text-primary)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '8px'
          }}>
            © {new Date().getFullYear()} Nanda Putra Hartono
          </div>
          <div style={{
            fontFamily: 'var(--font-pixel-body), monospace',
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            letterSpacing: '1px'
          }}>
            Exploring Web, Mobile, and AI.
          </div>
        </div>
      </div>
    </footer>
  );
}
