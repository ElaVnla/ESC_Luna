import { CheckFormInput, SelectFormInput, TextFormInput } from '@/components'
import { Alert, Button, Card, CardBody, CardHeader, CardTitle, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsPeopleFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SpecialRequest = ['Smoking room', 'Late check-in', 'Early check-in', 'Room on a high floor', 'Large bed', 'Airport transfer', 'Twin beds']
const GuestDetails = () => {
  const guests = [
    {
      label: 'Adult 1',
      title: 'Mr',
      firstName: 'John',
      lastName: 'Doe',
      country: 'Singapore',
      email: 'john.doe@example.com',
      mobile: '+65 9876 5432',
    },
    {
      label: 'Child 1',
      title: 'Miss',
      firstName: 'Emma',
      lastName: 'Tan',
      country: 'Singapore',
      email: 'emma.tan@example.com',
      mobile: '+65 8123 4567',
    },
  ]

  return (
    <Card className="shadow rounded-2 mb-1">
      <CardHeader className="border-bottom p-4">
        <CardTitle as="h5" className="mb-0 d-flex align-items-center">
          <BsPeopleFill className="me-2" />
          Guest Details
        </CardTitle>
      </CardHeader>

      <CardBody className="p-4">
        {guests.map((guest, idx) => (
          <Card key={idx} className="mb-3 shadow-sm border-0">
            <CardHeader className="border-bottom p-3">
              <h6 className="mb-0 d-flex align-items-center">
                <BsPeopleFill className="me-2" />
                {guest.label}
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
  )
}


export default GuestDetails
