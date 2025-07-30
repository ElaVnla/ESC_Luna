import { PageMetaData } from '@/components'
import TopNavBar from '@/layouts/UserLayout/TopNavBar'
import Footer from '@/layouts/UserLayout/Footer'
import Hero from './components/Hero'
import FooterWithLinks from '@/components/FooterWithLinks'
import BookingDetails from './components/BookingDetails'
import { GuestCountProvider } from './contexts/GuestCountContext'
import { useLocation } from 'react-router-dom'
import { HotelData } from '@/models/HotelDetailsApi'
import { RoomData } from '@/models/RoomDetailsApi'

const ReviewBooking = () => {
  const location = useLocation();
  const { hotelData, roomDataf4 } = location.state || {};

  console.log("ROOM DATA f4 WENT THRU: ", roomDataf4);
  return (
    <>
      <PageMetaData title="Hotel - Review Booking" />
      <main>
        <TopNavBar />
        <GuestCountProvider>
          <Hero/>
          <BookingDetails hotelData={hotelData} roomData={roomDataf4}/>
        </GuestCountProvider>
      </main>
    </>
  )
}


export default ReviewBooking
