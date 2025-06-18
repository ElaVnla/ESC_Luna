import { useToggle } from '@/hooks'
import { currency } from '@/states'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'react-bootstrap'
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FlightDetailModal from './FlightDetailModal'
import RouteInformation from './RouteInformation'

import flightLogo from '@/assets/images/element/13.svg'

const FlightCard2 = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <Card className="border">
      <CardHeader className="d-sm-flex justify-content-sm-between align-items-center">
        <div className="d-flex align-items-center mb-2 mb-sm-0">
          <img src={flightLogo} className="w-30px me-2" />
          <h6 className="fw-normal mb-0">Blogzine Airline (FFR - 5682)</h6>
        </div>
        <h6 className="fw-normal mb-0">
          <span className="text-body">Travel Class:</span> Economy
        </h6>
      </CardHeader>
      <CardBody className="p-4 pb-0">
        <Row className="g-4">
          <RouteInformation
            departureTime="14:50"
            arrivalTime="07:35"
            from="BOM - Terminal 2 Mumbai, India"
            to="JFK - Terminal 2 New York, USA"
            travelDuration="9hr 50min"
          />
          <Col md={3} className="text-md-end">
            <h4>{currency}18,500</h4>
            <Link to="/flights/detail" className="btn btn-dark mb-0 mb-sm-2">
              Book Now
            </Link>
            <div className="d-flex justify-content-end">
              <Button onClick={toggle} variant="link" className="text-decoration-underline p-0 mb-0 items-center">
                <BsEyeFill className=" me-1" />
                Flight Details
              </Button>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="pt-4">
        <ul className="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
          <li className="list-inline-item text-danger">Only 10 Seat Left</li>
          <li className="list-inline-item text-danger">Non-Refundable</li>
        </ul>
      </CardFooter>

      <FlightDetailModal isOpen={isOpen} toggle={toggle} />
    </Card>
  )
}

export default FlightCard2
