import { cn } from '../../lib/utils'
import docmindLogo from '../../assets/docmind-logo.png'

/**
 * DocMind logomark + wordmark.
 */
export function Logo({ className, withWordmark = true, size = 'md' }) {
  const markSize =
    size === 'xl'
      ? 'h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10'
      : size === 'lg'
        ? 'h-7 w-7 md:h-8 md:w-8'
        : 'h-6 w-6 sm:h-7 sm:w-7'
  const wordmarkClass =
    size === 'xl'
      ? 'text-base sm:text-lg'
      : size === 'lg'
        ? 'text-sm sm:text-base'
        : 'text-xs sm:text-sm'
  return (
    <div className={cn('flex items-center gap-1.5 sm:gap-2', className)}>
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
