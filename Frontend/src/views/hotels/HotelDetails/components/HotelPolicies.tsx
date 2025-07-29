import { RoomAdditionalInfo } from '@/models/RoomDetailsApi';
import { Card, CardBody, CardHeader } from 'react-bootstrap'


type Props = {
  roomPolicies: RoomAdditionalInfo;
};
const HotelPolicies = ({roomPolicies}:Props) => {
  return (
    <Card className="bg-transparent">
      <CardHeader className="border-bottom bg-transparent px-0 pt-0">
        <h3 className="mb-0">Hotel Policies</h3>
      </CardHeader>
      <CardBody className="pt-4 p-0">
        <h5>Check in Instructions</h5>
        <div>
          {roomPolicies.displayFields.special_check_in_instructions}
        </div>
        <div dangerouslySetInnerHTML={{ __html: roomPolicies.displayFields.check_in_instructions }} />
        
        <h5>Know Before You Go</h5>
        <div dangerouslySetInnerHTML={{ __html: roomPolicies.displayFields.know_before_you_go }} />

        <h5>Optional fees</h5>
        <div dangerouslySetInnerHTML={{ __html: roomPolicies.displayFields.fees_optional }} />
        
      </CardBody>
    </Card>
  )
}

export default HotelPolicies
