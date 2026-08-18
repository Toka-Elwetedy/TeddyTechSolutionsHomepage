import Header from './components/Header'
import Hero from './components/Hero'
import { FloatingCard } from './components/Stats'
import StatsSection from './components/Stats'
import Services from './components/Services'
import Clients from './components/Clients'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import FAQ from './components/FAQ'
import { FinalCTA } from './components/Footer'
import Footer from './components/Footer'

// Atmospheric gradient bridge between sections.
// data-bg reflects which half of the gradient the header should read.
function Bridge({
  from, to, fromBg,
}: {
  from: string; to: string; fromBg: 'dark' | 'light'
}) {
  return (
    <div
      data-bg={fromBg}
      style={{
        height: '180px',
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        marginTop: '-1px',
        marginBottom: '-1px',
        position: 'relative',
        zIndex: 1,
      }}
    />
  )
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Exo 2', sans-serif", minHeight: '100vh' }}>
      <Header />

      {/* ─── DARK ─── */}
      <Hero />
      <FloatingCard />
      <Bridge from="#111315" to="#F7F6F3" fromBg="dark" />

      {/* ─── LIGHT ─── */}
      <StatsSection />
      <Bridge from="#F7F6F3" to="#111315" fromBg="light" />

      {/* ─── DARK ─── */}
      <Services />
      <Bridge from="#111315" to="#F7F6F3" fromBg="dark" />

      {/* ─── LIGHT ─── */}
      <Clients />
      <Bridge from="#F7F6F3" to="#111315" fromBg="light" />

      {/* ─── DARK ─── */}
      <Work />
      <Bridge from="#111315" to="#F7F6F3" fromBg="dark" />

      {/* ─── LIGHT ─── */}
      <Testimonials />
      <Bridge from="#F7F6F3" to="#111315" fromBg="light" />

      {/* ─── DARK ─── */}
      <Team />
      <Bridge from="#111315" to="#F7F6F3" fromBg="dark" />

      {/* ─── LIGHT ─── */}
      <FAQ />
      <Bridge from="#F7F6F3" to="#111315" fromBg="light" />

      {/* ─── DARK ─── */}
      <FinalCTA />
      <Footer />
    </div>
  )
}
