import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import Hero from './components/Hero'
import FooterWithLinks from '@/components/FooterWithLinks'
import BookingDetails from './components/BookingDetails'

const ReviewBooking = () => {
  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />

      <main>
        <TopNavBar />
        <Hero />
        <BookingDetails />
      </main>

    </>
  )
}

export default ReviewBooking
