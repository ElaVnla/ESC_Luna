import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';

type MainGuest = {
  title?: string;
  firstName?: string;
  lastName?: string;
  country?: string;
  email?: string;
  mobile?: string;
};

type MainGuestDetailsProps = {
  guest: MainGuest;
};

// Displays main guest details for the booking
const MainGuestDetails = ({ guest }: MainGuestDetailsProps) => {
  // Combine title, first name, and last name for full name
  const fullName = [guest.title, guest.firstName, guest.lastName]
    .filter(Boolean)
    .join(' ') || 'N/A';

  return (
    <Card className="shadow rounded-2">
      {/* Card header with icon and title */}
      <CardHeader className="border-bottom">
        <CardTitle as="h5" className="mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Main Guest Details
        </CardTitle>
      </CardHeader>
      <CardBody>
        {/* List of guest details */}
        <ListGroup variant="flush" className="list-group-borderless">
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Full Name</span>
            <span className="fs-5">{fullName}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Country</span>
            <span className="fs-5">{guest.country || 'N/A'}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Email</span>
            <span className="fs-5">{guest.email || 'N/A'}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Mobile</span>
            <span className="fs-5">{guest.mobile || 'N/A'}</span>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default MainGuestDetails;
