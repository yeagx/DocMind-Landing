import { motion } from 'framer-motion'
import {
  MessageSquareText,
  BookOpenCheck,
  Upload,
  BarChart3,
  KeyRound,
  ShieldCheck,
} from 'lucide-react'
import Card from '../ui/Card'

const FEATURES = [
  {
    icon: MessageSquareText,
    title: 'Chat with any doc',
    body:
      'Upload a PDF and ask anything. Answers are grounded in the source — with references, not guesses.',
  },
  {
    icon: BookOpenCheck,
    title: 'Per-subject tutors',
    body:
      'Instructors curate a tutor per subject. Students get a focused AI that knows the syllabus, readings, and nuances.',
  },
  {
    icon: Upload,
    title: 'Instructor uploads',
    body:
      'Drag in your reading packs. DocMind indexes them in the background and keeps everything synced.',
  },
  {
    icon: BarChart3,
    title: 'Admin analytics',
    body:
      "See what students ask, where they struggle, and which documents get used the most — signals you can't get from a textbook.",
  },
  {
    icon: KeyRound,
    title: 'Institutional sign-in',
    body:
      'Students, instructors, and admins sign in with campus-provisioned accounts — the right experience for each role.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-aware access',
    body:
      'Each role sees only what they should: student tools, instructor uploads, or admin analytics — with sensible usage guardrails.',
  },
]

export function FeatureGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-dm-primary-bright">
            What you get
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-dm-foreground sm:text-4xl">
            Everything an institution needs to go AI-native — without losing its voice.
          </h2>
          <p className="mt-4 text-pretty text-dm-muted">
            DocMind isn't a chatbot stapled onto your LMS. It's a focused tool
            for turning curated knowledge into real answers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
            >
              <Card className="group h-full p-6 hover:border-dm-primary/40 hover:bg-dm-card/80">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dm-primary-bright/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-dm-primary/30 bg-dm-primary/10 text-dm-primary-bright">
                  <feature.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-dm-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dm-muted">
                  {feature.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
