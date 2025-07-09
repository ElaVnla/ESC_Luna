import { PageMetaData } from '@/components'
import AvailabilityFilter from './components/AvailabilityFilter'
import FooterWithLinks from './components/FooterWithLinks'
import TopNavBar10 from './components/TopNavBar10'

const HeroSplit = () => {
  return (
    <>
      <PageMetaData title="Hero - Split" />

      <TopNavBar10 />

      <main>
        <AvailabilityFilter />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default HeroSplit
