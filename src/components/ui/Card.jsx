import { cn } from '../../lib/utils'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-dm-border bg-dm-card/60 backdrop-blur-md transition-all duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
