import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../ui/Button'
import Logo from './Logo'
import { PARTNER_EMAIL } from '../../lib/env'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#institutions', label: 'For institutions' },
  { href: '#faq', label: 'FAQ' },
]

const contactMailto = `mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent('DocMind — inquiry')}`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMobileOpen(false)

  const scrollToInstitutions = () => {
    document.getElementById('institutions')?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-dm-border/60 bg-dm-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center">
          <Logo size="xl" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dm-muted transition-colors hover:text-dm-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={contactMailto}
            className={buttonVariants({ variant: 'ghost', size: 'md' })}
          >
            Contact
          </a>
          <button
            type="button"
            onClick={scrollToInstitutions}
            className={buttonVariants({ variant: 'primary', size: 'md' })}
          >
            Partner with us
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-dm-border text-dm-foreground md:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-dm-border/60 bg-dm-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-lg px-3 py-2 text-sm font-medium text-dm-muted transition-colors hover:bg-dm-card hover:text-dm-foreground"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'mt-3 w-full')}
              onClick={scrollToInstitutions}
            >
              Partner with us
            </button>
            <a
              href={contactMailto}
              className={cn(buttonVariants({ variant: 'secondary', size: 'md' }), 'w-full')}
              onClick={handleNavClick}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
