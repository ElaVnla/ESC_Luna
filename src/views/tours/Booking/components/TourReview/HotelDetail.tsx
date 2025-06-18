import { Card, CardBody, CardHeader, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { hotelDetails } from '../../data'
import { Fragment } from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

const HotelDetail = () => {
  return (
    <Card className="border">
      <CardHeader className="border-bottom d-flex justify-content-between">
        <h5 className="mb-0">Hotel Details</h5>
        <Link to="" className="btn btn-link p-0 mb-0 text-primary-hover text-reset text-decoration-underline">
          View details
        </Link>
      </CardHeader>
      <CardBody>
        {hotelDetails.map((hotel, idx) => {
          return (
            <Fragment key={idx}>
              <Row key={idx}>
                <Col sm={8}>
                  <h6>{hotel.name}</h6>
                  <h6 className="mb-0 fw-light">
                    <span className="text-secondary">Room:</span> {hotel.room}
                  </h6>
                  <ul className="list-inline mb-0">
                    {Array.from(new Array(Math.floor(hotel.rating))).map((_star, idx) => (
                      <li key={idx} className="list-inline-item me-1 small">
                        <FaStar size={16} className="text-warning" />
                      </li>
                    ))}
                    {!Number.isInteger(hotel.rating) && (
                      <li className="list-inline-item me-1 small">
                        <FaStarHalfAlt size={16} className="text-warning" />
                      </li>
                    )}
                    {hotel.rating < 5 &&
                      Array.from(new Array(5 - Math.ceil(hotel.rating))).map((_val, idx) => (
                        <li key={idx} className="list-inline-item me-1 small">
                          <FaStar size={16} />
                        </li>
                      ))}
                  </ul>
                </Col>
                <Col sm={4}>
                  <h6 className="mb-0">{hotel.date}</h6>
                  <p className="text-success mb-0">Breakfast Included</p>
                </Col>
              </Row>
              {hotelDetails.length - 1 !== idx && <hr />}
            </Fragment>
          )
        })}
      </CardBody>
    </Card>
  )
}

export default HotelDetail
