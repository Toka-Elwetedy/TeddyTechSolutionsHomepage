import GradientCanvas from './GradientCanvas'

// Final CTA integrated at top of Footer file
export function FinalCTA() {
  return (
    <section
      id="contact"
      data-bg="dark"
      style={{ position: 'relative', background: '#111315', padding: '9rem 0 10rem', overflow: 'hidden' }}
    >
      {/* Canvas */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.6 }}>
        <GradientCanvas numLines={14} opacity={0.75} />
      </div>

      {/* Center radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(150,95,220,0.09) 0%, transparent 65%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.68rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#F7F6F3', opacity: 0.35, marginBottom: '2rem',
        }}>
          Let's Work Together
        </p>

        <h2 style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(2.5rem, 7vw, 6rem)',
          color: '#F7F6F3',
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
          marginBottom: '2rem',
        }}>
          Let's build<br />
          <span className="gradient-text">what's next.</span>
        </h2>

        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '1.05rem',
          color: '#F7F6F3', opacity: 0.55,
          lineHeight: 1.75, maxWidth: 520,
          margin: '0 auto 3rem',
        }}>
          Whether you're launching, scaling, or rethinking your digital
          presence—we'd love to hear your story.
        </p>

        <a
          href="mailto:hello@teddytech.com"
          className="gradient-bg"
          style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '1.1rem 2.8rem',
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 600, fontSize: '0.8rem',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            borderRadius: '4px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.87')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}

// Main Footer
export default function Footer() {
  const navGroups = [
    {
      label: 'Services',
      links: ['Branding', 'Digital Marketing', 'Websites', 'Development', 'AI Solutions', 'Consulting'],
    },
    {
      label: 'Company',
      links: ['Work', 'About', 'Insights', 'Contact'],
    },
  ]

  return (
    <footer data-bg="dark" style={{ position: 'relative', background: '#0d0f11', overflow: 'hidden', paddingTop: '6rem' }}>
      {/* Canvas atmosphere */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }}>
        <GradientCanvas numLines={12} opacity={0.6} />
      </div>

      {/* Subtle top gradient separator */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(102,138,226,0.3), rgba(150,95,220,0.3), transparent)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(247,246,243,0.06)' }} className="footer-grid">

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                <defs>
                  <linearGradient id="footer-logo" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#21C8EB" />
                    <stop offset="50%" stopColor="#965FDC" />
                    <stop offset="100%" stopColor="#FF00CE" />
                  </linearGradient>
                </defs>
                <rect x="2" y="5" width="26" height="4" rx="2" fill="url(#footer-logo)" />
                <rect x="12" y="9" width="6" height="16" rx="2" fill="url(#footer-logo)" />
              </svg>
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 600, fontSize: '0.92rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#F7F6F3',
              }}>
                Teddy Tech
              </span>
            </div>

            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300, fontSize: '0.88rem',
              color: '#F7F6F3', opacity: 0.42,
              lineHeight: 1.7, maxWidth: 280,
              marginBottom: '2rem',
            }}>
              Connected digital growth systems for ambitious businesses.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['LinkedIn', 'Instagram', 'X'].map(social => (
                <a
                  key={social}
                  href="#"
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 400, fontSize: '0.65rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: '#F7F6F3', textDecoration: 'none',
                    opacity: 0.38, transition: 'opacity 0.2s',
                    padding: '0.4rem 0.75rem',
                    border: '1px solid rgba(247,246,243,0.1)',
                    borderRadius: '3px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.38')}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map(group => (
            <div key={group.label}>
              <p style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 500, fontSize: '0.65rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#F7F6F3', opacity: 0.3, marginBottom: '1.25rem',
              }}>
                {group.label}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {group.links.map(link => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                    style={{
                      fontFamily: "'Exo 2', sans-serif",
                      fontWeight: 400, fontSize: '0.85rem',
                      color: '#F7F6F3', opacity: 0.45,
                      textDecoration: 'none', transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Trust signals */}
          <div>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 500, fontSize: '0.65rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#F7F6F3', opacity: 0.3, marginBottom: '1.25rem',
            }}>
              Recognition
            </p>

            <a
              href="https://clutch.co"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', marginBottom: '1.5rem', textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', gap: '2px', marginBottom: '0.35rem' }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ color: '#FF00CE', fontSize: '0.72rem' }}>★</span>
                ))}
              </div>
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 600, fontSize: '0.82rem',
                color: '#F7F6F3', opacity: 0.65,
                display: 'block', marginBottom: '0.25rem',
              }}>
                Clutch
              </span>
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 300, fontSize: '0.72rem',
                color: '#F7F6F3', opacity: 0.35, lineHeight: 1.5,
              }}>
                Recognized by businesses that value quality.
              </span>
            </a>

            <a
              href="https://glassdoor.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 600, fontSize: '0.82rem',
                color: '#F7F6F3', opacity: 0.65,
                display: 'block', marginBottom: '0.25rem',
              }}>
                Glassdoor
              </span>
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 300, fontSize: '0.72rem',
                color: '#F7F6F3', opacity: 0.35, lineHeight: 1.5,
              }}>
                Building a workplace where talented people enjoy creating exceptional work.
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1.5rem 0',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 300, fontSize: '0.72rem',
            color: '#F7F6F3', opacity: 0.28,
            letterSpacing: '0.04em',
          }}>
            © {new Date().getFullYear()} Teddy Tech Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 300, fontSize: '0.72rem',
                  color: '#F7F6F3', opacity: 0.28,
                  textDecoration: 'none', transition: 'opacity 0.2s',
                  letterSpacing: '0.04em',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.28')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
