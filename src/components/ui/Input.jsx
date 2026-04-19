import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Input = forwardRef(function Input(
  { className, icon, rightSlot, type = 'text', ...props },
  ref,
) {
  return (
    <div
      className={cn(
        'group relative flex items-center rounded-xl border border-dm-border bg-dm-background/80 transition-all duration-200 focus-within:border-dm-primary/60 focus-within:ring-2 focus-within:ring-dm-primary/25',
        className,
      )}
    >
      {icon && (
        <span className="pointer-events-none absolute left-4 flex text-dm-foreground/70 transition-colors duration-200 group-focus-within:text-dm-primary-bright">
          {icon}
        </span>
      )}
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full rounded-xl border-0 bg-transparent py-3 text-dm-foreground placeholder:text-dm-foreground/50 focus:outline-none',
          icon ? 'pl-12' : 'pl-4',
          rightSlot ? 'pr-12' : 'pr-4',
        )}
        {...props}
      />
      {rightSlot && (
        <span className="absolute right-4 flex text-dm-foreground/70 transition-colors duration-200 group-focus-within:text-dm-primary-bright">
          {rightSlot}
        </span>
      )}
    </div>
  )
})

export { Input }
export default Input
