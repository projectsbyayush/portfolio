import { useEffect, useState } from 'react'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { Section } from '@/components/section'
import { SocialIcon } from '@/components/social-icon'
import { Button } from '@/components/ui/button'
import { Snackbar } from '@/components/ui/snackbar'
import { TextField } from '@/components/ui/text-field'
import { Tooltip } from '@/components/ui/tooltip'
import { contactCopy, site, socials } from '@/lib/portfolio'

export function Contact() {
  const [snack, setSnack] = useState(null)

  useEffect(() => {
    if (!snack) return
    const timer = setTimeout(() => setSnack(null), 6000)
    return () => clearTimeout(timer)
  }, [snack])

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Project enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(
      `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSnack('Opening your email app — I reply within 24 hours.')
  }

  return (
    <Section
      id="contact"
      number="05"
      label="Contact"
      icon="mail"
      title="Have a Project"
      titleAccent="in Mind?"
    >
      <Reveal>
        <div className="grid gap-8 rounded-xl bg-surface-container-low p-6 md:p-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-headline-sm text-balance text-on-surface md:text-[1.75rem] md:leading-8">
              {contactCopy.heading}
            </h3>
            <p className="mt-4 text-body-lg text-pretty text-on-surface-variant">
              {contactCopy.body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <Tooltip label={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="state-layer grid size-10 place-items-center rounded-full border border-outline text-on-surface-variant transition-colors hover:text-on-surface [--state-color:var(--md-on-surface)]"
                    >
                      <SocialIcon social={social} />
                    </a>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextField
              id="contact-name"
              name="name"
              label="Your name"
              required
              autoComplete="name"
            />
            <TextField
              id="contact-email"
              name="email"
              type="email"
              label="Email address"
              required
              autoComplete="email"
            />
            <TextField
              id="contact-message"
              name="message"
              label="Tell me about your project"
              textarea
              rows={5}
              required
            />
            <Button type="submit" size="lg" className="w-full">
              Send message
              <Icon
                name="arrow_forward"
                data-icon="inline-end"
                className="text-[18px]"
              />
            </Button>
          </form>
        </div>
      </Reveal>

      <Snackbar
        open={snack !== null}
        message={snack ?? ''}
        onDismiss={() => setSnack(null)}
      />
    </Section>
  )
}
