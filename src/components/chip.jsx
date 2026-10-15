import { Icon } from '@/components/icon'
import { cn } from '@/lib/utils'

export function Chip({ children, icon, dot = false, tone = 'outlined', className }) {
  return (
    <span
      className={cn(
        'inline-flex h-8 items-center gap-2 rounded-sm px-4 text-label-lg whitespace-nowrap',
        tone === 'outlined' &&
          'border border-outline-variant bg-transparent text-on-surface-variant',
        tone === 'tonal' &&
          'bg-secondary-container text-on-secondary-container',
        className,
      )}
    >
      {dot ? (
        <span aria-hidden="true" className="size-2 rounded-full bg-tertiary" />
      ) : null}
      {icon ? <Icon name={icon} className="text-[18px]" /> : null}
      {children}
    </span>
  )
}
