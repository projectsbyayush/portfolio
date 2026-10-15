import { Icon } from '@/components/icon'
import { site, socials } from '@/lib/portfolio'

const currentYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer>
      <div className="mx-auto flex w-full max-w-[1480px] lg:px-11 flex-col gap-4 px-4 py-10 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-label-md text-on-surface-variant">
          © {currentYear} {site.name} <b>{site.handle}</b> · {site.location}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="state-layer inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-label-md text-on-surface-variant transition-colors hover:text-on-surface [--state-color:var(--md-on-surface)]"
            >
              {social.label}
              <Icon name="arrow_outward" className="text-[14px]" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
