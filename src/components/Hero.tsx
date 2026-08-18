import GradientCanvas from './GradientCanvas'

const CHAIN = ['Business Goals', 'Strategy', 'Brand', 'Technology', 'AI', 'Marketing', 'Growth']

export default function Hero() {
  return (
    <section
      id="top"
      data-bg="dark"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#111315',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated lines fill the entire section */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <GradientCanvas numLines={20} opacity={0.88} />
      </div>

      {/* Soft off-center radial glow — right side */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 65% 60% at 72% 48%, rgba(102,138,226,0.08) 0%, transparent 70%)',
      }} />

      {/* Bottom atmospheric fade into next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '40%', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(17,19,21,0.6) 60%, #111315 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 1280, margin: '0 auto',
        padding: '10rem 2.5rem 8rem',
        width: '100%',
      }}>
        {/* Eyebrow */}
        <p style={{
          color: '#F7F6F3', fontFamily: "'Exo 2', sans-serif",
          fontWeight: 400, fontSize: '0.65rem',
          letterSpacing: '0.38em', textTransform: 'uppercase',
          opacity: 0.38, marginBottom: '2.25rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{
            display: 'inline-block', width: 28, height: 1,
            background: 'linear-gradient(90deg, #21C8EB, #668AE2)',
            flexShrink: 0,
          }} />
          Teddy Tech Solutions
        </p>

        {/* Headline — large, editorial, confident */}
        <h1 style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(3rem, 7vw, 7rem)',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#F7F6F3',
          maxWidth: 'clamp(340px, 52vw, 860px)',
          marginBottom: '2.25rem',
        }}>
          Turn ambitious{' '}
          <span className="gradient-text">business goals</span>{' '}
          into connected digital growth.
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '1.1rem',
          lineHeight: 1.78, color: '#F7F6F3',
          opacity: 0.58, maxWidth: 540,
          marginBottom: '3.25rem',
        }}>
          We bring everything together into one connected system—aligning
          strategy, branding, technology, AI, and marketing to help your
          business grow with clarity.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '5rem' }}>
          <a
            href="#contact"
            className="gradient-bg"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '1rem 2.25rem',
              color: '#fff', fontFamily: "'Exo 2', sans-serif",
              fontWeight: 600, fontSize: '0.73rem',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              textDecoration: 'none', borderRadius: '3px',
              transition: 'opacity 0.22s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.87')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Book a Strategy Session
          </a>
          <a
            href="#work"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '1rem 1.5rem',
              color: '#F7F6F3', fontFamily: "'Exo 2', sans-serif",
              fontWeight: 400, fontSize: '0.88rem',
              letterSpacing: '0.06em', textDecoration: 'none',
              opacity: 0.55, transition: 'opacity 0.22s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
          >
            View Our Work →
          </a>
        </div>

        {/* Connected growth chain — horizontal, editorial */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0',
          overflowX: 'auto', paddingBottom: '0.25rem',
        }}>
          {CHAIN.map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 400, fontSize: '0.6rem',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#F7F6F3', opacity: 0.2,
                whiteSpace: 'nowrap',
              }}>
                {label}
              </span>
              {i < CHAIN.length - 1 && (
                <span style={{
                  margin: '0 0.6rem',
                  display: 'inline-block', width: 16, height: 1,
                  background: 'linear-gradient(90deg, rgba(247,246,243,0.15), rgba(247,246,243,0.08))',
                  flexShrink: 0,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2.25rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        opacity: 0.18,
      }}>
        <div style={{ width: 1, height: '2.5rem', background: 'linear-gradient(to bottom, #F7F6F3, transparent)' }} />
        <p style={{
          color: '#F7F6F3', fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.52rem', letterSpacing: '0.32em', textTransform: 'uppercase',
        }}>
          Scroll
        </p>
      </div>
    </section>
  )
}
