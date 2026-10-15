import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { aboutLead, education, facts, site } from '@/lib/portfolio'

export function About() {
  return (
    <Section
      id="about"
      number="01"
      label="Profile"
      icon="person"
      title="About"
      titleAccent="Me."
    >
      <div className="grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="flex h-full flex-col rounded-xl bg-surface-container-low p-6 md:p-8">
            <p className="text-[clamp(1.125rem,2vw,1.375rem)] leading-relaxed font-medium tracking-[-0.015em] text-pretty text-on-surface">
              {aboutLead}
            </p>

            <div className="mt-6 rounded-lg border border-dashed border-outline p-4">
              <b className="block text-title-md font-medium text-on-surface">
                {education.school}
              </b>
              <span className="mt-1 block text-body-md text-on-surface-variant">
                {education.detail}
              </span>
            </div>

            <div className="mt-auto grid grid-cols-3 gap-3 pt-6">
              {site.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg bg-surface-container px-3 py-4 text-center"
                >
                  <b className="block text-[1.75rem] leading-8 font-medium tracking-[-0.02em] text-on-surface">
                    {stat.value}
                    <em className="not-italic text-primary">{stat.accent}</em>
                  </b>
                  <span className="mt-1.5 block text-label-md tracking-[0.1em] uppercase text-on-surface-variant">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} delay={0.06 * (index + 1)} className="flex-1">
              <div className="flex h-full flex-col justify-center rounded-xl bg-surface-container-low p-6">
                <small className="text-label-md tracking-[0.14em] uppercase text-on-surface-variant">
                  {fact.label}
                </small>
                <b className="mt-2 text-title-lg text-on-surface">
                  {fact.value}
                </b>
                <p className="mt-2 text-body-md text-pretty text-on-surface-variant">
                  {fact.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
