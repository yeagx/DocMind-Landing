import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Accordion({ items, className }) {
  const [open, setOpen] = useState(null)
  return (
    <div className={cn('divide-y divide-dm-border/60', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-dm-foreground transition-colors hover:text-dm-primary-bright"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                className={cn(
                  'shrink-0 text-dm-muted transition-transform duration-300',
                  isOpen && 'rotate-180 text-dm-primary-bright',
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-dm-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
