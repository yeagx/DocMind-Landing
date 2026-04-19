import { cn } from '../../lib/utils'
import docmindLogo from '../../assets/docmind-logo.png'

/**
 * DocMind logomark + wordmark.
 */
export function Logo({ className, withWordmark = true, size = 'md' }) {
  const markSize =
    size === 'xl'
      ? 'h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11'
      : size === 'lg'
        ? 'h-8 w-8 md:h-9 md:w-9'
        : 'h-7 w-7 sm:h-8 sm:w-8'
  const wordmarkClass =
    size === 'xl'
      ? 'text-lg sm:text-xl'
      : size === 'lg'
        ? 'text-base sm:text-lg'
        : 'text-sm sm:text-base'
  return (
    <div className={cn('flex items-center gap-2 sm:gap-2.5', className)}>
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
