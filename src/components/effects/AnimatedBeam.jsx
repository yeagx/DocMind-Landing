import { cn } from '../../lib/utils'

/**
 * Simple animated beam: a dashed gradient stroke that flows across an SVG
 * path. Used between steps in HowItWorks and as a decorative thread in the
 * hero visual. Takes `className` for sizing and positioning.
 */
export function AnimatedBeam({ className, vertical = false }) {
  return (
    <svg
      className={cn('pointer-events-none', className)}
      viewBox={vertical ? '0 0 4 200' : '0 0 200 4'}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="beam-gradient"
          x1="0"
          y1="0"
          x2={vertical ? '0' : '1'}
          y2={vertical ? '1' : '0'}
        >
          <stop offset="0%" stopColor="#0D6E73" stopOpacity="0" />
          <stop offset="50%" stopColor="#14A39A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0D6E73" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line
        x1={vertical ? 2 : 0}
        y1={vertical ? 0 : 2}
        x2={vertical ? 2 : 200}
        y2={vertical ? 200 : 2}
        stroke="url(#beam-gradient)"
        strokeWidth="2"
        strokeDasharray="8 10"
        strokeDashoffset="0"
        className="animate-beam-flow"
      />
    </svg>
  )
}

export default AnimatedBeam
