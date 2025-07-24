import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import FooterWithLinks from '@/components/FooterWithLinks'
import NavigateToBooking from './components/NavigateToBooking'

const DirectBooking = () => {
  return (
    <>
      <PageMetaData title="Hotel - Booking" />

      <main>
        <TopNavBar />
        <NavigateToBooking />
      </main>

    </>
  )
}

export default DirectBooking
