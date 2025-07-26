import { SelectFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import RoomCard2 from './RoomCard2';

import { hotelRooms } from '../data'
import { RoomData } from '@/models/RoomDetailsApi';
import { useState } from 'react';

type Props = {
  roomData: RoomData;
};

const RoomDetails = ({roomData}: Props) => {
    // const[scheme, setScheme] = useState<string[]>([]);
    // const empty = () => {setScheme([]);};
    
    const roomCount = new Map<string, number>()
    const roomPrice = new Map<string, number>()
    const roomCheck = new Map<string, boolean>()
    roomData.rooms.map((room, idx)=>{
      //if (roomType.get(room.roomDescription) != null){
      roomCount.set(room.roomDescription, (roomCount.get(room.roomDescription) ?? 0) + 1)
      roomPrice.set(room.roomDescription, Math.min(roomPrice.get(room.roomDescription)?? Infinity, room.base_rate_in_currency))
      roomCheck.set(room.roomDescription, false)
      
      // else{
      //   roomType.set(room.roomDescription, 1)
      //   roomPrice.set(room.roomDescription, room.base_rate_in_currency)
      // }
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
            // console.log(room.amenities, "ammenties")
            const details = room.long_description.replace(/<\/?b>/g, '').replace(/<\/?b>/g, '').replace('<br/>', '').replace('</p>', '')
            
            //get rooms
            if(!roomCheck.get(room.roomDescription)){
              roomCheck.set(room.roomDescription, true)
              return (
                <RoomCard2
                  key={idx}
                  features={details}  
                  images={room.images}// hotelRoom.get(idx).images?
                  id={123}
                  name={room.roomDescription}
                  price={roomPrice.get(room.roomDescription)?? 0}
                  ammenities = {room.amenities}
                  schemes={schemes}
                  count = {roomCount.get(room.roomDescription)?? 1}
                />
              )
            }
            
            
            
          })}
        </div>
      </CardBody>
    </Card>
  )
}

export default RoomDetails
