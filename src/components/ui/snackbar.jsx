import { AnimatePresence, motion } from 'motion/react'

export function Snackbar({ open, message, onDismiss }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.2, ease: [0.05, 0.7, 0.1, 1] }}
          className="fixed bottom-4 left-4 z-50 flex max-w-sm items-center gap-2 rounded-xs bg-inverse-surface py-2 pr-2 pl-4"
        >
          <p className="text-body-md text-inverse-on-surface">{message}</p>
          <button
            type="button"
            onClick={onDismiss}
            className="state-layer shrink-0 rounded-xs px-3 py-2 text-label-lg text-inverse-primary [--state-color:var(--md-inverse-primary)]"
          >
            Dismiss
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
