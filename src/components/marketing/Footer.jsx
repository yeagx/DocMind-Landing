import Logo from './Logo'
import { PARTNER_EMAIL } from '../../lib/env'

export function Footer() {
  return (
    <footer className="relative border-t border-dm-border/60 bg-dm-background/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo size="md" />
          <p className="mt-4 text-sm leading-relaxed text-dm-muted">
            DocMind turns your institution's documents into a conversation.
            Built for students, curated by instructors, owned by admins.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-dm-muted">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#features" className="text-dm-foreground/80 transition-colors hover:text-dm-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-dm-foreground/80 transition-colors hover:text-dm-foreground">
                  How it works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-dm-foreground/80 transition-colors hover:text-dm-foreground">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-dm-muted">
              Institutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#institutions" className="text-dm-foreground/80 transition-colors hover:text-dm-foreground">
                  Partner with us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PARTNER_EMAIL}`}
                  className="text-dm-foreground/80 transition-colors hover:text-dm-foreground"
                >
                  {PARTNER_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dm-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-dm-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} DocMind. All rights reserved.</p>
          <p>Built for curious minds and thoughtful institutions.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
