import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

/**
 * Minimal dialog primitive (shadcn-equivalent). Handles overlay, escape key,
 * body scroll lock, and focus-trapping via `autoFocus` on the first field.
 */
export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onOpenChange?.(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onOpenChange])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={() => onOpenChange?.(false)}
            aria-hidden
          />
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export function DialogContent({ className, onClose, children }) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-dm-border bg-dm-card/95 p-6 shadow-2xl backdrop-blur-xl',
        className,
      )}
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-dm-muted transition-colors hover:bg-dm-background/60 hover:text-dm-foreground"
        >
          <X size={18} />
        </button>
      )}
      {children}
    </div>
  )
}

export function DialogHeader({ title, description, className }) {
  return (
    <div className={cn('mb-5 pr-8', className)}>
      <h2 className="text-xl font-semibold text-dm-foreground">{title}</h2>
      {description && (
        <p className="mt-1.5 text-sm text-dm-muted">{description}</p>
      )}
    </div>
  )
}
