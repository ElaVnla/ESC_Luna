import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar4 from './components/TopNavBar4'
import TourBookingDetails from './components/TourBookingDetails'

const TourBooking = () => {
  return (
    <>
      <PageMetaData title="Tour - Booking" />

      <TopNavBar4 />

      <main>
        <Hero />
        <TourBookingDetails />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default TourBooking
