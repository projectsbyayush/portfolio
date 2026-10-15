import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

export function Reveal({ children, className, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px 0px' }}
      transition={{ duration: 0.5, delay, ease: [0.05, 0.7, 0.1, 1] }}
    >
      {children}
    </motion.div>
  )
}
