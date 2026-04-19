import { motion } from 'framer-motion'
import { FileText, Sparkles } from 'lucide-react'

/**
 * Right-side hero art. A "document" card on one side, a stylized chat bubble
 * on the other, with a flowing beam connecting them — the product's core
 * promise visualized in one frame.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[32px] bg-dm-primary/10 blur-3xl" aria-hidden />

      <div className="relative grid h-full grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-between rounded-2xl border border-dm-border bg-dm-card/90 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-dm-muted">
            <FileText size={14} className="text-dm-primary-bright" />
            Chapter-4.pdf
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded-full bg-dm-border/70" />
            <div className="h-2 w-[90%] rounded-full bg-dm-border/60" />
            <div className="h-2 w-[75%] rounded-full bg-dm-border/60" />
            <div className="mt-4 h-2 w-[85%] rounded-full bg-dm-primary/40" />
            <div className="h-2 w-[60%] rounded-full bg-dm-primary/25" />
            <div className="h-2 w-[95%] rounded-full bg-dm-border/60" />
            <div className="h-2 w-[70%] rounded-full bg-dm-border/60" />
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-dm-primary/15 px-3 py-2 text-xs text-dm-primary-bright">
            <Sparkles size={12} />
            Indexed
          </div>
        </motion.div>

        <div className="relative flex flex-col justify-center gap-3">
          <svg
            aria-hidden
            className="pointer-events-none absolute -left-6 top-1/2 h-24 w-12 -translate-y-1/2"
            viewBox="0 0 48 96"
          >
            <defs>
              <linearGradient id="hero-beam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0D6E73" stopOpacity="0" />
                <stop offset="50%" stopColor="#14A39A" stopOpacity="1" />
                <stop offset="100%" stopColor="#0D6E73" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 48 Q24 0 48 48"
              fill="none"
              stroke="url(#hero-beam)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-beam-flow"
            />
            <path
              d="M0 48 Q24 96 48 48"
              fill="none"
              stroke="url(#hero-beam)"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-beam-flow"
            />
          </svg>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="ml-4 w-[86%] rounded-2xl rounded-bl-sm border border-dm-border bg-dm-card/80 p-3 text-xs text-dm-muted shadow-lg backdrop-blur"
          >
            What's the main argument in section 2?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="ml-auto w-[92%] rounded-2xl rounded-br-sm bg-gradient-to-br from-dm-primary to-dm-primary-bright p-3 text-xs text-white shadow-glow-primary"
          >
            The chapter argues that heterogeneity in capital accelerates growth, citing the endogenous model on page 14.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
            className="ml-4 w-[80%] rounded-2xl rounded-bl-sm border border-dm-border bg-dm-card/80 p-3 text-xs text-dm-muted shadow-lg backdrop-blur"
          >
            Great — can you cite the exact passage?
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroVisual
