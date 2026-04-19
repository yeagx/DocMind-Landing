import { cn } from '../../lib/utils'
import docmindLogo from '../../assets/docmind-logo.png'

/**
 * DocMind logomark + wordmark.
 */
export function Logo({ className, withWordmark = true, size = 'md' }) {
  const markSize =
    size === 'xl'
      ? 'h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14'
      : size === 'lg'
        ? 'h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11'
        : 'h-8 w-8 sm:h-9 sm:w-9'
  const wordmarkClass =
    size === 'xl'
      ? 'text-xl sm:text-2xl md:text-2xl'
      : size === 'lg'
        ? 'text-lg sm:text-xl'
        : 'text-base sm:text-lg'
  return (
    <div className={cn('flex items-center gap-2.5 sm:gap-3', className)}>
      <img
        src={docmindLogo}
        alt="DocMind"
        className={cn('object-contain shrink-0', markSize)}
      />
      {withWordmark && (
        <span
          className={cn(
            'font-semibold tracking-tight text-dm-foreground',
            wordmarkClass,
          )}
        >
          DocMind
        </span>
      )}
    </div>
  )
}

export default Logo
