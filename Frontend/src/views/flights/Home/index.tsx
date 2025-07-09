import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import BlogsAndNews from './components/BlogsAndNews'
import ContainedFooter from './components/ContainedFooter'
import DestinationSteps from './components/DestinationSteps'
import Hero from './components/Hero'
import PopularDestinations from './components/PopularDestinations'
import SpecialOffers from './components/SpecialOffers'
import TopNavBar5 from './components/TopNavBar5'

const FlightHome = () => {
  return (
    <>
      <PageMetaData title="Flight - Home" />

      <TopNavBar5 />

      <main>
        <Hero />
        <SpecialOffers />
        <PopularDestinations />
        <DestinationSteps />
        <ActionBox />
        <BlogsAndNews />
      </main>

      <ContainedFooter />
    </>
  )
}

export default FlightHome
