import { PageMetaData } from '@/components'
import AboutHotel from './components/AboutHotel'
import AvailabilityFilter from './components/AvailabilityFilter'
import HotelGallery from './components/HotelGallery'
import TopNavBar4 from './components/TopNavBar4'
import { useEffect, useState } from 'react'
import { HotelData } from '@/models/HotelDetailsApi'

const HotelDetails = () => {
  const [hotelData, setHotelData] = useState<HotelData>();

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hotels/diH7');

        const data = await response.json();
        setHotelData(data);
        console.log("Hotel data fetched successfully.")
        
      } catch (error) {
        console.error(error);
      }
      
    };

    fetchHotel();
  }, []);
  console.log(hotelData?.amenities);

  return (
    <>
      <PageMetaData title="Hotel - Details" />

      <TopNavBar4 />

      <main>
        <AvailabilityFilter />
        <HotelGallery hotelData = {hotelData}/>
        <AboutHotel hotelData = {hotelData}/>
      </main>

    </>
  )
}

export default HotelDetails
