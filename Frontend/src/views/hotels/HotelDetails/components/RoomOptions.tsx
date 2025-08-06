
import { Card, CardBody, CardHeader} from 'react-bootstrap'
import { RoomData, Rooms } from '@/models/RoomDetailsApi';
import RoomCard from './RoomCard';
import { HotelData, HotelParams } from '@/models/HotelDetailsApi';
import { useEffect, useState } from 'react';
import axios from 'axios';


type Props = {
  roomData: RoomData;
  hotelData: HotelData;
  hotelParams: HotelParams
};

const RoomOptions = ({roomData, hotelData, hotelParams}: Props) => {
  const [unavailableRoomIds, setUnavailableRoomIds] = useState<string[]>([]);
  const [roomMap, setRoomMap] = useState<
    Map<string, { count: number; cheapestRoom: Rooms }>
  >(new Map());

  useEffect(() => {
        const fetchUnavailableRooms = async () => {
            const res = await axios.get(`/api/bookings/unavailable-rooms`, {
                params: { hotelId: hotelParams.hotelId, startDate: hotelParams.checkIn, endDate: hotelParams.checkOut }
            });
            setUnavailableRoomIds(res.data);
        };

        fetchUnavailableRooms();
    }, [hotelParams.hotelId, hotelParams.checkIn, hotelParams.checkOut]);

  useEffect(() =>{
    const tempRoomMap = new Map<string, { count: number; cheapestRoom: Rooms }>();
    roomData.rooms.forEach((room) => {
      const existing = tempRoomMap.get(room.roomDescription);
      if (!unavailableRoomIds.includes(room.key)){
        if (!existing) {
          // Add room type if not exists
          tempRoomMap.set(room.roomDescription, { count: 1, cheapestRoom: room });
        } else {
          // Update count and lowest price
          existing.count += 1;
          if (room.base_rate_in_currency < existing.cheapestRoom.base_rate_in_currency) {
            existing.cheapestRoom = room;
          }
        }
      }
    });
    setRoomMap(tempRoomMap);
  }, [roomData.rooms, unavailableRoomIds])
  
    
  return (
    <Card className="bg-transparent mt-5 mb-5" id="room-options">
      <CardHeader className="border-bottom bg-transparent px-0 pt-0">
        <div className="d-sm-flex justify-content-sm-between align-items-center">
          <h3 className="mb-2 mb-sm-0">Room Options</h3>
        </div>
      </CardHeader>
      <CardBody className="pt-4 p-0">
        <div className="vstack gap-4">
          {Array.from(roomMap.entries()).map(([roomDescription, { count, cheapestRoom }], idx) => {
            const schemes: string[] = [];
            if (cheapestRoom.free_cancellation) {
              schemes.push("Free Cancellation");
            } else {
              schemes.push("Non Refundable");
            }
            if (cheapestRoom.roomAdditionalInfo.breakfastInfo !== "") {
              schemes.push("Free Breakfast Provided");
            }

            const details = cheapestRoom.long_description
              .replace(/<\/?b>/g, '')
              .replace('<br/>', '')
              .replace('</p>', '');

            return (
              <RoomCard
                key={idx}
                features={details}
                images={cheapestRoom.images}
                name={roomDescription}
                price={cheapestRoom.base_rate_in_currency}
                amenities={cheapestRoom.amenities}
                schemes={schemes}
                count={count}
                hotelData={hotelData}
                roomDataf4={cheapestRoom}
                hotelParams={hotelParams}
              />
            );
          })}
        </div>
      </CardBody>
    </Card>
  )
}

export default RoomOptions
