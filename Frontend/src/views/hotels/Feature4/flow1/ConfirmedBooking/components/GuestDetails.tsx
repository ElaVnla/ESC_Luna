import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';

type Guest = {
  type: 'adult' | 'child';
  title: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  mobile: string;
};

type GuestDetailsProps = {
  guests: Guest[];
};

const GuestDetails = ({ guests }: GuestDetailsProps) => {
  // Count occurrences to label Adult 1, Child 1, etc.
  let adultCount = 0;

  let childCount = 0;

  console.log("GUEST DETAILS PASSED: ", guests);
  const getLabel = (type: 'adult' | 'child') => {
    if (type === 'adult') return `Adult ${++adultCount}`;
    return `Child ${++childCount}`;
  };

  return (
    <Card className="shadow rounded-2 mb-1">
      <CardHeader className="border-bottom p-4">
        <CardTitle as="h5" className="mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Guest Details
        </CardTitle>
      </CardHeader>

      <CardBody className="p-4">
        {guests?.map((guest, idx) => (
          <Card key={idx} className="mb-3 shadow-sm border-0">
            <CardHeader className="border-bottom p-3">
              <h6 className="mb-0 d-flex align-items-center">
                <BsPeopleFill className="me-2" />
                {getLabel(guest.type)}
              </h6>
            </CardHeader>
            <CardBody className="p-3">
              <ListGroup variant="flush" className="list-group-borderless">
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span className="h6 fw-light mb-0">Full Name</span>
                  <span className="fs-6">{guest.title} {guest.firstName} {guest.lastName}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span className="h6 fw-light mb-0">Country</span>
                  <span className="fs-6">{guest.country}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span className="h6 fw-light mb-0">Email</span>
                  <span className="fs-6">{guest.email}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <span className="h6 fw-light mb-0">Mobile</span>
                  <span className="fs-6">{guest.mobile}</span>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        ))}
      </CardBody>
    </Card>
  );
};

export default GuestDetails;
