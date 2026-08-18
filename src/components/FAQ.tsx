import { useState } from 'react'

const FAQS = [
  {
    q: 'What does Teddy Tech actually do?',
    a: "We connect business goals, strategy, branding, technology, AI, and marketing into one cohesive digital growth system. Rather than handing you off between agencies and consultants, we provide a single strategic partner who understands how every part of your digital presence fits together.",
  },
  {
    q: 'Do you work with startups or established businesses?',
    a: "Both. We've worked with early-stage founders still defining their market position and with established companies looking to modernise, scale, or enter new markets. Our process adapts to where you are and where you're going.",
  },
  {
    q: 'Can Teddy handle multiple parts of our digital presence?',
    a: "That's exactly how we're designed to work. From brand positioning and visual identity through to website development, AI workflows, and ongoing marketing—we manage the full digital ecosystem so nothing falls through the gaps between disciplines.",
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: "Yes. Most clients choose to maintain a strategic partnership with us after their initial project. We offer ongoing retainers covering everything from technical maintenance and performance optimisation to content strategy and continuous improvement campaigns.",
  },
  {
    q: 'How does a project with Teddy begin?',
    a: "It starts with a Strategy Session—a focused conversation where we learn about your business, your goals, and your current challenges. From there we define scope, timeline, and approach together before any work begins.",
  },
  {
    q: 'Can you work with our existing team?',
    a: "Absolutely. Many of our clients have in-house marketing or development teams. We integrate as a strategic layer—providing expertise, direction, and execution capacity where needed without disrupting your existing workflows.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section data-bg="light" style={{ background: '#F7F6F3', padding: '8rem 0 9rem' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', alignItems: 'start' }} className="faq-grid">

          {/* Left: label */}
          <div style={{ position: 'sticky', top: '7rem' }}>
            <p style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 300, fontSize: '0.68rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#111315', opacity: 0.38, marginBottom: '1.25rem',
            }}>
              FAQ
            </p>
            <h2 style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: '#111315', letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}>
              Questions,<br />answered.
            </h2>
          </div>

          {/* Right: accordion */}
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}

function FAQItem({
  faq, isOpen, onToggle
}: {
  faq: typeof FAQS[0]; isOpen: boolean; onToggle: () => void
}) {
  return (
    <div
      style={{ borderBottom: '1px solid rgba(17,19,21,0.08)' }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none',
          cursor: 'pointer', padding: '1.6rem 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '2rem', textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: isOpen ? 600 : 400,
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          color: '#111315',
          transition: 'font-weight 0.2s',
          letterSpacing: '-0.005em',
        }}>
          {faq.q}
        </span>

        {/* +/- indicator */}
        <div style={{
          flexShrink: 0, width: 28, height: 28,
          border: '1px solid rgba(17,19,21,0.15)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s, border-color 0.3s',
          background: isOpen ? '#111315' : 'transparent',
        }}>
          <span style={{
            display: 'block', fontFamily: "'Exo 2', sans-serif",
            fontSize: '1rem', fontWeight: 300, lineHeight: 1,
            color: isOpen ? '#F7F6F3' : '#111315',
            transition: 'transform 0.3s, color 0.3s',
            transform: isOpen ? 'rotate(45deg)' : 'none',
            userSelect: 'none',
          }}>
            +
          </span>
        </div>
      </button>

      <div style={{
        maxHeight: isOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <p style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 300, fontSize: '0.92rem',
          color: '#111315', opacity: 0.6,
          lineHeight: 1.75,
          paddingBottom: '1.5rem',
          maxWidth: 580,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}
