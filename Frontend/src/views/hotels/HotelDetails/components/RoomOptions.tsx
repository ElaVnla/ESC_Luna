
import { Card, CardBody, CardHeader} from 'react-bootstrap'
import { RoomData } from '@/models/RoomDetailsApi';
import RoomCard from './RoomCard';
import { HotelData, HotelParams } from '@/models/HotelDetailsApi';


type Props = {
  roomData: RoomData;
  hotelData: HotelData;
  hotelParams: HotelParams
};

const RoomOptions = ({roomData, hotelData, hotelParams}: Props) => {
    
    const roomCount = new Map<string, number>()
    const roomPrice = new Map<string, number>()
    const roomCheck = new Map<string, boolean>()
    roomData.rooms.map((room, __)=>{
    roomCount.set(room.roomDescription, (roomCount.get(room.roomDescription) ?? 0) + 1)
    roomPrice.set(room.roomDescription, Math.min(roomPrice.get(room.roomDescription)?? Infinity, room.base_rate_in_currency))
    roomCheck.set(room.roomDescription, false)
    }
    )

    
  return (
    <Card className="bg-transparent mt-5 mb-5" id="room-options">
      <CardHeader className="border-bottom bg-transparent px-0 pt-0">
        <div className="d-sm-flex justify-content-sm-between align-items-center">
          <h3 className="mb-2 mb-sm-0">Room Options</h3>
        </div>
      </CardHeader>
      <CardBody className="pt-4 p-0">
        <div className="vstack gap-4">
          {roomData?.rooms?.map((room, idx) => {
            console.log(room);
            const schemes: string[] = [];

            
            console.log(room.roomAdditionalInfo.breakfastInfo, "RoomDetails")
            if (room.free_cancellation){schemes.push("Free Cancellation");} else{schemes.push("Non Refundable")}
            if (room.roomAdditionalInfo.breakfastInfo != ""){schemes.push("Free Breakfast Provided");}
            const details = room.long_description.replace(/<\/?b>/g, '').replace(/<\/?b>/g, '').replace('<br/>', '').replace('</p>', '')
            
            //get rooms
            if(!roomCheck.get(room.roomDescription)){
              roomCheck.set(room.roomDescription, true)
              console.log(room.amenities, "Room Options ")
              return (
                <RoomCard
                  key={idx}
                  features={details}  
                  images={room.images}
                  id={123}
                  name={room.roomDescription}
                  price={roomPrice.get(room.roomDescription)?? 0}
                  amenities = {room.amenities}
                  schemes={schemes}
                  count = {roomCount.get(room.roomDescription)?? 1}
                  hotelData = {hotelData}
                  roomDataf4={room}
                  hotelParams={hotelParams}
                />
              )
            }
            
            
            
          })}
        </div>
      </CardBody>
    </Card>
  )
}

export default RoomOptions
