import { motion } from 'framer-motion'
import { LogIn, Upload, MessagesSquare } from 'lucide-react'
import AnimatedBeam from '../effects/AnimatedBeam'

const STEPS = [
  {
    icon: LogIn,
    title: 'Sign in',
    body:
      'Students and staff use institutional credentials provisioned by your admins — no separate consumer signup.',
  },
  {
    icon: Upload,
    title: 'Add your materials',
    body:
      'Instructors upload reading packs and course PDFs. Everything is indexed for grounded Q&A with citations.',
  },
  {
    icon: MessagesSquare,
    title: 'Chat & learn',
    body:
      'Ask anything across Chat with Doc and subject tutors. Answers stay tied to your curriculum.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-dm-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-dm-primary-bright">
            How it works
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-dm-foreground sm:text-4xl">
            Three steps from syllabus to answers.
          </h2>
          <p className="mt-4 text-pretty text-dm-muted">
            Designed for classrooms and campuses — one consistent flow for everyone.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-11 hidden md:block"
          >
            <AnimatedBeam className="h-1 w-full opacity-60" />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
              className="relative rounded-2xl border border-dm-border bg-dm-card/60 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-dm-primary/40 bg-dm-background text-sm font-semibold text-dm-primary-bright">
                  {i + 1}
                </div>
                <step.icon className="text-dm-primary-bright" size={18} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-dm-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dm-muted">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
