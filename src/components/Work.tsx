const PROJECTS = [
  {
    name: 'NovaMed Platform',
    desc: 'Complete digital rebrand and patient-facing web platform for a telehealth provider.',
    category: 'Branding · Websites',
    img: 'https://images.unsplash.com/photo-1614851099511-773084f6911d?w=900&h=600&fit=crop&auto=format',
    accent: 'rgba(33,200,235,0.15)',
  },
  {
    name: 'Apex Commerce',
    desc: 'End-to-end e-commerce strategy, design system, and growth marketing infrastructure.',
    category: 'Development · Marketing',
    img: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=900&h=600&fit=crop&auto=format',
    accent: 'rgba(150,95,220,0.15)',
  },
  {
    name: 'Forge Strategy',
    desc: 'AI-powered lead qualification system reducing sales cycle time by 40%.',
    category: 'AI Solutions · Consulting',
    img: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=900&h=600&fit=crop&auto=format',
    accent: 'rgba(255,0,206,0.12)',
  },
  {
    name: 'Meridian Brand Identity',
    desc: 'Comprehensive brand identity for a B2B SaaS company entering three new markets.',
    category: 'Branding · Digital Marketing',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=900&h=600&fit=crop&auto=format',
    accent: 'rgba(102,138,226,0.15)',
  },
]

export default function Work() {
  return (
    <section id="work" data-bg="dark" style={{ background: '#111315', padding: '8rem 0 10rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <p style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 300, fontSize: '0.68rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#F7F6F3', opacity: 0.35, marginBottom: '1.25rem',
          }}>
            Portfolio
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: '#F7F6F3', letterSpacing: '-0.02em',
            }}>
              Selected Work
            </h2>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300, fontSize: '0.95rem',
              color: '#F7F6F3', opacity: 0.45, lineHeight: 1.7,
              maxWidth: 380,
            }}>
              Every project starts differently.<br />
              Every outcome is designed to move the business forward.
            </p>
          </div>
        </div>

        {/* Project grid — editorial: first card tall, second card offset down */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}
          className="work-grid"
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} offset={i === 1 || i === 3 ? '3rem' : '0'} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 500, fontSize: '0.85rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#F7F6F3', textDecoration: 'none',
              opacity: 0.5, transition: 'opacity 0.2s',
              padding: '0.75rem 0',
              borderBottom: '1px solid rgba(247,246,243,0.2)',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
          >
            See All Projects →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .work-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ProjectCard({ project, offset }: { project: typeof PROJECTS[0]; offset: string }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#1a1c20',
        cursor: 'pointer',
        aspectRatio: '4/3',
        marginTop: offset,
        border: '1px solid rgba(247,246,243,0.05)',
        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        const img = e.currentTarget.querySelector('.proj-img') as HTMLElement
        if (img) img.style.transform = 'scale(1.04)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        const img = e.currentTarget.querySelector('.proj-img') as HTMLElement
        if (img) img.style.transform = 'scale(1)'
      }}
    >
      {/* Image */}
      <img
        className="proj-img"
        src={project.img}
        alt={project.name}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${project.accent} 0%, rgba(17,19,21,0.75) 55%, rgba(17,19,21,0.97) 100%)`,
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '2rem',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '0.3rem 0.75rem',
          background: 'rgba(247,246,243,0.06)',
          border: '1px solid rgba(247,246,243,0.1)',
          borderRadius: '3px',
          marginBottom: '0.75rem',
          width: 'fit-content',
        }}>
          <span style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 400, fontSize: '0.6rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#F7F6F3', opacity: 0.55,
          }}>
            {project.category}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700, fontSize: '1.4rem',
          color: '#F7F6F3', letterSpacing: '-0.01em',
          marginBottom: '0.5rem',
        }}>
          {project.name}
        </h3>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.82rem',
          color: '#F7F6F3', opacity: 0.55,
          lineHeight: 1.6, marginBottom: '1rem',
        }}>
          {project.desc}
        </p>
        <a
          href="#contact"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: 500, fontSize: '0.72rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#F7F6F3', textDecoration: 'none',
            opacity: 0.45,
            transition: 'opacity 0.2s',
          }}
        >
          Show Full Case Study →
        </a>
      </div>
    </div>
  )
}
