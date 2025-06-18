import element14 from '@/assets/images/element/14.svg'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Image, Row } from 'react-bootstrap'
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import RouteInformation from './RouteInformation'
import FlightDetailModal from './FlightDetailModal'
import { useToggle } from '@/hooks'
import { currency } from '@/states'

const FlightCard4 = () => {
  const { isOpen, toggle } = useToggle()
  return (
    <Card className="border">
      <CardHeader>
        <div className="d-md-flex justify-content-md-between">
          <div className="d-flex align-items-center mb-2 mb-md-0">
            <Image src={element14} className="w-30px me-2" />
            <h6 className="fw-normal mb-0">Folio Airline (CCE - 2158)</h6>
          </div>
          <h6 className="fw-normal mb-0">
            <span className="text-body">Travel Class:</span> Economy
          </h6>
        </div>
      </CardHeader>
      <CardBody className="p-4 pb-0">
        <Row className="g-4 align-items-center">
          <Col md={9}>
            <Row className="g-4">
              <RouteInformation
                departureTime="14:50"
                arrivalTime="07:35"
                from="BOM - Terminal 2 Mumbai, India"
                to="JFK - Terminal 2 New York, USA"
                travelDuration="9hr 50min"
                date="Sun, 29 Jan 2023"
              />
            </Row>
            <hr className="my-4" />
            <Row className="g-4">
              <RouteInformation
                departureTime="04:50"
                arrivalTime="07:35"
                from="BOM - Terminal 2 Mumbai, India"
                to="JFK - Terminal 2 New York, USA"
                travelDuration="10hr 35min"
                date="Sun, 19 Feb 2023"
              />
            </Row>
          </Col>
          <Col md={3} className="text-md-end">
            <h4>{currency}18,500</h4>
            <Link to="/flights/detail" className="btn btn-dark mb-0 mb-sm-2">
              Book Now
            </Link>
            <div className="d-flex justify-content-end">
              <Button onClick={toggle} variant="link" className="text-decoration-underline p-0 mb-0 items-center">
                <BsEyeFill className="me-1" />
                Flight Details
              </Button>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="pt-4">
        <div>
          <ul className="list-inline bg-light d-sm-flex text-center justify-content-sm-between rounded-2 py-2 px-4 mb-0">
            <li className="list-inline-item text-danger">Only 10 Seat Left</li>
            <li className="list-inline-item text-success">Refundable</li>
          </ul>
        </div>
      </CardFooter>
      <FlightDetailModal isOpen={isOpen} toggle={toggle} />
    </Card>
  )
}

export default FlightCard4
