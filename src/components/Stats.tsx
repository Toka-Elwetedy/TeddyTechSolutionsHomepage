import { useEffect, useRef, useState } from 'react'

const STATS = [
  { num: 24, suffix: '+', label: 'Businesses Transformed', desc: 'Helping founders build stronger digital businesses.' },
  { num: 20, suffix: '+', label: 'Founders Mentored', desc: 'Supporting entrepreneurs beyond launch.' },
  { num: 6,  suffix: '+', label: 'Countries Served', desc: 'Delivering global impact with local understanding.' },
  { num: 12, suffix: '+', label: 'Years of Experience', desc: 'Across business strategy, technology and design.' },
]

function useCountUp(target: number, active: boolean, delay: number) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => {
      const dur = 1800
      const start = Date.now()
      const tick = () => {
        const p = Math.min((Date.now() - start) / dur, 1)
        setVal(Math.round((1 - Math.pow(1 - p, 3)) * target))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(t)
  }, [active, target, delay])
  return val
}

// ── Floating Achievement Card ──────────────────────────────────────────────
export function FloatingCard() {
  return (
    <section
      data-bg="dark"
      style={{
        position: 'relative', background: '#111315', zIndex: 20,
        padding: '0 0 6rem',
        marginTop: '-6rem', // pulls up to overlap hero bottom
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        <div
          style={{
            borderRadius: '10px', overflow: 'hidden',
            background: 'rgba(15,17,20,0.92)',
            backdropFilter: 'blur(28px)', WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(247,246,243,0.07)',
            boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(102,138,226,0.07)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="floating-card-grid">

            {/* Metrics + Clutch */}
            <div style={{ padding: '3.5rem 3rem', borderRight: '1px solid rgba(247,246,243,0.055)' }}>
              <p style={{
                fontFamily: "'Exo 2', sans-serif", fontWeight: 300,
                fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase',
                color: '#F7F6F3', opacity: 0.32, marginBottom: '2.25rem',
              }}>
                Numbers that reflect our impact
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.25rem 2rem', marginBottom: '2.5rem' }}>
                {STATS.map(s => (
                  <div key={s.label}>
                    <div className="gradient-text" style={{
                      fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                      fontSize: '2.75rem', lineHeight: 1, marginBottom: '0.4rem',
                    }}>
                      {s.num}{s.suffix}
                    </div>
                    <div style={{
                      fontFamily: "'Exo 2', sans-serif", fontWeight: 400,
                      fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: '#F7F6F3', opacity: 0.38,
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Clutch */}
              <div style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(247,246,243,0.07)',
                display: 'flex', alignItems: 'center', gap: '0.8rem',
              }}>
                <div style={{ display: 'flex', gap: '1.5px' }}>
                  {[1,2,3,4,5].map(i => (
                    <span key={i} style={{ color: '#FF00CE', fontSize: '0.75rem' }}>★</span>
                  ))}
                </div>
                <a
                  href="https://clutch.co"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Exo 2', sans-serif", fontWeight: 500,
                    fontSize: '0.72rem', color: '#F7F6F3', opacity: 0.5,
                    textDecoration: 'none', letterSpacing: '0.04em',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
                >
                  Rated on <strong style={{ fontWeight: 600 }}>Clutch</strong>
                </a>
              </div>
            </div>

            {/* Gradient Orb */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '3.5rem',
              background: 'radial-gradient(ellipse 80% 60% at 55% 50%, rgba(150,95,220,0.07) 0%, transparent 70%)',
              position: 'relative', overflow: 'hidden',
            }}>
              <GradientOrb />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .floating-card-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function GradientOrb() {
  return (
    <div className="animate-float" style={{ position: 'relative', width: 170, height: 170, animationDuration: '6s' }}>
      {/* Outer atmospheric glow */}
      <div className="animate-pulse-op" style={{
        position: 'absolute', inset: '-50%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(150,95,220,0.13) 0%, transparent 70%)',
      }} />
      {/* Second ring */}
      <div className="animate-pulse-op" style={{
        position: 'absolute', inset: '-20%', borderRadius: '50%',
        background: 'transparent',
        border: '1px solid rgba(102,138,226,0.12)',
        animationDelay: '-1.5s',
      }} />
      <div style={{
        position: 'absolute', inset: '5%', borderRadius: '50%',
        background: 'transparent',
        border: '1px solid rgba(102,138,226,0.08)',
      }} />
      {/* Main blob */}
      <div className="animate-morph" style={{
        position: 'absolute', inset: '14%',
        background: 'linear-gradient(135deg, #21C8EB, #668AE2, #965FDC, #FF00CE)',
        opacity: 0.84,
        boxShadow: '0 0 60px rgba(150,95,220,0.4), 0 0 120px rgba(33,200,235,0.15)',
      }} />
      {/* Specular highlight */}
      <div style={{
        position: 'absolute', inset: '30%',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 60%)',
      }} />
    </div>
  )
}

// ── Stats Numbers Section ──────────────────────────────────────────────────
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      data-bg="light"
      style={{ background: '#F7F6F3', padding: '9rem 0 8rem' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        <p style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 300,
          fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase',
          color: '#111315', opacity: 0.32, marginBottom: '1.25rem',
          display: 'flex', alignItems: 'center', gap: '0.75rem',
        }}>
          <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(17,19,21,0.3)', flexShrink: 0 }} />
          Our Impact
        </p>
        <h2 style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
          fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#111315',
          letterSpacing: '-0.02em', marginBottom: '5rem', lineHeight: 1.15,
        }}>
          Numbers that reflect<br />our impact.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }} className="stats-grid">
          {STATS.map((s, i) => (
            <StatItem key={s.label} stat={s} active={active} delay={i * 150} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function StatItem({ stat, active, delay }: { stat: typeof STATS[0]; active: boolean; delay: number }) {
  const val = useCountUp(stat.num, active, delay)

  return (
    <div style={{
      padding: '0 2rem 3.5rem 2rem',
      borderLeft: '1px solid rgba(17,19,21,0.08)',
    }}>
      <div
        className="gradient-text"
        style={{
          fontFamily: "'Exo 2', sans-serif", fontWeight: 800,
          fontSize: 'clamp(4rem, 6.5vw, 6rem)',
          lineHeight: 1, marginBottom: '0.8rem',
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
          transitionDelay: `${delay}ms`,
        }}
      >
        {val}{stat.suffix}
      </div>
      <div style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 600,
        fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
        color: '#111315', marginBottom: '0.5rem',
      }}>
        {stat.label}
      </div>
      <p style={{
        fontFamily: "'Exo 2', sans-serif", fontWeight: 300,
        fontSize: '0.82rem', color: '#111315', opacity: 0.45,
        lineHeight: 1.65, maxWidth: 190,
      }}>
        {stat.desc}
      </p>
    </div>
  )
}
