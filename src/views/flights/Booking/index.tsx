import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import PaymentDetails from './components/PaymentDetails'
import TopNavBar4 from './components/TopNavBar4'

const FlightBooking = () => {
  return (
    <>
      <PageMetaData title="Flight - Booking" />

      <TopNavBar4 />

      <main>
        <PaymentDetails />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default FlightBooking
