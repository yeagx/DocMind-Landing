import { cn } from '../../lib/utils'
import docmindLogo from '../../assets/docmind-logo.png'

/**
 * DocMind logomark + wordmark.
 */
export function Logo({ className, withWordmark = true, size = 'md' }) {
  const markSize =
    size === 'xl' ? 'h-14 w-14' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <img
        src={docmindLogo}
        alt="DocMind"
        className={cn('object-contain', markSize)}
      />
      {withWordmark && (
        <span className="text-xl font-semibold tracking-tight text-dm-foreground">
          DocMind
        </span>
      )}
    </div>
  )
}

export default Logo
