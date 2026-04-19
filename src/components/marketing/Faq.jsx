import { Accordion } from '../ui/Accordion'

const ITEMS = [
  {
    question: 'How do students and staff access DocMind?',
    answer:
      'Your institution provisions accounts. Students and staff sign in with institutional credentials issued by your admins — no consumer signup from this site.',
  },
  {
    question: 'What can students do in DocMind?',
    answer:
      'Students use Chat with Doc on uploaded materials and can reach subject-specific tutors where your instructors enable them. Instructors and admins get additional dashboards and controls.',
  },
  {
    question: 'How does DocMind handle our documents?',
    answer:
      'Documents are indexed to answer questions, with references back to the source. Institutional content stays in your deployment and is never used to train third-party models.',
  },
  {
    question: 'Do you support single sign-on (SSO)?',
    answer:
      "SSO and roster sync are on the institutional roadmap. Today, users sign in with credentials your admins provision — drop us a line if you'd like to pilot a custom integration.",
  },
  {
    question: 'Can instructors pick what the AI knows?',
    answer:
      "Yes — per-subject tutors are curated by instructors. Upload a reading pack, set the tone, and students get an AI that follows your syllabus rather than the internet's opinion.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-dm-primary-bright">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-dm-foreground sm:text-4xl">
            Questions we usually get first.
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-dm-border bg-dm-card/40 px-6 backdrop-blur">
          <Accordion items={ITEMS} />
        </div>
      </div>
    </section>
  )
}

export default Faq
