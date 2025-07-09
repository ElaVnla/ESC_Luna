import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import FooterWithSubscribe from './components/FooterWithSubscribe'
import Hero from './components/Hero'
import TopCategories from './components/TopCategories'
import TopNavBar from './components/TopNavBar'
import TourPackages from './components/TourPackages'
import TourStories from './components/TourStories'

const TourHome = () => {
  return (
    <>
      <PageMetaData title="Tour - Home" />

      <TopNavBar />

      <main>
        <Hero />
        <TourPackages />
        <ActionBox />
        <TopCategories />
        <TourStories />
      </main>

      <FooterWithSubscribe />
    </>
  )
}

export default TourHome
