import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { buttonVariants } from '../ui/Button'
import Badge from '../ui/Badge'
import AuroraGlow from '../effects/AuroraGlow'
import GridBackground from '../effects/GridBackground'
import HeroVisual from './HeroVisual'

export function Hero() {
  const scrollToInstitutions = () => {
    document.getElementById('institutions')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 lg:pt-28"
    >
      <AuroraGlow />
      <GridBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Badge>
            <Sparkles size={12} />
            Built for institutions — loved by students
          </Badge>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-dm-foreground sm:text-5xl lg:text-6xl">
            Your documents,{' '}
            <span className="gradient-text">suddenly conversational.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-dm-muted sm:text-lg">
            DocMind turns textbooks, lecture notes, and policy PDFs into a 24/7
            tutor. Grounded answers with real citations — for students who want
            faster feedback, and institutions that want a living knowledge base.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={scrollToInstitutions}
              className={buttonVariants({ variant: 'primary', size: 'xl' })}
            >
              Partner with us
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={scrollToHowItWorks}
              className={buttonVariants({ variant: 'secondary', size: 'xl' })}
            >
              How it works
            </button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-dm-muted/70">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Provisioned accounts — secure, role-based access for your campus.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
