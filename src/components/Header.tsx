import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [onLight, setOnLight] = useState(false) // true when header is over a light section

  const updateTheme = useCallback(() => {
    const headerBottom = 72
    const sections = document.querySelectorAll('[data-bg]')
    let found = 'dark'
    sections.forEach(el => {
      const r = el.getBoundingClientRect()
      if (r.top <= headerBottom && r.bottom > headerBottom) {
        found = el.getAttribute('data-bg') ?? 'dark'
      }
    })
    setOnLight(found === 'light')
    setScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateTheme, { passive: true })
    window.addEventListener('resize', updateTheme, { passive: true })
    updateTheme()
    return () => {
      window.removeEventListener('scroll', updateTheme)
      window.removeEventListener('resize', updateTheme)
    }
  }, [updateTheme])

  const fg = onLight ? '#111315' : '#F7F6F3'
  const fgAlpha = onLight
    ? 'rgba(17,19,21,0.22)'
    : 'rgba(247,246,243,0.22)'
  const fgAlphaHover = onLight
    ? 'rgba(17,19,21,0.55)'
    : 'rgba(247,246,243,0.55)'
  const navLinks = ['Services', 'Work', 'About', 'Insights']

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.5s ease, border-color 0.5s ease',
        background: scrolled
          ? onLight ? 'rgba(247,246,243,0.88)' : 'rgba(17,19,21,0.82)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled
          ? onLight ? '1px solid rgba(17,19,21,0.07)' : '1px solid rgba(247,246,243,0.06)'
          : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '4.5rem',
      }}>
        {/* Logo */}
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <TeddyLogo />
          <span style={{
            color: fg, fontFamily: "'Exo 2', sans-serif",
            fontWeight: 600, fontSize: '0.95rem',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            transition: 'color 0.4s ease',
          }}>
            Teddy Tech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '2.75rem' }}>
          {navLinks.map(item => (
            <NavLink key={item} href={`#${item.toLowerCase()}`} label={item} fg={fg} />
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex"
          style={{
            color: fg, textDecoration: 'none',
            fontSize: '0.72rem', fontFamily: "'Exo 2', sans-serif",
            fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.6rem 1.5rem',
            border: `1px solid ${fgAlpha}`,
            borderRadius: '3px',
            transition: 'border-color 0.25s, background 0.25s, color 0.4s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = fgAlphaHover
            e.currentTarget.style.background = onLight ? 'rgba(17,19,21,0.04)' : 'rgba(247,246,243,0.05)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = fgAlpha
            e.currentTarget.style.background = 'transparent'
          }}
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="Toggle menu"
        >
          {[
            { w: 22, rotate: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' },
            { w: 22, opacity: open ? 0 : 1 },
            { w: open ? 22 : 14, rotate: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' },
          ].map((bar, i) => (
            <span key={i} style={{
              display: 'block', width: bar.w, height: 1.5, background: fg,
              transition: 'transform 0.3s, width 0.3s, opacity 0.3s, background 0.4s',
              transformOrigin: 'center',
              ...(bar.rotate ? { transform: bar.rotate } : {}),
              ...(bar.opacity !== undefined ? { opacity: bar.opacity } : {}),
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden',
        maxHeight: open ? '380px' : '0',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        background: onLight ? '#F7F6F3' : '#0d0f11',
        borderTop: onLight ? '1px solid rgba(17,19,21,0.07)' : '1px solid rgba(247,246,243,0.055)',
      }}>
        <div style={{ padding: '1rem 2.5rem 1.5rem' }}>
          {[...navLinks, 'Start a Project'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              style={{
                display: 'block', color: fg, textDecoration: 'none',
                fontFamily: "'Exo 2', sans-serif", fontSize: '1.05rem', fontWeight: 400,
                padding: '0.85rem 0',
                borderBottom: onLight ? '1px solid rgba(17,19,21,0.07)' : '1px solid rgba(247,246,243,0.06)',
                letterSpacing: '0.04em',
              }}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, label, fg }: { href: string; label: string; fg: string }) {
  return (
    <a
      href={href}
      style={{
        color: fg, textDecoration: 'none',
        fontFamily: "'Exo 2', sans-serif", fontWeight: 400,
        fontSize: '0.85rem', letterSpacing: '0.07em',
        opacity: 0.6, transition: 'opacity 0.2s, color 0.4s',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
    >
      {label}
    </a>
  )
}

function TeddyLogo() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#21C8EB" />
          <stop offset="50%" stopColor="#965FDC" />
          <stop offset="100%" stopColor="#FF00CE" />
        </linearGradient>
      </defs>
      <rect x="2" y="5" width="26" height="4" rx="2" fill="url(#logo-grad)" />
      <rect x="12" y="9" width="6" height="16" rx="2" fill="url(#logo-grad)" />
    </svg>
  )
}
