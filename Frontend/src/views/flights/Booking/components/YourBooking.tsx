import { Button, Card, CardBody, CardFooter, CardHeader, Image } from 'react-bootstrap'
import { BsArrowRight, BsPerson, BsTicket } from 'react-icons/bs'

import element9 from '@/assets/images/element/09.svg'

const YourBooking = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h5 className="mb-0 cardt-title">Your Booking</h5>
      </CardHeader>
      <CardBody>
        <small>
          <BsTicket className=" me-2" />
          Flight Ticket
        </small>
        <div className="d-flex mt-2">
          <Image src={element9} className="w-40px me-2" />
          <h6 className="fw-normal mb-0">
            Mumbai <BsArrowRight /> New York
          </h6>
        </div>
        <ul className="nav nav-divider small text-body mt-1 mb-0">
          <li className="nav-item">25 Jan</li>
          <li className="nav-item">1 Stop</li>
          <li className="nav-item">05h 25m</li>
        </ul>
        <hr />
        <small>
          <BsPerson className=" me-1" />
          Traveler detail
        </small>
        <h6 className="mb-0 fw-normal mt-2">Carolyn Ortiz</h6>
        <ul className="nav nav-divider small text-body mt-1 mb-0">
          <li className="nav-item">Adult</li>
          <li className="nav-item">Female</li>
          <li className="nav-item">Dec-2-1990</li>
        </ul>
      </CardBody>
      <CardFooter className="border-top text-center p-3">
        <Button variant="link" className="mb-0 p-0">
          Review booking
        </Button>
      </CardFooter>
    </Card>
  )
}

export default YourBooking
