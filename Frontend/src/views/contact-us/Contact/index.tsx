import { PageMetaData } from '@/components'
import AddressMap from './components/AddressMap'
import ContactForm from './components/ContactForm'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar11 from './components/TopNavBar11'

const Contact = () => {
  return (
    <>
      <PageMetaData title="Contact Us" />

      <TopNavBar11 />

      <main>
        <Hero />
        <ContactForm />
        <AddressMap />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default Contact
