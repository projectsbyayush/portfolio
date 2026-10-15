import { cn } from '@/lib/utils'

export function TextField({ id, label, textarea = false, className, ...props }) {
  const Comp = textarea ? 'textarea' : 'input'

  return (
    <div className={cn('text-field', className)}>
      <Comp
        id={id}
        placeholder=" "
        className={cn(
          'block w-full rounded-xs border border-outline bg-transparent px-4 pt-4 pb-3.5 text-body-lg text-on-surface outline-none transition-colors duration-200 focus:border-primary focus:ring-1 focus:ring-primary',
          textarea && 'resize-y',
        )}
        {...props}
      />
      <label htmlFor={id} className="tf-label">
        {label}
      </label>
    </div>
  )
}
