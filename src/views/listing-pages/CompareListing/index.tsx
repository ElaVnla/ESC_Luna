import { PageMetaData } from '@/components'
import ActionBox from './components/ActionBox'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import OurListings from './components/OurListings'
import TopNavBar4 from './components/TopNavBar4'

const CompareListing = () => {
  return (
    <>
      <PageMetaData title="Compare Listing" />

      <TopNavBar4 />

      <main>
        <Hero />
        <OurListings />
        <ActionBox />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default CompareListing
