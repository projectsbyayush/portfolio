import { iconCodepoints } from '@/lib/icon-codepoints'
import { cn } from '@/lib/utils'

export function Icon({ name, className, filled = false, ...props }) {
  const codepoint = iconCodepoints[name]

  return (
    <span
      aria-hidden="true"
      data-filled={filled ? '' : undefined}
      className={cn('material-symbols-rounded', className)}
      {...props}
    >
      {codepoint ? String.fromCodePoint(codepoint) : null}
    </span>
  )
}
