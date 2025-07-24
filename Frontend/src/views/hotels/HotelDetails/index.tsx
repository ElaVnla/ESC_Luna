import { PageMetaData } from '@/components'
import AboutHotel from './components/AboutHotel'
import AvailabilityFilter from './components/AvailabilityFilter'
import HotelGallery from './components/HotelGallery'
import TopNavBar4 from './components/TopNavBar4'
import { useEffect, useState } from 'react'
import { HotelData } from '@/models/HotelDetailsApi'
import { RoomData } from '@/models/RoomDetailsApi'

import roomMockData2 from './price.json'
const HotelDetails = () => {
  const [hotelData, setHotelData] = useState<HotelData>();
  const [roomData, setRoomData] = useState<RoomData>();
  const [mockRoom, setMockRoom] = useState<RoomData>();

  useEffect(() => {
    // Cast JSON to RoomData
    setMockRoom(roomMockData2 as RoomData);
  }, []);

  useEffect(() => {
    if (hotelData) return;
    const fetchHotel = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hotels/XVBJ');

        const data = await response.json();
        setHotelData(data);
        console.log("Hotel data fetched successfully.")
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchHotel();
  }, []);
  // console.log(hotelData?.description);

  useEffect(() => {
    if (true) return;
    const fetchRoom = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hotels/atH8/price?destination_id=WD0M&checkin=2026-01-01&checkout=2026-01-07&lang=en_US&currency=SGD&partner_id=16&country_code=SG&guests=2');

        const data = await response.json();
        setRoomData(data);
        console.log("Room data fetched successfully.")
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      
    };
  fetchRoom();
  }, []);
  // console.log(roomData?.completed);
  console.log(hotelData?.id, "In Index");
  console.log(roomData?.rooms, "In Index");
  
  

//   const pollHotelApi = async (
//   url: string,
//   intervalMs: number = 2000,
//   maxRetries: number = 15
// ): Promise<HotelApiResponse> => {
//   let retries = 0;

//   while (retries < maxRetries) {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`API error: ${response.status}`);
//     }

//     const data: HotelApiResponse = await response.json();

//     if (data.completed) {
//       return data;
//     }

//     retries++;
//     await new Promise((resolve) => setTimeout(resolve, intervalMs));
//   }

//   throw new Error("Polling timed out: 'completed' never became true.");
// };

  return (
    <>
      <PageMetaData title="Hotel - Details" />

      <TopNavBar4 />

      <main>
        <AvailabilityFilter />
        <HotelGallery hotelData = {hotelData!}/>
        <AboutHotel hotelData = {hotelData!} roomData = {mockRoom!}/>
      </main>

    </>
  )
}

export default HotelDetails
