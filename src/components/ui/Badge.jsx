import { cn } from '../../lib/utils'

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-dm-primary/25 bg-dm-primary/10 px-3 py-1 text-xs font-medium text-dm-primary-bright backdrop-blur-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
