import { cn } from '../../lib/utils'

/**
 * Dotted/lined grid background with a soft radial fade in the middle.
 * Purely decorative; pointer-events: none.
 */
export function GridBackground({ className }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 bg-grid-dm bg-[size:56px_56px] mask-radial-fade opacity-70',
        className,
      )}
    />
  )
}

export default GridBackground
