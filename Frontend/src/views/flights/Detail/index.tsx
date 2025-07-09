import { PageMetaData } from '@/components'
import FlightDetails from './components/FlightDetails'
import FooterWithLinks from './components/FooterWithLinks'
import TopNavBar4 from './components/TopNavBar4'

const FlightDetail = () => {
  return (
    <>
      <PageMetaData title="Flight - Details" />
      <TopNavBar4 />

      <main>
        <FlightDetails />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default FlightDetail
