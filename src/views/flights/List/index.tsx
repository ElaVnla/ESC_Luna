import { PageMetaData } from '@/components'
import FlightLists from './components/FlightLists'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import NoticeBoard from './components/NoticeBoard'
import TopNavBar4 from './components/TopNavBar4'

const FlightList = () => {
  return (
    <>
      <PageMetaData title="Flight - List" />

      <TopNavBar4 />

      <main>
        <Hero />
        <NoticeBoard />
        <FlightLists />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default FlightList
