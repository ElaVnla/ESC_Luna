import { PageMetaData } from '@/components'
import Hero from './components/Hero'
import HotelLists from './components/HotelLists'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import { useLocation } from 'react-router-dom'
import { AvailabilityFormType } from '@/hooks/useAvailabilityForm'

const HotelsList = () => {

  const location = useLocation();
  // console.log(location)
  // const { searchParams } = location.state as {searchParams: AvailabilityFormType};
  const searchParams =
  (location.state as { searchParams: AvailabilityFormType } | null)?.searchParams ?? null;
  console.log(searchParams, "Search Parameters")
  // const searchParams : AvailabilityFormType = {
  //   location: "00Hr",
  //   stayFor: [
  //     new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // today + 3 days
  //     new Date(Date.now() + 9 * 24 * 60 * 60 * 1000), // today + 6 days
  //   ],
  //   guests: {
  //     totalguests: 2,
  //     rooms: 1,
  //   },
  // }
  console.log(searchParams, "List Index");
  // console.log("heHERHJEHDBAKSBDAKBDS")
  return (
    <>
      <PageMetaData title="Hotel - List" />

      <main>
        <TopNavBar />
        <Hero searchParams={searchParams}/>
        <HotelLists searchParams={searchParams}/>
      </main>
    </>
  )
}

export default HotelsList
