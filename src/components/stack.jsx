import { useState } from 'react'
import { Chip } from '@/components/chip'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { stackGroups, stackLead } from '@/lib/portfolio'
import { cn } from '@/lib/utils'

const tones = [
  'bg-primary-container text-on-primary-container',
  'bg-secondary-container text-on-secondary-container',
  'bg-tertiary-container text-on-tertiary-container',
]

export function Stack() {
  const [query, setQuery] = useState('')
  const normalized = query.trim().toLowerCase()
  const matches = stackGroups.map((group) =>
    group.items.filter((item) => item.toLowerCase().includes(normalized)),
  )
  const empty = normalized !== '' && matches.every((items) => items.length === 0)

  return (
    <Section
      id="stack"
      number="03"
      label="Full Stack"
      icon="layers"
      title="Tools"
      titleAccent="I Use."
      description={stackLead}
    >
      <div className="flex h-14 items-center gap-3 rounded-full border border-outline-variant bg-surface-container-high px-4 md:px-5">
        <Icon name="search" className="shrink-0 text-on-surface-variant" />
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the stack — React, SQL, Java…"
          aria-label="Search technologies"
          className="h-full w-full bg-transparent text-body-lg text-on-surface outline-none placeholder:text-on-surface-variant"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="state-layer grid size-8 shrink-0 place-items-center rounded-full text-on-surface-variant [--state-color:var(--md-on-surface)]"
          >
            <Icon name="close" className="text-[18px]" />
          </button>
        ) : null}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {stackGroups.map((group, index) => {
          if (matches[index].length === 0) return null
          return (
            <Reveal key={group.group} delay={index * 0.05}>
              <div className="h-full rounded-xl bg-surface-container-low p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'grid size-9 shrink-0 place-items-center rounded-full',
                      tones[index % tones.length],
                    )}
                  >
                    <Icon name={group.icon} filled className="text-[20px]" />
                  </span>
                  <h3 className="text-title-lg text-on-surface">
                    {group.group}
                  </h3>
                </div>
                <p className="mt-2 text-body-md text-on-surface-variant">
                  {group.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {matches[index].map((item) => (
                    <li key={item}>
                      <Chip>{item}</Chip>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      {empty ? (
        <p className="mt-6 text-body-md text-on-surface-variant">
          No technologies match “{query.trim()}”. Try “React”, “SQL”, or “Java”.
        </p>
      ) : null}
    </Section>
  )
}
