import { useToggle } from '@/hooks'
import { currency } from '@/states'
import { Button, Card, CardBody, CardFooter, Col, Image, Row } from 'react-bootstrap'
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FlightDetailModal from './FlightDetailModal'

import flightLogo from '@/assets/images/element/09.svg'

const FlightCard = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <Card className="border">
      <CardBody className="p-4 pb-0">
        <Row className="g-4">
          <Col md={3}>
            <Image src={flightLogo} className="w-80px mb-3" />
            <h6 className="fw-normal mb-0">Phillippines Airline</h6>
            <h6 className="fw-normal mb-0">PA - 5620</h6>
          </Col>
          <Col sm={4} md={3}>
            <h4>14:50</h4>
            <h6 className="mb-0">Sun, 29 Jan 2023</h6>
            <p className="mb-0">BOM - Terminal 2 Mumbai, India</p>
          </Col>
          <Col sm={4} md={3}>
            <h4>07:35</h4>
            <h6 className="mb-0">Sun, 30 Jan 2023</h6>
            <p className="mb-0">JFK - Terminal 2 New York, USA</p>
          </Col>
          <Col sm={4} md={3}>
            <h4>{currency}18,500</h4>
            <Link to="/flights/detail" className="btn btn-dark">
              Book Now
            </Link>
            <Button variant="link" className="text-decoration-underline p-0 mb-0 items-center" onClick={toggle}>
              <BsEyeFill className=" me-1" />
              Flight Details
            </Button>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="p-4">
        <div className="bg-light p-2 rounded-2">
          <ul className="list-inline d-sm-flex justify-content-sm-between mb-0 mx-4">
            <li className="list-inline-item text-danger">Only 10 Seat Left</li>
            <li className="list-inline-item">Total time: 10h 35m</li>
            <li className="list-inline-item text-success">Refundable</li>
          </ul>
        </div>
      </CardFooter>
      <FlightDetailModal isOpen={isOpen} toggle={toggle} />
    </Card>
  )
}

export default FlightCard
