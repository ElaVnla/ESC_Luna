import { PageMetaData } from '@/components'
import Hero from './components/Hero'
import HotelLists from './components/HotelLists'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'

const HotelsList = () => {
  return (
    <>
      <PageMetaData title="Hotel - List" />

      <main>
        <TopNavBar />
        <Hero />
        <HotelLists />
      </main>
    </>
  )
}

export default HotelsList
