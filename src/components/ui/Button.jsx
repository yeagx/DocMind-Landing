import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dm-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-dm-background disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-r from-dm-primary to-dm-primary-bright text-white shadow-glow-primary hover:shadow-glow-primary-lg hover:scale-[1.02] active:scale-[0.98]',
        secondary:
          'border border-dm-border bg-dm-card/60 text-dm-foreground hover:border-dm-primary/50 hover:bg-dm-card',
        ghost: 'text-dm-foreground/80 hover:text-dm-foreground hover:bg-dm-card/40',
        outline:
          'border border-dm-primary/40 text-dm-foreground hover:border-dm-primary hover:bg-dm-primary/10',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-base',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

const Button = forwardRef(function Button(
  { className, variant, size, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
})

export { Button, buttonVariants }
export default Button
