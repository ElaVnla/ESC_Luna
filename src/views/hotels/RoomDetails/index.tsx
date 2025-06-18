import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import RoomGallery from './components/RoomGallery'
import RoomSelection from './components/RoomSelection'
import TopNavBar4 from './components/TopNavBar4'

const RoomDetails = () => {
  return (
    <>
      <PageMetaData title="Hotel - Room Details" />

      <TopNavBar4 />
      <main>
        <RoomGallery />

        <RoomSelection />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default RoomDetails
