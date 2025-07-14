import { CheckFormInput, SelectFormInput, TextFormInput } from '@/components'
import { Alert, Button, Card, CardBody, CardHeader, Col,CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SpecialRequest = ['Smoking room', 'Late check-in', 'Early check-in', 'Room on a high floor', 'Large bed', 'Airport transfer', 'Twin beds']
const MainGuestDetails = () => {
  const { control } = useForm()
  // Example data – replace with props or state if needed
  const guest = {
    title: 'Mr',
    firstName: 'John',
    lastName: 'Doe',
    country: 'Singapore',
    email: 'john.doe@example.com',
    mobile: '+65 9876 5432',
  }

  return (
    <Card className="shadow rounded-2">
      <CardHeader className="border-bottom">
        <CardTitle as="h5" className="mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Main Guest Details
        </CardTitle>
      </CardHeader>
      <CardBody>
        <ListGroup variant="flush" className="list-group-borderless">
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Full Name</span>
            <span className="fs-5">{guest.title} {guest.firstName} {guest.lastName}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Country</span>
            <span className="fs-5">{guest.country}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Email</span>
            <span className="fs-5">{guest.email}</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-light mb-0">Mobile</span>
            <span className="fs-5">{guest.mobile}</span>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  )
}

export default MainGuestDetails
