import { PageMetaData } from '@/components'
import CabDetail from './components/CabDetail'
import FooterWithLinks from './components/FooterWithLinks'
import MainTitle from './components/MainTitle'
import TopNavBar4 from './components/TopNavBar4'

const CabDetails = () => {
  return (
    <>
      <PageMetaData title="Cab - Details" />

      <TopNavBar4 />

      <main>
        <MainTitle />
        <CabDetail />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default CabDetails
