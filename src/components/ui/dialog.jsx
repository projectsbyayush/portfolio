import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Icon } from '@/components/icon'
import { cn } from '@/lib/utils'

export function Dialog({ open, onClose, icon, title, children, actions, className }) {
  useEffect(() => {
    if (!open) return
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center p-5">
          <motion.button
            type="button"
            aria-label="Close dialog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/40"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className={cn(
              'relative max-h-[calc(100svh-3rem)] w-full max-w-lg overflow-y-auto rounded-xl bg-surface-container-high p-6',
              className,
            )}
          >
            {icon ? (
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-secondary-container text-on-secondary-container">
                <Icon name={icon} />
              </span>
            ) : null}
            <h2
              className={cn(
                'text-headline-sm text-balance text-on-surface',
                icon && 'mt-4 text-center',
              )}
            >
              {title}
            </h2>
            <div className="mt-3 text-body-md text-pretty text-on-surface-variant">
              {children}
            </div>
            {actions ? (
              <div className="mt-6 flex flex-wrap justify-end gap-2">
                {actions}
              </div>
            ) : null}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
