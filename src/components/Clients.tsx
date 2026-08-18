const CLIENTS = [
  'NovaMed Health', 'Apex Commerce', 'Stellar Brands', 'Loop Digital',
  'Forge Strategy', 'Meridian Labs', 'Coast Digital', 'Elevate Co.',
  'Prism Marketing', 'Vertex Systems', 'Harbor Studios', 'Summit Group',
  'Onyx Ventures', 'Beacon Analytics', 'Core Health Co.', 'Drift Creative',
]

export default function Clients() {
  // Duplicate for seamless loop
  const track = [...CLIENTS, ...CLIENTS]

  return (
    <section data-bg="light" style={{ background: '#F7F6F3', padding: '7rem 0 8rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem', marginBottom: '4rem' }}>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.68rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#111315', opacity: 0.38, marginBottom: '1.25rem',
        }}>
          Our Clients
        </p>
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
          color: '#111315', letterSpacing: '-0.02em', marginBottom: '0.75rem',
        }}>
          Trusted by ambitious businesses.
        </h2>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.95rem',
          color: '#111315', opacity: 0.5, lineHeight: 1.7,
          maxWidth: 580,
        }}>
          We've partnered with startups, founders, healthcare providers, e-commerce brands,
          and growing companies across multiple industries and countries.
        </p>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '14%', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, #F7F6F3, transparent)',
        }} />
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0, width: '14%', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to left, #F7F6F3, transparent)',
        }} />

        <div
          className="animate-marquee"
          style={{ display: 'flex', alignItems: 'center', gap: '4rem', width: 'max-content', padding: '1rem 0' }}
        >
          {track.map((name, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4rem', whiteSpace: 'nowrap' }}>
              <span style={{
                fontFamily: "'Exo 2', sans-serif",
                fontWeight: 500, fontSize: '1rem',
                letterSpacing: '0.06em',
                color: '#111315',
                opacity: 0.28,
                textTransform: 'uppercase',
              }}>
                {name}
              </span>
              <div style={{
                width: 4, height: 4, borderRadius: '50%',
                background: 'rgba(17,19,21,0.15)',
                flexShrink: 0,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
