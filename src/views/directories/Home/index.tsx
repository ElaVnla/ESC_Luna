import { PageMetaData } from '@/components'
import About from './components/About'
import ActionBox from './components/ActionBox'
import CategorySlider from './components/CategorySlider'
import CenteredFooter from './components/CenteredFooter'
import ExplorePlaces from './components/ExplorePlaces'
import Hero from './components/Hero'
import OfferBox from './components/OfferBox'
import SpecialOffersSlider from './components/SpecialOffersSlider'
import TestimonialSlider from './components/TestimonialSlider'
import TopCities from './components/TopCities'
import TopNavBar6 from './components/TopNavBar6'

const DirectoryHome = () => {
  return (
    <>
      <PageMetaData title="Directories - Home" />

      <TopNavBar6 />

      <main>
        <Hero />
        <CategorySlider />
        <ExplorePlaces />
        <OfferBox />
        <ActionBox />
        <About />
        <TestimonialSlider />
        <TopCities />
        <SpecialOffersSlider />
      </main>

      <CenteredFooter />
    </>
  )
}

export default DirectoryHome
