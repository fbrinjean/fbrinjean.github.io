import { Contact, Curriculum, Expertise, Header, Hero, Realisations } from '@/components/portfolio'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Realisations />
        <Curriculum />
      </main>
      <Contact />
    </>
  )
}
