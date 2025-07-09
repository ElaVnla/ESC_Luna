import { Col, Image, Row } from 'react-bootstrap'
import { FaPlane } from 'react-icons/fa'
import type { RouteInfoType } from '../types'

import element9 from '@/assets/images/element/09.svg'

const FlightRootDetails = ({ arrival, departure, travelDuration, flightChange }: RouteInfoType) => {
  return (
    <>
      <Row className="g-4">
        <Col md={3}>
          <Image src={element9} className="w-80px mb-3" />
          <h6 className="fw-normal mb-0">Phillippines Airline</h6>
          <h6 className="fw-normal mb-0">PA - 5620</h6>
        </Col>
        <Col sm={4} md={3}>
          <h4>{departure.tag}</h4>
          <h6>{departure.time}</h6>
          <p className="mb-2">{departure.date}</p>
          <p className="mb-2">{departure.airportName}</p>
          <p className="mb-0">{departure.terminal}</p>
        </Col>
        <Col sm={4} md={3} className="text-center my-sm-auto">
          <h5>{travelDuration}</h5>
          <div className="position-relative my-4">
            <hr className="bg-primary opacity-5 position-relative" />
            <div className="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle">
              <FaPlane className="fa-fw rtl-flip" />
            </div>
          </div>
        </Col>
        <Col sm={4} md={3}>
          <h4>{arrival.tag}</h4>
          <h6>{arrival.time}</h6>
          <p className="mb-2">{arrival.date}</p>
          <p className="mb-2">{arrival.airportName}</p>
          <p className="mb-0">{arrival.terminal}</p>
        </Col>
      </Row>
      {flightChange && <div className="bg-light rounded-2 text-center text-danger p-2 my-4">{flightChange}</div>}
    </>
  )
}

export default FlightRootDetails
