import { PageMetaData } from '@/components'
import AppsLink from './components/AppsLink'
import Clients from './components/Clients'
import FeaturedHoliday from './components/FeaturedHoliday'
import FeaturedHotels from './components/FeaturedHotels'
import Footer from './components/Footer'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import NearbyPlaces from './components/NearbyPlaces'
import OfferSlider from './components/OfferSlider'
import TestimonialsSlider from './components/TestimonialsSlider'
import TopNavBar from './components/TopNavBar'

const HotelHome = () => {
  return (
    <>
      <PageMetaData title="Hotel - Home" />

      <TopNavBar />

      <main>
        <Hero />

        <OfferSlider />

        <FeaturedHoliday />

        <FeaturedHotels />

        <Clients />

        <TestimonialsSlider />

        <NearbyPlaces />

        <AppsLink />
      </main>

      <FooterWithLinks />

      <Footer />
    </>
  )
}

export default HotelHome
