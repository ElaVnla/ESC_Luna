import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import OfferDetails from './components/OfferDetails'
import TopNavBar4 from './components/TopNavBar4'

const OfferDetail = () => {
  return (
    <>
      <PageMetaData title="Offer Details" />

      <TopNavBar4 />
      <main>
        <Hero />
        <OfferDetails />
      </main>
      <FooterWithLinks />
    </>
  )
}

export default OfferDetail
