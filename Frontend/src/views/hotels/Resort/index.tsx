import { PageMetaData } from '@/components'
import About from './components/About'
import ActionBox from './components/ActionBox'
import CenteredFooter from './components/CenteredFooter'
import FavoriteRoomSlider from './components/FavoriteRoomSlider'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import MonthlyOffers from './components/MonthlyOffers'
import TestimonialsSlider from './components/TestimonialsSlider'
import TopNavBar3 from './components/TopNavBar3'

const HotelResort = () => {
  return (
    <>
      <PageMetaData title="Hotel - Resort" />

      <TopNavBar3 />

      <main>
        <Hero />

        <About />

        <TestimonialsSlider />

        <FavoriteRoomSlider />

        <MonthlyOffers />

        <Gallery />

        <ActionBox />

        <CenteredFooter />
      </main>
    </>
  )
}

export default HotelResort
