import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import HotelLists from './components/HotelLists'
import TopNavBar4 from './components/TopNavBar4'

const HotelsList = () => {
  return (
    <>
      <PageMetaData title="Hotel - List" />

      <main>
        <TopNavBar4 />
        <Hero />
        <HotelLists />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default HotelsList
