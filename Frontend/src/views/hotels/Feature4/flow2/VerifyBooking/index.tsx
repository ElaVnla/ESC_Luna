import { PageMetaData } from '@/components'
import AvailabilityFilter from './components/AvailabilityFilter'
import FooterWithLinks from '@/components/FooterWithLinks'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'

const VerifyBooking = () => {
  return (
    <>
      <PageMetaData title="Verify Booking" />

      <TopNavBar />

      <main>
        <AvailabilityFilter />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default VerifyBooking
