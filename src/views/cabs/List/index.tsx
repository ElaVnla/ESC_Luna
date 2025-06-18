import { PageMetaData } from '@/components'
import CabCardList from './components/CabCardList'
import FooterWithLinks from './components/FooterWithLinks'
import Hero from './components/Hero'
import TopNavBar4 from './components/TopNavBar4'

const CabList = () => {
  return (
    <>
      <PageMetaData title="Cab - List" />

      <TopNavBar4 />

      <main>
        <Hero />
        <CabCardList />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default CabList
