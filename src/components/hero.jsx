import { useState } from 'react'
import { Chip } from '@/components/chip'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SocialIcon } from '@/components/social-icon'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { Tooltip } from '@/components/ui/tooltip'
import { based, marqueeItems, site, socials, work } from '@/lib/portfolio'

const currentYear = new Date().getFullYear()

function RingsArt({ className }) {
  return (
    <svg
      viewBox="0 0 120 62"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="26" cy="31" rx="11" ry="25" />
      <ellipse cx="40" cy="31" rx="11" ry="25" />
      <ellipse cx="54" cy="31" rx="11" ry="25" />
      <ellipse cx="68" cy="31" rx="11" ry="25" />
      <path d="M82 31a25 25 0 0 1 25 25" />
      <path d="M82 31a25 25 0 0 1 25-25" opacity=".85" />
      <path d="M82 6v50" opacity=".9" />
    </svg>
  )
}

function GlobeArt({ className }) {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="60" cy="36" rx="52" ry="30" />
      <ellipse cx="60" cy="36" rx="34" ry="30" />
      <ellipse cx="60" cy="36" rx="15" ry="30" />
      <line x1="8" y1="36" x2="112" y2="36" />
      <path d="M18 18c10 6 28 9 42 9s32-3 42-9" />
      <path d="M18 54c10-6 28-9 42-9s32 3 42 9" />
    </svg>
  )
}

export function Hero() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="mx-auto w-full max-w-[1480px] lg:px-11 px-4 pt-6 md:px-8 md:pt-8">
      <div className="grid gap-3 lg:grid-cols-[1.55fr_1fr]">
        <Reveal>
          <div className="flex h-full flex-col rounded-xl bg-surface-container-low p-6 md:p-8">
            <Tooltip label="Open to work" side="bottom" className="w-fit">
              <span className="relative inline-flex">
                <img
                  src="/duck.png"
                  alt={`${site.name} avatar`}
                  width="192"
                  height="192"
                  fetchPriority="high"
                  decoding="async"
                  className="size-20 rounded-full bg-surface-container object-cover md:size-24"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-1 bottom-1 size-4 rounded-full bg-primary ring-[3px] ring-surface-container-low"
                />
              </span>
            </Tooltip>
            <h1 className="mt-8 text-[clamp(2rem,4.8vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.03em] text-balance text-on-surface">
              {site.name} is a {site.role}{' '}
              <span className="text-on-surface-variant">{site.heroMuted}</span>
            </h1>
            <ul className="mt-6 flex flex-wrap gap-2">
              {site.tags.map((tag) => (
                <li key={tag}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col items-center justify-center gap-5 rounded-xl bg-secondary-container p-6 text-center text-on-secondary-container md:p-8">
            <RingsArt className="w-28 opacity-90 md:w-32" />
            <h2 className="text-headline-sm text-balance md:text-[1.75rem] md:leading-8">
              Have a project in mind?
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="state-layer inline-flex max-w-full items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-title-sm text-on-primary [--state-color:var(--md-on-primary)]"
            >
              <Icon name="mail" className="text-[20px]" />
              <span className="truncate">{site.email}</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div
          aria-hidden="true"
          className="mt-3 overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low py-3.5"
        >
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {marqueeItems.map((item) => (
                  <span
                    key={item}
                    className="flex items-center text-label-md tracking-[0.14em] whitespace-nowrap uppercase text-on-surface-variant"
                  >
                    <span className="px-4">{item}</span>
                    <span className="text-primary">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16}>
        <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="state-layer flex items-center justify-center gap-2 rounded-full bg-surface-container-high px-3 py-3 text-label-lg text-on-surface [--state-color:var(--md-on-surface)]"
              >
                <SocialIcon social={social} />
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div id="work" className="mt-3 grid scroll-mt-24 gap-3 lg:grid-cols-[1fr_1.55fr]">
        <Reveal>
          <div className="flex h-full flex-col rounded-xl bg-tertiary-container p-6 text-on-tertiary-container md:p-8">
            <GlobeArt className="w-24 opacity-90 md:w-28" />
            <p className="mt-auto pt-10 text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.15] font-medium tracking-[-0.02em]">
              Based in
              <br />
              {based.city}
              <br />
              <span className="text-on-tertiary-container/70">
                {based.timezone}
              </span>
            </p>
            <p className="mt-4 text-body-md opacity-80">{based.note}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col rounded-xl bg-surface-container-low p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4 pb-4">
              <h2 className="text-title-lg text-on-surface">Selected Work</h2>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="state-layer inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-label-md text-on-surface-variant transition-colors hover:text-on-surface [--state-color:var(--md-on-surface)]"
              >
                GitHub
                <Icon name="arrow_outward" className="text-[16px]" />
              </a>
            </div>
            <ul className="grid flex-1 gap-2 sm:grid-cols-3">
              {work.map((project) => (
                <li key={project.title} className="flex">
                  <button
                    type="button"
                    onClick={() => setSelected(project)}
                    aria-haspopup="dialog"
                    className="state-layer flex flex-1 flex-col rounded-lg border-t border-outline-variant p-4 text-left [--state-color:var(--md-on-surface)] transition-colors hover:bg-surface-container-high/60"
                  >
                    <span className="text-label-md text-on-surface-variant">
                      / {project.n}
                    </span>
                    <b className="mt-1.5 text-title-md font-medium text-on-surface">
                      {project.title}
                    </b>
                    <p className="mt-2 text-body-md text-pretty text-on-surface-variant">
                      {project.description}
                    </p>
                    <span className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Chip key={tag} className="h-6 px-2.5 text-label-md">
                          {tag}
                        </Chip>
                      ))}
                    </span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-label-md text-primary">
                      View
                      <Icon name="arrow_outward" className="text-[16px]" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-outline-variant pt-4 text-label-md text-on-surface-variant">
              <span>
                © {currentYear} {site.name}
              </span>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="state-layer inline-flex items-center gap-1.5 rounded-full px-2 py-1 transition-colors hover:text-on-surface [--state-color:var(--md-on-surface)]"
              >
                More on GitHub
                <Icon name="arrow_outward" className="text-[16px]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        icon="code_blocks"
        title={selected?.title ?? ''}
        actions={
          <>
            <Button variant="ghost" onClick={() => setSelected(null)}>
              Close
            </Button>
            <Button asChild>
              <a href={selected?.href} target="_blank" rel="noreferrer">
                Open on GitHub
                <Icon
                  name="arrow_outward"
                  data-icon="inline-end"
                  className="text-[18px]"
                />
              </a>
            </Button>
          </>
        }
      >
        {selected ? (
          <>
            <p>{selected.description}</p>
            <span className="mt-4 flex flex-wrap gap-1.5">
              {selected.tags.map((tag) => (
                <Chip key={tag} className="h-7 px-3">
                  {tag}
                </Chip>
              ))}
            </span>
          </>
        ) : null}
      </Dialog>
    </section>
  )
}
