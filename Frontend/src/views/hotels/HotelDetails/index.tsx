  import { PageMetaData } from '@/components'
  import AboutHotel from './components/AboutHotel'
  import HotelGallery from './components/HotelGallery'
  import { useEffect, useRef, useState } from 'react'
  import { HotelData, HotelParams } from '@/models/HotelDetailsApi'
  import { RoomData } from '@/models/RoomDetailsApi'
  // import roomMockData2 from './price.json'
  import TopNavBar from '@/layouts/UserLayout/TopNavBar'
  import { useLocation} from 'react-router-dom'
  import RoomOptions from './components/RoomOptions'
  import HotelPolicies from './components/HotelPolicies'
  import { Container } from 'react-bootstrap'
  import Hero from '../List/components/Hero';


  const HotelDetails = () => {
    const location = useLocation();
    const { hotelParams } = location.state as { hotelParams: HotelParams };
    const { hotelId, destinationId, checkIn, checkOut, guests } = hotelParams;

    const roomDetailApi = `http://localhost:3000/api/hotels/${hotelId}/price?destination_id=${destinationId}&checkin=${checkIn}&checkout=${checkOut}&lang=en_US&currency=SGD&partner_id=16&country_code=SG&guests=${guests}&partner_id=1089&landing_page=wl-acme-earn&product_type=earn`;
    const hotelDetailApi = `http://localhost:3000/api/hotels/${hotelId}`;

    console.log("Room Api link:", roomDetailApi);
    console.log("Hotel Api link:",hotelDetailApi);

    const polling = useRef(true);  //useRef for proper state sharing in closures
    const [hotelData, setHotelData] = useState<HotelData>();
    const [roomData, setRoomData] = useState<RoomData>();
    const [loaded, setLoaded] = useState(false);
    
    // useEffect(() => {
    //   // Cast JSON to RoomData
    //   setMockRoom(roomMockData2 as RoomData);
    // }, []);

    // Get Hotel Details
    useEffect(() => {
      
      const fetchHotel = async () => {
        try {
          const response = await fetch(hotelDetailApi);
          const data = await response.json();
          setHotelData(data);
          console.log("Hotel data fetched successfully.")
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchHotel();
    }, []);

    // Get Room Details
    useEffect(() => {
      const fetchRoom = async () => {
        try {
          const response = await fetch(`${roomDetailApi}&_=${Date.now()}`, {
            cache: 'no-store',
            // credentials: 'include', 
          });
          const data = await response.json();
          console.log(data.completed, "ROOM");  // <-- Your debug print

          // Stop polling if completed == true
          if (data.completed) {
            console.log("Polling stopped: Task completed.");
            setRoomData(data);
            polling.current = false;
            console.log("Room data fetched successfully.");
            return;
          }

          if (polling.current) {
            console.log("Polling again in 500ms...");  // <-- Debug polling continuation
            setTimeout(fetchRoom, 500);
          }

        } catch (error) {
          console.error(error);
        }
      };

      fetchRoom();

      // Cleanup on component unmount
      return () => {
        console.log("Component unmounted. Stopping polling.");  // <-- Debug unmount
        polling.current = false;
      };
    }, []);


    // To show "Load room details" only after "Load Hotel" is gone
    useEffect(() => {
      if (hotelData) {
        setLoaded(true);
      }
    }, [hotelData]);
    
    return (
      <>
        <PageMetaData title="Hotel - Details" />

        <TopNavBar />

        <main>
          <Hero />
          {hotelData?
            <>
              <HotelGallery hotelData={hotelData} />
              <AboutHotel hotelData={hotelData} />
            </>
            :
            <p className=' flex text-center pt-4'> Loading Hotel Details...</p>
          }
          { loaded && (
            roomData?.completed && hotelData
              ? 
                <section>
                  <Container data-sticky-container>
                    <RoomOptions roomData={roomData} hotelData={hotelData} hotelParams={hotelParams}/> 
                    {roomData.rooms?.length > 0 && (
                      <HotelPolicies roomPolicies={roomData.rooms[0].roomAdditionalInfo} />
                    )} 
                  </Container>
                </section>
              :
              <p className=' flex text-center pt-4'> Loading Rooms...</p>)
          }
        </main>

      </>
    )
  }

  export default HotelDetails
