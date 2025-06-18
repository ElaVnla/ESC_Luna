import { PageMetaData } from '@/components'
import ConfirmTicket from './components/ConfirmTicket'
import FooterWithLinks from './components/FooterWithLinks'
import TopNavBar4 from './components/TopNavBar4'

const BookingConfirm = () => {
  return (
    <>
      <PageMetaData title="Booking Confirmed" />

      <TopNavBar4 />

      <main>
        <ConfirmTicket />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default BookingConfirm
