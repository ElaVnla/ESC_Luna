import { PageMetaData } from '@/components'
import FooterWithLinks from '@/components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar4 from '@/layouts/UserLayout/TopNavBar'
import EditGuestDetails from './components/EditGuestDetails'

const EditBooking = () => {
  return (
    <>
      <PageMetaData title="Tour - Booking" />

      <TopNavBar4 />

      <main>
        <Hero />
        <EditGuestDetails />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default EditBooking
