import { useState } from 'react'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { faq } from '@/lib/portfolio'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <Section
      id="faq"
      number="04"
      label="FAQ"
      icon="info"
      title="Questions,"
      titleAccent="Answered."
    >
      <Reveal>
        <div className="overflow-hidden rounded-xl bg-surface-container-low">
          {faq.map((item, index) => {
            const isOpen = open === index
            return (
              <div
                key={item.question}
                className={cn(index > 0 && 'border-t border-outline-variant')}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left md:px-5 md:py-5"
                  >
                    <span
                      className={cn(
                        'grid size-8 shrink-0 place-items-center rounded-full transition-[transform,background-color,color] duration-300',
                        isOpen
                          ? 'rotate-45 bg-primary text-on-primary'
                          : 'bg-tertiary-container text-on-tertiary-container',
                      )}
                    >
                      <Icon name="add" className="text-[18px]" />
                    </span>
                    <span className="flex-1 text-title-sm text-on-surface md:text-title-md">
                      {item.question}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={cn(
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-body-md text-pretty text-on-surface-variant md:px-5 md:pl-[4.5rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Reveal>
    </Section>
  )
}
