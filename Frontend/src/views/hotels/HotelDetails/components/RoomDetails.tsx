import { SelectFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import RoomCard2 from './RoomCard2';

import { hotelRooms } from '../data'
import { RoomData } from '@/models/RoomDetailsApi';
import { useState } from 'react';
import { IntegerType } from 'typeorm';
type Props = {
  roomData: RoomData;
};
type RoomType = {
  roomName: string;
  count: IntegerType;
}
const RoomDetails = ({roomData}: Props) => {
    // const[scheme, setScheme] = useState<string[]>([]);
    // const empty = () => {setScheme([]);};
    
    const roomType = new Map<string, number>()


    
  return (
    <Card className="bg-transparent mt-5 mb-5" id="room-options">
      <CardHeader className="border-bottom bg-transparent px-0 pt-0">
        <div className="d-sm-flex justify-content-sm-between align-items-center">
          <h3 className="mb-2 mb-sm-0">Room Options</h3>
          <Col sm={4}>
            <form className="form-control-bg-light">
              <SelectFormInput className="form-select form-select-sm js-choice border-0">
                <option value={-1}>Select Option</option>
                <option>Recently search</option>
                <option>Most popular</option>
                <option>Top rated</option>
              </SelectFormInput>
            </form>
          </Col>
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
            if (roomType.get(room.roomDescription) != null){
              roomType.set(room.roomDescription, roomType.get(room.roomDescription) + 1)
              console.log(room.base_rate_in_currency, room.roomDescription)
            } else{
              roomType.set(room.roomDescription, 1)
              return (
              <RoomCard2
                key={idx}
                features={details}
                images={room.images}// hotelRoom.get(idx).images?
                id={123}
                name={room.roomDescription}
                price={room.base_rate_in_currency}
                ammenities = {room.amenities}
                schemes={schemes}
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
