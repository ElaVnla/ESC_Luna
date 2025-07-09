import { PageMetaData } from '@/components'
import AboutHotel from './components/AboutHotel'
import AvailabilityFilter from './components/AvailabilityFilter'
import FooterWithLinks from './components/FooterWithLinks'
import HotelGallery from './components/HotelGallery'
import TopNavBar4 from './components/TopNavBar4'
import { useEffect, useState } from 'react'

const HotelDetails = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/hotels/diH7');

        const data = await response.json();
        console.log("Fetched hotel data:", data);
        setHotel(data);
        console.log("test")
        
      } catch (error) {
        console.error(error);
      }
      
    };

    fetchHotel();
  }, []);
  console.log(hotel, "hoteldetails");

  //if (!hotel) return <div>Loading hotel details...</div>;
  return (
    <>
      <PageMetaData title="Hotel - Details" />

      <TopNavBar4 />

      <main>
        <AvailabilityFilter />
        <HotelGallery />
        <AboutHotel />
      </main>

      <FooterWithLinks />
    </>
  )
}

export default HotelDetails
