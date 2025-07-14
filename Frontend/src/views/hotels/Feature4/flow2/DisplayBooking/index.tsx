import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import FooterWithLinks from '@/components/FooterWithLinks'

const DirectBooking = () => {
  return (
    <>
      <PageMetaData title="Hotel - Booking" />

      <main>
        <TopNavBar />
      </main>

      <FooterWithLinks />

      <Footer />
    </>
  )
}

export default DirectBooking
