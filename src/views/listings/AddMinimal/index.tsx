import { PageMetaData } from '@/components'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MinimalListing from './components/MinimalListing'
import TopNavBar4 from './components/TopNavBar4'

const AddMinimal = () => {
  return (
    <>
      <PageMetaData title="Listings - Add Minimal" />

      <TopNavBar4 />

      <main>
        <Hero />
        <MinimalListing />
      </main>

      <Footer />
    </>
  )
}

export default AddMinimal
