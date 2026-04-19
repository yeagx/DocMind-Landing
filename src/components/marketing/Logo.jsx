import { cn } from '../../lib/utils'
import docmindLogo from '../../assets/docmind-logo.png'

/**
 * DocMind logomark + wordmark.
 */
export function Logo({ className, withWordmark = true, size = 'md' }) {
  const markSize =
    size === 'xl'
      ? 'h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32'
      : size === 'lg'
        ? 'h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24'
        : 'h-14 w-14 sm:h-16 sm:w-16'
  const wordmarkClass =
    size === 'xl'
      ? 'text-2xl sm:text-3xl lg:text-4xl'
      : size === 'lg'
        ? 'text-2xl sm:text-3xl'
        : 'text-xl sm:text-2xl'
  return (
    <div className={cn('flex items-center gap-3 sm:gap-4', className)}>
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
