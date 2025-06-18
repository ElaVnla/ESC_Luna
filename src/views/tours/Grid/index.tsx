import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar4 from './components/TopNavBar4'
import TourCardList from './components/TourCardList'

const TourGrid = () => {
  return (
    <>
      <PageMetaData title="Tour - Grid" />

      <TopNavBar4 />

      <main>
        <Hero />
        <TourCardList />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default TourGrid
