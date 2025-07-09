import { PageMetaData } from '@/components'
import About from './components/About'
import ActionBox from './components/ActionBox'
import FooterWithLinks from './components/FooterWithLinks'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import NearbyPlaces from './components/NearbyPlaces'
import Services from './components/Services'
import SpecialOfferSlider from './components/SpecialOfferSlider'
import TopNavBar2 from './components/TopNavBar2'

const HotelChain = () => {
  return (
    <>
      <PageMetaData title="Hotel - Chain" />

      <TopNavBar2 />

      <main>
        <Hero />

        <SpecialOfferSlider />

        <About />

        <NearbyPlaces />

        <Services />

        <ActionBox />

        <Gallery />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default HotelChain
