import { PageMetaData } from '@/components'
import BookingDetails from './components/BookingDetails'
import Footer from './components/Footer'
import Hero from './components/Hero'
import TopNavBar4 from './components/TopNavBar4'
import { useEffect, useState } from 'react'
import Hotel from '@/views/heroes/MultipleSearch/components/Hotel'

const HotelBooking = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch('/diH7');
        const data = await response.json();
        setHotel(data);
        console.log("test")
        
      } catch (error) {
        console.error(error);
      }
      console.log(hotel, "hoteldetails");
    };

    fetchHotel();
  }, []);

  //if (!hotel) return <div>Loading hotel details...</div>;
  return (
    <>
      <PageMetaData title="Hotel - Booking" />

      <main>
        <TopNavBar4 />
        <Hero />
        <BookingDetails />
      </main>

      <Footer />
    </>
  )
}

export default HotelBooking
