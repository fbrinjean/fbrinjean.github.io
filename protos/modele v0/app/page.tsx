import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ExpertiseSection } from '@/components/expertise-section'
import { RealisationsSection } from '@/components/realisations-section'
import { ParcoursSection } from '@/components/parcours-section'
import { FormationSection } from '@/components/formation-section'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <RealisationsSection />
        <ParcoursSection />
        <FormationSection />
      </main>
      <ContactFooter />
    </>
  )
}
