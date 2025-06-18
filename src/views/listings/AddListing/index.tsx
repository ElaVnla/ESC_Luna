import { PageMetaData } from '@/components'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ListingForms from './components/ListingForms'
import TopNavBar4 from './components/TopNavBar4'

const AddListing = () => {
  return (
    <>
      <PageMetaData title="Listings - Add Listing" />

      <TopNavBar4 />

      <main>
        <Hero />
        <ListingForms />
      </main>

      <Footer />
    </>
  )
}

export default AddListing
