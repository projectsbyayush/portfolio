import { Icon } from '@/components/icon'
import { useScrolled, useScrollProgress } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const RADIUS = 26
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function ScrollTopFab() {
  const visible = useScrolled(480)
  const progress = useScrollProgress()

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'state-layer fixed right-4 bottom-6 z-40 grid size-14 place-items-center rounded-full bg-primary-container text-on-primary-container [--state-color:var(--md-on-primary-container)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-none',
        'lg:right-8 lg:bottom-8',
        visible
          ? 'scale-100 opacity-100'
          : 'pointer-events-none scale-90 opacity-0',
      )}
    >
      <svg
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -rotate-90"
      >
        <circle
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-on-primary-container/20"
        />
        <circle
          cx="28"
          cy="28"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="text-primary"
        />
      </svg>
      <Icon name="north" className="relative" />
    </button>
  )
}
