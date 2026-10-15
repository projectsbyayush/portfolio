import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { services } from '@/lib/portfolio'
import { cn } from '@/lib/utils'

const tones = [
  'bg-primary-container text-on-primary-container',
  'bg-secondary-container text-on-secondary-container',
  'bg-tertiary-container text-on-tertiary-container',
]

export function Services() {
  return (
    <Section
      id="services"
      number="02"
      label="What I Do"
      icon="work"
      title="Services"
      titleAccent="I Provide."
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <div className="flex h-full flex-col rounded-xl bg-surface-container-low p-6">
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-full',
                    tones[index % tones.length],
                  )}
                >
                  <Icon name={service.icon} filled />
                </span>
                <span className="text-label-md text-on-surface-variant">
                  / {service.n}
                </span>
              </div>
              <h3 className="mt-5 text-title-lg text-on-surface">
                {service.title}
              </h3>
              <p className="mt-2 text-body-md text-pretty text-on-surface-variant">
                {service.description}
              </p>
              <p className="mt-auto pt-5 text-label-md tracking-[0.08em] text-primary">
                {service.tags}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
