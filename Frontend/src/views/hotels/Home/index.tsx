import { PageMetaData } from '@/components'
import Hero from './components/Hero'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'

const HotelHome = () => {
  return (
    <>
      <PageMetaData title="Hotel - Home" />

      <TopNavBar />

      <main>
        <Hero />
      </main>
    </>
  )
}

export default HotelHome
