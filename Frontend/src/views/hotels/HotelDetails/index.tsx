  import { PageMetaData } from '@/components'
  import AboutHotel from './components/AboutHotel'
  import AvailabilityFilter from './components/AvailabilityFilter'
  import HotelGallery from './components/HotelGallery'
  import { useEffect, useRef, useState } from 'react'
  import { HotelData } from '@/models/HotelDetailsApi'
  import { RoomData } from '@/models/RoomDetailsApi'
  import SplashScreen from '@/components/SplashScreen'

  import roomMockData2 from './price.json'
  import TopNavBar from '@/layouts/UserLayout/TopNavBar'
  import { useLocation, useParams, useSearchParams } from 'react-router-dom'
  const HotelDetails = () => {
    const location = useLocation();
    const { id, destinationId, checkin, checkout, guests } = location.state as {
      id: string;
      destinationId: string;
      checkin: string;
      checkout: string;
      guests: string;
    };

    const roomDetailApi = `http://localhost:3000/api/hotels/${id}/price?destination_id=${destinationId}&checkin=${checkin}&checkout=${checkout}&lang=en_US&currency=SGD&partner_id=16&country_code=SG&guests=${guests}&partner_id=1089&landing_page=wl-acme-earn&product_type=earn`;
    const hotelDetailApi = `http://localhost:3000/api/hotels/${id}`;

    console.log(roomDetailApi);
    const polling = useRef(true);  // <-- useRef for proper state sharing in closures
    const [hotelData, setHotelData] = useState<HotelData>();
    const [roomData, setRoomData] = useState<RoomData>();
    const [mockRoom, setMockRoom] = useState<RoomData>();
    // const [found, setFound] = useState(false);
    // const [count, setCount] = useState(1);


    useEffect(() => {
      // Cast JSON to RoomData
      setMockRoom(roomMockData2 as RoomData);
    }, []);

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

    useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetch(roomDetailApi);
        const data = await response.json();
        setRoomData(data);
        console.log("Room data fetched successfully.", data);
      } catch (error) {
        console.error(error);
      }
    };

      fetchRoom();
    }, []);


    // useEffect(() => {
      

    //   const fetchRoom = async () => {
    //     try {
    //       const response = await fetch(`${roomDetailApi}&_=${Date.now()}`, {
    //         cache: 'no-store',
    //         // credentials: 'include', 
    //       });
    //       const data = await response.json();
    //       console.log(data.completed, "ROOM");  // <-- Your debug print

    //       // Stop polling if completed == true
    //       if (data.completed) {
    //         console.log("Polling stopped: Task completed.");
    //         setRoomData(data);
    //         polling.current = false;
    //         console.log("Room data fetched successfully.");
    //         console.log(data);  // <-- Your debug print
    //         return;
    //       }

    //       if (polling.current) {
    //         console.log("Polling again in 500ms...");  // <-- Debug polling continuation
    //         setTimeout(fetchRoom, 500);
    //       }

    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

    //   fetchRoom();

    //   // Cleanup on component unmount
    //   return () => {
    //     console.log("Component unmounted. Stopping polling.");  // <-- Debug unmount
    //     polling.current = false;
    //   };
    // }, []);

    // useEffect(() => {
    //   // let intervalId:any;
    //   let polling = true;
    //   const fetchRoom = async () => {
    //     try {
    //       const response = await fetch(`${roomDetailApi}&_=${new Date().getTime()}`, {
    //         cache: 'no-store'
    //       });
    //       const data = await response.json();
    //       console.log(data.completed, "ROOM")
    //       // if(data.completed){
    //       //   setFound(true)
    //       // }
    //       // Stop polling if completed == true
    //       if (data.completed) {
    //         // clearInterval(intervalId);
    //         console.log("Polling stopped: Task completed.");
    //         setRoomData(data);
    //         polling = false;
    //         console.log(data);
    //         return;
    //       }
    //       if (polling) {
    //         setTimeout(fetchRoom, 500);
    //       }
          
    //     } catch (error) {
    //       console.error(error);
    //     }
        
    //   };
    //   fetchRoom();

    //   // while(!found && count <= 3){
    //   //     setCount(count + 1)
    //   //     fetchRoom
    //   //   }

    //   // Start polling every 3 seconds
    //   // intervalId = setInterval(fetchRoom, 500);
      

    //   // Cleanup interval on unmount
    //   return () => {
    //     polling = false;
    //   };  
        
    //     //clearInterval(intervalId);

      
    // }, []);
    // console.log(roomData?.completed);
    console.log(hotelData?.id, "In Index");
    console.log(roomData, "In Index");
    
    

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

        <TopNavBar />

        <main>
          <AvailabilityFilter />
          {hotelData && roomData ? (
            <>
              <HotelGallery hotelData={hotelData} />
              <p>Room completed: {roomData?.completed ? "Yes" : "No"}</p>
              <AboutHotel hotelData={hotelData} roomData={roomData} />
            </>
          ) : (
            <SplashScreen />
          )}
        </main>

      </>
    )
  }

  export default HotelDetails
