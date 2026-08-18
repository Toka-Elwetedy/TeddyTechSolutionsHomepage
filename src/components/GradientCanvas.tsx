import { useEffect, useRef } from 'react'

interface Props {
  className?: string
  style?: React.CSSProperties
  numLines?: number
  opacity?: number
}

export default function GradientCanvas({ className, style, numLines = 14, opacity = 1 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0

    const setSize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = rect.width
      H = rect.height
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.resetTransform()
      ctx.scale(dpr, dpr)
    }

    setSize()
    const ro = new ResizeObserver(setSize)
    ro.observe(canvas)

    // Cyan → Blue → Violet → Magenta
    const colorStops: [number, number, number][] = [
      [33, 200, 235],
      [102, 138, 226],
      [150, 95, 220],
      [255, 0, 206],
    ]

    function sampleColor(t: number): [number, number, number] {
      const s = Math.max(0, Math.min(1, t)) * (colorStops.length - 1)
      const i = Math.min(Math.floor(s), colorStops.length - 2)
      const f = s - i
      const a = colorStops[i]
      const b = colorStops[i + 1]
      return [
        Math.round(a[0] + (b[0] - a[0]) * f),
        Math.round(a[1] + (b[1] - a[1]) * f),
        Math.round(a[2] + (b[2] - a[2]) * f),
      ]
    }

    interface Pt {
      bx: number; by: number
      phX: number; phY: number
      aX: number;  aY: number
    }
    interface Line {
      pts: Pt[]; op: number; lw: number
      ct: number; ph: number; sp: number
    }

    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    const lines: Line[] = Array.from({ length: numLines }, (_, i) => {
      const n = 3 + Math.floor(Math.random() * 3)
      return {
        pts: Array.from({ length: n }, (_, j) => ({
          bx: j / (n - 1) + rand(-0.04, 0.04),
          by: (i / numLines) * 0.88 + 0.06 + rand(-0.1, 0.1),
          phX: rand(0, Math.PI * 2),
          phY: rand(0, Math.PI * 2),
          aX: rand(0.015, 0.055),
          aY: rand(0.04, 0.11),
        })),
        op: rand(0.08, 0.36) * opacity,
        lw: rand(0.35, 1.3),
        ct: i / numLines,
        ph: rand(0, Math.PI * 2),
        sp: rand(0.35, 1.1),
      }
    })

    interface Pulse { li: number; t: number; spd: number; op: number }
    const pulses: Pulse[] = Array.from({ length: 9 }, () => ({
      li: Math.floor(Math.random() * numLines),
      t: Math.random(),
      spd: rand(0.0006, 0.0016),
      op: rand(0.45, 0.95),
    }))

    let raf = 0
    let tick = 0

    const drawFrame = () => {
      tick++
      const T = tick * 0.003
      ctx.clearRect(0, 0, W, H)

      for (const ln of lines) {
        const pts = ln.pts.map(p => ({
          x: (p.bx + Math.sin(T * 0.75 * ln.sp + p.phX) * p.aX) * W,
          y: (p.by + Math.cos(T * ln.sp + p.phY) * p.aY) * H,
        }))

        const [r1, g1, b1] = sampleColor(ln.ct)
        const [r2, g2, b2] = sampleColor((ln.ct + 0.28) % 1)

        const grd = ctx.createLinearGradient(
          pts[0].x, pts[0].y, pts[pts.length - 1].x, pts[pts.length - 1].y
        )
        grd.addColorStop(0, `rgba(${r1},${g1},${b1},${ln.op})`)
        grd.addColorStop(1, `rgba(${r2},${g2},${b2},${ln.op})`)

        ctx.beginPath()
        ctx.strokeStyle = grd
        ctx.lineWidth = ln.lw
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.moveTo(pts[0].x, pts[0].y)

        if (pts.length === 2) {
          ctx.lineTo(pts[1].x, pts[1].y)
        } else {
          for (let i = 1; i < pts.length - 1; i++) {
            const mx = (pts[i].x + pts[i + 1].x) / 2
            const my = (pts[i].y + pts[i + 1].y) / 2
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my)
          }
          ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y)
        }
        ctx.stroke()
      }

      for (const p of pulses) {
        p.t += p.spd
        if (p.t > 1) {
          p.t = 0
          p.li = Math.floor(Math.random() * numLines)
        }
        const ln = lines[p.li]
        const pts = ln.pts.map(pt => ({
          x: (pt.bx + Math.sin(T * 0.75 * ln.sp + pt.phX) * pt.aX) * W,
          y: (pt.by + Math.cos(T * ln.sp + pt.phY) * pt.aY) * H,
        }))
        const segTotal = pts.length - 1
        const segF = p.t * segTotal
        const seg = Math.min(Math.floor(segF), segTotal - 1)
        const segT = segF - seg
        const px = pts[seg].x + (pts[seg + 1].x - pts[seg].x) * segT
        const py = pts[seg].y + (pts[seg + 1].y - pts[seg].y) * segT
        const [r, g, b] = sampleColor(ln.ct)
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 7)
        glow.addColorStop(0, `rgba(${r},${g},${b},${p.op * opacity})`)
        glow.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.fillStyle = glow
        ctx.arc(px, py, 7, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(drawFrame)
    }

    raf = requestAnimationFrame(drawFrame)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [numLines, opacity])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  )
}
