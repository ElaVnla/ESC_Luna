import {
  Card,
  CardBody,
  CardHeader
} from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';

type SpecialRequestProps = {
  specialRequests: string;
};

const SpecialRequest = ({ specialRequests }: SpecialRequestProps) => {
  const hasRequest = specialRequests && specialRequests.trim().length > 0;

  return (
    <Card className="shadow rounded-2">
      <CardHeader className="card-header border-bottom p-4">
        <h4 className="card-title mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Special Requests
        </h4>
      </CardHeader>

      <CardBody>
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
