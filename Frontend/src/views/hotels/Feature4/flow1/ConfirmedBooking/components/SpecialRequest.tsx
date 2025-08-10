import {
  Card,
  CardBody,
  CardHeader
} from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';

type SpecialRequestProps = {
  specialRequests: string;
};

// Displays special requests for a booking, or a message if none provided
const SpecialRequest = ({ specialRequests }: SpecialRequestProps) => {
  // Check if there are any special requests
  const hasRequest = specialRequests && specialRequests.trim().length > 0;

  return (
    <Card className="shadow rounded-2">
      {/* Card header with icon and title */}
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Special Requests
        </h4>
      </CardHeader>

      <CardBody>
        {/* Show special requests if present, otherwise show default message */}
        {hasRequest ? (
          <p className="fs-5">{specialRequests}</p>
        ) : (
          <p className="text-muted fs-6">No special requests provided.</p>
        )}
      </CardBody>
    </Card>
  );
};

export default SpecialRequest;
