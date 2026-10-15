import { cn } from '@/lib/utils'

export function Tooltip({ label, side = 'top', className, children }) {
  return (
    <span className={cn('group/tt relative inline-flex', className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute left-1/2 z-50 -translate-x-1/2 rounded-xs bg-inverse-surface px-2.5 py-1.5 text-label-md whitespace-nowrap text-inverse-on-surface opacity-0 transition-opacity duration-150 group-hover/tt:opacity-100 group-has-[:focus-visible]/tt:opacity-100',
          side === 'top' ? 'bottom-full mb-2' : 'top-full mt-2',
        )}
      >
        {label}
      </span>
    </span>
  )
}
