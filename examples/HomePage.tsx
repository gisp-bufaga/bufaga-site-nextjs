import {
  Navbar,
  Footer,
  Hero,
  FeaturedIn,
  Problem,
  Solutions,
  Dashboard,
  Values,
  Sustainability,
  Team,
  ContactForm,
} from '@/components'

/**
 * Homepage completa usando tutti i componenti v2
 * 
 * Questa è la struttura esatta della landing page ottimizzata,
 * con tutti i componenti in ordine e pronta per l'uso.
 */
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedIn />
        <Problem />
        <Solutions />
        <Dashboard />
        <Values />
        <Sustainability />
        <Team />
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}
