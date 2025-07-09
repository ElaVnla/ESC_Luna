import { PageMetaData } from '@/components'
import FooterWithLinks from './components/FooterWithLinks'
import Gallery from './components/Gallery'
import TopNavBar8 from './components/TopNavBar8'

const ImageGallery = () => {
  return (
    <>
      <PageMetaData title="Hero - Image Gallery" />

      <TopNavBar8 />

      <main>
        <Gallery />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default ImageGallery
