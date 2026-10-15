import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function Section({
  id,
  number,
  label,
  icon,
  title,
  titleAccent,
  description,
  className,
  children,
}) {
  return (
    <section id={id} className={cn('scroll-mt-24', className)}>
      <div className="mx-auto w-full max-w-[1480px] lg:px-11 px-4 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.02] font-medium tracking-[-0.03em] text-balance text-on-surface">
              {title}{' '}
              <span className="text-on-surface-variant">{titleAccent}</span>
            </h2>
            <p className="flex shrink-0 items-center gap-2 pb-1 text-label-md tracking-[0.16em] uppercase text-on-surface-variant">
              <Icon name={icon} className="text-[18px] text-primary" />
              {number} — {label}
            </p>
          </div>
          {description ? (
            <p className="mt-5 max-w-2xl text-body-lg text-pretty text-on-surface-variant">
              {description}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  )
}
