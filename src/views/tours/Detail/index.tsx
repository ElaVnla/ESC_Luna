import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar4 from './components/TopNavBar4'
import TourInformation from './components/TourInformation'

const TourDetail = () => {
  return (
    <>
      <PageMetaData title="Tour - Details" />

      <TopNavBar4 />

      <main>
        <Hero />
        <TourInformation />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default TourDetail
