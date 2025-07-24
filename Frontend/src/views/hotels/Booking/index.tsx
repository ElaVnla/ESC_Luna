import { PageMetaData } from '@/components'
import BookingDetails from './components/BookingDetails'
import Hero from './components/Hero'
import TopNavBar4 from './components/TopNavBar4'

const HotelBooking = () => {
  return (
    <>
      <PageMetaData title="Hotel - Booking" />

      <main>
        <TopNavBar4 />
        <Hero />
        <BookingDetails />
      </main>
    </>
  )
}

export default HotelBooking
