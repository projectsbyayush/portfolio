import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Icon } from '@/components/icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { useScrolled } from '@/lib/hooks'
import { destinations } from '@/lib/navigation'
import { site } from '@/lib/portfolio'
import { cn } from '@/lib/utils'

export function SiteHeader({ active }) {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-2 z-40 md:top-3">
      <div className="mx-auto w-full max-w-[1480px] px-4 md:px-8 lg:px-11">
        <div
          className={cn(
            'flex h-16 items-center gap-1.5 rounded-full border pr-2.5 pl-3 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color] duration-300 md:gap-2 md:pr-3 md:pl-4',
            scrolled || open
              ? 'border-outline-variant bg-surface-container/95'
              : 'border-outline-variant/60 bg-surface/80',
          )}
        >
          <a href="#top" className="mr-auto flex items-center gap-3">
            <img
              src="/icon.png"
              alt=""
              width="60"
              height="60"
              className="size-9 shrink-0 rounded-lg object-cover"
            />
            <span className="hidden text-title-lg text-on-surface sm:block">
              {site.name}
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {destinations.map((destination) => (
              <a
                key={destination.id}
                href={`#${destination.id}`}
                aria-current={active === destination.id ? 'true' : undefined}
                className={cn(
                  'state-layer inline-flex h-10 items-center rounded-full px-4 text-label-lg transition-colors duration-200',
                  active === destination.id
                    ? 'bg-secondary-container text-on-secondary-container [--state-color:var(--md-on-secondary-container)]'
                    : 'text-on-surface-variant hover:text-on-surface [--state-color:var(--md-on-surface)]',
                )}
              >
                {destination.label}
              </a>
            ))}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="state-layer inline-flex h-10 items-center rounded-full px-4 text-label-lg text-on-surface-variant transition-colors duration-200 hover:text-on-surface [--state-color:var(--md-on-surface)]"
            >
              Resume
            </a>
          </nav>

          <ThemeToggle />

          <Button asChild className="ml-1 hidden px-5 sm:inline-flex">
            <a href={`mailto:${site.email}`}>
              <Icon
                name="mail"
                data-icon="inline-start"
                className="text-[18px]"
              />
              Get in Touch
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="ml-0.5 text-on-surface-variant lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              key="scrim"
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            />
            <motion.div
              key="sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: [0.05, 0.7, 0.1, 1] }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-xl bg-surface-container-low pb-3 lg:hidden"
            >
              <div
                aria-hidden="true"
                className="mx-auto mt-3 h-1 w-8 rounded-full bg-on-surface-variant/40"
              />
              <nav aria-label="Mobile" className="mt-2 flex flex-col px-2">
                {destinations.map((destination) => (
                  <a
                    key={destination.id}
                    href={`#${destination.id}`}
                    onClick={close}
                    aria-current={
                      active === destination.id ? 'true' : undefined
                    }
                    className={cn(
                      'state-layer flex items-center gap-4 rounded-lg px-4 py-3.5 text-title-sm',
                      active === destination.id
                        ? 'bg-secondary-container text-on-secondary-container [--state-color:var(--md-on-secondary-container)]'
                        : 'text-on-surface [--state-color:var(--md-on-surface)]',
                    )}
                  >
                    <Icon
                      name={destination.icon}
                      filled={active === destination.id}
                      className={cn(
                        active === destination.id
                          ? 'text-on-secondary-container'
                          : 'text-on-surface-variant',
                      )}
                    />
                    {destination.label}
                  </a>
                ))}
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  onClick={close}
                  className="state-layer flex items-center gap-4 rounded-lg px-4 py-3.5 text-title-sm text-on-surface [--state-color:var(--md-on-surface)]"
                >
                  <Icon name="description" className="text-on-surface-variant" />
                  Resume
                </a>
              </nav>
              <div className="mt-2 border-t border-outline-variant p-3">
                <Button asChild variant="tonal" className="w-full">
                  <a href={`mailto:${site.email}`} onClick={close}>
                    <Icon name="mail" className="text-[18px]" />
                    Get in Touch
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
