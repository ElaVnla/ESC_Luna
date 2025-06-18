import { Card, CardBody, CardTitle, Col, Image, Row } from 'react-bootstrap'
import { BsGeoAltFill, BsPeopleFill } from 'react-icons/bs'
import { FaBed, FaCalendarAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'

const TourCard = () => {
  return (
    <Card className="shadow rounded-2 overflow-hidden">
      <Row className="g-0">
        <Col sm={6} md={4}>
          <Image src={hotel3} />
        </Col>
        <Col sm={6} md={8}>
          <CardBody className="p-3">
            <CardTitle as="h5" className="card-title mb-1">
              <Link to="">Beautiful Bali with Malaysia</Link>
            </CardTitle>
            <ul className="list-inline mb-0">
              {Array.from(new Array(4)).map((_val, idx) => (
                <li key={idx} className="list-inline-item me-1 small">
                  <FaStar size={16} className="text-warning" />
                </li>
              ))}
              <li className="list-inline-item me-0 small">
                <FaStarHalfAlt size={15} className="text-warning" />
              </li>
            </ul>
            <ul className="nav nav-divider small mb-0 mt-2">
              <li className="nav-item mb-1">
                <FaCalendarAlt size={14} className="me-2" />
                April 12-17
              </li>
              <li className="nav-item mb-1">
                <FaBed size={14} className="me-2" />1 Room
              </li>
              <li className="nav-item mb-1">
                <BsPeopleFill size={14} className="me-2" />2 Guests
              </li>
              <li className="nav-item mb-1">
                <BsGeoAltFill size={14} className=" me-2" />
                From New York
              </li>
            </ul>
          </CardBody>
        </Col>
      </Row>
    </Card>
  )
}

export default TourCard
