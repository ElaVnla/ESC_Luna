import { Button, Card, CardBody, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { FaHotel, FaStar } from 'react-icons/fa6'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import { Link } from 'react-router-dom'
import { BsAlarm, BsBrightnessHigh, BsGeoAlt, BsPatchCheckFill } from 'react-icons/bs'
import { FaStarHalfAlt } from 'react-icons/fa'
import { Rooms } from '@/models/RoomDetailsApi'

// Displays cancellation policy and important info for the room
const CancellationPolicy = ({ roomData }: { roomData: Rooms }) => {
  const isFreeCancellation = roomData.free_cancellation;

  // Check if cancellation policy or additional info is missing
  const cancellationInfo = roomData.roomAdditionalInfo?.displayFields?.know_before_you_go;

  return (
    <Card className="shadow">
      {/* Card header with title */}
      <CardHeader className="border-bottom d-md-flex justify-content-md-between">
        <h5 className="card-title mb-0">Important Info & Cancellation Policy</h5>
      </CardHeader>
      <CardBody className="card-body">
        <h6>Policy Details</h6>
        <ul className="list-group list-group-borderless mb-0">
          {/* Show free cancellation or no refund message */}
          {isFreeCancellation ? (
            <li className="list-group-item h6 fw-light d-flex mb-0 items-center">
              <BsPatchCheckFill className="text-success me-2" />
              Free cancellation is available for this room.
            </li>
          ) : (
            <li className="list-group-item h6 fw-light d-flex mb-0 items-center">
              <BsPatchCheckFill className="text-danger me-2" />
              On cancellation, you will not get any refund.
            </li>
          )}
        </ul>

        <h6 className="mt-2">Before you go</h6>
        <ul className="list-group list-group-borderless mb-0">
          {/* Show additional info if available, otherwise fallback message */}
          {cancellationInfo ? (
            <div
              dangerouslySetInnerHTML={{
                __html: cancellationInfo,
              }}
            />
          ) : (
            <p>No important information and/or policy is available.</p>
          )}
        </ul>
      </CardBody>
    </Card>
  );
};

export default CancellationPolicy;
