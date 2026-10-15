import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Hero } from '@/components/hero'
import { ScrollTopFab } from '@/components/scroll-top-fab'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Stack } from '@/components/stack'
import { useActiveSection } from '@/lib/hooks'
import { sectionIds } from '@/lib/navigation'

export default function App() {
  const active = useActiveSection(sectionIds)

  return (
    <div id="top" className="min-h-svh bg-surface text-on-surface">
      <SiteHeader active={active} />
      <main>
        <Hero />
        <About />
        <Services />
        <Stack />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollTopFab />
    </div>
  )
}
