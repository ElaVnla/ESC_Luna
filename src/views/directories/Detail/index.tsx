import { PageMetaData } from '@/components'
import CenteredFooter from './components/CenteredFooter'
import DirectoryDetails from './components/DirectoryDetails'
import Hero from './components/Hero'
import TopNavBar7 from './components/TopNavBar7'

const DirectoryDetail = () => {
  return (
    <>
      <PageMetaData title="Directories - Details" />

      <TopNavBar7 />

      <main>
        <Hero />
        <DirectoryDetails />
      </main>

      <CenteredFooter />
    </>
  )
}

export default DirectoryDetail
