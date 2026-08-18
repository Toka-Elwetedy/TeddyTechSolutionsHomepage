import GradientCanvas from './GradientCanvas'

export default function Team() {
  return (
    <section data-bg="dark" style={{ position: 'relative', background: '#111315', padding: '9rem 0 10rem', overflow: 'hidden' }}>
      {/* Subtle canvas background */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.55 }}>
        <GradientCanvas numLines={10} opacity={0.5} />
      </div>

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(150,95,220,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.68rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#F7F6F3', opacity: 0.35, marginBottom: '2.5rem',
        }}>
          Who We Are
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }} className="team-grid">
          {/* Left: headline */}
          <div>
            <h2 style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              color: '#F7F6F3',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '2.5rem',
            }}>
              One team.<br />
              Multiple disciplines.<br />
              <span className="gradient-text">One objective.</span>
            </h2>

            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '0.85rem 1.75rem',
                border: '1px solid rgba(247,246,243,0.22)',
                borderRadius: '3px',
                color: '#F7F6F3', textDecoration: 'none',
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 500, fontSize: '0.75rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(247,246,243,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(247,246,243,0.22)')}
            >
              Join Our Team →
            </a>
          </div>

          {/* Right: description + disciplines */}
          <div>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300, fontSize: '1rem',
              color: '#F7F6F3', opacity: 0.55,
              lineHeight: 1.8, marginBottom: '2.5rem',
            }}>
              Our cross-disciplinary team combines strategy, branding, UX design, technology,
              and marketing to create connected digital experiences. We work closely with our
              clients, combining human creativity with AI-driven efficiency to move from strategy
              to execution faster.
            </p>

            {/* Discipline pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {['Strategy', 'Branding', 'UX Design', 'Development', 'AI', 'Marketing', 'Consulting', 'Growth'].map(d => (
                <span
                  key={d}
                  style={{
                    fontFamily: "'Exo 2', sans-serif",
                    fontWeight: 400, fontSize: '0.7rem',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: '#F7F6F3',
                    padding: '0.4rem 0.85rem',
                    border: '1px solid rgba(247,246,243,0.12)',
                    borderRadius: '3px',
                    opacity: 0.55,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
