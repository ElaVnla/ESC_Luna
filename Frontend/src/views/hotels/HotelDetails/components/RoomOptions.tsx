import { SelectFormInput } from '@/components'
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap'
import RoomCard from './RoomCard'

import { hotelRooms } from '../data'
import { RoomData } from '@/models/RoomDetailsApi';
type Props = {
  roomData: RoomData;
};


const RoomOptions = ({roomData}: Props) => {
  return (
    <Card className="bg-transparent" id="room-options">
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
            return (
              <RoomCard
                key={idx}
                features={room.roomAdditionalInfo.displayFields.special_check_in_instructions}
                images={hotelRooms[1].images}// hotelRoom.get(idx).images?
                id={123}
                name={room.roomNormalizedDescription}
                price={room.base_rate_in_currency}
                sale={hotelRooms[1].sale}
                schemes={hotelRooms[1].schemes}
              />
            )
          })}
        </div>
      </CardBody>
    </Card>
  )
}

export default RoomOptions
