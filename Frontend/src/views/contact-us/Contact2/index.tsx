import { PageMetaData } from '@/components'
import ContactForm from './components/ContactForm'
import ContactLocations from './components/ContactLocations'
import FooterWithLinks from './components/FooterWithLinks'
import TopNavBar11 from './components/TopNavBar11'

const Contact2 = () => {
  return (
    <>
      <PageMetaData title="Contact Us 2" />

      <TopNavBar11 />

      <main>
        <ContactForm />
        <ContactLocations />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default Contact2
