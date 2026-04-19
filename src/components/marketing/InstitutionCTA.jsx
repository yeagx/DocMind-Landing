import { motion } from 'framer-motion'
import { ArrowRight, Building2, Check } from 'lucide-react'
import { buttonVariants } from '../ui/Button'
import { PARTNER_EMAIL } from '../../lib/env'

const BENEFITS = [
  'White-label deployment under your institution\'s domain',
  'Per-subject tutors curated by your instructors',
  'Analytics on what students actually ask (and struggle with)',
  'SSO and roster sync on the roadmap',
  'Data stays yours — no third-party training on your content',
]

export function InstitutionCTA() {
  const subject = encodeURIComponent('DocMind — institutional collaboration')
  const body = encodeURIComponent(
    "Hi DocMind team,\n\nI'd like to explore bringing DocMind to our institution. " +
      'Could we set up a short call?\n\nInstitution:\nRole:\nEstimated students:\n\nThanks,\n',
  )
  const mailto = `mailto:${PARTNER_EMAIL}?subject=${subject}&body=${body}`

  return (
    <section id="institutions" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-dm-border bg-gradient-to-br from-dm-card via-dm-card/80 to-dm-background p-8 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-dm-primary/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-dm-primary/30 bg-dm-primary/10 px-3 py-1 text-xs font-medium text-dm-primary-bright">
                <Building2 size={14} />
                For universities, academies & training orgs
              </div>

              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-dm-foreground sm:text-4xl">
                Bring DocMind to your institution.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-dm-muted">
                We partner with institutions that want an AI tutor built on
                their own curriculum — not a generic chatbot. Pilot programs,
                white-label deployments, and custom integrations welcome.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={mailto}
                  className={buttonVariants({ variant: 'primary', size: 'lg' })}
                >
                  Partner with us
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`mailto:${PARTNER_EMAIL}`}
                  className="text-sm font-medium text-dm-muted transition-colors hover:text-dm-foreground"
                >
                  or email {PARTNER_EMAIL}
                </a>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 rounded-xl border border-dm-border/70 bg-dm-background/40 p-4 text-sm text-dm-foreground"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dm-primary/20 text-dm-primary-bright">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstitutionCTA
