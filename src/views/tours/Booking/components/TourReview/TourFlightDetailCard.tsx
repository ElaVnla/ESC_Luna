import { Col, Image, Row } from 'react-bootstrap'
import { type FlightRouteDetailType } from '../../data'
import { FaPlane } from 'react-icons/fa6'

import element9 from '@/assets/images/element/09.svg'

const TourFlightDetailCard = ({ arrival, departure, travelDuration }: FlightRouteDetailType) => {
  return (
    <>
      <div className="p-3 bg-light rounded-2 d-sm-flex justify-content-sm-between align-items-center mb-4">
        <h6 className="mb-0">
          {departure.placeName} - {arrival.placeName}
        </h6>
        <h6 className="fw-normal mb-0">
          <span className="text-body">Date:</span> 12 April 2022
        </h6>
      </div>
      <Row className="g-4 mb-4">
        <Col md={3}>
          <Image src={element9} className="w-80px mb-3" />
          <h6 className="fw-normal small mb-0">Phillippines Airline</h6>
        </Col>
        <Col xs={4} md={3}>
          <h5>{departure.tag}</h5>
          <h6 className="mb-0">{departure.time}</h6>
        </Col>
        <Col xs={4} md={3} className="text-center">
          <h6>{travelDuration}</h6>
          <div className="position-relative my-4">
            <hr className="bg-primary opacity-5 position-relative" />
            <div className="icon-md bg-primary text-white rounded-circle position-absolute top-50 start-50 translate-middle flex-centered">
              <FaPlane size={14} className="fa-fw" />
            </div>
          </div>
        </Col>
        <Col xs={4} md={3} className="text-end">
          <h5>{arrival.tag}</h5>
          <h6 className="mb-0">{arrival.time}</h6>
        </Col>
      </Row>
    </>
  )
}

export default TourFlightDetailCard
