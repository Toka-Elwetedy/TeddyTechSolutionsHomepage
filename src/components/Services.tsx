import { useState } from 'react'

const SERVICES = [
  {
    id: 'branding',
    name: 'Branding',
    tagline: 'We shape how your business is remembered.',
    desc: 'From positioning and messaging to visual identity, we create brands people understand, trust, and choose.',
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    tagline: "Marketing isn't about doing more.",
    desc: "It's about connecting the right message with the right audience at the right moment. We build repeatable systems that generate awareness, trust, and demand.",
  },
  {
    id: 'websites',
    name: 'Websites',
    tagline: "Your website isn't a brochure.",
    desc: "It's your hardest-working team member. Designed to educate, persuade, and convert—24 hours a day.",
  },
  {
    id: 'development',
    name: 'Development',
    tagline: 'We build scalable digital products that grow with your business.',
    desc: 'Fast. Reliable. Built for the future.',
  },
  {
    id: 'consulting',
    name: 'Business Consulting',
    tagline: 'Technology only works when it serves business goals.',
    desc: 'We help founders simplify operations, clarify priorities, and build digital systems that support sustainable growth.',
  },
  {
    id: 'ai',
    name: 'AI Solutions',
    tagline: "AI shouldn't replace your business.",
    desc: "It should strengthen it. We design practical AI workflows and automations that save time, reduce repetitive work, and improve decision-making.",
  },
]

export default function Services() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="services" data-bg="dark" style={{ background: '#111315', padding: '8rem 0 10rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.68rem',
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#F7F6F3', opacity: 0.35, marginBottom: '5rem',
        }}>
          What We Do
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="services-grid">

          {/* Left: sticky editorial + object */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <h2 style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              lineHeight: 1.0, letterSpacing: '-0.03em',
              color: '#F7F6F3', marginBottom: '1.5rem',
            }}>
              One partner.
            </h2>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300, fontSize: '1.15rem',
              color: '#F7F6F3', opacity: 0.5, lineHeight: 1.65,
              marginBottom: '0.5rem',
            }}>
              Because businesses don't grow<br />in departments.
            </p>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300, fontSize: '1.15rem',
              color: '#F7F6F3', opacity: 0.5, lineHeight: 1.65,
            }}>
              They grow through alignment.
            </p>

            {/* Service object display */}
            <div style={{ position: 'relative', height: 200, marginTop: '3.5rem' }}>
              <ServiceObject serviceId={active} />
            </div>
          </div>

          {/* Right: accordion list */}
          <div>
            {SERVICES.map((s, i) => (
              <ServiceRow
                key={s.id}
                service={s}
                index={i}
                isActive={active === s.id}
                anyActive={active !== null}
                onEnter={() => setActive(s.id)}
                onLeave={() => setActive(null)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}

function ServiceRow({
  service, index, isActive, anyActive, onEnter, onLeave
}: {
  service: typeof SERVICES[0]
  index: number
  isActive: boolean
  anyActive: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={() => isActive ? onLeave() : onEnter()}
      style={{
        borderBottom: '1px solid rgba(247,246,243,0.07)',
        cursor: 'pointer',
        transition: 'opacity 0.3s',
        opacity: anyActive && !isActive ? 0.3 : 1,
      }}
    >
      <div style={{
        padding: '1.75rem 0',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem' }}>
          <span style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 300, fontSize: '0.7rem',
            letterSpacing: '0.14em',
            color: '#F7F6F3', opacity: 0.35,
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: isActive ? 600 : 400,
            fontSize: 'clamp(1.4rem, 2.2vw, 1.7rem)',
            color: isActive ? '#F7F6F3' : 'rgba(247,246,243,0.65)',
            transition: 'all 0.3s',
          }}>
            {service.name}
          </span>
        </div>
        <span style={{
          color: '#F7F6F3',
          fontSize: '1.1rem',
          opacity: isActive ? 1 : 0.2,
          transition: 'all 0.3s',
          transform: isActive ? 'translateX(4px)' : 'none',
        }}>→</span>
      </div>

      {/* Description reveal */}
      <div style={{
        maxHeight: isActive ? '180px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isActive ? 1 : 0,
      }}>
        <div style={{ paddingBottom: '1.75rem' }}>
          <p style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 600, fontSize: '0.88rem',
            color: '#F7F6F3', marginBottom: '0.5rem',
          }}>
            {service.tagline}
          </p>
          <p style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 300, fontSize: '0.85rem',
            color: '#F7F6F3', opacity: 0.55, lineHeight: 1.7,
          }}>
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

function ServiceObject({ serviceId }: { serviceId: string | null }) {
  const objects: Record<string, React.ReactNode> = {
    branding: <BrandingObj />,
    marketing: <MarketingObj />,
    websites: <WebsiteObj />,
    development: <DevelopmentObj />,
    consulting: <ConsultingObj />,
    ai: <AIObj />,
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Default orb shown when nothing is active */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        opacity: serviceId ? 0 : 0.35,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }}>
        <DefaultOrb />
      </div>

      {Object.entries(objects).map(([id, obj]) => (
        <div
          key={id}
          style={{
            position: 'absolute', top: 0, left: 0,
            opacity: serviceId === id ? 1 : 0,
            transform: serviceId === id ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(16px)',
            transition: 'opacity 0.45s, transform 0.45s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: 'none',
          }}
        >
          {obj}
        </div>
      ))}
    </div>
  )
}

function DefaultOrb() {
  return (
    <div className="animate-float" style={{ width: 100, height: 100, position: 'relative', animationDuration: '7s' }}>
      <div className="animate-morph" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #21C8EB44, #668AE244, #965FDC44)',
        border: '1px solid rgba(102,138,226,0.3)',
      }} />
    </div>
  )
}

function BrandingObj() {
  return (
    <div className="animate-float" style={{ width: 130, height: 130, position: 'relative', animationDuration: '5.5s' }}>
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          className="animate-morph"
          style={{
            position: 'absolute',
            inset: `${i * 14}%`,
            borderRadius: '50%',
            background: `linear-gradient(${135 + i * 25}deg,
              ${['#21C8EB', '#668AE2', '#965FDC', '#FF00CE'][i]},
              ${['#668AE2', '#965FDC', '#FF00CE', '#21C8EB'][i]}
            )`,
            opacity: 0.75 - i * 0.12,
            animationDelay: `${-i * 2}s`,
            boxShadow: i === 0 ? '0 0 40px rgba(33,200,235,0.2)' : 'none',
          }}
        />
      ))}
    </div>
  )
}

function MarketingObj() {
  return (
    <div className="animate-float" style={{ width: 130, height: 130, display: 'flex', alignItems: 'center', justifyContent: 'center', animationDuration: '6s' }}>
      <div style={{
        width: 70, height: 90,
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: 'linear-gradient(180deg, #21C8EB, #668AE2, #965FDC)',
        boxShadow: '0 20px 50px rgba(102,138,226,0.3)',
        position: 'relative',
      }} />
      <div style={{
        position: 'absolute', width: 12, height: 12, borderRadius: '50%',
        background: '#FF00CE',
        boxShadow: '0 0 20px rgba(255,0,206,0.6)',
        top: '28%', left: '50%', transform: 'translateX(-50%)',
      }} />
    </div>
  )
}

function WebsiteObj() {
  return (
    <div className="animate-float" style={{ width: 130, height: 90, position: 'relative', animationDuration: '7s' }}>
      <div style={{
        width: '100%', height: '100%',
        border: '1px solid rgba(102,138,226,0.4)',
        borderRadius: '5px',
        background: 'rgba(102,138,226,0.04)',
        boxShadow: '0 10px 40px rgba(33,200,235,0.12), inset 0 0 30px rgba(150,95,220,0.04)',
        overflow: 'hidden',
      }}>
        {/* Header bar */}
        <div style={{ height: 16, background: 'rgba(102,138,226,0.1)', borderBottom: '1px solid rgba(102,138,226,0.15)', display: 'flex', alignItems: 'center', gap: 4, padding: '0 8px' }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: `rgba(${['255,100,100','255,200,50','100,200,100'][i]},0.5)` }} />
          ))}
        </div>
        {/* Content lines */}
        {[60, 80, 45].map((w, i) => (
          <div key={i} style={{
            margin: `${i === 0 ? 10 : 5}px 10px 0`,
            height: i === 0 ? 3 : 2,
            width: `${w}%`,
            background: i === 0
              ? 'linear-gradient(90deg, #21C8EB, #668AE2)'
              : 'rgba(247,246,243,0.14)',
            borderRadius: 4,
          }} />
        ))}
      </div>
    </div>
  )
}

function DevelopmentObj() {
  const hex = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
  return (
    <div className="animate-float" style={{ width: 130, height: 130, position: 'relative', animationDuration: '5s' }}>
      <div style={{
        position: 'absolute', width: 58, height: 66,
        clipPath: hex,
        background: 'linear-gradient(135deg, #21C8EB, #668AE2)',
        top: 10, left: 6, opacity: 0.85,
        boxShadow: '0 10px 30px rgba(33,200,235,0.25)',
      }} />
      <div style={{
        position: 'absolute', width: 58, height: 66,
        clipPath: hex,
        background: 'linear-gradient(135deg, #965FDC, #FF00CE)',
        top: 34, left: 52, opacity: 0.75,
        boxShadow: '0 10px 30px rgba(255,0,206,0.2)',
      }} />
      <div style={{
        position: 'absolute', width: 32, height: 36,
        clipPath: hex,
        background: 'linear-gradient(135deg, #668AE2, #965FDC)',
        top: 12, left: 50, opacity: 0.6,
      }} />
    </div>
  )
}

function ConsultingObj() {
  return (
    <div className="animate-float" style={{ width: 150, height: 100, position: 'relative', animationDuration: '6.5s' }}>
      {/* Beam */}
      <div style={{
        position: 'absolute', top: '50%', left: 0, right: 0, height: 1.5,
        background: 'linear-gradient(90deg, #21C8EB, #668AE2, #965FDC, #FF00CE)',
        transform: 'translateY(-50%)',
      }} />
      {/* Center post */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        width: 1.5, height: 36,
        background: 'rgba(247,246,243,0.25)',
        transform: 'translateX(-50%)',
      }} />
      {/* Left weight */}
      <div style={{
        position: 'absolute', left: 10, top: '50%',
        width: 28, height: 28,
        background: 'linear-gradient(135deg, #21C8EB, #668AE2)',
        borderRadius: 4,
        transform: 'translateY(-50%)',
        boxShadow: '0 8px 20px rgba(33,200,235,0.3)',
      }} />
      {/* Right weight */}
      <div style={{
        position: 'absolute', right: 10, top: '50%',
        width: 28, height: 28,
        background: 'linear-gradient(135deg, #965FDC, #FF00CE)',
        borderRadius: 4,
        transform: 'translateY(-50%)',
        boxShadow: '0 8px 20px rgba(255,0,206,0.3)',
      }} />
    </div>
  )
}

function AIObj() {
  return (
    <div className="animate-float" style={{ width: 130, height: 130, position: 'relative', animationDuration: '4.5s' }}>
      {/* Outer morphing shell */}
      <div className="animate-morph" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #21C8EB, #668AE2, #965FDC, #FF00CE)',
        opacity: 0.7,
        boxShadow: '0 0 50px rgba(150,95,220,0.35)',
      }} />
      {/* Dark inner core */}
      <div className="animate-morph" style={{
        position: 'absolute', inset: '20%',
        background: 'rgba(17,19,21,0.75)',
        animationDelay: '-3.5s',
        backdropFilter: 'blur(4px)',
      }} />
      {/* Dot matrix */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="animate-pulse-op" style={{
              width: 5, height: 5, borderRadius: '50%',
              background: '#F7F6F3',
              opacity: 0.5,
              animationDelay: `${i * 0.2}s`,
            }} />
          ))}
        </div>
      </div>
    </div>
  )
}
