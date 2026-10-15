import { Icon } from '@/components/icon'
import { Tooltip } from '@/components/ui/tooltip'
import { setTheme, useTheme } from '@/lib/hooks'
import { cn } from '@/lib/utils'

const options = [
  { key: 'light', icon: 'light_mode', label: 'Light mode' },
  { key: 'dark', icon: 'dark_mode', label: 'Dark mode' },
]

export function ThemeToggle() {
  const { theme } = useTheme()

  return (
    <div
      role="group"
      aria-label="Theme"
      className="flex h-10 shrink-0 items-center rounded-full border border-outline-variant"
    >
      {options.map((option, index) => {
        const active = theme === option.key
        return (
          <Tooltip
            key={option.key}
            label={option.label}
            side="bottom"
            className="h-full"
          >
            <button
              type="button"
              aria-pressed={active}
              onClick={() => setTheme(option.key)}
              className={cn(
                'state-layer grid h-full w-10 place-items-center transition-colors duration-200',
                index === 0 ? 'rounded-l-full' : 'rounded-r-full',
                active
                  ? 'bg-secondary-container text-on-secondary-container [--state-color:var(--md-on-secondary-container)]'
                  : 'text-on-surface-variant [--state-color:var(--md-on-surface)]',
              )}
            >
              <Icon
                name={option.icon}
                filled={active}
                className="text-[20px]"
              />
            </button>
          </Tooltip>
        )
      })}
    </div>
  )
}
