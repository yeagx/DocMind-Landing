import { cn } from '../../lib/utils'

/**
 * Soft aurora/teal glow behind the hero. Two blurred blobs crossfading with
 * a long animation so the page feels alive without being distracting.
 */
export function AuroraGlow({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      <div className="absolute -top-40 left-1/2 h-[620px] w-[900px] -translate-x-1/2 animate-aurora rounded-full bg-dm-primary/30 blur-[140px]" />
      <div className="absolute top-32 left-[10%] h-[400px] w-[480px] animate-pulse-slow rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -right-20 top-40 h-[500px] w-[500px] animate-pulse-slow rounded-full bg-cyan-500/10 blur-[140px]" />
    </div>
  )
}

export default AuroraGlow
