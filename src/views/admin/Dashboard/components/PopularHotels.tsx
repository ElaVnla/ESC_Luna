import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { popularHotels } from '../data'
import HotelCard from './HotelCard'

const PopularHotels = () => {
  return (
    <Row className="g-4 mb-5">
      <Col xs={12}>
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Popular Hotels</h4>
          <Link to="" className="btn btn-primary-soft mb-0">
            View All
          </Link>
        </div>
      </Col>

      {popularHotels.map((hotel, idx) => {
        return (
          <Col lg={6} key={idx}>
            <HotelCard hotel={hotel} />
          </Col>
        )
      })}
    </Row>
  )
}

export default PopularHotels
