import { PageMetaData } from '@/components'
import BookingSearch from './components/BookingSearch'
import FooterWithLinks from './components/FooterWithLinks'
import TopNavBar9 from './components/TopNavBar9'
import TripCategories from './components/TripCategories'

const MultipleSearch = () => {
  return (
    <>
      <PageMetaData title="Hero - Multiple Search" />

      <TopNavBar9 />

      <main>
        <BookingSearch />
        <TripCategories />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default MultipleSearch
