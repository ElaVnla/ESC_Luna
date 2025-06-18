import { Card, CardBody, CardFooter, CardHeader, Col, Collapse, Image, Row } from 'react-bootstrap'
import RouteInformation from './RouteInformation'
import { Link } from 'react-router-dom'
import FlightDetailTab from './FlightDetailTab'
import { useToggle } from '@/hooks'
import { FaAngleDown } from 'react-icons/fa6'
import { FaAngleUp } from 'react-icons/fa'
import { currency } from '@/states'

import element12 from '@/assets/images/element/12.svg'

const FlightCard3 = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <Card className="border">
      <CardHeader className="d-sm-flex justify-content-sm-between align-items-center">
        <div className="d-flex align-items-center mb-2 mb-sm-0">
          <Image src={element12} className="w-30px me-2" />
          <h6 className="fw-normal mb-0">Wizixo Airline (SA - 1254)</h6>
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
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="pt-4">
        <ul className="list-inline bg-light rounded-2 d-sm-flex text-center justify-content-sm-between mb-0 px-4 py-2">
          <li className="list-inline-item text-danger">Only 25 Seat Left</li>
          <li className="list-inline-item text-danger">Non-Refundable</li>
          <li className="list-inline-item">
            <a className="btn-more items-center collapsed p-0 mb-0" role="button" onClick={toggle}>
              Flight detail {!isOpen ? <FaAngleDown className="ms-2" /> : <FaAngleUp className="ms-2" />}
            </a>
          </li>
        </ul>
        <Collapse in={isOpen}>
          <div className="mt-3">
            <FlightDetailTab />
          </div>
        </Collapse>
      </CardFooter>
    </Card>
  )
}

export default FlightCard3
