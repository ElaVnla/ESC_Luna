import { PageMetaData } from '@/components'
import AboutHotel from './components/AboutHotel'
import AvailabilityFilter from './components/AvailabilityFilter'
import FooterWithLinks from './components/FooterWithLinks'
import HotelGallery from './components/HotelGallery'
import TopNavBar4 from './components/TopNavBar4'

const HotelDetails = () => {
  return (
    <>
      <PageMetaData title="Hotel - Details" />

      <TopNavBar4 />

      <main>
        <AvailabilityFilter />
        <HotelGallery />
        <AboutHotel />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default HotelDetails
