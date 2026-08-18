import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote: "Teddy Tech didn't just build us a website. They rebuilt the way our business presents itself to the world. We saw a 60% increase in qualified leads within the first three months.",
    name: 'Sarah Okonkwo',
    role: 'Founder & CEO',
    company: 'NovaMed Health',
    country: 'United Kingdom',
    initial: 'S',
  },
  {
    quote: "Working with Teddy Tech was the first time we felt that our technology partner actually understood our business goals first—and then built the technology to serve them.",
    name: 'Marcus Velluti',
    role: 'Managing Director',
    company: 'Apex Commerce',
    country: 'Australia',
    initial: 'M',
  },
  {
    quote: "The AI workflows they designed cut our manual reporting time in half. What sets them apart is that every solution is practical and actually gets used by the team.",
    name: 'Priya Nair',
    role: 'Head of Operations',
    company: 'Forge Strategy',
    country: 'Singapore',
    initial: 'P',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const inViewRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.2 })
    if (inViewRef.current) obs.observe(inViewRef.current)
    return () => obs.disconnect()
  }, [])

  const go = (next: number) => {
    setFading(true)
    setTimeout(() => { setIndex(next); setFading(false) }, 380)
  }

  useEffect(() => {
    const t = setInterval(() => go((index + 1) % TESTIMONIALS.length), 7500)
    return () => clearInterval(t)
  }, [index])

  const t = TESTIMONIALS[index]

  return (
    <section data-bg="light" style={{ background: '#F7F6F3', padding: '9rem 0 8rem', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        <div
          ref={inViewRef}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p style={{
            fontFamily: "'Exo 2', sans-serif", fontWeight: 300,
            fontSize: '0.65rem', letterSpacing: '0.32em', textTransform: 'uppercase',
            color: '#111315', opacity: 0.32, marginBottom: '4.5rem',
            display: 'flex', alignItems: 'center', gap: '0.75rem',
          }}>
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'rgba(17,19,21,0.3)', flexShrink: 0 }} />
            What Our Clients Say
          </p>

          {/* Large quote */}
          <div style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.38s ease, transform 0.38s ease',
            minHeight: '14rem',
          }}>
            <blockquote style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(1.55rem, 3vw, 2.5rem)',
              lineHeight: 1.42,
              color: '#111315',
              letterSpacing: '-0.015em',
              maxWidth: 920,
              marginBottom: '3.5rem',
              margin: '0 0 3.5rem 0',
            }}>
              "{t.quote}"
            </blockquote>

            {/* Attribution */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{
                width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
                background: 'linear-gradient(135deg, #21C8EB, #668AE2, #965FDC, #FF00CE)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                  fontSize: '1rem', color: '#fff',
                }}>
                  {t.initial}
                </span>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Exo 2', sans-serif", fontWeight: 600,
                  fontSize: '0.88rem', color: '#111315', marginBottom: '0.22rem',
                }}>
                  {t.name}
                </div>
                <div style={{
                  fontFamily: "'Exo 2', sans-serif", fontWeight: 300,
                  fontSize: '0.75rem', color: '#111315', opacity: 0.44,
                  letterSpacing: '0.02em',
                }}>
                  {t.role} · {t.company} · {t.country}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '0.55rem', marginTop: '3rem', alignItems: 'center' }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === index ? 32 : 7,
                  height: 7, borderRadius: 4,
                  background: i === index
                    ? 'linear-gradient(90deg, #21C8EB, #FF00CE)'
                    : 'rgba(17,19,21,0.18)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.38s ease, background 0.38s ease',
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
            <div style={{ flex: 1 }} />
            {/* Progress line */}
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {TESTIMONIALS.map((_, i) => (
                <span key={i} style={{
                  fontFamily: "'Exo 2', sans-serif", fontWeight: i === index ? 600 : 300,
                  fontSize: '0.65rem', color: '#111315',
                  opacity: i === index ? 0.7 : 0.22,
                  transition: 'opacity 0.3s, font-weight 0.3s',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
