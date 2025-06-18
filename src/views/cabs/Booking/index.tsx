import { PageMetaData } from '@/components'
import BookingDetail from './components/BookingDetail'
import Footer from './components/Footer'
import TopNavBar4 from './components/TopNavBar4'

const CabBooking = () => {
  return (
    <>
      <PageMetaData title="Cab - Booking" />

      <TopNavBar4 />

      <main>
        <BookingDetail />
      </main>

      <Footer />
    </>
  )
}

export default CabBooking
